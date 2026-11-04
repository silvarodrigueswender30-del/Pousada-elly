import os
import subprocess
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

BASE_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro"
IMG_REF_DIR = os.path.join(BASE_DIR, r"02-referencias\videos-img\img")
IMG_QUARTO_DIR = os.path.join(BASE_DIR, r"02-referencias\videos-img\img-quarto")
VIDEOS_DIR = os.path.join(BASE_DIR, r"02-referencias\videos-img")
OUT_MEDIA_DIR = os.path.join(BASE_DIR, r"site\public\media\quartos")
OUT_VIDEOS_DIR = os.path.join(BASE_DIR, r"site\public\media\v")

os.makedirs(OUT_MEDIA_DIR, exist_ok=True)
os.makedirs(OUT_VIDEOS_DIR, exist_ok=True)

def apply_golden_hour_lut(im):
    """
    Color Grading profissional inspirado no prompt e na imagem de referência do usuário:
    - 16:9 (1920x1080)
    - Warm golden-hour light
    - Clean warm cream whites (#F5EFE6)
    - Rich warm wood tones
    - Lush green foliage (#077C37)
    - Shadows warm brown/forest green (#0E4F29), never crushed black
    - 2K clarity and crisp detail without AI artifacts
    """
    # Garantir proporção 16:9 exata sem esticar:
    w, h = im.size
    target_aspect = 16.0 / 9.0
    current_aspect = w / h
    
    if abs(current_aspect - target_aspect) > 0.02:
        if current_aspect > target_aspect:
            # Imagem é mais larga que 16:9 -> cortar laterais
            new_w = int(h * target_aspect)
            left = (w - new_w) // 2
            im = im.crop((left, 0, left + new_w, h))
        else:
            # Imagem é mais alta que 16:9 -> cortar topo/base (foco no terço superior/médio)
            new_h = int(w / target_aspect)
            top = int((h - new_h) * 0.35)  # ligeiramente puxado para cima para preservar teto/janelas
            im = im.crop((0, top, w, top + new_h))
            
    im = im.resize((1920, 1080), Image.Resampling.LANCZOS)
    
    arr = np.array(im, dtype=np.float32) / 255.0
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    luma = 0.299 * r + 0.587 * g + 0.114 * b

    # Warm sunlight golden grading:
    r_graded = np.clip(r * 1.06 + 0.03 * (1.0 - (1.0 - luma)**2), 0.0, 1.0)
    g_graded = np.clip(g * 1.01 + 0.015 * luma, 0.0, 1.0)
    b_graded = np.clip(b * 0.90 - 0.035 * (1.0 - luma) + 0.02 * (luma**2), 0.0, 1.0)

    # Folhagens verdes vibrantes e saudáveis
    is_green = (g > r) & (g > b * 1.05)
    g_graded[is_green] = np.clip(g[is_green] * 1.15, 0.0, 1.0)
    r_graded[is_green] = np.clip(r[is_green] * 0.95, 0.0, 1.0)

    graded_arr = np.stack([r_graded, g_graded, b_graded], axis=2)
    # Suave elevação nas sombras para não empastar
    graded_arr = np.clip(graded_arr, 0.0, 1.0) ** 0.95

    out_im = Image.fromarray((graded_arr * 255.0).astype(np.uint8))
    out_im = ImageEnhance.Color(out_im).enhance(1.10)
    out_im = out_im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=3))
    return out_im

