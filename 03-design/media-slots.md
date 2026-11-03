# Registro de Media Slots & Status de Ativos — Pousada Eliiy Zita Pedro

**Data da Auditoria:** 01/11/2026  
**Projeto:** Pousada Eliiy Zita Pedro (Ubatumirim, Ubatuba/SP)

---

## 1. Showcase Interativo 01 / 03 ("Vivência Pé na Areia · Ubatumirim")

| Dobra / Slot | Ativo Mobile (<= 767px) | Ativo Desktop (> 767px) | Status & Observações |
|---|---|---|---|
| **[01] Enseada** | `enseada-mobile.webp` / `enseada-mobile.avif` (9:16 vertical) | `enseada.webp` / `enseada.avif` (16:9 horizontal) | **COMPLETO.** Imagens reais otimizadas em WebP e AVIF com picture responsivo. |
| **[02] Pátio ("Um pátio que se abre direto na areia")** | `patio2-m.mp4` (1.80 MB) / `patio2-m.webm` (1.81 MB) + poster `patio2-poster.webp` (40 KB) + fallback `patio-mobile.webp` | `patio.webp` / `patio.avif` (16:9 horizontal) | **PENDÊNCIA DESKTOP:** No mobile, vídeo vertical ativo e fluido via carregamento ocioso (idle/matchMedia). **Falta uma versão horizontal (16:9) gravada em vídeo para exibição de vídeo no desktop.** No momento o desktop mantém com sucesso a fotografia real tratada. |
| **[03] Sabores ("Sabores caiçaras servidos à beira-mar")** | `caicara-m.mp4` (1.75 MB) / `caicara-m.webm` (1.49 MB) + poster `caicara-poster.webp` (155 KB) + fallback `sabores-mobile.webp` | `sabores.webp` / `sabores.avif` (16:9 horizontal) | **PENDÊNCIA DESKTOP:** No mobile, vídeo vertical ativo e fluido via carregamento ocioso (idle/matchMedia). **Falta uma versão horizontal (16:9) gravada em vídeo para exibição de vídeo no desktop.** No momento o desktop mantém com sucesso a fotografia real tratada. |

---

## 2. Demais Mídias Centrais
- **Hero Slides (1, 2, 3):** Fotos panorâmicas no desktop (`hero-1`, `hero-2`, `hero-3`) e fotos verticais no mobile (`hero-*-mobile`), servidas via `<picture>` com AVIF/WebP.
- **Portal de Scroll (Seção 2B):** Imagem expansiva crepuscular `hero-crepusculo.webp`.
- **Vídeos dos Quartos:** Vídeos verticais reais comprimidos em `site/public/media/v/` com posters individuais.
- **Rodapé:** Base fotográfica `footer-crepusculo.webp` / `footer-crepusculo-mobile.webp`.
