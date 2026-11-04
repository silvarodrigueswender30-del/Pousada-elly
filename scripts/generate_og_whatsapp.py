import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

project_root = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro"
brand_dir = os.path.join(project_root, "site", "public", "brand")
media_dir = os.path.join(project_root, "site", "public", "media")
app_dir = os.path.join(project_root, "site", "src", "app")

# Let's inspect logo-preloader-completa-oficial.png and logo-preloader-hd.webp
logo_path = os.path.join(brand_dir, "logo-preloader-completa-oficial.png")
logo_img = Image.open(logo_path).convert("RGBA")
print("logo_preloader_completa bbox:", logo_img.getbbox(), "size:", logo_img.size)

# Create 1200x630 canvas
W, H = 1200, 630

# Background: Sophisticated warm sand #f8faf8 to #f5efe6 gradient or clean solid #f8faf8 with a refined caiçara border
card = Image.new("RGB", (W, H), (248, 250, 248))
draw = ImageDraw.Draw(card)

# Delicate subtle top and bottom accent lines (#0a301a with low opacity or thin #f29b2f)
# Elegant border: 1px subtle #e2dcd2 border with 16px margin
border_box = [20, 20, W - 20, H - 20]
draw.rectangle(border_box, outline=(225, 230, 225), width=2)

# Small corner accent lines or elegant caiçara tag
# Let's crop and resize the logo to be centered and prominent
# Crop transparent margins from logo
bbox = logo_img.getbbox()
if bbox:
    logo_cropped = logo_img.crop(bbox)
else:
    logo_cropped = logo_img

# Target width for logo in the 1200x630 card: ~720px wide
target_w = 680
target_h = int(logo_cropped.height * (target_w / logo_cropped.width))
logo_resized = logo_cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Center the logo horizontally and slightly above vertical center to allow for subtitle
logo_x = (W - target_w) // 2
logo_y = 150

# Paste logo using alpha mask
card.paste(logo_resized, (logo_x, logo_y), logo_resized)

# Subtitle / Geo information below logo:
# "PRAIA DO UBATUMIRIM • UBATUBA / SP • PÉ NA AREIA"
# "Enseada de Mar Calmo • Chalés com Cozinha & Suítes"
try:
    font_main = ImageFont.truetype("arial.ttf", 26)
    font_sub = ImageFont.truetype("arial.ttf", 20)
except Exception:
    font_main = ImageFont.load_default()
    font_sub = ImageFont.load_default()

text_1 = "PRAIA DO UBATUMIRIM  •  UBATUBA / SP  •  PÉ NA AREIA"
text_2 = "Hospedagem & Gastronomia Caiçara  |  Reserva Direta sem Taxas"

# Draw text centered
bbox1 = draw.textbbox((0, 0), text_1, font=font_main)
t1_w = bbox1[2] - bbox1[0]
t1_x = (W - t1_w) // 2
t1_y = logo_y + target_h + 40
draw.text((t1_x, t1_y), text_1, font=font_main, fill=(10, 48, 26)) # #0a301a

# Small divider line with gold accent #f29b2f
div_w = 120
div_x1 = (W - div_w) // 2
div_x2 = div_x1 + div_w
div_y = t1_y + 44
draw.line([(div_x1, div_y), (div_x2, div_y)], fill=(242, 155, 47), width=3)

bbox2 = draw.textbbox((0, 0), text_2, font=font_sub)
t2_w = bbox2[2] - bbox2[0]
t2_x = (W - t2_w) // 2
t2_y = div_y + 20
draw.text((t2_x, t2_y), text_2, font=font_sub, fill=(100, 115, 105))

# Save outputs
og_whatsapp_path = os.path.join(media_dir, "og-whatsapp.jpg")
card.save(og_whatsapp_path, "JPEG", quality=92, optimize=True)
print(f"Saved: {og_whatsapp_path} ({os.path.getsize(og_whatsapp_path)} bytes)")

og_app_path = os.path.join(app_dir, "opengraph-image.jpg")
card.save(og_app_path, "JPEG", quality=92, optimize=True)
print(f"Saved: {og_app_path} ({os.path.getsize(og_app_path)} bytes)")

twitter_app_path = os.path.join(app_dir, "twitter-image.jpg")
card.save(twitter_app_path, "JPEG", quality=92, optimize=True)
print(f"Saved: {twitter_app_path} ({os.path.getsize(twitter_app_path)} bytes)")
