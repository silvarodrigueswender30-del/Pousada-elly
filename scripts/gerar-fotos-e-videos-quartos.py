import os
import subprocess
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

BASE_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro"
VIDEOS_DIR = os.path.join(BASE_DIR, r"02-referencias\videos-img")
OUT_MEDIA_DIR = os.path.join(BASE_DIR, r"site\public\media\quartos")
OUT_VIDEOS_DIR = os.path.join(BASE_DIR, r"site\public\media\v")

os.makedirs(OUT_MEDIA_DIR, exist_ok=True)
os.makedirs(OUT_VIDEOS_DIR, exist_ok=True)

def apply_golden_hour_color_grade(im, is_outdoor=False):
    """
    Color Grading profissional inspirado no prompt do usuário:
    - Warm golden-hour light
    - Clean warm cream whites (#F5EFE6)
    - Rich warm wood
    - Lush green foliage (#077C37)
    - Shadows warm brown/forest green (#0E4F29)
    - 2K sharpness sem artefatos
    """
    im = im.resize((1920, 1080), Image.Resampling.LANCZOS)
    arr = np.array(im, dtype=np.float32) / 255.0
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    luma = 0.299 * r + 0.587 * g + 0.114 * b

    # Warm sunlight golden grading:
    r_graded = np.clip(r * 1.07 + 0.025 * (1.0 - (1.0 - luma)**2), 0.0, 1.0)
    g_graded = np.clip(g * 1.01 + 0.015 * luma, 0.0, 1.0)
    b_graded = np.clip(b * 0.91 - 0.03 * (1.0 - luma) + 0.02 * (luma**2), 0.0, 1.0)

    # Folhagens verdes vibrantes
    is_green = (g > r) & (g > b * 1.05)
    g_graded[is_green] = np.clip(g[is_green] * 1.14, 0.0, 1.0)
    r_graded[is_green] = np.clip(r[is_green] * 0.96, 0.0, 1.0)

    graded_arr = np.stack([r_graded, g_graded, b_graded], axis=2)
    graded_arr = np.clip(graded_arr, 0.0, 1.0) ** 0.96

    out_im = Image.fromarray((graded_arr * 255.0).astype(np.uint8))
    out_im = ImageEnhance.Color(out_im).enhance(1.10)
    out_im = out_im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=115, threshold=3))
    return out_im

