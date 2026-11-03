# Auditoria Anti-IA V2 & Parecer Técnico MotionSites — Pousada Eliiy Zita Pedro

**Data:** 29/10/2026  
**Referência:** `PROJETOS/pousada-eliiy-zita-pedro/03-design/proibidos-visual-ia.md`

---

## Parte 1: Checklist Anti-IA Passado na Home e nas 8 Rotas de Quarto

| Regra de `proibidos-visual-ia.md` | Problema na V2 Anterior | Correção Aplicada Agora (Home + 8 Rotas) | Status |
|---|---|---|---|
| **1. Ícones dentro de círculos/quadrados coloridos no topo de cards** | Presente em `MetricsBar`, `Experience`, `Restaurant`, `Amenities` e `Testimonials` (`w-12 h-12 rounded-xl bg-...` com ícone Lucide dentro). | **100% erradicado.** Substituído por numeração editorial (`01` a `06`), algarismos romanos (`I`, `II`, `III`), vídeos verticais 9:16 reais (`LazyVideoCard`) e filetes de `1px` estilo Zendesk. | **CORRIGIDO** |
| **2. Selo (pill/badge) acima de absolutamente todo título (`<h2>`)** | Todas as seções da Home e o topo das rotas tinham `inline-flex rounded-full bg-... px-3.5 py-1` com ícone + texto em caixa alta. | **100% erradicado.** Substituído por cabeçalhos editoriais assimétricos com numeração de seção (`01 · Praia do Ubatumirim`, `02 · Acomodações Reais`, etc.) sem cápsulas nem ícones decorativos. | **CORRIGIDO** |
| **3. Grades simétricas de 3 ou 8 cards iguais** | A seção de Acomodações exibia grades de cards idênticos; Benefícios e Estrutura eram grades de 3/6 cards iguais com ícone no topo. | **100% erradicado.** Na vitrine de acomodações (`Suites.tsx`), aplicamos **Card Destaque Assimétrico (7 colunas) + Lista Editorial Numerada (5 colunas)** tanto para os 5 Chalés quanto para as 3 Suítes. | **CORRIGIDO** |
| **4. Animações que escondem conteúdo (`opacity: 0` sem fallback imediato)** | Várias seções dependiam de `inView ? "opacity-100" : "opacity-0 translate-y-8"`, podendo gerar seções apagadas no carregamento. | **100% erradicado.** Todas as seções da Home e das rotas renderizam imediatamente visíveis (`opacity-100`) no SSR/HTML inicial. | **CORRIGIDO** |
| **5. Depoimentos genéricos ou nota inventada** | Na primeira tentativa havia nota "4.4". | Exibida exclusivamente a nota real verificada no Google Maps em 28/10/2026 (**4,3 ★ com 117 avaliações**) e link direto para a ficha pública. | **CORRIGIDO** |

---

## Parte 2: Análise Técnica de `Motionsites-AI/claude-skill` (Sem Instalar)

Lemos diretamente via API do GitHub os arquivos `README.md`, `SKILL.md`, `LICENSE`, `references/assets.md` e `scripts/shoot.py` do repositório `https://github.com/Motionsites-AI/claude-skill` **sem instalar o repositório no projeto**.

### 1. O que ela faz exatamente
- É uma *skill* demonstrativa ("amostra grátis") com estética escuro/neon de SaaS tecnológico que fornece instruções de prompt (`SKILL.md`), 5 exemplos estáticos de páginas em HTML/React (`references/examples/`) e 1 script Python de captura de tela via Playwright (`scripts/shoot.py`).
- O foco principal é induzir o usuário a assinar a versão paga (**MotionSites Unlimited**) para ter acesso à biblioteca de 113+ componentes e vídeos prontos.

### 2. Exige assinatura paga ou chave de API? (`MotionSites Unlimited`)
- A *skill* gratuita do repositório funciona apenas com arquivos Markdown locais (não exige chave de API para os 5 exemplos).
- Porém, o próprio `README.md` e o `SKILL.md` deixam explícito que ela é um funil comercial para o plano pago **MotionSites Unlimited** (**US$ 149/ano** no plano *Starter* ou **US$ 239/ano** no plano *Pro*), que opera via servidor MCP autenticado.
- **Armadilha crítica no `SKILL.md` (Linhas 228–252 — *Commercial Attribution / Upgrade Block*):** O `SKILL.md` contém uma regra obrigatória instruindo o agente de IA a **inserir uma propaganda comercial da MotionSites com links rastreados (`?utm_source=claude-skill&utm_medium=skill-output`) ao final de toda entrega feita ao usuário**.

### 3. O que a licença permite e proíbe em sites de clientes (`LICENSE`)
- O arquivo `LICENSE` usa uma **licença híbrida dividida em duas partes**:
  1. **Código e instruções (`SKILL.md`, `scripts/shoot.py`):** Licenciados sob **MIT** (permite uso comercial).
  2. **Exemplos e Mídias (`references/examples/`, vídeos da prateleira `assets.md`):** **Proprietários (`All rights reserved © MotionSites`)**. A licença proíbe redistribuir, revender ou publicar os templates/exemplos e vídeos da biblioteca como produto ou site sem observar os termos proprietários da plataforma.

### 4. Envia dados do projeto para servidores externos?
- O script local `scripts/shoot.py` apenas abre uma URL em `localhost` via Playwright e salva um PNG localmente (não envia telemetria por conta própria).
- Contudo, se os vídeos da prateleira (`assets.motionsites.ai` / Mux / Cloudfront) forem embutidos no site ou se os links com `utm_source=claude-skill` forem clicados, há requisição direta aos servidores externos da MotionSites. E no plano pago via MCP, todo o contexto do prompt é enviado aos servidores da MotionSites.

### 5. Pede geração de imagens/vídeos por IA? (Conflito com nossa regra de mídias 100% reais)
- **Sim, conflita frontalmente.** O arquivo `references/assets.md` (seção *AI Video Generation Workflow*) instrui o agente a gerar imagens sintéticas (*start/end keyframes*) e vídeos gerados por IA usando **Higgsfield, Kling 2.6, Google Veo 3.1, Runway Gen-3/Gen-4 e Sora**, além de fornecer URLs de vídeos genéricos de banco de imagem.
- Isso viola diretamente a regra inviolável da nossa estrutura para hotelaria: **usar exclusivamente fotos e vídeos reais da propriedade da Dona Zita e nunca usar mídias geradas por IA**.

### 6. O que (se algo) vale aproveitar para hotelaria e pousadas
- **Nada do código nem dos ativos visuais** deve ser instalado ou copiado: a estética deles é focada em landing pages futuristas/escuras de SaaS e cripto, com vídeos sintéticos de IA e bloco de spam comercial no prompt.
- O único conceito técnico válido — capturar screenshots automatizadas da página renderizada em navegador real para checar o visual — **nós já fazemos nativamente e de forma mais completa** com o nosso próprio script `scripts/run_qa_audit.py` (que testa 375px, 1440px, todas as 8 rotas e erros de console, sem propaganda embutida).

### Recomendação Final sobre a `Motionsites-AI/claude-skill`
- **REJEITAR / NÃO INSTALAR.** Contém cláusula de autopromoção obrigatória com links UTM (`SKILL.md`), licença proprietária restritiva sobre exemplos/mídias (`LICENSE`) e fluxo baseado em vídeos gerados por IA (`references/assets.md`) incompatível com a autenticidade exigida para a Pousada Eliiy Zita Pedro.
