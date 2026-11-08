"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { bussolaDiferenciais, editorialMedia } from "@/data/editorial-media";

interface EditorialDiferenciaisSectionProps {
  onOpenReserva: () => void;
}

export default function EditorialDiferenciaisSection({
  onOpenReserva,
}: EditorialDiferenciaisSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [starCount, setStarCount] = useState(120);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progresso calculado: 0 quando o topo da seção toca a base do viewport,
      // 0.5 quando a seção está perfeitamente no centro,
      // 1.0 quando a base da seção sai pelo topo.
      const totalDistance = windowHeight + rect.height;
      const currentDistance = windowHeight - rect.top;
      const rawProgress = currentDistance / totalDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clamped);

      // Contador dinâmico inspirado no vídeo arq3.mp4
      if (clamped < 0.25) {
        setStarCount(120);
      } else if (clamped > 0.65) {
        setStarCount(160);
      } else {
        const factor = (clamped - 0.25) / 0.4;
        setStarCount(Math.round(120 + factor * 40));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Fórmulas de movimento e paralaxe inspiradas no vídeo arq3.mp4:
  // 1. Escala expansiva do círculo central: cresce de 0.65 a 1.02 e estabiliza em 1.0
  const centerScale = Math.min(1.02, Math.max(0.68, 0.65 + scrollProgress * 0.7));

  // 2. Satélite 1 (Badge Superior Esquerdo): paralaxe sutil
  const sat1Y = (scrollProgress - 0.5) * -28;
  const sat1X = (scrollProgress - 0.5) * -12;

  // 3. Satélite 2 (Mini Foto Inferior Direita): contra-paralaxe sutil
  const sat2Y = (scrollProgress - 0.5) * 26;
  const sat2X = (scrollProgress - 0.5) * 14;

  // 4. Métrica Esquerda (0m): desliza suavemente para sua posição
  const metricLeftY = (1 - Math.min(1, scrollProgress * 1.6)) * 18;

  // 5. Métrica Direita (+160★): desliza suavemente para sua posição
  const metricRightY = (1 - Math.min(1, scrollProgress * 1.6)) * -18;

  // 6. Pontos orbitais (Dots presentes no print do arq3.mp4)
  const dot1Y = (scrollProgress - 0.5) * -22;
  const dot2Y = (scrollProgress - 0.5) * 24;

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="w-full py-16 sm:py-24 bg-[#f8faf8] text-[#0a301a] border-t border-[#0a301a]/06 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Grande Card Arredondado com Fundo Areia Nobre (Estética Exata do Print 1 arq3.mp4) */}
        <div className="relative rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#faf8f5] via-white to-[#f5efe6] border border-[#e2eae3] shadow-xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          
          {/* Efeito de luz radial sutil ao fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#f29b2f]/06 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

          {/* Grid Principal: Coluna Editorial + Coluna Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 relative z-10">
            
            {/* Coluna Esquerda: Título Editorial e Copy (Idêntico ao texto do print arq3) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#157d40]/10 border border-[#157d40]/20 w-fit mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#157d40] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#157d40] font-semibold">
                  NOSSOS DIFERENCIAIS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#0a301a]">
                Construída por quem ama receber na praia{" "}
                <span className="font-editorial-italic font-normal text-[1.08em] text-gradient-caiçara">
                  de Ubatumirim.
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4a5c50] leading-relaxed max-w-md">
                Aqui você não é um número de reserva. É acolhido diretamente por Eliiy e Pedro, com atendimento familiar humano, mar calmo de enseada e acomodações com estrutura privativa para cozinhar e descansar com os pés na areia.
              </p>

              {/* Botão de Reserva Direta com Gradiente Caiçara */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenReserva}
                  className="group inline-flex items-center justify-between gap-6 rounded-full btn-gradient-caiçara text-white pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20 active:scale-95"
                >
                  <span>Planejar minha estadia</span>
                  <span className="w-8 h-8 rounded-full bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:scale-110">
                    ↗
                  </span>
                </button>
                <span className="text-xs text-[#788a7e] font-mono hidden sm:inline-block">
                  Tarifa direta pelo WhatsApp
                </span>
              </div>
            </div>

            {/* Coluna Direita: Arena Visual Interativa com Scroll e Expansão (Réplica arq3.mp4) */}
            <div className="lg:col-span-7 relative w-full min-h-[380px] sm:min-h-[460px] flex flex-col sm:flex-row items-center justify-center py-6 select-none">
              
              {/* Pontos de Órbita Decorativos (Dots presentes no print arq3) - Desktop */}
              <div
                className="absolute left-[10%] top-[28%] w-2.5 h-2.5 rounded-full bg-[#0a301a] pointer-events-none hidden sm:block transition-transform duration-200"
                style={{ transform: `translate3d(0, ${dot1Y}px, 0)` }}
              />
              <div
                className="absolute right-[12%] bottom-[24%] w-2.5 h-2.5 rounded-full bg-[#f29b2f] pointer-events-none hidden sm:block transition-transform duration-200"
                style={{ transform: `translate3d(0, ${dot2Y}px, 0)` }}
              />
              <div
                className="absolute left-[32%] bottom-[14%] w-1.5 h-1.5 rounded-full bg-[#157d40]/70 pointer-events-none hidden sm:block"
              />
              <div
                className="absolute right-[30%] top-[16%] w-2 h-2 rounded-full bg-[#7abcd5]/80 pointer-events-none hidden sm:block"
              />

              {/* Satélite 1: Pílula "100% Mar Calmo" (Superior Esquerdo) - Desktop */}
              <div
                className="hidden sm:block absolute top-6 sm:top-8 left-4 sm:left-8 lg:left-10 z-20 transition-transform duration-300 pointer-events-none"
                style={{
                  transform: `translate3d(${sat1X}px, ${sat1Y}px, 0)`,
                }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a301a]/95 text-white border border-white/20 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#7abcd5] animate-ping" />
                  <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wide">
                    100% Mar Calmo
                  </span>
                </div>
              </div>

              {/* Satélite 2: Mini Foto da Enseada (Inferior Direito) - Desktop */}
              <div
                className="hidden sm:block absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-10 z-20 transition-transform duration-300 pointer-events-none"
                style={{
                  transform: `translate3d(${sat2X}px, ${sat2Y}px, 0)`,
                }}
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-xl ring-2 ring-[#157d40]/30">
                  <Image
                    src={editorialMedia.praiaRestauranteCapela.src}
                    alt="Águas calmas de Ubatumirim"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
              </div>

              {/* Métrica 1: Esquerda Inferior ("0m Pé na Areia") - Desktop */}
              <div
                className="hidden sm:block absolute bottom-6 sm:bottom-10 left-4 sm:left-8 text-left max-w-[140px] sm:max-w-[170px] z-20 transition-transform duration-300"
                style={{
                  transform: `translate3d(0, ${metricLeftY}px, 0)`,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a301a] mb-1.5 shadow-sm" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gradient-caiçara block leading-none">
                  0<span className="text-xl sm:text-2xl text-[#157d40]">m</span>
                </span>
                <p className="text-[11px] sm:text-xs text-[#4a5c50] mt-1 leading-snug">
                  Pé na areia real, sem rodovia nem travessia.
                </p>
              </div>

              {/* CÍRCULO CENTRAL EXPANSIVO: Foto de Dona Zita e Família */}
              {/* No desktop e no mobile: cresce dinamicamente com o scroll */}
              <div
                className="relative rounded-full overflow-hidden border-4 sm:border-6 border-white shadow-[0_20px_50px_-10px_rgba(10,48,26,0.25)] ring-4 sm:ring-8 ring-[#157d40]/10 transition-transform duration-300 ease-out z-10 my-4 sm:my-0"
                style={{
                  transform: `scale(${centerScale})`,
                  width: "clamp(200px, 26vw, 300px)",
                  height: "clamp(200px, 26vw, 300px)",
                }}
              >
                <Image
                  src={editorialMedia.quemSomosVertical.src}
                  alt="Recepção familiar na Pousada e Restaurante Eliiy Zita Pedro"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  priority={false}
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Legenda interna discreta na base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a301a]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-5 inset-x-0 text-center px-2">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#f8faf8] font-semibold drop-shadow-md">
                    Eliiy & Pedro · Família Anfitriã
                  </span>
                  <span className="block text-[9px] text-[#f5efe6]/80 font-sans mt-0.5">
                    Anfitriões desde 2012
                  </span>
                </div>
              </div>

              {/* Métrica 2: Direita Superior ("+160★ Avaliações com Contador Dinâmico") - Desktop */}
              <div
                className="hidden sm:block absolute top-6 sm:top-10 right-4 sm:right-8 text-left max-w-[140px] sm:max-w-[170px] z-20 transition-transform duration-300"
                style={{
                  transform: `translate3d(0, ${metricRightY}px, 0)`,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#f29b2f] mb-1.5 shadow-sm" />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gradient-caiçara block leading-none font-sans">
                  +{starCount}
                  <span className="text-xl sm:text-2xl text-[#f29b2f] ml-0.5">★</span>
                </span>
                <p className="text-[11px] sm:text-xs text-[#4a5c50] mt-1 leading-snug">
                  Avaliações 4.8 no Google e Booking.
                </p>
              </div>

              {/* Bloco Exclusivo Mobile: Métricas e Badges Lado a Lado Abaixo da Foto */}
              <div className="sm:hidden grid grid-cols-2 gap-3 w-full mt-3 pt-3 border-t border-[#e2eae3]/60">
                <div className="p-3 rounded-2xl bg-white/80 border border-[#e2eae3] shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#0a301a] mb-1" />
                  <span className="text-2xl font-medium tracking-tight text-gradient-caiçara block leading-none">
                    0<span className="text-base text-[#157d40]">m</span>
                  </span>
                  <p className="text-[10px] text-[#4a5c50] mt-1 leading-tight">
                    Pé na areia real
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/80 border border-[#e2eae3] shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#f29b2f] mb-1" />
                  <span className="text-2xl font-medium tracking-tight text-gradient-caiçara block leading-none">
                    +{starCount}<span className="text-base text-[#f29b2f]">★</span>
                  </span>
                  <p className="text-[10px] text-[#4a5c50] mt-1 leading-tight">
                    Nota 4.8 no Google
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Cards dos 4 Diferenciais em Grid Limpo e Elegante com Efeito Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#e2eae3]/80 relative z-10">
            {bussolaDiferenciais.map((item) => (
              <div
                key={item.num}
                className="group rounded-[20px] sm:rounded-[24px] bg-white/90 hover:bg-white border border-[#e2eae3] p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#157d40] px-2 py-0.5 rounded-md bg-[#157d40]/08">
                      [{item.num}]
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#f29b2f] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-2 text-[#0a301a]">
                    {item.titulo}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4a5c50] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2eae3]/50 flex items-center justify-between text-[11px] font-mono text-[#788a7e]">
                  <span>Ubatumirim, SP</span>
                  <span className="group-hover:text-[#157d40] group-hover:translate-x-1 transition-all font-sans font-bold">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
