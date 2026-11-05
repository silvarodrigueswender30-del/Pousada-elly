import os
from PIL import Image

brand_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\public\brand"
img = Image.open(os.path.join(brand_dir, "logo-preloader-oficial.png"))
print("bbox of logo-preloader-oficial.png:", img.getbbox())