def extract_video_frame(video_name, timestamp_sec):
    vpath = os.path.join(VIDEOS_DIR, video_name)
    temp_jpg = os.path.join(BASE_DIR, "scripts", "temp_crop.jpg")
    cmd = [
        "ffmpeg", "-y", "-ss", str(timestamp_sec), "-i", vpath,
        "-vframes", "1", "-q:v", "2", temp_jpg
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    return Image.open(temp_jpg).convert("RGB")

# Definição das fontes de fotos 16:9 de cada quarto:
# Priorizamos fotos nativas de alta resolução onde existirem, e frames dos vídeos com crop perfeito
ROOMS_CONFIG = {
    "chale-master-15p": {
        "fotos": [
            {"type": "video", "file": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4", "sec": 28.0, "alt": "Dormitório amplo do Chalé Master no piso superior em madeira com forro inclinado"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4", "sec": 9.0, "alt": "Cozinha privativa completa no térreo com geladeira duplex e bancada"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4", "sec": 40.0, "alt": "Varanda privativa do Chalé Master com vista da enseada de Ubatumirim"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4", "sec": 19.0, "alt": "Banheiro privativo azulejado com espelho e ventilação"}
        ],
        "video": {"file": "WhatsApp Video 2026-10-25 attt 12.17.28.mp4", "start": 35.0, "dur": 12.0, "label": "Tour pelo andar superior e varanda vista mar"}
    },
    "chale-grande-10p": {
        "fotos": [
            {"type": "video", "file": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4", "sec": 8.0, "alt": "Dormitório principal do Chalé Grande Família com cama de casal e beliche torneado"},
            {"type": "video", "file": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4", "sec": 4.0, "alt": "Cozinha privativa equipada com bancada em granito e geladeira"},
            {"type": "video", "file": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4", "sec": 12.0, "alt": "Segundo quarto de casal independente com iluminação acolhedora"},
            {"type": "video", "file": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4", "sec": 14.0, "alt": "Banheiro privativo com box de vidro e espelho"}
        ],
        "video": {"file": "WhatsApp Video 2026-10-2ttt5 at 12.17.27.mp4", "start": 1.0, "dur": 14.0, "label": "Tour completo pela cozinha e dormitórios conjugados"}
    },
    "chale-quinteto-5p": {
        "fotos": [
            {"type": "video", "file": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4", "sec": 12.0, "alt": "Quarto do Chalé Quinteto com cama de casal, beliche e teto de madeira maciça"},
            {"type": "video", "file": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4", "sec": 2.0, "alt": "Cozinha privativa com pia de madeira entalhada e fogão"},
            {"type": "video", "file": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4", "sec": 16.0, "alt": "Janela ampla do dormitório integrada ao jardim e pátio"},
            {"type": "video", "file": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4", "sec": 18.0, "alt": "Banheiro privativo com box de vidro e acabamento claro"}
        ],
        "video": {"file": "WhatsApp Video tt2026-10-25 at 12.17.27.mp4", "start": 1.0, "dur": 16.0, "label": "Tour pela cozinha entalhada e quarto familiar"}
    },
    "chale-quadruplo-4p": {
        "fotos": [
            {"type": "video", "file": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4", "sec": 14.0, "alt": "Varanda panorâmica envidraçada com vista para as ilhas da Praia do Ubatumirim"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4", "sec": 18.0, "alt": "Cozinha privativa na varanda envidraçada com geladeira e armário rústico"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4", "sec": 3.0, "alt": "Quarto climatizado com cama de casal, beliche e ar-condicionado"},
            {"type": "video", "file": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4", "sec": 8.0, "alt": "Banheiro privativo azulejado com box de vidro e janela"}
        ],
        "video": {"file": "WhatsApp Video 2026-10-25 at 12.yyy17.25.mp4", "start": 10.0, "dur": 12.0, "label": "Tour pela varanda panorâmica envidraçada e vista mar"}
    },
    "chale-triplo-3p": {
        "fotos": [
            {"type": "video", "file": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4", "sec": 11.0, "alt": "Dormitório acolhedor com cama de casal em madeira e janela colonial em arco"},
            {"type": "video", "file": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4", "sec": 3.0, "alt": "Cozinha privativa térrea com geladeira e vista para o jardim"},
            {"type": "video", "file": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4", "sec": 7.0, "alt": "Cama auxiliar em beliche de madeira com iluminação natural"},
            {"type": "video", "file": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4", "sec": 13.0, "alt": "Banheiro privativo com box de vidro e janela colonial"}
        ],
        "video": {"file": "WhatsApp Video 2ttt026-10-25 at 12.17.26.mp4", "start": 2.0, "dur": 15.0, "label": "Tour pela cozinha privativa e quarto com janela em arco"}
    },
    "suite-quadrupla-4p": {
        "fotos": [
            {"type": "quarto_img", "file": "card-quarto3.jpg", "alt": "Suíte Quádrupla iluminada com cama de casal, beliche de tijolinho e sacada privativa"},
            {"type": "img_gallery", "file": "651581186.jpg", "alt": "Beliche com base de tijolinho maciço ao lado da porta balcão e cortina floral"},
            {"type": "img_gallery", "file": "651581211.jpg", "alt": "Bancada com frigobar e armário em alvenaria e madeira"},
            {"type": "img_gallery", "file": "651617482.jpg", "alt": "Vista da sacada da suíte para o pátio da pousada e Serra do Mar"}
        ],
        "video": {"file": "WhatsApp Video 2026-10-2yyy5 at 12.17.23.mp4", "start": 1.0, "dur": 14.0, "label": "Tour real pela Suíte 22 mostrando cama, beliche e sacada"}
    },
    "suite-tripla-3p": {
        "fotos": [
            {"type": "img_gallery", "file": "651617454.jpg", "alt": "Suíte Tripla com cama de casal e beliche de madeira em ambiente arejado"},
            {"type": "video", "file": "WhatsApp Video 2026ttthh-10-25 at 12.17.25.mp4", "sec": 9.0, "alt": "Sacada privativa da Suíte Tripla com vista para o mar de Ubatumirim"},
            {"type": "img_gallery", "file": "651617456.jpg", "alt": "Porta balcão aberta para a sacada com vista e luz natural"},
            {"type": "video", "file": "WhatsApp Video 2026ttthh-10-25 at 12.17.25.mp4", "sec": 6.0, "alt": "Banheiro privativo higienizado com espelho e box"}
        ],
        "video": {"file": "WhatsApp Video 2026ttthh-10-25 at 12.17.25.mp4", "start": 1.0, "dur": 15.0, "label": "Tour real pela Suíte 16 com sacada e vista para o mar"}
    },
    "suite-casal-2p": {
        "fotos": [
            {"type": "img_gallery", "file": "651617460.jpg", "alt": "Suíte Casal intimista com cama confortável de madeira e luz natural"},
            {"type": "video", "file": "WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4", "sec": 4.0, "alt": "Cabeceira em madeira maciça com iluminação quente acolhedora"},
            {"type": "img_gallery", "file": "651623828.jpg", "alt": "Acesso pelas escadarias e varandas floridas da pousada"},
            {"type": "video", "file": "WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4", "sec": 8.0, "alt": "Banheiro privativo completo e higienizado"}
        ],
        "video": {"file": "WhatsApp Videyyyo 2026-10-25 at 12.17.05.mp4", "start": 2.0, "dur": 12.0, "label": "Tour intimista pela Suíte Casal pé na areia"}
    }
}

print("Iniciando geração de alta fidelidade...")

for slug, cfg in ROOMS_CONFIG.items():
    print(f"\nProcessando {slug}...")
    for idx, fcfg in enumerate(cfg["fotos"]):
        ftype = fcfg["type"]
        out_base = os.path.join(OUT_MEDIA_DIR, f"{slug}-{idx+1}")
        
        if ftype == "quarto_img":
            im_path = os.path.join(IMG_QUARTO_DIR, fcfg["file"])
            im = Image.open(im_path).convert("RGB")
        elif ftype == "img_gallery":
            im_path = os.path.join(IMG_REF_DIR, fcfg["file"])
            im = Image.open(im_path).convert("RGB")
        elif ftype == "video":
            im = extract_video_frame(fcfg["file"], fcfg["sec"])
        else:
            continue
            
        graded = apply_golden_hour_lut(im)
        graded.save(f"{out_base}.jpg", "JPEG", quality=92)
        graded.save(f"{out_base}.webp", "WEBP", quality=88)
        print(f"  OK Foto {idx+1}: {slug}-{idx+1}.webp")

print("\nTodas as fotos processadas e salvas com sucesso em 16:9 2K!")
