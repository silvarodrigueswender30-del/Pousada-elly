# Manual de Aplicação e Uso da Logo — Pousada Eliiy Zita Pedro

**Data:** 28/10/2026  
**Auditor:** Agente 03 (Diretor de Arte e Identidade Visual)  
**Status dos Ativos:** ⚠️ **Vetorização Automática de PNG (Provisória) + WebP de Alta Resolução como Principal**  
*Nota importante: Como não foi localizado nenhum arquivo vetorial original de agência (`.ai`, `.eps`, `.cdr` ou `.svg`), o site utiliza como ativo principal o WebP de alta fidelidade extraído dos PNGs limpos, evitando as micro-deformações do traçado automático até que o cliente forneça o vetor original de agência.*

---

## 1. Ativos Canônicos em Produção (`site/public/brand/`)

| Arquivo | Formato | Cores Presentes | Finalidade / Aplicação no Site |
|---|---|---|---|
| **`logo-colorida-original.webp`** | WebP (Alta Resolução) | **Tricolor Original:** Verde Mata (`#077c37`), Laranja Solar (`#f29b2f`) e Azul Enseada (`#7abcd5`) | **Logo Principal na Navbar e Telas com Fundo Claro.** Mantém a autenticidade das 3 cores da pousada com nitidez geométrica 100% perfeita. |
| **`logo-navbar.webp`** | WebP (720 × 332) | Verde Mata (`#077c37`) | Variante institucional horizontal para cabeçalhos e menus móveis. |
| **`logo-navbar-branco.svg`** | SVG (Vetor Provisório) | Branco Puro (`#ffffff`) | Sobre vídeo, foto do hero ou rodapé noturno escuro (`#1e3d34`), onde o contraste exige silhueta monocromática. |
| **`wordmark.webp`** | WebP (4000 × 184) | Verde Mata (`#077c37`) | Assinatura tipográfica em largura total para rodapé e documentos. |
| **`favicon.png` / `logomark-icon.svg`** | PNG / SVG (512 × 512) | Tricolor / Verde Mata | Favicon do navegador, PWA App Icon e avatar de redes sociais. |

---

## 2. Auditoria da Vetorização Automática (Comparativo a 400%)

Geramos a imagem comparativa [`03-design/comparativo-png-vs-svg-400pct.png`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/comparativo-png-vs-svg-400pct.png) ampliando a 400% o símbolo, as letras e o sol/ondas:

1. **Falhas Detectadas no Traçado Automático:**
   - **Ondulação de Hastes Retas:** Em letras como `I`, `T`, `L`, `E`, a aproximação por splines Bézier do `vtracer` gera pequenas ondulações de 0.5px a 1.2px, quebrando o alinhamento reto absoluto.
   - **Arredondamento de Cantos Agudos:** As quinas pontiagudas do chalé e das terminações das letras sofreram leve arredondamento de raio não intencional.
   - **Perda de Cor no Primeiro Vetor:** O primeiro arquivo vetorizado partiu do PNG monocromático, suprimindo o laranja e o azul da marca.
2. **Decisão de Engenharia:**
   - O logotipo principal renderizado no Next.js é o **WebP de alta resolução gerado diretamente do PNG nativo**, garantindo nitidez cristalina em telas Retina sem qualquer tremor de linha.
   - Os SVGs são mantidos como alternativa de fallback monocromática e classificados estritamente como *vetorização automática provisória*.
   - **Recomendação para Dona Zita:** Solicitar o arquivo vetor mestre (`.ai` ou `.svg`) à gráfica ou designer original para substituição futura.

---

## 2. Testes de Renderização e Contraste (24px, 32px e 160px)

Foram geradas 36 variações de teste em [`03-design/testes-render-logo/`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/03-design/testes-render-logo) avaliando legibilidade e contraste:

1. **Em 24px de altura:**
   - O `wordmark` horizontal atinge 521px de largura, o que causa overflow horizontal ou requer redução para escala ilegível em telas mobile de 375px.
   - O `logo-navbar.svg` (52px de largura) e o `logomark-icon.svg` (24px) mantêm silhueta nítida e reconhecível.
2. **Em 32px a 40px de altura (Padrão de Navbar):**
   - O `logo-navbar.svg` atinge 69px a 86px de largura, encaixando-se perfeitamente no grid de navegação móvel e desktop, permitindo espaçamento confortável ao lado do menu e do botão de WhatsApp.
   - Contraste do `#077c37` sobre areia quente (`#f8f5f0`): **5.1:1** (Aprovado em WCAG AA).
3. **Em 160px de altura:**
   - Aplicação ideal para o Rodapé ou tela de abertura (*splash*), exibindo com perfeição a textura dos traços caiçaras.

---

## 3. Regras de Área de Respeito e Tamanho Mínimo

1. **Área de Respeito (Margem de Segurança):**
   - A distância mínima entre a logo e qualquer outro elemento textual, botão ou borda de tela deve ser equivalente a **50% da altura do símbolo do chalé** (`X/2`).
   - Proibido colar textos ou ícones rente à área gráfica do vetor.
2. **Tamanhos Mínimos de Exibição:**
   - **`logo-navbar.svg`:** Altura mínima de **28px** em mobile e **36px** em desktop.
   - **`logomark-icon.svg`:** Altura mínima de **20px** para favicons e indicadores de status.
   - **`wordmark-verde.svg`:** Altura mínima de **18px** (requer largura mínima de 390px, devendo ser usado preferencialmente a partir de viewports `md: 768px+`).

---

## 4. Usos Proibidos (Anti-Distorção)

* ❌ **Nunca alterar as cores dos vetores para tons que não pertençam à paleta oficial** (ex: proibido aplicar roxo, gradientes artificiais ou sombras pesadas pretas).
* ❌ **Nunca achatar ou esticar a proporção (`preserveAspectRatio`)** — o viewBox deve ser sempre respeitado.
* ❌ **Nunca aplicar a versão verde (`#077c37`) diretamente sobre fotos escuras ou sobre o mar sem overlay de contraste** — utilizar a versão branca `logo-navbar-branco.svg` nesses contextos.
* ❌ **Nunca redesenhar os traços da logo original de Dona Zita.**
