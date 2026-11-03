import asyncio
from playwright.async_api import async_playwright

async def test():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Mobile iPhone 14
        context_m = await browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True)
        page_m = await context_m.new_page()
        
        errors_m = []
        page_m.on("console", lambda msg: errors_m.append(f"{msg.type}: {msg.text}") if msg.type in ["error"] else None)
        page_m.on("pageerror", lambda err: errors_m.append(f"PAGE_ERR: {err}"))

        print("Carregando no mobile...")
        await page_m.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(4) # Espera requestIdleCallback

        vids_m = await page_m.eval_on_selector_all("video", """vids => vids.map(v => ({
            src: v.currentSrc,
            paused: v.paused,
            readyState: v.readyState,
            className: v.className
        }))""")
        print(f"Videos mobile detectados: {len(vids_m)}")
        for idx, v in enumerate(vids_m):
            print(f"Video {idx}: src={v['src']}, readyState={v['readyState']}, paused={v['paused']}")

        print(f"Erros console mobile: {errors_m}")

        # Desktop 1440px
        context_d = await browser.new_context(viewport={"width": 1440, "height": 900})
        page_d = await context_d.new_page()
        print("Carregando no desktop...")
        await page_d.goto("http://localhost:3000", wait_until="networkidle")
        await asyncio.sleep(4)
        vids_d = await page_d.eval_on_selector_all("video", "vids => vids.map(v => v.currentSrc)")
        print(f"Videos desktop detectados (deve ser vazio ou sem mobile videos): {vids_d}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(test())
