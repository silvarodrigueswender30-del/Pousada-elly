import Link from "next/link";
import { acomodacoes } from "@/data/acomodacoes";

export function Suites() {
  const chaleDestaque = acomodacoes.find((a) => a.slug === "chale-master-15p")!;
  const chalesLista = acomodacoes.filter(
    (a) => a.categoria === "Chale" && a.slug !== "chale-master-15p"
  );

  const suiteDestaque = acomodacoes.find((a) => a.slug === "suite-quadrupla-4p")!;
  const suitesLista = acomodacoes.filter(
    (a) => a.categoria === "Suite" && a.slug !== "suite-quadrupla-4p"
  );

  return (
    <section id="acomodacoes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8faf8] border-b border-[#dce5dd]">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* Cabeçalho Editorial Assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dce5dd]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
              02 · Duas Formas de se Hospedar
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
              Acomodações com cozinha para grupos de 3 a 15 pessoas e suítes pé na areia.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#3b4d41] leading-relaxed">
            Como explica a pousada: os <strong>acomodações</strong> são unidades equipadas com cozinha privativa para quem deseja cozinhar; já as <strong>suítes</strong> não têm cozinha, perfeitas para quem prefere fazer as refeições no restaurante da pousada. Cada página dedicada traz fotos exclusivas e vídeo real quando disponível.
          </p>
        </div>

        {/* =====================================================================
            BLOCO A: ACOMODAÇÕES COM COZINHA PRIVATIVA (DESTAQUE + LISTA ASSIMÉTRICA)
           ===================================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
              Categoria A — 5 Acomodações com Cozinha Privativa (3 a 15 pessoas)
            </h3>
            <span className="text-xs font-medium text-[#3b4d41]">
              Todos com fogão, geladeira e pia · Churrasqueira na propriedade (consultar por unidade)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Card Mestre em Destaque: Chalé Master 15 Pessoas */}
            <article className="lg:col-span-7 bg-white rounded-2xl border border-[#dce5dd] overflow-hidden shadow-xs">
              <Link href={`/acomodacoes/${chaleDestaque.slug}`} className="block relative h-64 sm:h-80 w-full bg-neutral-100">
                <img
                  src={chaleDestaque.fotos[0].url}
                  alt={chaleDestaque.fotos[0].alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#061f10]/90 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  Maior Acomodação · {chaleDestaque.capacidade}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 text-[#0a301a] px-3 py-1 rounded-full text-xs font-semibold">
                  Inclui vídeo real de 7s na página ↗
                </div>
              </Link>

              {/* Faixa de 2 miniaturas exclusivas adicionais do Chalé Master */}
              <div className="grid grid-cols-2 gap-2 p-2 bg-[#f2f6f3] border-b border-[#dce5dd]">
                {chaleDestaque.fotos.slice(1, 3).map((f, i) => (
                  <div key={i} className="relative h-24 sm:h-28 rounded-xl overflow-hidden">
                    <img
                      src={f.url}
                      alt={f.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#077c37]">
                  <span>2 Pavimentos</span>
                  <span>·</span>
                  <span>Cozinha no Térreo</span>
                  <span>·</span>
                  <span>Varanda Superior Vista Mar</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
                  <Link href={`/acomodacoes/${chaleDestaque.slug}`} className="hover:text-[#077c37]">
                    {chaleDestaque.nome}
                  </Link>
                </h4>

                <p className="text-sm text-[#3b4d41] leading-relaxed">
                  {chaleDestaque.descricaoCurta}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/acomodacoes/${chaleDestaque.slug}`}
                    className="flex-1 inline-flex items-center justify-center bg-[#077c37] hover:bg-[#0e4f29] text-white font-semibold text-sm py-3 px-5 rounded-xl transition-colors"
                  >
                    Ver Página, Vídeo e Detalhes
                  </Link>
                  <a
                    href={`https://wa.me/5512992323656?text=${encodeURIComponent(chaleDestaque.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-sm py-3 px-5 rounded-xl transition-colors"
                  >
                    Cotar no WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Coluna Direita: Lista Editorial dos outros 4 Chalés (Zero foto repetida) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#dce5dd] divide-y divide-[#dce5dd] overflow-hidden shadow-xs">
              {chalesLista.map((chale) => (
                <article key={chale.slug} className="p-5 sm:p-6 hover:bg-[#f8faf8] transition-colors space-y-3">
                  <div className="flex gap-4 items-start">
                    {chale.fotos[0] && (
                      <Link
                        href={`/acomodacoes/${chale.slug}`}
                        className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-neutral-100 border border-[#dce5dd]"
                      >
                        <img
                          src={chale.fotos[0].url}
                          alt={chale.fotos[0].alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    )}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#077c37]">
                          {chale.capacidade}
                        </span>
                        {(chale.videoCard || (chale.videos && chale.videos.length > 0)) && (
                          <span className="text-[11px] font-semibold text-[#3b4d41] bg-[#eef3ef] px-2 py-0.5 rounded-full">
                            Com vídeo real
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-[#0a301a] leading-snug">
                        <Link href={`/acomodacoes/${chale.slug}`} className="hover:text-[#077c37]">
                          {chale.nome}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#3b4d41] line-clamp-2 leading-relaxed">
                        {chale.descricaoCurta}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <Link
                      href={`/acomodacoes/${chale.slug}`}
                      className="text-xs font-bold text-[#077c37] hover:underline"
                    >
                      Abrir página da acomodação →
                    </Link>
                    <a
                      href={`https://wa.me/5512992323656?text=${encodeURIComponent(chale.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0a301a] bg-[#f29b2f]/30 hover:bg-[#f29b2f]/45 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Cotar WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================================
            BLOCO B: SUÍTES PÉ NA AREIA SEM COZINHA (DESTAQUE + LISTA ASSIMÉTRICA)
           ===================================================================== */}
        <div className="space-y-6 pt-4 border-t border-[#dce5dd]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
              Categoria B — 3 Suítes Pé na Areia Sem Cozinha (2 a 4 pessoas)
            </h3>
            <span className="text-xs font-medium text-[#3b4d41]">
              Voltadas a casais e famílias que fazem as refeições no restaurante da pousada
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Card Destaque: Suíte Quádrupla Familiar com Varanda */}
            <article className="lg:col-span-7 bg-white rounded-2xl border border-[#dce5dd] overflow-hidden shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-[#f2f6f3]">
                {suiteDestaque.fotos.slice(0, 2).map((f, i) => (
                  <Link
                    key={i}
                    href={`/acomodacoes/${suiteDestaque.slug}`}
                    className="relative h-56 sm:h-64 w-full block overflow-hidden"
                  >
                    <img
                      src={f.url}
                      alt={f.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                ))}
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#077c37]">
                  <span>{suiteDestaque.capacidade}</span>
                  <span>·</span>
                  <span>Ar-condicionado Split + Ventilador</span>
                  <span>·</span>
                  <span>Frigobar e Varanda</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
                  <Link href={`/acomodacoes/${suiteDestaque.slug}`} className="hover:text-[#077c37]">
                    {suiteDestaque.nome}
                  </Link>
                </h4>

                <p className="text-sm text-[#3b4d41] leading-relaxed">
                  {suiteDestaque.descricaoCompleta}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/acomodacoes/${suiteDestaque.slug}`}
                    className="flex-1 inline-flex items-center justify-center bg-[#077c37] hover:bg-[#0e4f29] text-white font-semibold text-sm py-3 px-5 rounded-xl transition-colors"
                  >
                    Ver Galeria e Vídeo da Suíte
                  </Link>
                  <a
                    href={`https://wa.me/5512992323656?text=${encodeURIComponent(suiteDestaque.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-sm py-3 px-5 rounded-xl transition-colors"
                  >
                    Cotar no WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Lista Editorial das outras 2 Suítes (Casal e Tripla — zero foto repetida) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#dce5dd] divide-y divide-[#dce5dd] overflow-hidden shadow-xs">
              {suitesLista.map((suite) => (
                <article key={suite.slug} className="p-5 sm:p-6 space-y-3">
                  <div className="flex gap-4 items-start">
                    {suite.fotos[0] ? (
                      <Link
                        href={`/acomodacoes/${suite.slug}`}
                        className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-neutral-100 border border-[#dce5dd]"
                      >
                        <img
                          src={suite.fotos[0].url}
                          alt={suite.fotos[0].alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    ) : (
                      <div className="w-24 h-24 rounded-xl shrink-0 bg-[#f5efe6] border border-[#dfd6c7] p-2 flex items-center justify-center text-center text-[11px] font-medium text-[#3b4d41]">
                        Foto exclusiva da unidade
                      </div>
                    )}

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-xs font-bold text-[#077c37]">
                        {suite.capacidade}
                      </span>
                      <h4 className="text-base font-bold text-[#0a301a] leading-snug">
                        <Link href={`/acomodacoes/${suite.slug}`} className="hover:text-[#077c37]">
                          {suite.nome}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#3b4d41] leading-relaxed">
                        {suite.descricaoCurta}
                      </p>
                    </div>
                  </div>

                  {suite.pendenciaMidia && (
                    <p className="text-[11px] text-[#3b4d41] bg-[#f8faf8] px-3 py-2 rounded-xl border border-[#e6ede7]">
                      {suite.pendenciaMidia}
                    </p>
                  )}

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <Link
                      href={`/acomodacoes/${suite.slug}`}
                      className="text-xs font-bold text-[#077c37] hover:underline"
                    >
                      Ver detalhes e regras →
                    </Link>
                    <a
                      href={`https://wa.me/5512992323656?text=${encodeURIComponent(suite.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0a301a] bg-[#f29b2f]/30 hover:bg-[#f29b2f]/45 px-3 py-1.5 rounded-full transition-colors"
                    >
                      Pedir foto & cotação
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
