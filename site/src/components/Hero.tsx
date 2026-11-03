import ReactDOM from "react-dom";

export function Hero() {
  ReactDOM.preload("/media/hero-pousada-mobile.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 768px)",
  });
  ReactDOM.preload("/media/hero-pousada.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 769px)",
  });

  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%20Dona%20Zita!%20Vim%20pelo%20site%20da%20Pousada%20Eliiy%20Zita%20Pedro%20e%20gostaria%20de%20consultar%20disponibilidade%20e%20valores.";

  return (
    <section
      id="hero"
      className="relative min-h-[84vh] sm:min-h-[90vh] flex items-end pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-[#072212]"
    >
      {/* Imagem Real Otimizada com <picture> responsivo e preload exclusivo da Home */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/media/hero-pousada-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/media/hero-pousada.webp"
            type="image/webp"
          />
          <img
            src="/media/hero-pousada-mobile.webp"
            alt="Fachada real da Pousada e Restaurante Eliiy Zita Pedro na areia da Praia do Ubatumirim, Ubatuba/SP"
            width={640}
            height={356}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061f10]/95 via-[#061f10]/50 to-black/25" />
      </div>

      {/* Conteúdo Editorial Assimétrico na Base */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-white">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f29b2f]">
              Praia do Ubatumirim · Litoral Norte de Ubatuba, SP
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.08] text-white">
              Pé na areia em uma enseada de mar calmo, com chalés para toda a família.
            </h1>

            <p className="text-sm sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Na beira da Praia do Ubatumirim, a Pousada e Restaurante Eliiy Zita Pedro reúne 5 chalés com cozinha privativa (de 3 a 15 pessoas), 3 suítes, piscina ao ar livre, capela e restaurante próprio na areia.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-colors"
              >
                <span>Cotar Direto com Dona Zita no WhatsApp</span>
              </a>

              <a
                href="#acomodacoes"
                className="inline-flex items-center justify-center gap-2 bg-[#0a301a]/85 hover:bg-[#0a301a] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/30 transition-colors"
              >
                <span>Ver os 5 Chalés e 3 Suítes</span>
              </a>
            </div>
          </div>

          {/* Ficha Rápida Lateral — Fatos Confirmados */}
          <div className="lg:col-span-4 bg-[#061f10]/90 border border-white/20 rounded-2xl p-5 text-white space-y-3">
            <div className="flex items-baseline justify-between border-b border-white/15 pb-2.5">
              <span className="text-xs text-white/85">Avaliação Google Maps</span>
              <a
                href="https://www.google.com/maps/place/Pousada+e+Restaurante+EIiiy+Zita+Pedro/@-23.3486585,-44.928734,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#f29b2f] hover:underline"
              >
                4,3 ★ (117 avaliações) ↗
              </a>
            </div>
            <div className="flex items-baseline justify-between border-b border-white/15 pb-2.5">
              <span className="text-xs text-white/85">Hospedagem</span>
              <span className="text-xs sm:text-sm font-semibold">5 Chalés (c/ cozinha) + 3 Suítes</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-white/85">WhatsApp Oficial</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-200">(12) 99232-3656</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
