export interface EditorialMediaSlot {
  id: string;
  src: string;
  avif?: string;
  mobileSrc?: string;
  mobileAvif?: string;
  mobileVideoMp4?: string;
  mobileVideoWebm?: string;
  mobileVideoPoster?: string;
  alt: string;
  isTemporaryPlaceholder: boolean;
  arquivoEsperadoParaTroca: string;
  secaoOndeAparece: string;
}

/**
 * MAPA CENTRAL DE IMAGENS EDITORIAIS (arq.mp4)
 * ---------------------------------------------
 * As 3 imagens de `02-referencias/videos-img/img-editada/` já estão ativas e otimizadas em WebP/AVIF.
 * As demais estão marcadas com `isTemporaryPlaceholder: true` — para trocá-las quando terminar de editar,
 * basta substituir o arquivo correspondente em `site/public/media/editorial/` ou alterar o caminho abaixo.
 */
export const editorialMedia: Record<string, EditorialMediaSlot> = {
  hero1: {
    id: "hero1",
    src: "/media/editorial/hero-1.webp",
    avif: "/media/editorial/hero-1.avif",
    mobileSrc: "/media/editorial/hero-1-mobile.webp",
    mobileAvif: "/media/editorial/hero-1-mobile.avif",
    alt: "Fachada da Pousada Eliiy Zita Pedro pé na areia com coqueiros, mesas de praia e a capela histórica em Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "hero1.jpg (APLICADO)",
    secaoOndeAparece: "Seção 1 (Hero Slide 01 — Pé na Areia)",
  },
  hero2: {
    id: "hero2",
    src: "/media/editorial/hero-2.webp",
    avif: "/media/editorial/hero-2.avif",
    mobileSrc: "/media/editorial/hero-2-mobile.webp",
    mobileAvif: "/media/editorial/hero-2-mobile.avif",
    alt: "Capela privativa e restaurante da pousada pé na areia com a Serra do Mar ao fundo",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "hero2.jpg (APLICADO)",
    secaoOndeAparece: "Seção 1 (Hero Slide 02 — Capela & Gastronomia)",
  },
  hero3: {
    id: "hero3",
    src: "/media/editorial/hero-3.webp",
    avif: "/media/editorial/hero-3.avif",
    mobileSrc: "/media/editorial/hero-3-mobile.webp",
    mobileAvif: "/media/editorial/hero-3-mobile.avif",
    alt: "Vista aérea panorâmica do terraço superior da pousada para o mar calmo e ilhas da Praia do Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "hero3.jpg (APLICADO)",
    secaoOndeAparece: "Seção 1 (Hero Slide 03 — Baía & Mar Calmo)",
  },
  footerCrepusculo: {
    id: "footerCrepusculo",
    src: "/media/editorial/footer-crepusculo.webp",
    avif: "/media/editorial/footer-crepusculo.avif",
    mobileSrc: "/media/editorial/footer-crepusculo-mobile.webp",
    mobileAvif: "/media/editorial/footer-crepusculo-mobile.avif",
    alt: "Vista crepuscular do terraço da Pousada Eliiy Zita Pedro com luzes acolhedoras nos chalés e mar dourado da Praia do Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "footer.jpg (APLICADO)",
    secaoOndeAparece: "Seção 8C (Base Fotográfica do Rodapé sob a Mega-Wordmark)",
  },
  heroCrepusculo: {
    id: "heroCrepusculo",
    src: "/media/editorial/hero-crepusculo.webp",
    avif: "/media/editorial/hero-crepusculo.avif",
    mobileSrc: "/media/editorial/hero-crepusculo-mobile.webp",
    alt: "Fachada iluminada ao entardecer da Pousada e Restaurante Eliiy Zita Pedro na areia da Praia do Ubatumirim com espreguiçadeiras e Serra do Mar ao fundo",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "hero.jpg (APLICADO)",
    secaoOndeAparece: "Janela Expansível do Portal no Scroll da Seção 2B",
  },
  vistaTerracoBaia: {
    id: "vistaTerracoBaia",
    src: "/media/editorial/vista-terraco-baia.webp",
    avif: "/media/editorial/vista-terraco-baia.avif",
    alt: "Vista panorâmica no fim de tarde a partir do terraço superior da pousada para o mar calmo e ilhas da Praia do Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "Edit_rooftop_photo_of_beach_31adf87f_2K.jpg",
    secaoOndeAparece: "Galeria Geral",
  },
  praiaRestauranteCapela: {
    id: "praiaRestauranteCapela",
    src: "/media/editorial/praia-restaurante-capela.webp",
    avif: "/media/editorial/praia-restaurante-capela.avif",
    alt: "Faixa de areia da Praia do Ubatumirim em frente ao restaurante e à capela azul da Pousada Eliiy Zita Pedro",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "Editing_photo_of_beach_chapel_d3db57ae_2K.jpg",
    secaoOndeAparece: "Seção Diferenciais (Satélite)",
  },
  enseadaShowcase: {
    id: "enseadaShowcase",
    src: "/media/editorial/enseada.webp",
    avif: "/media/editorial/enseada.avif",
    mobileSrc: "/media/editorial/enseada-mobile.webp",
    mobileAvif: "/media/editorial/enseada-mobile.avif",
    alt: "Enseada de águas calmas e límpidas na Praia do Ubatumirim com vista para as ilhas",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "enseada.jpg / enseadamobile.jpg (APLICADO)",
    secaoOndeAparece: "Seção 3 (Showcase Pinado [01] — Vivência Pé na Areia · Ubatumirim)",
  },
  patioShowcase: {
    id: "patioShowcase",
    src: "/media/editorial/patio.webp",
    avif: "/media/editorial/patio.avif",
    mobileSrc: "/media/editorial/patio-mobile.webp",
    mobileAvif: "/media/editorial/patio-mobile.avif",
    mobileVideoMp4: "/media/v/patio2-m.mp4",
    mobileVideoWebm: "/media/v/patio2-m.webm",
    mobileVideoPoster: "/media/v/patio2-poster.webp",
    alt: "Pátio acolhedor da Pousada Eliiy Zita Pedro abrindo direto na areia da praia",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "patio.jpg / patiomobile.jpg / patio2.mp4 (APLICADO)",
    secaoOndeAparece: "Seção 3 (Showcase Pinado [02] — Vivência Pé na Areia · Ubatumirim)",
  },
  saboresShowcase: {
    id: "saboresShowcase",
    src: "/media/editorial/sabores.webp",
    avif: "/media/editorial/sabores.avif",
    mobileSrc: "/media/editorial/sabores-mobile.webp",
    mobileAvif: "/media/editorial/sabores-mobile.avif",
    mobileVideoMp4: "/media/v/caicara-m.mp4",
    mobileVideoWebm: "/media/v/caicara-m.webm",
    mobileVideoPoster: "/media/v/caicara-poster.webp",
    alt: "Restaurante e quiosque à beira-mar com gastronomia caiçara na Praia do Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "sabores.jpg / saboresmobile.jpg / caicara.mp4 (APLICADO)",
    secaoOndeAparece: "Seção 3 (Showcase Pinado [03] — Vivência Pé na Areia · Ubatumirim)",
  },
  cena03Restaurante: {
    id: "cena03Restaurante",
    src: "/media/editorial/sabores.webp",
    avif: "/media/editorial/sabores.avif",
    mobileSrc: "/media/editorial/sabores-mobile.webp",
    mobileAvif: "/media/editorial/sabores-mobile.avif",
    alt: "Mesas e guarda-sóis na areia em frente ao restaurante e quiosque da Pousada Eliiy Zita Pedro",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "sabores.jpg (APLICADO)",
    secaoOndeAparece: "Seção 6 (Card de Gastronomia Caiçara)",
  },
  cat01ChalesMaster: {
    id: "cat01ChalesMaster",
    src: "/media/editorial/placeholder-cat-01-chales-master.webp",
    avif: "/media/editorial/placeholder-cat-01-chales-master.avif",
    alt: "Vista da varanda superior do Chalé Master para até 15 pessoas com o pátio e o mar de Ubatumirim ao fundo",
    isTemporaryPlaceholder: true,
    arquivoEsperadoParaTroca: "public/media/editorial/placeholder-cat-01-chales-master.webp",
    secaoOndeAparece: "Seção 4 (Seletor Interativo — Aba 01: Chalés para Grandes Grupos 10 a 15p)",
  },
  cat02ChalesFamilia: {
    id: "cat02ChalesFamilia",
    src: "/media/editorial/placeholder-cat-02-chales-familia.webp",
    avif: "/media/editorial/placeholder-cat-02-chales-familia.avif",
    alt: "Vista panorâmica da varanda do Chalé Familiar para a enseada de Ubatumirim",
    isTemporaryPlaceholder: true,
    arquivoEsperadoParaTroca: "public/media/editorial/placeholder-cat-02-chales-familia.webp",
    secaoOndeAparece: "Seção 4 (Seletor Interativo — Aba 02: Chalés Família com Cozinha 4 a 5p)",
  },
  cat03ChaleTriplo: {
    id: "cat03ChaleTriplo",
    src: "/media/editorial/placeholder-cat-03-chale-triplo.webp",
    avif: "/media/editorial/placeholder-cat-03-chale-triplo.avif",
    alt: "Cozinha privativa equipada com mesa de madeira do Chalé Triplo para até 3 pessoas",
    isTemporaryPlaceholder: true,
    arquivoEsperadoParaTroca: "public/media/editorial/placeholder-cat-03-chale-triplo.webp",
    secaoOndeAparece: "Seção 4 (Seletor Interativo — Aba 03: Chalé Triplo com Cozinha 3p)",
  },
  cat04Suites: {
    id: "cat04Suites",
    src: "/media/editorial/placeholder-cat-04-suites.webp",
    avif: "/media/editorial/placeholder-cat-04-suites.avif",
    alt: "Interior climatizado da Suíte Quádrupla com Varanda na Pousada Eliiy Zita Pedro",
    isTemporaryPlaceholder: true,
    arquivoEsperadoParaTroca: "public/media/editorial/placeholder-cat-04-suites.webp",
    secaoOndeAparece: "Seção 4 (Seletor Interativo — Aba 04: Suítes Pé na Areia 2 a 4p)",
  },
  quemSomosVertical: {
    id: "quemSomosVertical",
    src: "/media/editorial/quem-somos.webp",
    avif: "/media/editorial/quem-somos.avif",
    alt: "Pátio acolhedor com piscina e estrutura familiar da Pousada Eliiy Zita Pedro em Ubatumirim",
    isTemporaryPlaceholder: false,
    arquivoEsperadoParaTroca: "patiomobile.jpg (APLICADO)",
    secaoOndeAparece: "Seção 6 (Quem Somos / A Pousada — Foto principal com selo circular)",
  },
  bentoVisitaPanoramica: {
    id: "bentoVisitaPanoramica",
    src: "/media/editorial/placeholder-bento-visita.webp",
    avif: "/media/editorial/placeholder-bento-visita.avif",
    alt: "Vista aérea da Pousada Eliiy Zita Pedro de frente para a areia da Praia do Ubatumirim",
    isTemporaryPlaceholder: true,
    arquivoEsperadoParaTroca: "public/media/editorial/placeholder-bento-visita.webp",
    secaoOndeAparece: "Seção 7 (Bento Grid Escuro — Card Direito 'Venha viver Ubatumirim pessoalmente')",
  },
};

