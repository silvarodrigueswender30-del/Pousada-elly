import Link from "next/link";
import { MessageCircle, Menu } from "lucide-react";

export function Navbar() {
  const whatsappUrl =
    "https://wa.me/5512992323656?text=Ol%C3%A1%21+Vim+pelo+site+da+Pousada+Eliiy+Zita+Pedro+e+gostaria+de+consultar+valores+e+disponibilidade+para+uma+reserva.";

  const navLinks = [
    { label: "Ubatumirim", href: "/#experiencia" },
    { label: "Acomodações (8)", href: "/#acomodacoes" },
    { label: "Um Dia Aqui", href: "/#um-dia" },
    { label: "Restaurante", href: "/#restaurante" },
    { label: "Estrutura", href: "/#estrutura" },
    { label: "Como Chegar", href: "/#localizacao" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/95 shadow-sm border border-[#dce5df]">
          {/* Logo e Nome */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-auto flex items-center">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/brand/logo-navbar-1x.webp 1x, /brand/logo-navbar-2x.webp 2x"
                />
                <img
                  src="/brand/logo-navbar-1x.webp"
                  alt="Logo Pousada Eliiy Zita Pedro"
                  width={78}
                  height={36}
                  decoding="sync"
                  className="h-9 w-auto object-contain"
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base leading-tight tracking-tight text-[#0a301a] group-hover:text-[#077c37] transition-colors">
                Eliiy Zita Pedro
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#3b4d41]">
                Praia do Ubatumirim · Ubatuba
              </span>
            </div>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-[#0a301a] hover:text-[#077c37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Principal & Menu Mobile Sem JS Hidratação */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#0a301a]" />
              <span>Reserva Direta</span>
            </a>

            <details className="relative lg:hidden group">
              <summary
                className="list-none cursor-pointer p-2 rounded-xl text-[#0a301a] hover:bg-black/5 transition-colors flex items-center justify-center"
                aria-label="Abrir Menu de Navegação"
              >
                <Menu className="w-5 h-5" />
              </summary>
              <div className="absolute right-0 mt-3 w-64 p-4 rounded-2xl bg-white shadow-xl border border-[#dce5df] flex flex-col gap-2.5 z-50">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-[#0a301a] py-1.5 border-b border-[#f0f4f1] hover:text-[#077c37]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
