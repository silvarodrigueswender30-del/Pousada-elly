import os
import time
from playwright.sync_api import sync_playwright

output_dir = "PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-jogo-cores"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # Desktop 1440x900
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000")
    time.sleep(3.2) # aguarda o preloader recolher
    
    # 1. Botão Hero com Gradiente Caiçara
    hero_btn = page.locator("button:has-text('Solicitar reserva')").first
    if hero_btn.count() > 0:
        hero_btn.screenshot(path=f"{output_dir}/01-botao-hero-gradiente.png")
        
    # 2. Frase de Autoridade na Faixa Branca
    page.evaluate("window.scrollTo(0, 850)")
    time.sleep(0.5)
    faixa_frase = page.locator("text=Mais liberdade para a sua família").locator("..").first
    if faixa_frase.count() > 0:
        faixa_frase.screenshot(path=f"{output_dir}/02-frase-autoridade-gradiente.png")
        
    # 3. Faixa de Números de Autoridade (+160★, 08, 0m, 3 a 15)
    page.evaluate("window.scrollTo(0, 1550)")
    time.sleep(0.6)
    stats_sec = page.locator("#numeros-autoridade").first
    if stats_sec.count() > 0:
        stats_sec.screenshot(path=f"{output_dir}/03-numeros-autoridade-gradiente.png")
        
    # 4. Diferenciais com 0m, +160★ e Botão
    page.evaluate("window.scrollTo(0, 3600)")
    time.sleep(0.6)
    dif_sec = page.locator("#diferenciais").first
    if dif_sec.count() > 0:
        dif_sec.screenshot(path=f"{output_dir}/04-diferenciais-metricas-gradiente.png")
        
    # 5. Mobile (+160★)
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto("http://localhost:3000")
    time.sleep(3.2)
    page_m.evaluate("window.scrollTo(0, 1750)")
    time.sleep(0.6)
    page_m.screenshot(path=f"{output_dir}/05-numeros-mobile-gradiente.png")
    
    page.close()
    page_m.close()
    browser.close()
    print("CAPTURA_JOGO_CORES_CONCLUIDA")