export interface HeroSlide {
  id: string;
  tabLabel: string;
  eyebrow: string;
  headlinePrefix: string;
  italicWord: string;
  subtitle: string;
  media: EditorialMediaSlot;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "pe-na-areia",
    tabLabel: "Pé na Areia",
    eyebrow: "PRAIA DO UBATUMIRIM · LITORAL NORTE DE UBATUBA — SP",
    headlinePrefix: "Nossa forma de receber une mar calmo e",
    italicWord: "natureza.",
    subtitle:
      "Acorde com os pés na areia e o mar sereno sem ondas fortes. 5 chalés com cozinha privativa (3 a 15 pessoas), suítes com varanda, restaurante próprio e piscina.",
    media: editorialMedia.hero1,
  },
  {
    id: "capela-e-gastronomia",
    tabLabel: "Capela & Pátio",
    eyebrow: "CAPELA PRIVATIVA À BEIRA-MAR · RESTAURANTE PÉ NA AREIA",
    headlinePrefix: "Nossa forma de receber une tradição e",
    italicWord: "acolhimento.",
    subtitle:
      "Espaço arborizado com quiosque pé na areia, culinária caiçara fresca e capela privativa em meio ao jardim para momentos de paz e celebrações em família.",
    media: editorialMedia.hero2,
  },
  {
    id: "baia-e-vista",
    tabLabel: "Baía & Mar Calmo",
    eyebrow: "VISTA PANORÂMICA DO TERRAÇO · ENSEADA DE UBATUMIRIM",
    headlinePrefix: "Nossa forma de receber une horizonte e",
    italicWord: "sossego.",
    subtitle:
      "Águas mansas como uma piscina natural, perfeitas para crianças e idosos. Uma enseada protegida com areia firme e o pôr do sol mais bonito de Ubatuba.",
    media: editorialMedia.hero3,
  },
];

