import os
from PIL import Image

SRC_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\videos-img"
imgs = [f for f in os.listdir(SRC_DIR) if f.startswith("WhatsApp Image") and f.endswith(".jpeg")]

for im_name in imgs:
    im_path = os.path.join(SRC_DIR, im_name)
    im = Image.open(im_path)
    print(f"{im_name}: size={im.size}")
