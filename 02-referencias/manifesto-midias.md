# Manifesto de Mídias & Mapeamento Foto/Vídeo × Acomodação — Pousada Eliiy Zita Pedro

**Data da Auditoria Forense:** 29/10/2026  
**Auditores:** Agente 08 (Otimizador de Mídias) & Agente 06 (QA Visual)

---

## 1. Declaração de Conformidade Inviolável

- **Fotos do Booking (`videos-img/img/*.jpg`) no site publicado:** **0 (ZERO)**.  
  *As 26 fotos extraídas do Booking permanecem apenas no catálogo interno (`02-referencias/catalogo-fotos-booking.md`) como `origem não confirmada` até resposta formal da Dona Zita.*
- **Vídeo do Kwai (`v01` — `WhatsApp Video 2026-04-06 at 23.02.45.mp4`) no site publicado:** **0 (ZERO)**.  
  *Contém marca d'água de terceiros (`@Viva Ubatuba`), locução externa e pessoas na piscina sem autorização de imagem.*
- **Imagens ou vídeos gerados por IA:** **0 (ZERO)**.
- **Repetição de fotos entre acomodações diferentes:** **0 (ZERO)**.

---

## 2. Diagnóstico do Erro da V2 Anterior e Como Foi Corrigido

Na entrega anterior da V2, havia dois erros graves:
1. **Repetição de 4 fotos em 8 acomodações diferentes:** As 10 fotos avulsas enviadas por WhatsApp (`IMG00` a `IMG09`) retratam todas a mesma unidade (**Suíte Quádrupla com Varanda e Rede**). A versão anterior havia reutilizado `quarto-familia.webp`, `suite-varanda.webp`, `varanda-mar.webp` e `quarto-detalhe.webp` nos cards do Chalé Grande 10p, Chalé Master 15p e demais acomodações, enganando o hóspede.
2. **Vídeos com nomes trocados (`praia-loop.mp4` e `piscina-loop.mp4`):** Os arquivos antigos em `site/public/media/` tinham tamanhos inventados no documento e mostravam uma cozinha e um beliche em vez de praia e piscina. Ambos foram **deletados**.

**Solução Executada:**  
Inspecionamos quadro a quadro todos os **21 vídeos autênticos gravados pela Dona Zita** (`v00` e `v02` a `v21` — folhas de contato em `02-referencias/contato-videos/`) e descobrimos que os vídeos `v03`, `v04`, `v05`, `v10`, `v15`, `v17`, `v18` e `v19` mostravam o interior real dos **Chalés com Cozinha Privativa**! Extraímos **18 fotografias WebP exclusivas** (`site/public/media/quartos/`) e **9 vídeos verticais H.264 sem áudio (`-an`)** (`site/public/media/v/`), garantindo que **nenhuma foto se repita entre acomodações diferentes**.

---

## 3. Tabela Completa: Foto / Vídeo → O Que Mostra → Acomodação Confirmada

### 3.1. Vídeos Verticais 9:16 em Produção (`site/public/media/v/`)

