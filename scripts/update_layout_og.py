import os

layout_path = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\src\app\layout.tsx"
with open(layout_path, "r", encoding="utf-8") as f:
    code = f.read()

old_images_block = """    images: [
      {
        url: "/media/og-whatsapp.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da Pousada e Restaurante Eliiy Zita Pedro na areia da Praia do Ubatumirim",
        type: "image/jpeg",
      },
    ],"""

new_images_block = """    images: [
      {
        url: "/media/og-whatsapp.jpg",
        width: 1200,
        height: 630,
        alt: "Logo oficial da Pousada e Restaurante Eliiy Zita Pedro",
        type: "image/jpeg",
      },
      {
        url: "/media/og-whatsapp-square.jpg",
        width: 800,
        height: 800,
        alt: "Logo oficial da Pousada e Restaurante Eliiy Zita Pedro",
        type: "image/jpeg",
      },
    ],"""

code = code.replace(old_images_block.replace("\n", "\r\n"), new_images_block.replace("\n", "\r\n"))
code = code.replace(old_images_block, new_images_block)

with open(layout_path, "w", encoding="utf-8") as f:
    f.write(code)

print("layout.tsx OG images updated.")
