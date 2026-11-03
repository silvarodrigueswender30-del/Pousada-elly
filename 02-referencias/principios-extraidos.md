# Princípios Extraídos de Design e Motion

Tabela mestra de princípios que os agentes de desenvolvimento e motion devem seguir na Pousada Eliiy Zita Pedro:

| Princípio | Origem Técnica | Onde se aplica no site | Como aplicar sem cópia literal |
|---|---|---|---|
| **Hero Audiovisual Imersivo** | Halfhelix (Link 4) | Hero principal (Dobra 1) | Vídeo em loop com mar calmo e natureza de Ubatumirim, `muted playsInline`, poster estático imediato e versão pausada com `prefers-reduced-motion`. |
| **Menu Flutuante e Logo em Destaque** | Dialog (Link 1) + Halfhelix (Link 4) | Navbar superior global | Container translúcido em pílula (`backdrop-blur-md`), logo oficial limpa à esquerda, links arejados e botão de WhatsApp à direita. |
| **Métricas com Rigor Arquitetônico** | Zendesk (Link 3) | Barra de Prova Social (Dobra 2) | Contadores grandes (68–74px) com contagem animada via `useSafeInView`, divididos por linhas finas de 1px. |
| **Cards Brancos de Borda Suave** | Dialog (Link 1) | Acomodações & Serviços | Cards brancos (`rounded-[24px]`) com micro-badges arredondadas (100px) e elevação sutil no hover (scale 1.01). |
| **Transições Rítmicas entre Seções** | BelArosa Chalet (Link 2) | Experiência Ubatumirim & Restaurante | Alternância harmoniosa entre fundos claros acolhedores e painéis mais profundos, com fade-up pausado (0.6s) e respiro visual. |
| **Mapa Minimalista Integrado** | MapLibre + CARTO + Padrão UX | Seção de Localização | Mapa minimalista claro CARTO Positron, pino SVG com o símbolo da casa/sol da logo da pousada, card flutuante em glassmorphism com botões de rota e WhatsApp. |
