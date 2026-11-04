const { chromium } = require('playwright');
const path = require('path');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);

    const mapSec = await page.$('#mapa-ubatumirim');
    if (mapSec) {
      await mapSec.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: path.resolve(__dirname, '../06-qa/screenshots/mapa-ubatumirim-corrigido.png'),
      });
      console.log('Map screenshot captured');
    }

    await browser.close();
    console.log('SUCCESS');
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
