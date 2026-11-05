import os
from PIL import Image

brand_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\public\brand"

# Let's inspect logo-preloader-oficial.png
img = Image.open(os.path.join(brand_dir, "logo-preloader-oficial.png"))
print("logo-preloader-oficial.png size:", img.size, "mode:", img.mode)

# Let's see if we have vector svg
svg_path = os.path.join(brand_dir, "logomark-icon.svg")
if os.path.exists(svg_path):
    with open(svg_path, "r", encoding="utf-8") as f:
        print("SVG snippet:", f.read()[:300])

svg_clean = os.path.join(brand_dir, "logomark-portal-clean.svg")
if os.path.exists(svg_clean):
    with open(svg_clean, "r", encoding="utf-8") as f:
        print("SVG clean snippet:", f.read()[:300])
