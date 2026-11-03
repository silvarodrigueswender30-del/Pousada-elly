# Auditoria de Engenharia Reversa: `arq2.mp4`

## 1. Metadados do Vídeo
- **Arquivo:** `PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/arq2.mp4`
- **Duração Total:** 36.47 segundos (2186 quadros a ~60 fps)
- **Dimensões:** 384 × 832 px (Aspect ratio vertical ~9:19.5, captura fiel de viewport mobile moderno)
- **Codec:** H.264 / AVC Baseline, áudio AAC estéreo
- **Bitrate:** ~968 kbps
- **Quadros Extraídos:** 36 quadros a 1 fps salvos em `quadros-1s/` e contact sheet gerada em `contact-sheet-arq2.png`.

---

## 2. Segmentação em Seções, Layout e Movimento

### Seção 1: Hero / Entrada Imersiva & Identidade
- **Timecode:** 00s – 04s (Quadros representativos: `frame_001.png`, `frame_002.png`)
- **Layout:**
  - Tipografia monumental no terço superior/médio, com tracking aberto e caixa mista com itálicos de destaque.
  - Imagem de fundo imersiva em meia-luz com vinheta suave.
  - Barra de navegação minimalista no topo: logotipo textual discreto à esquerda, menu/botão de contato à direita.
- **Movimento:**
  - Deslize sutil para cima (reveal y: 20px -> 0px, opacity: 0 -> 1) com curva desacelerada `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Cores Amostradas:**
  - Fundo escuro terroso/noturno: `#090201` / `#281d17`
  - Texto claro areia: `#c1bab7`
- **Comportamento Mobile:**
  - Layout nativo mobile, texto centralizado ou alinhado à esquerda com quebra de linha harmoniosa.
- **Tipografia:** Serifada editorial elegante em itálico combinada com Sans-serif geométrica limpa (similar a *Cormorant Garamond* / *Plus Jakarta Sans*).

---

### Seção 2: Manifesto Editorial & Imagem Dividida (Split View)
- **Timecode:** 04s – 08s (Quadros representativos: `frame_005.png`, `frame_006.png`)
- **Layout:**
  - Divisão assimétrica: coluna ou bloco com texto de leitura de alto impacto e cartão de imagem com cantos arredondados (`rounded-2xl`).
  - Proporção da imagem ~4:5 ou 16:9 vertical.
  - Espaçamento generoso entre parágrafos, sensação de respiro e exclusividade.
- **Movimento:**
  - Scroll-scrub suave: a imagem possui um parallax sutil (escala 1.05 -> 1.0 ou leve translação vertical) enquanto o texto entra em ritmo de leitura.
- **Cores Amostradas:**
  - Tons naturais de folhagem/madeira: `#866b4d` e azuis da água/céu `#173057`.
- **Comportamento Mobile:**
  - Empilhamento vertical natural: Título/Manifesto no topo e bloco de imagem logo abaixo sem estrangular a largura.

---

### Seção 3: Faixa de Números & Métricas de Autoridade (Stats Strip)
- **Timecode:** 08s – 13s (Quadros representativos: `frame_009.png`, `frame_010.png`, `frame_011.png`)
- **Layout:**
  - Grade horizontal (ou 2x2 no mobile) com números gigantes em caixa alta (ex: `08`, `100%`, `4.9`), acompanhados de rótulos explicativos curtos em caixa alta e fonte mono ou sans condensada.
  - Linhas divisórias sutis de 1px entre os itens.
- **Movimento:**
  - Contador numérico progressivo disparado ao atingir a viewport (`IntersectionObserver`), com duração estimada de 1.4s e easing exponencial.
- **Cores Amostradas:**
  - Base clara off-white/linho: `#ded4d7` / `#c7bcc2`
  - Dígitos escuros com alto contraste: `#1e1e2a`
- **Comportamento Mobile:**
  - Grid 2 colunas com linhas finas divisórias, garantindo leitura imediata sem rolagem lateral forçada.

---

### Seção 4: Galeria de Acomodações & Cards Horizontais
- **Timecode:** 13s – 17s (Quadros representativos: `frame_014.png`, `frame_015.png`, `frame_016.png`)
- **Layout:**
  - Cards horizontais de acomodações com foto à esquerda/topo e detalhes (capacidade, diferenciais, CTA "Ver chalé") no corpo.
  - Proporção de imagem panorâmica ~16:10.
  - Badges flutuantes discretas (ex: "Pé na areia", "Até 15 pessoas").