export interface ShowcaseScene {
  num: string;
  title: string;
  italicAccent: string;
  description: string;
  tag: string;
  media: EditorialMediaSlot;
}

export const showcaseScenes: ShowcaseScene[] = [
  {
    num: "01",
    title: "Uma enseada que abraça a",
    italicAccent: "calma",
    description:
      "Diferente das praias de tombo, Ubatumirim tem águas tranquilas e vista aberta para as ilhas costeiras. Perfeita para caminhar ao amanhecer, remar de caiaque ou passar o dia inteiro com as crianças na beira d'água.",
    tag: "Praia do Ubatumirim · Zona Norte de Ubatuba",
    media: editorialMedia.enseadaShowcase,
  },
  {
    num: "02",
    title: "Um pátio que se abre direto na",
    italicAccent: "areia",
    description:
      "Sem atravessar rua ou pegar carro: você sai do seu chalé ou suíte, passa pela piscina com cascata e pela capela azul da propriedade e já pisa na areia da praia.",
    tag: "Pé na areia real · Estacionamento interno gratuito",
    media: editorialMedia.patioShowcase,
  },
  {
    num: "03",
    title: "Sabores caiçaras servidos à",
    italicAccent: "beira-mar",
    description:
      "Nosso restaurante e quiosque próprio atende tanto no salão coberto quanto nas mesas e espreguiçadeiras na areia. Porções de peixe, camarão, pratos executivos e bebidas geladas o dia todo.",
    tag: "Restaurante & Quiosque Eliiy Zita Pedro",
    media: editorialMedia.saboresShowcase,
  },
];

