"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoCardProps {
  mp4: string;
  poster: string;
  title: string;
  subtitle?: string;
  originLabel?: string;
  aspectClass?: string;
}

export function LazyVideoCard({
  mp4,
  poster,
  title,
  subtitle,
  originLabel,
  aspectClass = "aspect-[9/16]",
}: LazyVideoCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reducedOrLowData, setReducedOrLowData] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navConn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const lowData = Boolean(
      navConn?.saveData ||
        navConn?.effectiveType === "slow-2g" ||
        navConn?.effectiveType === "2g"
    );

    if (prefersReduced || lowData) {
      setReducedOrLowData(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (videoRef.current) {
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          } else if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { rootMargin: "80px 0px", threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const togglePlay = () => {
    if (!shouldLoad) {
      setShouldLoad(true);
      setTimeout(() => {
        videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
      }, 60);
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <figure
      ref={containerRef}
      className="group relative rounded-2xl overflow-hidden bg-[#0c2617] border border-[#dce5dd] shadow-xs flex flex-col"
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#0c2617]`}>
        <video
          ref={videoRef}
          poster={poster}
          muted
          playsInline
          loop
          preload="none"
          className="w-full h-full object-cover"
        >
          {shouldLoad && !reducedOrLowData && <source src={mp4} type="video/mp4" />}
        </video>

        {/* Gradiente inferior sutil apenas onde repousa a legenda */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Controle discreto Pausar / Reproduzir (texto visível compatível com acessibilidade) */}
        <button
          type="button"
          onClick={togglePlay}
          className="absolute top-3.5 right-3.5 z-10 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/85 text-white text-[11px] font-semibold border border-white/25 transition-colors"
        >
          {isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        </button>

        {/* Texto sobreposto na base do vídeo */}
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1">
          <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              {subtitle}
            </p>
          )}
          {originLabel && (
            <p className="text-[11px] text-emerald-200 font-medium pt-1">
              {originLabel}
            </p>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
