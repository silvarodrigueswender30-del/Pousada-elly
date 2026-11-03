import os
import time
from playwright.sync_api import sync_playwright

output_dir = "PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-reversao"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # 1. Desktop 1440x900
    page_d = browser.new_page(viewport={"width": 1440, "height": 900})
    page_d.goto("http://localhost:3005")
    time.sleep(2.5) # aguarda o preloader recolher
    
    # Faixa / Marquee & Autoridade
    faixa_elem = page_d.locator("div.bg-\\[\\#f6efe3\\]").first
    if faixa_elem.is_visible():
        faixa_elem.screenshot(path=f"{output_dir}/02-faixa-desktop.png")
    else:
        print("Faixa desktop não visível por class, tentando por texto")
        faixa_alt = page_d.locator("text=GOOGLE 4.8").locator("xpath=ancestor::div[contains(@class, 'py-6') or contains(@class, 'py-8')]").first
        if faixa_alt.count() > 0:
            faixa_alt.screenshot(path=f"{output_dir}/02-faixa-desktop.png")
        
    # Vivência completa na orla
    orla_elem = page_d.locator("text=• VIVÊNCIA COMPLETA NA ORLA").locator("xpath=ancestor::div[contains(@class, 'rounded-[32px]')]").first
    if orla_elem.count() > 0:
        orla_elem.scroll_into_view_if_needed()
        time.sleep(0.5)
        orla_elem.screenshot(path=f"{output_dir}/05-orla-pousada-desktop.png")
        
        # Clicar na aba Restaurante Caiçara
        btn_rest = orla_elem.locator("button:has-text('Restaurante Caiçara')").first
        if btn_rest.count() > 0:
            btn_rest.click()
            time.sleep(0.6)
            orla_elem.screenshot(path=f"{output_dir}/05-orla-restaurante-desktop.png")

    # Subpágina Acomodação Desktop (Footer)
    page_d.goto("http://localhost:3005/acomodacoes/chale-familia")
    page_d.wait_for_load_state("networkidle")
    time.sleep(1)
    footer_sub = page_d.locator("footer").first
    if footer_sub.count() > 0:
        footer_sub.scroll_into_view_if_needed()
        time.sleep(0.5)
        footer_sub.screenshot(path=f"{output_dir}/10-footer-subpagina-desktop.png")
    page_d.close()

    # 2. Mobile 390x844
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto("http://localhost:3005")
    time.sleep(2.5)
    
    # Faixa Mobile
    faixa_m = page_m.locator("div.bg-\\[\\#f6efe3\\]").first
    if faixa_m.is_visible():
        faixa_m.screenshot(path=f"{output_dir}/08-faixa-mobile.png")
        
    # Vivência Mobile
    orla_m = page_m.locator("text=• VIVÊNCIA COMPLETA NA ORLA").locator("xpath=ancestor::div[contains(@class, 'rounded-[32px]')]").first
    if orla_m.count() > 0:
        orla_m.scroll_into_view_if_needed()
        time.sleep(0.5)
        orla_m.screenshot(path=f"{output_dir}/09-orla-mobile.png")

    page_m.close()
    browser.close()
    print("CAPTURA_COMPLEMENTAR_CONCLUIDA")
