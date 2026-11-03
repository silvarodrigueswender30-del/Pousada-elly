# Tabela de Afirmações Factuais & Fontes de Verificação — Pousada Eliiy Zita Pedro

**Data:** 29/10/2026  
**Objetivo:** Rastrear cada informação publicada na Home, nas 8 rotas de acomodação e no Rodapé, distinguindo fatos documentalmente comprovados do que está marcado como `[A CONFIRMAR com Dona Zita]`.

---

## 1. Matriz de Afirmações e Fontes

| Item / Afirmação no Site | Status no Site Publicado | Fonte Documental Exata | Como Aparece no Site / Ação Tomada |
|---|---|---|---|
| **Capacidade e divisão das 8 acomodações** (5 chalés c/ cozinha: 15p, 10p, 5p, 4p, 3p + 3 suítes s/ cozinha: 4p, 3p, 2p) | **CONFIRMADO** | Áudio oficial WhatsApp da Dona Zita (`WhatsApp Audio 2026-04-06 at 22.36.02.ogg`) | Exibido na Home e nas 8 rotas reais (`/acomodacoes/[slug]`). |
| **Cozinha privativa nos 5 chalés** (fogão, geladeira, pia em granito, utensílios básicos) | **CONFIRMADO** | Áudio oficial Dona Zita + Vídeos reais `v03`, `v04`, `v05`, `v17`, `v19` | Confirmado apenas para os 5 Chalés. Suítes informam claramente que não têm cozinha. |
| **Churrasqueira** ("chalé com churrasqueira") | **PARCIAL / A CONFIRMAR POR UNIDADE** | Áudio Dona Zita cita *"chalé com churrasqueira"* e vídeo `v02` mostra área de churrasqueira na pousada, mas não especifica se é individual em cada um dos 5 chalés ou compartilhada | Removido o rótulo "Churrasqueira Privativa" fixo; substituído por *"Churrasqueira na pousada — confirmar disponibilidade individual ou compartilhada com Dona Zita"* `[A CONFIRMAR]`. |
| **Climatização (Ar-condicionado vs. Ventilador)** por quarto | **PARCIAL / A CONFIRMAR POR UNIDADE** | Visível em unidades específicas (`IMG01` / vídeos), mas sem lista por unidade dos 8 quartos | Marcado na ficha de cada acomodação como *"Ventilação natural e climatização (confirmar equipamento específico da unidade no WhatsApp)"* `[A CONFIRMAR]`. |
| **Horário de Check-in (12:00 às 22:00) e Check-out (até 11:00)** | **CONFIRMADO** | Registro público da propriedade (`01-estrategia/auditoria-presenca-digital.md`) | Exibido na seção de Regras e nas rotas de quarto com indicação de flexibilidade via WhatsApp. |
| **Horário de silêncio noturno e política de som** | **[A CONFIRMAR com Dona Zita]** | Não consta horário fixo no áudio ou nos vídeos | Marcado explicitamente como `[A CONFIRMAR com Dona Zita]` na tabela de regras da Home e das rotas. |
| **Wi-Fi e Estacionamento** | **PARCIAL / A CONFIRMAR DETALHES** | Pátio interno amplo visível nos vídeos `v02` e `v04`; alcance de Wi-Fi por quarto e nº de vagas por chalé de 15p/10p não detalhados no áudio | Marcado na tabela da Home e das rotas com aviso para confirmar nº de vagas de carros para grupos grandes e sinal de Wi-Fi. |
| **Piscina com cascata, Capela com jardim e Campo gramado** | **CONFIRMADO** | Áudio Dona Zita (*"tem capela"*) + Vídeo drone `v02.mp4` mostrando piscina com cascata, capela e gramado | Exibido sem inventar nomes de santos, metragens ("1.000 m²" removido) ou pacotes de eventos. |
| **Restaurante próprio e quiosques pé na areia** | **CONFIRMADO** | Áudio Dona Zita + Vídeo `v02.mp4` (salão de restaurante e guarda-sóis na praia) | Exibido na Seção 04 da Home. Cardápio do dia e horários marcados para consulta no local/WhatsApp. |
| **Nota no Google Maps: 4,3 ★ (117 avaliações)** | **CONFIRMADO** | Verificação direta no navegador em 28/10/2026 (`06-qa/evidencias-v2/google-maps-nota-real.png`) | Exibido na Barra de Métricas e na Seção 09 com link direto para a ficha do Google Maps. |
| **Endereço físico:** Rua Maria José de Jesus, 3006 — Praia do Ubatumirim, Ubatuba - SP | **CONFIRMADO** | Ficha oficial no Google Maps (`-23.3486585, -44.928734`) | Exibido no Rodapé, na seção Como Chegar e no JSON-LD. |
| **E-mail pessoal (`elyy1987@gmail.com`)** | **REMOVIDO DO PÚBLICO — [A CONFIRMAR]** | Constava apenas em cadastro antigo, sem confirmação de uso público pela Dona Zita | **Removido** do Rodapé (`Footer.tsx`) e do Schema JSON-LD (`layout.tsx`). Listado para confirmação com Dona Zita. |
| **CEP (`11680-000`)** | **REMOVIDO DO PÚBLICO — [A CONFIRMAR]** | `11680-000` é o CEP geral do centro de Ubatuba; a região norte/Ubatumirim possui faixa postal própria (`11698-xxx`) | **Removido** do Rodapé (`Footer.tsx`) e do Schema JSON-LD (`layout.tsx`) até confirmação do CEP exato pela Dona Zita. |

---

## 2. Lista Consolidada do Que Pedir / Confirmar com a Dona Zita

1. **Vetor original da Logo (`.CDR`, `.AI`, `.EPS` ou `.PDF`):** Solicitar à Dona Zita ou à gráfica que produziu a placa/camisetas.
2. **Vídeos verticais (10s a 15s) das 2 suítes restantes:**
   - **Suíte Tripla (até 3 pessoas)**
   - **Suíte Casal (até 2 pessoas)**
3. **Autorização e originais das fotos do Booking:** Confirmar se as 26 fotos na galeria do Booking foram tiradas pela família e se ela autoriza o uso no site.
4. **Churrasqueira e Ar-Condicionado por unidade:** Confirmar quais dos 5 chalés possuem churrasqueira individual na própria varanda e quais unidades contam com ar-condicionado instalado.
5. **E-mail e CEP no Rodapé:** Confirmar se deseja exibir algum e-mail de contato no rodapé do site e qual o CEP exato utilizado para correspondência na Rua Maria José de Jesus, 3006.
6. **Correção de grafia no Google Meu Negócio:** Orientar a Dona Zita a corrigir `Pousada e Restaurante EIiiy Zita Pedro` (com "I" maiúsculo) para `Pousada e Restaurante Eliiy Zita Pedro` no painel do Google.
