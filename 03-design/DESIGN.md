# Sistema de Design & Tipografia — Pousada Eliiy Zita Pedro

**Data:** 28/10/2026  
**Auditor:** Agente 03 (Diretor de Arte e Design System)  
**Status:** Oficial V2

---

## 1. Análise Tipográfica Estrutural do Wordmark

O logotipo e o vetor oficial da marca (`wordmark-verde.svg` / `logo-navbar.svg`) foram submetidos a análise anatômica:

1. **Construção:** **Sem serifa (Sans-Serif)** com traços limpos e vértices retos.
2. **Caixa:** Caixa alta integral (`POUSADA ELIIY ZITA PEDRO`), transmitindo solidez e segurança.
3. **Proporções:** Largura ligeiramente expandida, com ritmo espacial arejado e generoso.
4. **Peso:** Medium a Semibold (~500 a 600), garantindo presença visual sem rigidez industrial.
5. **Veredito Estético:** A identidade não pede serifas aristocráticas clássicas (como `Cinzel` ou `Cormorant`, que remetem a joalherias romanas ou bancos suíços), nem tampouco fontes assépticas de painel de controle corporativo (como `Inter`, `Roboto` ou `Plus Jakarta Sans`). O tom da pousada é o **luxo rústico caiçara autêntico**: acolhedor, solar, despretensioso e de alta hospitalidade.

---

## 2. Tipografia Oficial do Projeto

### A. Títulos e Dobras de Impacto (Display, H1, H2, H3)
* **Família Selecionada:** **`Syne`**
* **Autor:** Lucas Descroix / Bonjour Monde
* **Licença:** **SIL Open Font License (OFL)** — Livre para uso comercial irrestrito via Google Fonts (`fonts.google.com/specimen/Syne`).
* **Justificativa de Diálogo com a Logo:** Em pesos Semibold/Bold (600/700) e especialmente em caixa alta nos subtítulos e seções, `Syne` reflete a mesma proporção ampla, aberturas generosas e personalidade costeira do wordmark da pousada. Ela confere uma assinatura editorial única, evitando os clichês previsíveis de sites gerados por IA.
* **Escala Tipográfica:**
  - `Hero H1`: `clamp(2.5rem, 5vw, 4.25rem)` | `font-weight: 700` | `line-height: 1.08` | `letter-spacing: -0.02em`
  - `Section H2`: `clamp(1.85rem, 3.5vw, 2.75rem)` | `font-weight: 600` | `line-height: 1.15`
  - `Eyebrow / Subtítulos`: `0.8125rem (13px)` | `font-weight: 600` | `text-transform: uppercase` | `letter-spacing: 0.12em`

### B. Corpo de Texto, Especificações Técnicas e UI (Body, Links, Botões)
* **Família Selecionada:** **`Epilogue`**
* **Autor:** Tyler Finck / Etcetera Type Co
* **Licença:** **SIL Open Font License (OFL)** — Livre para uso comercial irrestrito via Google Fonts (`fonts.google.com/specimen/Epilogue`).
* **Resultado Visual Auditado:** Na auditoria de tela (screenshots `specimen-desktop.png` e `specimen-mobile.png`), a `Epilogue` demonstrou calor humanista superior, com altura de x acolhedora, excelente ritmo de leitura em textos longos e desenho amigável em números ("15", "117"), caracteres especiais ("R$", "★") e no botão de WhatsApp. Ela substitui a proibida `DM Sans`, garantindo total conformidade com a nossa regra Anti-Slop.
* **Escala de Texto:**
  - `Body Base`: `1rem (16px)` | `line-height: 1.6` | `font-weight: 400`
  - `Body Lead`: `1.125rem (18px)` | `line-height: 1.55` | `font-weight: 400`
  - `Caption / Ficha Técnica`: `0.875rem (14px)` | `line-height: 1.5` | `font-weight: 500`
  - `Botão WhatsApp`: `0.9375rem (15px)` | `font-weight: 600` | `letter-spacing: 0.01em`

---

## 3. Cores Vetoriais Canônicas (Tokens CSS)

```css
:root {
  --color-primary: #077c37;        /* Verde Mata Canônico do SVG */
  --color-primary-dark: #1e3d34;   /* Verde Floresta Profundo */
  --color-ink-deep: #0e291e;       /* Tinta de leitura acessível */
  --color-cta-solar: #f59e0b;      /* Sol Caiçara / CTA WhatsApp */
  --color-sea-deep: #0284c7;       /* Azul Enseada Ubatumirim */
  --color-sand-parchment: #f8f5f0; /* Areia clara da praia */
  --color-canvas-fog: #fafbf9;     /* Fundo dominante off-white */
  --color-surface-white: #ffffff;  /* Cards e superfícies */
  --color-divider: #e2eae3;        /* Linhas de 1px discretas */
}
```

---

## 4. Regras de Componentização Visual
1. **Cards de Acomodação (Inspirados no Refero / Dialog):** Raio de curvatura suave de `24px` (`rounded-3xl`), sombra difusa elegante (`0 10px 30px -10px rgba(7, 124, 55, 0.08)`), micro-elevação de 220ms com `cubic-bezier(0.16, 1, 0.3, 1)` no hover desktop.
2. **Botões de Ação:** Raio generoso de `9999px` (pílula), cor primária solar `#f59e0b` com texto escuro `#0e291e`, transmitindo calor, segurança e convite imediato ao contato.
3. **Divisores Arquitetônicos:** Linhas de `1px` em `--color-divider` (`#e2eae3`), sem bordas pretas duras.
