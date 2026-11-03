import os
import time
from playwright.sync_api import sync_playwright

output_dir = "PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-showcase-novas-fotos"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()

    # 1. Desktop (1440x900)
    page_d = browser.new_page(viewport={"width": 1440, "height": 900})
    page_d.goto("http://localhost:3000")
    time.sleep(3.2) # aguarda preloader

    # Posições por scroll ratio
    for idx, name in enumerate(["enseada", "patio", "sabores"]):
        ratio = [0.15, 0.50, 0.85][idx]
        page_d.evaluate(f"""
            const el = document.getElementById('showcase');
            const totalScrollable = el.offsetHeight - window.innerHeight;
            const y = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, y + totalScrollable * {ratio});
        """)
        time.sleep(1.0)
        page_d.screenshot(path=f"{output_dir}/0{idx+1}-showcase-{name}-desktop.png")

    page_d.close()

    # 2. Mobile (390x844)
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    page_m.goto("http://localhost:3000")
    time.sleep(3.2)

    for idx, name in enumerate(["enseada", "patio", "sabores"]):
        ratio = [0.15, 0.50, 0.85][idx]
        page_m.evaluate(f"""
            const el = document.getElementById('showcase');
            const totalScrollable = el.offsetHeight - window.innerHeight;
            const y = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, y + totalScrollable * {ratio});
        """)
        time.sleep(1.0)
        page_m.screenshot(path=f"{output_dir}/0{idx+4}-showcase-{name}-mobile.png")

    page_m.close()
    browser.close()
    print("SCREENSHOTS_SHOWCASE_CONCLUIDOS")
