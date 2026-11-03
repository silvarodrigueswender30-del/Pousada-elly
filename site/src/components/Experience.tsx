import { LazyVideoCard } from "./LazyVideoCard";

export function Experience() {
  const videoCards = [
    {
      mp4: "/media/v/varanda-enseada.mp4",
      poster: "/media/v/varanda-enseada.webp",
      title: "Enseada de Mar Calmo e Raso",
      subtitle:
        "Vista real da varanda da pousada para o mar sereno da Praia do Ubatumirim e suas ilhas costeiras, ideal para famílias com crianças.",
      originLabel: "Vídeo real: v03 (gravado na pousada)",
    },
    {
      mp4: "/media/v/vista-serra.mp4",
      poster: "/media/v/vista-serra.webp",
      title: "Entre os Coqueiros e a Serra do Mar",
      subtitle:
        "A propriedade fica cercada pelo verde da Mata Atlântica na região norte de Ubatuba, com brisa constante e vista aberta da sacada.",
      originLabel: "Vídeo real: v16 (gravado na pousada)",
    },
    {
      mp4: "/media/v/patio-sol-mar.mp4",
      poster: "/media/v/patio-sol-mar.webp",
      title: "Pátio Interno, Piscina e Praia",
      subtitle:
        "Complexo familiar pé na areia com pátio amplo, quartos voltados para a brisa do mar e acesso direto ao restaurante na praia.",
      originLabel: "Vídeo real: v04 (gravado na pousada)",
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f5efe6] border-b border-[#e4dccf]"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Cabeçalho Editorial Assimétrico (Sem selo/badge genérico) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dfd6c7]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
              01 · Praia do Ubatumirim, Ubatuba/SP
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
              A calmaria de uma enseada protegida para desconectar da rotina.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#3b4d41] leading-relaxed">
            Confira em vídeos reais gravados nas varandas da própria pousada a tranquilidade da Praia do Ubatumirim: mar manso sem ondas fortes, morros preservados e estrutura familiar na beira da areia.
          </p>
        </div>

        {/* 3 Cards de Vídeo Verticais Reais (9:16, muted, playsInline, loop, poster WebP, lazy) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {videoCards.map((card, idx) => (
            <LazyVideoCard
              key={idx}
              mp4={card.mp4}
              poster={card.poster}
              title={card.title}
              subtitle={card.subtitle}
              originLabel={card.originLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
