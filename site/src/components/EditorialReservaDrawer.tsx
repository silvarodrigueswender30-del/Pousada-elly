"use client";

import React, { useState, useEffect } from "react";
import { acomodacoes } from "@/data/acomodacoes";

interface EditorialReservaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAcomodacaoSlug?: string;
}

export default function EditorialReservaDrawer({
  isOpen,
  onClose,
  defaultAcomodacaoSlug = "",
}: EditorialReservaDrawerProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hospedes, setHospedes] = useState("4");
  const [acomodacaoSlug, setAcomodacaoSlug] = useState(defaultAcomodacaoSlug);
  const [observacao, setObservacao] = useState("");

  useEffect(() => {
    if (defaultAcomodacaoSlug) {
      setAcomodacaoSlug(defaultAcomodacaoSlug);
    }
  }, [defaultAcomodacaoSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedUnit = acomodacoes.find((a) => a.slug === acomodacaoSlug);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unidadeTexto =
      acomodacaoSlug === "capela"
        ? "Capela da Pousada (Renovação de votos / Celebrações)"
        : selectedUnit
          ? `${selectedUnit.nome} (${selectedUnit.capacidade})`
          : "Sugestão ideal para meu grupo";
    const datasTexto =
      checkIn && checkOut
        ? `de ${checkIn.split("-").reverse().join("/")} a ${checkOut.split("-").reverse().join("/")}`
        : checkIn
          ? `a partir de ${checkIn.split("-").reverse().join("/")}`
          : "datas a definir";
    const obsTexto = observacao.trim() ? ` | Obs: ${observacao.trim()}` : "";

    const msg = `Olá, Eliiy! Vim pelo site oficial e gostaria de consultar disponibilidade e tarifa direta:\n• Acomodação: ${unidadeTexto}\n• Período: ${datasTexto}\n• Hóspedes: ${hospedes} pessoa(s)${obsTexto}`;
    window.open(
      `https://wa.me/5512992323656?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Solicitar reserva direta com a Eliiy"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#f8faf8] text-[#0a301a] h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#e2eae3]">
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo-navbar-1x.webp"
                srcSet="/brand/logo-navbar-1x.webp 1x, /brand/logo-navbar-2x.webp 2x"
                alt="Logo Pousada Eliiy Zita Pedro"
                width={56}
                height={26}
                className="h-7 w-auto object-contain"
              />
              <span className="text-xs uppercase tracking-[0.18em] text-[#4a5c50] font-medium">
                Reserva Direta · Sem Taxas
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-sm font-medium hover:bg-[#157d40] transition-colors cursor-pointer"
              aria-label="Fechar janela de reserva"
            >
              ✕
            </button>
          </div>

          {/* Editorial Heading */}
          <div className="mt-8 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#157d40] font-semibold mb-2">
              ATENDIMENTO PESSOAL · PRAIA DO UBATUMIRIM
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.12]">
              Planeje seus dias de{" "}
              <span className="font-editorial-italic font-normal text-[1.12em]">
                mar calmo.
              </span>
            </h2>
            <p className="mt-3 text-sm text-[#4a5c50] leading-relaxed">
              Ao reservar diretamente pelo WhatsApp da pousada, você conversa com a equipe da Eliiy, escolhe entre as 5 acomodações com cozinha (3 a 15 pessoas) ou as 3 suítes (2 a 4 pessoas) e garante a tarifa direta sem comissões de intermediários.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="drawer-checkin"
                  className="block text-xs uppercase tracking-[0.14em] text-[#4a5c50] mb-2 font-medium"
                >
                  Data de Entrada
                </label>
                <input
                  id="drawer-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full rounded-2xl bg-white border border-[#e2eae3] px-4 py-3 text-sm text-[#0a301a] focus:outline-none focus:border-[#0a301a]"
                />
              </div>
              <div>
                <label
                  htmlFor="drawer-checkout"
                  className="block text-xs uppercase tracking-[0.14em] text-[#4a5c50] mb-2 font-medium"
                >
                  Data de Saída
                </label>
                <input
                  id="drawer-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full rounded-2xl bg-white border border-[#e2eae3] px-4 py-3 text-sm text-[#0a301a] focus:outline-none focus:border-[#0a301a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="drawer-hospedes"
                  className="block text-xs uppercase tracking-[0.14em] text-[#4a5c50] mb-2 font-medium"
                >
                  Total de Hóspedes
                </label>
                <select
                  id="drawer-hospedes"
                  value={hospedes}
                  onChange={(e) => setHospedes(e.target.value)}
                  className="w-full rounded-2xl bg-white border border-[#e2eae3] px-4 py-3 text-sm text-[#0a301a] focus:outline-none focus:border-[#0a301a]"
                >
                  <option value="2">2 pessoas (Casal)</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5">5 pessoas</option>
                  <option value="6 a 8">6 a 8 pessoas</option>
                  <option value="9 a 10">9 a 10 pessoas</option>
                  <option value="11 a 15">11 a 15 pessoas (Acomodação Master)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="drawer-acomodacao"
                  className="block text-xs uppercase tracking-[0.14em] text-[#4a5c50] mb-2 font-medium"
                >
                  Unidade Desejada
                </label>
                <select
                  id="drawer-acomodacao"
                  value={acomodacaoSlug}
                  onChange={(e) => setAcomodacaoSlug(e.target.value)}
                  className="w-full rounded-2xl bg-white border border-[#e2eae3] px-4 py-3 text-sm text-[#0a301a] focus:outline-none focus:border-[#0a301a]"
                >
                  <option value="">Quero indicação para meu grupo</option>
                  <optgroup label="Acomodações com Cozinha Privativa (3 a 15 pessoas)">
                    {acomodacoes
                      .filter((a) => a.categoria === "Chale")
                      .map((a) => (
                        <option key={a.slug} value={a.slug}>
                          {a.nome} ({a.capacidade})
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Suítes Pé na Areia (Sem cozinha · 2 a 4 pessoas)">
                    {acomodacoes
                      .filter((a) => a.categoria === "Suite")
                      .map((a) => (
                        <option key={a.slug} value={a.slug}>
                          {a.nome} ({a.capacidade})
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Espaços Especiais & Celebrações">
                    <option value="capela">⛪ Capela da Pousada (Renovação de Votos / Celebrações)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="drawer-obs"
                className="block text-xs uppercase tracking-[0.14em] text-[#4a5c50] mb-2 font-medium"
              >
                Preferência opcional (ex.: vista mar, churrasqueira, térreo)
              </label>
              <input
                id="drawer-obs"
                type="text"
                placeholder="Ex.: Queremos cozinhar na acomodação / Temos crianças pequenas"
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
                className="w-full rounded-2xl bg-white border border-[#e2eae3] px-4 py-3 text-sm text-[#0a301a] focus:outline-none focus:border-[#0a301a]"
              />
            </div>

            {/* Signature CTA Solar Button */}
            <button
              type="submit"
              className="w-full group flex items-center justify-between rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] pl-6 pr-2 py-2.5 text-sm font-semibold transition-all cursor-pointer shadow-lg"
            >
              <span>Consultar tarifa direta no WhatsApp</span>
              <span className="w-10 h-10 rounded-full bg-[#0a301a] text-[#f8faf8] flex items-center justify-center font-semibold transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </button>
          </form>
        </div>

        {/* Footer Info inside Drawer */}
        <div className="mt-8 pt-6 border-t border-[#e2eae3] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#4a5c50]">
          <span>Check-in: 12h às 22h · Check-out: até 11h</span>
          <span>WhatsApp Oficial: (12) 99232-3656</span>
        </div>
      </div>
    </div>
  );
}
