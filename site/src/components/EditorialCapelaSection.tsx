"use client";

import React from "react";

export function EditorialCapelaSection() {
  const whatsappUrl =
    "https://wa.me/5512992323656?text=" +
    encodeURIComponent(
      "Olá Dona Zita! Vim pelo site e gostaria de informações sobre a Capela da pousada (para renovação de votos, celebrações em família ou visita)."
    );

  return (
    <section
      id="capela"
      aria-labelledby="capela-heading"
      className="w-full py-20 sm:py-28 bg-gradient-to-b from-[#f8faf8] via-[#faf6f0] to-[#f4eee4] text-[#0a301a] border-t border-[#0a301a]/08 relative overflow-hidden"
    >
      {/* Detalhe de fundo decorativo com formas orgânicas sutis */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#157d40]/04 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#f29b2f]/06 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Coluna Esquerda: Fotografia da Capela em Moldura Editorial com Selo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-[#082112] shadow-2xl border border-[#e2eae3]">
              <picture>
                <source
                  srcSet="/media/capela-praia.avif"
                  type="image/avif"
                />
                <source
                  media="(max-width: 640px)"
                  srcSet="/media/capela-praia-mobile.webp"
                  type="image/webp"
                />
                <img
                  src="/media/capela-praia.webp"
                  alt="Capela privativa da Pousada Eliiy Zita Pedro integrada ao gramado e jardim tropical na Praia do Ubatumirim"
                  width={1440}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </picture>

              {/* Scrim Gradiente e Legenda Fotográfica */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a301a]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f29b2f] font-mono block">
                    PATRIMÔNIO AFETIVO · PRAIA DO UBATUMIRIM
                  </span>
                  <p className="text-sm sm:text-base font-semibold mt-1">
                    Capela em meio ao jardim e brisa da enseada
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    Ambiente de fé, acolhimento familiar e tranquilidade
                  </p>
                </div>
              </div>
            </div>

            {/* Selo Flutuante Editorial na Borda da Imagem */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e2eae3] p-4 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f6efe3] flex items-center justify-center text-[#157d40] text-lg font-bold">
                ⛪
              </div>
              <div>
                <span className="text-xs font-semibold text-[#0a301a] block">
                  Capela Privativa
                </span>
                <span className="text-[10px] text-[#4a5c50] block">
                  Exclusiva para hóspedes & famílias
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Copy Persuasiva, Diferenciais e Botão Exclusivo */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#157d40]/10 border border-[#157d40]/20 text-[#157d40] text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#157d40] animate-pulse" />
                <span>CAPELA PÉ NA AREIA & CELEBRAÇÕES</span>
              </div>

              <h2
                id="capela-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#0a301a]"
              >
                Um espaço de paz e fé para momentos que marcam{" "}
                <span className="font-editorial-italic font-normal text-[#157d40]">
                  a história da sua família.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-[#4a5c50] leading-relaxed">
                Erguida em meio ao jardim tropical e ao gramado da pousada, a poucos passos do mar sereno de Ubatumirim, nossa capela privativa acolhe com delicadeza quem busca renovação de votos, bênçãos de bodas, batizados intimistas ou simplesmente momentos de reflexão e oração com o som suave das ondas ao fundo.
              </p>
            </div>

            {/* Grid com 3 Destaques Estruturais */}
            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#e2eae3]/80 hover:bg-white transition-all shadow-sm">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#0a301a] text-[#f29b2f] flex items-center justify-center text-sm font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0a301a]">
                    Renovação de Votos & Bodas em Família
                  </h3>
                  <p className="text-xs text-[#4a5c50] mt-0.5 leading-relaxed">
                    Celebre datas inesquecíveis reunindo pais, filhos e avós em um cenário paradisíaco e intimista, com pé na areia e sem a impessoalidade de grandes resorts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#e2eae3]/80 hover:bg-white transition-all shadow-sm">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#0a301a] text-[#f29b2f] flex items-center justify-center text-sm font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0a301a]">
                    Espiritualidade & Recanto de Silêncio
                  </h3>
                  <p className="text-xs text-[#4a5c50] mt-0.5 leading-relaxed">
                    Um recanto preservado para grupos de oração, momentos de recolhimento espiritual e gratidão no amanhecer ou ao entardecer na praia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 border border-[#e2eae3]/80 hover:bg-white transition-all shadow-sm">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-[#0a301a] text-[#f29b2f] flex items-center justify-center text-sm font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0a301a]">
                    Hospedagem & Gastronomia Integradas
                  </h3>
                  <p className="text-xs text-[#4a5c50] mt-0.5 leading-relaxed">
                    Sua família se hospeda nos chalés com cozinha para até 15 pessoas e desfruta do nosso restaurante caiçara próprio de frente para a enseada.
                  </p>
                </div>
              </div>
            </div>

            {/* Citação Afetiva + Botão de Ação Direta no WhatsApp */}
            <div className="mt-8 pt-6 border-t border-[#0a301a]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-serif-editorial italic text-[#0a301a] leading-tight">
                  &ldquo;A capela foi feita para acolher quem vem em busca de paz e de coração aberto.&rdquo;
                </p>
                <span className="text-[11px] font-mono text-[#157d40] font-semibold block mt-1">
                  — Dona Zita, anfitriã oficial
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer shrink-0"
              >
                <span>Falar com Dona Zita sobre a Capela</span>
                <span aria-hidden="true" className="text-sm font-bold">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
