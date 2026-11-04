import os
from PIL import Image

p = r'C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\videos-img\img-quarto'
for f in os.listdir(p):
    im = Image.open(os.path.join(p, f))
    print(f, im.size)