def extract_frame(video_name, timestamp_sec):
    vpath = os.path.join(VIDEOS_DIR, video_name)
    temp_jpg = os.path.join(BASE_DIR, "scripts", "temp_frame.jpg")
    cmd = [
        "ffmpeg", "-y", "-ss", str(timestamp_sec), "-i", vpath,
        "-vframes", "1", "-q:v", "2", temp_jpg
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    im = Image.open(temp_jpg).convert("RGB")
    return im

def cut_vertical_video(video_name, start_sec, duration_sec, out_name):
    vpath = os.path.join(VIDEOS_DIR, video_name)
    out_mp4 = os.path.join(OUT_VIDEOS_DIR, f"{out_name}.mp4")
    out_poster = os.path.join(OUT_VIDEOS_DIR, f"{out_name}-poster.webp")
    
    # 720x1280 ou nativo se já for vertical, H.264 main, sem áudio, crf 26, maxrate 1800k
    cmd = [
        "ffmpeg", "-y", "-ss", str(start_sec), "-i", vpath,
        "-t", str(duration_sec),
        "-vf", "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280",
        "-an",
        "-c:v", "libx264", "-profile:v", "main", "-crf", "26", "-maxrate", "1800k", "-bufsize", "3600k",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart",
        out_mp4
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    
    # Extrair poster limpo no 2º segundo
    temp_poster = os.path.join(BASE_DIR, "scripts", "temp_poster.jpg")
    cmd_poster = [
        "ffmpeg", "-y", "-ss", "00:00:01", "-i", out_mp4,
        "-vframes", "1", "-q:v", "2", temp_poster
    ]
    subprocess.run(cmd_poster, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    p_im = Image.open(temp_poster).convert("RGB")
    p_im.save(out_poster, "WEBP", quality=85)
    print(f"Vídeo vertical gerado: {out_mp4} ({os.path.getsize(out_mp4)} B)")

# MAPEAMENTO DOS 8 QUARTOS
QUARTOS_MAP = {
    "chale-master-15p": {
        "video": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4",
        "video_cut": (35.0, 12.0),
        "frames": [
            (28.0, "quarto-madeira", "Dormitório amplo do Chalé Master no piso superior em madeira"),
            (9.0, "cozinha-privativa", "Cozinha privativa no térreo com geladeira duplex e bancada"),
            (40.0, "varanda-vista-mar", "Varanda superior com vista panorâmica para a enseada de Ubatumirim"),
            (19.0, "banheiro", "Banheiro privativo azulejado do Chalé Master")
        ]
    },
    "chale-grande-10p": {
        "video": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4",
        "video_cut": (1.0, 14.0),
        "frames": [
            (8.0, "dormitorio-principal", "Quarto principal com cama de casal e beliche de madeira torneada"),
            (4.0, "cozinha-granito", "Cozinha privativa com bancada de granito, geladeira e mesa"),
            (12.0, "segundo-quarto", "Segundo dormitório com cama de casal e ambiente acolhedor"),
            (14.0, "banheiro", "Banheiro privativo com box de vidro e espelho")
        ]
    },
    "chale-quinteto-5p": {
        "video": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4",
        "video_cut": (1.0, 16.0),
        "frames": [
            (12.0, "dormitorio-madeira", "Quarto do Chalé Quinteto com cama de casal, beliche e teto de madeira"),
            (2.0, "cozinha-rustica", "Cozinha privativa com pia de madeira entalhada e fogão"),
            (16.0, "vista-janela", "Janela ampla do dormitório integrada à natureza e brisa da enseada"),
            (18.0, "banheiro", "Banheiro privativo com box de vidro e acabamento claro")
        ]
    },
    "chale-quadruplo-4p": {
        "video": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4",
        "video_cut": (10.0, 12.0),
        "frames": [
            (14.0, "varanda-vista-mar", "Varanda envidraçada panorâmica com vista deslumbrante para a enseada"),
            (18.0, "cozinha-varanda", "Cozinha privativa na varanda envidraçada com geladeira e armário de madeira"),
            (3.0, "dormitorio-climatizado", "Quarto climatizado com cama de casal, beliche e ar-condicionado"),
            (8.0, "banheiro", "Banheiro privativo com box de vidro e janela de ventilação natural")
        ]
    },
    "chale-triplo-3p": {
        "video": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4",
        "video_cut": (2.0, 15.0),
        "frames": [
            (11.0, "dormitorio-arco", "Dormitório acolhedor com cama de casal em madeira nobre e janela colonial em arco"),
            (3.0, "cozinha-privativa", "Cozinha privativa com geladeira e vista para o jardim interno"),
            (7.0, "beliche-madeira", "Leito auxiliar em beliche de madeira com ventilação natural"),
            (13.0, "banheiro", "Banheiro privativo com box de vidro e janela colonial")
        ]
    },
    "suite-quadrupla-4p": {
        "video": "WhatsApp Video 2026-10-2yyy5 at 12.17.23.mp4",
        "video_cut": (1.0, 14.0),
        "frames": [
            ("USE_CARD_QUARTO3", "suite-master", "Suíte Quádrupla iluminada com cama de casal, beliche de tijolinho e sacada"),
            (8.0, "sacada-vista", "Sacada privativa da suíte com vista para o pátio e mar de Ubatumirim"),
            (6.0, "banheiro", "Banheiro privativo com box de vidro e acabamento claro")
        ]
    },
    "suite-tripla-3p": {
        "video": "WhatsApp Video 2026ttthh-10-25 at 12.17.25.mp4",
        "video_cut": (1.0, 15.0),
        "frames": [
            (3.0, "dormitorio-triplo", "Suíte Tripla com cama de casal, beliche suspenso em madeira e sacada"),
            (9.0, "sacada-mar", "Sacada da Suíte Tripla com vista dos coqueiros e enseada de Ubatumirim"),
            (6.0, "banheiro", "Banheiro privativo azulejado com espelho e box")
        ]
    },
    "suite-casal-2p": {
        "video": "WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4",
        "video_cut": (2.0, 12.0),
        "frames": [
            (4.0, "suite-casal-cama", "Suíte Casal com cama confortável, cabeceira de madeira e iluminação suave"),
            (10.0, "acesso-varanda", "Acesso privativo à varanda térrea em meio ao jardim e pátio da pousada"),
            (7.0, "banheiro", "Banheiro privativo higienizado com box e espelho")
        ]
    }
}

print("Iniciando processamento em lote...")

for slug, qdata in QUARTOS_MAP.items():
    print(f"\n--- Processando {slug} ---")
    
    # 1. Cortar vídeo vertical 9:16
    start_s, dur_s = qdata["video_cut"]
    cut_vertical_video(qdata["video"], start_s, dur_s, f"tour-{slug}")
    
    # 2. Extrair e tratar as imagens 16:9
    for idx, (sec_or_flag, suffix, alt_text) in enumerate(qdata["frames"]):
        out_base = os.path.join(OUT_MEDIA_DIR, f"{slug}-{idx+1}")
        
        if sec_or_flag == "USE_CARD_QUARTO3":
            # Usa a foto aprovada 2.7K card-quarto3.jpg
            ref_path = os.path.join(BASE_DIR, r"02-referencias\videos-img\img-quarto\card-quarto3.jpg")
            im = Image.open(ref_path).convert("RGB")
            graded = apply_golden_hour_color_grade(im)
        else:
            raw_frame = extract_frame(qdata["video"], sec_or_flag)
            graded = apply_golden_hour_color_grade(raw_frame)
            
        graded.save(f"{out_base}.jpg", "JPEG", quality=90)
        graded.save(f"{out_base}.webp", "WEBP", quality=88)
        print(f"Salva foto {idx+1}: {slug}-{idx+1}.webp")

print("\nProcessamento de todas as acomodações concluído com sucesso!")
