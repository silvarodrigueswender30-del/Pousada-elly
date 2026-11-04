const { chromium } = require('playwright');
const path = require('path');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);

    // Encontrar o texto "Venha nos conhecer"
    const heading = await page.getByRole('heading', { name: /Venha nos conhecer/i });
    if (heading) {
      await heading.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: path.resolve(__dirname, '../06-qa/screenshots/card-bento-visita-correto.png'),
      });
      console.log('Bento screenshot taken');
    }

    await browser.close();
    console.log('SUCCESS');
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
