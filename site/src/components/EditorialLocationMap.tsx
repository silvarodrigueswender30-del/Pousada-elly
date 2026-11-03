"use client";

import React, { useState } from "react";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-23.3486585,-44.928734";
const WAZE_URL =
  "https://waze.com/ul?ll=-23.3486585,-44.928734&navigate=yes";
const WHATSAPP_TRAJETO_URL =
  "https://wa.me/5512992323656?text=Ol%C3%A1%20Dona%20Zita!%20Estou%20no%20site%20da%20Pousada%20Eliiy%20Zita%20Pedro%20e%20gostaria%20de%20orienta%C3%A7%C3%B5es%20sobre%20o%20trajeto%20at%C3%A9%20a%20Praia%20do%20Ubatumirim.";

export function EditorialLocationMap() {
  const [zoomScale, setZoomScale] = useState(1);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(2.1, Number((prev + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(1, Number((prev - 0.25).toFixed(2))));
  };

  return (
    <div
      id="mapa-ubatumirim"
      className="rounded-[28px] bg-[#f8faf8] text-[#0a301a] border border-[#e2eae3] p-6 sm:p-10 lg:p-12 shadow-sm"
    >
      {/* Editorial Section Header (Aligned with the reference print + current editorial design) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7 sm:mb-9">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#157d40] font-semibold block mb-3">
            • LOCALIZAÇÃO & TRAJETO · BR-101 NORTE (KM 16)
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.06] text-[#0a301a]">
            Seu refúgio protegido em{" "}
            <span className="font-editorial-italic font-normal text-[1.1em]">
              Ubatuba.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
            Localizada no Canto do Iriri, na Praia do Ubatumirim. Um litoral
            preservado e de águas calmas, com acesso seguro pela rodovia
            Rio-Santos (BR-101) e estacionamento privativo gratuito na pousada.
          </p>
        </div>

        {/* Quick External GPS Pills on Top-Right */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5efe6] hover:bg-[#0a301a] hover:text-[#f8faf8] border border-[#e2eae3] px-4 py-2 text-xs font-medium text-[#0a301a] transition-colors"
          >
            <span>Google Maps</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5efe6] hover:bg-[#0a301a] hover:text-[#f8faf8] border border-[#e2eae3] px-4 py-2 text-xs font-medium text-[#0a301a] transition-colors"
          >
            <span>Abrir no Waze</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Main Rounded Map Stage (Matches the print layout with Floating Left Card + Center Pin + Positron Coastline) */}
      <div className="relative w-full rounded-[24px] overflow-hidden border border-[#e2eae3] bg-[#f5efe6] shadow-inner min-h-[550px] sm:min-h-[490px] flex flex-col justify-between">
        {/* LAYER 1: High-Precision Real Cartographic Canvas with Streets, Outlines & Ocean (Matches Print 2 from arq2.mp4) */}
        <div
          aria-hidden="true"
          style={{
            transform: `scale(${zoomScale})`,
            transformOrigin: "50% 50%",
          }}
          className="absolute inset-0 pointer-events-none select-none overflow-hidden transition-transform duration-500 ease-out"
        >
          {/* Real Map Tiles of Ubatumirim with Streets, Coastal Names & Rio-Santos */}
          <img
            src="/media/editorial/mapa-real-ubatumirim.webp"
            alt="Mapa cartográfico com ruas da Praia do Ubatumirim"
            width={1024}
            height={768}
            className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98]"
          />
          {/* Subtle soft gradient overlay on top-left to integrate cleanly with the floating card */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* LAYER 2: Center Location Pin on Ubatumirim Beach (Styled exactly like Print 2) */}
        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir localização exata da Pousada Eliiy Zita Pedro no Google Maps"
          className="group absolute left-[56%] top-[52%] sm:left-[54%] sm:top-[48%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-14 h-14 rounded-full bg-[#157d40]/30 animate-ping" />
            <div className="w-12 h-12 rounded-full bg-[#0a301a] text-[#f8faf8] border-2 border-[#f8faf8] shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-xs font-bold font-mono tracking-tighter text-[#f29b2f]">
                ez
              </span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#0a301a] text-white text-[9px] font-mono tracking-wider uppercase mt-1.5 shadow-md">
            Pousada Eliiy Zita
          </span>
        </a>

        {/* LAYER 3: Floating Left Location Card (Inspired by arq2.mp4: sec 20s-22s, styled in our Editorial V1 System) */}
        <div className="relative z-20 m-4 sm:m-6 sm:w-[350px] rounded-[24px] bg-white/95 backdrop-blur-md border border-[#e2eae3] p-5 sm:p-7 shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eaf5ee] text-[#157d40] text-[10px] font-mono uppercase tracking-[0.18em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#157d40] animate-pulse" />
              DESTINO EXCLUSIVO
            </span>
            <span className="text-[10px] font-mono text-[#4a5c50] tracking-wider uppercase">
              KM 16 BR-101
            </span>
          </div>

          <h3 className="mt-3.5 text-lg sm:text-xl font-semibold text-[#0a301a] tracking-tight">
            Pousada Eliiy Zita Pedro
          </h3>

          <div className="mt-2 text-xs text-[#4a5c50] leading-relaxed space-y-1">
            <p className="flex items-center gap-1.5">
              <span>📍</span>
              <span>Rua Maria José de Jesus, 3005/3006</span>
            </p>
            <p className="font-medium text-[#0a301a]/90 pl-5">
              Canto do Iriri · Praia do Ubatumirim
            </p>
            <p className="text-[11px] text-[#788a7e] pl-5">
              Ubatuba - SP · Estacionamento privativo
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0a301a] text-[#f8faf8] hover:bg-[#157d40] py-3 px-4 text-xs font-semibold transition-all shadow-md hover:scale-[1.01]"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>Traçar Rota no Google Maps ↗</span>
            </a>

            <a
              href={WHATSAPP_TRAJETO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#f8faf8] hover:bg-[#f5efe6] text-[#0a301a] border border-[#e2eae3] py-2.5 px-4 text-xs font-medium transition-colors"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span>Dúvidas de Trajeto (WhatsApp)</span>
            </a>
          </div>
        </div>

        {/* LAYER 4: Zoom Controls (+ / -) & Bottom-Right Legal Attribution */}
        <div className="relative z-20 flex items-end justify-between p-4 sm:p-5 pointer-events-none mt-auto">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#e2eae3] text-[11px] text-[#4a5c50] pointer-events-auto">
            <span>Coordenadas oficiais: 23°20&apos;55.2&quot;S 44°55&apos;43.4&quot;W</span>
          </div>

          <div className="flex flex-col items-end gap-2.5 ml-auto pointer-events-auto">
            {/* Custom + / - Zoom Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Aproximar mapa"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#0a301a] hover:text-[#f8faf8] border border-[#e2eae3] text-[#0a301a] text-sm font-semibold shadow-md flex items-center justify-center transition-colors cursor-pointer"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Afastar mapa"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#0a301a] hover:text-[#f8faf8] border border-[#e2eae3] text-[#0a301a] text-sm font-semibold shadow-md flex items-center justify-center transition-colors cursor-pointer"
              >
                −
              </button>
            </div>

            {/* Required OpenStreetMap + CARTO Attribution (Exact match to bottom-right of print) */}
            <div className="px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-xs border border-[#e2eae3] text-[10px] text-[#4a5c50]">
              ©{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0a301a]"
              >
                OpenStreetMap
              </a>{" "}
              contributors, ©{" "}
              <a
                href="https://carto.com/attributions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0a301a]"
              >
                CARTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
