import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000")
    time.sleep(3)
    # Click badge inside shadow root
    res = page.evaluate("""() => {
        const portal = document.querySelector("nextjs-portal");
        if (!portal || !portal.shadowRoot) return "no portal";
        const root = portal.shadowRoot;
        const btn = root.querySelector("[data-issues-open]") || root.querySelector("[data-next-badge]");
        if (btn) {
            btn.click();
            return "clicked";
        }
        return "btn not found";
    }""")
    time.sleep(1)
    dialog_text = page.evaluate("""() => {
        const portal = document.querySelector("nextjs-portal");
        if (!portal || !portal.shadowRoot) return "no portal";
        const root = portal.shadowRoot;
        const dialog = root.querySelector("[role='dialog']") || root.querySelector("[data-nextjs-dialog]") || root.querySelector("main");
        return dialog ? dialog.innerText : root.innerText;
    }""")
    print("RES:", res)
    print("DIALOG TEXT:")
    print(dialog_text)
    page.screenshot(path="PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-showcase-novas-fotos/issue-popup.png")
    browser.close()
