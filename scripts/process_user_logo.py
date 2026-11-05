import os
from PIL import Image

uploaded_img_path = r"C:/Users/Teste/.gemini/antigravity/brain/0a49e000-9eef-45cd-bfc6-39f403fc57b4/.user_uploaded/media_1793835941885_6f500879.png"
img = Image.open(uploaded_img_path)
print("Uploaded image:", img.size, img.mode)

# Check bbox
# The background looks like light green/gray/white #f8faf8 or similar
# Let's crop the actual emblem
bbox = img.getbbox()
print("bbox:", bbox)

# Let's also check public/brand/logomark-portal-clean.svg, simbolo-preloader-oficial.webp, etc.
brand_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\public\brand"
for f in ["simbolo-preloader-oficial.webp", "logo-preloader-oficial.png", "logo-colorida-original.webp", "favicon-192x192.webp"]:
    p = os.path.join(brand_dir, f)
    if os.path.exists(p):
        im = Image.open(p)
        print(f, im.size, im.mode)
