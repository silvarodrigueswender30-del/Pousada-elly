import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../06-qa/screenshots/portal-logo');
fs.mkdirSync(OUT_DIR, { recursive: true });

const BASE_URL = 'http://127.0.0.1:3005';
const PROGRESS_STEPS = [0, 0.2, 0.4, 0.6, 0.8, 1];

async function captureFilmstrip() {
  const browser = await chromium.launch();
  const consoleErrors = [];
  const pageErrors = [];

  for (const vp of [
    { name: 'desktop-1440x900', width: 1440, height: 900, isMobile: false, dpr: 1 },
    { name: 'mobile-375x812', width: 375, height: 812, isMobile: true, dpr: 2 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.dpr,
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
    });
    const page = await context.newPage();

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[${vp.name}] ${msg.text()}`);
      }
    });
    page.on('pageerror', (err) => {
      pageErrors.push(`[${vp.name}] ${err.message}`);
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // Wait for preloader to finish or hide preloader for filmstrip capture
    await page.addStyleTag({
      content: '.animate-preloader-curtain { display: none !important; }',
    });
    await page.waitForTimeout(250);

    for (const p of PROGRESS_STEPS) {
      await page.evaluate((targetP) => {
        const el = document.querySelector('#portal-logo');
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const trackTop = rect.top + window.scrollY;
        const scrollable = Math.max(1, el.clientHeight - window.innerHeight);
        window.scrollTo({
          top: Math.round(trackTop + targetP * scrollable),
          behavior: 'instant',
        });
        window.dispatchEvent(new Event('scroll'));
      }, p);

      await page.waitForTimeout(180);
      const label = p.toFixed(1).replace('.', '_');
      const filePath = path.join(OUT_DIR, `${vp.name}-p${label}.png`);
      await page.screenshot({ path: filePath });
    }

    await context.close();
  }

  await browser.close();
  console.log(JSON.stringify({ consoleErrors, pageErrors }, null, 2));
}

captureFilmstrip().catch((err) => {
  console.error(err);
  process.exit(1);
});
