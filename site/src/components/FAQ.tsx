import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Quantas acomodações a pousada possui e qual a diferença entre acomodação com cozinha e suíte?",
      a: "Conforme áudio oficial da pousada, a pousada conta com 5 acomodações (equipados com cozinha privativa para até 15, 10, 5, 4 e 3 pessoas) e 3 suítes (para 4, 3 e 2 pessoas, que não possuem cozinha e contam com apoio direto do restaurante da pousada).",
      fonte: "Verificado: Áudio oficial da pousada + Vídeos v00 a v20",
    },
    {
      q: "Todas as acomodações possuem churrasqueira privativa?",
      a: "No áudio oficial, a pousada confirma que há 'acomodação com churrasqueira' e o vídeo v02 mostra a área de churrasqueira na pousada. Como o áudio não especifica se cada um das 5 acomodações possui churrasqueira individual ou se o uso é compartilhado/específico de algumas unidades, recomendamos confirmar a disponibilidade para o seu acomodação no ato da reserva via WhatsApp.",
      fonte: "Status: Churrasqueira existente no local (áudio + vídeo v02); individualidade por acomodação sob consulta prévia",
    },
    {
      q: "Quais são os horários de check-in, check-out e silêncio?",
      a: "O check-in ocorre das 12:00 às 22:00 e o check-out até as 11:00 (registrados nas políticas da propriedade). Regras específicas de horário de silêncio noturno e política de pets devem ser confirmadas diretamente com a Eliiy pelo WhatsApp antes da estadia.",
      fonte: "Status: Check-in/out confirmados; horário exato de silêncio sob consulta prévia",
    },
    {
      q: "Como funciona a reserva direta pelo WhatsApp?",
      a: "Você escolhe a acomodação ideal para o tamanho da sua família, clica no botão de cotação e conversa diretamente com a Eliiy no número oficial (12) 99232-3656, sem taxas de plataformas intermediárias.",
      fonte: "Verificado: Canal oficial de atendimento da Pousada Eliiy Zita Pedro",
    },
    {
      q: "O restaurante e o quiosque de praia funcionam no próprio local?",
      a: "Sim. O vídeo institucional (v02.mp4) e o áudio oficial da pousada confirmam que a pousada possui restaurante próprio amplo e quiosques com mesas e guarda-sóis diretamente na areia da Praia do Ubatumirim.",
      fonte: "Verificado: Áudio oficial da pousada + Vídeo v02.mp4",
    },
    {
      q: "Como é o acesso até a Praia do Ubatumirim?",
      a: "O acesso parte da Rodovia Rio-Santos (BR-101, km 34, região norte de Ubatuba) seguindo pela Rua Maria José de Jesus até o nº 3006, na beira da Praia do Ubatumirim.",
      fonte: "Verificado: Google Maps oficial (-23.3486585, -44.928734)",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fafbf9] border-t border-[#e2eae3]">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho Editorial Sem Selo/Pill */}
        <div className="space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#077c37]">
            10 · Perguntas Frequentes & Transparência
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold text-[#0a301a] tracking-tight leading-[1.12]">
            Dúvidas comuns respondidas com base em fatos verificados.
          </h2>
          <p className="text-sm sm:text-base text-[#3b4d41] leading-relaxed max-w-2xl">
            Indicamos claramente a fonte de cada informação e destacamos o que deve ser alinhado diretamente com a Eliiy no WhatsApp.
          </p>
        </div>

        {/* Acordeão Nativo Sem Hidratação JS Bloqueante */}
        <div className="divide-y divide-[#dce5df] border-y border-[#dce5df]">
          {faqs.map((faq, index) => (
            <details key={index} open={index === 0} className="group py-5 sm:py-6">
              <summary className="list-none cursor-pointer w-full text-left flex items-start justify-between gap-4 font-bold text-base sm:text-lg text-[#0a301a] hover:text-[#077c37] transition-colors">
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-[#077c37] font-bold">
                    0{index + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#077c37] mt-1 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="pl-7 pr-4 pt-3 space-y-2 text-xs sm:text-sm text-[#3b4d41] leading-relaxed">
                <p>{faq.a}</p>
                <p className="text-[11px] font-semibold text-[#077c37]">
                  {faq.fonte}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
