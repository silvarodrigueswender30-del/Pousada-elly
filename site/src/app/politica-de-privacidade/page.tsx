import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { EditorialFooter } from "@/components/EditorialFooter";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade & Proteção de Dados (LGPD) | Pousada Eliiy Zita Pedro",
  description:
    "Transparência total no tratamento de dados para reservas diretas e navegação segura na Pousada e Restaurante Eliiy Zita Pedro, Praia do Ubatumirim, Ubatuba/SP.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
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
            <ShieldCheck className="w-4 h-4 text-[#077c37]" />
            Em conformidade com a LGPD (Lei 13.709/2018)
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a301a]">
            Política de Privacidade & Segurança
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#0a301a]/75 leading-relaxed max-w-2xl">
            A Pousada e Restaurante Eliiy Zita Pedro preza pela transparência, privacidade e proteção dos dados de seus hóspedes, clientes e visitantes. Conheça as diretrizes de tratamento e segurança das suas informações.
          </p>
          <div className="mt-4 text-xs font-mono text-[#0a301a]/60">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
          </div>
        </div>

        {/* Blocos de Conteúdo */}
        <div className="space-y-8 text-sm sm:text-base text-[#0a301a]/85 leading-relaxed border-t border-[#0a301a]/10 pt-8">
          {/* Seção 1 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Controlador e Encarregado dos Dados
              </h2>
            </div>
            <p>
              O controlador dos dados coletados por este sítio eletrônico é a <strong>Pousada e Restaurante Eliiy Zita Pedro</strong>, localizada na Rua Maria José de Jesus, 3005/3006, Canto do Iriri, Praia do Ubatumirim, Ubatuba - SP.
            </p>
            <p className="mt-3">
              Qualquer solicitação, esclarecimento ou exercício de direitos referentes aos seus dados pessoais pode ser efetuado diretamente pelo nosso canal oficial de atendimento via WhatsApp: <strong>+55 (12) 99232-3656</strong>.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Dados Coletados e Finalidade
              </h2>
            </div>
            <p className="mb-3">
              Coletamos exclusivamente os dados necessários para garantir a sua melhor experiência de reserva direta e navegação:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#077c37] shrink-0 mt-1" />
                <span>
                  <strong>Atendimento e Reserva Direta:</strong> Nome completo, telefone de contato, data de entrada e saída, número de hóspedes e preferências de acomodação (chalé ou suíte), fornecidos voluntariamente via WhatsApp ou formulário de consulta.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#077c37] shrink-0 mt-1" />
                <span>
                  <strong>Dados Técnicos de Navegação:</strong> Informações anônimas de telemetria (tipo de dispositivo, navegador, resolução de tela e tempo de permanência) estritamente utilizadas para otimização de desempenho e tempo de carregamento do site.
                </span>
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Política de Cookies e Armazenamento Local
              </h2>
            </div>
            <p>
              Nosso site utiliza cookies estritamente necessários para o funcionamento básico e armazenamento local (<em>localStorage</em>) para lembrar suas preferências (como a aceitação deste termo de cookies e preferências de redução de movimento).
            </p>
            <p className="mt-3">
              Você pode desativar o armazenamento de cookies diretamente nas configurações do seu navegador web a qualquer momento, sem prejuízo ao acesso às informações da pousada e opções de acomodações.
            </p>
          </section>

          {/* Seção 4 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                04
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Não Compartilhamento com Terceiros
              </h2>
            </div>
            <p>
              A Pousada Eliiy Zita Pedro <strong>não comercializa, não aluga e não repassa</strong> seus dados pessoais para terceiros, bureaus de crédito ou plataformas de publicidade comportamental.
            </p>
            <p className="mt-3">
              Suas informações de contato permanecem confidenciais e são usadas exclusivamente para gerenciar seu atendimento direto com a família anfitriã (Dona Zita e equipe).
            </p>
          </section>

          {/* Seção 5 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                05
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Segurança e Criptografia
              </h2>
            </div>
            <p>
              Toda a comunicação com este portal é protegida por criptografia de ponta a ponta com certificados SSL/TLS (HTTPS). Adotamos padrões técnicos avançados de arquitetura JAMstack estática (Next.js 15 na Vercel), reduzindo vulnerabilidades de banco de dados e assegurando alta proteção contra acessos não autorizados.
            </p>
          </section>

          {/* Seção 6 */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0a301a]/10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#0a301a]/10 text-[#0a301a] flex items-center justify-center font-bold text-sm">
                06
              </span>
              <h2 className="text-xl font-bold text-[#0a301a]">
                Seus Direitos como Titular (LGPD)
              </h2>
            </div>
            <p className="mb-3">
              Em atendimento ao artigo 18 da LGPD, você pode a qualquer momento solicitar:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-sm pl-2">
              <li>Confirmação da existência de tratamento dos seus dados;</li>
              <li>Acesso aos dados coletados;</li>
              <li>Correção de dados incompletos ou inexatos;</li>
              <li>Eliminação de dados pessoais tratados com consentimento prévio.</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[#0a301a]/10 flex items-center gap-3">
              <a
                href="https://wa.me/5512992323656"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-semibold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>Falar com o Encarregado via WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <EditorialFooter />
    </div>
  );
}
