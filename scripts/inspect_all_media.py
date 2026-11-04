import os
from PIL import Image

pub_media = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media'
for root, dirs, files in os.walk(pub_media):
    for f in files:
        if f.endswith(('.webp', '.png', '.jpg')):
            path = os.path.join(root, f)
            try:
                im = Image.open(path)
                print(f"{path} -> {im.size}, mode={im.mode}")
            except Exception as e:
                pass
