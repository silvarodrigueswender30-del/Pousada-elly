import re
import os

with open('PROJETOS/pousada-eliiy-zita-pedro/site/src/data/acomodacoes.ts', encoding='utf-8') as f:
    text = f.read()

acomodacoes_blocks = re.findall(r'slug:\s*"([^"]+)".*?fotos:\s*\[(.*?)\]', text, re.DOTALL)

for slug, fotos_block in acomodacoes_blocks:
    urls = re.findall(r'url:\s*"([^"]+)"', fotos_block)
    print(f"=== {slug} ({len(urls)} fotos) ===")
    for u in urls:
        print("  ", u)
