# Auditoria de Engenharia Reversa — `arq.mp4` + `img-editada/`

**Data:** 29/10/2026  
**Objetivo:** Mapear quadro a quadro (00s a 45s) a arquitetura visual, tipográfica, de layout e de motion do vídeo de referência [`arq.mp4`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/arq.mp4) e auditar as novas imagens 2K em [`img-editada/`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada) antes de executar a reestruturação completa do site da **Pousada e Restaurante Eliiy Zita Pedro**.

---

## 1. Pranchas de Quadros Extraídos (Zoom no Monitor do Vídeo)
Todos os 45 segundos de [`arq.mp4`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/arq.mp4) foram extraídos com recorte direto na tela do monitor em alta nitidez:
- **Parte 1 (00s a 14s — Preloader, Hero, Manifesto e Janela Expansível):** [`zoom_arq_parte_1.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom_arq_parte_1.jpg)
- **Parte 2 (15s a 29s — Showcase Pinado 01-03, Seletor Interativo e Bússola Central):** [`zoom_arq_parte_2.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom_arq_parte_2.jpg)
- **Parte 3 (30s a 44s — Quem Somos, Bento Grid, FAQ, CTA Escuro e Mega-Footer):** [`zoom_arq_parte_3.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom_arq_parte_3.jpg)

---

## 2. Engenharia Reversa das 9 Seções de `arq.mp4` e Tradução para a Pousada

### Seção 0 — Preloader Minimalista de Marca (`00s–01s` | [`sec_00.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_00.jpg) – [`sec_01.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_01.jpg))
- **Como é no vídeo:** Fundo claro (`#F4F4F0`), símbolo entra no centro, expande o nome da marca e sobe como cortina (`clip-path` / `translateY`) revelando o Hero.
- **No nosso site:** Entrada rápida (0.8s, sem travar o LCP) com a logo da **Pousada Eliiy Zita Pedro** abrindo em cortina suave para a foto crepuscular [`hero.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero.jpg).

### Seção 1 — Hero Editorial `100vh` com Troca de Cenas e Abas Inferiores (`02s–07s` | [`sec_03.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_03.jpg))
- **Como é no vídeo:**
  - **Header em 4 colunas (estilo suíço):** Logo à esquerda | Localização no centro-esquerda (`Ubatumirim, Litoral Norte — SP`) | Menu vertical compacto no centro-direita (`Início`, `A Pousada`, `Acomodações`, `Experiência`, `Contato`) | Atalho de reserva à direita.
  - **Headline com palavra-chave em *serifa itálica* que alterna conforme a aba ativa:** *"Nossa forma de trabalhar une **método / identidade / precisão**."*
  - **Botão Assinatura (inferior esquerdo):** Pílula branca larga com texto escuro + **quadrado escuro à direita** com ícone dentro.
  - **3 Pílulas Seletoras (inferior direito):** Trocam a foto de fundo do Hero com crossfade e zoom suave (`scale(1.05 -> 1)`).
