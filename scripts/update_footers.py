import os

footer_path = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\site\src\components\Footer.tsx"
with open(footer_path, "r", encoding="utf-8") as f:
    content = f.read()

old_block = """          <p>© {new Date().getFullYear()} Pousada e Restaurante Eliiy Zita Pedro. Todos os direitos reservados.</p>
          <p className="text-neutral-400">Praia do Ubatumirim · Região Norte de Ubatuba, SP</p>"""

new_block = """          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <p>© {new Date().getFullYear()} Pousada e Restaurante Eliiy Zita Pedro.</p>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors underline underline-offset-2">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-white transition-colors underline underline-offset-2">
              Termos de Uso
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Desenvolvido por</span>
            <a
              href="https://www.offdata.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f29b2f] hover:text-[#d98520] font-semibold underline underline-offset-2 transition-colors"
            >
              Off Data
            </a>
          </div>"""

# Replace both CRLF and LF variations
content = content.replace(old_block.replace("\n", "\r\n"), new_block.replace("\n", "\r\n"))
content = content.replace(old_block, new_block)

with open(footer_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Footer.tsx updated successfully.")
