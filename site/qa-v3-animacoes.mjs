import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../06-qa/evidencias-v3-animacoes');
fs.mkdirSync(OUT_DIR, { recursive: true });

const BASE_URL = 'http://127.0.0.1:3005';

async function runAudit() {
  const browser = await chromium.launch();
  const consoleMessages = [];
  const pageErrors = [];

  // 1. DESKTOP (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const dPage = await desktopContext.newPage();
  dPage.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleMessages.push(`[Desktop ${msg.type()}] ${msg.text()}`);
    }
  });
  dPage.on('pageerror', (err) => pageErrors.push(`[Desktop Error] ${err.message}`));

  await dPage.goto(BASE_URL, { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(800);

  const desktopOverflow = await dPage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  // Hero Desktop (Tab 1)
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-01-hero-tab1.png') });

  // Click Tab 2 ("Baía & Mar Calmo")
  const heroTab2 = dPage.locator('#inicio button', { hasText: 'Baía & Mar Calmo' });
  if (await heroTab2.count()) {
    await heroTab2.click();
    await dPage.waitForTimeout(450);
    await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-02-hero-tab2.png') });
  }

  // Scroll to Manifesto (#manifesto)
  await dPage.evaluate(() => {
    const el = document.querySelector('#manifesto');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-03-manifesto-scrub.png') });

  // Scroll to Portal Mask initial state (nextElementSibling of #manifesto)
  await dPage.evaluate(() => {
    const el = document.querySelector('#manifesto');
    if (el && el.nextElementSibling) {
      window.scrollTo({ top: el.nextElementSibling.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
    }
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-04-portal-mask-start.png') });

  // Scroll Portal Mask 40% through
  await dPage.evaluate(() => {
    window.scrollBy({ top: 320, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-05-portal-mask-mid.png') });

  // Scroll to Showcase 01/03 (#showcase)
  await dPage.evaluate(() => {
    const el = document.querySelector('#showcase');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 50, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-06-showcase-01.png') });

  // Scroll Showcase to 02/03
  await dPage.evaluate(() => {
    window.scrollBy({ top: 750, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-07-showcase-02.png') });

  // Scroll to Acomodações Selector (#acomodacoes, Item 01 active)
  await dPage.evaluate(() => {
    const el = document.querySelector('#acomodacoes');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 20, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-08-acomodacoes-bar1.png') });

  // Scroll Acomodações Selector down so Item 02 activates automatically via scroll
  await dPage.evaluate(() => {
    window.scrollBy({ top: 380, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-09-acomodacoes-bar2-scroll.png') });

  // Scroll to Bússola Central (#diferenciais)
  await dPage.evaluate(() => {
    const el = document.querySelector('#diferenciais');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 20, behavior: 'instant' });
  });
  await dPage.waitForTimeout(500);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-11-bussola-expanded.png') });

  // Click center symbol to test collapsed state ("• CLIQUE NO SÍMBOLO")
  const centerBtn = dPage.locator('#diferenciais button');
  if (await centerBtn.count()) {
    await centerBtn.click();
    await dPage.waitForTimeout(600);
    await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-10-bussola-collapsed.png') });
    // Click again to leave expanded
    await centerBtn.click();
    await dPage.waitForTimeout(500);
  }

  // Scroll to Quem Somos (#quem-somos)
  await dPage.evaluate(() => {
    const el = document.querySelector('#quem-somos');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-12-quem-somos-card.png') });

  // Scroll to Bento Grid (#visita)
  await dPage.evaluate(() => {
    const el = document.querySelector('#visita');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 20, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-13-bento-grid.png') });

  // Scroll to Editorial Map (#mapa-ubatumirim)
  await dPage.evaluate(() => {
    const el = document.querySelector('#mapa-ubatumirim');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 30, behavior: 'instant' });
  });
  await dPage.waitForTimeout(900);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-13b-mapa-ubatumirim.png') });

  // Scroll to FAQ rounded bars (#faq)
  await dPage.evaluate(() => {
    const el = document.querySelector('#faq');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  });
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-14-faq-bars.png') });

  // Scroll to bottom Footer + Mega-Wordmark over fullscreen photo
  await dPage.evaluate(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
  });
  await dPage.waitForTimeout(500);
  await dPage.screenshot({ path: path.join(OUT_DIR, 'desktop-15-footer-megawordmark.png') });

  // 2. MOBILE (375x812)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mPage = await mobileContext.newPage();
  mPage.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleMessages.push(`[Mobile ${msg.type()}] ${msg.text()}`);
    }
  });
  mPage.on('pageerror', (err) => pageErrors.push(`[Mobile Error] ${err.message}`));

  await mPage.goto(BASE_URL, { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(800);

  const mobileOverflow = await mPage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  // Mobile Hero
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-01-hero.png') });

  // Mobile Portal Mask
  await mPage.evaluate(() => {
    const el = document.querySelector('#manifesto');
    if (el && el.nextElementSibling) {
      window.scrollTo({ top: el.nextElementSibling.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
    }
  });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-02-portal-mask.png') });

  // Mobile Showcase 01/03
  await mPage.evaluate(() => {
    const el = document.querySelector('#showcase');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 20, behavior: 'instant' });
  });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-03-showcase.png') });

  // Mobile Acomodações
  await mPage.evaluate(() => {
    const el = document.querySelector('#acomodacoes');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
  });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-04-acomodacoes.png') });

  // Mobile Bússola
  await mPage.evaluate(() => {
    const el = document.querySelector('#diferenciais');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
  });
  await mPage.waitForTimeout(500);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-05-bussola.png') });

  // Mobile Quem Somos
  await mPage.evaluate(() => {
    const el = document.querySelector('#quem-somos');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
  });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-06-quem-somos.png') });

  // Mobile Bento Grid
  await mPage.evaluate(() => {
    const el = document.querySelector('#visita');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + 10, behavior: 'instant' });
  });
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-07-bento-grid.png') });

  // Mobile Editorial Map (#mapa-ubatumirim)
  await mPage.evaluate(() => {
    const el = document.querySelector('#mapa-ubatumirim');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'instant' });
  });
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-07b-mapa-ubatumirim.png') });

  // Mobile Footer Mega-Wordmark
  await mPage.evaluate(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
  });
  await mPage.waitForTimeout(500);
  await mPage.screenshot({ path: path.join(OUT_DIR, 'mobile-08-footer-megawordmark.png') });

  await browser.close();

  const report = {
    desktopOverflow,
    mobileOverflow,
    consoleMessages,
    pageErrors,
  };
  console.log(JSON.stringify(report, null, 2));
}

runAudit().catch((e) => {
  console.error(e);
  process.exit(1);
});