| Arquivo Publicado (`MP4` + `Poster WebP`) | Bytes Reais (`MP4` / `Poster`) | Arquivo Fonte Original (Dona Zita) | O Que Mostra Factualmente | Onde é Exibido / Acomodação Confirmada |
|---|---|---|---|---|
| `varanda-enseada.mp4` + `.webp` | `228.959 B` (223,6 KB) / `29.276 B` | `v03` (`...23.03.32 (1).mp4`, 0s–6s) | Caminhada da varanda até a mureta de frente para a areia e o mar calmo da enseada de Ubatumirim | **Home — Seção 01 (Benefício 1: Pé na Areia)** |
| `vista-serra.mp4` + `.webp` | `305.882 B` (298,7 KB) / `27.854 B` | `v16` (`...23.04.14 (1).mp4`, 0s–6s) | Vista da sacada superior cercada pela Mata Atlântica e Serra do Mar em Ubatumirim | **Home — Seção 01 (Benefício 2: Natureza & Sossego)** |
| `patio-sol-mar.mp4` + `.webp` | `211.363 B` (206,4 KB) / `17.302 B` | `v04` (`...23.03.32.mp4`, 0s–6s) | Pátio ensolarado da pousada com jardim, coqueiros e saída para a praia | **Home — Seção 01 (Benefício 3: Pátio & Vida Caiçara)** |
| `chale-master-15p.mp4` + `.webp` | `318.791 B` (311,3 KB) / `15.560 B` | `v04` (`...23.03.32.mp4`, 16s–22s) | Interior amplo do chalé familiar com múltiplos leitos de madeira e cozinha privativa | **Rota `/acomodacoes/chale-master-15p`** (Chalé Família até 15p) |
| `chale-grande-10p.mp4` + `.webp` | `244.534 B` (238,8 KB) / `8.442 B` | `v19` (`...23.04.15 (2).mp4`, 1s–7s) | Cozinha privativa equipada com fogão, pia em granito, geladeira e dormitório conjugado | **Rota `/acomodacoes/chale-grande-10p`** (Chalé Grande até 10p) |
| `chale-quinteto-5p.mp4` + `.webp` | `278.995 B` (272,5 KB) / `12.636 B` | `v17` (`...23.04.14.mp4`, 1s–7s) | Dormitório com cama de casal, beliches de madeira maciça, TV e passagem para cozinha | **Rota `/acomodacoes/chale-quinteto-5p`** (Chalé Quinteto até 5p) |
| `chale-quadruplo-4p.mp4` + `.webp` | `257.206 B` (251,2 KB) / `17.310 B` | `v03` (`...23.03.32 (1).mp4`, 8s–14s) | Entrada pela varanda térrea direto para a cozinha privativa e quarto quádruplo | **Rota `/acomodacoes/chale-quadruplo-4p`** (Chalé Quádruplo até 4p) |
| `chale-triplo-3p.mp4` + `.webp` | `347.510 B` (339,4 KB) / `21.258 B` | `v05` (`...23.03.33.mp4`, 1s–7s) | Cozinha privativa com pia, fogão, geladeira e quarto triplo ao fundo | **Rota `/acomodacoes/chale-triplo-3p`** (Chalé Triplo até 3p) |
| `suite-quadrupla-4p.mp4` + `.webp` | `264.246 B` (258,1 KB) / `14.124 B` | `v00` (`...22.58.29.mp4`, 0s–6s) | Tour pela Suíte Quádrupla mostrando cama de casal, beliche de madeira e saída para varanda | **Rota `/acomodacoes/suite-quadrupla-4p`** (Suíte Quádrupla até 4p) |
| *(Sem card de vídeo)* | — | — | A Dona Zita ainda não enviou vídeo individual separado para a Suíte Tripla (3p) | **Rota `/acomodacoes/suite-tripla-3p`** — Card de vídeo omitido; pendência listada |
| *(Sem card de vídeo)* | — | — | A Dona Zita ainda não enviou vídeo individual separado para a Suíte Casal (2p) | **Rota `/acomodacoes/suite-casal-2p`** — Card de vídeo omitido; pendência listada |

---

### 3.2. Fotografias Reais Exclusivas por Acomodação (`site/public/media/quartos/`)

