"use client";

import { useEffect, useRef, useState } from "react";

export function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<unknown>(null);
  const [activateWebGL, setActivateWebGL] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const coordinates: [number, number] = [-44.928734, -23.3486585];
  const googleMapsUrl =
    "https://www.google.com/maps/place/Pousada+e+Restaurante+EIiiy+Zita+Pedro/@-23.3486585,-44.928734,17z/";
  const wazeUrl =
    "https://waze.com/ul?ll=-23.3486585,-44.928734&navigate=yes";
  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%20Dona%20Zita!%20Gostaria%20de%20orienta%C3%A7%C3%B5es%20de%20como%20chegar%20na%20Pousada%20Eliiy%20Zita%20Pedro%20em%20Ubatumirim.";

  useEffect(() => {
    if (!activateWebGL || mapInstance.current || !mapContainer.current) return;

    async function loadMapLibre() {
      try {
        if (!document.querySelector('link[href*="maplibre-gl.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css";
          document.head.appendChild(link);
        }

        let maplibregl = (window as unknown as { maplibregl?: { Map: new (opts: Record<string, unknown>) => { on: (ev: string, fn: () => void) => void }; Marker: new (opts: Record<string, unknown>) => { setLngLat: (c: [number, number]) => { addTo: (m: unknown) => void } } } }).maplibregl;
        if (!maplibregl) {
          await new Promise<void>((resolve, reject) => {
            const s = document.createElement("script");
            s.src = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js";
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error("MapLibre load error"));
            document.head.appendChild(s);
          });
          maplibregl = (window as unknown as { maplibregl?: { Map: new (opts: Record<string, unknown>) => { on: (ev: string, fn: () => void) => void }; Marker: new (opts: Record<string, unknown>) => { setLngLat: (c: [number, number]) => { addTo: (m: unknown) => void } } } }).maplibregl;
        }

        if (!maplibregl || !mapContainer.current) return;

        const map = new maplibregl.Map({
          container: mapContainer.current,
          style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
          center: coordinates,
          zoom: 14.8,
          scrollZoom: false,
          attributionControl: false,
        });

        map.on("load", () => {
          setMapReady(true);
          new maplibregl!.Marker({ color: "#077c37" })
            .setLngLat(coordinates)
            .addTo(map);
        });

        mapInstance.current = map;
      } catch {
        setActivateWebGL(false);
      }
    }

    loadMapLibre();
  }, [activateWebGL]);

  const passosChegada = [
    {
      passo: "Passo 1 · Rodovia Rio-Santos (BR-101 Norte)",
      desc: "Siga pela BR-101 no sentido norte de Ubatuba (direção Paraty) até a entrada sinalizada da Praia do Ubatumirim.",
    },
    {
      passo: "Passo 2 · Acesso até a Orla de Ubatumirim",
      desc: "Desça pela via de acesso da comunidade costeira até chegar à beira da praia, na Rua Maria José de Jesus, nº 3006.",
    },
    {
      passo: "Passo 3 · Estacionamento Interno na Pousada",
      desc: "Entre diretamente no pátio privativo da Pousada Eliiy Zita Pedro (estacionamento gratuito para hóspedes).",
    },
  ];

  return (
    <section
      id="localizacao"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f5efe6] border-b border-[#e4dccf]"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dfd6c7]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
              06 · Localização & Como Chegar
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
              Rua Maria José de Jesus, 3006 — Praia do Ubatumirim, Ubatuba/SP.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#3b4d41] leading-relaxed">
            Localizada na região norte de Ubatuba, a enseada do Ubatumirim preserva o sossego caiçara a 1,3 km de caminhada pela areia até a Praia da Justa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna Esquerda: Como Chegar em 3 Passos */}
          <div className="lg:col-span-5 bg-white rounded-[24px] border border-[#dfd6c7] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#0a301a]">
                Roteiro de Acesso em 3 Passos
              </h3>
              <div className="divide-y divide-[#ece6dc]">
                {passosChegada.map((p, i) => (
                  <div key={i} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <span className="text-xs font-bold text-[#077c37] block">
                      {p.passo}
                    </span>
                    <p className="text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-[#ece6dc]">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#077c37] hover:bg-[#0e4f29] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full transition-colors"
                >
                  Abrir Google Maps ↗
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#eef3ef] hover:bg-[#dce5dd] text-[#0a301a] font-semibold text-xs sm:text-sm py-3 px-4 rounded-full transition-colors"
                >
                  Abrir no Waze ↗
                </a>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-xs sm:text-sm py-3 px-4 rounded-full transition-colors"
              >
                Pedir Localização pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna Direita: Mapa Carregado Sob Demanda (Zero peso WebGL inicial) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] rounded-[24px] overflow-hidden border border-[#dfd6c7] bg-[#dce8df] flex flex-col justify-between">
            {activateWebGL ? (
              <div ref={mapContainer} className="w-full h-full min-h-[340px] sm:min-h-[420px]" />
            ) : (
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0c3b1e] via-[#114b28] to-[#1a5c48] text-white">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#f29b2f]">
                    Coordenadas GPS Verificadas · 23°20&apos;55.2&quot;S 44°55&apos;43.4&quot;W
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Enseada da Praia do Ubatumirim · Litoral Norte de Ubatuba
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 max-w-lg leading-relaxed">
                    Para economizar dados móveis em sinal de praia, o mapa interativo em 3D/WebGL só é carregado quando você solicita abaixo — ou abra diretamente no seu aplicativo de GPS preferido.
                  </p>
                </div>

                <div className="bg-black/35 backdrop-blur-xs border border-white/15 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs text-emerald-200 font-semibold block">
                      Pousada e Restaurante Eliiy Zita Pedro
                    </span>
                    <span className="text-xs text-white/85 block">
                      0 m da areia · 1,3 km da Praia da Justa · 3,4 km do Parque Estadual da Serra do Mar
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivateWebGL(true)}
                    className="shrink-0 bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-colors"
                  >
                    Carregar Mapa Interativo
                  </button>
                </div>
              </div>
            )}
            {activateWebGL && !mapReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0c3b1e]/80 text-white text-sm font-medium">
                Carregando mapa da Praia do Ubatumirim...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
