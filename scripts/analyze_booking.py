import os
from PIL import Image

booking_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img'
for f in sorted(os.listdir(booking_dir)):
    if f.endswith(('.jpg', '.webp', '.png')):
        p = os.path.join(booking_dir, f)
        im = Image.open(p).convert('RGB')
        # sample some colors to get an idea
        colors = im.resize((3, 3))
        pixels = list(colors.getdata())
        avg_r = sum(p[0] for p in pixels)//9
        avg_g = sum(p[1] for p in pixels)//9
        avg_b = sum(p[2] for p in pixels)//9
        print(f"{f:18s} rgb=({avg_r:3d},{avg_g:3d},{avg_b:3d})")