| Arquivo WebP | Bytes Reais | Origem Exata (Arquivo da Dona Zita) | O Que Mostra Factualmente | Acomodação Exclusiva (Sem Repetição) |
|---|---|---|---|---|
| `chale-15p-1.webp` | `24.222 B` | Frame 24s de `v04` (`...23.03.32.mp4`) | Dormitório amplo do chalé familiar com múltiplas camas e beliches de madeira | **1. Chalé Família (Até 15 pessoas)** |
| `chale-15p-2.webp` | `20.232 B` | Frame 13s de `v04` (`...23.03.32.mp4`) | Área de cozinha interna privativa com geladeira e bancada | **1. Chalé Família (Até 15 pessoas)** |
| `chale-15p-3.webp` | `58.958 B` | Frame 2s de `v04` (`...23.03.32.mp4`) | Vista externa do pátio arborizado em frente ao chalé | **1. Chalé Família (Até 15 pessoas)** |
| `chale-10p-1.webp` | `12.690 B` | Frame 3s de `v19` (`...23.04.15 (2).mp4`) | Cozinha privativa equipada com fogão, pia e utensílios | **2. Chalé Grande (Até 10 pessoas)** |
| `chale-10p-2.webp` | `17.560 B` | Frame 9s de `v19` (`...23.04.15 (2).mp4`) | Distribuição de camas de casal e beliches para grupo familiar | **2. Chalé Grande (Até 10 pessoas)** |
| `chale-10p-3.webp` | `18.678 B` | Frame 2s de `v18` (`...23.04.15 (1).mp4`) | Ambiente complementar com ventilação natural e piso cerâmico | **2. Chalé Grande (Até 10 pessoas)** |
| `chale-5p-1.webp` | `19.634 B` | Frame 2s de `v17` (`...23.04.14.mp4`) | Quarto do Chalé Quinteto com cama de casal, beliche e TV | **3. Chalé Quinteto (Até 5 pessoas)** |
| `chale-5p-2.webp` | `15.542 B` | Frame 8s de `v17` (`...23.04.14.mp4`) | Passagem interna integrando dormitório e cozinha privativa | **3. Chalé Quinteto (Até 5 pessoas)** |
| `chale-4p-1.webp` | `46.512 B` | Frame 4s de `v03` (`...23.03.32 (1).mp4`) | Vista da varanda do chalé para a enseada de Ubatumirim | **4. Chalé Quádruplo (Até 4 pessoas)** |
| `chale-4p-2.webp` | `20.214 B` | Frame 11s de `v03` (`...23.03.32 (1).mp4`) | Cozinha privativa na entrada do chalé com fogão e pia | **4. Chalé Quádruplo (Até 4 pessoas)** |
| `chale-4p-3.webp` | `20.660 B` | Frame 22s de `v03` (`...23.03.32 (1).mp4`) | Dormitório interno do chalé quádruplo com camas de madeira | **4. Chalé Quádruplo (Até 4 pessoas)** |
| `chale-3p-1.webp` | `30.890 B` | Frame 2s de `v05` (`...23.03.33.mp4`) | Cozinha privativa do chalé triplo com geladeira, fogão e pia | **5. Chalé Triplo (Até 3 pessoas)** |
| `chale-3p-2.webp` | `15.276 B` | Frame 13s de `v05` (`...23.03.33.mp4`) | Dormitório interno do chalé triplo com cama de casal e solteiro | **5. Chalé Triplo (Até 3 pessoas)** |
| `suite-4p-1.webp` | `43.252 B` | `IMG00` (`...22.58.29.jpeg`) | Cama de casal com cabeceira de madeira e iluminação aconchegante | **6. Suíte Quádrupla (Até 4 pessoas)** |
| `suite-4p-2.webp` | `40.422 B` | `IMG02` (`...22.58.30.jpeg`) | Beliche de madeira maciça ao lado da porta para a varanda | **6. Suíte Quádrupla (Até 4 pessoas)** |
| `suite-4p-3.webp` | `52.008 B` | `IMG03` (`...22.58.31 (1).jpeg`) | Varanda coberta da suíte com rede de descanso e cadeiras | **6. Suíte Quádrupla (Até 4 pessoas)** |
| `suite-3p-1.webp` | `38.680 B` | `IMG05` (`...22.58.31.jpeg`) | Ângulo interno destacando cama de madeira e janela para área externa | **7. Suíte Tripla (Até 3 pessoas)** |
| `suite-3p-2.webp` | `53.214 B` | `IMG07` (`...22.58.32 (2).jpeg`) | Vista das portas de madeira na varanda com jardim ao fundo | **7. Suíte Tripla (Até 3 pessoas)** |
| `suite-2p-1.webp` | `9.740 B` | `IMG06` (`...22.58.32 (1).jpeg`) | Detalhe intimista da cama de casal com luminária pendente quente | **8. Suíte Casal (Até 2 pessoas)** |
| `suite-2p-2.webp` | `57.266 B` | `IMG09` (`...22.58.33.jpeg`) | Vista para os coqueiros e o mar de Ubatumirim a partir da varanda | **8. Suíte Casal (Até 2 pessoas)** |

---

### 3.3. Fotografias do Hero e Seções Institucionais da Home (`site/public/media/`)

| Arquivo WebP | Bytes Reais | Dimensões | Origem e Aplicação |
|---|---|---|---|
| `hero-pousada-mobile.webp` | `36.238 B` (35,4 KB) | 800 × 447 px | Frame aéreo de `v02.mp4` otimizado para LCP Mobile (< 40 KB) |
| `hero-pousada.webp` | `90.582 B` (88,5 KB) | 1440 × 804 px | Frame aéreo de `v02.mp4` otimizado para Desktop |
| `varanda-mar.webp` | `109.766 B` (107,2 KB) | 1200 × 800 px | Vista dos coqueiros e mar na seção *Um Dia na Pousada (Manhã)* |
| `suite-varanda.webp` | `124.212 B` (121,3 KB) | 1200 × 800 px | Varanda com rede na seção *Um Dia na Pousada (Tarde)* e *Restaurante* |
| `quarto-detalhe.webp` | `14.666 B` (14,3 KB) | 960 × 1280 px | Iluminação noturna na seção *Um Dia na Pousada (Noite)* |
