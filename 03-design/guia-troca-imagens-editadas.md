# Guia Rápido — Como Trocar as Imagens Temporárias (Placeholders)

Todas as imagens da versão editorial (`arq.mp4`) estão centralizadas na pasta:
`PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial/`
e mapeadas no arquivo:
[`site/src/data/editorial-media.ts`](file:///c:/Users/Teste/Downloads/MEGA-ESTRUTURA-AGENTE-SITE/PROJETOS/pousada-eliiy-zita-pedro/site/src/data/editorial-media.ts)

---

## 1. Imagens 2K que JÁ estão aplicadas (vindas de `02-referencias/videos-img/img-editada/`)
1. **`hero-crepusculo.webp` / `.avif`** (vinda de `hero.jpg`)
   - Onde aparece: **Seção 1 (Hero Slide 01 — Pé na Areia)** e **Seção 2 (Janela Expansível)**.
2. **`vista-terraco-baia.webp` / `.avif`** (vinda de `Edit_rooftop_photo_of_beach_31adf87f_2K.jpg`)
   - Onde aparece: **Seção 1 (Hero Slide 02 — Baía & Mar Calmo)** e **Seção 3 (Showcase Pinado `[01]`)**.
3. **`praia-restaurante-capela.webp` / `.avif`** (vinda de `Editing_photo_of_beach_chapel_d3db57ae_2K.jpg`, com o texto distorcido na parede da capela removido)
   - Onde aparece: **Seção 1 (Hero Slide 03 — Chalés & Gastronomia)** e **Seção 3 (Showcase Pinado `[02]`)**.

---

## 2. Imagens Temporárias (Placeholders) para você substituir quando terminar de criar
Para trocar qualquer uma das imagens temporárias abaixo sem precisar mexer em código, basta salvar a sua nova imagem com o mesmo nome dentro de `site/public/media/editorial/` (ou rodar `python scripts/processar_img_editada_editorial.py`):

| Arquivo em `site/public/media/editorial/` | Seção onde aparece no site | Proporção recomendada |
| :--- | :--- | :--- |
| `placeholder-cena-03-restaurante.webp` | **Seção 3 (Showcase Pinado `[03]`):** Sabores caiçaras servidos à beira-mar | Horizontal `16:9` (`1920×1080` ou 2K) |
| `placeholder-cat-01-chales-master.webp` | **Seção 4 (Aba 01 do Seletor):** Chalés para Grandes Grupos (10 a 15 pessoas) | Horizontal `16:10` ou `16:9` |
| `placeholder-cat-02-chales-familia.webp` | **Seção 4 (Aba 02 do Seletor):** Chalés Família com Cozinha (4 a 5 pessoas) | Horizontal `16:10` ou `16:9` |
| `placeholder-cat-03-chale-triplo.webp` | **Seção 4 (Aba 03 do Seletor):** Chalé Compacto com Cozinha (3 pessoas) | Horizontal `16:10` ou `16:9` |
| `placeholder-cat-04-suites.webp` | **Seção 4 (Aba 04 do Seletor):** Suítes Pé na Areia (2 a 4 pessoas) | Horizontal `16:10` ou `16:9` |
| `placeholder-quem-somos.webp` | **Seção 6 (Quem Somos / A Pousada):** Foto com cantos arredondados e selo circular à esquerda | Vertical `4:5` (`1000×1250`) |
| `placeholder-bento-visita.webp` | **Seção 7 (Bento Grid Escuro):** Card direito *"Venha viver Ubatumirim pessoalmente"* | Horizontal `16:10` (`1400×875`) |
