import os
from PIL import Image

dir_editada = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada'
targets = ['saboresmobile.jpg', 'patio.jpg', 'piscina.jpg']

for t in targets:
    p = os.path.join(dir_editada, t)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{t}: size={im.size}, mode={im.mode}")
    else:
        print(f"{t} NOT FOUND")