export interface CategoriaInterativa {
  id: string;
  numero: string;
  tituloBarra: string;
  subtituloBarra: string;
  capacidadeTag: string;
  headlineCard: string;
  descricaoCard: string;
  destaques: string[];
  media: EditorialMediaSlot;
  videoPreview: {
    mp4: string;
    poster: string;
    legenda: string;
  };
  rotasIncluidas: {
    slug: string;
    nomeCurto: string;
    capacidade: string;
  }[];
  slugPrincipal: string;
}

export const categoriasInterativas: CategoriaInterativa[] = [
  {
    id: "chales-grandes",
    numero: "01",
    tituloBarra: "Chalés para Grandes Grupos",
    subtituloBarra: "Dois andares, cozinha privativa no térreo e até 15 hóspedes",
    capacidadeTag: "10 a 15 pessoas",
    headlineCard: "Casas completas de dois pavimentos dentro da pousada",
    descricaoCard:
      "Projetados para grandes famílias que viajam juntas: cozinha equipada no térreo (geladeira duplex, fogão, pia), escada interna e amplo andar superior em madeira com varanda.",
    destaques: [
      "Cozinha 100% privativa no térreo",
      "Dois pavimentos com camas de casal e beliches",
      "Varanda superior com vista no Chalé Master",
    ],
    media: editorialMedia.cat01ChalesMaster,
    videoPreview: {
      mp4: "/media/v/chale-master-15p.mp4",
      poster: "/media/v/chale-master-15p.webp",
      legenda: "Tour real pelo Chalé Master (até 15 pessoas)",
    },
    rotasIncluidas: [
      { slug: "chale-master-15p", nomeCurto: "Chalé Master (15p)", capacidade: "Até 15 pessoas" },
      { slug: "chale-grande-10p", nomeCurto: "Chalé Grande Família (10p)", capacidade: "Até 10 pessoas" },
    ],
    slugPrincipal: "chale-master-15p",
  },
  {
    id: "chales-familia",
    numero: "02",
    tituloBarra: "Chalés Família com Cozinha",
    subtituloBarra: "Ar-condicionado split, cozinha equipada e opções com vista mar",
    capacidadeTag: "4 a 5 pessoas",
    headlineCard: "Autonomia de cozinha própria com conforto de quarto climatizado",
    descricaoCard:
      "Unidades familiares documentadas em vídeo por Dona Zita: escolha entre o Chalé Quinteto (com grande mesa de madeira e bancos) ou o Chalé Quádruplo (com cozinha na varanda envidraçada de frente para o mar).",
    destaques: [
      "Ar-condicionado split + ventilador confirmados em vídeo",
      "Geladeira, fogão de 4 bocas, pia e armário",
      "Opção com varanda envidraçada panorâmica frente mar",
    ],
    media: editorialMedia.cat02ChalesFamilia,
    videoPreview: {
      mp4: "/media/v/chale-quadruplo-4p.mp4",
      poster: "/media/v/chale-quadruplo-4p.webp",
      legenda: "Vista real da varanda envidraçada e cozinha do Chalé Quádruplo",
    },
    rotasIncluidas: [
      { slug: "chale-quinteto-5p", nomeCurto: "Chalé Quinteto (5p)", capacidade: "Até 5 pessoas" },
      { slug: "chale-quadruplo-4p", nomeCurto: "Chalé Quádruplo Vista Mar (4p)", capacidade: "Até 4 pessoas" },
    ],
    slugPrincipal: "chale-quadruplo-4p",
  },
  {
    id: "chale-triplo",
    numero: "03",
    tituloBarra: "Chalé Compacto com Cozinha",
    subtituloBarra: "Liberdade para cozinhar em família pequena a poucos passos da areia",
    capacidadeTag: "Até 3 pessoas",
    headlineCard: "Praticidade e economia para casal com 1 filho ou trio",
    descricaoCard:
      "Confirmado no áudio de Dona Zita para famílias de 3 pessoas que preferem preparar o próprio café e refeições leves na praia, com cozinha de entrada, mesa com cadeiras e quarto privativo.",
    destaques: [
      "Cozinha privativa com geladeira, fogão e mesa",
      "Acesso rápido ao pátio, piscina e praia",
      "Ideal para estadias prolongadas com ótimo custo-benefício",
    ],
    media: editorialMedia.cat03ChaleTriplo,
    videoPreview: {
      mp4: "/media/v/chale-triplo-3p.mp4",
      poster: "/media/v/chale-triplo-3p.webp",
      legenda: "Tour real pela cozinha e dormitório do Chalé Triplo",
    },
    rotasIncluidas: [
      { slug: "chale-triplo-3p", nomeCurto: "Chalé Família Triplo (3p)", capacidade: "Até 3 pessoas" },
    ],
    slugPrincipal: "chale-triplo-3p",
  },
  {
    id: "suites-pe-na-areia",
    numero: "04",
    tituloBarra: "Suítes Pé na Areia",
    subtituloBarra: "Sem cozinha — feitas para descansar e aproveitar o restaurante na praia",
    capacidadeTag: "2 a 4 pessoas",
    headlineCard: "Descanso puro com varanda, brisa do mar e gastronomia na areia",
    descricaoCard:
      "Para quem não quer cozinhar nas férias: suítes para casal, 3 ou 4 pessoas. Destaque para a Suíte Quádrupla com ar-condicionado split, frigobar, cama de casal, beliche e varanda voltada para os coqueiros e o mar.",
    destaques: [
      "Suíte Quádrupla com ar-condicionado split, frigobar e varanda",
      "Opções para Casal (2p) com rede na varanda e Tripla (3p)",
      "A poucos metros do restaurante e quiosque da pousada",
    ],
    media: editorialMedia.cat04Suites,
    videoPreview: {
      mp4: "/media/v/suite-quadrupla-4p.mp4",
      poster: "/media/v/suite-quadrupla-4p.webp",
      legenda: "Tour real pela Suíte Quádrupla com Varanda",
    },
    rotasIncluidas: [
      { slug: "suite-quadrupla-4p", nomeCurto: "Suíte Quádrupla c/ Varanda (4p)", capacidade: "Até 4 pessoas" },
      { slug: "suite-tripla-3p", nomeCurto: "Suíte Tripla (3p)", capacidade: "Até 3 pessoas" },
      { slug: "suite-casal-2p", nomeCurto: "Suíte Casal c/ Rede (2p)", capacidade: "Até 2 pessoas" },
    ],
    slugPrincipal: "suite-quadrupla-4p",
  },
];

