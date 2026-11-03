# Notas de Desenvolvimento — Agente 04 (Pousada Eliiy Zita Pedro)

## 1. Stack e Arquitetura
- **Framework:** Next.js 15.5.28 (App Router, Server & Client Components otimizados)
- **UI & Runtime:** React 19, React-DOM 19
- **Linguagem:** TypeScript 5.7.3 com verificação estrita
- **Estilização:** Tailwind CSS v4 com variáveis CSS semânticas (`globals.css`) extraídas rigorosamente da logo
- **Tipografia:** `Plus_Jakarta_Sans` via `next/font/google` com display swap e subconjunto latino
- **Mapeamento:** MapLibre GL JS (Client Component dinâmico com lazy loading) + tiles abertos CARTO Positron (sem exigência de chave de API privada paga)
- **Ícones:** Lucide React + SVGs customizados (Instagram e pino de mapa com a identidade da pousada)

## 2. Componentes Criados (`site/src/components/`)
1. `Navbar.tsx`: Navbar flutuante com glassmorphism (`backdrop-blur-md`), logo oficial da pousada, links de ancoragem suave, botão WhatsApp CTA no desktop e gaveta responsiva móvel acessível.
2. `Hero.tsx`: Ponto focal cinematográfico com foto real em alta definição da praia (`hero-pousada-1600.webp`), badge de localização geográfica, headline de alto impacto ("Pé na areia onde o mar não tem ondas"), micro-prova ("4.5 estrelas no Google") e botões duplos de conversão.
3. `MetricsBar.tsx`: Barra de números inspirada na referência Zendesk (grid minimalista de 1px com divisores elegantes): 0 metros da areia, 4.5★ no Google, 100% culinária caiçara, 0% taxas de intermediários.
4. `Experience.tsx`: Apresentação editorial da Praia do Ubatumirim e do refúgio calmo, com cards de alto contraste e tags de benefícios.
5. `Suites.tsx`: Vitrine de acomodações com cards Dialog-style (raio de 24px, sombras refinadas, badges de comodidades) e botão de consulta direta com mensagem WhatsApp pré-configurada por quarto.
6. `Restaurant.tsx`: Seção dedicada à gastronomia caiçara, quiosque na areia e café da manhã incluso, estimulando o consumo in-loco e estadias completas.
7. `Amenities.tsx`: Grid de comodidades essenciais (Piscina à beira-mar, Wi-Fi Starlink, Estacionamento privativo, Atendimento dos proprietários, Espaço verde e pet-friendly).
8. `InteractiveMap.tsx`: Mapa interativo MapLibre GL JS centrado nas coordenadas da pousada (-23.3378, -44.9125), pino SVG verde e laranja animado com pulso suave, card flutuante em vidro com endereço, botão "Como Chegar" direto no Google Maps e botão WhatsApp. Inclui tratamento de erro e fallback gracioso.
9. `Testimonials.tsx`: Depoimentos reais de hóspedes extraídos do Google Meu Negócio, com estrelas, data e tipo de viagem (família, casal).
10. `FAQ.tsx`: Accordion interativo tratando as principais objeções de compra (mar calmo para crianças, acesso pela rodovia/areia, política de cancelamento, reserva direta vs Booking).
11. `FinalCTA.tsx`: Dobra final de conversão com destaque para economia de até 15% reservando direto pelo WhatsApp.
12. `Footer.tsx`: Rodapé com NAP canônico unificado (Name, Address, Phone), links de navegação, horários de atendimento e copyright.

## 3. Conformidade Técnica e Build
- **Build Status:** Compilado com sucesso via `npm run build` (Exit code 0).
- **SEO & Metadados:** `metadataBase` configurado, Open Graph 1600x900, Twitter Cards e JSON-LD Schema.org (`LodgingBusiness` e `Restaurant`) embutido no `<head>`.
- **Acessibilidade:** Textos de botões acessíveis, rótulos ARIA em links de ícone, foco visível e suporte a `prefers-reduced-motion`.
