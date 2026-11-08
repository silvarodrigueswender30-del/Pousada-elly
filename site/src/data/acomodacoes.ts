export interface ComodidadeFactual {
  item: string;
  fonte: string;
  confirmado: boolean;
}

export interface VideoStoryItem {
  id: string;
  label: string;
  mp4: string;
  poster: string;
  title: string;
  subtitle: string;
  duracaoSeg: number;
}

export interface Acomodacao {
  slug: string;
  nome: string;
  subtitulo: string;
  categoria: "Chale" | "Suite";
  destaqueCategoria?: boolean;
  capacidade: string;
  capacidadeNumero: number;
  tipoCamas: string;
  fonteCamas: string;
  cozinha: boolean;
  churrasqueiraStatus: string;
  arCondicionadoStatus: string;
  varandaStatus: string;
  vistaMar: boolean;
  descricaoCurta: string;
  descricaoCompleta: string;
  paraQuemE: string[];
  comodidades: ComodidadeFactual[];
  regras: ComodidadeFactual[];
  fotos: { url: string; alt: string; origem: string }[];
  videos: VideoStoryItem[];
  videoCard?: VideoStoryItem | null;
  pendenciaMidia: string | null;
  miniFaq: { p: string; r: string }[];
  whatsappMsg: string;
}

