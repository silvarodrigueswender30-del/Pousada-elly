import os
from PIL import Image

for name in ['chale-master-15p-1.webp', 'quarto-card-2.webp', 'quarto-card-3.webp', 'chale-grande-10p-1.webp']:
    p = os.path.join('PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos', name)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{name}: size={im.size}, mode={im.mode}")
