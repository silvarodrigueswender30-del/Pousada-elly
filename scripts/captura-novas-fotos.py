import os
import time
from playwright.sync_api import sync_playwright

output_dir = "PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-novas-fotos"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Mobile (390x844)
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto("http://localhost:3000")
    time.sleep(3.2) # aguarda o preloader recolher
    
    # Hero Slide 1 Mobile (Pé na Areia)
    page_m.screenshot(path=f"{output_dir}/01-hero-slide1-mobile.png")
    
    # Hero Slide 2 Mobile (Capela)
    btn_slide2 = page_m.locator("button").filter(has_text="Capela").first
    if btn_slide2.count() > 0:
        btn_slide2.click()
        time.sleep(0.8)
        page_m.screenshot(path=f"{output_dir}/02-hero-slide2-mobile.png")
        
    # Hero Slide 3 Mobile (Baía)
    btn_slide3 = page_m.locator("button").filter(has_text="Mar Calmo").first
    if btn_slide3.count() > 0:
        btn_slide3.click()
        time.sleep(0.8)
        page_m.screenshot(path=f"{output_dir}/03-hero-slide3-mobile.png")
        
    # Footer Mobile
    page_m.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(0.8)
    footer_m = page_m.locator("footer").first
    if footer_m.count() > 0:
        footer_m.screenshot(path=f"{output_dir}/04-footer-mobile.png")
    page_m.close()

    # 2. Desktop (1440x900)
    page_d = browser.new_page(viewport={"width": 1440, "height": 900})
    page_d.goto("http://localhost:3000")
    time.sleep(3.2)
    
    # Hero Desktop
    page_d.screenshot(path=f"{output_dir}/05-hero-desktop.png")
    
    # Footer Desktop
    page_d.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(0.8)
    footer_d = page_d.locator("footer").first
    if footer_d.count() > 0:
        footer_d.screenshot(path=f"{output_dir}/06-footer-desktop.png")
        
    page_d.close()
    browser.close()
    print("SCREENSHOTS_NOVAS_FOTOS_CONCLUIDOS")
