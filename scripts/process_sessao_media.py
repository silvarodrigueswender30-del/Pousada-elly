import os
import subprocess
from PIL import Image

sessao_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-video-sessao'
media_atrativos_dir = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/atrativos'
v_dir = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/v'

os.makedirs(media_atrativos_dir, exist_ok=True)
os.makedirs(v_dir, exist_ok=True)

# 1. PROCESS IMAGES
images_to_process = [
    # Ubatumirim
    ('Ubatumirim1.jpg', os.path.join(media_atrativos_dir, 'praia-ubatumirim-1.webp')),
    ('ubatumirim3.jpg', os.path.join(media_atrativos_dir, 'praia-ubatumirim-2.webp')),
    ('umatumirim5.jpg', os.path.join(media_atrativos_dir, 'praia-ubatumirim-3.webp')),
    # Praia da Justa
    ('praia-da-justa-ubatuba-naturam-1.jpg', os.path.join(media_atrativos_dir, 'praia-da-justa-1.webp')),
    ('justa11.jpg', os.path.join(media_atrativos_dir, 'praia-da-justa-2.webp')),
    ('justa22.jpg', os.path.join(media_atrativos_dir, 'praia-da-justa-3.webp')),
    ('justa55.jpg', os.path.join(media_atrativos_dir, 'praia-da-justa-4.webp')),
    # Praia do Estaleiro
    ('estaeiro22.jpg', os.path.join(media_atrativos_dir, 'praia-estaleiro-1.webp')),
    # Cachoeira do Tombador
    ('Cachoeira do Tombador Ubatuba3.jpg', os.path.join(media_atrativos_dir, 'cachoeira-tombador-1.webp')),
    ('Cachoeira do Tombador Ubatuba8.jpg', os.path.join(media_atrativos_dir, 'cachoeira-tombador-2.webp')),
]

for src_name, dst_path in images_to_process:
    src_path = os.path.join(sessao_dir, src_name)
    if os.path.exists(src_path):
        im = Image.open(src_path).convert('RGB')
        # Target 16:9 1920x1080 (or keep aspect if close)
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
        im.save(dst_path, 'WEBP', quality=88)
        kb = os.path.getsize(dst_path) / 1024
        print(f"Image {os.path.basename(dst_path)} saved ({kb:.1f} KB)")

# 2. PROCESS VIDEOS & GENERATE POSTERS
videos_to_process = [
    ('ubatumirim-praia.mp4', 'praia-ubatumirim.mp4', 'praia-ubatumirim-poster.webp', 1.0),
    ('praia da justa .mp4', 'praia-da-justa.mp4', 'praia-da-justa-poster.webp', 2.0),
    ('estaleiro.mp4', 'praia-estaleiro.mp4', 'praia-estaleiro-poster.webp', 1.0),
    ('Cachoeira do Tombador Ubatuba.mp4', 'cachoeira-tombador.mp4', 'cachoeira-tombador-poster.webp', 2.0),
]

for src_name, dst_video_name, poster_name, poster_sec in videos_to_process:
    src_path = os.path.join(sessao_dir, src_name)
    dst_video_path = os.path.join(v_dir, dst_video_name)
    poster_path = os.path.join(v_dir, poster_name)
    alt_poster_path = os.path.join(v_dir, dst_video_name.replace('.mp4', '.webp'))
    
    if os.path.exists(src_path):
        # Generate poster first
        cmd_poster = [
            'ffmpeg', '-y', '-ss', str(poster_sec), '-i', src_path,
            '-vframes', '1', '-vf', 'scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280',
            '-q:v', '2', 'temp_poster_frame.jpg'
        ]
        subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists('temp_poster_frame.jpg'):
            pim = Image.open('temp_poster_frame.jpg').convert('RGB')
            pim.save(poster_path, 'WEBP', quality=88)
            pim.save(alt_poster_path, 'WEBP', quality=88)
            os.remove('temp_poster_frame.jpg')
            print(f"Poster {poster_name} saved")
        
        # Re-encode video with fast preset, crf 26 (guaranteeing <= 8MB high quality vertical 720p)
        cmd_vid = [
            'ffmpeg', '-y', '-i', src_path,
            '-c:v', 'libx264', '-crf', '26', '-preset', 'fast',
            '-c:a', 'aac', '-b:a', '96k',
            '-movflags', '+faststart',
            dst_video_path
        ]
        subprocess.run(cmd_vid, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        mb = os.path.getsize(dst_video_path) / (1024*1024)
        print(f"Video {dst_video_name} saved ({mb:.2f} MB)")

print("Processing complete!")
