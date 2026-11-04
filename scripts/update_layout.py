import os

layout_path = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\src\app\layout.tsx"
with open(layout_path, "r", encoding="utf-8") as f:
    code = f.read()

# Add import CookieConsentBanner
import_statement = 'import CookieConsentBanner from "@/components/CookieConsentBanner";\n'
if "CookieConsentBanner" not in code:
    code = code.replace('import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";',
                        'import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";\n' + import_statement)

# Add other metadata (Geo tags & llms link)
meta_snippet_old = """  robots: {
    index: true,
    follow: true,
  },
};"""

meta_snippet_new = """  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Ubatuba, Praia do Ubatumirim",
    "geo.position": "-23.3486585;-44.928734",
    "ICBM": "-23.3486585, -44.928734",
    "llms-txt": "/llms.txt",
    "author": "Pousada e Restaurante Eliiy Zita Pedro",
    "developer": "Off Data (https://www.offdata.digital/)",
  },
};"""

code = code.replace(meta_snippet_old.replace("\n", "\r\n"), meta_snippet_new.replace("\n", "\r\n"))
code = code.replace(meta_snippet_old, meta_snippet_new)

# Add CookieConsentBanner to body
body_old = """        {children}
        <FloatingWhatsAppButton />"""

body_new = """        {children}
        <FloatingWhatsAppButton />
        <CookieConsentBanner />"""

code = code.replace(body_old.replace("\n", "\r\n"), body_new.replace("\n", "\r\n"))
code = code.replace(body_old, body_new)

with open(layout_path, "w", encoding="utf-8") as f:
    f.write(code)

print("layout.tsx updated successfully.")
