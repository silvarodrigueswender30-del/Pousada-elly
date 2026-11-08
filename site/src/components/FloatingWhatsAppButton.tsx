"use client";

import React, { useState, useEffect } from "react";

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Exibe balão interativo após 3.5 segundos para engajar o visitante
    const t = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 3800);
    return () => clearTimeout(t);
  }, [dismissed]);

  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%2C%20Eliiy!%20Estou%20no%20site%20da%20pousada%20e%20gostaria%20de%20consultar%20a%20melhor%20tarifa%20de%20reserva%20direta.";

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end">
      {/* Balão Interativo Influenciador (Preço Melhor / Sem Taxas) */}
      {showTooltip && (
        <div className="relative mb-3 max-w-[270px] sm:max-w-[310px] rounded-2xl bg-white border border-[#e2eae3] p-3.5 sm:p-4 shadow-2xl animate-scene-text text-[#0a301a]">
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            aria-label="Fechar mensagem"
            className="absolute top-2 right-2 text-xs text-[#788a7e] hover:text-[#0a301a] p-1"
          >
            ✕
          </button>
          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#157d40] shrink-0 mt-1 animate-pulse" />
            <div>
              <p className="text-xs font-semibold leading-tight text-[#0a301a]">
                Economize até 20% na Reserva Direta!
              </p>
              <p className="mt-1 text-[11px] text-[#4a5c50] leading-snug">
                Fale direto com a Eliiy pelo WhatsApp e garanta a menor tarifa sem as comissões do Booking.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#157d40] hover:text-[#0a301a] underline"
              >
                <span>Chamar agora no WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>
          {/* Ponta da seta do balão */}
          <div className="absolute -bottom-2 right-6 w-3.5 h-3.5 bg-white border-b border-r border-[#e2eae3] rotate-45" />
        </div>
      )}

      {/* Botão Flutuante Circular com Ícone do WhatsApp e Ondas de Pulso */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Pousada pelo WhatsApp oficial"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-[#25D366]/20"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingWhatsAppButton;
