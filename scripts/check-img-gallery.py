import os
from PIL import Image

p = r'C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\videos-img\img'
for f in os.listdir(p):
    fp = os.path.join(p, f)
    im = Image.open(fp)
    w, h = im.size
    aspect = round(w / h, 2)
    print(f"{f}: {w}x{h} (aspect {aspect})")
