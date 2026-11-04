import cv2
import os

files = {
    'hero1.jpg': 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero1.jpg',
    'hero.jpg': 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero.jpg',
    'hero2.jpg': 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero2.jpg',
    'hero3.jpg': 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero3.jpg',
    'quem-somos.webp': 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial/quem-somos.webp',
    'placeholder-bento-visita.webp': 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial/placeholder-bento-visita.webp'
}

for name, path in files.items():
    if os.path.exists(path):
        img = cv2.imread(path)
        if img is not None:
            print(f"{name}: shape={img.shape}")
        else:
            print(f"{name}: could not read with cv2")
    else:
        print(f"{name}: not found")
