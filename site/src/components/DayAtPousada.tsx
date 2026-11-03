export function DayAtPousada() {
  const momentos = [
    {
      periodo: "Manhã · 07h às 11h",
      titulo: "Brisa da enseada e saída direta para a areia",
      texto:
        "O dia começa em frente ao mar manso de Ubatumirim. Da porta da pousada você sai direto na areia batida da enseada para caminhar pela orla ou tomar o café da manhã antes do mergulho.",
      imagem: "/media/varanda-mar.webp",
      alt: "Vista matinal da varanda da pousada para os coqueiros e o mar calmo de Ubatumirim",
      legenda: "Vista real da varanda para os coqueiros e o mar (IMG09)",
    },
    {
      periodo: "Tarde · 12h às 17h",
      titulo: "Banho de mar sem ondas fortes, piscina e almoço na praia",
      texto:
        "Enquanto as crianças aproveitam a água rasa da enseada ou a piscina ao ar livre do pátio, o almoço é servido no restaurante pé na areia — ou preparado com liberdade na cozinha do seu chalé.",
      imagem: "/media/quartos/chale-master-15p-1.webp",
      alt: "Pátio ensolarado da pousada com o mar azul de Ubatumirim ao fundo",
      legenda: "Vista real em dia de sol (vídeo v04)",
    },
    {
      periodo: "Fim de tarde & Noite · a partir das 17h30",
      titulo: "Pátio iluminado e tranquilidade do norte de Ubatuba",
      texto:
        "Ao entardecer, a fachada iluminada da pousada na areia e o pátio acolhedor convidam ao descanso familiar, longe do trânsito do centro urbano de Ubatuba.",
      imagem: "/media/editorial/quem-somos.webp",
      alt: "Pátio iluminado e piscina da pousada de frente para a enseada ao entardecer",
      legenda: "Pátio e área de convivência pé na areia",
    },
  ];

  return (
    <section
      id="um-dia"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f5efe6] border-b border-[#e4dccf]"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dfd6c7]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
              03 · Ritmo da Hospedagem em Ubatumirim
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
              Um dia na Pousada Eliiy Zita Pedro: manhã, tarde e noite.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#3b4d41] leading-relaxed">
            Sem precisar tirar o carro do pátio: a praia, o restaurante, a piscina e as acomodações estão integrados no mesmo terreno à beira-mar.
          </p>
        </div>

        <div className="space-y-8">
          {momentos.map((m, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white rounded-2xl p-5 sm:p-7 border border-[#dfd6c7]"
            >
              <div
                className={`lg:col-span-5 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-neutral-100 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={m.imagem}
                  alt={m.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-black/75 text-white text-[11px] px-2.5 py-1 rounded-full">
                  {m.legenda}
                </span>
              </div>

              <div
                className={`lg:col-span-7 space-y-3 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#077c37]">
                  {m.periodo}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
                  {m.titulo}
                </h3>
                <p className="text-sm sm:text-base text-[#3b4d41] leading-relaxed">
                  {m.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
