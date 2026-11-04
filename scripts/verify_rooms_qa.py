import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    qa_dir = r"c:\Users\Teste\Downloads\MEGA-ESTRUTURA-AGENTE-SITE\PROJETOS\pousada-eliiy-zita-pedro\06-qa\novas-evidencias-quartos"
    os.makedirs(qa_dir, exist_ok=True)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # 1. Desktop Context
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        
        # Desktop - Chale Master
        await page.goto("http://localhost:3000/acomodacoes/chale-master-15p", wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)
        await page.screenshot(path=os.path.join(qa_dir, "desktop_chale_master.png"), full_page=False)
        print("Captured desktop_chale_master.png")
        
        # Desktop - Suite Quadrupla
        await page.goto("http://localhost:3000/acomodacoes/suite-quadrupla-4p", wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)
        await page.screenshot(path=os.path.join(qa_dir, "desktop_suite_quadrupla.png"), full_page=False)
        print("Captured desktop_suite_quadrupla.png")
        
        # Desktop - Home Acomodacoes Carousel
        await page.goto("http://localhost:3000", wait_until="domcontentloaded")
        await page.wait_for_timeout(3500)
        carousel_el = await page.query_selector("#acomodacoes")
        if carousel_el:
            await carousel_el.scroll_into_view_if_needed()
            await page.wait_for_timeout(2000)
            await page.screenshot(path=os.path.join(qa_dir, "desktop_home_carousel.png"), full_page=False)
            print("Captured desktop_home_carousel.png")
            
        await context.close()
        
        # 2. Mobile Context
        context_mobile = await browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True)
        page_mobile = await context_mobile.new_page()
        
        # Mobile - Chale Master
        await page_mobile.goto("http://localhost:3000/acomodacoes/chale-master-15p", wait_until="domcontentloaded")
        await page_mobile.wait_for_timeout(2500)
        await page_mobile.screenshot(path=os.path.join(qa_dir, "mobile_chale_master.png"), full_page=False)
        print("Captured mobile_chale_master.png")
        
        # Mobile - Suite Quadrupla
        await page_mobile.goto("http://localhost:3000/acomodacoes/suite-quadrupla-4p", wait_until="domcontentloaded")
        await page_mobile.wait_for_timeout(2500)
        await page_mobile.screenshot(path=os.path.join(qa_dir, "mobile_suite_quadrupla.png"), full_page=False)
        print("Captured mobile_suite_quadrupla.png")
        
        # Mobile - Home Carousel
        await page_mobile.goto("http://localhost:3000", wait_until="domcontentloaded")
        await page_mobile.wait_for_timeout(3500)
        carousel_m = await page_mobile.query_selector("#acomodacoes")
        if carousel_m:
            await carousel_m.scroll_into_view_if_needed()
            await page_mobile.wait_for_timeout(2000)
            await page_mobile.screenshot(path=os.path.join(qa_dir, "mobile_home_carousel.png"), full_page=False)
            print("Captured mobile_home_carousel.png")
            
        await context_mobile.close()
        await browser.close()
        print("All screenshots successfully captured!")

if __name__ == "__main__":
    asyncio.run(main())
