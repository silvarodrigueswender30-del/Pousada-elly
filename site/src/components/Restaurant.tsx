export function Restaurant() {
  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%2C%20Eliiy!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Restaurante%20e%20Quiosque%20da%20Pousada%20Eliiy%20Zita%20Pedro.";

  const destaques = [
    {
      num: "I",
      title: "Restaurante e Quiosque na Areia da Praia",
      desc: "Confirmado pela pousada no áudio oficial e registrado nas imagens da fachada: mesas sombreadas diretamente na areia da Praia do Ubatumirim para hóspedes e visitantes.",
      fonte: "Áudio oficial da pousada + Vídeo real v02.mp4",
    },
    {
      num: "II",
      title: "Refeições e Porções à Beira-Mar",
      desc: "Atendimento de praia e salão próprio em frente à pousada, sem precisar sair da propriedade ou tirar o carro do estacionamento.",
      fonte: "Perfil Google Meu Negócio + Vídeo v02.mp4",
    },
    {
      num: "III",
      title: "Apoio às Suítes ou Autonomia de Cozinha nas Acomodações",
      desc: "Quem fica nas 3 suítes conta com o apoio do restaurante da pousada (consulte condições de café da manhã e refeições na sua cotação); quem fica nas 5 acomodações possui cozinha privativa equipada.",
      fonte: "Áudio oficial da pousada",
    },
  ];

  return (
    <section
      id="restaurante"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0b381d] text-white border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Cabeçalho Editorial Assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-white/15">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f29b2f]">
              04 · Gastronomia Caiçara Pé na Areia
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight text-white">
              Restaurante e quiosque próprios de frente para o mar de Ubatumirim.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Como conta a pousada, a pousada integra hospedagem e restaurante na mesma estrutura pé na areia: você desce do quarto direto para almoçar ou petiscar olhando o mar calmo da enseada.
          </p>
        </div>

        {/* Layout Assimétrico 45/55: Imagem Real da Fachada/Restaurante + Lista Numerada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-white/15 bg-[#061f10]">
            <img
              src="/media/hero-pousada.webp"
              alt="Fachada da Pousada e Restaurante Eliiy Zita Pedro com área coberta na areia da Praia do Ubatumirim"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
              <p className="text-xs text-white/95 font-medium">
                Vista real do restaurante térreo e quiosques na areia da Praia do Ubatumirim (v02.mp4).
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="divide-y divide-white/15 border-y border-white/15">
              {destaques.map((item) => (
                <div key={item.num} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-baseline">
                  <span className="sm:col-span-1 text-xs font-bold tracking-widest text-[#f29b2f]">
                    {item.num}
                  </span>
                  <div className="sm:col-span-11 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="text-[11px] text-emerald-300">
                      {item.fonte}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-colors"
              >
                Consultar Funcionamento do Restaurante no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
