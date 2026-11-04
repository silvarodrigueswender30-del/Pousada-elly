import os
from PIL import Image

def summarize_img(path):
    im = Image.open(path).convert('RGB')
    stat = im.resize((1, 1)).getpixel((0, 0))
    print(f"{os.path.basename(path):35s}: size={im.size}, avg_color={stat}")

imgs = [
    'chale-master-15p-1.webp', 'chale-master-15p-2.webp', 'chale-master-15p-3.webp', 'chale-master-15p-4.webp',
    'chale-grande-10p-1.webp', 'chale-grande-10p-2.webp', 'chale-grande-10p-3.webp', 'chale-grande-10p-4.webp',
    'chale-quinteto-5p-1.webp', 'chale-quinteto-5p-2.webp', 'chale-quinteto-5p-3.webp', 'chale-quinteto-5p-4.webp',
    'chale-quadruplo-4p-1.webp', 'chale-quadruplo-4p-2.webp', 'chale-quadruplo-4p-3.webp', 'chale-quadruplo-4p-4.webp',
    'quarto-card-1.webp', 'quarto-card-2.webp', 'quarto-card-3.webp',
    'booking-quarto-cama-madeira.webp', 'booking-quarto-jardim.webp', 'booking-varanda-panoramica.webp', 'booking-vista-mar-coqueiros.webp'
]

dir_path = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos'
for img in imgs:
    p = os.path.join(dir_path, img)
    if os.path.exists(p):
        summarize_img(p)