- **No nosso site:**
  - **Aba 1 (`Pé na Areia`):** Fundo [`hero.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero.jpg) — *"O seu refúgio no Ubatumirim une **natureza**."*
  - **Aba 2 (`Vista & Mar Calmo`):** Fundo [`Edit_rooftop_photo_of_beach_31adf87f_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Edit_rooftop_photo_of_beach_31adf87f_2K.jpg) — *"O seu refúgio no Ubatumirim une **sossego**."*
  - **Aba 3 (`Acomodações & Gastronomia`):** Fundo [`Editing_photo_of_beach_chapel_d3db57ae_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Editing_photo_of_beach_chapel_d3db57ae_2K.jpg) (ou foto editada que você enviar) — *"O seu refúgio no Ubatumirim une **memórias**."*
  - **Botão Assinatura:** `Consultar disponibilidade` (abre modal/drawer editorial rápido de reserva direta ou leva à escolha de acomodação sem poluir o Hero com formulário estilo Booking).

### Seção 2 — Manifesto com Preenchimento de Texto no Scroll + Janela que Expande para Tela Cheia (`08s–12s` | [`sec_08.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_08.jpg) – [`sec_10.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_10.jpg))
- **Como é no vídeo:** Fundo claro (`#F4F4F0`). Tag discreta à esquerda e frase grande à direita cujas letras saem do cinza claro (`opacity: 0.25`) para o escuro conforme o usuário rola a página (*GSAP ScrollTrigger Text Scrub*). Logo abaixo, uma janela central recortada cresce no scroll até ocupar `100vw × 100vh`.
- **No nosso site:** Frase manifesto sobre acordar de frente para a enseada de águas calmas do Ubatumirim, seguida pela janela central que expande em tela cheia para iniciar o Showcase Pinado.

### Seção 3 — Showcase Fullscreen Pinado (`01 / 03` Cenas no Scroll) (`13s–17s` | [`sec_13.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_13.jpg) – [`sec_17.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_17.jpg))
- **Como é no vídeo:** Com a tela travada (`pin: true`), o scroll alterna 3 cenas em `100vh`:
  - `[01]` Título grande à esquerda + texto curto no rodapé esquerdo + contador `01 / 03` e botão circular no canto inferior direito.
  - `[02]` Segunda cena fotográfica em tela cheia.
  - `[03]` Terceira cena fotográfica em tela cheia.
- **No nosso site:**
  - `[01] Uma enseada que abraça a calma` (Imagem: [`Edit_rooftop_photo_of_beach_31adf87f_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Edit_rooftop_photo_of_beach_31adf87f_2K.jpg))
  - `[02] A poucos passos da água e da areia` (Imagem: [`Editing_photo_of_beach_chapel_d3db57ae_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Editing_photo_of_beach_chapel_d3db57ae_2K.jpg) ou vídeo curto da praia)
  - `[03] Sabores caiçaras à beira-mar` (Placeholder editorial temporário aguardando sua foto editada do restaurante/quiosque)

### Seção 4 — Seletor Editorial de Acomodações (4 Barras Empilhadas à Esquerda + Card Gigante Arredondado à Direita) (`18s–22s` | [`sec_20.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_20.jpg))
- **Como é no vídeo:** Substitui a "grade de catálogo do Booking" por um layout editorial sofisticado:
  - **Esquerda:** 4 barras horizontais empilhadas. A selecionada fica **escura sólida com texto branco e cantos arredondados**, e as demais ficam claras.
  - **Direita:** Um grande card fotográfico arredondado (`border-radius: 24px`) que troca de imagem, descrição, capacidade e botão `Reservar / Ver detalhes ↗` em tempo real, além de permitir navegar pelas **8 rotas individuais de acomodação**:
    1. **Chalés Master para Grandes Grupos (10 a 15 pessoas)** — *Chalé Master 15p & Chalé Grande 10p*
    2. **Chalés Família com Cozinha (4 a 5 pessoas)** — *Chalés Família I, II e III*
    3. **Chalé Casal & Família Compacta (3 pessoas)** — *Chalé Triplo com Cozinha*
    4. **Suítes Pé na Areia (2 a 4 pessoas)** — *Suíte Quádrupla & Suíte Casal/Triplo*
- **Imagens:** Placeholders editoriais claramente marcados por categoria (com suporte a vídeo em modal/card) prontos para receber as fotos editadas de cada acomodação que você está gerando.

### Seção 5 — Diferenciais em "Bússola Central" (`[01]` a `[04]` nos Cantos + Símbolo no Centro) (`23s–28s` | [`sec_26.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_26.jpg))
- **Como é no vídeo:** Título centralizado no topo; no centro da tela, um bloco quadrado escuro arredondado com o símbolo da marca e linhas diagonais sutis apontando para 4 blocos editoriais numerados (`[01]` a `[04]`) nos quatro cantos, sem "ícones genéricos de IA".
- **No nosso site:**
  - `[01] Pé na areia real` (Saída direta para a faixa de areia de Ubatumirim)
  - `[02] Restaurante e quiosque próprios` (Pratos caiçaras, porções e bebidas servidos na praia)
  - `[03] Estrutura para casais ou até 15 pessoas` (Suítes práticas e chalés completos com cozinha)
  - `[04] Reserva direta sem taxas de intermediários` (Atendimento direto pelo WhatsApp com a equipe da pousada)

### Seção 6 — Quem Somos / Hospitalidade (Foto Arredondada à Esquerda + Selo Circular + Abas à Direita) (`29s–32s` | [`sec_30.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_30.jpg))
- **Como é no vídeo:** Foto vertical/quadrada com cantos arredondados à esquerda, selo circular branco com o símbolo da marca sobreposto na borda da foto, e texto editorial à direita com pílulas seletoras para alternar entre tópicos.
- **No nosso site:** *"Hospitalidade pé na areia que atravessa gerações em Ubatumirim"*, com abas alternando entre `A Pousada`, `O Restaurante` e `A Praia do Ubatumirim` (com placeholder editorial identificado para a foto da pousada/anfitriã).

### Seção 7 — Bento Grid de Visita, Horários e Localização sobre Fundo Escuro (`33s–35s` | [`sec_34.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_34.jpg))
- **Como é no vídeo:** Fundo escuro (`#111`) emoldurando **3 grandes cards claros arredondados (`border-radius: 28px`)**:
  - **Card Superior Esquerdo:** Horários (`Check-in: 12h às 22h` | `Check-out: até 11h`).
  - **Card Inferior Esquerdo:** Endereço (`Estrada do Ubatumirim — Praia do Ubatumirim, Ubatuba - SP, KM 16 da BR-101 Norte`) + botões `Como chegar ↗` (abre mapa interativo sob demanda ou Google Maps) e `Reservar estadia`.
  - **Card Direito Grande:** Título *"Venha viver Ubatumirim pessoalmente."* + foto panorâmica arredondada na base.

### Seção 8 — FAQ em Grande Card Claro + CTA Escuro + Mega-Wordmark no Rodapé (`36s–44s` | [`sec_37.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_37.jpg) – [`sec_42.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/auditoria-arq/zoom-monitor/sec_42.jpg))
- **Card de FAQ (`36s–38s`):** Card claro arredondado sobre o fundo escuro; título *"Perguntas frequentes"* e botão pílula `Tirar minha dúvida` à esquerda; acordeão com botões circulares `+` pretos à direita.
- **CTA Escuro Minimalista (`39s–40s`):** *"Dias de mar calmo com identidade. Comece sua reserva por aqui."* + botão pílula claro (que abre o seletor rápido de datas/hóspedes para enviar direto ao WhatsApp).
- **Footer Monumental (`41s–44s`):** Colunas de navegação limpas + **Mega-Wordmark gigante (`ELIIY ZITA`)** ocupando a largura inteira da tela na base, integrado a uma imagem em recorte.

---

## 3. Auditoria das Fotos em `img-editada/` e dos Vídeos na Pasta

### A. As 3 Imagens 2K Encontradas em [`02-referencias/videos-img/img-editada/`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada)
1. **[`hero.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero.jpg) (`2752×1536`, 3.33 MB):**
   - **Análise:** Excelente qualidade e atmosfera cinematográfica *blue hour* (crepúsculo), luzes quentes acesas na pousada, espreguiçadeiras na areia, coqueiro central e Serra do Mar ao fundo.
   - **Uso:** Cena principal do **Hero (Seção 1)** + conversão automática para `.webp` e `.avif` otimizados.
2. **[`Edit_rooftop_photo_of_beach_31adf87f_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Edit_rooftop_photo_of_beach_31adf87f_2K.jpg) (`2752×1536`, 3.51 MB):**
   - **Análise:** Linda luz dourada de fim de tarde vista do terraço superior para a baía e ilhas de Ubatumirim.
   - **Uso:** Aba 2 do Hero + **Cena `[01]` do Showcase Fullscreen Pinado (Seção 3)**.
3. **[`Editing_photo_of_beach_chapel_d3db57ae_2K.jpg`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/Editing_photo_of_beach_chapel_d3db57ae_2K.jpg) (`2752×1536`, 3.28 MB):**
   - **Análise e Alerta de Auditoria:** A luz diurna e a composição da praia com o restaurante e a capela azul estão ótimas, **porém a IA de edição escreveu um letreiro na fachada da capela**: `"CAPELA NOSSA SENHORA DOS NAVEGANTES / PORTA DO IIEDIOBIIIIINI"` (a 3ª linha tem letras embaralhadas típicas de IA, e no vídeo real de drone a capela não tem texto pintado na parede).
   - **Solução técnica:** Posso remover/limpar digitalmente esse letreiro distorcido na parede da capela ao gerar o `.webp`/`.avif` para o site, ou você pode substituir quando quiser.

### B. Onde Entrarão Imagens Temporárias (Placeholders Editoriais Fácil de Trocar)
Criaremos um arquivo único de configuração de mídia (`site/src/data/editorial-media.ts`) e pasta dedicada (`site/public/media/editorial/`) para você apenas jogar as novas imagens conforme terminar de criá-las:
- `placeholder-cena-03-restaurante.webp` (Cena 03 do Showcase Pinado — Gastronomia/Quiosque)
- `placeholder-cat-01-chales-master.webp` (Seção 4 — Chalés 10 a 15 pessoas)
- `placeholder-cat-02-chales-familia.webp` (Seção 4 — Chalés 4 a 5 pessoas)
- `placeholder-cat-03-chale-triplo.webp` (Seção 4 — Chalé 3 pessoas)
- `placeholder-cat-04-suites.webp` (Seção 4 — Suítes 2 a 4 pessoas)
- `placeholder-quem-somos.webp` (Seção 6 — Foto vertical da Pousada/Família)
- `placeholder-bento-visita.webp` (Seção 7 — Foto panorâmica do Bento Grid)

### C. Verificação sobre os "2 Vídeos" Mencionados
Na pasta [`02-referencias/videos-img/`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img) existem hoje **2 vídeos de referência**:
1. [`arq.mp4`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/arq.mp4) (`45.3s`) — O site editorial completo (*Nosso Arquitetura*) que dissecamos acima.
2. [`skil.mp4`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/skil.mp4) (`70.5s`) — O Reel `@travaoscroll` que apresenta as skills de animação (`ScrollCraft`, `GSAP oficial`, `WebGL`) e mostra nos primeiros 3 segundos três janelinhas de sites (`sweettape.com`, `eraresidence.com`, `mickhu.com`).
*(Caso você tenha separado um outro vídeo diferente de `skil.mp4` e ainda não tenha copiado para a pasta, basta colocá-lo lá antes de disparar o comando abaixo).*
