import { MessageCircle, MapPin, Phone } from "lucide-react";

export function Footer() {
  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%21+Vim+pelo+site+da+Pousada+Eliiy+Zita+Pedro+e+gostaria+de+informa%C3%A7%C3%B5es.";

  return (
    <footer className="bg-[#051c0d] text-white pt-14 pb-10 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-white/10">
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-white/15">
                <picture>
                  <source
                    srcSet="/brand/logo-navbar-white-1x.webp 1x, /brand/logo-navbar-white-2x.webp 2x"
                    type="image/webp"
                  />
                  <img
                    src="/brand/logo-navbar-white-1x.webp"
                    alt="Logo Pousada Eliiy Zita Pedro"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </picture>
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-tight">
                  Eliiy Zita Pedro
                </h3>
                <span className="text-[11px] text-[#7abcd5] font-semibold uppercase tracking-wider block">
                  Pousada & Restaurante
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Hospitalidade familiar caiçara na beira da Praia do Ubatumirim, enseada de mar calmo no norte de Ubatuba/SP. 5 chalés com cozinha privativa e 3 suítes.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f29b2f]">
              Seções do Site
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="/#experiencia" className="hover:text-white transition-colors">
                  01 · Praia do Ubatumirim (Vídeos)
                </a>
              </li>
              <li>
                <a href="/#acomodacoes" className="hover:text-white transition-colors">
                  02 · Acomodações (5 Chalés e 3 Suítes)
                </a>
              </li>
              <li>
                <a href="/#um-dia" className="hover:text-white transition-colors">
                  03 · Um Dia na Pousada
                </a>
              </li>
              <li>
                <a href="/#restaurante" className="hover:text-white transition-colors">
                  04 · Restaurante & Quiosque na Areia
                </a>
              </li>
              <li>
                <a href="/#estrutura" className="hover:text-white transition-colors">
                  05 · Estrutura & Piscina
                </a>
              </li>
              <li>
                <a href="/#como-reservar" className="hover:text-white transition-colors">
                  06 · Como Reservar & Regras
                </a>
              </li>
              <li>
                <a href="/#localizacao" className="hover:text-white transition-colors">
                  08 · Como Chegar & Mapa
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  10 · Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Endereço Verificado (Sem CEP ou E-mail Pessoal não confirmado) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f29b2f]">
              Endereço & Contato Verificado
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#157d40] flex-shrink-0 mt-0.5" />
                <span>
                  Rua Maria José de Jesus, 3006
                  <br />
                  Praia do Ubatumirim
                  <br />
                  Ubatuba - SP (Fonte: Google Maps)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#157d40] flex-shrink-0" />
                <span>(12) 99232-3656 (WhatsApp Oficial)</span>
              </div>
              <p className="text-[11px] text-neutral-400 pt-1 leading-relaxed">
                Nota de transparência: E-mail institucional para divulgação pública e CEP específico da via estão marcados como sob consulta prévia.
              </p>
            </div>
          </div>

          {/* Coluna 4: Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f29b2f]">
              Canais Oficiais
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://instagram.com/pousadaeliiyzitapedro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <span>Instagram: @pousadaeliiyzitapedro</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#157d40]" />
                <span>WhatsApp Direto com Dona Zita</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <p>© {new Date().getFullYear()} Pousada e Restaurante Eliiy Zita Pedro.</p>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors underline underline-offset-2">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-white transition-colors underline underline-offset-2">
              Termos de Uso
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Desenvolvido por</span>
            <a
              href="https://www.offdata.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f29b2f] hover:text-[#d98520] font-semibold underline underline-offset-2 transition-colors"
            >
              Off Data
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
