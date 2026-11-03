# Relatório de Harmonização de Gradientes & Design System de Cores
**Pousada e Restaurante Eliiy Zita Pedro — Praia do Ubatumirim, Ubatuba/SP**
**Agente Responsável:** Diretor de Arte & Engenharia de Design
**Status:** ⛔ Portão de Aprovação (Aguardando Decisão do Usuário — Nenhuma alteração aplicada ao site de produção)

---

## 1. Setup de Skills & Regras Invioláveis de Cor (Etapa 0)
- **Skills Integradas:** `frontend-visual-gradients` e `color-ops` configuradas em `.claude/skills/`.
- **Agente de Design Atualizado:** `.claude/agents/design-agent.md` e regras documentadas em `CLAUDE.md`.
- **Paleta Institucional Intocável:**
  - Verde Mata: `#077C37` (alt. `#157D40`)
  - Verde Floresta: `#0E4F29`
  - Verde Noite: `#0A301A` (substituto mandatário de cinzas genéricos)
  - Laranja Sol: `#F29B2F`
  - Azul Enseada: `#7ABCD5`
  - Areia: `#F5EFE6`
  - Brisa: `#F8FAF8`
  - Musgo: `#3D5245`

---

## 2. Auditoria de Cor e Contraste do Site Atual (Etapa 1)
### 2.1. Pontos Críticos Detectados
1. **Transições Abruptas entre Seções:** As seções alternavam fundos chapados (Brisa `#F8FAF8`, Areia `#F5EFE6` e Verde Noite `#082112`), criando saltos secos de luminância.
2. **Overlays Escuros Lamacentos sobre Fotos:** O uso de classes utilitárias como `bg-black/60` e `bg-black/80` sobre as fotos dos painéis ("Uma enseada que abraça a calma") apagava a vibração natural da água esmeralda e da areia, deixando as imagens com aspecto acinzentado e sem vida.
3. **Falta de Sistema Cromático Unificado nos Números e Botões:** A faixa de estatísticas (08 / 0m / 3 a 15 / +160) carecia de gradiente editorial sutil para elevar o valor percebido das acomodações.

### 2.2. Matriz Matemática de Contraste WCAG 2.1
| Elemento / Combinação | Cor do Texto | Cor do Fundo | Taxa de Contraste | WCAG AA Normal | WCAG AA Grande | Status |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Botão CTA (Laranja Sol + Verde Noite)** | `#0A301A` | `#F29B2F` | **6.55:1** | **PASS** | **PASS** | **Obrigatório** |
| *Botão CTA com Texto Branco (Erro Clássico)* | `#FFFFFF` | `#F29B2F` | *2.21:1* | *FAIL* | *FAIL* | *PROIBIDO* |
| **Texto Normal em Fundo Claro** | `#0A301A` | `#F8FAF8` | **13.80:1** | **PASS** | **PASS** | **Excelente** |
| **Texto Secundário em Fundo Claro** | `#4A5C50` | `#F8FAF8` | **6.81:1** | **PASS** | **PASS** | **Aprovado** |
| **Números das Estatísticas em Areia** | `#0A301A` | `#F5EFE6` | **12.66:1** | **PASS** | **PASS** | **Aprovado** |
| **Acento Azul Enseada em Fundo Escuro** | `#7ABCD5` | `#082112` | **8.07:1** | **PASS** | **PASS** | **Aprovado AAA** |

### 2.3. Baseline Visual Gravado
Screenshots completos gravados em:
- [desktop-1366-full.png](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/baseline-cores-antes/desktop-1366-full.png)
- [tablet-768-full.png](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/baseline-cores-antes/tablet-768-full.png)
- [mobile-390-full.png](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/06-qa/baseline-cores-antes/mobile-390-full.png)

---

## 3. As Duas Propostas de Harmonização (Etapa 2)

### Proposta A — "Nascer do Sol na Enseada"
- **Conceito:** Acolhimento caloroso com iluminação de início de manhã na baía de Ubatumirim.
- **Tokens OKLCH:**
  - Fundo Seções Claras: `oklch(0.98 0.008 85)` (Areia Brisa, fallback `#F9F7F3`)
  - Faixa de Estatísticas: `linear-gradient(135deg in oklch, oklch(0.96 0.025 80), oklch(0.93 0.035 75))`
  - Gradiente dos Números: `linear-gradient(135deg in oklch, #0A301A 0%, #157D40 60%, #D98520 100%)`
  - Scrim Fotográfico: `linear-gradient(to top, oklch(0.18 0.06 148 / 0.88) 0%, oklch(0.22 0.04 148 / 0.3) 50%, transparent 80%)`
- **Sensação:** Familiar, acolhedora, solar e vibrante.

### Proposta B — "Mata Atlântica e Mar"
- **Conceito:** Imersão botânica com o frescor da vegetação costeira e o mar azul-esmeralda.
- **Tokens OKLCH:**
  - Fundo Seções Claras: `oklch(0.985 0.006 145)` (Brisa Botânica, fallback `#F7FAF8`)
  - Faixa de Estatísticas: `linear-gradient(135deg in oklch, oklch(0.96 0.018 140), oklch(0.94 0.025 150))`
  - Gradiente dos Números: `linear-gradient(135deg in oklch, #0A301A 0%, #0E4F29 60%, #157D40 100%)`
  - Scrim Fotográfico: `linear-gradient(180deg in oklch, transparent 35%, oklch(0.16 0.06 148 / 0.85) 100%)`
- **Sensação:** Sofisticada, fresca, profunda e de refúgio natural.

---

## 4. Preview Visual Isolado (Etapa 3)
Um visualizador interativo e autônomo foi gerado em:
👉 [design-preview.html](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/design-preview.html)

Contém:
1. Swatches interativos com HEX e OKLCH
2. Miniaturas lado a lado de ambas as propostas com alternância via botões
3. Detalhe em tamanho real do bloco de números e botões de reserva
4. Painéis de foto com os novos scrims mostrando a imagem desobstruída e iluminada
5. Tabela de contraste com status de conformidade
6. Camada SVG de micro-ruído (*grain*) anti-banding
