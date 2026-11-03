# Especificação de Motion e Interação — Agente 05

**Projeto:** Pousada Eliiy Zita Pedro  
**Conceito:** Sensorial, Calmo e Refinado (Inspirado nas referências BelArosa Chalet, Dialog e Apple Design Foundations)

---

## 1. Princípios de Movimento
1. **Intencionalidade e Leveza:** Nenhum elemento se move sem propósito comunicativo (orientação, foco ou feedback de ação).
2. **Timing Natural:** Microinterações mantidas entre 150ms e 250ms com curva `cubic-bezier(0.16, 1, 0.3, 1)` (snappy & natural). Animações de contexto (como o mapa) utilizam 1.8s progressivo.
3. **Respeito a `prefers-reduced-motion`:** Todas as transformações espaciais, pulsos contínuos e zoom-in são desativadas ou reduzidas a `opacity: 1` instantâneo quando solicitado pelo sistema do usuário.
4. **Performance 60 FPS:** Uso estrito de `transform` e `opacity` acelerados por GPU (`will-change` pontual), sem repaints de layout.

---

## 2. Tabela de Especificações de Motion

| Elemento / Componente | Gatilho | Propriedades Animadas | Duração | Easing | Motivo / UX | Fallback (`prefers-reduced-motion`) |
|---|---|---|---|---|---|---|
| **Navbar (Pill Flutuante)** | Scroll > 20px | `backdrop-filter`, `background-color`, `box-shadow` | 200ms | `ease-out` | Transição imperceptível de estado flutuante para contraste com o conteúdo que passa por baixo | Fundo sólido opaco imediato |
| **Menu Mobile (Gaveta)** | Clique no Hambúrguer | `opacity`, `transform: translateY` | 220ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Apresentação clara das opções de navegação sem travar o toque | Fade simples sem translação |
| **Hero (Entrada de Conteúdo)** | Page Load | `opacity`, `transform: translateY(16px -> 0)` | 400ms (stagger 80ms) | `cubic-bezier(0.16, 1, 0.3, 1)` | Hierarquia visual: primeiro o selo de localização, depois o H1, depois os CTAs | `opacity: 1` imediato |
| **Botões Primários (WhatsApp / Reserva)** | Hover / Touch | `transform: scale(1.02)`, `box-shadow` | 180ms | `ease-out` | Confirmação tátil de affordance e interatividade | Sem escala, apenas sutil troca de tom |
| **Botão Flutuante WhatsApp (Floating Action)** | Inicial / Contínuo | `transform: translateY(-2px)`, leve sombra solar | 250ms hover | `ease-out` | O botão que mais converte precisa de presença perceptível, sem ser agressivo | Fixo estático |
| **Cards de Suítes (Dialog Style)** | Hover | `transform: translateY(-4px)`, `box-shadow` | 220ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Percepção de profundidade física (elevação suave do card) | Sem elevação |
| **Mapa Interativo (MapLibre)** | Scroll In-View (20% visível) | `map.flyTo` (zoom 12.5 -> 15.2, centro `[-44.9126, -23.3342]`) | 1800ms | `cubic-bezier(0.25, 1, 0.5, 1)` | Sensação cinematográfica de "chegada" à Praia do Ubatumirim | Renderizado diretamente em zoom 15.2 |
| **Pino do Mapa (Ícone da Marca)** | Carregamento do Mapa | Pulso de anel verde (`ping-slow`: escala 1 -> 2.2, opacidade 0.4 -> 0) | 2.8s infinito | `cubic-bezier(0, 0, 0.2, 1)` | Identificação visual imediata da posição exata da pousada na orla | Anel estático com opacidade fixa |
| **Card Flutuante do Mapa** | Entrada pós-zoom | `opacity`, `transform: translateY(12px -> 0)` | 300ms | `ease-out` | Entrega contextual das opções de navegação (Como chegar / WhatsApp) | Apresentação imediata |
| **Accordion do FAQ** | Clique na Pergunta | `grid-template-rows: 0fr -> 1fr`, `opacity` | 200ms | `ease-out` | Abertura fluida da resposta sem salto abrupto de página | Abertura instantânea |

---

## 3. Verificação de Acessibilidade
- Classe global `motion-reduce:transition-none` e `motion-reduce:animate-none` aplicada no CSS.
- Efeito sonoro: nenhum (zero poluição sonora).
- Auto-play: não há vídeos sem consentimento ou com som.