- **Movimento:**
  - Efeito de hover suave no desktop (zoom leve de 2% na foto) e entrada em cascata com atraso escalonado (stagger de 80ms).
- **Cores Amostradas:**
  - Fundo claro neutro: `#dddbdc`
  - Acentos textuais escuros: `#312a27`
- **Comportamento Mobile:**
  - Carrossel com snap touch fluido (`scroll-snap-type: x mandatory`) permitindo deslizar com o polegar.

---

### Seção 5: Mapa Interativo & Ponto de Destino com Card Flutuante
- **Timecode:** 17s – 22s (Quadros representativos: `frame_018.png`, `frame_020.png`, `frame_021.png`)
- **Layout em Detalhe:**
  - Container de mapa estilizado com cores customizadas (terra/vegetação em tons neutros, água em tom calmo, sem saturação estridente do Google Maps padrão).
  - Pino central customizado destacando o local exato.
  - Card flutuante sobreposto (glassmorphism ou surface sólida branca com sombra suave `shadow-xl`) exibindo:
    - Nome do destino ("Praia do Ubatumirim - Ubatuba/SP")
    - Coordenadas geográficas ou distância/tempo estimado
    - Botão direto "Abrir rotas / Como chegar"
- **Movimento:**
  - Entrada do mapa com zoom suave e fade-in do card flutuante quando a seção entra em 30% da viewport.
- **Cores Amostradas:**
  - Fundo do mapa: tons neutros `#18212b`, `#b2b1b6`, acentos marinhos `#78716c` e card branco `#dad8d9`.
- **Comportamento Mobile:**
  - Mapa com proporção fixa (ex: altura 380px) com o card fixado logo abaixo ou flutuando na parte inferior para não atrapalhar o scroll da página.
  - Carregamento sob demanda (IntersectionObserver) para preservar 100% o Lighthouse.

---

### Seção 6: Experiência, Gastronomia & Pátio
- **Timecode:** 23s – 29s (Quadros representativos: `frame_024.png`, `frame_026.png`, `frame_028.png`)
- **Layout:**
  - Grade editorial estilo "Revista/Bento": fotos verticais e horizontais intercaladas com pequenas notas e citações em itálico.
  - Enfoque sensorial: pátio à beira-mar, culinária caiçara, tranquilidade da capela.
- **Movimento:**
  - Parallax suave de profundidade entre as fotos em velocidades ligeiramente diferentes (ex: 0.95x e 1.05x).
- **Cores Amostradas:**
  - Tons quentes dourados e terrosos: `#5f3a1d`, `#b4bebc`, `#402613`.
- **Comportamento Mobile:**
  - Pilha vertical com alternância de ritmo (uma foto cheia, seguida por texto, seguida por foto dupla).

---

### Seção 7: Rodapé Monumental & Chamada de Reserva Direta
- **Timecode:** 30s – 36s (Quadros representativos: `frame_032.png`, `frame_033.png`, `frame_035.png`)
- **Layout:**
  - Tipografia de encerramento em escala arquitetônica, contrastando com fundo noturno ou dourado crepuscular.
  - Botão de ação primária destacado (WhatsApp / Reserva Direta) com microcópia de segurança ("Sem intermediários", "Melhor tarifa garantida").
  - Informações cadastrais completas, contatos e selos de garantia na base.
- **Movimento:**
  - Revelação final estática e estável, sem oscilações para facilitar o clique no botão de reserva.
- **Cores Amostradas:**
  - Tons nobres escuros e dourados: `#7b5221`, `#553715`, `#101920`.

---

## 3. Análise Comparativa de Fontes
- **Tipografia no Vídeo:** Combinação refinada de serifada editorial moderna com itálico de alto contraste nas ênfases (semelhante à família *Canela* / *Cormorant*) e uma sans-serif grotesca geométrica nos rótulos e botões (*Inter* / *Plus Jakarta Sans*).
- **Aplicação no Site da Pousada:** Mantemos 100% a identidade da **Paleta V1** e fontes oficiais configuradas no projeto (`Geist Sans` + `Newsreader Italic` editorial), assegurando fidelidade estética sem descaracterizar a marca da pousada.
