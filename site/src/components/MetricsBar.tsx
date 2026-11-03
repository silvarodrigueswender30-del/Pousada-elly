export function MetricsBar() {
  const metrics = [
    {
      value: "0 m",
      title: "Pé na Areia na Praia do Ubatumirim",
      desc: "Saída direta para a faixa de areia, sem travessia de rua ou rodovia",
      source: "Fonte: Fotos aéreas, vídeos e Booking",
    },
    {
      value: "4,3 ★",
      title: "117 Avaliações no Google Maps",
      desc: "Nota pública verificada na ficha oficial do estabelecimento",
      source: "Fonte: Google Maps em 28/10/2026",
    },
    {
      value: "3 a 15",
      title: "Pessoas nos Chalés com Cozinha",
      desc: "5 configurações de chalés equipados com fogão, geladeira e pia",
      source: "Fonte: Áudio oficial Dona Zita",
    },
    {
      value: "2 a 4",
      title: "Pessoas nas Suítes Pé na Areia",
      desc: "3 configurações de suítes para casais e famílias pequenas",
      source: "Fonte: Áudio oficial Dona Zita",
    },
  ];

  return (
    <section
      id="metricas"
      aria-label="Indicadores factuais da pousada"
      className="bg-white border-b border-[#dce5dd]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#dce5dd]">
          {metrics.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between space-y-3">
              <div>
                <span className="block text-3xl sm:text-4xl font-bold text-[#077c37] tracking-tight">
                  {item.value}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-[#0a301a] mt-1.5">
                  {item.title}
                </h2>
                <p className="text-xs text-[#4a5c50] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-[11px] font-medium text-[#5e7165] pt-2 border-t border-[#eef3ef]">
                {item.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
