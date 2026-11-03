import { Star, ExternalLink } from "lucide-react";

export function Testimonials() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Pousada+e+Restaurante+EIiiy+Zita+Pedro/@-23.3486585,-44.928734,17z/data=!4m8!3m7!1s0x94cd559ea9711693:0xc7fc21c3260841aa!8m2!3d-23.3486585!4d-44.928734!9m1!1b1!16s%2Fg%2F11b6y0_0y1";

  const sinteseTematica = [
    {
      num: "01",
      title: "Enseada de Mar Calmo e Raso",
      desc: "Relatos recorrentes sobre a geografia abrigada da Praia do Ubatumirim, com águas rasas favoráveis para famílias com crianças e idosos.",
      fonte: "Síntese temática da ficha pública do Google Maps",
    },
    {
      num: "02",
      title: "Atendimento Familiar da Dona Zita",
      desc: "Menções diretas à recepção conduzida pela proprietária Dona Zita e sua equipe no restaurante e nas acomodações.",
      fonte: "Ficha oficial no Google Maps + Áudio Dona Zita",
    },
    {
      num: "03",
      title: "Conveniência de Restaurante na Areia",
      desc: "Praticidade de contar com restaurante próprio e quiosque de praia em frente à pousada, sem necessidade de tirar o carro da vaga.",
      fonte: "Vídeo v02.mp4 + Ficha do Google Maps",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f5efe6] border-t border-[#e2eae3]">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho Editorial Assimetrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#077c37]">
              09 · Reputação Pública Verificada
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold text-[#0a301a] tracking-tight leading-[1.12]">
              Nota real no Google Maps, sem depoimentos inventados.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#3b4d41] leading-relaxed">
              Não publicamos citações anônimas nem depoimentos fictícios. Confira diretamente na ficha pública do Google Maps a nota verificada e os relatos reais de quem já se hospedou.
            </p>
          </div>
        </div>

        {/* Painel Principal da Nota */}
        <div className="bg-white rounded-2xl border border-[#d8e2dc] overflow-hidden shadow-xs">
          <div className="p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#e2eae3]">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#077c37] block">
                Ficha Oficial · Google Maps (Verificado em 28/10/2026)
              </span>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl sm:text-6xl font-extrabold text-[#0a301a] tracking-tight tabular-nums">
                  4,3
                </span>
                <div className="space-y-1">
                  <div className="flex text-[#d97706] gap-1" role="img" aria-label="Nota 4,3 de 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "fill-current" : "fill-[#d97706]/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#3b4d41]">
                    Baseado em 117 avaliações públicas registradas no Google
                  </p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#077c37] hover:bg-[#055a27] text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl transition-colors"
            >
              <span>Abrir Ficha Oficial no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Colunas com Filete de 1px (Sem Ícone em Quadradinho) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2eae3]">
            {sinteseTematica.map((item) => (
              <div key={item.num} className="p-6 sm:p-8 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold text-[#077c37] tracking-widest block">
                    TEMA {item.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a301a]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3b4d41] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <p className="text-[11px] font-medium text-[#3b4d41] pt-3 border-t border-[#f0f4f1]">
                  Fonte: {item.fonte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