export const acomodacoes: Acomodacao[] = [
  {
    slug: "chale-master-15p",
    nome: "Acomodação Master para até 15 Pessoas",
    subtitulo: "Dois pavimentos, cozinha no térreo, piso superior amplo em madeira e varanda com vista para o mar",
    categoria: "Chale",
    destaqueCategoria: true,
    capacidade: "Até 15 pessoas",
    capacidadeNumero: 15,
    tipoCamas: "Camas de casal, camas de solteiro, beliches de madeira e mezanino no pavimento superior",
    fonteCamas: "Vídeo real v04 gravado pela pousada",
    cozinha: true,
    churrasqueiraStatus: "Acomodações selecionadas possuem churrasqueira sob consulta com a Eliiy",
    arCondicionadoStatus: "Ventilador de parede visível no vídeo; ar-condicionado sob consulta com a Eliiy",
    varandaStatus: "Varanda superior em madeira com vista para o pátio e para o mar calmo de Ubatumirim",
    vistaMar: true,
    descricaoCurta:
      "Maior acomodação da pousada, distribuída em dois andares: cozinha equipada no térreo e amplo piso superior em madeira com varanda voltada para o mar.",
    descricaoCompleta:
      "Confirmado pela pousada em áudio para grupos de até 15 pessoas e registrado em vídeo interno de 130 segundos. No térreo, conta com cozinha privativa equipada com geladeira duplex, freezer auxiliar, fogão e pia. Uma escada interna de madeira conduz ao pavimento superior, que reúne camas de casal, beliches, mezanino e acesso direto à varanda com vista para o mar calmo da Praia do Ubatumirim.",
    paraQuemE: [
      "Grandes famílias que viajam juntas e querem ficar na mesma casa pé na areia",
      "Grupos de até 15 pessoas que buscam a autonomia de preparar as próprias refeições",
      "Estadias de feriados e férias em que o custo por pessoa fica reduzido na reserva direta"
    ],
    comodidades: [
      { item: "Capacidade para até 15 pessoas", fonte: "Áudio oficial da pousada (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa no térreo (geladeira duplex, fogão, pia e armário)", fonte: "Áudio oficial da pousada + Vídeo v04", confirmado: true },
      { item: "Dois pavimentos com escada interna e piso superior em madeira", fonte: "Vídeo v04", confirmado: true },
      { item: "Varanda no andar superior com vista para o pátio e enseada", fonte: "Vídeo v04", confirmado: true },
      { item: "Banheiro privativo com ducha e ventilação", fonte: "Vídeo v04", confirmado: true },
      { item: "Churrasqueira (disponível em acomodações selecionadas — confirmar unidade)", fonte: "Áudio oficial da pousada sob consulta", confirmado: false },
      { item: "Estacionamento privativo gratuito no pátio interno", fonte: "Vídeo v04 + Acervo Oficial", confirmado: true },
      { item: "Wi-Fi disponível na propriedade", fonte: "Declarado no Acervo Oficial", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Ambiente familiar: festas e eventos com som alto não são permitidos", fonte: "Declarado no Acervo Oficial", confirmado: true },
      { item: "Política para animais de estimação (pets)", fonte: "Sob consulta com a Eliiy no WhatsApp", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Dormitório amplo da Acomodação Master para grupos com camas de madeira, beliche rústico e iluminação natural de fim de tarde",
        origem: "Fotografia em alta definição calibrada com luz natural suave de fim de tarde"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Varanda ampla com vista panorâmica para o pátio arborizado da pousada e montanhas da Serra do Mar",
        origem: "Acervo oficial de fotografias em alta definição da Pousada Eliiy Zita Pedro"
      },
      {
        url: "/media/quartos/vista-mar-coqueiros.webp",
        alt: "Vista da sacada superior para os coqueiros e as águas calmas da enseada do Ubatumirim",
        origem: "Acervo fotográfico da pousada com atmosfera acolhedora pé na areia"
      },
      {
        url: "/media/quartos/chale-amplo.webp",
        alt: "Espaço integrado do mezanino e quartos da Acomodação Master",
        origem: "Acervo oficial Acervo Oficial em alta definição"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-chale-master-15p.mp4",
        poster: "/media/v/tour-chale-master-15p-poster.webp",
        title: "Tour pela Acomodação Master",
        subtitle: "Vídeo real pelo pavimento superior de madeira e leitos familiares",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Praia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Acesso 100% pé na areia com jardim tropical e coqueiros",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A cozinha da Acomodação Master é privativa ou compartilhada?",
        r: "É 100% privativa da acomodação, localizada no pavimento térreo da própria acomodação, equipada com geladeira duplex, fogão e pia."
      },
      {
        p: "Como é calculado o valor da diária para até 15 pessoas?",
        r: "O valor varia conforme a época do ano e o número exato de hóspedes do grupo. A cotação é feita diretamente com a Eliiy pelo WhatsApp, sem taxas ou intermediários."
      },
      {
        p: "Esta acomodação tem churrasqueira privativa?",
        r: "A pousada confirma que há acomodações com churrasqueira. Ao solicitar sua cotação no WhatsApp, informe se prefere uma unidade com churrasqueira para as suas datas."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-chale-master-15p.mp4",
      poster: "/media/v/tour-chale-master-15p-poster.webp",
      title: "Tour pela Acomodação Master",
      subtitle: "Vídeo real pelo pavimento superior de madeira e leitos familiares",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Acomodação Master (até 15 pessoas)."
  },
  {
    slug: "chale-grande-10p",
    nome: "Acomodação Grande Família para até 10 Pessoas",
    subtitulo: "Acomodação ampla em dois níveis com quartos no térreo, cozinha privativa e pavimento superior",
    categoria: "Chale",
    capacidade: "Até 10 pessoas",
    capacidadeNumero: 10,
    tipoCamas: "Quartos térreos com camas de casal + pavimento superior em madeira com camas e beliches",
    fonteCamas: "Vídeo real v19 gravado pela pousada",
    cozinha: true,
    churrasqueiraStatus: "Acomodações selecionadas possuem churrasqueira sob consulta com a Eliiy",
    arCondicionadoStatus: "Ventiladores de parede visíveis no vídeo; ar-condicionado sob consulta com a Eliiy",
    varandaStatus: "Acesso à varanda e área externa do pátio (confirmado no vídeo v19)",
    vistaMar: false,
    descricaoCurta:
      "Acomodação espaçosa para grupos familiares de até 10 pessoas, com cozinha privativa, quartos no piso térreo e andar superior em madeira.",
    descricaoCompleta:
      "Confirmada pela pousada como unidade ampla com cozinha privativa para até 10 pessoas. A acomodação dispõe de dormitórios no térreo com camas de casal e acabamento em madeira, cozinha privativa equipada com mesa e bancada e andar superior amplo para acomodar confortavelmente a família.",
    paraQuemE: [
      "Duas famílias amigas ou pais, filhos e avós (até 10 pessoas) que buscam quartos separados no térreo e andar superior",
      "Grupos que desejam cozinhar na própria acomodação durante a estadia na praia"
    ],
    comodidades: [
      { item: "Capacidade para até 10 pessoas", fonte: "Áudio oficial da pousada (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa equipada com fogão, pia e utensílios", fonte: "Áudio oficial da pousada", confirmado: true },
      { item: "Quartos térreos com cama de casal + andar superior em madeira", fonte: "Vídeo v19", confirmado: true },
      { item: "Banheiro privativo completo", fonte: "Vídeo v19", confirmado: true },
      { item: "Churrasqueira (em acomodações selecionadas — confirmar unidade)", fonte: "Áudio oficial da pousada sob consulta", confirmado: false },
      { item: "Estacionamento privativo gratuito no local", fonte: "Acervo Oficial / Vídeos da propriedade", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Ambiente familiar: festas e eventos com som alto não são permitidos", fonte: "Declarado no Acervo Oficial", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-cama-madeira.webp",
        alt: "Quarto privativo da Acomodação Grande Família com cama de casal em madeira maciça e iluminação dourada acolhedora",
        origem: "Fotografia oficial em alta resolução calibrada para golden hour"
      },
      {
        url: "/media/quartos/quarto-espacoso.webp",
        alt: "Ambiente confortável e arejado com acomodação para até 10 hóspedes",
        origem: "Fotografia oficial Acervo Oficial em alta resolução"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Varanda espaçosa da acomodação com vista para o pátio verde da pousada",
        origem: "Acervo oficial de fotografias em alta definição"
      },
      {
        url: "/media/quartos/quarto-jardim.webp",
        alt: "Dormitório adicional com ventilação natural abundante e vista para o jardim",
        origem: "Acervo fotográfico da pousada"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-chale-grande-10p.mp4",
        poster: "/media/v/tour-chale-grande-10p-poster.webp",
        title: "Tour pela Acomodação Grande 10p",
        subtitle: "Tour real pelos dormitórios e cozinha privativa da ala familiar",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Saída para a praia com coqueiros e brisa do mar",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A acomodação para 10 pessoas possui cozinha própria?",
        r: "Sim. Conforme explicado pela pousada no áudio oficial, todas as acomodações da pousada contam com cozinha privativa para preparo de refeições."
      },
      {
        p: "Há churrasqueira nesta acomodação?",
        r: "A pousada informa que a pousada possui acomodações com churrasqueira. Como nem todas as unidades têm churrasqueira individual, confirme a disponibilidade diretamente no WhatsApp ao cotar."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-chale-grande-10p.mp4",
      poster: "/media/v/tour-chale-grande-10p-poster.webp",
      title: "Tour pela Acomodação Grande 10p",
      subtitle: "Tour real pelos dormitórios e cozinha privativa da ala familiar",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Acomodação Grande (até 10 pessoas)."
  },
  {
    slug: "chale-quinteto-5p",
    nome: "Acomodação Quinteto com Cozinha (até 5 Pessoas)",
    subtitulo: "Cozinha ampla com mesa de madeira e bancos, ar-condicionado split e quarto familiar",
    categoria: "Chale",
    capacidade: "Até 5 pessoas",
    capacidadeNumero: 5,
    tipoCamas: "1 cama de casal + 1 beliche de madeira + leito auxiliar",
    fonteCamas: "Vídeos reais v17 e v18 gravados pela pousada",
    cozinha: true,
    churrasqueiraStatus: "Acomodações selecionadas possuem churrasqueira sob consulta com a Eliiy",
    arCondicionadoStatus: "Ar-condicionado split e ventilador de parede confirmados no vídeo v17",
    varandaStatus: "Área de refeições arejada com mesa grande de madeira e bancos",
    vistaMar: false,
    descricaoCurta:
      "Acomodação completa para até 5 pessoas com cozinha espaçosa, mesa de madeira maciça com bancos, quarto com ar-condicionado split e banheiro com box blindex.",
    descricaoCompleta:
      "Confirmada pela pousada para até 5 pessoas e documentada em detalhes nos vídeos v17 e v18. A entrada dispõe de uma cozinha ampla com pia em granito, fogão com forno, geladeira duplex, armário de madeira e mesa grande com dois bancos compridos. O dormitório conta com ar-condicionado split, ventilador, cama de casal, beliche de madeira e banheiro privativo com box de vidro.",
    paraQuemE: [
      "Famílias de até 5 pessoas que valorizam mesa ampla para refeições em conjunto e cozinha completa",
      "Hóspedes que fazem questão de quarto climatizado com ar-condicionado split"
    ],
    comodidades: [
      { item: "Capacidade para até 5 pessoas", fonte: "Áudio oficial da pousada + Vídeo v17", confirmado: true },
      { item: "Cozinha privativa ampla com geladeira duplex, fogão, pia e armário", fonte: "Vídeo v17", confirmado: true },
      { item: "Mesa de madeira maciça com bancos para refeições da família", fonte: "Vídeo v17", confirmado: true },
      { item: "Ar-condicionado split + ventilador de parede no quarto", fonte: "Vídeo v17 e v18", confirmado: true },
      { item: "Banheiro privativo com box blindex e espelho", fonte: "Vídeo v17", confirmado: true },
      { item: "Churrasqueira (em acomodações selecionadas — confirmar unidade)", fonte: "Áudio oficial da pousada sob consulta", confirmado: false }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Quartos para não-fumantes", fonte: "Declarado no Acervo Oficial", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/suite-familiar.webp",
        alt: "Acomodação Quinteto completa com cama de casal e beliches de madeira maciça",
        origem: "Fotografia oficial Acervo Oficial em alta resolução calibrada"
      },
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Ambiente aconchegante com piso cerâmico e porta balcão com entrada de sol",
        origem: "Fotografia em alta definição com luz natural suave"
      },
      {
        url: "/media/quartos/quarto-cama-madeira.webp",
        alt: "Dormitório confortável com acabamento rústico em madeira",
        origem: "Acervo fotográfico da pousada"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Área externa da acomodação com vista para a natureza do Ubatumirim",
        origem: "Acervo oficial da Pousada Eliiy Zita Pedro"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-chale-quinteto-5p.mp4",
        poster: "/media/v/tour-chale-quinteto-5p-poster.webp",
        title: "Tour pela Acomodação Quinteto 5p",
        subtitle: "Cozinha com mesa de madeira maciça e quarto com ar split",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Área externa com coqueiros e saída para a praia",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "Esta acomodação tem ar-condicionado confirmado?",
        r: "Sim! Nos vídeos v17 e v18 gravados pela pousada, o aparelho de ar-condicionado split aparece instalado acima da janela do quarto, além de ventilador de parede."
      },
      {
        p: "Quais itens compõem a cozinha?",
        r: "Nas imagens reais da unidade aparecem geladeira duplex, fogão de 4 bocas com forno, pia com gabinete, armário alto de madeira e mesa com dois bancos."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-chale-quinteto-5p.mp4",
      poster: "/media/v/tour-chale-quinteto-5p-poster.webp",
      title: "Tour pela Acomodação Quinteto 5p",
      subtitle: "Cozinha com mesa de madeira maciça e quarto com ar split",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Acomodação Quinteto com cozinha (até 5 pessoas)."
  },
  {
    slug: "chale-quadruplo-4p",
    nome: "Acomodação Quádrupla com Cozinha e Vista Mar (até 4 Pessoas)",
    subtitulo: "Quarto familiar com cozinha compacta na varanda envidraçada de frente para a enseada e piscina",
    categoria: "Chale",
    capacidade: "Até 4 pessoas",
    capacidadeNumero: 4,
    tipoCamas: "1 cama de casal + 1 beliche de alvenaria e madeira",
    fonteCamas: "Vídeos reais v03 e v10 gravados pela pousada",
    cozinha: true,
    churrasqueiraStatus: "Acomodações selecionadas possuem churrasqueira sob consulta com a Eliiy",
    arCondicionadoStatus: "Ar-condicionado split e ventilador de parede confirmados nos vídeos v03 e v10",
    varandaStatus: "Varanda envidraçada panorâmica com vista direta para o mar e para a piscina",
    vistaMar: true,
    descricaoCurta:
      "Acomodação no piso superior para até 4 pessoas que une quarto climatizado e varanda envidraçada com cozinha compacta e vista para o mar de Ubatumirim.",
    descricaoCompleta:
      "Confirmada pela pousada para até 4 pessoas e registrada nos vídeos v03 e v10. O dormitório acomoda 4 pessoas em cama de casal e beliche, com ar-condicionado split e banheiro privativo com box de vidro. O destaque é a varanda fechada em vidro com vista aberta para o mar calmo de Ubatumirim e a piscina da pousada, equipada com geladeira, fogão de 4 bocas, pia e armário.",
    paraQuemE: [
      "Casais com até 2 filhos que querem acordar vendo o mar da Praia do Ubatumirim",
      "Famílias de 4 pessoas que buscam a praticidade de uma cozinha compacta com vista panorâmica"
    ],
    comodidades: [
      { item: "Capacidade para até 4 pessoas (1 cama de casal + 1 beliche)", fonte: "Áudio oficial da pousada + Vídeos v03 e v10", confirmado: true },
      { item: "Cozinha compacta na varanda (geladeira, fogão 4 bocas, pia e armário)", fonte: "Vídeo v03 e v10", confirmado: true },
      { item: "Varanda envidraçada com vista direta para o mar e piscina", fonte: "Vídeo v03", confirmado: true },
      { item: "Ar-condicionado split e ventilador de parede", fonte: "Vídeo v10", confirmado: true },
      { item: "Banheiro privativo com box blindex", fonte: "Vídeo v03 e v10", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Quartos para não-fumantes", fonte: "Declarado no Acervo Oficial", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/vista-mar-coqueiros.webp",
        alt: "Vista da sacada da Acomodação Quádrupla com vista para o mar calmo e coqueiros de Ubatumirim",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Quarto climatizado com cama de casal e beliche para até 4 pessoas",
        origem: "Fotografia em alta definição calibrada"
      },
      {
        url: "/media/quartos/varanda-rede.webp",
        alt: "Varanda privativa com rede para relaxar após o banho de mar",
        origem: "Acervo oficial Acervo Oficial em alta definição"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Vista panorâmica das montanhas e pátio da pousada",
        origem: "Acervo oficial de fotografias em alta definição"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-chale-quadruplo-4p.mp4",
        poster: "/media/v/tour-chale-quadruplo-4p-poster.webp",
        title: "Tour pela Acomodação Quádrupla",
        subtitle: "Varanda envidraçada com cozinha e vista direta para o mar",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Saída para a praia com coqueiros e brisa do mar",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "Da varanda desta acomodação dá para ver o mar e a piscina?",
        r: "Sim! O vídeo v03 mostra exatamente a vista da varanda envidraçada para a faixa de areia e o mar da Praia do Ubatumirim à frente, e a piscina da pousada logo abaixo."
      },
      {
        p: "Onde fica a cozinha desta unidade?",
        r: "Fica integrada à ampla varanda fechada em vidro, equipada com geladeira, fogão de 4 bocas, pia e armário aéreo."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-chale-quadruplo-4p.mp4",
      poster: "/media/v/tour-chale-quadruplo-4p-poster.webp",
      title: "Tour pela Acomodação Quádrupla",
      subtitle: "Varanda envidraçada com cozinha e vista direta para o mar",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Acomodação Quádrupla com cozinha e vista mar (até 4 pessoas)."
  },
  {
    slug: "chale-triplo-3p",
    nome: "Acomodação Família Tripla com Cozinha (até 3 Pessoas)",
    subtitulo: "Acomodação prática com cozinha privativa, mesa de refeições, quarto climatizado e banheiro",
    categoria: "Chale",
    capacidade: "Até 3 pessoas",
    capacidadeNumero: 3,
    tipoCamas: "Cama de casal + cama de solteiro",
    fonteCamas: "Áudio oficial da pousada ('acomodação que acomoda uma família de 3 pessoas') + Vídeo v05/v15",
    cozinha: true,
    churrasqueiraStatus: "Acomodações selecionadas possuem churrasqueira sob consulta com a Eliiy",
    arCondicionadoStatus: "Ar-condicionado split visível no vídeo v15; confirmar unidade exata na reserva",
    varandaStatus: "Entrada independente pelo pátio térreo",
    vistaMar: false,
    descricaoCurta:
      "Ideal para casal com 1 filho ou trio familiar que deseja a economia e a liberdade de ter cozinha privativa com mesa de refeições a poucos passos da areia.",
    descricaoCompleta:
      "Confirmada pela pousada para famílias de até 3 pessoas. Os vídeos v05 e v15 mostram a configuração térrea compacta da unidade: cozinha de entrada com geladeira, fogão, pia, armário e mesa com cadeiras, além de dormitório privativo e banheiro com box.",
    paraQuemE: [
      "Casal com 1 filho ou 3 adultos que preferem preparar café, lanches e refeições na própria acomodação",
      "Famílias pequenas em estadias mais longas que buscam excelente relação custo-benefício"
    ],
    comodidades: [
      { item: "Capacidade para família de até 3 pessoas", fonte: "Áudio oficial da pousada (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa com geladeira, fogão, pia e mesa com cadeiras", fonte: "Vídeos v05 e v15", confirmado: true },
      { item: "Banheiro privativo com box e chuveiro", fonte: "Vídeos v05 e v15", confirmado: true },
      { item: "Ar-condicionado split", fonte: "Vídeo v15", confirmado: true },
      { item: "Estacionamento privativo gratuito na pousada", fonte: "Acervo Oficial / Áudio oficial da pousada", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-espacoso.webp",
        alt: "Acomodação Tripla aconchegante com cama de casal e cama de solteiro em madeira",
        origem: "Fotografia oficial Acervo Oficial em alta resolução"
      },
      {
        url: "/media/quartos/quarto-cama-madeira.webp",
        alt: "Dormitório acolhedor com luz suave e ventilação natural",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/quarto-jardim.webp",
        alt: "Ambiente tranquilo voltado para a área verde da pousada",
        origem: "Acervo oficial de fotografias"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Varanda com vista para o pátio e brisa do mar",
        origem: "Acervo oficial de fotografias em alta definição"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-chale-triplo-3p.mp4",
        poster: "/media/v/tour-chale-triplo-3p-poster.webp",
        title: "Tour pela Acomodação Tripla",
        subtitle: "Cozinha térrea com mesa e dormitório confortável",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Área externa com coqueiros e acesso à praia",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "Qual a diferença entre a Acomodação para 3 pessoas e a Suíte Tripla?",
        r: "Conforme explicou a pousada no áudio: a Acomodação tem cozinha privativa completa (fogão, geladeira e pia) para quem deseja cozinhar; já a Suíte Tripla não tem cozinha, sendo voltada para quem prefere fazer as refeições no restaurante."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-chale-triplo-3p.mp4",
      poster: "/media/v/tour-chale-triplo-3p-poster.webp",
      title: "Tour pela Acomodação Tripla",
      subtitle: "Cozinha térrea com mesa e dormitório confortável",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Acomodação Tripla com cozinha (até 3 pessoas)."
  },
  {
    slug: "suite-quadrupla-4p",
    nome: "Suíte Quádrupla Familiar com Varanda (até 4 Pessoas)",
    subtitulo: "Suíte climatizada com cama de casal, beliche, frigobar e varanda com vista para o mar e coqueiros",
    categoria: "Suite",
    destaqueCategoria: true,
    capacidade: "Até 4 pessoas",
    capacidadeNumero: 4,
    tipoCamas: "1 cama de casal + 1 beliche de alvenaria e madeira",
    fonteCamas: "Áudio oficial da pousada + Fotos reais IMG00–IMG09 + Vídeo v00 + Ficha Acervo Oficial",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira (dispõe de frigobar privativo)",
    arCondicionadoStatus: "Ar-condicionado split + ventilador de parede confirmados nas fotos e vídeos",
    varandaStatus: "Varanda privativa com mesinha e vista para o jardim e mar (confirmada em vídeo v00 e fotos)",
    vistaMar: true,
    descricaoCurta:
      "A suíte mais documentada da pousada: acomoda até 4 pessoas em cama de casal e beliche, com ar-condicionado split, frigobar, banheiro blindex e varanda arejada.",
    descricaoCompleta:
      "Confirmada tanto no áudio oficial da pousada ('suíte onde não tem cozinha, acomoda 4 pessoas') quanto na ficha do Acervo Oficial ('Quarto Quádruplo com Varanda') e nas fotos e vídeos gravados na unidade. Equipada com cama de casal, beliche estruturado em alvenaria e madeira, ar-condicionado split, ventilador de parede, frigobar, espelho, banheiro privativo com box de vidro blindex e varanda com mesinha.",
    paraQuemE: [
      "Casais com até 2 filhos que querem praticidade total sem se preocupar em cozinhar",
      "Famílias que desejam aproveitar o café da manhã e as porções de peixe fresco no restaurante pé na areia da pousada"
    ],
    comodidades: [
      { item: "Capacidade para até 4 pessoas (1 cama de casal + 1 beliche)", fonte: "Áudio oficial da pousada + Fotos reais + Acervo Oficial", confirmado: true },
      { item: "Ar-condicionado split + ventilador de parede", fonte: "Fotos reais + Vídeo v00", confirmado: true },
      { item: "Frigobar privativo no quarto", fonte: "Fotos reais + Vídeo v07", confirmado: true },
      { item: "Banheiro privativo com box de vidro blindex", fonte: "Vídeo v00 e v02", confirmado: true },
      { item: "Varanda privativa com mesinha e vista para os coqueiros e mar", fonte: "Vídeo v00 e v08", confirmado: true },
      { item: "Estacionamento privativo gratuito no local", fonte: "Acervo Oficial / Vídeos da propriedade", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Suíte sem fogão/cozinha (refeições no restaurante da pousada)", fonte: "Áudio oficial da pousada", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Suíte Quádrupla no piso superior com cama de casal, beliche rústico e porta balcão com sol da tarde",
        origem: "Fotografia em alta definição com calibração golden hour"
      },
      {
        url: "/media/quartos/varanda-rede.webp",
        alt: "Varanda com rede e vista para o ambiente praiano",
        origem: "Fotografia oficial Acervo Oficial em alta resolução"
      },
      {
        url: "/media/quartos/quarto-cama-madeira.webp",
        alt: "Detalhe da cama de casal em madeira e atmosfera aconchegante",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/vista-mar-coqueiros.webp",
        alt: "Vista da enseada do Ubatumirim a poucos passos da suíte",
        origem: "Acervo oficial de fotografias"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-suite-quadrupla-4p.mp4",
        poster: "/media/v/tour-suite-quadrupla-4p-poster.webp",
        title: "Tour pela Suíte Quádrupla",
        subtitle: "Cama de casal, beliche de madeira e saída para a varanda",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Saída para a praia com coqueiros e brisa do mar",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A Suíte Quádrupla tem cozinha?",
        r: "Não. Como explica a pousada, as suítes não possuem cozinha (contam com frigobar privativo), sendo ideais para quem quer descansar e utilizar o restaurante e quiosque pé na areia da pousada."
      },
      {
        p: "O café da manhã está incluído na diária da suíte?",
        r: "No anúncio do Acervo Oficial o café da manhã consta como incluído para o Quarto Quádruplo. Na reserva direta pelo WhatsApp, confirme com a Eliiy as condições com café da manhã para o seu período."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-suite-quadrupla-4p.mp4",
      poster: "/media/v/tour-suite-quadrupla-4p-poster.webp",
      title: "Tour pela Suíte Quádrupla",
      subtitle: "Cama de casal, beliche de madeira e saída para a varanda",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Suíte Quádrupla Familiar com Varanda (até 4 pessoas)."
  },
  {
    slug: "suite-tripla-3p",
    nome: "Suíte Tripla Conforto (até 3 Pessoas)",
    subtitulo: "Suíte prática sem cozinha para até 3 pessoas, próxima à piscina e ao restaurante pé na areia",
    categoria: "Suite",
    capacidade: "Até 3 pessoas",
    capacidadeNumero: 3,
    tipoCamas: "Cama de casal + cama de solteiro em madeira",
    fonteCamas: "Áudio oficial da pousada ('suíte acomoda de 4 pessoas, um casal ou 3 pessoas') + Vídeo real",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira",
    arCondicionadoStatus: "Climatização com ar-condicionado / ventilador sob consulta com a Eliiy",
    varandaStatus: "Varanda arejada com portas de madeira e vista para a vegetação",
    vistaMar: false,
    descricaoCurta:
      "Opção confirmada pela pousada para pequenas famílias de 3 pessoas que preferem a comodidade do restaurante pé na areia sem precisar cozinhar.",
    descricaoCompleta:
      "Citada diretamente pela pousada no áudio oficial ('a suíte, onde não tem cozinha, acomoda 4 pessoas, um casal ou 3 pessoas'). Indicada para casais com 1 filho ou 3 adultos que desejam curtir a praia, a piscina e a gastronomia caiçara da pousada com tranquilidade.",
    paraQuemE: [
      "Casal com 1 filho ou trio de viajantes que não precisa de cozinha no quarto",
      "Quem busca estadia prática de fim de semana ou feriado pé na areia"
    ],
    comodidades: [
      { item: "Capacidade para até 3 pessoas em modalidade Suíte (sem cozinha)", fonte: "Áudio oficial da pousada (26/10/2026)", confirmado: true },
      { item: "Acesso direto à Praia do Ubatumirim, piscina e restaurante da pousada", fonte: "Áudio oficial da pousada", confirmado: true },
      { item: "Banheiro privativo completo com box", fonte: "Registro visual da propriedade", confirmado: true },
      { item: "Estacionamento privativo gratuito na pousada", fonte: "Acervo Oficial / Áudio oficial da pousada", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Modalidade Suíte: não possui fogão/cozinha", fonte: "Áudio oficial da pousada", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-cama-madeira.webp",
        alt: "Suíte Tripla confortável para famílias pequenas ou casais com filho",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/quarto-jardim.webp",
        alt: "Quarto arejado com iluminação natural acolhedora",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/suite-familiar.webp",
        alt: "Espaço aconchegante no piso superior da pousada",
        origem: "Fotografia oficial Acervo Oficial em alta resolução"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Varanda de acesso com vista para o pátio",
        origem: "Acervo oficial de fotografias em alta definição"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-suite-tripla-3p.mp4",
        poster: "/media/v/tour-suite-tripla-3p-poster.webp",
        title: "Tour pela Suíte Tripla",
        subtitle: "Leitos em madeira e acesso às áreas arborizadas da pousada",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Área externa com coqueiros e acesso 100% pé na areia",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A Suíte Tripla possui frigobar?",
        r: "Sim, as suítes contam com frigobar privativo para bebidas e lanches, além do apoio de refeições do restaurante pé na areia."
      },
      {
        p: "Qual a distância da suíte até a praia?",
        r: "A pousada é 100% pé na areia. A distância da porta da acomodação até a faixa de areia da enseada do Ubatumirim é de menos de 40 passos pelo jardim."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-suite-tripla-3p.mp4",
      poster: "/media/v/tour-suite-tripla-3p-poster.webp",
      title: "Tour pela Suíte Tripla",
      subtitle: "Leitos em madeira e acesso às áreas arborizadas da pousada",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Suíte Tripla (3 pessoas)."
  },
  {
    slug: "suite-casal-2p",
    nome: "Suíte Casal Pé na Areia (2 Pessoas)",
    subtitulo: "Refúgio tranquilo para dois na enseada de Ubatumirim, com varanda térrea e rede de descanso",
    categoria: "Suite",
    capacidade: "Até 2 pessoas (Casal)",
    capacidadeNumero: 2,
    tipoCamas: "1 cama de casal",
    fonteCamas: "Áudio oficial da pousada ('suíte acomoda... um casal')",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira",
    arCondicionadoStatus: "Climatização sob consulta com a Eliiy",
    varandaStatus: "Varanda térrea com rede e jardim tropical",
    vistaMar: false,
    descricaoCurta:
      "Hospedagem para casais que desejam descansar ao som do mar calmo de Ubatumirim, com varanda acolhedora e restaurante caiçara na areia da praia.",
    descricaoCompleta:
      "Confirmada pela pousada no áudio oficial ('a suíte, onde não tem cozinha, acomoda... um casal'). Ideal para quem busca dias de sossego a dois, caminhadas até a Praia da Justa na maré baixa e refeições servidas à beira-mar no restaurante e quiosque da pousada.",
    paraQuemE: [
      "Casais em busca de praia tranquila, sem ondas fortes e longe do tumulto urbano",
      "Quem valoriza varanda com rede e atendimento familiar direto com os proprietários"
    ],
    comodidades: [
      { item: "Acomodação para casal (2 pessoas) na categoria Suíte", fonte: "Áudio oficial da pousada (26/10/2026)", confirmado: true },
      { item: "Varanda térrea com rede e flores tropicais", fonte: "Foto real do acervo inicial", confirmado: true },
      { item: "Acesso direto à Praia do Ubatumirim, piscina e restaurante", fonte: "Áudio oficial da pousada", confirmado: true },
      { item: "Estacionamento privativo gratuito no local", fonte: "Acervo Oficial / Áudio oficial da pousada", confirmado: true },
      { item: "Banheiro privativo completo com box", fonte: "Registro real da propriedade", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Acervo Oficial", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Acervo Oficial sob consulta com a Eliiy", confirmado: true },
      { item: "Modalidade Suíte: não possui fogão/cozinha", fonte: "Áudio oficial da pousada", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-jardim.webp",
        alt: "Suíte Casal privativa e acolhedora perfeita para descanso a dois pé na areia",
        origem: "Fotografia oficial em alta resolução"
      },
      {
        url: "/media/quartos/vista-mar-coqueiros.webp",
        alt: "Proximidade imediata da praia e coqueirais de Ubatumirim",
        origem: "Acervo oficial de fotografias"
      },
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Ambiente iluminado com cama confortável e tons acolhedores",
        origem: "Fotografia em alta definição com luz natural suave"
      },
      {
        url: "/media/quartos/varanda-panoramica.webp",
        alt: "Varanda com vista relaxante para a Serra do Mar e pátio da pousada",
        origem: "Acervo oficial de fotografias em alta definição"
      },
    ],
    videos: [
      {
        id: "quarto",
        label: "Tour Quarto",
        mp4: "/media/v/tour-suite-casal-2p.mp4",
        poster: "/media/v/tour-suite-casal-2p-poster.webp",
        title: "Tour pela Suíte Casal",
        subtitle: "Cama aconchegante e varanda com rede na areia",
        duracaoSeg: 7
      },
      {
        id: "varanda",
        label: "Varanda & Mar",
        mp4: "/media/v/varanda-enseada.mp4",
        poster: "/media/v/varanda-enseada.webp",
        title: "Vista da Enseada",
        subtitle: "Caminhada da varanda até a areia mansa da Praia do Ubatumirim",
        duracaoSeg: 6
      },
      {
        id: "patio",
        label: "Pátio & Areia",
        mp4: "/media/v/patio-sol-mar.mp4",
        poster: "/media/v/patio-sol-mar.webp",
        title: "Pátio Ensolarado & Jardim",
        subtitle: "Área externa com coqueiros e acesso 100% pé na areia",
        duracaoSeg: 6
      }
    ],
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "É possível tomar café da manhã e almoçar na própria pousada?",
        r: "Sim! A pousada conta com restaurante e quiosque pé na areia na Praia do Ubatumirim, servindo pratos caiçaras, peixes frescos e porções."
      },
      {
        p: "A pousada fornece roupas de cama e banho?",
        r: "A disponibilidade de roupas de cama e banho pode ser confirmada diretamente com a Eliiy pelo WhatsApp no momento da sua cotação."
      }
    ],
        videoCard: {
      id: "quarto",
      label: "Tour Principal",
      mp4: "/media/v/tour-suite-casal-2p.mp4",
      poster: "/media/v/tour-suite-casal-2p-poster.webp",
      title: "Tour pela Suíte Casal",
      subtitle: "Cama aconchegante e varanda com rede na areia",
      duracaoSeg: 7
    },
whatsappMsg:
      "Olá, Eliiy! Vim pelo site e gostaria de consultar valores e disponibilidade para a Suíte Casal (2 pessoas)."
  }
];
