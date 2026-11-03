# Relatório de QA Visual, Performance e Auditoria Factual V2 (Revisão Completa) — Pousada Eliiy Zita Pedro

**Data da Auditoria:** 29/10/2026  
**Ambiente Auditado:** Next.js 15.5.28 (Build de Produção Estático/SSG, Porta 3005)  
**Auditores:** Agente 08 (Mídias), Agente 04 (Dev), Agente 06 (QA Visual & Lighthouse)  
**Status Geral:** **TODOS OS 8 PONTOS CORRIGIDOS (Performance Mobile 94 na Home e 96 na Rota de Quarto)**

---

## 1. Resumo Executivo dos 8 Ajustes Obrigatórios

| # | Ajuste Exigido pelo Usuário | Resultado Alcançado | Evidência / Arquivo |
|---|---|---|---|
| **1** | **Fonte:** Reverter à fonte da V1 (`Plus Jakarta Sans`), remover `Syne`, propor 2 alternativas com personalidade e gerar comparativo em tela no Hero e no Quarto | **CONCLUÍDO** | `Plus Jakarta Sans` ativa no site + comparativos com `Bricolage Grotesque` e `Sora` em `03-design/comparativo-fontes-v2/` |
| **2** | **Cards de Vídeo (9:16):** 3 cards de vídeo verticais reais na seção da praia na Home + 1 card de vídeo vertical em cada rota de acomodação que possua vídeo real confirmado (omitindo onde não houver) | **CONCLUÍDO** | 3 vídeos verticais na Home (`Experience.tsx`) + 6 vídeos verticais reais nas rotas de quarto (`LazyVideoCard.tsx`). Omitido em `suite-tripla-3p` e `suite-casal-2p` com aviso transparente |
| **3** | **Mais Design e Seções (Home e Quartos):** Layout assimétrico (Card Mestre + Lista Editorial), seção *"Um dia na pousada"*, *"Como reservar em 3 passos"*, *"Horários e regras com fonte"*, *"Para quem é"*, *"Mini-FAQ"* e comparativo entre as 8 acomodações | **CONCLUÍDO** | 12 seções na Home + 5 seções editoriais completas + barra fixa mobile nas 8 rotas `/acomodacoes/[slug]` |
| **4** | **Teste Anti-IA (`proibidos-visual-ia.md`):** Eliminar ícones em quadradinhos/círculos no topo de cards, remover pills/badges acima de todos os títulos e eliminar grades simétricas de 8 cards iguais | **CONCLUÍDO** | 0 ícones em quadradinhos, 0 pills genéricas acima de `<h2>`, layout editorial numerado (`01` a `10`, `I` a `III`) documentado em `03-design/auditoria-anti-ia-v2.md` |
| **5** | **Fotos × Acomodação (Zero Repetição):** Tabela completa `foto/vídeo → o que mostra → acomodação confirmada` e eliminação total de fotos repetidas entre acomodações | **CONCLUÍDO** | 16 fotos exclusivas extraídas dos vídeos de cada chalé + fotos exclusivas de suíte em `02-referencias/manifesto-midias.md` |
| **6** | **Dados e Fontes (Sem invenções + Rodapé limpo):** Tabela de fontes por afirmação; remoção do e-mail pessoal (`elyy1987@gmail.com`) e do CEP geral (`11680-000`) do rodapé público até confirmação | **CONCLUÍDO** | `Footer.tsx`, `layout.tsx` e `01-estrategia/tabela-afirmacoes-factuais.md` saneados |
| **7** | **Performance Lighthouse Mobile ≥ 90:** Carregar MapLibre GL só sob demanda/clique, otimizar Hero `<picture>` (`23,9 KB` mobile) e anexar relatórios HTML/JSON reais | **PASSOU (94 e 96)** | Home Mobile: **94** (era 76) · Quarto Mobile: **96** (era 84). Relatórios em `06-qa/lighthouse/` |
| **8** | **Análise da `Motionsites-AI/claude-skill` (Sem Instalar):** Avaliar `README.md`, `SKILL.md`, `LICENSE` e `references/assets.md` | **CONCLUÍDO** | Documentado em `03-design/auditoria-anti-ia-v2.md` (Recomendação: **NÃO INSTALAR**) |

---

## 2. Resultados Reais do Google Lighthouse Mobile (Meta ≥ 90)

Executado via CLI oficial do Google Lighthouse sobre o build de produção (`http://localhost:3005`):

