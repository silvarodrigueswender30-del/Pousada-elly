import os
from PIL import Image

booking_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img'
for f in sorted(os.listdir(booking_dir)):
    if f.endswith(('.jpg', '.webp', '.png')):
        p = os.path.join(booking_dir, f)
        im = Image.open(p)
        print(f"{f:20s}: {im.size}, ratio={im.width/im.height:.2f}")
