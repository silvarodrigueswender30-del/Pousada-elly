with open('PROJETOS/pousada-eliiy-zita-pedro/site/src/components/EditorialHomeClient.tsx', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 'visita' in line.lower() and 'id=' in line:
            print(f"{i+1}: {line.strip()}")
