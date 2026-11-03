# Relatório de Design — 3 Opções de Direção Visual

**Projeto:** Pousada Eliiy Zita Pedro  
**Base Cromática Comum:** Todas as opções partem estritamente da paleta extraída da logo oficial (Verde Mata `#157d40`, Verde Floresta `#0e4f29`, Laranja Solar `#f29b2f` e Azul Enseada `#7abcd5`).

---

## Opção 1: "Eco-Boutique Minimalista" (Showroom Serena)
- **Inspiração Central:** Referência 1 (Dialog) do Refero.
- **Conceito:** Atmosfera de galeria limpa, serena e contemporânea. Muito respiro em branco e off-white, com superfícies de cartões em relevo sutil. O botão de reserva em Laranja Solar atua como o único magneto visual da página.
- **Tipografia:** Satoshi Light / DM Sans Light (display de traço leve a lápis em 64px) + Inter para textos de leitura com tracking negativo (-0.01em).
- **Cards e Formas:** Raios arredondados generosos de 24px (`rounded-3xl`), micro-badges arredondadas (100px) e sombras suaves em multicamadas.
- **Hero & Navbar:** Fotografia estática em altíssima definição com luz natural da manhã na praia; navbar flutuante em pílula de 32px com logotipo em evidência.
- **Linguagem de Motion:** Revelações suaves de 0.4s no scroll via `useSafeInView`, micro-escalas táteis nos cartões ao passar o mouse (1.01).
- **Exemplos Visuais Reais na Internet para Avaliação:**
  - [Dialog — Refero Styles](https://styles.refero.design/style/c8c22958-ec50-47f1-aedc-a131d7aeb442)
  - [Tulum Treehouse — One Page Love](https://onepagelove.com/tulum-treehouse)
- **Prós:** Transmite limpeza, tranquilidade, modernidade e sofisticação sem esforço.
- **Riscos:** Se não tiver fotos com excelente iluminação, pode parecer frio se comparado à calorosa hospitalidade caiçara.

---

## Opção 2: "Luxo Rústico Caiçara & Editorial" (Atmosfera Chalet)
- **Inspiração Central:** Referência 2 (BelArosa Chalet) do Refero.
- **Conceito:** Elegância tradicional de hotelaria de charme. Alternância rítmica entre blocos escuros solenes em Verde Floresta (`#0e4f29`) e faixas de conteúdo acolhedoras em tom areia pergaminho (`#f5efe6`).
- **Tipografia:** Duality editorial clássica: títulos em serif com peso imponente (Playfair Display ou Cormorant Garamond 700 com leading justo de 1.10) e corpo sem serifa em Avenir/Mulish com tracking aberto em maiúsculas para botões.
- **Cards e Formas:** Design arquitetônico e plano sem sombras pesadas; profundidade obtida pelo contraste de planos de fundo e linhas ultrafinas de 1px. Botões outline em pílula de 80px.
- **Hero & Navbar:** Abertura solene com foto ampla em tons profundos de fim de tarde, menu integrado que se funde ao topo com logotipo em destaque.
- **Linguagem de Motion:** Transições serenas e pausadas (0.6s–0.8s) com efeito de cascata suave (*staggered fade*), criando uma sensação de tempo desacelerado.
- **Exemplos Visuais Reais na Internet para Avaliação:**
  - [BelArosa Chalet — Refero Styles](https://styles.refero.design/style/46c8dbc5-47c8-4796-b94c-5e46dcda3532)
  - [Pousada Picinguaba (Ubatuba/SP)](https://picinguaba.com/)
  - [Hotel Carlota — One Page Love](https://onepagelove.com/hotel-carlota)
- **Prós:** Eleva a percepção de valor e ticket médio; parece uma matéria de capa da Condé Nast Traveler.
- **Riscos:** Pode parecer excessivamente formal se o público prioritário for famílias com crianças pequenas buscando praticidade despojada.

---

## Opção 3: "Sensorial & Cinematográfico" (Lona Audiovisual & Métricas)
- **Inspiração Central:** Referência 4 (Halfhelix) + Referência 3 (Zendesk) do Refero.
- **Conceito:** A interface recua completamente para dar palco absoluto à natureza e às filmagens da Praia do Ubatumirim em tela cheia (full bleed). Abaixo do vídeo, uma barra métrica de autoridade traz números gigantes em grid limpo de 1px.
- **Tipografia:** Linha modernista com Suisse Int'l / Geist Sans (400 com tracking -0.04em) e números gigantes em 72px (leading 1.0) para os indicadores de autoridade.
- **Cards e Formas:** Cards verticais de vídeo e fotos com cantos de raio mínimo (4px a 8px) ou cantos retos, focando 100% no impacto fotográfico.
- **Hero & Navbar:** Vídeo cinematográfico em loop contínuo e silencioso com poster estático de alta fidelidade; navbar transparente no topo com blur translúcido ao rolar.
- **Linguagem de Motion:** Parallax sutil no vídeo de fundo, contadores numéricos animados que sobem no viewport e transições puras de opacidade.
- **Exemplos Visuais Reais na Internet para Avaliação:**
  - [Halfhelix — Refero Styles](https://styles.refero.design/style/36fb90f7-3547-4dfd-a34e-592aa140078a)
  - [Zendesk — Refero Styles](https://styles.refero.design/style/240234ba-9cf5-4a91-b618-76963551d425)
  - [Faro Capo Spartivento — One Page Love](https://onepagelove.com/faro-capo-spartivento)
- **Prós:** Máximo poder de parada e encantamento imediato; vende o sonho da praia e do mar calmo nos primeiros 3 segundos de visita.
- **Riscos:** Exige vídeos otimizados e bom poster estático para não onerar o carregamento mobile (mitigado pelas regras do ecossistema).

---

## Recomendação Justificada do Diretor de Arte
**Recomendamos a Opção 3 combinada com a delicadeza de cards da Opção 1.**
- *Por quê:* O maior trunfo competitivo da Pousada Eliiy Zita Pedro é a sua localização na Praia do Ubatumirim — um mar manso, plano e seguro com Mata Atlântica ao redor. Um Hero de vídeo cinemático (Opção 3) captura instantaneamente a emoção do visitante, a barra de métricas (Zendesk) remove qualquer receio sobre estrutura/distância, e os cards brancos e limpos de suítes (Dialog) facilitam a escolha do quarto com um clique direto para o WhatsApp.
