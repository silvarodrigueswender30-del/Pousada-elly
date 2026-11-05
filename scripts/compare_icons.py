import os
from PIL import Image

brand_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\public\brand"
user_img_path = r"C:/Users/Teste/.gemini/antigravity/brain/0a49e000-9eef-45cd-bfc6-39f403fc57b4/.user_uploaded/media_1793835941885_6f500879.png"

# Inspect logo-preloader-oficial.png
img_brand = Image.open(os.path.join(brand_dir, "logo-preloader-oficial.png")).convert("RGBA")
bbox_brand = img_brand.getbbox()
print("brand bbox:", bbox_brand)
icon_brand = img_brand.crop(bbox_brand)
print("icon_brand size:", icon_brand.size)

# Inspect user uploaded image
img_user = Image.open(user_img_path).convert("RGBA")
print("user img size:", img_user.size)

# Save cropped icon to inspect
icon_brand.save(r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\scripts\test_icon.png")