export const bussolaDiferenciais = [
  {
    num: "01",
    pos: "top-left",
    titulo: "Pé na areia de verdade",
    descricao:
      "A propriedade termina diretamente na faixa de areia da Praia do Ubatumirim. Sem ruas para atravessar, com saída direta para o mar calmo e guarda-sóis na praia.",
  },
  {
    num: "02",
    pos: "top-right",
    titulo: "Duas formas de se hospedar",
    descricao:
      "5 Chalés com cozinha privativa equipada (para 3, 4, 5, 10 ou 15 pessoas) ou 3 Suítes práticas (para 2, 3 ou 4 pessoas) para quem quer apenas descansar.",
  },
  {
    num: "03",
    pos: "bottom-left",
    titulo: "Restaurante, piscina e capela",
    descricao:
      "Restaurante e quiosque próprio servindo pratos caiçaras e porções na areia, piscina ao ar livre com cascata no pátio e capela em meio ao jardim.",
  },
  {
    num: "04",
    pos: "bottom-right",
    titulo: "Reserva direta com Dona Zita",
    descricao:
      "Sem taxas extras de plataformas intermediárias. Você conversa direto pelo WhatsApp, escolhe a unidade ideal para a sua família e recebe orientação real.",
  },
];

export const quemSomosAbas = [
  {
    id: "pousada",
    label: "Dona Zita & A Pousada",
    eyebrow: "TRADIÇÃO FAMILIAR EM UBATUMIRIM",
    titulo: "Uma família anfitriã, uma forma autêntica de construir memórias reais.",
    paragrafoIntro:
      "Na Praia do Ubatumirim, a Pousada e Restaurante Eliiy Zita Pedro nasceu para receber famílias e grupos que buscam a simplicidade acolhedora do Litoral Norte de Ubatuba aliada ao privilégio de estar com os pés na areia.",
    cardNome: "Família Zita Pedro",
    cardCargo: "ANFITRIÕES OFICIAIS · PRAIA DO UBATUMIRIM",
    cardBotaoLabel: "WhatsApp Oficial ↗",
    cardCitacao:
      "\"Aqui cada família é recebida pessoalmente: mostramos nossos chalés e suítes exatamente como são, sem filtros e de frente para o mar calmo.\"",
    paragrafoCard:
      "No áudio e nos vídeos gravados pela própria Dona Zita, você conhece desde o Chalé Master de dois andares em madeira para 15 pessoas até a piscina com cascata, a capela da propriedade e as varandas abertas para a brisa da enseada.",
    metricas: [
      { valor: "4,3 ★", rotulo: "117 avaliações verificadas no Google Maps" },
      { valor: "8 opções", rotulo: "5 chalés com cozinha (3–15p) e 3 suítes (2–4p)" },
    ],
  },
  {
    id: "restaurante",
    label: "Restaurante & Quiosque",
    eyebrow: "GASTRONOMIA NA AREIA",
    titulo: "Do café ao peixe fresco servido sob os guarda-sóis na praia.",
    paragrafoIntro:
      "Você não precisa tirar o carro do estacionamento para almoçar ou petiscar. Nosso restaurante e quiosque próprio fica de frente para o mar, com mesas no terraço coberto e atendimento na faixa de areia.",
    cardNome: "Restaurante Eliiy Zita Pedro",
    cardCargo: "COZINHA CAIÇARA & QUIOSQUE DE PRAIA",
    cardBotaoLabel: "Consultar estadia ↗",
    cardCitacao:
      "\"Mesmo quem se hospeda nos chalés com cozinha privativa aproveita a comodidade de pedir porções de peixe, camarão e bebidas geladas na areia.\"",
    paragrafoCard:
      "O salão envidraçado e os quiosques de piaçava na areia atendem durante o dia todo, permitindo que crianças e adultos aproveitem a praia com suporte completo de cozinha e banheiro a poucos passos.",
    metricas: [
      { valor: "Na areia", rotulo: "Guarda-sóis e espreguiçadeiras em frente à pousada" },
      { valor: "100% próprio", rotulo: "Cozinha caiçara e quiosque integrados à hospedagem" },
    ],
  },
  {
    id: "ubatumirim",
    label: "A Enseada do Ubatumirim",
    eyebrow: "LITORAL NORTE PRESERVADO · KM 16 BR-101",
    titulo: "Águas calmas, ilhas à vista e pôr do sol entre a Serra do Mar e o oceano.",
    paragrafoIntro:
      "Localizada na região norte de Ubatuba, a Praia do Ubatumirim é famosa pela extensa faixa de areia batida e pelo mar tranquilo de enseada — ideal para crianças, caminhadas, caiaque e banho de mar sem correnteza forte.",
    cardNome: "Enseada de Ubatumirim",
    cardCargo: "RODOVIA RIO-SANTOS (BR-101 NORTE · KM 16)",
    cardBotaoLabel: "Ver localização ↗",
    cardCitacao:
      "\"Uma praia preservada onde as crianças brincam na beira d'água com tranquilidade e o fim de tarde colore toda a baía.\"",
    paragrafoCard:
      "Na maré baixa, a caminhada pela costeira leva até a vizinha Praia da Justa, e a poucos minutos pela rodovia Rio-Santos estão a Praia do Estaleiro, a Praia da Fazenda e os passeios de barco para a Ilha das Couves.",
    metricas: [
      { valor: "Mar calmo", rotulo: "Enseada abrigada ideal para famílias e crianças" },
      { valor: "KM 16", rotulo: "Acesso pela Rodovia Rio-Santos (BR-101 Norte)" },
    ],
  },
];

