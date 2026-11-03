import { notFound } from "next/navigation";
import ReactDOM from "react-dom";
import Link from "next/link";
import type { Metadata } from "next";
import { acomodacoes } from "@/data/acomodacoes";
import { LazyVideoCard } from "@/components/LazyVideoCard";
import { EditorialFooter } from "@/components/EditorialFooter";

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

  return {
    title: `${item.nome} | Pousada Eliiy Zita Pedro`,
    description: item.descricaoCurta,
    openGraph: {
      title: `${item.nome} | Pousada Eliiy Zita Pedro`,
      description: item.descricaoCurta,
      images: [{ url: item.fotos[0]?.url || "/media/editorial/hero-crepusculo.webp" }],
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
      {/* HEADER SUÍÇO EM 4 COLUNAS (ESTÉTICA ARQ.MP4) */}
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
                ? "Modalidade Chalé com Cozinha"
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
      <main className="w-full py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14">
          {/* Topo Editorial da Unidade */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
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
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                {item.nome.replace(/\((.*?)\)/, "")}{" "}
                <span className="font-editorial-italic font-normal text-[#5C5F5B]">
                  ({item.capacidade}).
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#5C5F5B] max-w-2xl leading-relaxed">
                {item.subtitulo}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:items-end justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-[#141614] text-[#F4F4F0] pl-6 pr-2 py-2 text-sm font-semibold hover:bg-[#077c37] transition-all"
              >
                <span>Consultar datas com Dona Zita</span>
                <span className="w-10 h-10 rounded-full bg-[#F4F4F0] text-[#141614] flex items-center justify-center text-xs font-bold">
                  ↗
                </span>
              </a>
              <span className="mt-2 text-xs text-[#5C5F5B]">
                Reserva direta pelo WhatsApp · Sem taxas de intermediários
              </span>
            </div>
          </div>

          {/* VITRINE FOTOGRÁFICA & VÍDEO REAL EM CARDS ARREDONDADOS (28px) */}
          <section aria-label="Galeria e vídeo real da acomodação" className="mb-16">
            {item.fotos.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Foto Principal Grande Arredondada */}
                <figure className="lg:col-span-8 rounded-[28px] overflow-hidden bg-[#EAEAE4] relative flex flex-col justify-between shadow-lg">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={item.fotos[0].url}
                      alt={item.fotos[0].alt}
                      width={1200}
                      height={750}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="px-6 py-4 bg-[#EAEAE4] text-xs text-[#5C5F5B] flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium text-[#141614]">{item.fotos[0].alt}</span>
                    <span className="font-mono text-[11px]">{item.fotos[0].origem}</span>
                  </figcaption>
                </figure>

                {/* Coluna Lateral: Tour em Vídeo Real + Fotos Secundárias */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {item.videoCard ? (
                    <div className="rounded-[28px] overflow-hidden bg-[#141614] text-[#F4F4F0] p-4 shadow-lg">
                      <LazyVideoCard
                        mp4={item.videoCard.mp4}
                        poster={item.videoCard.poster}
                        title={item.nome}
                        subtitle={item.videoCard.legenda}
                        originLabel={`Tour real em vídeo (${item.videoCard.duracaoSeg}s)`}
                        aspectClass="aspect-[16/10]"
                      />
                    </div>
                  ) : null}

                  {item.fotos.slice(1).map((foto, idx) => (
                    <figure
                      key={idx}
                      className="rounded-[24px] overflow-hidden bg-[#EAEAE4] border border-[#141614]/10"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={foto.url}
                          alt={foto.alt}
                          width={640}
                          height={400}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-xs text-[#5C5F5B]">
                        {foto.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] bg-[#EAEAE4] border border-[#141614]/12 p-8 sm:p-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#077c37] block mb-2">
                  [ COMPROMISSO DE TRANSPARÊNCIA VISUAL ]
                </span>
                <h2 className="text-2xl font-semibold text-[#141614]">
                  Sem repetição de fotos de outras acomodações
                </h2>
                <p className="mt-2 text-sm text-[#5C5F5B] max-w-3xl leading-relaxed">
                  {item.pendenciaMidia} Solicite pelo botão de WhatsApp abaixo uma foto ou vídeo atualizado desta unidade específica para as datas da sua viagem.
                </p>
              </div>
            )}
          </section>

          {/* BARRA ARQUITETÔNICA DE ESPECIFICAÇÕES [01] A [04] */}
          <section id="especificacoes" className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-[24px] bg-[#EAEAE4]/80 p-6 border border-[#141614]/10">
                <span className="text-xs font-mono text-[#077c37] block mb-2">[01] CAPACIDADE</span>
                <p className="text-xl font-semibold">{item.capacidade}</p>
                <p className="text-xs text-[#5C5F5B] mt-1">Confirmado por Dona Zita</p>
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
                    <span>Falar com Dona Zita no WhatsApp</span>
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
                  prefetch={false}
                  className="rounded-2xl bg-white/10 hover:bg-[#f8faf8] hover:text-[#0a301a] p-4 transition-all border border-white/15 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono opacity-85">
                    {outra.categoria === "Chale" ? "Chalé c/ Cozinha" : "Suíte"} · {outra.capacidade}
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
