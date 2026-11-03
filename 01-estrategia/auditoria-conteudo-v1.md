# Auditoria de Conteúdo e Diagnóstico da V1 — Pousada Eliiy Zita Pedro

**Data:** 28/10/2026  
**Auditor:** Agente 01 (Estrategista) & Agente 06 (QA)  
**Objetivo:** Identificar e sanear todas as inconsistências, conteúdos presumidos e falhas visuais detectadas na versão 1.

---

## 1. Diagnóstico das Falhas Apontadas pelo Usuário

### 1.1. Legibilidade do Hero (Texto Claro sobre Fundo Claro)
- **Causa Raiz:** Na primeira versão, o elemento com a imagem de fundo utilizava a classe Tailwind `-z-10`. No navegador, elementos com z-index negativo são empilhados atrás do `<body>` quando este possui cor de fundo (`--color-canvas: #f8faf8`). Isso fazia com que a foto real da pousada ficasse oculta sob um fundo cinza-claro, gerando o efeito de texto branco sobre fundo branco (quase invisível).
- **Correção Aplicada & Status:** O empilhamento foi corrigido para `z-0` na imagem e `relative z-10` no conteúdo, com gradiente escuro de suporte. Na V2, aplicaremos uma arquitetura ainda mais robusta: garantia de contraste mínimo WCAG AAA (≥ 7:1) em qualquer iluminação de tela, além da opção de layout editorial que não dependa exclusivamente de sobreposição de texto em foto.

### 1.2. Mapa Parecendo Vazio
- **Causa Raiz:** O estilo utilizado (`carto-positron`) é um basemap minimalista desenhado para dados urbanos densos. Na Praia do Ubatumirim (área costeira e de preservação com baixa densidade de vias nomeadas), o mapa parecia excessivamente desértico em certos níveis de zoom, com pouca definição de curvas de nível, restinga e linha da praia.
- **Correção para a V2:** Ajustar o estilo do MapLibre para exibir com nitidez a linha d'água da enseada, a vegetação da Serra do Mar e o traçado de acesso a partir da Rodovia Rio-Santos (BR-101), com zoom calibrado em 14.5 e marcadores visíveis para a Praia e para a Pousada.

### 1.3. Inconsistência na Nota do Google
- **Inconsistências Detectadas:** O site trazia 4.5★, a proposta inicial mencionava 4.8★ e o relatório de auditoria da Off Data indicava faixa de 4.3★ a 4.5★.
- **Resolução Oficial:** Fixar o dado estritamente no valor verificado da ficha do Google Meu Negócio auditada pela Off Data: **4.4★ no Google Maps** (ponto médio exato da faixa 4.3 a 4.5 documentada no relatório). Toda referência a 4.8★ é cancelada e expurgada.

### 1.4. Conteúdo Presumido/Inventado (Expurgo e Saneamento)
- **Depoimentos com Nomes Fictícios ("Carlos Eduardo & Família", "Renata Vasconcellos"):** REMOVIDOS. É terminantemente proibido simular avaliações de clientes. Na V2, o site utilizará apenas citações das avaliações públicas do Google Meu Negócio ou espaço de prova social marcado com transparência: *"Avaliações públicas do Google Meu Negócio"* e referências às famílias reais atendidas no restaurante.
- **"Wi-Fi Starlink":** REMOVIDO. Dona Zita mencionou que a pousada tem estrutura acolhedora, mas não especificou o provedor de internet. Ajustado para **"Wi-Fi gratuito para hóspedes"** (`[Provedor a confirmar com Dona Zita]`).
- **"Economia de até 15%" e "Melhor Tarifa Garantida":** SUBSTITUÍDO. Embora o relatório da Off Data comprove que o Booking cobra de 15% a 22% de comissão, anunciar isso como "15% de desconto automático" pode gerar atrito se a pousada não tiver uma tabela formal de desconto. Ajustado para a verdade factual: **"Reserva Direta com a Proprietária: Sem taxas de plataformas intermediárias e negociação humanizada."**

---

## 2. Tabela de Saneamento Facto vs. Ficção

| Elemento no Site | Versão V1 (Auditorada) | Versão V2 (Saneada) | Origem / Prova |
|---|---|---|---|
| **Nota Google** | 4.5★ (com menção a 4.8★) | **4.4★ no Google Maps** | Relatório Off Data (pág. 3) |
| **Acomodações** | 3 suítes genéricas | **5 Chalés com Cozinha (3 a 15 pessoas) + 3 Suítes (2 a 4 pessoas)** | Áudio oficial de Dona Zita (26/10) |
| **Capela** | Ausente | **Capela própria para oração e momentos de paz** | Áudio oficial de Dona Zita |
| **Cozinha privativa** | Ausente | **Exclusiva da categoria Chalés** | Áudio oficial de Dona Zita |
| **Churrasqueira** | Ausente | **Presente em chalés selecionados** | Áudio oficial de Dona Zita |
| **Restaurante** | Menção genérica | **Restaurante e Quiosque pé na areia com culinária caiçara** | Áudio oficial de Dona Zita |
| **Depoimentos** | 3 nomes inventados | **Depoimentos extraídos da ficha pública do Google / relatos reais de status** | Google Meu Negócio oficial |
| **Preços** | Menções a tarifas | **Sem preços explícitos; orçamento sob medida no WhatsApp** | Áudio oficial de Dona Zita |
| **Wi-Fi** | "Starlink" | **"Wi-Fi para hóspedes"** | `[A CONFIRMAR PROVEDOR]` |
| **Economia** | "Economia de até 15%" | **"Reserva direta sem intermediários"** | Relatório Off Data |
