import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { EditorialFooter } from "@/components/EditorialFooter";
import { ArrowLeft, FileText, Clock, Home, AlertCircle, ShieldCheck, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso & Regras de Hospedagem | Pousada Eliiy Zita Pedro",
  description:
    "Diretrizes oficiais de estadia, horários de check-in/out, regras de convivência e reserva direta na Pousada e Restaurante Eliiy Zita Pedro, Ubatumirim, Ubatuba/SP.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8] text-[#0a301a]">
      {/* Header Editorial Simplificado */}
      <header className="sticky top-0 z-40 bg-[#0a301a]/95 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-[#f29b2f] text-[#0a301a] flex items-center justify-center font-bold text-xs shadow-md">
              ez
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider uppercase">
                ELIIY ZITA
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/70">
                Pousada & Restaurante
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90 hover:text-[#f29b2f] transition-colors px-4 py-2 rounded-full border border-white/15 hover:border-[#f29b2f]/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Badge e Título */}
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a301a]/5 text-[#0a301a] border border-[#0a301a]/15 text-xs font-semibold uppercase tracking-widest mb-4">
            <FileText className="w-4 h-4 text-[#077c37]" />
            Regulamento Interno & Transparência
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a301a]">
            Termos de Uso & Regras de Hospedagem
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#0a301a]/75 leading-relaxed max-w-2xl">
            Bem-vindo à Pousada e Restaurante Eliiy Zita Pedro. Nosso compromisso é proporcionar uma estadia tranquila, acolhedora e memorável de frente para o mar calmo da Praia do Ubatumirim.
          </p>
        </div>

        {/* Blocos de Diretrizes */}
        <div className="space-y-8 text-sm sm:text-base text-[#0a301a]/85 leading-relaxed border-t border-[#0a301a]/10 pt-8">
          {/* 01. Horários */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h2 className="text-xl font-bold text-[#0a301a] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#f29b2f]" />
                Horários de Entrada e Saída
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#f8faf8] p-4 rounded-xl border border-[#0a301a]/10">
                <span className="text-xs uppercase font-mono tracking-wider text-[#077c37] font-semibold block">
                  Check-in (Entrada)
                </span>
                <p className="text-lg font-bold text-[#0a301a] mt-1">A partir das 12:00h</p>
                <p className="text-xs text-[#0a301a]/70 mt-1">Atendimento de recepção até às 22:00h. Casos especiais mediante aviso prévio pelo WhatsApp.</p>
              </div>
              <div className="bg-[#f8faf8] p-4 rounded-xl border border-[#0a301a]/10">
                <span className="text-xs uppercase font-mono tracking-wider text-[#f29b2f] font-semibold block">
                  Check-out (Saída)
                </span>
                <p className="text-lg font-bold text-[#0a301a] mt-1">Até às 11:00h</p>
                <p className="text-xs text-[#0a301a]/70 mt-1">Garante o tempo adequado de higienização e preparo para os próximos hóspedes.</p>
              </div>
            </div>
          </section>

          {/* 02. Reserva Direta & Tarifas */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h2 className="text-xl font-bold text-[#0a301a] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#077c37]" />
                Reserva Direta e Condições Comerciais
              </h2>
            </div>
            <p>
              Ao realizar sua reserva diretamente pelos nossos canais oficiais (WhatsApp com Dona Zita e Família), você tem a garantia de:
            </p>
            <ul className="space-y-2 mt-3 list-disc list-inside pl-2 text-sm">
              <li><strong>Tarifa mais vantajosa:</strong> Sem comissões de intermediários ou plataformas terceiras (OTAs);</li>
              <li><strong>Escolha exata da unidade:</strong> Seleção precisa do chalé privativo com cozinha ou suíte de acordo com a quantidade de pessoas da sua família;</li>
              <li><strong>Confirmação formal:</strong> Envio de comprovante de reserva, roteiro detalhado de chegada via BR-101 e orientações locais da maré.</li>
            </ul>
          </section>

          {/* 03. Capacidade e Convivência */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h2 className="text-xl font-bold text-[#0a301a] flex items-center gap-2">
                <Home className="w-5 h-5 text-[#0a301a]" />
                Capacidade e Regras de Convivência
              </h2>
            </div>
            <p>
              Nossa estrutura familiar foi concebida para momentos de repouso e contato com a natureza. Por isso:
            </p>
            <ul className="space-y-2 mt-3 list-disc list-inside pl-2 text-sm">
              <li><strong>Capacidade Máxima:</strong> Cada chalé e suíte possui limite estrito de ocupação registrado na reserva (ex: Chalé Master até 15 pessoas, Suíte até 4 pessoas). Não é permitida a entrada de hóspedes adicionais sem autorização prévia;</li>
              <li><strong>Lei do Silêncio:</strong> Entre 22:00h e 08:00h é exigido silêncio respeitoso para preservar a calmaria dos demais hóspedes e da vizinhança caiçara;</li>
              <li><strong>Área de Piscina e Quiosque:</strong> O uso da piscina e chuveiros externos é exclusivo para hóspedes e clientes do restaurante conforme sinalização de segurança.</li>
            </ul>
          </section>

          {/* 04. Preservação Ambiental */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                04
              </span>
              <h2 className="text-xl font-bold text-[#0a301a] flex items-center gap-2">
                <Waves className="w-5 h-5 text-[#7abcd5]" />
                Preservação da Praia do Ubatumirim
              </h2>
            </div>
            <p>
              A Praia do Ubatumirim é uma joia natural protegida do Litoral Norte de São Paulo. Incentivamos fortemente todos os hóspedes a praticarem o descarte correto de resíduos, recolherem seus pertences da orla e evitarem o tráfego de veículos sobre a vegetação de restinga.
            </p>
          </section>

          {/* 05. Contato Direto */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-[#0a301a]">
                Dúvidas sobre o regulamento ou sua reserva?
              </h3>
              <p className="text-sm text-[#0a301a]/70 mt-1">
                Fale diretamente com a equipe da Pousada Eliiy Zita Pedro.
              </p>
            </div>
            <a
              href="https://wa.me/5512992323656"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-semibold text-sm transition-all shadow-md"
            >
              Falar no WhatsApp Oficial ↗
            </a>
          </section>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
