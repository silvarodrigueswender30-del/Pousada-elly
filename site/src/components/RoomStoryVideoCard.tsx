"use client";

import { useEffect, useRef, useState } from "react";

export interface VideoStoryItem {
  id: string;
  label: string;
  mp4: string;
  poster: string;
  title: string;
  subtitle: string;
  duracaoSeg: number;
}

interface RoomStoryVideoCardProps {
  videos: VideoStoryItem[];
  roomName: string;
}

export function RoomStoryVideoCard({ videos, roomName }: RoomStoryVideoCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentVideo = videos[activeIndex] || videos[0];

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current
              ?.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeIndex]);

  // Reset video state when switching video
  useEffect(() => {
    setProgress(0);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeIndex]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleVideoEnded = () => {
    if (videos.length > 1) {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }
  };

  if (!videos || videos.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] mx-auto flex flex-col gap-2.5 select-none"
    >
      {/* SELETOR DE VÍDEOS EM PÍLULAS ESTILO STORIES */}
      {videos.length > 1 && (
        <div
          role="tablist"
          aria-label="Vídeos disponíveis"
          className="flex items-center justify-center gap-1.5 p-1 rounded-full bg-[#EAEAE4] border border-[#141614]/10 shadow-xs"
        >
          {videos.map((vid, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={vid.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0a301a] text-white font-semibold shadow-xs"
                    : "text-[#4a5c50] hover:text-[#0a301a] hover:bg-[#dce5dd]"
                }`}
              >
                {vid.label}
              </button>
            );
          })}
        </div>
      )}

      {/* CONTAINER 9:16 ESTILO STORIES / REELS */}
      <div className="relative w-full rounded-[28px] overflow-hidden bg-[#141614] shadow-xl border border-[#0a301a]/15 flex flex-col group">
        <div
          className="relative w-full aspect-[9/16] overflow-hidden cursor-pointer bg-black"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={currentVideo.mp4}
            poster={currentVideo.poster}
            muted={isMuted}
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          />

          {/* BARRAS SEGMENTADAS DE PROGRESSO ESTILO STORIES */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center gap-1.5">
            {videos.map((_, idx) => (
              <div
                key={idx}
                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-[#f29b2f] transition-all duration-100 ease-linear rounded-full"
                  style={{
                    width:
                      idx < activeIndex
                        ? "100%"
                        : idx === activeIndex
                        ? `${progress}%`
                        : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* HEADER DO STORIES */}
          <div className="absolute top-6 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 bg-[#141614]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#f29b2f] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
                Tour Real · Pousada Eliiy Zita Pedro
              </span>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
              className="pointer-events-auto w-8 h-8 rounded-full bg-[#141614]/80 backdrop-blur-md text-white flex items-center justify-center text-xs border border-white/10 hover:bg-[#141614] transition-all"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>

          {/* BOTÃO PLAY CENTRAL FLUTUANTE SE PAUSADO */}
          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
              <div className="w-16 h-16 rounded-full bg-[#f29b2f] text-[#0a301a] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 pl-1">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* GRADIENTE INFERIOR PARA LEITURA DE TEXTOS */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a301a]/95 via-[#0a301a]/30 to-transparent"
          />

          {/* RODAPÉ DO STORIES COM LEGENDA AUTÊNTICA */}
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-[#f29b2f] uppercase tracking-wider">
                {currentVideo.label} · {currentVideo.duracaoSeg}s
              </span>
            </div>
            <h3 className="text-sm font-semibold leading-tight drop-shadow-sm text-white/95">
              {currentVideo.title}
            </h3>
            <p className="text-xs text-white/80 line-clamp-2 mt-1 leading-snug">
              {currentVideo.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
