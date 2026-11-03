export interface ComodidadeFactual {
  item: string;
  fonte: string;
  confirmado: boolean;
}

export interface VideoAcomodacao {
  mp4: string;
  poster: string;
  legenda: string;
  arquivoOrigem: string;
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
  videoCard: VideoAcomodacao | null;
  pendenciaMidia: string | null;
  miniFaq: { p: string; r: string }[];
  whatsappMsg: string;
}

export const acomodacoes: Acomodacao[] = [
  {
    slug: "chale-master-15p",
    nome: "Chalé Master para até 15 Pessoas",
    subtitulo: "Dois pavimentos, cozinha no térreo, piso superior amplo em madeira e varanda com vista para o mar",
    categoria: "Chale",
    destaqueCategoria: true,
    capacidade: "Até 15 pessoas",
    capacidadeNumero: 15,
    tipoCamas: "Camas de casal, camas de solteiro, beliches de madeira e mezanino no pavimento superior",
    fonteCamas: "Vídeo real v04 (WhatsApp Video 2026-10-25 attt 12.17.28.mp4)",
    cozinha: true,
    churrasqueiraStatus: "Chalés selecionados possuem churrasqueira sob consulta com Dona Zita",
    arCondicionadoStatus: "Ventilador de parede visível no vídeo; ar-condicionado sob consulta com Dona Zita",
    varandaStatus: "Varanda superior em madeira com vista para o pátio e para o mar (confirmada no vídeo v04)",
    vistaMar: true,
    descricaoCurta:
      "Maior acomodação da pousada, distribuída em dois andares: cozinha equipada no térreo e amplo piso superior em madeira com varanda voltada para o mar.",
    descricaoCompleta:
      "Confirmado por Dona Zita em áudio para grupos de até 15 pessoas e registrado em vídeo interno de 130 segundos. No térreo, conta com cozinha privativa equipada com geladeira duplex, freezer auxiliar, fogão e pia.Uma escada interna de madeira conduz ao pavimento superior, que reúne camas de casal, beliches, mezanino e acesso direto à varanda com vista para o mar da Praia do Ubatumirim.",
    paraQuemE: [
      "Grandes famílias que viajam juntas e querem ficar na mesma casa pé na areia",
      "Grupos de até 15 pessoas que buscam a autonomia de preparar as próprias refeições",
      "Estadias de feriados e férias em que o custo por pessoa fica reduzido na reserva direta"
    ],
    comodidades: [
      { item: "Capacidade para até 15 pessoas", fonte: "Áudio oficial Dona Zita (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa no térreo (geladeira duplex, fogão, pia e armário)", fonte: "Áudio Dona Zita + Vídeo v04 (00:08–00:28)", confirmado: true },
      { item: "Dois pavimentos com escada interna e piso superior em madeira", fonte: "Vídeo v04 (00:38–01:58)", confirmado: true },
      { item: "Varanda no andar superior com vista para o pátio e enseada", fonte: "Vídeo v04 (01:36–01:50)", confirmado: true },
      { item: "Banheiro privativo", fonte: "Vídeo v04", confirmado: true },
      { item: "Churrasqueira (disponível em chalés selecionados — confirmar unidade)", fonte: "Áudio Dona Zita sob consulta com Dona Zita", confirmado: false },
      { item: "Estacionamento privativo gratuito no pátio interno", fonte: "Vídeo v04 (01:39) + Booking", confirmado: true },
      { item: "Wi-Fi disponível na propriedade", fonte: "Declarado no Booking [Provedor a confirmar]", confirmado: false }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Ambiente familiar: festas e eventos não permitidos", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Política para animais de estimação (pets)", fonte: "sob consulta com Dona Zita", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/chale-master-15p-1.webp",
        alt: "Vista da varanda superior do Chalé Master mostrando o pátio da pousada e o mar azul de Ubatumirim ao fundo",
        origem: "Frame real extraído de v04 (104.5s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-master-15p-2.webp",
        alt: "Pavimento superior em madeira do Chalé Master com cama de casal e beliches",
        origem: "Frame real extraído de v04 (73.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-master-15p-3.webp",
        alt: "Cozinha térrea do Chalé Master com geladeira duplex branca e janela para a varanda",
        origem: "Frame real extraído de v04 (23.5s) — exclusivo desta acomodação"
      }
    ],
    videoCard: {
      mp4: "/media/v/chale-master-15p.mp4",
      poster: "/media/v/chale-master-15p.webp",
      legenda: "Tour real pelo pavimento superior de madeira e camas do Chalé Master",
      arquivoOrigem: "WhatsApp Video 2026-10-25 attt 12.17.28.mp4 (v04)",
      duracaoSeg: 7
    },
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A cozinha do Chalé Master é privativa ou compartilhada?",
        r: "É 100% privativa da acomodação, localizada no pavimento térreo do próprio chalé, equipada com geladeira duplex, fogão e pia."
      },
      {
        p: "Como é calculado o valor da diária para até 15 pessoas?",
        r: "O valor varia conforme a época do ano e o número exato de hóspedes do grupo. A cotação é feita diretamente com a Dona Zita pelo WhatsApp, sem comissão de sites intermediários."
      },
      {
        p: "Este chalé tem churrasqueira privativa?",
        r: "No áudio oficial, Dona Zita confirma que há chalés com churrasqueira. Ao solicitar sua cotação no WhatsApp, confirme a disponibilidade da unidade com churrasqueira para as suas datas."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para o Chalé Master (até 15 pessoas)."
  },
  {
    slug: "chale-grande-10p",
    nome: "Chalé Grande Família para até 10 Pessoas",
    subtitulo: "Acomodação ampla em dois níveis com quartos no térreo, cozinha privativa e pavimento superior",
    categoria: "Chale",
    capacidade: "Até 10 pessoas",
    capacidadeNumero: 10,
    tipoCamas: "Quartos térreos com camas de casal + pavimento superior em madeira com camas e beliches",
    fonteCamas: "Vídeo real v19 (WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4) [Numeração da unidade a confirmar com Dona Zita]",
    cozinha: true,
    churrasqueiraStatus: "Chalés selecionados possuem churrasqueira sob consulta com Dona Zita",
    arCondicionadoStatus: "Ventiladores de parede visíveis no vídeo; ar-condicionado sob consulta com Dona Zita",
    varandaStatus: "Acesso à varanda e área externa do pátio (confirmado no vídeo v19)",
    vistaMar: false,
    descricaoCurta:
      "Chalé espaçoso para grupos familiares de até 10 pessoas, com cozinha privativa, quartos no piso térreo e andar superior em madeira.",
    descricaoCompleta:
      "Citado nominalmente por Dona Zita no áudio oficial ('chalé que acomoda 10 pessoas, com cozinha'). O registro em vídeo da ala de chalés grandes mostra dormitórios no térreo com camas de casal e frigobar, área interna sob a escada de madeira e piso superior amplo.",
    paraQuemE: [
      "Duas famílias amigas ou pais, filhos e avós (até 10 pessoas) que buscam quartos separados no térreo e andar superior",
      "Grupos que desejam cozinhar no próprio chalé durante a estadia na praia"
    ],
    comodidades: [
      { item: "Capacidade para até 10 pessoas", fonte: "Áudio oficial Dona Zita (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa equipada", fonte: "Áudio oficial Dona Zita ('quartos com cozinha que a gente chama de chalés')", confirmado: true },
      { item: "Quartos térreos com cama de casal + andar superior em madeira", fonte: "Vídeo v19 (00:05–02:10)", confirmado: true },
      { item: "Banheiro privativo", fonte: "Vídeo v19", confirmado: true },
      { item: "Churrasqueira (em chalés selecionados — confirmar unidade)", fonte: "Áudio Dona Zita sob consulta com Dona Zita", confirmado: false },
      { item: "Estacionamento privativo gratuito no local", fonte: "Booking / Vídeos da propriedade", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Festas e eventos não são permitidos", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/chale-grande-10p-1.webp",
        alt: "Dormitório térreo de parede verde-água com cama de casal e janela ventilada",
        origem: "Frame real extraído de v19 (8.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-grande-10p-2.webp",
        alt: "Escada interna de madeira que conecta o térreo ao pavimento superior do chalé",
        origem: "Frame real extraído de v19 (61.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-grande-10p-3.webp",
        alt: "Pavimento superior em madeira com camas distribuídas para grupo familiar",
        origem: "Frame real extraído de v19 (96.0s) — exclusivo desta acomodação"
      }
    ],
    videoCard: {
      mp4: "/media/v/chale-grande-10p.mp4",
      poster: "/media/v/chale-grande-10p.webp",
      legenda: "Tour real pelos dormitórios térreos da ala de chalés grandes",
      arquivoOrigem: "WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4 (v19)",
      duracaoSeg: 7
    },
    pendenciaMidia:
      "Nota de transparência: o vídeo v19 mostra a ala de chalés grandes de 2 andares. Confirmar com Dona Zita a divisão exata entre a configuração de 10 e de 15 pessoas.",
    miniFaq: [
      {
        p: "O chalé para 10 pessoas possui cozinha própria?",
        r: "Sim. Conforme explicado por Dona Zita no áudio oficial, todos os chalés da pousada contam com cozinha privativa para preparo de refeições."
      },
      {
        p: "Há churrasqueira neste chalé?",
        r: "Dona Zita informa que a pousada possui chalé com churrasqueira. Como nem todas as unidades têm churrasqueira individual, confirme a disponibilidade diretamente no WhatsApp ao cotar."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para o Chalé Grande (até 10 pessoas)."
  },
  {
    slug: "chale-quinteto-5p",
    nome: "Chalé Quinteto com Cozinha (até 5 Pessoas)",
    subtitulo: "Cozinha ampla com mesa de madeira e bancos, ar-condicionado split e quarto familiar",
    categoria: "Chale",
    capacidade: "Até 5 pessoas",
    capacidadeNumero: 5,
    tipoCamas: "1 cama de casal + 1 beliche de madeira + cama auxiliar",
    fonteCamas: "Vídeo real v17/v18 (WhatsApp Video tt2026-10-25 at 12.17.27.mp4)",
    cozinha: true,
    churrasqueiraStatus: "Chalés selecionados possuem churrasqueira sob consulta com Dona Zita",
    arCondicionadoStatus: "Ar-condicionado split e ventilador de parede confirmados no vídeo v17 (00:27)",
    varandaStatus: "Área de refeições arejada com mesa grande de madeira e bancos",
    vistaMar: false,
    descricaoCurta:
      "Chalé completo para até 5 pessoas com cozinha espaçosa, mesa de madeira maciça com bancos, quarto com ar-condicionado split e banheiro blindex.",
    descricaoCompleta:
      "Confirmado no áudio de Dona Zita ('chalé que acomoda 5 pessoas') e documentado em detalhes nos vídeos v17 e v18. A entrada dispõe de uma cozinha ampla com pia em granito, fogão com forno, geladeira duplex, armário de madeira e mesa grande com dois bancos compridos. O dormitório conta com ar-condicionado split, ventilador, cama de casal, beliche de madeira e banheiro privativo com box de vidro.",
    paraQuemE: [
      "Famílias de até 5 pessoas que valorizam mesa ampla para refeições em conjunto e cozinha completa",
      "Hóspedes que fazem questão de quarto climatizado com ar-condicionado split"
    ],
    comodidades: [
      { item: "Capacidade para até 5 pessoas", fonte: "Áudio oficial Dona Zita + Vídeo v17", confirmado: true },
      { item: "Cozinha privativa ampla com geladeira duplex, fogão, pia e armário", fonte: "Vídeo v17 (00:01–00:16)", confirmado: true },
      { item: "Mesa de madeira maciça com bancos para refeições da família", fonte: "Vídeo v17 (00:03–00:12)", confirmado: true },
      { item: "Ar-condicionado split + ventilador de parede no quarto", fonte: "Vídeo v17 (00:27) e v18 (00:42)", confirmado: true },
      { item: "Banheiro privativo com box blindex e espelho de corpo inteiro no corredor", fonte: "Vídeo v17 (00:21 e 00:45)", confirmado: true },
      { item: "Churrasqueira (em chalés selecionados — confirmar unidade)", fonte: "Áudio Dona Zita sob consulta com Dona Zita", confirmado: false }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Quartos para não-fumantes", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/chale-quinteto-5p-1.webp",
        alt: "Cozinha privativa do Chalé Quinteto com mesa de madeira, bancos, pia e geladeira duplex",
        origem: "Frame real extraído de v17 (3.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-quinteto-5p-2.webp",
        alt: "Quarto do Chalé Quinteto com cama de casal, ar-condicionado split na parede e janela para o jardim",
        origem: "Frame real extraído de v17 (27.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-quinteto-5p-3.webp",
        alt: "Banheiro privativo do Chalé Quinteto com box blindex e piso cerâmico",
        origem: "Frame real extraído de v17 (45.0s) — exclusivo desta acomodação"
      }
    ],
    videoCard: {
      mp4: "/media/v/chale-quinteto-5p.mp4",
      poster: "/media/v/chale-quinteto-5p.webp",
      legenda: "Tour real pela cozinha com mesa de madeira e quarto do Chalé Quinteto",
      arquivoOrigem: "WhatsApp Video tt2026-10-25 at 12.17.27.mp4 (v17)",
      duracaoSeg: 7
    },
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "Este chalé tem ar-condicionado confirmado?",
        r: "Sim! Nos vídeos v17 e v18 gravados por Dona Zita, o aparelho de ar-condicionado split aparece instalado acima da janela do quarto, além de ventilador de parede."
      },
      {
        p: "Quais itens compõem a cozinha?",
        r: "Nas imagens reais da unidade aparecem geladeira duplex, fogão de 4 bocas com forno, pia com gabinete, armário alto de madeira e mesa com dois bancos."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para o Chalé Quinteto com cozinha (até 5 pessoas)."
  },
  {
    slug: "chale-quadruplo-4p",
    nome: "Chalé Quádruplo com Cozinha e Vista Mar (até 4 Pessoas)",
    subtitulo: "Quarto familiar com cozinha compacta na varanda envidraçada de frente para a enseada e piscina",
    categoria: "Chale",
    capacidade: "Até 4 pessoas",
    capacidadeNumero: 4,
    tipoCamas: "1 cama de casal + 1 beliche de alvenaria e madeira",
    fonteCamas: "Vídeo real v03 e v10 (WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4)",
    cozinha: true,
    churrasqueiraStatus: "Chalés selecionados possuem churrasqueira sob consulta com Dona Zita",
    arCondicionadoStatus: "Ar-condicionado split e ventilador de parede confirmados nos vídeos v03 e v10",
    varandaStatus: "Varanda envidraçada panorâmica com vista direta para o mar e para a piscina",
    vistaMar: true,
    descricaoCurta:
      "Acomodação no piso superior para até 4 pessoas que une quarto climatizado e varanda envidraçada com cozinha compacta e vista para o mar de Ubatumirim.",
    descricaoCompleta:
      "Confirmado por Dona Zita no áudio ('chalé que acomoda 4 pessoas') e registrado nos vídeos v03 e v10. O dormitório acomoda 4 pessoas em cama de casal e beliche, com ar-condicionado split e banheiro privativo com box de vidro. O destaque é a varanda fechada em vidro com vista aberta para o mar, a ilha de Ubatumirim e a piscina da pousada, equipada com geladeira Electrolux, fogão de 4 bocas, pia e armário.",
    paraQuemE: [
      "Casais com até 2 filhos que querem acordar vendo o mar da Praia do Ubatumirim",
      "Famílias de 4 pessoas que buscam a praticidade de uma cozinha compacta com vista panorâmica"
    ],
    comodidades: [
      { item: "Capacidade para até 4 pessoas (1 cama de casal + 1 beliche)", fonte: "Áudio Dona Zita + Vídeos v03 e v10", confirmado: true },
      { item: "Cozinha compacta na varanda (geladeira, fogão 4 bocas, pia e armário)", fonte: "Vídeo v03 (00:42–00:50) e v10 (00:40–00:45)", confirmado: true },
      { item: "Varanda envidraçada com vista direta para o mar e piscina", fonte: "Vídeo v03 (00:26–00:38 e 00:51)", confirmado: true },
      { item: "Ar-condicionado split e ventilador de parede", fonte: "Vídeo v10 (00:09)", confirmado: true },
      { item: "Banheiro privativo com box blindex", fonte: "Vídeo v03 (00:17) e v10 (00:16)", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Quartos para não-fumantes", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/chale-quadruplo-4p-2.webp",
        alt: "Vista panorâmica da varanda do Chalé Quádruplo para o mar calmo e ilhas da Praia do Ubatumirim",
        origem: "Frame real extraído de v03 (32.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-quadruplo-4p-1.webp",
        alt: "Cozinha privativa instalada na varanda envidraçada com geladeira, fogão e pia",
        origem: "Frame real extraído de v03 (44.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-quadruplo-4p-3.webp",
        alt: "Dormitório do Chalé Quádruplo com cama de casal e saída para a varanda",
        origem: "Frame real extraído de v10 (3.0s) — exclusivo desta acomodação"
      }
    ],
    videoCard: {
      mp4: "/media/v/chale-quadruplo-4p.mp4",
      poster: "/media/v/chale-quadruplo-4p.webp",
      legenda: "Vista real da enseada de Ubatumirim e cozinha na varanda envidraçada",
      arquivoOrigem: "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4 (v03)",
      duracaoSeg: 7
    },
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "Da varanda deste chalé dá para ver o mar e a piscina?",
        r: "Sim! O vídeo v03 mostra exatamente a vista da varanda envidraçada para a faixa de areia e o mar da Praia do Ubatumirim à frente, e a piscina da pousada logo abaixo."
      },
      {
        p: "Onde fica a cozinha desta unidade?",
        r: "Fica integrada à ampla varanda fechada em vidro, equipada com geladeira, fogão de 4 bocas, pia, armário aéreo e mesinha."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para o Chalé Quádruplo com cozinha e vista mar (até 4 pessoas)."
  },
  {
    slug: "chale-triplo-3p",
    nome: "Chalé Família Triplo com Cozinha (até 3 Pessoas)",
    subtitulo: "Acomodação prática com cozinha privativa, mesa de refeições, quarto climatizado e banheiro",
    categoria: "Chale",
    capacidade: "Até 3 pessoas",
    capacidadeNumero: 3,
    tipoCamas: "Cama de casal + cama de solteiro/beliche",
    fonteCamas: "Áudio Dona Zita ('chalé que acomoda uma família de 3 pessoas') + Vídeo v05/v15",
    cozinha: true,
    churrasqueiraStatus: "Chalés selecionados possuem churrasqueira sob consulta com Dona Zita",
    arCondicionadoStatus: "Ar-condicionado split visível em v15 (00:25); confirmar unidade exata na reserva",
    varandaStatus: "Entrada independente pelo pátio térreo",
    vistaMar: false,
    descricaoCurta:
      "Ideal para casal com 1 filho ou trio familiar que deseja a economia e a liberdade de ter cozinha privativa com mesa de refeições a poucos passos da areia.",
    descricaoCompleta:
      "Confirmado por Dona Zita no áudio oficial ('chalé que acomoda uma família de 3 pessoas'). Os vídeos v05 e v15 mostram a configuração de chalé térreo compacto da pousada: cozinha de entrada com geladeira branca, fogão, pia, armário e mesa com cadeiras, além de dormitório privativo e banheiro com box.",
    paraQuemE: [
      "Casal com 1 filho ou 3 adultos que preferem preparar café, lanches e refeições no próprio chalé",
      "Famílias pequenas em estadias mais longas que buscam excelente relação custo-benefício"
    ],
    comodidades: [
      { item: "Capacidade para família de até 3 pessoas", fonte: "Áudio oficial Dona Zita (26/10/2026)", confirmado: true },
      { item: "Cozinha privativa com geladeira, fogão, pia e mesa com cadeiras", fonte: "Vídeos v05 (00:06–00:12) e v15 (00:02–00:09)", confirmado: true },
      { item: "Banheiro privativo com box", fonte: "Vídeos v05 (00:34) e v15 (00:30)", confirmado: true },
      { item: "Ar-condicionado split (visível na unidade do vídeo v15)", fonte: "Vídeo v15 (00:25) [Confirmar unidade no ato da reserva]", confirmado: true },
      { item: "Estacionamento privativo gratuito na pousada", fonte: "Booking / Áudio Dona Zita", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false }
    ],
    fotos: [
      {
        url: "/media/quartos/chale-triplo-3p-1.webp",
        alt: "Cozinha privativa de chalé compacto com mesa de madeira, cadeiras, pia e geladeira",
        origem: "Frame real extraído de v05 (11.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-triplo-3p-2.webp",
        alt: "Dormitório do chalé com cama de casal e decoração praiana",
        origem: "Frame real extraído de v05 (15.0s) — exclusivo desta acomodação"
      },
      {
        url: "/media/quartos/chale-triplo-3p-3.webp",
        alt: "Banheiro privativo com box e chuveiro",
        origem: "Frame real extraído de v15 (30.0s) — exclusivo desta acomodação"
      }
    ],
    videoCard: {
      mp4: "/media/v/chale-triplo-3p.mp4",
      poster: "/media/v/chale-triplo-3p.webp",
      legenda: "Tour real pela cozinha com mesa e dormitório de chalé familiar",
      arquivoOrigem: "WhatsApp Video 2026-10-25 at 12.17.27.mp4 (v05)",
      duracaoSeg: 7
    },
    pendenciaMidia:
      "Nota de transparência: o vídeo v05 mostra um dos chalés familiares com cozinha térrea (com cama de casal e beliche anexo). Confirmar com Dona Zita qual unidade específica é alocada para 3 pessoas.",
    miniFaq: [
      {
        p: "Qual a diferença entre o Chalé para 3 pessoas e a Suíte Tripla?",
        r: "Conforme explicou Dona Zita no áudio: o Chalé tem cozinha privativa completa (fogão, geladeira e pia) para quem deseja cozinhar; já a Suíte Tripla não tem cozinha, sendo voltada para quem prefere fazer as refeições no restaurante."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para o Chalé Triplo com cozinha (até 3 pessoas)."
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
    fonteCamas: "Áudio Dona Zita + Fotos reais IMG00–IMG09 + Vídeo v00 + Ficha Booking",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira (dispõe de frigobar privativo)",
    arCondicionadoStatus: "Ar-condicionado split + ventilador de parede confirmados nas fotos IMG00–IMG09 e vídeo v00",
    varandaStatus: "Varanda privativa com mesinha e vista para o jardim/mar (confirmada em vídeo v00 e fotos)",
    vistaMar: true,
    descricaoCurta:
      "A suíte mais documentada da pousada: acomoda até 4 pessoas em cama de casal e beliche, com ar-condicionado split, frigobar, banheiro blindex e varanda arejada.",
    descricaoCompleta:
      "Confirmada tanto no áudio de Dona Zita ('suíte onde não tem cozinha, acomoda 4 pessoas') quanto na ficha do Booking ('Quarto Quádruplo com Varanda') e nas 10 fotos e vídeos gravados na unidade. Equipada com cama de casal, beliche estruturado, ar-condicionado split, ventilador de parede, frigobar, espelho, banheiro privativo com box de vidro e varanda com mesinha.",
    paraQuemE: [
      "Casais com até 2 filhos que querem praticidade total sem se preocupar em cozinhar",
      "Famílias que desejam aproveitar o café da manhã e as porções de peixe fresco no restaurante pé na areia da pousada"
    ],
    comodidades: [
      { item: "Capacidade para até 4 pessoas (1 cama de casal + 1 beliche)", fonte: "Áudio Dona Zita + Fotos reais IMG00–IMG09 + Booking", confirmado: true },
      { item: "Ar-condicionado split + ventilador de parede", fonte: "Fotos reais IMG00–IMG09 + Vídeo v00", confirmado: true },
      { item: "Frigobar privativo no quarto", fonte: "Fotos reais IMG00 e IMG04 + Vídeo v07 (00:54)", confirmado: true },
      { item: "Banheiro privativo com box de vidro blindex", fonte: "Vídeo v00 (00:12) e v02 (00:14)", confirmado: true },
      { item: "Varanda privativa com mesinha e vista para os coqueiros/mar", fonte: "Vídeo v00 (00:22) e v08 (00:17)", confirmado: true },
      { item: "Estacionamento privativo gratuito no local", fonte: "Booking / Vídeos da propriedade", confirmado: true }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Suíte sem fogão/cozinha (refeições no restaurante da pousada)", fonte: "Áudio oficial Dona Zita", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/suite-quadrupla-4p-1.webp",
        alt: "Interior da Suíte Quádrupla com cama de casal, beliche de madeira, ar-condicionado split e varanda ao fundo",
        origem: "Foto real IMG00 (WhatsApp Image 2026-10-25 at 12.17.34.jpeg) — exclusiva desta categoria"
      },
      {
        url: "/media/quartos/suite-quadrupla-4p-2.webp",
        alt: "Outra unidade da Suíte Quádrupla mostrando cama de casal com peseira azul-marinho, beliche e porta para a varanda",
        origem: "Foto real IMG02 (WhatsApp Image 2026-10tt-25 at 12.17.30.jpeg) — exclusiva desta categoria"
      },
      {
        url: "/media/quartos/suite-quadrupla-4p-3.webp",
        alt: "Banheiro privativo com box blindex da Suíte Quádrupla",
        origem: "Frame real extraído do vídeo v00 (15.0s) — exclusivo desta categoria"
      }
    ],
    videoCard: {
      mp4: "/media/v/suite-quadrupla-4p.mp4",
      poster: "/media/v/suite-quadrupla-4p.webp",
      legenda: "Tour real pela Suíte Quádrupla com Varanda (cama de casal, beliche e acesso à varanda)",
      arquivoOrigem: "WhatsApp Video 2026-10-25 at 12.17.2yy4.mp4 (v00)",
      duracaoSeg: 7
    },
    pendenciaMidia: null,
    miniFaq: [
      {
        p: "A Suíte Quádrupla tem cozinha?",
        r: "Não. Como explica Dona Zita, as suítes não possuem cozinha (contam com frigobar privativo), sendo ideais para quem quer descansar e utilizar o restaurante e quiosque pé na areia da pousada."
      },
      {
        p: "O café da manhã está incluído na diária da suíte?",
        r: "No anúncio do Booking o café da manhã consta como incluído para o Quarto Quádruplo. Na reserva direta pelo WhatsApp, confirme com Dona Zita as condições com café da manhã para o seu período."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para a Suíte Quádrupla Familiar com Varanda (até 4 pessoas)."
  },
  {
    slug: "suite-tripla-3p",
    nome: "Suíte Tripla Conforto (até 3 Pessoas)",
    subtitulo: "Suíte prática sem cozinha para até 3 pessoas, próxima à piscina e ao restaurante pé na areia",
    categoria: "Suite",
    capacidade: "Até 3 pessoas",
    capacidadeNumero: 3,
    tipoCamas: "Configuração para 3 pessoas [Disposição exata das camas a confirmar com Dona Zita]",
    fonteCamas: "Áudio oficial Dona Zita ('suíte acomoda de 4 pessoas, um casal ou 3 pessoas')",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira",
    arCondicionadoStatus: "Climatização da unidade sob consulta com Dona Zita",
    varandaStatus: "Acesso às áreas externas da pousada [Varanda privativa a confirmar com Dona Zita]",
    vistaMar: false,
    descricaoCurta:
      "Opção confirmada por Dona Zita para pequenas famílias de 3 pessoas que preferem a comodidade do restaurante pé na areia sem precisar cozinhar.",
    descricaoCompleta:
      "Citada diretamente por Dona Zita no áudio de 26/10/2026 ('a suíte, onde não tem cozinha, acomoda 4 pessoas, um casal ou 3 pessoas'). Indicada para casais com 1 filho ou 3 adultos que desejam curtir a praia, a piscina e a gastronomia caiçara da pousada.",
    paraQuemE: [
      "Casal com 1 filho ou trio de viajantes que não precisa de cozinha no quarto",
      "Quem busca estadia prática de fim de semana ou feriado pé na areia"
    ],
    comodidades: [
      { item: "Capacidade para até 3 pessoas em modalidade Suíte (sem cozinha)", fonte: "Áudio oficial Dona Zita (26/10/2026)", confirmado: true },
      { item: "Acesso direto à Praia do Ubatumirim, piscina e restaurante da pousada", fonte: "Áudio oficial Dona Zita", confirmado: true },
      { item: "Estacionamento privativo gratuito na pousada", fonte: "Booking / Áudio Dona Zita", confirmado: true },
      { item: "Detalhes internos da unidade tripla (ar-condicionado, frigobar, fotos exclusivas)", fonte: "sob consulta com Dona Zita", confirmado: false }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Modalidade Suíte: não possui fogão/cozinha", fonte: "Áudio oficial Dona Zita", confirmado: true }
    ],
    fotos: [],
    videoCard: null,
    pendenciaMidia:
      "Pendência registrada para Dona Zita: enviar 2 fotos e 1 vídeo curto exclusivos da Suíte Tripla (para não repetir as imagens da Suíte Quádrupla).",
    miniFaq: [
      {
        p: "Por que esta página ainda não exibe foto ou vídeo da Suíte Tripla?",
        r: "Por compromisso de transparência com o hóspede: todas as fotos de suítes recebidas até o momento mostram a configuração Quádrupla (com beliche). Não repetimos foto de outro quarto e já solicitamos à Dona Zita o registro específico da Suíte Tripla."
      },
      {
        p: "Posso pedir fotos da Suíte Tripla disponível diretamente no WhatsApp?",
        r: "Sim! Basta clicar no botão de WhatsApp desta página e Dona Zita envia na hora a foto e a cotação da unidade disponível para as suas datas."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores, disponibilidade e ver foto da Suíte Tripla (3 pessoas)."
  },
  {
    slug: "suite-casal-2p",
    nome: "Suíte Casal Pé na Areia (2 Pessoas)",
    subtitulo: "Refúgio tranquilo para dois na enseada de Ubatumirim, com varanda térrea e rede de descanso",
    categoria: "Suite",
    capacidade: "Até 2 pessoas (Casal)",
    capacidadeNumero: 2,
    tipoCamas: "1 cama de casal",
    fonteCamas: "Áudio oficial Dona Zita ('suíte acomoda... um casal')",
    cozinha: false,
    churrasqueiraStatus: "Suíte sem cozinha e sem churrasqueira",
    arCondicionadoStatus: "Climatização da suíte de casal sob consulta com Dona Zita",
    varandaStatus: "Varanda térrea com rede e jardim tropical (foto real em 00-briefing/fotos/)",
    vistaMar: false,
    descricaoCurta:
      "Hospedagem para casais que desejam descansar ao som do mar calmo de Ubatumirim, com varanda acolhedora e restaurante caiçara na areia da praia.",
    descricaoCompleta:
      "Confirmada por Dona Zita no áudio oficial ('a suíte, onde não tem cozinha, acomoda... um casal'). Ideal para quem busca dias de sossego a dois, caminhadas até a Praia da Justa na maré baixa e refeições servidas à beira-mar no restaurante e quiosque da pousada.",
    paraQuemE: [
      "Casais em busca de praia tranquila, sem ondas fortes e longe do tumulto urbano",
      "Quem valoriza varanda com rede e atendimento familiar direto com os proprietários"
    ],
    comodidades: [
      { item: "Acomodação para casal (2 pessoas) na categoria Suíte", fonte: "Áudio oficial Dona Zita (26/10/2026)", confirmado: true },
      { item: "Varanda térrea com rede e flores tropicais", fonte: "Foto real do acervo inicial (suite-standard-terreo-varanda)", confirmado: true },
      { item: "Acesso direto à Praia do Ubatumirim, piscina e restaurante", fonte: "Áudio oficial Dona Zita", confirmado: true },
      { item: "Estacionamento privativo gratuito no local", fonte: "Booking / Áudio Dona Zita", confirmado: true },
      { item: "Ficha técnica interna completa da Suíte Casal (ar-condicionado, frigobar e vídeo interno)", fonte: "sob consulta com Dona Zita", confirmado: false }
    ],
    regras: [
      { item: "Check-out até às 11:00", fonte: "Confirmado no Google Maps e Booking", confirmado: true },
      { item: "Check-in das 12:00 às 22:00", fonte: "Declarado no Booking sob consulta com Dona Zita", confirmado: false },
      { item: "Modalidade Suíte: não possui fogão/cozinha", fonte: "Áudio oficial Dona Zita", confirmado: true }
    ],
    fotos: [
      {
        url: "/media/quartos/quarto-card-1.webp",
        alt: "Quarto climatizado com cama de casal, ar-condicionado split e iluminação acolhedora",
        origem: "Foto tratada em alta definição do acervo da pousada (quarto-card-1.webp)"
      }
    ],
    videoCard: null,
    pendenciaMidia:
      "Pendência registrada para Dona Zita: enviar 1 vídeo curto e 2 fotos do interior exclusivo da Suíte Casal (sem beliche), evitando usar vídeos das suítes quádruplas.",
    miniFaq: [
      {
        p: "Por que não há vídeo do interior da Suíte Casal nesta página?",
        r: "Porque todos os vídeos internos de suítes enviados até agora mostram unidades quádruplas (com beliche). Seguindo nossa regra de transparência, omitimos o vídeo aqui até recebermos o registro exclusivo da Suíte Casal."
      },
      {
        p: "É possível tomar café da manhã e almoçar na própria pousada?",
        r: "Sim! A pousada conta com restaurante e quiosque pé na areia na Praia do Ubatumirim, servindo pratos caiçaras, peixes e porções."
      }
    ],
    whatsappMsg:
      "Olá Dona Zita! Vim pelo site e gostaria de consultar valores e disponibilidade para a Suíte Casal (2 pessoas)."
  }
];
