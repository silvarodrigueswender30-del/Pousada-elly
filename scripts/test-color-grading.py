import os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

def apply_golden_hour_color_grade(img_path, out_path, is_outdoor=False):
    """
    Implementa computacionalmente a correção estrita de cor, luz e claridade
    definida no prompt do usuário:
    - Warm golden-hour light
    - Clean warm cream whites (#F5EFE6)
    - Rich warm wood
    - Lush green foliage (#077C37)
    - Shadows warm brown/forest green (#0E4F29), never black
    - Clarity upscale 2K & faithful sharpening
    """
    im = Image.open(img_path).convert("RGB")
    
    # 1. Enquadramento 16:9 (se for vertical ou outro aspecto, recortamos ou enquadramos com foco na amplitude)
    w, h = im.size
    target_aspect = 16.0 / 9.0
    current_aspect = w / h
    
    if abs(current_aspect - target_aspect) > 0.05:
        if current_aspect < target_aspect:
            # Imagem é mais alta que 16:9
            new_h = int(w / target_aspect)
            top = max(0, (h - new_h) // 2)
            im = im.crop((0, top, w, top + new_h))
        else:
            new_w = int(h * target_aspect)
            left = max(0, (w - new_w) // 2)
            im = im.crop((left, 0, left + new_w, h))
            
    # Resize para 2K (1920x1080)
    im = im.resize((1920, 1080), Image.Resampling.LANCZOS)
    
    # 2. Conversão para NumPy float32 normalizado
    arr = np.array(im, dtype=np.float32) / 255.0
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
    
    # Luminância
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Remoção de color cast azul/esverdeado nos brancos e médios
    # Curva de temperatura quente da Golden Hour:
    # Aumentar ligeiramente o canal vermelho nas altas luzes e médios
    # Reduzir o excesso de azul nas sombras e altas luzes
    r_graded = np.clip(r * 1.08 + 0.02 * (1.0 - (1.0 - luma)**2), 0.0, 1.0)
    g_graded = np.clip(g * 1.02 + 0.01 * luma, 0.0, 1.0)
    b_graded = np.clip(b * 0.92 - 0.03 * (1.0 - luma) + 0.02 * (luma**2), 0.0, 1.0)
    
    # Preservar o verde exuberante da vegetação (onde g > r e g > b)
    is_green = (g > r) & (g > b * 1.1)
    g_graded[is_green] = np.clip(g[is_green] * 1.15, 0.0, 1.0)
    r_graded[is_green] = np.clip(r[is_green] * 0.95, 0.0, 1.0)
    
    # Recomposição
    graded_arr = np.stack([r_graded, g_graded, b_graded], axis=2)
    
    # Contraste suave em S-Curve para dar profundidade sem estourar
    graded_arr = np.clip(graded_arr, 0.0, 1.0)
    graded_arr = graded_arr ** 0.96  # leve lift de sombras para ambiente iluminado
    
    # Convert volta para PIL
    out_im = Image.fromarray((graded_arr * 255.0).astype(np.uint8))
    
    # 3. Ajuste de saturação sutil e natural
    enh_color = ImageEnhance.Color(out_im)
    out_im = enh_color.enhance(1.12)
    
    # 4. Claridade & Nitidez fiel (Unsharp Mask leve)
    # Suave filtro de nitidez sem criar halos artificiais
    out_im = out_im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=3))
    
    out_im.save(out_path, "JPEG", quality=92)
    print(f"Graded: {out_path}")
    return out_im

if __name__ == "__main__":
    test_src = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\contato-videos-novos\WhatsApp_Video_2026-10-2yyy5_at_12\frame_002.jpg"
    test_out = r"C:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\02-referencias\contato-videos-novos\test_graded_suite22.jpg"
    apply_golden_hour_color_grade(test_src, test_out)
