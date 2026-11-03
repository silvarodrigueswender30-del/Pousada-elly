import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    output_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\06-qa\screenshots-animacao-diferenciais"
    os.makedirs(output_dir, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # 1. Desktop Test (1440x900)
        page_desktop = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page_desktop.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(3.8) # aguarda preloader

        # Rola ate a secao diferenciais entrando na tela (topo da secao a 70% da viewport)
        await page_desktop.evaluate("""
            const sec = document.getElementById('diferenciais');
            if (sec) {
                const top = sec.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.7;
                window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
            }
        """)
        await asyncio.sleep(0.8)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-01-entrando.png"))
        print("Desktop secao entrando capturada.")

        # Rola ate a secao diferenciais totalmente centralizada
        await page_desktop.evaluate("""
            const sec = document.getElementById('diferenciais');
            if (sec) {
                sec.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        """)
        await asyncio.sleep(0.8)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-02-centralizada-expandida.png"))
        print("Desktop secao centralizada expandida capturada.")

        # Rola um pouco mais para ver os satelites em contra-paralaxe
        await page_desktop.evaluate("window.scrollBy(0, 180)")
        await asyncio.sleep(0.6)
        await page_desktop.screenshot(path=os.path.join(output_dir, "desktop-03-scroll-paralaxe.png"))
        print("Desktop paralaxe satelites capturada.")

        # 2. Mobile Test (390x844 - iPhone 14/15)
        page_mobile = await browser.new_page(viewport={"width": 390, "height": 844})
        await page_mobile.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(3.8)

        # Rola mobile para o inicio da secao
        await page_mobile.evaluate("""
            const sec = document.getElementById('diferenciais');
            if (sec) {
                sec.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
        """)
        await asyncio.sleep(0.8)
        await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-01-inicio.png"))
        print("Mobile inicio capturado.")

        # Rola mobile para a arena circular e metricas
        await page_mobile.evaluate("""
            const sec = document.getElementById('diferenciais');
            if (sec) {
                sec.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        """)
        await asyncio.sleep(0.8)
        await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-02-circulo-expandido.png"))
        print("Mobile circulo expandido capturado.")

        # Rola mobile para os cards inferiores
        await page_mobile.evaluate("window.scrollBy(0, 350)")
        await asyncio.sleep(0.6)
        await page_mobile.screenshot(path=os.path.join(output_dir, "mobile-03-cards-inferiores.png"))
        print("Mobile cards inferiores capturado.")

        await browser.close()
        print("Todas as capturas da animacao arq3 concluidas com sucesso!")

if __name__ == "__main__":
    asyncio.run(main())
