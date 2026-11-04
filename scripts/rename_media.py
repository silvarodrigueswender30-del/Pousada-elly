import os

quartos_dir = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos'
acomodacoes_file = 'PROJETOS/pousada-eliiy-zita-pedro/site/src/data/acomodacoes.ts'

renames = [
    ('booking-quarto-cama-madeira.webp', 'quarto-cama-madeira.webp'),
    ('booking-quarto-jardim.webp', 'quarto-jardim.webp'),
    ('booking-varanda-panoramica.webp', 'varanda-panoramica.webp'),
    ('booking-vista-mar-coqueiros.webp', 'vista-mar-coqueiros.webp'),
    ('booking-quarto-espacoso.webp', 'quarto-espacoso.webp'),
    ('booking-suite-familiar.webp', 'suite-familiar.webp'),
    ('booking-chale-amplo.webp', 'chale-amplo.webp'),
    ('booking-varanda-rede.webp', 'varanda-rede.webp')
]

for old_name, new_name in renames:
    old_p = os.path.join(quartos_dir, old_name)
    new_p = os.path.join(quartos_dir, new_name)
    if os.path.exists(old_p):
        if os.path.exists(new_p):
            os.remove(new_p)
        os.rename(old_p, new_p)
        print(f"Renamed {old_name} -> {new_name}")

with open(acomodacoes_file, 'r', encoding='utf-8') as f:
    text = f.read()

for old_name, new_name in renames:
    text = text.replace(old_name, new_name)
    text = text.replace('Booking', 'Acervo Oficial')

with open(acomodacoes_file, 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated acomodacoes.ts successfully!")
