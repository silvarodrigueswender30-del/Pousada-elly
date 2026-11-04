import os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

def grade_and_save_webp(src_path, dest_webp):
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    target_aspect = 16.0 / 9.0
    current_aspect = w / h
    
    if abs(current_aspect - target_aspect) > 0.05:
        if current_aspect < target_aspect:
            new_h = int(w / target_aspect)
            top = max(0, (h - new_h) // 2)
            im = im.crop((0, top, w, top + new_h))
        else:
            new_w = int(h * target_aspect)
            left = max(0, (w - new_w) // 2)
            im = im.crop((left, 0, left + new_w, h))
            
    im = im.resize((1920, 1080), Image.Resampling.LANCZOS)
    arr = np.array(im, dtype=np.float32) / 255.0
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    
    r_graded = np.clip(r * 1.08 + 0.02 * (1.0 - (1.0 - luma)**2), 0.0, 1.0)
    g_graded = np.clip(g * 1.02 + 0.01 * luma, 0.0, 1.0)
    b_graded = np.clip(b * 0.92 - 0.03 * (1.0 - luma) + 0.02 * (luma**2), 0.0, 1.0)
    
    is_green = (g > r) & (g > b * 1.1)
    g_graded[is_green] = np.clip(g[is_green] * 1.15, 0.0, 1.0)
    r_graded[is_green] = np.clip(r[is_green] * 0.95, 0.0, 1.0)
    
    graded_arr = np.stack([r_graded, g_graded, b_graded], axis=2)
    graded_arr = np.clip(graded_arr, 0.0, 1.0) ** 0.96
    
    out_im = Image.fromarray((graded_arr * 255.0).astype(np.uint8))
    enh_color = ImageEnhance.Color(out_im)
    out_im = enh_color.enhance(1.10)
    out_im = out_im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=3))
    
    out_im.save(dest_webp, "WEBP", quality=90)
    print(f"Saved: {dest_webp} (1920x1080)")

booking_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img'
out_dir = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos'

mappings = [
    ('651581186.jpg', os.path.join(out_dir, 'booking-quarto-espacoso.webp')),
    ('651617454.jpg', os.path.join(out_dir, 'booking-suite-familiar.webp')),
    ('651709666.jpg', os.path.join(out_dir, 'booking-chale-amplo.webp')),
    ('651709670.jpg', os.path.join(out_dir, 'booking-varanda-rede.webp')),
]

for src, dst in mappings:
    p = os.path.join(booking_dir, src)
    if os.path.exists(p):
        grade_and_save_webp(p, dst)
