import os
from PIL import Image, ImageDraw

p = r'C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\videos-img\img'
imgs = sorted(os.listdir(p))

cols = 4
rows = (len(imgs) + cols - 1) // cols
thumb_w, thumb_h = 320, 180

sheet = Image.new("RGB", (cols * thumb_w, rows * thumb_h + 40), (20, 20, 20))
draw = ImageDraw.Draw(sheet)
draw.text((10, 10), "Fotos da Pousada (16:9 / 4:3)", fill=(240, 240, 240))

for idx, f in enumerate(imgs):
    c = idx % cols
    r = idx // cols
    fp = os.path.join(p, f)
    try:
        im = Image.open(fp)
        im.thumbnail((thumb_w, thumb_h))
        im_cropped = Image.new("RGB", (thumb_w, thumb_h), (0, 0, 0))
        offset_x = (thumb_w - im.width) // 2
        offset_y = (thumb_h - im.height) // 2
        im_cropped.paste(im, (offset_x, offset_y))
        sheet.paste(im_cropped, (c * thumb_w, 40 + r * thumb_h))
        draw.text((c * thumb_w + 5, 40 + r * thumb_h + 5), f, fill=(255, 215, 0))
    except Exception as e:
        print(f, e)

out_sheet = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\contato-videos-novos\sheet_img_gallery.jpg"
sheet.save(out_sheet, "JPEG", quality=85)
print(f"Sheet saved: {out_sheet}")
