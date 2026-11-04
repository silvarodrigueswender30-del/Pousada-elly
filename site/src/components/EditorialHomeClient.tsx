"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  heroSlides,
  showcaseScenes,
  bussolaDiferenciais,
  quemSomosAbas,
  faqEditorial,
  editorialMedia,
} from "@/data/editorial-media";
import { acomodacoes } from "@/data/acomodacoes";
import { atrativosTuristicos } from "@/data/atrativos";
import EditorialReservaDrawer from "./EditorialReservaDrawer";
import { EditorialLocationMap } from "./EditorialLocationMap";
import { EditorialFooter } from "./EditorialFooter";
import EditorialDiferenciaisSection from "./EditorialDiferenciaisSection";
import { EditorialCapelaSection } from "./EditorialCapelaSection";
import { RoomImageRotator, ROOM_CARD_IMAGES } from "./RoomImageRotator";

export default function EditorialHomeClient() {
  // Preloader visibility (Seção 0: 3.4s unhurried 3-stage entrance active from frame 0)
  const [showPreloader, setShowPreloader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hero state + Auto-play (Seção 1)
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [heroAutoPlay, setHeroAutoPlay] = useState(true);

  // Manifesto scrub progress (Seção 2A)
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const [manifestoProgress, setManifestoProgress] = useState(0.2);
  const [viewportSize, setViewportSize] = useState({ vw: 1440, vh: 900 });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Stats numbers animated counters (Print 1 & Print 9)
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statNumber, setStatNumber] = useState(0); // 0 -> 160+
  const [activeReviewIdx, setActiveReviewIdx] = useState(0); // Print 5: Google Reviews Slider

  // Pinned Showcase state (Seção 3)
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);
  const [showcaseScrollRatio, setShowcaseScrollRatio] = useState(0);

  // Vídeo Mobile no Banner Pátio (Showcase [02] — Carregamento Ocioso / Sem Desktop)
  const [shouldLoadPatioVideo, setShouldLoadPatioVideo] = useState(false);
  const [mobilePatioVideoReady, setMobilePatioVideoReady] = useState(false);
  const patioVideoRef = useRef<HTMLVideoElement | null>(null);

  // Vídeo Mobile no Banner Sabores Caiçaras (Showcase [03] — Carregamento Ocioso / Sem Desktop)
  const [shouldLoadSaboresVideo, setShouldLoadSaboresVideo] = useState(false);
  const [mobileSaboresVideoReady, setMobileSaboresVideoReady] = useState(false);
  const saboresVideoRef = useRef<HTMLVideoElement | null>(null);

  // Scroll-Driven + Clickable Interactive Categories & Atrativos state
  const acomodacoesTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeAtrativoIdx, setActiveAtrativoIdx] = useState(0);
  const [activeAtrativoPhotoIdx, setActiveAtrativoPhotoIdx] = useState(0);
  const [activeRoomFilter, setActiveRoomFilter] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<{
    mp4: string;
    poster: string;
    legenda: string;
  } | null>(null);

  // Carrossel de Acomodações Desktop Navigation (UX com botões laterais)
  const acomodacoesCarouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollCarouselLeft, setCanScrollCarouselLeft] = useState(false);
  const [canScrollCarouselRight, setCanScrollCarouselRight] = useState(true);

  const checkCarouselScroll = () => {
    const el = acomodacoesCarouselRef.current;
    if (!el) return;
    setCanScrollCarouselLeft(el.scrollLeft > 20);
    setCanScrollCarouselRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const el = acomodacoesCarouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".snap-start");
    const step = (card?.offsetWidth || 330) + 20;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  // Central Compass Radial Burst state (Seção 5: sec_23 -> sec_26)
  const bussolaRef = useRef<HTMLDivElement | null>(null);
  const [bussolaExpanded, setBussolaExpanded] = useState(false);

  // Quem Somos tabs (Seção 6)
  const [activeQuemSomosIdx, setActiveQuemSomosIdx] = useState(0);

  // Bento Grid Reveal state (Seção 7)
  const bentoRef = useRef<HTMLDivElement | null>(null);
  const [bentoVisible, setBentoVisible] = useState(true);

  // FAQ accordion (Seção 8)
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Switch de Vivência na Orla (Print 4 & arq3.mp4)
  const [orlaTab, setOrlaTab] = useState<"pousada" | "restaurante">("pousada");

  // Reservation Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDefaultSlug, setDrawerDefaultSlug] = useState("");

  // Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openReserva = (slug = "") => {
    setDrawerDefaultSlug(slug);
    setDrawerOpen(true);
  };

  // Trigger 3-stage Preloader (3.4s unhurried choreographed entrance from frame 0)
  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        vw: window.innerWidth || 1440,
        vh: window.innerHeight || 900,
      });
    };
    updateViewport();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    window.addEventListener("resize", () => {
      updateViewport();
      checkCarouselScroll();
    }, { passive: true });
    const t = setTimeout(() => {
      setShowPreloader(false);
      checkCarouselScroll();
    }, 3050);
    return () => {
      window.removeEventListener("resize", updateViewport);
      clearTimeout(t);
    };
  }, []);

  // Lazy-load Vídeo Mobile do Pátio quando ocioso (apenas mobile <= 767px, sem reduced-motion, sem saveData)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSaveData = (navigator as any)?.connection?.saveData === true;

    if (!isMobile || isReduced || isSaveData) return;

    const enableVideo = () => {
      setShouldLoadPatioVideo(true);
      setShouldLoadSaboresVideo(true);
    };

    if ("requestIdleCallback" in window) {
      const handle = (window as any).requestIdleCallback(enableVideo, { timeout: 3500 });
      return () => (window as any).cancelIdleCallback?.(handle);
    } else {
      const timer = setTimeout(enableVideo, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Inicia buffer e reprodução suave quando o vídeo mobile for inserido
  useEffect(() => {
    if (!shouldLoadPatioVideo || !patioVideoRef.current) return;
    const v = patioVideoRef.current;
    const handleCanPlay = () => {
      setMobilePatioVideoReady(true);
      v.play().catch(() => {});
    };
    v.addEventListener("canplay", handleCanPlay);
    v.load();
    return () => {
      v.removeEventListener("canplay", handleCanPlay);
    };
  }, [shouldLoadPatioVideo]);

  useEffect(() => {
    if (!shouldLoadSaboresVideo || !saboresVideoRef.current) return;
    const v = saboresVideoRef.current;
    const handleCanPlay = () => {
      setMobileSaboresVideoReady(true);
      v.play().catch(() => {});
    };
    v.addEventListener("canplay", handleCanPlay);
    v.load();
    return () => {
      v.removeEventListener("canplay", handleCanPlay);
    };
  }, [shouldLoadSaboresVideo]);

  // Animate counter when stats section enters view
  useEffect(() => {
    if (!statsAnimated) return;
    let start = 0;
    const end = 160;
    const duration = 1400;
    const stepTime = Math.max(10, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 4;
      if (start >= end) {
        setStatNumber(end);
        clearInterval(timer);
      } else {
        setStatNumber(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [statsAnimated]);

  // Auto-play timer for Hero 3 tabs (sec_03 -> sec_07)
  useEffect(() => {
    if (!heroAutoPlay) return;
    const interval = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [heroAutoPlay]);

  // Unified Scroll Engine for:
  // - Seção 2A (Manifesto word-by-word scrub)
  // - Seção 3 (Pinned 01/03 Showcase sec_13 -> sec_17)
  // - Seção 4 (Scroll-Driven Category Selector sec_18 -> sec_22)
  // - Seção 5 (Bússola auto-burst if user scrolls past center)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const vh = window.innerHeight || 800;

      // 2A. Manifesto word scrub
      if (manifestoRef.current) {
        const rect = manifestoRef.current.getBoundingClientRect();
        const rawText = (vh * 0.82 - rect.top) / (vh * 0.62);
        setManifestoProgress(Math.max(0.12, Math.min(1, rawText)));
      }

      // Stats animated trigger (Print 1 & 9)
      if (statsRef.current && !statsAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < vh * 0.85) {
          setStatsAnimated(true);
        }
      }

      // 3. Pinned Showcase 01 / 03
      if (showcaseRef.current) {
        const rect = showcaseRef.current.getBoundingClientRect();
        const scrollable = Math.max(1, rect.height - vh);
        const scrolled = -rect.top;
        if (scrolled >= -vh * 0.2 && scrolled <= scrollable + vh * 0.2) {
          const ratio = Math.max(0, Math.min(1, scrolled / scrollable));
          setShowcaseScrollRatio(ratio);
          if (ratio < 0.34) setActiveShowcaseIdx(0);
          else if (ratio < 0.68) setActiveShowcaseIdx(1);
          else setActiveShowcaseIdx(2);
        }
      }

      // 5. Bússola radial burst when scrolled into view
      if (bussolaRef.current) {
        const rect = bussolaRef.current.getBoundingClientRect();
        if (rect.top < vh * 0.38) {
          setBussolaExpanded(true);
        }
      }

      // 7. Bento Grid reveal
      if (bentoRef.current) {
        const rect = bentoRef.current.getBoundingClientRect();
        setBentoVisible(rect.top < vh * 0.88);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentHero = heroSlides[activeHeroIdx];
  const currentShowcase = showcaseScenes[activeShowcaseIdx];
  const currentAtrativo = atrativosTuristicos[activeAtrativoIdx];
  const currentQuemSomos = quemSomosAbas[activeQuemSomosIdx];

  const manifestoWords = [
    "Ajudamos",
    "sua",
    "família",
    "a",
    "viver",
    "dias",
    "de",
    "praia",
    "com",
    "os",
    "pés",
    "na",
    "areia,",
    "mar",
    "calmo",
    "e",
    "a",
    "liberdade",
    "de",
    "se",
    "sentir",
    "em",
    "casa.",
  ];

  return (
    <>
      {/* =====================================================================
          SEÇÃO 0 — PRELOADER SOFISTICADO COM A LOGO OFICIAL EM ALTA DEFINIÇÃO
      ===================================================================== */}
      {showPreloader && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 bg-[#f8faf8] flex items-center justify-center animate-preloader-curtain pointer-events-none px-6"
        >
          <div className="flex items-center justify-center max-w-[92vw] sm:max-w-xl">
            {/* Logo Oficial em Altíssima Definição com Proporção Equilibrada */}
            <div className="shrink-0 animate-preloader-symbol flex items-center justify-center">
              <img
                src="/brand/logo-preloader-hd.webp"
                srcSet="/brand/logo-preloader-hd.webp 1x, /brand/logo-navbar.svg 2x"
                alt="Pousada Eliiy Zita Pedro"
                width={120}
                height={56}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </div>

            {/* Frase Monumental da Pousada em Harmonia Óptica com o Ícone */}
            <div className="overflow-hidden animate-preloader-word whitespace-nowrap pl-3 sm:pl-5">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.16em] uppercase text-[#0a301a] leading-none">
                ELIIY ZITA
              </p>
              <p className="mt-1 sm:mt-1.5 text-[9px] sm:text-[11px] lg:text-xs tracking-[0.24em] uppercase text-[#4a5c50] font-mono">
                POUSADA & RESTAURANTE · UBATUMIRIM
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#f8faf8] text-[#0a301a] relative page-transition">

      {/* =====================================================================
          SEÇÃO 1 — HERO EDITORIAL 100VH COM HEADER SUÍÇO EM 4 COLUNAS, PALAVRA
          EM SERIFA ITÁLICA ANIMADA, BOTÃO COM BLOCO ESCURO E 3 ABAS (02s–07s)
      ===================================================================== */}
      <section
        id="inicio"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#082112] text-[#f8faf8] pt-24 sm:pt-28"
      >
        {/* Background Media with continuous Ken Burns subtle zoom */}
        <div className="absolute inset-0 z-0">
          <picture key={currentHero.id} className="absolute inset-0 z-10">
            {currentHero.media.mobileAvif && (
              <source
                media="(max-width: 768px)"
                srcSet={currentHero.media.mobileAvif}
                type="image/avif"
              />
            )}
            {currentHero.media.mobileSrc && (
              <source
                media="(max-width: 768px)"
                srcSet={currentHero.media.mobileSrc}
                type="image/webp"
              />
            )}
            {currentHero.media.avif && (
              <source srcSet={currentHero.media.avif} type="image/avif" />
            )}
            <img
              src={currentHero.media.src}
              alt={currentHero.media.alt}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center animate-hero-zoom"
            />
          </picture>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />
        </div>

        {/* HEADER SUÍÇO EM 4 COLUNAS (FIXO AO SCROLL / SMART STICKY) */}
        <header
          className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#082112]/92 backdrop-blur-md border-b border-white/10 shadow-xl py-3 sm:py-3.5 px-5 sm:px-10 lg:px-16"
              : "bg-gradient-to-b from-black/60 via-black/25 to-transparent pt-6 sm:pt-8 pb-4 px-5 sm:px-10 lg:px-16"
          }`}
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-12 items-center gap-6">
            {/* Col 1: Logo + Wordmark */}
            <div className="lg:col-span-3 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <img
                  src="/brand/logo-navbar-1x.webp"
                  srcSet="/brand/logo-navbar-1x.webp 1x, /brand/logo-navbar-2x.webp 2x"
                  alt="Logo Pousada e Restaurante Eliiy Zita Pedro"
                  width={78}
                  height={36}
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"
                  }`}
                />
                <div className="leading-tight">
                  <span className="block text-sm sm:text-base font-bold tracking-tight text-white">
                    ELIIY ZITA
                  </span>
                  <span className="block text-[10px] text-white/80 tracking-[0.2em] uppercase">
                    POUSADA & RESTAURANTE
                  </span>
                </div>
              </Link>
            </div>

            {/* Col 2: 3-line Editorial Descriptor (sec_03.jpg) */}
            <div className={`hidden lg:flex lg:col-span-3 flex-col gap-0.5 text-xs text-white/85 leading-relaxed transition-opacity duration-300 ${isScrolled ? "opacity-90" : "opacity-100"}`}>
              <span className="font-medium text-white">Hospedagem & Gastronomia</span>
              <span className="text-white/80">Praia do Ubatumirim · Ubatuba, SP</span>
              <span className="text-white/75">Pé na areia · Enseada de mar calmo</span>
            </div>

            {/* Col 3: Stacked Vertical Navigation Column (sec_03.jpg) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:grid lg:col-span-4 grid-cols-2 gap-x-6 gap-y-1 text-xs font-medium text-white/85"
            >
              <a
                href="#inicio"
                className="text-white underline underline-offset-4 decoration-white/60 hover:text-[#f29b2f] transition-colors"
              >
                Início
              </a>
              <a href="#acomodacoes" className="hover:text-[#f29b2f] transition-colors">
                O que oferecemos
              </a>
              <a href="#diferenciais" className="hover:text-[#f29b2f] transition-colors">
                Diferenciais
              </a>
              <a href="#capela" className="hover:text-[#f29b2f] transition-colors font-semibold text-[#f29b2f]">
                A Capela
              </a>
              <a href="#quem-somos" className="hover:text-[#f29b2f] transition-colors">
                Quem somos
              </a>
              <a href="#visita" className="hover:text-[#f29b2f] transition-colors">
                Visite Ubatumirim
              </a>
              <a href="#faq" className="hover:text-[#f29b2f] transition-colors">
                Dúvidas frequentes
              </a>
              <a href="#contato-final" className="hover:text-[#f29b2f] transition-colors">
                Contato
              </a>
            </nav>

            {/* Col 4: Right Action & Mobile Menu Button */}
            <div className="lg:col-span-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => openReserva()}
                className={`inline-flex items-center gap-2 rounded-full transition-all cursor-pointer ${
                  isScrolled
                    ? "btn-gradient-caiçara text-white px-3.5 py-1.5 text-xs font-semibold shadow-md border border-white/20"
                    : "bg-white/15 hover:bg-[#f8faf8] hover:text-[#0a301a] backdrop-blur-md border border-white/25 px-4 py-2 text-xs font-medium text-white"
                }`}
              >
                <span>Reservar direto</span>
                <span aria-hidden="true">↗</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/45 border border-white/25 text-white text-sm"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 p-5 rounded-2xl bg-[#082112]/95 backdrop-blur-xl border border-white/15 flex flex-col gap-3 text-sm text-white shadow-2xl">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                Início
              </a>
              <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                A Enseada do Ubatumirim
              </a>
              <a href="#acomodacoes" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                O que oferecemos (8 Acomodações)
              </a>
              <a href="#capela" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors font-medium text-[#f29b2f]">
                A Capela & Celebrações
              </a>
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                Diferenciais Dona Zita
              </a>
              <a href="#quem-somos" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                Quem somos · Família Zita Pedro
              </a>
              <a href="#visita" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f29b2f] transition-colors">
                Horários, Localização & FAQ
              </a>
              <div className="pt-2 border-t border-white/15 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openReserva();
                  }}
                  className="w-full py-2.5 rounded-full btn-gradient-caiçara text-white font-semibold text-center text-xs shadow-md"
                >
                  Solicitar reserva direta ↗
                </button>
              </div>
            </div>
          )}
        </header>

        {/* CENTER-LEFT 3-LINE HEADLINE WITH BLUR-SLIDE ITALIC WORD (sec_03.jpg–sec_07.jpg) */}
        <div className="relative z-30 w-full px-5 sm:px-10 lg:px-16 my-auto py-8 sm:py-12">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white/90 font-medium mb-4">
              {currentHero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-[36px] sm:text-6xl lg:text-[72px] font-semibold tracking-tight text-white leading-[1.03]">
              <span className="block">Nossa forma</span>
              <span className="block">de receber</span>
              <span className="block">
                une{" "}
                <span
                  key={currentHero.italicWord}
                  className="font-editorial-italic font-normal text-[#f8faf8] animate-word-blur"
                >
                  {currentHero.italicWord}
                </span>
              </span>
            </h1>
            <p
              key={currentHero.id}
              className="mt-5 max-w-lg text-sm sm:text-base text-white/90 leading-relaxed animate-scene-text"
            >
              {currentHero.subtitle}
            </p>
          </div>
        </div>

        {/* BOTTOM BAR: SIGNATURE PILL BUTTON (LEFT) + SCROLL ARROW (CENTER) + 3 AUTO-PLAY TABS (RIGHT) */}
        <div className="relative z-30 w-full px-5 sm:px-10 lg:px-16 pb-7 sm:pb-11">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-5">
            {/* Left Signature CTA Pill from arq.mp4: Laranja Solar com bloco nobre ez em verde floresta */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openReserva()}
                className="group relative inline-flex items-center justify-between w-full sm:w-[290px] h-[54px] rounded-full btn-gradient-caiçara text-white pl-6 pr-2 text-sm font-semibold shadow-2xl transition-all cursor-pointer overflow-hidden border border-white/20"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  Solicitar reserva
                </span>
                <span className="relative z-10 w-10 h-10 rounded-xl bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:scale-105">
                  ez
                </span>
              </button>
            </div>

            {/* Center Scroll Indicator Arrow (Exact match to sec_03.jpg) */}
            <a
              href="#manifesto"
              aria-label="Rolar para a próxima seção"
              className="hidden lg:flex w-9 h-9 rounded-full border border-white/25 items-center justify-center text-xs text-white/80 hover:text-white hover:border-white transition-colors"
            >
              ↓
            </a>

            {/* Right 3 Auto-Play Slide Selector Pills with Progress Bar (sec_03.jpg–sec_07.jpg) */}
            <div
              role="group"
              aria-label="Selecionar cena do Hero"
              className="grid grid-cols-3 sm:flex items-center gap-1.5 sm:gap-2 bg-black/55 backdrop-blur-md p-1.5 rounded-full border border-white/20"
            >
              {heroSlides.map((slide, idx) => {
                const active = idx === activeHeroIdx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setHeroAutoPlay(false);
                      setActiveHeroIdx(idx);
                    }}
                    className={`relative overflow-hidden px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium transition-all cursor-pointer text-center ${
                      active
                        ? "bg-[#f8faf8] text-[#0a301a] shadow-sm font-semibold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{slide.tabLabel}</span>
                    {active && heroAutoPlay && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[3px] bg-[#157d40] animate-tab-progress"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FAIXA DE SELOS & AUTORIDADE EDITORIAL (FUNDO BRANCO + MARQUEE SUAVE ARQ2)
      ===================================================================== */}
      <div className="relative w-full bg-white text-[#0a301a] py-8 sm:py-12 border-b border-[#0a301a]/08 select-none overflow-hidden">
        {/* Marquee Suave com Máscara de Fade Lateral (Estilo arq2) */}
        <div className="w-full overflow-hidden marquee-mask">
          <div className="flex w-max animate-ticker whitespace-nowrap text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 sm:gap-14 px-6 text-[#0a301a]/85">
                <span className="flex items-center gap-2">
                  <span className="text-[#f29b2f] font-bold">★</span>
                  <span>GOOGLE 4.8★ (+160 AVALIAÇÕES)</span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span className="text-[#157d40] font-bold">●</span>
                  <span>BOOKING.COM 8.6 EXCELENTE</span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span className="font-editorial-italic lowercase text-base font-normal text-[#0a301a]">
                    enseada de mar calmo
                  </span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span>0M DISTÂNCIA DO MAR · PÉ NA AREIA</span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span className="font-editorial-italic lowercase text-base font-normal text-[#0a301a]">
                    restaurante próprio na areia
                  </span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span>CHALÉS COM COZINHA PRIVATIVA</span>
                </span>
                <span className="text-[#157d40]/40 font-bold">✦</span>
                <span className="flex items-center gap-2">
                  <span>HOSPITALIDADE DONA ZITA</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frase de Autoridade Centralizada (Abaixo da faixa com divisor sutil) */}
        <div className="max-w-3xl mx-auto px-6 text-center mt-7 pt-6 border-t border-[#0a301a]/08">
          <p className="text-sm sm:text-base lg:text-lg font-medium text-[#0a301a] tracking-tight">
            Mais liberdade para a sua família.{" "}
            <span className="font-editorial-italic font-normal text-[1.12em] text-gradient-caiçara">
              Mais calmaria para os seus dias de praia.
            </span>
          </p>
        </div>
      </div>

      {/* =====================================================================
          SEÇÃO 2A — MANIFESTO EDITORIAL & IMAGEM DIVIDIDA (SPLIT VIEW - arq2.mp4: 04s–08s)
      ===================================================================== */}
      <section
        id="manifesto"
        ref={manifestoRef}
        className="w-full pt-20 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white via-[#faf8f5] to-[#f5efe6] border-b border-[#0a301a]/06"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brand Eyebrow + Manifesto Scrub Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-6 rounded-md bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-[10px] font-bold">
                  ez
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-caiçara">
                  Pousada Eliiy Zita Pedro · Ubatumirim
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.12] flex flex-wrap gap-x-3 gap-y-1">
                {manifestoWords.map((word, i) => {
                  const wordThreshold = (i + 1) / manifestoWords.length;
                  const isLit = manifestoProgress >= wordThreshold * 0.85;
                  return (
                    <span
                      key={i}
                      className={`transition-colors duration-300 ${
                        word === "areia," || word === "casa."
                          ? "font-editorial-italic font-normal text-[1.08em] text-gradient-caiçara"
                          : isLit
                          ? "text-[#0a301a]"
                          : "text-[#788a7e]"
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </h2>

              <p className="mt-6 text-sm sm:text-base text-[#4a5c50] leading-relaxed max-w-xl">
                Fundada pela família Zita Pedro na orla mais mansa do litoral norte, onde a areia firme encontra a sombra natural das árvores e o mar sem correntezas abraça todas as gerações.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => openReserva()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a301a] hover:bg-[#157d40] text-[#f8faf8] text-xs font-semibold tracking-wide transition-colors"
                >
                  <span>Conhecer os chalés</span>
                  <span>↓</span>
                </button>
                <a
                  href="#numeros-autoridade"
                  className="text-xs font-semibold text-[#0a301a] hover:text-[#157d40] tracking-wide"
                >
                  Ver diferenciais
                </a>
              </div>
            </div>

            {/* Right Column: Split Image Card with Soft Shadow (arq2.mp4: sec 06s) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] bg-[#082112] shadow-xl border border-[#e2eae3] group">
                <img
                  src={editorialMedia.heroCrepusculo.src}
                  alt="Vista da praia do Ubatumirim e chalés da Pousada Eliiy Zita"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 flex items-center justify-between text-white text-xs">
                  <span className="font-mono uppercase tracking-[0.18em]">
                    • PÉ NA AREIA GENUÍNO
                  </span>
                  <span className="text-[11px] font-medium text-white/80">
                    Sem travessia de rua
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 2B — FAIXA DE NÚMEROS & MÉTRICAS (PROPOSTA A: NASCER DO SOL NA ENSEADA)
      ===================================================================== */}
      <section
        id="numeros-autoridade"
        ref={statsRef}
        className="w-full py-16 sm:py-20 bg-prop-a-stats text-[#0a301a] border-b border-[#0a301a]/06"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Stat 1: 08 Chalés Independentes */}
            <div className="flex flex-col border-l-2 border-[#157d40] pl-5 sm:pl-6 group">
              <span className="text-4xl sm:text-6xl font-medium tracking-tight text-gradient-caiçara transition-transform duration-500 group-hover:translate-x-1">
                {statsAnimated ? "08" : "00"}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#0a301a]">
                Chalés independentes
              </span>
              <span className="mt-1 text-xs text-[#4a5c50] leading-snug">
                Privacidade para casais, famílias e grandes grupos.
              </span>
            </div>

            {/* Stat 2: 0m do Mar (Pé na Areia) */}
            <div className="flex flex-col border-l-2 border-[#157d40] pl-5 sm:pl-6 group">
              <span className="text-4xl sm:text-6xl font-medium tracking-tight text-gradient-caiçara transition-transform duration-500 group-hover:translate-x-1">
                0<span className="text-2xl sm:text-3xl text-[#157d40]">m</span>
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#0a301a]">
                Distância do mar
              </span>
              <span className="mt-1 text-xs text-[#4a5c50] leading-snug">
                Pé na areia genuíno sem atravessar rodovia ou asfalto.
              </span>
            </div>

            {/* Stat 3: 3 a 15 Pessoas */}
            <div className="flex flex-col border-l-2 border-[#157d40] pl-5 sm:pl-6 group">
              <span className="text-4xl sm:text-6xl font-medium tracking-tight text-gradient-caiçara transition-transform duration-500 group-hover:translate-x-1">
                3<span className="text-2xl sm:text-3xl text-[#4a5c50]"> a </span>15
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#0a301a]">
                Pessoas por chalé
              </span>
              <span className="mt-1 text-xs text-[#4a5c50] leading-snug">
                Cozinha equipada, churrasqueira e varanda arejada.
              </span>
            </div>

            {/* Stat 4: 4.8★ no Google com Animação Numérica (Estilo Exato Print) */}
            <div className="flex flex-col border-l-2 border-[#157d40] pl-5 sm:pl-6 group">
              <div className="flex items-baseline gap-1.5 transition-transform duration-500 group-hover:translate-x-1">
                <span className="text-4xl sm:text-6xl font-medium tracking-tight text-gradient-caiçara">
                  +{statNumber}
                </span>
                <span className="text-xl sm:text-2xl text-[#f29b2f]">★</span>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#0a301a]">
                Avaliações no Google (4.8)
              </span>
              <span className="mt-1 text-xs text-[#4a5c50] leading-snug">
                Reconhecimento real de hospitalidade e tranquilidade.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — SHOWCASE FULLSCREEN PINADO 01 / 03 NO SCROLL COM EFEITO
          BLUR/SLIDE NOS TÍTULOS (arq.mp4: 13s–17s)
      ===================================================================== */}
      <section
        id="showcase"
        ref={showcaseRef}
        className="relative w-full h-[280vh] bg-[#082112] text-[#f8faf8]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
          {/* Layered Fullscreen Scene Images with Smooth Crossfade & Scale */}
          <div className="absolute inset-0 z-0">
            {showcaseScenes.map((scene, idx) => {
              const isCurrent = idx === activeShowcaseIdx;
              return (
                <div
                  key={scene.num}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <picture className="absolute inset-0 w-full h-full block">
                    {scene.media.mobileAvif && (
                      <source
                        media="(max-width: 768px)"
                        srcSet={scene.media.mobileAvif}
                        type="image/avif"
                      />
                    )}
                    {scene.media.mobileSrc && (
                      <source
                        media="(max-width: 768px)"
                        srcSet={scene.media.mobileSrc}
                        type="image/webp"
                      />
                    )}
                    {scene.media.avif && (
                      <source srcSet={scene.media.avif} type="image/avif" />
                    )}
                    <img
                      src={scene.media.src}
                      alt={scene.media.alt}
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover object-center transition-transform duration-1000 ${
                        isCurrent ? "scale-100" : "scale-105"
                      }`}
                    />
                  </picture>

                  {/* Vídeo Vertical Mobile Ocioso (Showcase [02] Pátio) */}
                  {scene.num === "02" && shouldLoadPatioVideo && (
                    <video
                      ref={patioVideoRef}
                      muted
                      playsInline
                      loop
                      preload="none"
                      poster="/media/v/patio2-poster.webp"
                      onCanPlay={() => {
                        setMobilePatioVideoReady(true);
                        patioVideoRef.current?.play().catch(() => {});
                      }}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 md:hidden ${
                        mobilePatioVideoReady ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <source src="/media/v/patio2-m.webm" type="video/webm" />
                      <source src="/media/v/patio2-m.mp4" type="video/mp4" />
                    </video>
                  )}

                  {/* Vídeo Vertical Mobile Ocioso (Showcase [03] Sabores Caiçaras) */}
                  {scene.num === "03" && shouldLoadSaboresVideo && (
                    <video
                      ref={saboresVideoRef}
                      muted
                      playsInline
                      loop
                      preload="none"
                      poster="/media/v/caicara-poster.webp"
                      onCanPlay={() => {
                        setMobileSaboresVideoReady(true);
                        saboresVideoRef.current?.play().catch(() => {});
                      }}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 md:hidden ${
                        mobileSaboresVideoReady ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <source src="/media/v/caicara-m.webm" type="video/webm" />
                      <source src="/media/v/caicara-m.mp4" type="video/mp4" />
                    </video>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Top subtle indicator bar */}
          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-10 lg:pt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-white/90">
            <span className="uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-medium">
              VIVÊNCIA PÉ NA AREIA · UBATUMIRIM
            </span>
            <div className="flex items-center gap-2">
              {showcaseScenes.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveShowcaseIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    idx === activeShowcaseIdx
                      ? "bg-[#f8faf8] text-[#0a301a] font-semibold"
                      : "bg-black/45 text-white hover:bg-black/65 border border-white/25"
                  }`}
                >
                  [{s.num}]
                </button>
              ))}
            </div>
          </div>

          {/* Center-Left Number [01] + Large Headline + Location Subtitle with Motion Blur (sec_14.jpg–sec_17.jpg) */}
          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 my-auto">
            <div key={currentShowcase.num} className="animate-scene-text">
              <span className="inline-block text-xs sm:text-sm font-mono text-white/85 mb-3">
                [{currentShowcase.num}]
              </span>
              <h2 className="max-w-2xl text-3xl sm:text-5xl lg:text-[62px] font-semibold tracking-tight text-white leading-[1.05]">
                {currentShowcase.title}{" "}
                <span className="font-editorial-italic font-normal text-[1.12em]">
                  {currentShowcase.italicAccent}.
                </span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm font-medium text-white/85 tracking-wide">
                {currentShowcase.tag}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Left Paragraph + Right Counter 01 / 03 & Next Circle Button (sec_14.jpg) */}
          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pb-10 sm:pb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p
              key={`desc-${currentShowcase.num}`}
              className="max-w-md text-xs sm:text-sm text-white/90 leading-relaxed animate-scene-text"
            >
              {currentShowcase.description}
            </p>

            <div className="flex items-center gap-4 self-end">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-white">
                {currentShowcase.num} / 03
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveShowcaseIdx((prev) => (prev + 1) % showcaseScenes.length)
                }
                aria-label="Próxima cena"
                className="w-11 h-11 rounded-full bg-[#f8faf8] text-[#0a301a] hover:bg-[#f29b2f] flex items-center justify-center font-bold hover:scale-105 transition-all cursor-pointer shadow-lg"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 4 — SELETOR DE CATEGORIAS DIRIGIDO PELO SCROLL (SCROLL-DRIVEN
          ACCORDION): BARRA PRETA DESCE SOZINHA NO SCROLL 01 -> 04 (18s–22s)
      ===================================================================== */}
      <section
        id="acomodacoes"
        ref={acomodacoesTrackRef}
        className="relative w-full lg:min-h-[220vh] bg-gradient-to-b from-[#f5efe6] via-[#faf8f5] to-[#ffffff] text-[#0a301a]"
      >
        <div className="lg:sticky lg:top-0 lg:min-h-screen w-full flex flex-col justify-center py-16 sm:py-20">
          <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16">
            {/* Top Editorial Header (sec_18.jpg–sec_19.jpg: Eyebrow on left, Headline on right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline mb-8 sm:mb-10">
              <div className="lg:col-span-5">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#4a5c50] font-semibold">
                  • O QUE OFERECEMOS
                </span>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.1]">
                  Quatro níveis de hospedagem, do casal ao grupo de{" "}
                  <span className="font-editorial-italic font-normal text-[1.1em] text-gradient-caiçara">
                    15 pessoas.
                  </span>
                </h2>
              </div>
            </div>

            {/* SEÇÃO 4 EDITORIAL — CARROSSEL DE ACOMODAÇÕES (ESTÉTICA EXATA PRINT 1 ARQ.MP4) */}
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#157d40] font-semibold block mb-1">
                  • NOSSAS 8 ACOMODAÇÕES PÉ NA AREIA
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-[#4a5c50]">
                    Role horizontalmente ou use as setas para explorar as opções:
                  </p>
                  <div className="hidden md:inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full p-1 border border-[#e2eae3] shadow-sm">
                    <button
                      type="button"
                      onClick={() => scrollCarousel("left")}
                      disabled={!canScrollCarouselLeft}
                      aria-label="Rolar para opções anteriores"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0a301a] hover:text-white"
                    >
                      ←
                    </button>
                    <span className="text-[10px] font-mono text-[#4a5c50] px-1.5 font-semibold">
                      08 ACOMODAÇÕES
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollCarousel("right")}
                      disabled={!canScrollCarouselRight}
                      aria-label="Rolar para próximas opções"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f29b2f] hover:text-[#0a301a]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Botões de atalho de categoria rápida das Acomodações */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Todas (08 opções)", targetIdx: 0 },
                  { label: "Grandes Grupos (10 a 15p)", targetIdx: 0 },
                  { label: "Chalés Família (4 a 5p)", targetIdx: 2 },
                  { label: "Suítes Pé na Areia (2 a 4p)", targetIdx: 5 },
                ].map((filtro, i) => (
                  <button
                    key={filtro.label}
                    type="button"
                    onClick={() => {
                      setActiveRoomFilter(i);
                      if (acomodacoesCarouselRef.current) {
                        const targetCard = acomodacoesCarouselRef.current.children[filtro.targetIdx] as HTMLElement;
                        if (targetCard) {
                          acomodacoesCarouselRef.current.scrollTo({
                            left: targetCard.offsetLeft - 20,
                            behavior: "smooth",
                          });
                        }
                      }
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      i === activeRoomFilter
                        ? "bg-[#0a301a] text-[#f8faf8] shadow-md"
                        : "bg-white text-[#4a5c50] border border-[#e2eae3] hover:border-[#0a301a]"
                    }`}
                  >
                    {filtro.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Carrossel Horizontal Estilo Print 1 com Efeito Foco/Perspectiva e Botões Flutuantes Desktop */}
            <div className="relative group/carousel mb-12">
              {/* Botão Flutuante Esquerdo (Desktop - conforme marcado na imagem) */}
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                disabled={!canScrollCarouselLeft}
                aria-label="Rolar acomodações para a esquerda"
                className={`hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all shadow-xl border cursor-pointer ${
                  canScrollCarouselLeft
                    ? "bg-white hover:bg-[#0a301a] text-[#0a301a] hover:text-[#f8faf8] border-[#e2eae3] hover:border-[#0a301a] hover:scale-110 active:scale-95"
                    : "bg-white/70 text-gray-300 border-[#e2eae3]/60 cursor-not-allowed opacity-20 pointer-events-none"
                }`}
              >
                <span className="text-2xl leading-none font-bold select-none pb-0.5">‹</span>
              </button>

              {/* Botão Flutuante Direito (Desktop - conforme marcado na imagem) */}
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                disabled={!canScrollCarouselRight}
                aria-label="Rolar acomodações para a direita"
                className={`hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all shadow-xl border cursor-pointer ${
                  canScrollCarouselRight
                    ? "bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] border-[#e2eae3] hover:scale-110 active:scale-95 shadow-[#f29b2f]/20"
                    : "bg-white/70 text-gray-300 border-[#e2eae3]/60 cursor-not-allowed opacity-20 pointer-events-none"
                }`}
              >
                <span className="text-2xl leading-none font-bold select-none pb-0.5">›</span>
              </button>

              <div
                ref={acomodacoesCarouselRef}
                onScroll={checkCarouselScroll}
                className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
              >
              {acomodacoes.map((item, idx) => {
                const isSelected = false;
                return (
                  <div
                    key={item.slug}
                    className={`shrink-0 w-[290px] sm:w-[330px] snap-start rounded-[24px] bg-white border transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                      isSelected
                        ? "border-[#157d40] ring-2 ring-[#157d40]/30 scale-[1.02]"
                        : "border-[#e2eae3] hover:border-[#157d40]/40 hover:-translate-y-1"
                    }`}
                  >
                    {/* Container de Imagens Rotativas com Crossfade e Gradiente Verde Noite */}
                    <RoomImageRotator
                      images={
                        item.fotos && item.fotos.length > 0
                          ? item.fotos.map((f) => f.url)
                          : ROOM_CARD_IMAGES
                      }
                      unitName={item.nome}
                      capacidade={item.capacidade}
                      categoria={item.categoria}
                      cardIndex={idx}
                    />

                    {/* Conteúdo textual do card */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono uppercase text-[#157d40] tracking-wider font-semibold">
                            UNIDADE 0{idx + 1}
                          </span>
                          <span className="text-[11px] font-mono text-[#788a7e]">
                            {item.capacidadeNumero} hóspedes
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#0a301a] tracking-tight group-hover:text-[#157d40] transition-colors">
                          {item.nome}
                        </h3>
                        <p className="mt-1.5 text-xs text-[#4a5c50] line-clamp-2 leading-relaxed">
                          {item.descricaoCurta}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#e2eae3] flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => openReserva(item.slug)}
                          className="text-xs font-semibold text-[#0a301a] hover:text-[#157d40] transition-colors"
                        >
                          Consultar data
                        </button>

                        <Link
                          href={`/acomodacoes/${item.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f6efe3] hover:bg-[#0a301a] hover:text-[#f8faf8] text-xs font-semibold text-[#0a301a] transition-all"
                        >
                          <span>Ver detalhes</span>
                          <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>

            {/* Compact Architectural Strip for Direct Access to All 8 Routes */}
            <div className="mt-8 mb-16 pt-6 border-t border-[#e2eae3]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#4a5c50]">
                  ACESSO DIRETO ÀS 8 FICHAS TÉCNICAS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {acomodacoes.map((item, idx) => (
                    <Link
                      key={item.slug}
                      href={`/acomodacoes/${item.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white hover:bg-[#0a301a] hover:text-[#f8faf8] text-xs font-medium text-[#0a301a] transition-colors border border-[#e2eae3]"
                    >
                      0{idx + 1}. {item.nome.split(" (")[0]} ({item.capacidadeNumero}p)
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================================
                SEÇÃO: ATRATIVOS TURÍSTICOS VIZINHOS (A PÉ OU POUCOS MINUTOS)
                (Conforme solicitado pelo usuário, baseada nas mídias de img-video-sessao)
            ===================================================================== */}
            <div id="visita" className="pt-10 border-t border-[#dce5dd]">
              {/* Header Editorial dos Atrativos */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#157d40] font-semibold block mb-2">
                    • ATRATIVOS TURÍSTICOS VIZINHOS · A PÉ OU POUCOS MINUTOS
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#0a301a] leading-tight">
                    Praias paradisíacas e natureza preservada ao lado da{" "}
                    <span className="font-editorial-italic font-normal text-[1.1em] text-gradient-caiçara">
                      sua estadia.
                    </span>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                    De enseadas de águas calmas para crianças e piscinas de água esmeralda para snorkel na Praia da Justa até o banho revigorante de água doce na Cachoeira do Tombador: descubra os tesouros do Litoral Norte sem enfrentar trânsito.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#dce5dd] text-[11px] font-mono text-[#0a301a] font-semibold shadow-xs">
                    04 DESTINOS SELECIONADOS
                  </span>
                </div>
              </div>

              {/* 2-Column Responsive Destination Showcase (Mesmo efeito e design visual do print) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Coluna Esquerda: 4 Cards Interativos Empilhados */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                  {atrativosTuristicos.map((atr, idx) => {
                    const isActive = idx === activeAtrativoIdx;
                    return (
                      <button
                        key={atr.id}
                        type="button"
                        onClick={() => {
                          setActiveAtrativoIdx(idx);
                          setActiveAtrativoPhotoIdx(0);
                        }}
                        className={`w-full text-left transition-all duration-300 cursor-pointer rounded-[20px] p-5 sm:p-6 ${
                          isActive
                            ? "bg-[#0a301a] text-[#f8faf8] shadow-xl ring-2 ring-[#157d40]/40 scale-[1.01]"
                            : "bg-white hover:bg-[#f5efe6] text-[#0a301a] border border-[#dce5dd] shadow-xs"
                        }`}
                      >
                        {/* Linha Superior */}
                        <div className="flex items-center justify-between gap-4">
                          <span
                            className={`text-[11px] font-mono uppercase tracking-widest ${
                              isActive ? "text-[#f29b2f]" : "text-[#157d40]"
                            }`}
                          >
                            [{atr.numero}] · {atr.tagAcesso}
                          </span>
                          <h4
                            className={`text-base sm:text-lg font-semibold tracking-tight ${
                              isActive ? "text-white" : "text-[#0a301a]"
                            }`}
                          >
                            {atr.nome}
                          </h4>
                        </div>

                        {/* Linha Inferior */}
                        <div className="mt-2.5 flex items-end justify-between gap-4">
                          <p
                            className={`text-xs sm:text-sm leading-relaxed max-w-xs ${
                              isActive ? "text-white/80" : "text-[#4a5c50]"
                            }`}
                          >
                            {atr.subtitulo}
                          </p>
                          <span
                            className={`text-xs font-bold shrink-0 ${
                              isActive ? "text-[#f29b2f]" : "text-[#0a301a]/40"
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Coluna Direita: Grande Card Fotográfico de Destaque com Vídeo e Destaques */}
                <div className="lg:col-span-7 flex">
                  <div className="relative w-full min-h-[500px] sm:min-h-[560px] rounded-[24px] overflow-hidden bg-[#082112] text-[#f8faf8] flex flex-col justify-between p-6 sm:p-9 shadow-xl border border-[#dce5dd]">
                    {/* Imagem de Fundo com Transição Suave */}
                    <img
                      key={currentAtrativo.imagensGaleria[activeAtrativoPhotoIdx] || currentAtrativo.imagemPrincipal}
                      src={currentAtrativo.imagensGaleria[activeAtrativoPhotoIdx] || currentAtrativo.imagemPrincipal}
                      alt={currentAtrativo.nome}
                      width={1920}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />

                    {/* Linha Superior: Pílula de Acesso + Botão de Vídeo Real */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                      <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider uppercase text-white">
                        [{currentAtrativo.numero}] · {currentAtrativo.tagAcesso} · {currentAtrativo.distancia}
                      </span>

                      {currentAtrativo.video && (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideoModal({
                              mp4: currentAtrativo.video.mp4,
                              poster: currentAtrativo.video.poster,
                              legenda: currentAtrativo.video.titulo,
                            })
                          }
                          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f8faf8] text-[#0a301a] text-xs font-semibold shadow-lg hover:bg-[#f29b2f] transition-all hover:scale-105 cursor-pointer"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#157d40] text-white flex items-center justify-center text-[10px]">
                            ▶
                          </span>
                          <span>Assistir vídeo real</span>
                        </button>
                      )}
                    </div>

                    {/* Conteúdo Inferior */}
                    <div
                      key={currentAtrativo.id}
                      className="relative z-10 mt-auto pt-8 animate-scene-text"
                    >
                      <span className="text-xs font-mono text-[#f29b2f] block mb-1">
                        [{currentAtrativo.numero}] · {currentAtrativo.distancia}
                      </span>
                      <h4 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                        {currentAtrativo.nome}
                      </h4>
                      <p className="mt-2.5 text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
                        {currentAtrativo.descricao}
                      </p>

                      {/* Destaques / Badges em Pílulas */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {currentAtrativo.destaques.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] text-white"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f29b2f]" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Barra de Ações: WhatsApp + Alternador de Fotos */}
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15">
                        <a
                          href={`https://wa.me/5512992323656?text=${encodeURIComponent(
                            currentAtrativo.whatsappMsg
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 rounded-full bg-[#f29b2f] hover:bg-[#d98520] px-5 py-2.5 text-xs font-semibold text-[#0a301a] transition-all cursor-pointer shadow-lg hover:scale-105"
                        >
                          <span>Pedir dicas de trajeto no WhatsApp</span>
                          <span aria-hidden="true">↗</span>
                        </a>

                        {/* Miniaturas de Fotos do Atrativo */}
                        {currentAtrativo.imagensGaleria.length > 1 && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-white/60 mr-1 uppercase">Fotos:</span>
                            {currentAtrativo.imagensGaleria.map((_, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => setActiveAtrativoPhotoIdx(pIdx)}
                                className={`text-[11px] font-mono px-2.5 py-1 rounded-full transition-all cursor-pointer border ${
                                  pIdx === activeAtrativoPhotoIdx
                                    ? "bg-white text-[#0a301a] font-bold border-white"
                                    : "bg-black/40 text-white/80 hover:bg-white/20 border-white/20"
                                }`}
                              >
                                0{pIdx + 1}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 5 — NOSSOS DIFERENCIAIS (ESTÉTICA EXATA PRINT 1 ARQ3.MP4: CÍRCULO EXPANSIVO + SCROLL PARALLAX + CONTADOR)
      ===================================================================== */}
      <EditorialDiferenciaisSection onOpenReserva={() => openReserva()} />

      {/* =====================================================================
          SEÇÃO 6 (CENA FALTANTE 3) — QUEM SOMOS: FOTO ARREDONDADA + SELO
          CIRCULAR GIRATÓRIO + SUB-CARD DESLIZANTE DE CITAÇÃO (29s–32s)
      ===================================================================== */}
      <section
        id="quem-somos"
        className="w-full py-24 sm:py-32 bg-gradient-to-b from-[#faf8f5] via-white to-[#f8f6f0] text-[#0a301a] border-t border-[#0a301a]/06"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Rounded Photo + Floating Circular Badge with Rotating Ring on Right Edge (sec_30.jpg–sec_32.jpg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/4.6] bg-[#f5efe6] shadow-2xl">
                <picture className="w-full h-full">
                  {editorialMedia.quemSomosVertical.mobileAvif && (
                    <source media="(max-width: 640px)" srcSet={editorialMedia.quemSomosVertical.mobileAvif} type="image/avif" />
                  )}
                  {editorialMedia.quemSomosVertical.mobileSrc && (
                    <source media="(max-width: 640px)" srcSet={editorialMedia.quemSomosVertical.mobileSrc} type="image/webp" />
                  )}
                  {editorialMedia.quemSomosVertical.avif && (
                    <source srcSet={editorialMedia.quemSomosVertical.avif} type="image/avif" />
                  )}
                  <img
                    src={editorialMedia.quemSomosVertical.src}
                    alt={editorialMedia.quemSomosVertical.alt}
                    width={800}
                    height={920}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/85 block">
                      PRAIA DO UBATUMIRIM · UBATUBA / SP
                    </span>
                    <p className="text-sm font-medium mt-0.5">
                      Pousada e Restaurante Eliiy Zita Pedro
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Circular Emblem on Right Edge of Photo (Exact match to sec_30.jpg–sec_32.jpg) */}
              <div className="flex absolute right-4 -bottom-6 sm:-right-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#f8faf8] border border-[#e2eae3] shadow-2xl items-center justify-center p-3">
                <div
                  aria-hidden="true"
                  className="absolute inset-1.5 rounded-full border border-dashed border-[#157d40]/30 animate-slow-spin"
                />
                <img
                  src="/brand/logo-navbar-1x.webp"
                  srcSet="/brand/logo-navbar-1x.webp 1x, /brand/logo-navbar-2x.webp 2x"
                  alt=""
                  width={64}
                  height={30}
                  className="relative z-10 w-14 h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Title + Intro + Selector Pills + Sliding Quote Sub-Card (sec_31.jpg–sec_32.jpg) */}
            <div className="lg:col-span-7 lg:pl-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#4a5c50] font-semibold block mb-2">
                • {currentQuemSomos.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08]">
                {currentQuemSomos.titulo}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#4a5c50] leading-relaxed">
                {currentQuemSomos.paragrafoIntro}
              </p>

              {/* Profile / Topic Selector Pills (sec_31.jpg: Active pill is solid black, inactive is light) */}
              <div className="mt-6 flex flex-wrap gap-2">
                {quemSomosAbas.map((aba, idx) => {
                  const active = idx === activeQuemSomosIdx;
                  return (
                    <button
                      key={aba.id}
                      type="button"
                      onClick={() => setActiveQuemSomosIdx(idx)}
                      className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? "bg-[#0a301a] text-[#f8faf8] shadow-md"
                          : "bg-[#f5efe6] text-[#0a301a] hover:bg-[#e2eae3]"
                      }`}
                    >
                      {aba.label}
                    </button>
                  );
                })}
              </div>

              {/* SLIDING PROFILE & QUOTE SUB-CARD (Exact match to sec_31.jpg & sec_32.jpg!) */}
              <div
                key={currentQuemSomos.id}
                className="mt-5 rounded-[24px] bg-white border border-[#e2eae3] p-6 sm:p-8 animate-scene-text shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#e2eae3]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0a301a]">
                      {currentQuemSomos.cardNome}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4a5c50] block mt-0.5">
                      {currentQuemSomos.cardCargo}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openReserva()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f8faf8] hover:bg-[#0a301a] hover:text-[#f8faf8] border border-[#e2eae3] text-[11px] font-semibold text-[#0a301a] transition-colors cursor-pointer"
                  >
                    <span>{currentQuemSomos.cardBotaoLabel}</span>
                  </button>
                </div>

                <blockquote className="mt-4 text-sm sm:text-base font-medium italic text-[#0a301a] leading-relaxed">
                  {currentQuemSomos.cardCitacao}
                </blockquote>

                <p className="mt-3 text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                  {currentQuemSomos.paragrafoCard}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          NOVA SEÇÃO EXCLUSIVA — A CAPELA PÉ NA AREIA & CELEBRAÇÕES FAMILIARES
      ===================================================================== */}
      <EditorialCapelaSection />

      {/* =====================================================================
          SEÇÃO 7 E SEÇÃO 8 — BENTO GRID ESCURO + CARD DE FAQ + CTA ESCURO +
          CENA FALTANTE 4: MEGA-WORDMARK EM GRADIENTE SOBRE FOTO FULLSCREEN NA
          BASE DO RODAPÉ (arq.mp4: 33s–44s)
      ===================================================================== */}
      <div
        id="informacoes-uteis"
        ref={bentoRef}
        className="w-full bg-gradient-to-b from-[#0a2615] via-[#082112] to-[#05170d] text-[#f8faf8] pt-16 sm:pt-24 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 space-y-6 sm:space-y-8">
          {/* SEÇÃO 7: 3 GRANDES CARDS CLAROS ARREDONDADOS EM BENTO GRID (sec_33.jpg–sec_35.jpg) */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-700 ${
              bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left Column: 2 Stacked Light Cards (Hours + Address/Buttons) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Card 1: Horários de Funcionamento (sec_33.jpg) */}
              <div className="rounded-[28px] bg-[#f8faf8] text-[#0a301a] border border-[#e2eae3] p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#4a5c50] block mb-4">
                  • ATENDIMENTO & RECEPÇÃO
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                    Todos os dias
                  </h3>
                  <p className="text-xl sm:text-2xl font-normal text-[#4a5c50] mt-0.5">
                    Check-in 12h às 22h · Check-out 11h
                  </p>
                </div>
                <p className="mt-5 text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                  Recebemos famílias e grupos com agendamento direto pelo WhatsApp, garantindo orientação completa antes da chegada na Praia do Ubatumirim.
                </p>
              </div>

              {/* Card 2: Endereço + Botões "Como chegar ↗" e "Agendar visita" (sec_34.jpg–sec_35.jpg) */}
              <div className="rounded-[28px] bg-[#f8faf8] text-[#0a301a] border border-[#e2eae3] p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#4a5c50] block mb-4">
                  • NOSSO ENDEREÇO
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight leading-snug">
                    Um refúgio feito para dar descanso aos seus dias de praia.
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                    📍 Rua Maria José de Jesus, 3006 — Praia do Ubatumirim, Ubatuba - SP (KM 16 da BR-101 Norte)
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pousada+e+Restaurante+Eliiy+Zita+Pedro+Ubatumirim+Ubatuba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0a301a] text-[#f8faf8] hover:bg-[#157d40] px-5 py-2.5 text-xs font-semibold transition-colors"
                  >
                    <span>Como chegar</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => openReserva()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#f29b2f] hover:bg-[#d98520] px-5 py-2.5 text-xs font-semibold text-[#0a301a] transition-all cursor-pointer shadow-md"
                  >
                    <span>Reservar estadia</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Large Light Card "Venha nos conhecer pessoalmente." + Panoramic Photo with Floating Location Pill (sec_34.jpg) */}
            <div className="lg:col-span-7 rounded-[28px] bg-[#f8faf8] text-[#0a301a] border border-[#e2eae3] p-7 sm:p-10 flex flex-col justify-between shadow-sm">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08]">
                  Venha nos conhecer{" "}
                  <span className="font-editorial-italic font-normal text-[1.12em]">
                    pessoalmente.
                  </span>
                </h2>
              </div>

              <div className="relative rounded-[22px] overflow-hidden aspect-[16/10] bg-[#082112]">
                <picture className="w-full h-full">
                  {editorialMedia.bentoVisitaPanoramica.mobileAvif && (
                    <source media="(max-width: 640px)" srcSet={editorialMedia.bentoVisitaPanoramica.mobileAvif} type="image/avif" />
                  )}
                  {editorialMedia.bentoVisitaPanoramica.mobileSrc && (
                    <source media="(max-width: 640px)" srcSet={editorialMedia.bentoVisitaPanoramica.mobileSrc} type="image/webp" />
                  )}
                  {editorialMedia.bentoVisitaPanoramica.avif && (
                    <source srcSet={editorialMedia.bentoVisitaPanoramica.avif} type="image/avif" />
                  )}
                  <img
                    src={editorialMedia.bentoVisitaPanoramica.src}
                    alt={editorialMedia.bentoVisitaPanoramica.alt}
                    width={1000}
                    height={625}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
                {/* Floating White Location Pill on Bottom-Left of Photo (Exact match to sec_34.jpg & sec_35.jpg!) */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f8faf8]/95 backdrop-blur-md text-[#0a301a] text-xs font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#157d40] animate-pulse" />
                    <span>Praia do Ubatumirim · Ubatuba, SP</span>
                  </div>

                  <a
                    href="#mapa-ubatumirim"
                    className="px-4 py-2 rounded-full bg-[#0a301a]/85 text-white text-xs font-medium hover:bg-[#0a301a] transition-colors"
                  >
                    Ver no mapa ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              SEÇÃO 6 — VIVÊNCIA COMPLETA NA ORLA (ESTÉTICA EXATA PRINT 4 + CARDS GLASSMORPHISM PRINT 3)
          =================================================================== */}
          <div className="rounded-[32px] bg-[#082112] text-[#f8faf8] border border-white/15 p-7 sm:p-10 lg:p-12 shadow-2xl">
            {/* Topo da Seção com Título Editorial à Esquerda e Switch/Toggle à Direita (Print 4) */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f29b2f] font-semibold block mb-2.5">
                  • VIVÊNCIA COMPLETA NA ORLA
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.06]">
                  Viva a calmaria da orla{" "}
                  <span className="font-editorial-italic font-normal text-[1.12em] text-gradient-caiçara-light">
                    com confiança.
                  </span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed">
                  Estrutura pé na areia com restaurante próprio, sombra de amendoeiras, piscina e história caiçara preservada.
                </p>
              </div>

              {/* Switch / Toggle Editorial Superior Direito (Print 4) */}
              <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md self-start lg:self-end">
                <button
                  type="button"
                  onClick={() => setOrlaTab("pousada")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    orlaTab === "pousada"
                      ? "bg-[#f29b2f] text-[#0a301a] shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Pousada & Orla ☀️
                </button>
                <button
                  type="button"
                  onClick={() => setOrlaTab("restaurante")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    orlaTab === "restaurante"
                      ? "bg-[#f29b2f] text-[#0a301a] shadow-md"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Restaurante Caiçara 🐟
                </button>
              </div>
            </div>

            {/* Sub-faixa de Destaques em Glassmorphism Refinado (Estética Exata Print 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {/* Glass Card 1: Imagem + Botão Laranja Circular (Print 3) */}
              <div className="glass-card-editorial rounded-[20px] p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[14px] overflow-hidden bg-black/40 shrink-0">
                    <img
                      src={editorialMedia.hero1.src}
                      alt="Dona Zita"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                      HOSPITALIDADE
                    </span>
                    <h4 className="text-sm font-semibold text-white">Atendimento Familiar</h4>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openReserva()}
                  className="w-8 h-8 rounded-full bg-[#f29b2f] text-[#0a301a] flex items-center justify-center font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-pointer shrink-0"
                  aria-label="Reservar"
                >
                  ↗
                </button>
              </div>

              {/* Glass Card 2: Métrica 0m Pé na Areia (Print 3) */}
              <div className="glass-card-editorial rounded-[20px] p-4 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                  DISTÂNCIA DO MAR
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-white tracking-tight">0m</span>
                  <span className="text-xs text-[#f29b2f] font-medium">Pé na areia real</span>
                </div>
                <p className="text-[11px] text-white/70 mt-1">Sem atravessar asfalto ou rua</p>
              </div>

              {/* Glass Card 3: Circular Progress 100% Mar Calmo (Print 3) */}
              <div className="glass-card-editorial rounded-[20px] p-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                    ENSEADA PROTEGIDA
                  </span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">Mar Calmo & Manso</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">Seguro para crianças</p>
                </div>
                {/* Circular Indicator 100% (Estilo Print 3) */}
                <div className="relative w-11 h-11 rounded-full border-2 border-[#f29b2f] flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#f29b2f]">100%</span>
                </div>
              </div>
            </div>

            {/* Grade de 4 Cards Verticais Elegantes com Botão Circular no Topo (Estética Exata Print 4) */}
            <div key={orlaTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-scene-text">
              {orlaTab === "pousada" ? (
                <>
                  {/* Card 1: Restaurante Pé na Areia */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src="/media/editorial/card-restaurante-sabores.webp"
                      alt="Restaurante Pé na Areia da Pousada Eliiy Zita"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      01
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • GASTRONOMIA LOCAL
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Restaurante Pé na Areia
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Pescados frescos do dia, porções generosas e café da manhã acolhedor de frente para o mar.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Pátio com Sombra de Amendoeiras */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src="/media/editorial/card-patio-brisa.webp"
                      alt="Pátio arborizado com sombra e brisa na areia"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      02
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • NATUREZA & SOMBRA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Pátio com Brisa Marítima
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Espaço aberto e seguro para crianças brincarem descalças enquanto a família relaxa sob as árvores.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Piscina com Cascata */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src="/media/editorial/card-piscina-cascata.webp"
                      alt="Piscina ao ar livre da Pousada Eliiy Zita"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      03
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • LAZER & DESCANSO
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Piscina com Cascata
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Refresque-se ao voltar da praia em uma piscina ensolarada integrada ao jardim privativo.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Capela Histórica da Família */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src={editorialMedia.hero2.src}
                      alt="Capela tradicional da família Zita Pedro"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      04
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • HISTÓRIA CAIÇARA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        A Capela Tradicional
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Símbolo de fé e das raízes familiares preservadas com carinho na Praia do Ubatumirim.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Card 1: Moqueca e Pescados Frescos */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src={editorialMedia.cena03Restaurante.src}
                      alt="Moqueca de peixe fresco caiçara"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f29b2f] text-[#0a301a] flex items-center justify-center text-xs font-bold">
                      01
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • ESPECIALIDADE DA CASA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Pescados do Dia
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Robalo, pescada e camarão fresco preparados na hora com tempero caiçara tradicional.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Café da Manhã com Vista para o Mar */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src={editorialMedia.hero1.src}
                      alt="Café da manhã de frente para a enseada"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      02
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • AMANHECER NA PRAIA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Café da Manhã na Areia
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Comece o dia com frutas frescas, pães artesanais e café quente olhando as ondas calmas.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Quiosque com Mesas na Areia */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src={editorialMedia.heroCrepusculo.src}
                      alt="Atendimento do quiosque pé na areia"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      03
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • ATENDIMENTO NA PRAIA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Mesas & Guarda-Sóis
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Desfrute de porções e bebidas geladas diretamente na sua cadeira de praia.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Drinks & Pôr do Sol */}
                  <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-[#0a301a] border border-white/15 shadow-xl group">
                    <img
                      src={editorialMedia.hero3.src}
                      alt="Drinks e entardecer na enseada de Ubatumirim"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082112] via-[#082112]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs font-bold group-hover:bg-[#f29b2f] group-hover:text-[#0a301a] transition-colors">
                      04
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f29b2f] font-semibold block mb-1">
                        • CREPÚSCULO CAIÇARA
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                        Porções & Bebidas Geladas
                      </h3>
                      <p className="mt-1.5 text-xs text-white/80 line-clamp-2 leading-relaxed">
                        Feche a tarde com petiscos crocantes e a brisa fresca da Enseada do Ubatumirim.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* SEÇÃO 7B: MAPA EDITORIAL INTERATIVO DA PRAIA DO UBATUMIRIM (ALINHADO ESTRATEGICAMENTE NO BENTO GRID) */}
          <EditorialLocationMap />

          {/* SEÇÃO 7C: CARDS DE DEPOIMENTOS ANIMADOS DO GOOGLE (Print 5: sec 34s do arq2.mp4) */}
          <div id="depoimentos" className="rounded-[28px] bg-white text-[#0a301a] border border-[#e2eae3] p-7 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#157d40] font-semibold block mb-2.5">
                  • PROVA SOCIAL & HOSPITALIDADE
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08]">
                  O que dizem as famílias que se{" "}
                  <span className="font-editorial-italic font-normal text-[1.12em]">
                    hospedaram aqui.
                  </span>
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex text-[#f29b2f] text-sm">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#0a301a]">
                    4.8 / 5.0 no Google (+160 avaliações)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                  Depoimentos reais deixados por hóspedes que vivenciaram a calmaria da Praia do Ubatumirim e o atendimento carinhoso da Dona Zita e sua equipe.
                </p>

                {/* Navigation Arrows (Print 5 style: circular buttons) */}
                <div className="mt-6 flex items-center gap-2 self-start lg:self-end">
                  <button
                    type="button"
                    onClick={() => setActiveReviewIdx((prev) => (prev > 0 ? prev - 1 : 2))}
                    aria-label="Avaliação anterior"
                    className="w-10 h-10 rounded-full bg-[#f5efe6] hover:bg-[#0a301a] hover:text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReviewIdx((prev) => (prev < 2 ? prev + 1 : 0))}
                    aria-label="Próxima avaliação"
                    className="w-10 h-10 rounded-full bg-[#f5efe6] hover:bg-[#0a301a] hover:text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials Slider Card (Matches Print 5 with Quotation + Profile Badge + Index) */}
            <div className="relative rounded-[24px] bg-[#f8faf8] border border-[#e2eae3] p-7 sm:p-10 shadow-sm transition-all duration-500">
              {activeReviewIdx === 0 && (
                <div className="animate-scene-text flex flex-col justify-between min-h-[170px]">
                  <p className="text-base sm:text-xl font-normal leading-relaxed text-[#0a301a]">
                    “Ambiente maravilhoso, pé na areia mesmo! Atendimento super familiar da Zita e de toda a equipe. As crianças amaram o mar calmo e a liberdade de brincar descalças. Com certeza voltaremos em família!”
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#e2eae3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#0a301a] text-white flex items-center justify-center font-bold text-xs">
                        FS
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0a301a]">Família Silva</h4>
                        <span className="text-[11px] text-[#788a7e]">Avaliação no Google · São Paulo/SP</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#788a7e]">01 / 03</span>
                  </div>
                </div>
              )}

              {activeReviewIdx === 1 && (
                <div className="animate-scene-text flex flex-col justify-between min-h-[170px]">
                  <p className="text-base sm:text-xl font-normal leading-relaxed text-[#0a301a]">
                    “A melhor comida caiçara da praia e a tranquilidade que a gente precisava para descansar no feriado. Quarto super limpo, cama confortável e café da manhã delicioso servido à beira-mar.”
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#e2eae3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#157d40] text-white flex items-center justify-center font-bold text-xs">
                        ML
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0a301a]">Mariana & Lucas</h4>
                        <span className="text-[11px] text-[#788a7e]">Avaliação no Google · Campinas/SP</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#788a7e]">02 / 03</span>
                  </div>
                </div>
              )}

              {activeReviewIdx === 2 && (
                <div className="animate-scene-text flex flex-col justify-between min-h-[170px]">
                  <p className="text-base sm:text-xl font-normal leading-relaxed text-[#0a301a]">
                    “Ficamos no chalé grande com 10 pessoas e foi impecável. Cozinha equipada, varanda com brisa constante e segurança total para estacionar o carro e só curtir a praia a pé.”
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#e2eae3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#f29b2f] text-[#0a301a] flex items-center justify-center font-bold text-xs">
                        RC
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0a301a]">Roberto Camargo</h4>
                        <span className="text-[11px] text-[#788a7e]">Avaliação no Google · Vale do Paraíba</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#788a7e]">03 / 03</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SEÇÃO 8A: GRANDE CARD CLARO ARREDONDADO DE FAQ (sec_36.jpg–sec_38.jpg) */}
          <div
            id="faq"
            className="rounded-[28px] bg-[#f8faf8] text-[#0a301a] border border-[#e2eae3] p-7 sm:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Eyebrow + Title + Paragraph + Black Pill Button with White Circle (sec_37.jpg) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#4a5c50] font-semibold block mb-3">
                    • DÚVIDAS FREQUENTES
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.06]">
                    Perguntas
                    <br />
                    frequentes
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-[#4a5c50] leading-relaxed max-w-sm">
                    Reunimos as dúvidas mais comuns de quem está planejando se hospedar em Ubatumirim. Se a sua não estiver aqui, fale direto com a gente.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/5512992323656?text=Ol%C3%A1%20Dona%20Zita!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20acomoda%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-6 rounded-full bg-[#0a301a] text-[#f8faf8] pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold hover:bg-[#157d40] transition-colors"
                  >
                    <span>Tirar minha dúvida</span>
                    <span className="w-8 h-8 rounded-full bg-[#f8faf8] text-[#0a301a] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column: Individual Rounded Accordion Bars with Circular Black '+' Buttons (Exact match to sec_37.jpg) */}
              <div className="lg:col-span-7 space-y-3">
                {faqEditorial.map((item, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-[#e2eae3] px-5 sm:px-6 py-4 transition-all shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-medium tracking-tight text-[#0a301a]">
                          {item.p}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                            isOpen
                              ? "bg-[#0a301a] text-white rotate-45"
                              : "bg-[#0a301a] text-[#f8faf8]"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-[#4a5c50] leading-relaxed pr-8">
                            {item.r}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SEÇÃO 8B: CTA ESCURO MINIMALISTA + 3 COLUNAS DE RODAPÉ (sec_39.jpg–sec_42.jpg) */}
          <div id="contato-final" className="pt-16 sm:pt-24 pb-12 px-2 sm:px-6">
            {/* CTA Row (sec_40.jpg) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 sm:pb-24 border-b border-white/15">
              <div className="lg:col-span-5">
                <p className="text-xs text-white/75 leading-relaxed max-w-[220px]">
                  Hospedagem com identidade,
                  <br />
                  para famílias reais.
                </p>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-white leading-[1.06]">
                  Hospedagem com
                  <br />
                  identidade.
                  <br />
                  Comece por aqui.
                </h2>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => openReserva()}
                    className="group inline-flex items-center justify-between gap-6 rounded-full btn-gradient-caiçara text-white pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold shadow-xl transition-all cursor-pointer border border-white/20"
                  >
                    <span>Solicitar reserva</span>
                    <span className="w-8 h-8 rounded-full bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            GLOBAL EDITORIAL FOOTER COMPONENT (Print 7: idêntico em todas as páginas)
        =================================================================== */}
        </div>
        <div className="w-full">
          <EditorialFooter />
        </div>

      {/* =====================================================================
          MODAL DE VÍDEO REAL DA ACOMODAÇÃO (ACIONADO NA SEÇÃO 4)
      ===================================================================== */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideoModal.legenda}
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[28px] bg-[#082112] text-[#f8faf8] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
              <span className="text-xs uppercase tracking-[0.16em] text-white/85">
                {activeVideoModal.legenda}
              </span>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center text-xs hover:bg-white hover:text-[#0a301a] cursor-pointer"
                aria-label="Fechar vídeo"
              >
                ✕
              </button>
            </div>
            <video
              src={activeVideoModal.mp4}
              poster={activeVideoModal.poster}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[70vh] rounded-2xl bg-black object-contain"
            />
          </div>
        </div>
      )}

      {/* =====================================================================
          DRAWER EDITORIAL DE RESERVA DIRETA
      ===================================================================== */}
      <EditorialReservaDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        defaultAcomodacaoSlug={drawerDefaultSlug}
      />
    </div>
    </>
  );
}
