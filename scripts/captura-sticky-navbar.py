import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    output_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\06-qa\screenshots-sticky-navbar"
    os.makedirs(output_dir, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # 1. Desktop Test (1440x900)
        page_desktop = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page_desktop.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(4) # aguarda preloader sumir

        # Captura no topo (scrollY = 0)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-01-topo.png"))
        print("Desktop topo capturado.")

        # Scroll para 800px para ver o navbar fixo em ação
        await page_desktop.evaluate("window.scrollTo(0, 800)")
        await asyncio.sleep(1)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-02-scrolled-800.png"))
        print("Desktop scrolled 800px capturado.")

        # Scroll para 2200px para ver o navbar sobre outra seção
        await page_desktop.evaluate("window.scrollTo(0, 2200)")
        await asyncio.sleep(1)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-03-scrolled-2200.png"))
        print("Desktop scrolled 2200px capturado.")

        # 2. Mobile Test (390x844 - iPhone 14/15)
        page_mobile = await browser.new_page(viewport={"width": 390, "height": 844})
        await page_mobile.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(4)

        # Captura mobile no topo
        await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-01-topo.png"))
        print("Mobile topo capturado.")

        # Scroll mobile 600px
        await page_mobile.evaluate("window.scrollTo(0, 600)")
        await asyncio.sleep(1)
        await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-02-scrolled-600.png"))
        print("Mobile scrolled 600px capturado.")

        # Abre o menu mobile em scroll
        menu_btn = page_mobile.locator('button[aria-label="Menu principal"]')
        if await menu_btn.count() > 0:
            await menu_btn.click()
            await asyncio.sleep(0.5)
            await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-03-menu-aberto-scrolled.png"))
            print("Mobile menu aberto capturado.")

        await browser.close()
        print("Todas as capturas concluidas com sucesso!")

if __name__ == "__main__":
    asyncio.run(main())
