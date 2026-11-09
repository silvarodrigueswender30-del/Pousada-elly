import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { acomodacoes } from "@/data/acomodacoes";
import { RoomGalleryInteractive } from "@/components/RoomGalleryInteractive";
import { RoomStoryVideoCard } from "@/components/RoomStoryVideoCard";
import { EditorialFooter } from "@/components/EditorialFooter";
import { SITE_URL } from "@/lib/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return acomodacoes.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = acomodacoes.find((a) => a.slug === slug);
  if (!item) return {};

  const imageUrl = item.fotos[0]?.url || "/media/og-whatsapp.jpg";
  const canonicalPath = `/acomodacoes/${item.slug}`;

  return {
    title: `${item.nome} | Pousada Eliiy Zita Pedro`,
    description: item.descricaoCurta,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${item.nome} | Pousada Eliiy Zita Pedro`,
      description: item.descricaoCurta,
      url: `${SITE_URL}${canonicalPath}`,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.nome} | Pousada Eliiy Zita Pedro`,
      description: item.descricaoCurta,
      images: [imageUrl],
    },
  };
}

export default async function AcomodacaoPage({ params }: Props) {
  const { slug } = await params;
  const item = acomodacoes.find((a) => a.slug === slug);

  if (!item) {
    notFound();
  }

  const encodedMsg = encodeURIComponent(item.whatsappMsg);
  const whatsappUrl = `https://wa.me/5512992323656?text=${encodedMsg}`;
  const outrasAcomodacoes = acomodacoes.filter((a) => a.slug !== item.slug);

  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#0a301a] flex flex-col justify-between selection:bg-[#0a301a] selection:text-[#f8faf8]">
      {/* HEADER SUÍÇO EM 4 COLUNAS */}
      <header className="w-full px-5 sm:px-10 lg:px-14 pt-6 pb-5 border-b border-[#0a301a]/10 bg-[#f8faf8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
          <div className="lg:col-span-3 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/brand/logo-navbar-1x.webp"
                srcSet="/brand/logo-navbar-1x.webp 1x, /brand/logo-navbar-2x.webp 2x"
                alt="Logo Pousada e Restaurante Eliiy Zita Pedro"
                width={78}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <div className="leading-tight">
                <span className="block text-sm font-semibold tracking-tight text-[#0a301a]">
                  Eliiy Zita Pedro
                </span>
                <span className="block text-[10px] text-[#4a5c50] tracking-wider uppercase">
                  Ubatumirim · Ubatuba
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:block lg:col-span-3 text-xs text-[#4a5c50]">
            <p className="font-medium text-[#0a301a]">
              {item.categoria === "Chale"
                ? "Modalidade Acomodação com Cozinha"
                : "Modalidade Suíte Pé na Areia"}
            </p>
            <p>Capacidade oficial: {item.capacidade}</p>
          </div>

          <nav
            aria-label="Navegação da acomodação"
            className="hidden lg:flex lg:col-span-4 items-center gap-6 text-xs font-medium text-[#4a5c50]"
          >
            <Link href="/#acomodacoes" className="hover:text-[#0a301a] transition-colors">
              ← Todas as 8 acomodações
            </Link>
            <a href="#especificacoes" className="hover:text-[#0a301a] transition-colors">
              Ficha técnica
            </a>
            <a href="#faq-unidade" className="hover:text-[#0a301a] transition-colors">
              Dúvidas
            </a>
          </nav>

          <div className="lg:col-span-2 flex justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] px-4 py-2 text-xs font-semibold shadow-md transition-all"
            >
              <span>Reservar direto</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL EDITORIAL */}
      <main className="w-full py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14">
          {/* Topo Editorial da Unidade */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Link
                  href="/#acomodacoes"
                  className="text-xs uppercase tracking-[0.18em] text-[#5C5F5B] hover:text-[#141614] font-semibold"
                >
                  ← Voltar ao seletor de acomodações
                </Link>
                <span className="text-xs text-[#5C5F5B]">·</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#077c37] font-semibold">
                  [{item.capacidade}]
                </span>
                {item.vistaMar && (
                  <>
                    <span className="text-xs text-[#5C5F5B]">·</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#f29b2f] font-semibold">
                      [VISTA PARA O MAR]
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                {item.nome.replace(/\((.*?)\)/, "")}{" "}
                <span className="font-editorial-italic font-normal text-[#5C5F5B]">
                  ({item.capacidade}).
                </span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#5C5F5B] max-w-2xl leading-relaxed">
                {item.subtitulo}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:items-end justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-[#141614] text-[#F4F4F0] pl-6 pr-2 py-2 text-sm font-semibold hover:bg-[#077c37] transition-all shadow-md"
              >
                <span>Consultar datas com a Eliiy</span>
                <span className="w-10 h-10 rounded-full bg-[#F4F4F0] text-[#141614] flex items-center justify-center text-xs font-bold">
                  ↗
                </span>
              </a>
              <span className="mt-2 text-xs text-[#5C5F5B]">
                Reserva direta pelo WhatsApp · Sem taxas de intermediários
              </span>
            </div>
          </div>

          {/* VITRINE FOTOGRÁFICA INTERATIVA (16:9) & TOUR EM VÍDEO VERTICAL (9:16) */}
          <section aria-label="Galeria e vídeo real da acomodação" className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Coluna Principal da Esquerda: Galeria Interativa 16:9 */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <RoomGalleryInteractive fotos={item.fotos} roomName={item.nome} />

                {/* Badges de garantia visual */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-[20px] bg-[#EAEAE4]/60 border border-[#141614]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#077c37]" />
                    <span className="text-xs font-medium text-[#141614]">Fotos Reais do Quarto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#077c37]" />
                    <span className="text-xs font-medium text-[#141614]">Pé na Areia Calmo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#077c37]" />
                    <span className="text-xs font-medium text-[#141614]">Atendimento da Família</span>
                  </div>
                </div>
              </div>

              {/* Coluna Lateral da Direita: Tour em Múltiplos Vídeos 9:16 + Reserva Direta */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {item.videos && item.videos.length > 0 && (
                  <RoomStoryVideoCard
                    videos={item.videos}
                    roomName={item.nome}
                  />
                )}

                {/* Card de Reserva Direta com a Dona Zita */}
                <div className="rounded-[28px] bg-[#0a301a] text-[#f8faf8] p-6 sm:p-7 shadow-lg flex flex-col justify-between gap-4 border border-[#0a301a]/20">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f29b2f]/20 text-[#f29b2f] text-xs font-semibold mb-3">
                      <span>● Reserva Direta</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      Reserve direto com a Eliiy
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#f8faf8]/80 leading-relaxed">
                      Consulte valores específicos para o tamanho do seu grupo e garanta a menor tarifa sem as comissões de plataformas intermediárias.
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] px-6 py-3.5 text-sm font-bold shadow-md transition-all text-center"
                  >
                    <span>Consultar no WhatsApp</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* BARRA ARQUITETÔNICA DE ESPECIFICAÇÕES [01] A [04] */}
          <section id="especificacoes" className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-[24px] bg-[#EAEAE4]/80 p-6 border border-[#141614]/10">
                <span className="text-xs font-mono text-[#077c37] block mb-2">[01] CAPACIDADE</span>
                <p className="text-xl font-semibold">{item.capacidade}</p>
                <p className="text-xs text-[#5C5F5B] mt-1">Confirmado pela pousada</p>
              </div>
              <div className="rounded-[24px] bg-[#EAEAE4]/80 p-6 border border-[#141614]/10">
                <span className="text-xs font-mono text-[#077c37] block mb-2">[02] COZINHA</span>
                <p className="text-xl font-semibold">
                  {item.cozinha ? "Cozinha Privativa" : "Sem Cozinha (Suíte)"}
                </p>
                <p className="text-xs text-[#5C5F5B] mt-1">
                  {item.cozinha ? "Fogão, geladeira e pia" : "Apoio do restaurante na areia"}
                </p>
              </div>
              <div className="rounded-[24px] bg-[#EAEAE4]/80 p-6 border border-[#141614]/10">
                <span className="text-xs font-mono text-[#077c37] block mb-2">[03] CLIMATIZAÇÃO</span>
                <p className="text-sm font-semibold leading-snug">{item.arCondicionadoStatus}</p>
              </div>
              <div className="rounded-[24px] bg-[#EAEAE4]/80 p-6 border border-[#141614]/10">
                <span className="text-xs font-mono text-[#077c37] block mb-2">[04] ÁREA EXTERNA</span>
                <p className="text-sm font-semibold leading-snug">{item.varandaStatus}</p>
              </div>
            </div>
          </section>

          {/* DESCRIÇÃO EDITORIAL + COMODIDADES NUMERADAS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 pt-12 border-t border-[#141614]/12">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#5C5F5B] font-semibold block">
                [ SOBRE ESTA UNIDADE ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Como é se hospedar nesta{" "}
                <span className="font-editorial-italic font-normal text-[1.12em]">
                  acomodação.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#5C5F5B] leading-relaxed">
                {item.descricaoCompleta}
              </p>

              <div className="rounded-[24px] bg-[#EAEAE4] p-6 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#141614] font-semibold block">
                  Configuração de Camas
                </span>
                <p className="text-sm text-[#5C5F5B]">{item.tipoCamas}</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-[#5C5F5B] font-semibold block mb-4">
                [ ITENS VERIFICADOS E REGRAS DE HOSPEDAGEM ]
              </span>
              <div className="rounded-[28px] bg-[#EAEAE4]/70 border border-[#141614]/10 divide-y divide-[#141614]/10">
                {item.comodidades.map((com, idx) => (
                  <div
                    key={idx}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono font-bold text-[#077c37]">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-[#141614]">
                        {com.item}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#5C5F5B]">
                      {com.confirmado ? "Confirmado na pousada" : "Consultar no WhatsApp"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* BLOCO ESCURO BENTO + FAQ DA UNIDADE + NAVEGAÇÃO ENTRE ACOMODAÇÕES */}
      <div
        id="faq-unidade"
        className="w-full bg-[#082112] text-[#f8faf8] pt-16 pb-12 px-4 sm:px-8 lg:px-12"
      >
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Card Claro de Perguntas desta Acomodação */}
          <div className="rounded-[28px] bg-[#f8faf8] text-[#0a301a] p-7 sm:p-12 border border-[#e2eae3] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#157d40] font-semibold block mb-2">
                  [ PERGUNTAS SOBRE ESTA UNIDADE ]
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0a301a]">
                  Dúvidas{" "}
                  <span className="font-editorial-italic font-normal text-[1.12em]">
                    específicas.
                  </span>
                </h2>
                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 rounded-full bg-[#f29b2f] hover:bg-[#d98520] text-[#0a301a] pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold shadow-md transition-all"
                  >
                    <span>Falar com a Eliiy no WhatsApp</span>
                    <span className="w-8 h-8 rounded-full bg-[#0a301a] text-[#f8faf8] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 divide-y divide-[#e2eae3]">
                {item.miniFaq.map((f, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="text-base font-semibold text-[#0a301a]">{f.p}</h3>
                    <p className="mt-2 text-sm text-[#4a5c50] leading-relaxed">{f.r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navegação para as Outras 7 Acomodações */}
          <div className="py-10 border-b border-white/15">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
                EXPLORAR AS OUTRAS 7 ACOMODAÇÕES DA POUSADA
              </h2>
              <Link href="/#acomodacoes" className="text-xs text-white underline">
                Ver na Home ↗
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {outrasAcomodacoes.map((outra) => (
                <Link
                  key={outra.slug}
                  href={`/acomodacoes/${outra.slug}`}
                  className="rounded-2xl bg-white/10 hover:bg-[#f8faf8] hover:text-[#0a301a] p-4 transition-all border border-white/15 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono opacity-85">
                    {outra.categoria === "Chale" ? "Unidade c/ Cozinha" : "Suíte"} · {outra.capacidade}
                  </span>
                  <p className="text-sm font-semibold mt-1">{outra.nome}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Editorial Footer — 100vw de ponta a ponta sem restrição */}
      <div className="w-full">
        <EditorialFooter />
      </div>
    </div>
  );
}
