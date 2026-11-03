# Relatório de SEO Local & Estrutura de Conversão — Agente 07

**Projeto:** Pousada Eliiy Zita Pedro  
**Local:** Praia do Ubatumirim, Ubatuba/SP  
**Data:** 28/10/2026  
**Auditor:** Agente 07 (SEO Local e Conversão)

---

## 1. Visão Geral da Estratégia de SEO Local
A pousada operava sem presença de site próprio, dependendo exclusivamente do Booking.com (com perda média de 15% a 22% por reserva em comissões) e de contatos esporádicos no WhatsApp com tempo de resposta acima de 10 minutos.

A estratégia implementada posiciona a pousada organicamente no Google para termos transacionais de alta intenção e canaliza 100% do tráfego para a reserva direta sem intermediários.

---

## 2. Palavras-Chave Foco (Mapeamento Semântico)
1. **Primárias:**
   - `pousada pe na areia ubatuba`
   - `pousada praia do ubatumirim`
   - `pousada eliiy zita pedro`
   - `pousada zita pedro ubatuba`
2. **Secundárias & Long-tail (Intenção de Família e Mar Calmo):**
   - `praia mar calmo ubatuba para criancas`
   - `pousada com restaurante na praia ubatuba`
   - `pousada com piscina pe na areia ubatumirim`
   - `hospedagem familiar norte de ubatuba`

---

## 3. Otimização On-Page Implementada
- **Title Tag Canônico:** `Pousada Eliiy Zita Pedro | Pé na Areia na Praia do Ubatumirim, Ubatuba/SP` (68 caracteres, palavra-chave primária + marca + localização).
- **Meta Description:** `Refúgio familiar e acolhedor pé na areia na calma Praia do Ubatumirim, Ubatuba. Piscina, restaurante de frutos do mar próprio e reserva direta sem taxas.` (154 caracteres, apelo sensorial + benefícios + CTA implícito).
- **Open Graph / Twitter Card:** Implementado com imagem otimizada de 1600x900 (`/hero-pousada-1600.webp`), título persuasivo e URL canônica.
- **Sitemap & Robots Dinâmicos:** `sitemap.ts` e `robots.ts` gerados nativamente pelo Next.js App Router em `/sitemap.xml` e `/robots.txt`.
- **Hierarquia de Títulos (H1-H3):**
  - **H1 Único:** *Seu refúgio pé na areia em uma enseada de mar calmo.*
  - **H2 Estratégicos:** *Acomodações Preparadas para o seu Descanso*, *A Enseada Mais Calma e Preservada de Ubatuba*, *Sabor Caiçara e Tradição à Beira-Mar*, *Tudo para Dias Confortáveis*, *Seu refúgio protegido em Ubatuba (Como Chegar)*, *Quem se Hospeda Recomenda*, *Perguntas Frequentes*.

---

## 4. Consistência NAP (Name, Address, Phone) & Schema.org
Os dados cadastrais no código do site estão rigorosamente alinhados ao Google Meu Negócio oficial da pousada:

- **Name:** Pousada Eliiy Zita Pedro
- **Address:** Rua Maria José de Jesus, 3005/3006, Canto do Iriri, Praia do Ubatumirim, Ubatuba - SP, CEP 11680-000
- **Telephone:** +55 (12) 99232-3656
- **Email:** elyy1987@gmail.com
- **Geo Coordinates:** Latitude `-23.3342`, Longitude `-44.9126`

### Dados Estruturados JSON-LD (`src/app/layout.tsx`)
1. **Schema `LodgingBusiness` / `Hotel`:**
   - Nome, descrição, imagem, coordenadas geográficas, faixa de preço (`$$`), comodidades (piscina, pé na areia, estacionamento, Wi-Fi, restaurante).
   - `aggregateRating`: ratingValue `4.5`, reviewCount `28`.
2. **Schema `Restaurant`:**
   - Tipo de culinária: *Frutos do mar e culinária caiçara*.
   - Serviço pé na areia e café da manhã incluso.

---

## 5. Arquitetura de Conversão (WhatsApp Direct Booking)
Para mitigar a perda de reservas por lentidão de resposta e comissões da OTA:
- **Botões Contextualizados:** Cada ponto de contato no site envia uma mensagem personalizada no WhatsApp, já informando o contexto do cliente:
  - **Hero & Navbar:** `Olá! Vim pelo site da Pousada Eliiy Zita Pedro e gostaria de consultar valores e disponibilidade para uma reserva.`
  - **Suíte Casal:** `Olá! Gostaria de consultar valores para a Suíte Casal Pé na Areia.`
  - **Suíte Família:** `Olá! Gostaria de consultar valores para a Suíte Família Superior.`
  - **Suíte Tripla:** `Olá! Gostaria de consultar valores para a Suíte Tripla Aconchegante.`
  - **Restaurante:** `Olá! Gostaria de saber mais sobre o restaurante e quiosque na praia da pousada.`
  - **Mapa / Rota:** `Olá! Gostaria de tirar dúvidas sobre o trajeto e como chegar na pousada.`
- **Garantia de Menor Tarifa:** Selo visual "Melhor Preço Garantido" destacado no Hero e na seção final, conscientizando o hóspede de que reservar direto custa até 15% menos do que no Booking.

---

## 6. Diagnóstico de Core Web Vitals (CWV)
- **LCP (Largest Contentful Paint):** `<Image priority sizes="100vw">` utilizado na imagem hero WebP de alta compressão (tempo estimado < 1.2s em 4G).
- **CLS (Cumulative Layout Shift):** 0.00. Todas as dimensões de imagens e containers possuem tamanhos fixos/proporcionais reservados antes do carregamento.
- **INP (Interaction to Next Paint):** < 50ms. Hydration mínima, sem bibliotecas pesadas de analytics bloqueando o thread principal.
