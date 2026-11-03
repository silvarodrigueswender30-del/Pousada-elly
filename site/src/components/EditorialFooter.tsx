import React from "react";
import Link from "next/link";
import { editorialMedia } from "@/data/editorial-media";

export function EditorialFooter() {
  return (
    <footer className="w-full bg-[#082112] text-[#f8faf8] overflow-hidden select-none">
      {/* Upper Navigation & Brand Pillars */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-7 h-7 rounded-lg bg-[#f29b2f] text-[#0a301a] flex items-center justify-center text-xs font-bold shadow-md">
                ez
              </span>
              <span className="text-sm font-semibold tracking-wide text-white uppercase">
                Pousada Eliiy Zita Pedro
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug">
              Famílias no centro.
              <br />
              <span className="font-editorial-italic font-normal text-gradient-caiçara-light">
                Praia com propósito e acolhimento.
              </span>
            </h3>
            <p className="mt-3.5 text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              Hospitalidade pé na areia genuína na Praia do Ubatumirim. Mar calmo, culinária caiçara fresca em restaurante próprio e atendimento direto com quem cuida da pousada.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <a
                href="https://wa.me/5512992323656"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-semibold transition-colors shadow-md"
              >
                <span>WhatsApp Oficial</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pousada+e+Restaurante+Eliiy+Zita+Pedro+Ubatumirim+Ubatuba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
              >
                <span>Google Maps (4.8 ★)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f29b2f] font-semibold block mb-4">
              • NAVEGAÇÃO DO SITE
            </span>
            <ul className="space-y-2.5 text-sm sm:text-base font-medium text-white/85">
              <li>
                <Link href="/#inicio" className="hover:text-[#f29b2f] transition-colors">
                  Início (Hero)
                </Link>
              </li>
              <li>
                <Link href="/#manifesto" className="hover:text-[#f29b2f] transition-colors">
                  Manifesto & Tradição
                </Link>
              </li>
              <li>
                <Link href="/#numeros-autoridade" className="hover:text-[#f29b2f] transition-colors">
                  Diferenciais em Números
                </Link>
              </li>
              <li>
                <Link href="/#acomodacoes" className="hover:text-[#f29b2f] transition-colors">
                  Chalés e Acomodações
                </Link>
              </li>
              <li>
                <Link href="/#capela" className="hover:text-[#f29b2f] transition-colors">
                  A Capela & Celebrações
                </Link>
              </li>
              <li>
                <Link href="/#mapa-ubatumirim" className="hover:text-[#f29b2f] transition-colors">
                  Localização & Como Chegar
                </Link>
              </li>
              <li>
                <Link href="/#depoimentos" className="hover:text-[#f29b2f] transition-colors">
                  Avaliações no Google
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Info */}
          <div className="lg:col-span-3 text-xs sm:text-sm text-white/80 space-y-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f29b2f] font-semibold block mb-2">
                • LOCALIZAÇÃO
              </span>
              <p className="text-white font-medium">Praia do Ubatumirim</p>
              <p className="mt-0.5 text-white/70">Rua Maria José de Jesus, 3005/3006</p>
              <p className="text-white/70">Canto do Iriri · Ubatuba - SP</p>
              <p className="text-white/60 text-[11px] mt-1">KM 16 da BR-101 Rio-Santos</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f29b2f] font-semibold block mb-2">
                • HORÁRIOS
              </span>
              <p className="text-white/80">Check-in: 12h às 22h</p>
              <p className="text-white/80">Check-out: até às 11h</p>
              <p className="text-white/60 text-[11px] mt-1">Restaurante aberto diariamente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Gradient Wordmark overlapping the Fullscreen Footer Photo */}
      <div className="relative w-full mt-4 overflow-hidden">
        <div className="relative z-20 max-w-[1440px] mx-auto px-4 pointer-events-none">
          <p
            aria-hidden="true"
            className="text-[15.5vw] leading-[0.80] font-bold tracking-tighter text-center uppercase bg-gradient-to-b from-[#f8faf8] via-[#f8faf8]/85 to-white/10 bg-clip-text text-transparent"
          >
            ELIIY ZITA
          </p>
        </div>

        {/* Fullscreen Background Photo (footer-crepusculo) */}
        <div className="relative z-10 -mt-[7vw] w-full h-[46vh] sm:h-[68vh] overflow-hidden">
          <picture>
            {editorialMedia.footerCrepusculo.mobileAvif && (
              <source
                media="(max-width: 768px)"
                srcSet={editorialMedia.footerCrepusculo.mobileAvif}
                type="image/avif"
              />
            )}
            {editorialMedia.footerCrepusculo.mobileSrc && (
              <source
                media="(max-width: 768px)"
                srcSet={editorialMedia.footerCrepusculo.mobileSrc}
                type="image/webp"
              />
            )}
            {editorialMedia.footerCrepusculo.avif && (
              <source
                srcSet={editorialMedia.footerCrepusculo.avif}
                type="image/avif"
              />
            )}
            <img
              src={editorialMedia.footerCrepusculo.src}
              alt={editorialMedia.footerCrepusculo.alt}
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-[#082112] via-[#082112]/45 to-black/75" />

          {/* Bottom Bar */}
          <div className="absolute inset-x-0 bottom-0 z-30 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/85 gap-2 border-t border-white/10">
            <span>
              © {new Date().getFullYear()} Pousada e Restaurante Eliiy Zita Pedro · Praia do Ubatumirim, Ubatuba/SP
            </span>
            <span>
              WhatsApp Oficial: +55 (12) 99232-3656 · Reserva Direta sem Taxas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
