import re

path = 'PROJETOS/pousada-eliiy-zita-pedro/site/src/data/acomodacoes.ts'
with open(path, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

new_content = re.sub(
    r'url:\s*"/media/suite-varanda\.webp",[\s\S]*?origem:[^\n]*\n\s*}',
    'url: "/media/quartos/quarto-card-1.webp",\n        alt: "Quarto climatizado com cama de casal, ar-condicionado split e iluminação acolhedora",\n        origem: "Foto tratada em alta definição do acervo da pousada (quarto-card-1.webp)"\n      }',
    content
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Atualizado acomodacoes.ts com sucesso!')
