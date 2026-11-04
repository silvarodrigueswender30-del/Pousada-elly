"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem("cookie_consent_pousada_v1");
      if (!consent) {
        // Exibe com transição suave após o carregamento inicial da página
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignora erro de acesso a localStorage em ambientes restritos
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("cookie_consent_pousada_v1", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem("cookie_consent_pousada_v1", "essential_only");
    } catch {}
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Cookies"
      role="region"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-fade-in-up"
    >
      <div className="bg-[#0a301a]/95 backdrop-blur-md text-[#f8faf8] border border-[#f29b2f]/35 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
        {/* Header do Banner */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#f29b2f]/20 text-[#f29b2f] flex items-center justify-center border border-[#f29b2f]/30">
              <Cookie className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              Privacidade & Experiência
            </span>
          </div>
          <button
            type="button"
            onClick={handleAcceptEssential}
            aria-label="Fechar aviso de cookies"
            className="text-white/60 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mensagem LGPD */}
        <p className="text-xs text-white/85 leading-relaxed mb-4">
          Utilizamos cookies para assegurar o funcionamento correto do site, analisar o desempenho de navegação e garantir um atendimento seguro e direto na Praia do Ubatumirim, em conformidade com a LGPD.
        </p>

        {/* Links & Ações */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          <Link
            href="/politica-de-privacidade"
            className="text-[11px] text-[#f29b2f] hover:underline underline-offset-2 font-medium text-center sm:text-left py-1"
          >
            Ler Política de Privacidade
          </Link>

          <div className="flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="flex-1 sm:flex-none text-xs px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-colors border border-white/15 cursor-pointer"
            >
              Apenas Essenciais
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none text-xs px-4 py-1.5 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-semibold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
