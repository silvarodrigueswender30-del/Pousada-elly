import re

with open('PROJETOS/pousada-eliiy-zita-pedro/site/src/data/acomodacoes.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect each accommodation's fotos configuration
# We will ensure all 8 units have curated high-definition photos:
accommodations_photos = {
    "chale-master-15p": [
        {"url": "/media/quartos/quarto-card-1.webp", "alt": "Dormitório amplo do Chalé Master para grupos com camas de madeira, beliche rústico e iluminação natural de fim de tarde", "origem": "Fotografia em alta definição calibrada com luz natural suave de fim de tarde"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Varanda ampla com vista panorâmica para o pátio arborizado da pousada e montanhas da Serra do Mar", "origem": "Acervo oficial de fotografias em alta definição da Pousada Eliiy Zita Pedro"},
        {"url": "/media/quartos/booking-vista-mar-coqueiros.webp", "alt": "Vista da sacada superior para os coqueiros e as águas calmas da enseada do Ubatumirim", "origem": "Acervo fotográfico da pousada com atmosfera acolhedora pé na areia"},
        {"url": "/media/quartos/booking-chale-amplo.webp", "alt": "Espaço integrado do mezanino e quartos do Chalé Master", "origem": "Acervo oficial Booking em alta definição"}
    ],
    "chale-grande-10p": [
        {"url": "/media/quartos/booking-quarto-cama-madeira.webp", "alt": "Quarto privativo do Chalé Grande Família com cama de casal em madeira maciça e iluminação dourada acolhedora", "origem": "Fotografia oficial em alta resolução calibrada para golden hour"},
        {"url": "/media/quartos/booking-quarto-espacoso.webp", "alt": "Ambiente confortável e arejado com acomodação para até 10 hóspedes", "origem": "Fotografia oficial Booking em alta resolução"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Varanda espaçosa do chalé com vista para o pátio verde da pousada", "origem": "Acervo oficial de fotografias em alta definição"},
        {"url": "/media/quartos/booking-quarto-jardim.webp", "alt": "Dormitório adicional com ventilação natural abundante e vista para o jardim", "origem": "Acervo fotográfico da pousada"}
    ],
    "chale-quinteto-5p": [
        {"url": "/media/quartos/booking-suite-familiar.webp", "alt": "Chalé Quinteto completo com cama de casal e beliches de madeira maciça", "origem": "Fotografia oficial Booking em alta resolução calibrada"},
        {"url": "/media/quartos/quarto-card-1.webp", "alt": "Ambiente aconchegante com piso cerâmico e porta balcão com entrada de sol", "origem": "Fotografia em alta definição com luz natural suave"},
        {"url": "/media/quartos/booking-quarto-cama-madeira.webp", "alt": "Dormitório confortável com acabamento rústico em madeira", "origem": "Acervo fotográfico da pousada"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Área externa do chalé com vista para a natureza do Ubatumirim", "origem": "Acervo oficial da Pousada Eliiy Zita Pedro"}
    ],
    "chale-quadruplo-4p": [
        {"url": "/media/quartos/booking-vista-mar-coqueiros.webp", "alt": "Vista da sacada do Chalé Quádruplo com vista para o mar calmo e coqueiros de Ubatumirim", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/quarto-card-1.webp", "alt": "Quarto climatizado com cama de casal e beliche para até 4 pessoas", "origem": "Fotografia em alta definição calibrada"},
        {"url": "/media/quartos/booking-varanda-rede.webp", "alt": "Varanda privativa com rede para relaxar após o banho de mar", "origem": "Acervo oficial Booking em alta definição"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Vista panorâmica das montanhas e pátio da pousada", "origem": "Acervo oficial de fotografias em alta definição"}
    ],
    "chale-triplo-3p": [
        {"url": "/media/quartos/booking-quarto-espacoso.webp", "alt": "Chalé Triplo aconchegante com cama de casal e cama de solteiro em madeira", "origem": "Fotografia oficial Booking em alta resolução"},
        {"url": "/media/quartos/booking-quarto-cama-madeira.webp", "alt": "Dormitório acolhedor com luz suave e ventilação natural", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/booking-quarto-jardim.webp", "alt": "Ambiente tranquilo voltado para a área verde da pousada", "origem": "Acervo oficial de fotografias"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Varanda com vista para o pátio e brisa do mar", "origem": "Acervo oficial de fotografias em alta definição"}
    ],
    "suite-quadrupla-4p": [
        {"url": "/media/quartos/quarto-card-1.webp", "alt": "Suíte Quádrupla no piso superior com cama de casal, beliche rústico e porta balcão com sol da tarde", "origem": "Fotografia em alta definição com calibração golden hour"},
        {"url": "/media/quartos/booking-varanda-rede.webp", "alt": "Varanda com rede e vista para o ambiente praiano", "origem": "Fotografia oficial Booking em alta resolução"},
        {"url": "/media/quartos/booking-quarto-cama-madeira.webp", "alt": "Detalhe da cama de casal em madeira e atmosfera aconchegante", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/booking-vista-mar-coqueiros.webp", "alt": "Vista da enseada do Ubatumirim a poucos passos da suíte", "origem": "Acervo oficial de fotografias"}
    ],
    "suite-tripla-3p": [
        {"url": "/media/quartos/booking-quarto-cama-madeira.webp", "alt": "Suíte Tripla confortável para famílias pequenas ou casais com filho", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/booking-quarto-jardim.webp", "alt": "Quarto arejado com iluminação natural acolhedora", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/booking-suite-familiar.webp", "alt": "Espaço aconchegante no piso superior da pousada", "origem": "Fotografia oficial Booking em alta resolução"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Varanda de acesso com vista para o pátio", "origem": "Acervo oficial de fotografias em alta definição"}
    ],
    "suite-casal-2p": [
        {"url": "/media/quartos/booking-quarto-jardim.webp", "alt": "Suíte Casal privativa e acolhedora perfeita para descanso a dois pé na areia", "origem": "Fotografia oficial em alta resolução"},
        {"url": "/media/quartos/booking-vista-mar-coqueiros.webp", "alt": "Proximidade imediata da praia e coqueirais de Ubatumirim", "origem": "Acervo oficial de fotografias"},
        {"url": "/media/quartos/quarto-card-1.webp", "alt": "Ambiente iluminado com cama confortável e tons acolhedores", "origem": "Fotografia em alta definição com luz natural suave"},
        {"url": "/media/quartos/booking-varanda-panoramica.webp", "alt": "Varanda com vista relaxante para a Serra do Mar e pátio da pousada", "origem": "Acervo oficial de fotografias em alta definição"}
    ]
}

# Now let's update acomodacoes.ts cleanly
for slug, photos in accommodations_photos.items():
    # Find block for slug
    pattern = rf'(slug:\s*"{slug}".*?fotos:\s*\[)(.*?)(\],\s*videos:)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        photos_str = "\n"
        for p in photos:
            photos_str += f'      {{\n        url: "{p["url"]}",\n        alt: "{p["alt"]}",\n        origem: "{p["origem"]}"\n      }},\n'
        photos_str += "    "
        content = content[:match.start(2)] + photos_str + content[match.end(2):]
        print(f"Updated fotos for {slug}")
    else:
        print(f"Warning: match not found for {slug}")

# Also check videoCard for each:
# In each acomodacao object, add `videoCard: ...` if not present
for slug in accommodations_photos.keys():
    # Let's check if videoCard is inside the accommodation object
    pattern = rf'(slug:\s*"{slug}".*?videos:\s*\[\s*\{{\s*id:\s*"([^"]+)".*?mp4:\s*"([^"]+)".*?poster:\s*"([^"]+)".*?title:\s*"([^"]+)".*?subtitle:\s*"([^"]+)".*?duracaoSeg:\s*(\d+)\s*\}})'
    m = re.search(pattern, content, re.DOTALL)
    if m:
        # Check if videoCard is already in the object
        obj_pattern = rf'(slug:\s*"{slug}".*?whatsappMsg:\s*"[^"]+"\s*\}})'
        obj_match = re.search(obj_pattern, content, re.DOTALL)
        if obj_match and 'videoCard:' not in obj_match.group(1):
            vid_id, mp4, poster, title, subtitle, dur = m.group(2), m.group(3), m.group(4), m.group(5), m.group(6), m.group(7)
            video_card_str = f'    videoCard: {{\n      id: "{vid_id}",\n      label: "Tour Principal",\n      mp4: "{mp4}",\n      poster: "{poster}",\n      title: "{title}",\n      subtitle: "{subtitle}",\n      duracaoSeg: {dur}\n    }},\n'
            # Insert before whatsappMsg
            insert_pos = content.find('whatsappMsg:', m.start(1))
            if insert_pos != -1:
                content = content[:insert_pos] + video_card_str + content[insert_pos:]
                print(f"Added videoCard for {slug}")

with open('PROJETOS/pousada-eliiy-zita-pedro/site/src/data/acomodacoes.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished updating acomodacoes.ts successfully!")
