import os
from PIL import Image, ImageDraw, ImageFont

CONTACT_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\contato-videos-novos"
OUT_SHEETS_DIR = os.path.join(CONTACT_DIR, "sheets")
os.makedirs(OUT_SHEETS_DIR, exist_ok=True)

subdirs = [d for d in os.listdir(CONTACT_DIR) if os.path.isdir(os.path.join(CONTACT_DIR, d)) and d != "sheets"]

for sd in subdirs:
    sdir = os.path.join(CONTACT_DIR, sd)
    frames = sorted([f for f in os.listdir(sdir) if f.endswith(".jpg")])
    if not frames:
        continue
    
    # Criar grade 4 colunas x N linhas
    cols = 4
    rows = (len(frames) + cols - 1) // cols
    thumb_w, thumb_h = 320, 180
    
    sheet = Image.new("RGB", (cols * thumb_w, rows * thumb_h + 40), (20, 20, 20))
    draw = ImageDraw.Draw(sheet)
    draw.text((10, 10), f"Video: {sd} ({len(frames)} frames)", fill=(240, 240, 240))
    
    for idx, f in enumerate(frames):
        c = idx % cols
        r = idx // cols
        fpath = os.path.join(sdir, f)
        try:
            im = Image.open(fpath)
            # Cover crop to thumb_w x thumb_h
            im.thumbnail((thumb_w, thumb_h * 2))
            # Center crop
            im_cropped = Image.new("RGB", (thumb_w, thumb_h), (0, 0, 0))
            offset_x = max(0, (thumb_w - im.width) // 2)
            offset_y = max(0, (thumb_h - im.height) // 2)
            im_cropped.paste(im, (offset_x, offset_y))
            
            sheet.paste(im_cropped, (c * thumb_w, 40 + r * thumb_h))
            
            # Label
            draw.text((c * thumb_w + 5, 40 + r * thumb_h + 5), f, fill=(255, 215, 0))
        except Exception as e:
            print(f"Error {f}: {e}")
            
    sheet.save(os.path.join(OUT_SHEETS_DIR, f"{sd}_sheet.jpg"), "JPEG", quality=85)
    print(f"Sheet generated: {sd}")

print("Done all sheets.")
