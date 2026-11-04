import os
import subprocess
from PIL import Image

sessao_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-video-sessao'

print("=== IMAGES ===")
for f in sorted(os.listdir(sessao_dir)):
    p = os.path.join(sessao_dir, f)
    if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        try:
            im = Image.open(p)
            size_mb = os.path.getsize(p) / (1024*1024)
            print(f"{f:35s}: {im.size}, {size_mb:.2f} MB")
        except Exception as e:
            print(f"{f}: {e}")

print("\n=== VIDEOS ===")
for f in sorted(os.listdir(sessao_dir)):
    p = os.path.join(sessao_dir, f)
    if f.lower().endswith(('.mp4', '.mov', '.webm')):
        size_mb = os.path.getsize(p) / (1024*1024)
        print(f"{f:35s}: {size_mb:.2f} MB")