export const faqEditorial = [
  {
    p: "Qual a diferença entre os Chalés e as Suítes da pousada?",
    r: "Conforme explica Dona Zita no áudio oficial: os 5 Chalés possuem cozinha privativa equipada (fogão, geladeira e pia) e acomodam de 3 até 15 pessoas (3p, 4p, 5p, 10p e 15p). Já as 3 Suítes não possuem cozinha (dispõem de frigobar na Suíte Quádrupla) e acomodam casal (2p), 3 ou 4 pessoas.",
  },
  {
    p: "Como funcionam os horários de Check-in e Check-out?",
    r: "O check-out é realizado até às 11:00 (confirmado no Google Maps e Booking). O horário de check-in praticado é das 12:00 às 22:00 — ao fechar sua reserva diretamente com Dona Zita no WhatsApp, informe seu horário previsto de chegada na Praia do Ubatumirim.",
  },
  {
    p: "Todos os chalés possuem churrasqueira e ar-condicionado?",
    r: "Nos vídeos gravados por Dona Zita, o ar-condicionado split está confirmado nas filmagens da Suíte Quádrupla, Chalé Quádruplo, Chalé Quinteto e Chalé Triplo. Quanto à churrasqueira, Dona Zita informa que há chalé com churrasqueira — confirme no WhatsApp qual unidade específica está disponível para as suas datas.",
  },
  {
    p: "Por que reservar diretamente pelo site/WhatsApp em vez de plataformas de terceiros?",
    r: "Nos portais de reserva online aparecem apenas algumas categorias disponíveis por data e incidem comissões de intermediação. Pelo WhatsApp oficial você fala direto com a equipe da Dona Zita, consulta todos os chalés (inclusive os de 10 e 15 pessoas) e negocia o valor direto da pousada.",
  },
  {
    p: "A pousada tem estacionamento e cobra taxa extra para usar a piscina?",
    r: "O estacionamento privativo no pátio interno e o uso da piscina ao ar livre com cascata são gratuitos para todos os hóspedes.",
  },
];
