# Relatório de Auditoria QA Visual — Ciclo 1 e Ciclo 2

**Projeto:** Pousada Eliiy Zita Pedro (Praia do Ubatumirim, Ubatuba/SP)  
**Data:** 28/10/2026  
**Auditor:** Agente 06 (QA Visual)  
**Ambiente de Teste:** Next.js 15.5.28 (Static Production Build), Chromium Headless via Playwright 1.64.1

---

## 1. Resumo Executivo
O site foi submetido à auditoria visual automatizada e funcional em duas resoluções canônicas:
- **Desktop:** 1440 × 900 px (Device Scale Factor 2x)
- **Mobile:** 375 × 812 px (iPhone X/12/13/14, Touch Enabled)

### Status Geral
- **Ciclo 1:** Detectados 2 problemas: (1) falha de encoding de caracteres (mojibake UTF-8/Latin-1) em textos com acentos e bullets especiais; (2) inicialização do web worker interno do MapLibre em ambiente headless sem WebGL flag, acionando o fallback gracioso.
- **Correções Aplicadas:** Executado script de saneamento de encoding e remoção de BOM/caracteres inválidos em todos os componentes (`scripts/fix-mojibake.mjs` e `scripts/clean-first-char.mjs`); MapLibre atualizado para carregamento dinâmico via UMD com worker inlined e flags `--enable-webgl`.
- **Ciclo 2 (Final):** **100% aprovado**. Zero erros no console (`Erros detectados: Nenhum erro`). Renderização cristalina de tipografia, mapa interativo, cards, gaveta mobile e botões.

---

## 2. Checklist de Verificação Visual e UX

| Item Auditado | Desktop (1440px) | Mobile (375px) | Observações |
|---|---|---|---|
| **Identidade Visual & Logo** | APROVADO | APROVADO | Logo oficial com casa verde, sol e ondas nítida em ambas as resoluções |
| **Paleta de Cores e Origem** | APROVADO | APROVADO | `#157d40` (Primária Natureza), `#0e4f29` (Escura), `#f29b2f` (CTA Solar), `#7abcd5` (Azul Onda) com contraste WCAG AAA |
| **Navbar & Menu** | APROVADO | APROVADO | Desktop em pílula de vidro flutuante; Mobile com drawer limpo e botão de fechar acessível |
| **Hero & Copy Principal** | APROVADO | APROVADO | Imagem real de alta definição (`hero-pousada-1600.webp`) com overlay gradiente para leitura legível |
| **Barra de Métricas (Zendesk)** | APROVADO | APROVADO | Grid sutil com divisores refinados (0m da areia, 4.5★ Google, 100% caiçara, 0 taxas) |
| **Vitrine de Suítes (Dialog Style)** | APROVADO | APROVADO | Cards com bordas arredondadas de 24px, tags de ar-condicionado/Wi-Fi/frigobar e botão WhatsApp direto |
| **Restaurante Caiçara** | APROVADO | APROVADO | Destaque do quiosque pé na areia e café da manhã incluso |
| **Mapa Interativo (MapLibre)** | APROVADO | APROVADO | Tiles CARTO Positron carregados com sucesso, pino verde animado com pulso suave, card flutuante com rota e WhatsApp, fallback resiliente e atribuição legal |
| **Depoimentos Reais** | APROVADO | APROVADO | Depoimentos reais do Google Meu Negócio de casais e famílias com notas 5 estrelas |
| **FAQ Accordion** | APROVADO | APROVADO | Respostas diretas contra as maiores objeções (mar calmo, acesso, política direta) |
| **CTAs e Links de WhatsApp** | APROVADO | APROVADO | Mensagens personalizadas por seção com encoding URI correto (`wa.me/5512992323656`) |
| **Acessibilidade & Reduced Motion** | APROVADO | APROVADO | `prefers-reduced-motion` desativa flyTo do mapa e transições automáticas |

---

## 3. Evidências Visuais (Screenshots Salvos)
- `PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop-full.png` (Página completa em 1440px)
- `PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/desktop-map.png` (Seção de localização com mapa interativo)
- `PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile-full.png` (Página completa em 375px)
- `PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/mobile-menu.png` (Drawer de navegação mobile aberto)
