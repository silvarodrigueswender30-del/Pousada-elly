"use client";

import { useState } from "react";
import Image from "next/image";

interface Foto {
  url: string;
  alt: string;
  origem: string;
}

interface RoomGalleryInteractiveProps {
  fotos: Foto[];
  roomName: string;
}

export function RoomGalleryInteractive({ fotos, roomName }: RoomGalleryInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!fotos || fotos.length === 0) return null;

  const currentFoto = fotos[activeIndex] || fotos[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* PALCO PRINCIPAL DA FOTO (16:9) */}
      <div className="relative w-full aspect-[16/9] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#141614] shadow-lg group">
        <Image
          src={currentFoto.url}
          alt={currentFoto.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-opacity duration-500 ease-out"
        />

        {/* Gradiente sutil inferior para leitura */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a301a]/80 via-transparent to-black/20"
        />

        {/* Badge superior esquerdo: Número da foto */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#141614]/80 backdrop-blur-md text-[#F4F4F0] text-[11px] font-mono font-medium tracking-wider">
            {activeIndex + 1} / {fotos.length}
          </span>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#f29b2f] text-[#0a301a] text-[11px] font-semibold tracking-wide">
            Fotos Reais da Pousada
          </span>
        </div>

        {/* Botão de expansão (Lightbox) superior direito */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="Ver foto em tela cheia"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#141614]/70 hover:bg-[#141614] text-[#F4F4F0] backdrop-blur-md transition-all shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#f29b2f]"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>

        {/* Setas de Navegação (Desktop e Hover) */}
        {fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#0a301a] flex items-center justify-center shadow-md backdrop-blur-xs opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
            >
              <span className="text-lg font-bold leading-none">‹</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#0a301a] flex items-center justify-center shadow-md backdrop-blur-xs opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
            >
              <span className="text-lg font-bold leading-none">›</span>
            </button>
          </>
        )}

        {/* Legenda na base do palco principal */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <p className="text-sm font-medium leading-snug drop-shadow-md text-white/95 line-clamp-2">
            {currentFoto.alt}
          </p>
          <p className="text-[11px] text-white/70 font-mono mt-0.5">{currentFoto.origem}</p>
        </div>
      </div>

      {/* FAIXA DE MINIATURAS NAVEGÁVEIS (THUMBNAILS) */}
      <div
        role="tablist"
        aria-label="Miniaturas da galeria"
        className="grid grid-cols-4 gap-2 sm:gap-3"
      >
        {fotos.map((foto, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              aria-label={`Ver foto ${idx + 1}: ${foto.alt}`}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[16/9] rounded-[14px] sm:rounded-[18px] overflow-hidden transition-all duration-200 focus:outline-hidden ${
                isActive
                  ? "ring-2 ring-[#077c37] ring-offset-2 ring-offset-[#f8faf8] scale-[1.02] shadow-sm"
                  : "opacity-70 hover:opacity-100 hover:scale-[1.01]"
              }`}
            >
              <Image
                src={foto.url}
                alt=""
                fill
                sizes="(max-width: 640px) 25vw, 15vw"
                className="object-cover"
              />
              {isActive && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#077c37]/15 border-2 border-[#077c37] rounded-[14px] sm:rounded-[18px]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* MODAL LIGHTBOX EM TELA CHEIA */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotos de ${roomName}`}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
        >
          {/* Topo do Lightbox */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full">
            <span className="text-sm font-mono tracking-wider">
              {roomName} · Foto {activeIndex + 1} de {fotos.length}
            </span>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-lg font-bold transition-colors"
              aria-label="Fechar galeria"
            >
              ✕
            </button>
          </div>

          {/* Imagem Central no Lightbox */}
          <div className="relative flex-1 max-w-6xl mx-auto w-full flex items-center justify-center my-4">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={currentFoto.url}
                alt={currentFoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Setas no modal */}
            {fotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white text-2xl flex items-center justify-center transition-all"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white text-2xl flex items-center justify-center transition-all"
                  aria-label="Próxima foto"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Rodapé do Lightbox com miniaturas */}
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-white/80 text-sm text-center mb-3">{currentFoto.alt}</p>
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
              {fotos.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-16 h-10 sm:w-20 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    i === activeIndex
                      ? "border-[#f29b2f] scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={f.url} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
