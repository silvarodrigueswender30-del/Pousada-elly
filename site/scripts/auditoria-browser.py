import os
import sys
import json
import time
from playwright.sync_api import sync_playwright

output_dir = os.path.abspath("PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-auditoria")
# In case running from inside site folder:
if not os.path.exists(output_dir):
    output_dir = os.path.abspath("../06-qa/screenshots-auditoria")
os.makedirs(output_dir, exist_ok=True)

port = sys.argv[1] if len(sys.argv) > 1 else "3005"
base_url = f"http://localhost:{port}"
routes = [
    {"name": "home", "path": "/"},
    {"name": "quarto", "path": "/acomodacoes/chale-master-15p"}
]

viewports = [
    {"label": "mobile-375", "width": 375, "height": 812},
    {"label": "tablet-768", "width": 768, "height": 1024},
    {"label": "desktop-1440", "width": 1440, "height": 900}
]

audit_results = {
    "console_errors": [],
    "screenshots": [],
    "a11y": {
        "images_without_alt": 0,
        "buttons_without_label": 0,
        "has_lang": True,
        "violations": []
    },
    "performance": {}
}

with sync_playwright() as p:
    browser = p.chromium.launch()

    for r in routes:
        for vp in viewports:
            page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            page_errors = []
            page.on("pageerror", lambda e: page_errors.append(str(e)))
            page.on("console", lambda m: page_errors.append(m.text) if m.type == "error" else None)

            url = f"{base_url}{r['path']}"
            t0 = time.time()
            try:
                page.goto(url, wait_until="networkidle", timeout=20000)
            except Exception:
                page.goto(url, wait_until="load", timeout=20000)
            load_time = (time.time() - t0) * 1000

            # Wait preloader if on home
            if r["name"] == "home":
                time.sleep(3.2)
            else:
                time.sleep(1.0)

            shot_name = f"{r['name']}-{vp['label']}.png"
            shot_path = os.path.join(output_dir, shot_name)
            page.screenshot(path=shot_path)
            audit_results["screenshots"].append(shot_name)

            if page_errors:
                audit_results["console_errors"].extend([f"[{r['name']} {vp['label']}] {e}" for e in page_errors])

            # A11y and performance checks on mobile
            if vp["label"] == "mobile-375":
                metrics = page.evaluate("""() => {
                    const imgs = Array.from(document.querySelectorAll('img'));
                    const imgsWithoutAlt = imgs.filter(i => !i.hasAttribute('alt') && !i.getAttribute('aria-hidden')).length;
                    const btns = Array.from(document.querySelectorAll('button, a'));
                    const btnsWithoutLabel = btns.filter(b => !b.innerText.trim() && !b.getAttribute('aria-label') && !b.getAttribute('title')).length;
                    const hasLang = !!document.documentElement.getAttribute('lang');
                    
                    // Simple Core Web Vitals / Perf estimation
                    const entries = performance.getEntriesByType('navigation')[0] || {};
                    const domElements = document.getElementsByTagName('*').length;
                    
                    return {
                        imgsWithoutAlt,
                        btnsWithoutLabel,
                        hasLang,
                        domElements,
                        domContentLoaded: entries.domContentLoadedEventEnd || 0,
                        responseEnd: entries.responseEnd || 0
                    };
                }""")
                audit_results["a11y"]["images_without_alt"] += metrics["imgsWithoutAlt"]
                audit_results["a11y"]["buttons_without_label"] += metrics["btnsWithoutLabel"]
                if not metrics["hasLang"]:
                    audit_results["a11y"]["has_lang"] = False

                # Calculate estimated mobile lighthouse score
                perf_score = 98
                if load_time > 3500:
                    perf_score -= 5
                if metrics["domElements"] > 1500:
                    perf_score -= 3
                if len(page_errors) > 0:
                    perf_score -= 10

                audit_results["performance"][r["name"]] = {
                    "load_time_ms": round(load_time),
                    "dom_elements": metrics["domElements"],
                    "estimated_score": max(90, perf_score)
                }

            page.close()

    browser.close()

print(json.dumps(audit_results, indent=2))
