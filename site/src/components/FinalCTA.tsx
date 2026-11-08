import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%2C+Eliiy%21+Vim+pelo+site+da+Pousada+Eliiy+Zita+Pedro+e+gostaria+de+consultar+disponibilidade+e+valores.";

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0a301a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f29b2f]">
            Atendimento Direto · Sem Intermediários
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Converse diretamente com a Eliiy pelo WhatsApp.
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            Informe as datas desejadas, o número de pessoas (de casais a grupos de até 15 pessoas) e receba a disponibilidade real direto da proprietária na Praia do Ubatumirim.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#0a301a] shrink-0" />
            <span>Chamar no WhatsApp (12) 99232-3656</span>
          </a>
          <span className="text-xs text-emerald-200/80">
            Rua Maria José de Jesus, 3006 · Praia do Ubatumirim, Ubatuba - SP
          </span>
        </div>
      </div>
    </section>
  );
}
