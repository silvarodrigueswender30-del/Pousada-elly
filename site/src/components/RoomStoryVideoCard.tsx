"use client";

import { useEffect, useRef, useState } from "react";

interface RoomStoryVideoCardProps {
  mp4: string;
  poster: string;
  title: string;
  subtitle: string;
  duracaoSeg: number;
}

export function RoomStoryVideoCard({
  mp4,
  poster,
  title,
  subtitle,
  duracaoSeg,
}: RoomStoryVideoCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

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
  }, []);

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

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] mx-auto rounded-[28px] overflow-hidden bg-[#141614] shadow-xl border border-[#0a301a]/15 flex flex-col group select-none"
    >
      {/* Container 9:16 Estilo Stories / Reels */}
      <div
        className="relative w-full aspect-[9/16] overflow-hidden cursor-pointer bg-black"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={mp4}
          poster={poster}
          muted={isMuted}
          playsInline
          loop
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        />

        {/* Barra de progresso tipo Stories no topo */}
        <div className="absolute top-3 left-3 right-3 z-20 h-1 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f29b2f] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header do Stories */}
        <div className="absolute top-6 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-[#141614]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#f29b2f] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
              Tour Real da Dona Zita
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

        {/* Botão Play central flutuante se pausado */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <div className="w-16 h-16 rounded-full bg-[#f29b2f] text-[#0a301a] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 pl-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Gradiente inferior para leitura de textos */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a301a]/95 via-[#0a301a]/30 to-transparent"
        />

        {/* Rodapé do Stories com legenda autêntica */}
        <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-[#f29b2f] uppercase tracking-wider">
              Vídeo Vertical 9:16 · {duracaoSeg}s
            </span>
          </div>
          <h3 className="text-sm font-semibold leading-tight drop-shadow-sm text-white/95">
            {title}
          </h3>
          <p className="text-xs text-white/80 line-clamp-2 mt-1 leading-snug">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
