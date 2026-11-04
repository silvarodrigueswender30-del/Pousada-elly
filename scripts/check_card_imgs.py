from PIL import Image

for name in ['quarto-card-1.webp', 'quarto-card-2.webp', 'quarto-card-3.webp']:
    p = f'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos/{name}'
    im = Image.open(p)
    print(name, im.size)
