export function BookingStepsAndRules() {
  const passos = [
    {
      num: "01",
      titulo: "Escolha entre Chalé com Cozinha ou Suíte",
      texto:
        "Defina quantas pessoas vão viajar (de um casal até grupos de 15 pessoas) e se sua família prefere preparar as próprias refeições no chalé ou usar o restaurante pé na areia.",
    },
    {
      num: "02",
      titulo: "Chame a Dona Zita no WhatsApp (12) 99232-3656",
      texto:
        "Cada botão do site já envia o nome da acomodação escolhida. Informe as datas desejadas e a quantidade de adultos e crianças.",
    },
    {
      num: "03",
      titulo: "Receba a Cotação Direta Sem Taxas de Agência",
      texto:
        "Você negocia diretamente com a proprietária, confirma os detalhes da unidade disponível e garante sua estadia sem comissões de plataformas intermediárias.",
    },
  ];

  const politicas = [
    {
      regra: "Horário de Check-out",
      detalhe: "Até às 11:00",
      fonte: "Confirmado no Google Maps e no Booking",
      confirmado: true,
    },
    {
      regra: "Horário de Check-in",
      detalhe: "Das 12:00 às 22:00",
      fonte: "Declarado no Booking sob consulta prévia",
      confirmado: false,
    },
    {
      regra: "Crianças e Camas",
      detalhe: "Crianças de qualquer idade são bem-vindas (configurações de 2 a 15 lugares)",
      fonte: "Confirmado no Áudio de Dona Zita e Booking",
      confirmado: true,
    },
    {
      regra: "Festas, Eventos e Fumo",
      detalhe: "Quartos para não-fumantes; festas e eventos com som alto não são permitidos",
      fonte: "Declarado no Booking sob consulta prévia",
      confirmado: false,
    },
    {
      regra: "Animais de Estimação (Pets)",
      detalhe: "No Booking consta como não permitido; consultar flexibilidade para chalés",
      fonte: "Declarado no Booking sob consulta prévia",
      confirmado: false,
    },
  ];

  return (
    <section
      id="como-reservar"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8faf8] border-b border-[#dce5dd]"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Bloco 1: Como Reservar em 3 Passos Numerados */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#dce5dd]">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#077c37]">
                07 · Reserva Direta Simplificada
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0a301a] tracking-tight leading-tight">
                Como reservar diretamente com a Dona Zita em 3 passos.
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#4a5c50] leading-relaxed">
              Não exibimos preços fixos engessados: como a pousada possui desde suítes de casal até chalés para 15 pessoas, a cotação é feita sob medida para o tamanho da sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-[24px] border border-[#dce5dd] divide-y md:divide-y-0 md:divide-x divide-[#dce5dd] overflow-hidden">
            {passos.map((p) => (
              <div key={p.num} className="p-6 sm:p-8 space-y-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#077c37] tracking-tight block">
                  {p.num}
                </span>
                <h3 className="text-lg font-bold text-[#0a301a]">
                  {p.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5c50] leading-relaxed">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Regras e Políticas Confirmadas */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a301a]">
              Horários, Regras da Casa e Fontes de Verificação
            </h3>
            <span className="text-xs text-[#4a5c50]">
              Transparência total entre o que é confirmado e o que deve ser alinhado no WhatsApp
            </span>
          </div>

          <div className="bg-white rounded-[24px] border border-[#dce5dd] overflow-hidden divide-y divide-[#dce5dd]">
            {politicas.map((pol, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline"
              >
                <span className="md:col-span-3 text-sm font-bold text-[#0a301a]">
                  {pol.regra}
                </span>
                <span className="md:col-span-5 text-xs sm:text-sm text-[#3b4d41]">
                  {pol.detalhe}
                </span>
                <span
                  className={`md:col-span-4 text-xs font-medium md:text-right ${
                    pol.confirmado ? "text-[#077c37]" : "text-amber-800"
                  }`}
                >
                  {pol.fonte}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
