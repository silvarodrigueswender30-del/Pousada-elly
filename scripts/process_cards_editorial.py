import os
from PIL import Image

dir_editada = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada'
out_dir = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial'

targets = [
    ('saboresmobile.jpg', 'card-restaurante-sabores.webp'),
    ('patio.jpg', 'card-patio-brisa.webp'),
    ('piscina.jpg', 'card-piscina-cascata.webp'),
]

for src_name, dst_name in targets:
    src_path = os.path.join(dir_editada, src_name)
    dst_path = os.path.join(out_dir, dst_name)
    im = Image.open(src_path).convert('RGB')
    
    # We want a high resolution vertical 3:4 crop/fit (e.g. 1200x1600)
    w, h = im.size
    target_aspect = 3.0 / 4.0
    current_aspect = w / h
    
    if abs(current_aspect - target_aspect) > 0.05:
        if current_aspect > target_aspect:
            # Imagem é mais larga que 3:4 (ex: 16:9), crop nas laterais com centro
            new_w = int(h * target_aspect)
            left = (w - new_w) // 2
            im = im.crop((left, 0, left + new_w, h))
        else:
            # Imagem é mais alta que 3:4
            new_h = int(w / target_aspect)
            top = (h - new_h) // 2
            im = im.crop((0, top, w, top + new_h))
            
    im = im.resize((1200, 1600), Image.Resampling.LANCZOS)
    im.save(dst_path, 'WEBP', quality=90)
    size_kb = os.path.getsize(dst_path) / 1024
    print(f"Saved {dst_name}: size={im.size}, {size_kb:.1f} KB")