| Página Auditada (Emulação Mobile) | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index | Status (Meta ≥ 90) |
|---|---|---|---|---|---|---|---|---|---|---|
| **Home (`/`)** | **94** *(era 76)* | **100** | **100** | **100** | 1,4 s | 2,8 s | 110 ms | 0,025 | 2,4 s | **[PASSOU — ≥ 90]** |
| **Rota de Quarto (`/acomodacoes/chale-master-15p`)** | **96** *(era 84)* | **100** | **100** | **100** | 1,4 s | 2,6 s | 110 ms | 0,001 | 1,4 s | **[PASSOU — ≥ 90]** |

### Arquivos Gerados pelo Lighthouse:
- **Home Mobile HTML:** [`06-qa/lighthouse/home-mobile.report.html`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/lighthouse/home-mobile.report.html)
- **Home Mobile JSON:** [`06-qa/lighthouse/home-mobile.report.json`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/lighthouse/home-mobile.report.json)
- **Quarto Mobile HTML:** [`06-qa/lighthouse/acomodacao-chale-master-15p-mobile.report.html`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/lighthouse/acomodacao-chale-master-15p-mobile.report.html)
- **Quarto Mobile JSON:** [`06-qa/lighthouse/acomodacao-chale-master-15p-mobile.report.json`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/lighthouse/acomodacao-chale-master-15p-mobile.report.json)
- **Resumo JSON:** [`06-qa/lighthouse/resumo-lighthouse-v2.json`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/lighthouse/resumo-lighthouse-v2.json)

---

## 3. Índice Completo de Screenshots Gerados (Playwright)

### 3.1. Comparativo das 3 Opções de Fonte (`03-design/comparativo-fontes-v2/`)
- **Painel Lado a Lado Mobile (3 opções):** [`painel-comparativo-mobile-3-fontes.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/painel-comparativo-mobile-3-fontes.png)
- **Opção 1 (V1 Revertida — Ativa: `Plus Jakarta Sans`):**
  - Hero Desktop: [`hero-desktop-opcao1-plus-jakarta-sans-v1.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-desktop-opcao1-plus-jakarta-sans-v1.png)
  - Hero Mobile: [`hero-mobile-opcao1-plus-jakarta-sans-v1.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-mobile-opcao1-plus-jakarta-sans-v1.png)
  - Quarto Desktop: [`quarto-desktop-opcao1-plus-jakarta-sans-v1.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/quarto-desktop-opcao1-plus-jakarta-sans-v1.png)
- **Opção 2 (Alternativa A: `Bricolage Grotesque` + `Plus Jakarta Sans`):**
  - Hero Desktop: [`hero-desktop-opcao2-bricolage-grotesque.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-desktop-opcao2-bricolage-grotesque.png)
  - Hero Mobile: [`hero-mobile-opcao2-bricolage-grotesque.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-mobile-opcao2-bricolage-grotesque.png)
  - Quarto Desktop: [`quarto-desktop-opcao2-bricolage-grotesque.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/quarto-desktop-opcao2-bricolage-grotesque.png)
- **Opção 3 (Alternativa B: `Sora` + `Plus Jakarta Sans`):**
  - Hero Desktop: [`hero-desktop-opcao3-sora.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-desktop-opcao3-sora.png)
  - Hero Mobile: [`hero-mobile-opcao3-sora.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/hero-mobile-opcao3-sora.png)
  - Quarto Desktop: [`quarto-desktop-opcao3-sora.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-fontes-v2/quarto-desktop-opcao3-sora.png)

