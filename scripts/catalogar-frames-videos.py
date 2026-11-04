import os
import subprocess
import json

VIDEOS_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\videos-img"
OUTPUT_DIR = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\contato-videos-novos"

os.makedirs(OUTPUT_DIR, exist_ok=True)

video_files = [f for f in os.listdir(VIDEOS_DIR) if f.lower().endswith(".mp4")]

catalog = []

for vname in video_files:
    vpath = os.path.join(VIDEOS_DIR, vname)
    v_slug = vname.replace(" ", "_").replace(".mp4", "")[:35]
    v_out_dir = os.path.join(OUTPUT_DIR, v_slug)
    os.makedirs(v_out_dir, exist_ok=True)
    
    # Extrai 1 frame a cada 2 segundos em alta qualidade JPEG
    # Usando ffmpeg -i input.mp4 -vf "fps=1/2" -q:v 2 output_%03d.jpg
    cmd = [
        "ffmpeg", "-y", "-i", vpath,
        "-vf", "fps=1/2.5",
        "-q:v", "2",
        os.path.join(v_out_dir, "frame_%03d.jpg")
    ]
    
    try:
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        extracted = [f for f in os.listdir(v_out_dir) if f.endswith(".jpg")]
        catalog.append({
            "video": vname,
            "slug": v_slug,
            "dir": v_out_dir,
            "frames_count": len(extracted)
        })
        print(f"OK: {vname} -> {len(extracted)} frames")
    except Exception as e:
        print(f"Error {vname}: {e}")

with open(os.path.join(OUTPUT_DIR, "catalogo-frames.json"), "w", encoding="utf-8") as f:
    json.dump(catalog, f, indent=2)

print(f"\nFinalizada extração de frames para {len(catalog)} vídeos.")
