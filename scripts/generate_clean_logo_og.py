import os
from PIL import Image, ImageOps

project_root = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro"
brand_dir = os.path.join(project_root, "site", "public", "brand")
media_dir = os.path.join(project_root, "site", "public", "media")
app_dir = os.path.join(project_root, "site", "src", "app")

# Load brand logo
img_brand = Image.open(os.path.join(brand_dir, "logo-preloader-oficial.png")).convert("RGBA")
bbox = img_brand.getbbox()
icon = img_brand.crop(bbox)
print(f"Original cropped icon: {icon.size}")

# Color of the background: clean #f8faf8 (exact preloader curtain background) or clean white #ffffff
# Looking at the user's uploaded image 2, the background is #f8faf8 / #fafafa
bg_color = (248, 250, 248) # #f8faf8

# 1. GENERATE 1200x630 (Standard OG 1.91:1)
W, H = 1200, 630
card_wide = Image.new("RGB", (W, H), bg_color)

# We want the icon to fit inside the central 630x630 square, so when cropped to 1:1 it looks amazing,
# and when displayed at 1200x630 it also looks prominent and balanced.
# Central square is [ (1200-630)/2 = 285 to 915 ]
# Inside this 630x630 area, let target width be ~520px
target_w_wide = 560
target_h_wide = int(icon.height * (target_w_wide / icon.width))
icon_wide = icon.resize((target_w_wide, target_h_wide), Image.Resampling.LANCZOS)

# Center in 1200x630
pos_x = (W - target_w_wide) // 2
pos_y = (H - target_h_wide) // 2
card_wide.paste(icon_wide, (pos_x, pos_y), icon_wide)

card_wide_path = os.path.join(media_dir, "og-whatsapp.jpg")
card_wide.save(card_wide_path, "JPEG", quality=95, optimize=True)
print(f"Saved: {card_wide_path} ({os.path.getsize(card_wide_path)} bytes)")

app_og_path = os.path.join(app_dir, "opengraph-image.jpg")
card_wide.save(app_og_path, "JPEG", quality=95, optimize=True)

app_twitter_path = os.path.join(app_dir, "twitter-image.jpg")
card_wide.save(app_twitter_path, "JPEG", quality=95, optimize=True)

# 2. GENERATE 800x800 SQUARE (1:1 - Ideal for WhatsApp Square Thumbnail)
S = 800
card_square = Image.new("RGB", (S, S), bg_color)
target_w_sq = 640
target_h_sq = int(icon.height * (target_w_sq / icon.width))
icon_sq = icon.resize((target_w_sq, target_h_sq), Image.Resampling.LANCZOS)

pos_sq_x = (S - target_w_sq) // 2
pos_sq_y = (S - target_h_sq) // 2
card_square.paste(icon_sq, (pos_sq_x, pos_sq_y), icon_sq)

card_sq_path = os.path.join(media_dir, "og-whatsapp-square.jpg")
card_square.save(card_sq_path, "JPEG", quality=95, optimize=True)
print(f"Saved: {card_sq_path} ({os.path.getsize(card_sq_path)} bytes)")

# Also save a png copy if needed
card_sq_png = os.path.join(media_dir, "og-whatsapp-square.png")
card_square.save(card_sq_png, "PNG", optimize=True)

print("Generated clean logo images for WhatsApp sharing!")