### 3.2. Home Desktop (1440 px) — Página Inteira + 13 Seções
- **Página Inteira (Full Page):** [`home-full-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/home-full-1440px.png)
- **01. Hero:** [`01-hero-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/01-hero-1440px.png)
- **02. Barra de Métricas:** [`02-metricas-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/02-metricas-1440px.png)
- **03. Praia do Ubatumirim (3 Cards de Vídeo 9:16):** [`03-experiencia-videos-9x16-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/03-experiencia-videos-9x16-1440px.png)
- **04. Acomodações Assimétricas (Chalés + Suítes):** [`04-acomodacoes-assimetricas-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/04-acomodacoes-assimetricas-1440px.png)
- **05. Um Dia na Pousada (Manhã, Tarde e Noite):** [`05-um-dia-na-pousada-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/05-um-dia-na-pousada-1440px.png)
- **06. Restaurante & Quiosque Pé na Areia:** [`06-restaurante-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/06-restaurante-1440px.png)
- **07. Estrutura, Piscina & Capela:** [`07-estrutura-piscina-capela-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/07-estrutura-piscina-capela-1440px.png)
- **08. Como Reservar em 3 Passos & Regras:** [`08-como-reservar-e-regras-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/08-como-reservar-e-regras-1440px.png)
- **09. Como Chegar & Mapa Sob Demanda:** [`09-como-chegar-mapa-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/09-como-chegar-mapa-1440px.png)
- **10. Avaliações Verificadas no Google Maps:** [`10-avaliacoes-google-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/10-avaliacoes-google-1440px.png)
- **11. Perguntas Frequentes (FAQ):** [`11-faq-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/11-faq-1440px.png)
- **12. CTA Final:** [`12-cta-final-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/12-cta-final-1440px.png)
- **13. Rodapé (Sem CEP/E-mail não confirmados):** [`13-footer-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop/13-footer-1440px.png)

### 3.3. Home Mobile (375 px) — Página Inteira + 13 Seções
- **Página Inteira (Full Page):** [`home-full-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/home-full-375px.png)
- **01. Hero:** [`01-hero-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/01-hero-375px.png)
- **02. Barra de Métricas:** [`02-metricas-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/02-metricas-375px.png)
- **03. Praia do Ubatumirim (3 Cards de Vídeo 9:16):** [`03-experiencia-videos-9x16-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/03-experiencia-videos-9x16-375px.png)
- **04. Acomodações Assimétricas:** [`04-acomodacoes-assimetricas-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/04-acomodacoes-assimetricas-375px.png)
- **05. Um Dia na Pousada:** [`05-um-dia-na-pousada-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/05-um-dia-na-pousada-375px.png)
- **06. Restaurante & Quiosque:** [`06-restaurante-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/06-restaurante-375px.png)
- **07. Estrutura, Piscina & Capela:** [`07-estrutura-piscina-capela-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/07-estrutura-piscina-capela-375px.png)
- **08. Como Reservar & Regras:** [`08-como-reservar-e-regras-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/08-como-reservar-e-regras-375px.png)
- **09. Como Chegar & Mapa:** [`09-como-chegar-mapa-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/09-como-chegar-mapa-375px.png)
- **10. Avaliações Google:** [`10-avaliacoes-google-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/10-avaliacoes-google-375px.png)
- **11. FAQ:** [`11-faq-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/11-faq-375px.png)
- **12. CTA Final:** [`12-cta-final-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/12-cta-final-375px.png)
- **13. Rodapé:** [`13-footer-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile/13-footer-375px.png)

### 3.4. As 8 Rotas de Acomodação (1440 px e 375 px)
1. **Chalé Master (15p — c/ vídeo real):** [`chale-master-15p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-master-15p-1440px.png) · [`chale-master-15p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-master-15p-375px.png)
2. **Chalé Grande (10p — c/ vídeo real):** [`chale-grande-10p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-grande-10p-1440px.png) · [`chale-grande-10p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-grande-10p-375px.png)
3. **Chalé Quinteto (5p — c/ vídeo real):** [`chale-quinteto-5p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-quinteto-5p-1440px.png) · [`chale-quinteto-5p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-quinteto-5p-375px.png)
4. **Chalé Quádruplo (4p — c/ vídeo real):** [`chale-quadruplo-4p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-quadruplo-4p-1440px.png) · [`chale-quadruplo-4p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-quadruplo-4p-375px.png)
5. **Chalé Triplo (3p — c/ vídeo real):** [`chale-triplo-3p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-triplo-3p-1440px.png) · [`chale-triplo-3p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/chale-triplo-3p-375px.png)
6. **Suíte Quádrupla (4p — c/ vídeo real):** [`suite-quadrupla-4p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-quadrupla-4p-1440px.png) · [`suite-quadrupla-4p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-quadrupla-4p-375px.png)
7. **Suíte Tripla (3p — vídeo omitido c/ aviso):** [`suite-tripla-3p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-tripla-3p-1440px.png) · [`suite-tripla-3p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-tripla-3p-375px.png)
8. **Suíte Casal (2p — vídeo omitido c/ aviso):** [`suite-casal-2p-1440px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-casal-2p-1440px.png) · [`suite-casal-2p-375px.png`](file:///C:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/acomodacoes/suite-casal-2p-375px.png)
