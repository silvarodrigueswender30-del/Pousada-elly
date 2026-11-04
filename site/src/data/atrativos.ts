export interface AtrativoTuristico {
  id: string;
  numero: string;
  tagAcesso: string;
  distancia: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  destaques: string[];
  imagemPrincipal: string;
  imagensGaleria: string[];
  video: {
    mp4: string;
    poster: string;
    titulo: string;
  };
  whatsappMsg: string;
}

export const atrativosTuristicos: AtrativoTuristico[] = [
  {
    id: "praia-ubatumirim",
    numero: "01",
    tagAcesso: "PÉ NA AREIA",
    distancia: "Em frente à pousada",
    nome: "Praia do Ubatumirim",
    subtitulo: "Enseada de águas calmas e rasas, quiosques caiçaras e areia firme para caminhadas",
    descricao:
      "Localizada diretamente em frente à pousada, a Praia do Ubatumirim é abençoada por um mar sereno sem ondas fortes — um verdadeiro refúgio para famílias, crianças e idosos. Com ampla faixa de areia batida, quiosques tradicionais e vista cinematográfica para as montanhas da Serra do Mar e ilhas vizinhas, oferece um dos pores do sol mais bonitos de Ubatuba.",
    destaques: [
      "Mar calmo sem ondas (ideal para crianças e idosos)",
      "Acesso imediato pé na areia a poucos passos",
      "Quiosques tradicionais e gastronomia caiçara",
      "Faixa de areia ampla perfeita para caminhadas"
    ],
    imagemPrincipal: "/media/atrativos/praia-ubatumirim-1.webp",
    imagensGaleria: [
      "/media/atrativos/praia-ubatumirim-1.webp",
      "/media/atrativos/praia-ubatumirim-2.webp",
      "/media/atrativos/praia-ubatumirim-3.webp"
    ],
    video: {
      mp4: "/media/v/praia-ubatumirim.mp4",
      poster: "/media/v/praia-ubatumirim-poster.webp",
      titulo: "Vídeo real da Praia do Ubatumirim em frente à pousada"
    },
    whatsappMsg:
      "Olá Dona Zita! Estou no site da Pousada Eliiy Zita Pedro e gostaria de saber mais sobre a Praia do Ubatumirim e as comodidades da pousada pé na areia."
  },
  {
    id: "praia-da-justa",
    numero: "02",
    tagAcesso: "CANTO DIREITO",
    distancia: "A pé na maré baixa ou barco",
    nome: "Praia da Justa",
    subtitulo: "Enseada menor e abrigada, águas esmeraldas para snorkel e piscinas naturais",
    descricao:
      "Fica no canto direito da Praia do Ubatumirim. É uma enseada menor e ainda mais abrigada, com águas cristalinas em tom esmeralda, excelente para snorkel e banho tranquilo. Na maré baixa, é acessível caminhando pela costeira rochosa ou contornando o mar raso, revelando um dos cenários mais preservados e paradisíacos de toda a região norte.",
    destaques: [
      "Águas cristalinas em tom esmeralda",
      "Excelente para prática de snorkel e piscinas naturais",
      "Passeio a pé contornando a costeira na maré baixa",
      "Ambiente selvagem e intimista cercado de verde"
    ],
    imagemPrincipal: "/media/atrativos/praia-da-justa-1.webp",
    imagensGaleria: [
      "/media/atrativos/praia-da-justa-1.webp",
      "/media/atrativos/praia-da-justa-2.webp",
      "/media/atrativos/praia-da-justa-3.webp",
      "/media/atrativos/praia-da-justa-4.webp"
    ],
    video: {
      mp4: "/media/v/praia-da-justa.mp4",
      poster: "/media/v/praia-da-justa-poster.webp",
      titulo: "Vídeo real da Praia da Justa e águas transparentes"
    },
    whatsappMsg:
      "Olá Dona Zita! Estou no site da Pousada Eliiy Zita Pedro e gostaria de dicas para visitar a Praia da Justa e melhor horário de maré para caminhar até lá."
  },
  {
    id: "praia-estaleiro",
    numero: "03",
    tagAcesso: "CANTO ESQUERDO",
    distancia: "Poucos passos pela foz do rio",
    nome: "Praia do Estaleiro do Padre",
    subtitulo: "Colada a Ubatumirim, mar sereno, quiosques rústicos e encontro com o rio",
    descricao:
      "Fica colada ao lado esquerdo de Ubatumirim, separada apenas pela foz do Rio Ubatumirim. Conta com extensão de areia semelhante, mar sereno, quiosques tradicionais e o charme único do encontro da água doce com o mar, proporcionando banhos relaxantes e passeios tranquilos com vista para toda a enseada.",
    destaques: [
      "Separada de Ubatumirim apenas pela foz do rio",
      "Mar calmo e seguro para banho de mar em família",
      "Quiosques com petiscos frescos e cerveja gelada",
      "Belo encontro de água doce do rio com o mar"
    ],
    imagemPrincipal: "/media/atrativos/praia-estaleiro-1.webp",
    imagensGaleria: [
      "/media/atrativos/praia-estaleiro-1.webp"
    ],
    video: {
      mp4: "/media/v/praia-estaleiro.mp4",
      poster: "/media/v/praia-estaleiro-poster.webp",
      titulo: "Vídeo real da Praia do Estaleiro do Padre"
    },
    whatsappMsg:
      "Olá Dona Zita! Estou no site da Pousada Eliiy Zita Pedro e gostaria de informações sobre os quiosques e travessia para a Praia do Estaleiro do Padre."
  },
  {
    id: "cachoeira-tombador",
    numero: "04",
    tagAcesso: "SERTÃO DE UBATUMIRIM",
    distancia: "Poucos minutos da pousada",
    nome: "Cachoeira do Tombador",
    subtitulo: "Piscina natural de água doce cristalina cercada pela exuberante Mata Atlântica",
    descricao:
      "Localizada no sertão do Ubatumirim a poucos minutos da pousada, a Cachoeira do Tombador oferece uma das melhores opções de banho de água doce límpida e refrescante de Ubatuba. Envolta pela mata atlântica nativa e ar puro da serra, possui poços naturais e quedas suaves, ideal para renovar as energias após um dia inteiro de praia e sol.",
    destaques: [
      "Poço natural cristalino para banho refrescante",
      "Mata Atlântica preservada com rica biodiversidade",
      "Acesso rápido de carro ou trilha leve sem complicação",
      "Combinação perfeita de mar e água doce no mesmo dia"
    ],
    imagemPrincipal: "/media/atrativos/cachoeira-tombador-1.webp",
    imagensGaleria: [
      "/media/atrativos/cachoeira-tombador-1.webp",
      "/media/atrativos/cachoeira-tombador-2.webp"
    ],
    video: {
      mp4: "/media/v/cachoeira-tombador.mp4",
      poster: "/media/v/cachoeira-tombador-poster.webp",
      titulo: "Vídeo real da Cachoeira do Tombador no sertão de Ubatumirim"
    },
    whatsappMsg:
      "Olá Dona Zita! Estou no site da Pousada Eliiy Zita Pedro e gostaria de orientações para conhecer a Cachoeira do Tombador durante a minha hospedagem."
  }
];
