export function Amenities() {
  const itens = [
    {
      num: "01",
      title: "Piscina ao Ar Livre com Cascata",
      desc: "Piscina aberta para adultos e crianças dentro da propriedade, cercada pelo jardim e visível das varandas superiores.",
      fonte: "Fonte confirmada: Áudio de Dona Zita + Vídeos v02 e v03 (00:51)",
    },
    {
      num: "02",
      title: "Capela com Jardim no Terreno da Pousada",
      desc: "Capela própria situada à beira-mar dentro do complexo da pousada, cercada por jardim e coqueiros, citada nominalmente por Dona Zita.",
      fonte: "Fonte confirmada: Áudio de Dona Zita ('tem capela') + Vídeo aéreo v02.mp4",
    },
    {
      num: "03",
      title: "Churrasqueira na Propriedade",
      desc: "No áudio oficial, Dona Zita informa que há chalé com churrasqueira e o vídeo v02 registra a área coberta de churrasqueira. Confirme a disponibilidade individual para a sua unidade no ato da reserva.",
      fonte: "Fonte: Áudio Dona Zita ('tem chalé que tem churrasqueira') [Unidade a confirmar]",
    },
    {
      num: "04",
      title: "Estacionamento Interno no Pátio",
      desc: "Pátio interno amplo dentro da área da pousada para estacionar os veículos dos hóspedes. Para grupos grandes (chalés de 10 e 15 pessoas), confirme o número de vagas no WhatsApp.",
      fonte: "Fonte confirmada: Vídeos v02, v04 (01:39), v07 (00:42) e v10 (00:48)",
    },
    {
      num: "05",
      title: "Campo Gramado e Áreas de Convivência",
      desc: "Área gramada arborizada entre os blocos de acomodações e a praia, permitindo circulação livre e segura para famílias com crianças.",
      fonte: "Fonte confirmada: Vídeo aéreo v02.mp4 + Vídeo v04.mp4",
    },
    {
      num: "06",
      title: "Wi-Fi nas Áreas da Propriedade",
      desc: "Sinal de internet sem fio disponível na pousada para comunicação dos hóspedes durante a estadia na Praia do Ubatumirim.",
      fonte: "Status: Alcance específico por unidade sob consulta prévia",
    },
  ];

  return (
    <section
      id="estrutura"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8faf8] border-b border-[#dce5dd]"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dce5dd]">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
              05 · Infraestrutura Confirmada do Complexo
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
              Piscina, capela à beira-mar, pátio com estacionamento e lazer familiar.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#3b4d41] leading-relaxed">
            Como resume Dona Zita: <em>&ldquo;é um monte de coisa em uma coisa só&rdquo;</em>. Todos os itens abaixo possuem origem documentada em áudio ou vídeo real da propriedade.
          </p>
        </div>

        {/* Lista Editorial em 2 Colunas com Divisores de 1px (Sem ícones em quadradinhos) */}
        <div className="bg-white rounded-2xl border border-[#dce5dd] overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#dce5dd]">
          <div className="divide-y divide-[#dce5dd]">
            {itens.slice(0, 3).map((item) => (
              <div key={item.num} className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#077c37]">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-[#0a301a]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3b4d41] leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-[11px] font-medium text-[#3b4d41] pt-1">
                  {item.fonte}
                </p>
              </div>
            ))}
          </div>

          <div className="divide-y divide-[#dce5dd]">
            {itens.slice(3, 6).map((item) => (
              <div key={item.num} className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#077c37]">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-[#0a301a]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3b4d41] leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-[11px] font-medium text-[#3b4d41] pt-1">
                  {item.fonte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
