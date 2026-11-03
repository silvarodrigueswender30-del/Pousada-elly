"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Array canônico de imagens para os cards de quarto (1200x900 WebP 4:3)
 */
export const ROOM_CARD_IMAGES: string[] = [
  "/media/quartos/quarto-card-1.webp",
  "/media/quartos/quarto-card-2.webp",
  "/media/quartos/quarto-card-3.webp",
];

export interface RoomImageRotatorProps {
  /**
   * Lista de imagens para rotacionar. Se omitido, usa ROOM_CARD_IMAGES.
   */
  images?: string[];
  /**
   * Nome da unidade para acessibilidade e alt descritivo em português.
   */
  unitName: string;
  /**
   * Capacidade textual para o badge (ex.: "ATÉ 5 PESSOAS").
   */
  capacidade: string;
  /**
   * Categoria da unidade ("Chale" | "Suite" etc.).
   */
  categoria: string;
  /**
   * Índice do card no carrossel para escalonar o início da rotação (idx * 1.2s).
   */
  cardIndex: number;
}

export function RoomImageRotator({
  images = ROOM_CARD_IMAGES,
  unitName,
  capacidade,
  categoria,
  cardIndex,
}: RoomImageRotatorProps) {
  const imageList = images && images.length > 0 ? images : ROOM_CARD_IMAGES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasInitialFiredRef = useRef(false);

  // 1. Detectar prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 2. IntersectionObserver (só rotaciona quando o card está visível)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3. Monitorar visibilidade da aba (pausar quando aba inativa)
  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleVisibilityChange = () => {
      setIsTabActive(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // 4. Rotação a cada 4.5s com transição crossfade e delay inicial escalonado por card
  useEffect(() => {
    if (
      imageList.length <= 1 ||
      prefersReducedMotion ||
      !isVisible ||
      !isTabActive ||
      isHoveredOrFocused
    ) {
      return;
    }

    const delay = hasInitialFiredRef.current
      ? 4500
      : (cardIndex * 1200) % 4500 || 4500;

    const timer = setTimeout(() => {
      hasInitialFiredRef.current = true;
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    imageList.length,
    prefersReducedMotion,
    isVisible,
    isTabActive,
    isHoveredOrFocused,
    cardIndex,
  ]);

  const activeIdx = prefersReducedMotion ? 0 : currentIndex;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocus={() => setIsHoveredOrFocused(true)}
      onBlur={() => setIsHoveredOrFocused(false)}
      tabIndex={0}
      aria-label={`${unitName} — carrossel de fotos`}
      className="relative aspect-[4/3] bg-[#0a301a] overflow-hidden rounded-t-[24px] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f29b2f]"
    >
      {/* Camada de Imagens com Crossfade de 700ms */}
      {imageList.map((src, i) => {
        const isCurrent = i === activeIdx;
        return (
          <div
            key={src}
            data-index={i}
            data-active={isCurrent}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isCurrent ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`Quarto do ${unitName}, foto ${i + 1} de ${imageList.length}`}
              fill
              sizes="(max-width: 640px) 290px, 330px"
              priority={i === 0 && cardIndex < 2}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        );
      })}

      {/* Gradiente de leitura na base da foto em Verde Noite (linear-gradient 0deg, rgba(10,48,26,.55) -> transparente 45%) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 48, 26, 0.55) 0%, rgba(10, 48, 26, 0) 45%)",
        }}
      />

      {/* Badge de Capacidade no canto superior esquerdo */}
      <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-wider text-white uppercase">
        {capacidade}
      </span>

      {/* Indicador de 3 pontos no canto superior direito (onde ficava o play) */}
      {imageList.length > 1 && (
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 z-20 px-2.5 py-1 rounded-full bg-[#0a301a]/40 backdrop-blur-sm pointer-events-none"
          aria-hidden="true"
        >
          {imageList.map((_, dotIdx) => {
            const isDotActive = dotIdx === activeIdx;
            return (
              <span
                key={dotIdx}
                data-dot-index={dotIdx}
                data-active={isDotActive}
                className={`block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isDotActive
                    ? "bg-[#f29b2f] scale-110 shadow-[0_0_6px_rgba(242,155,47,0.6)]"
                    : "bg-[#f5efe6]/45"
                }`}
              />
            );
          })}
        </div>
      )}

      {/* Legenda na base da foto */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-20">
        <span className="font-semibold">
          {categoria === "Chale" ? "Chalé c/ Cozinha" : "Suíte"}
        </span>
        <span className="text-[11px] opacity-80">Pé na areia</span>
      </div>
    </div>
  );
}
