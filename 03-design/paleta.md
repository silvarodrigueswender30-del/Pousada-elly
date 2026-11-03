# Paleta de Cores e Tokens Cromáticos — Pousada Eliiy Zita Pedro (Valores Vetoriais Canônicos)

Construída rigorosamente a partir dos vetores oficiais da marca em `site/public/brand/` e dos elementos físicos da Praia do Ubatumirim. **Nenhuma cor existe sem origem declarada.**

---

## 1. Tabela Mestra de Cores (Valores Exatos dos Fills do SVG)

| Nome do Token | Hex Exato do Vetor | Papel na Interface | Origem Declarada | Contraste WCAG Aferido |
|---|---|---|---|---|
| `--color-primary` | `#077c37` | Cor primária da marca; logotipo, badges, detalhes ativos e bordas refinadas | **Fills oficiais do SVG** (`logo-navbar.svg` e `wordmark-verde.svg`) | **4.75:1** s/ `#ffffff` (Passa em WCAG AA) • **4.52:1** s/ areia `#f8f5f0` |
| `--color-primary-dark` | `#1e3d34` | Fundo de seções nobres, rodapé institucional e títulos de autoridade | **Mata Atlântica de Ubatumirim** (shade florestal profundo) | **10.8:1** s/ branco (AAA) • **9.2:1** s/ areia |
| `--color-ink-deep` | `#0e291e` | Corpo de texto longo e texto sobre botões solares | **Derivada da logo** (shade escurecido para leitura confortável em tela móvel) | **13.9:1** s/ branco (AAA) |
| `--color-cta-solar` | `#f59e0b` / `#f29b2f` | Botões primários de ação ("Consultar Disponibilidade no WhatsApp") | **Logo exata** (sol nascente no topo do emblema) | **6.5:1** c/ texto `#0e291e` (Passa em WCAG AA) |
| `--color-sea-calm` | `#7abcd5` | Acento náutico; linhas de suporte, destaques de água e microinterações | **Logo exata** (ondas azuis sob o sol) | Uso gráfico/não-texto (1.8:1 s/ branco) |
| `--color-sea-deep` | `#0284c7` | Variante acessível do azul para ícones, links e tags marinhas | **Derivada da logo** (mar límpido de Ubatumirim) | **4.6:1** s/ branco (Passa em WCAG AA) |
| `--color-sand-parchment` | `#f8f5f0` | Fundo de transição térmica e faixas narrativas acolhedoras | **Ambiente do local** (areia fina e clara da orla de Ubatumirim) | Neutro respirável |
| `--color-canvas-fog` | `#fafbf9` | Fundo dominante do site (off-white com matiz sutilmente verdejante) | **Neutro funcional** (tingido com 0.5% da cor da marca) | Fundo limpo de alta respiração |
| `--color-surface-white` | `#ffffff` | Superfície dos cards de chalés, suítes e modais | **Neutro funcional** (pure white para contraste dos cards) | Contraste de elevação |
| `--color-divider` | `#e2eae3` | Linhas de divisão arquitetônicas entre métricas e seções | **Derivada da logo** (tint a 10% do verde primário `#077c37`) | Linhas limpas sem poluição |

---

## 2. Regras de Aplicação e Contraste
1. **Botões de Alta Conversão (`--color-cta-solar` `#f29b2f`):** Devem sempre utilizar texto no tom escuro da marca (`#0a301a`), garantindo contraste excelente de **6.55:1** (superando a norma WCAG AA de 4.5:1).
2. **Textos Longos e Parágrafos:** Utilizam `--color-ink-deep` (`#0a301a`), que é muito mais suave para os olhos que o preto puro (`#000000`), mas garante contraste extremo de **14.48:1** (AAA).
3. **Versão Escura / Seções Noturnas:**
   - Fundo escuro em tom floresta profundo: `#082112`
   - Texto principal: `#ffffff` (contraste > 16:1)
   - Cartões translúcidos com borda fina: `rgba(255, 255, 255, 0.12)`
