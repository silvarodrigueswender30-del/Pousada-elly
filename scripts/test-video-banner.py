import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # 1. Test Mobile (390x844)
    browser = p.chromium.launch()
    page_m = browser.new_page(viewport={"width": 390, "height": 844})
    errors_m = []
    page_m.on("pageerror", lambda e: errors_m.append(str(e)))
    page_m.goto("http://localhost:3000")
    time.sleep(3.2) # preloader
    
    # Scroll to scene 02
    page_m.evaluate("""
        const el = document.getElementById('showcase');
        const total = el.offsetHeight - window.innerHeight;
        const y = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, y + total * 0.50);
    """)
    # Wait for idle and video ready
    time.sleep(3.5)
    
    video_exists_mobile = page_m.evaluate("""() => {
        const v = document.querySelector("#showcase video");
        if (!v) return null;
        return {
            muted: v.muted,
            loop: v.loop,
            playsInline: v.playsInline,
            poster: v.poster,
            sources: Array.from(v.querySelectorAll('source')).map(s => s.src),
            paused: v.paused,
            currentTime: v.currentTime,
            className: v.className
        };
    }""")
    print("Mobile Video Info:", video_exists_mobile)
    page_m.screenshot(path="PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-showcase-novas-fotos/test-video-mobile.png")
    page_m.close()

    # 2. Test Desktop (1440x900)
    page_d = browser.new_page(viewport={"width": 1440, "height": 900})
    page_d.goto("http://localhost:3000")
    time.sleep(3.2)
    page_d.evaluate("""
        const el = document.getElementById('showcase');
        const total = el.offsetHeight - window.innerHeight;
        const y = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, y + total * 0.50);
    """)
    time.sleep(3.0)
    video_exists_desktop = page_d.evaluate("""() => {
        const v = document.querySelector("#showcase video");
        return !!v;
    }""")
    print("Desktop Video Exists (should be False):", video_exists_desktop)
    page_d.close()

    browser.close()
    print("Errors on mobile:", errors_m)
print("TEST_COMPLETE")
