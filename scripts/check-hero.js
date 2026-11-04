const { chromium } = require('playwright');
const path = require('path');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);
    const outPath = path.resolve(__dirname, '../06-qa/screenshots/current-hero-debug.png');
    await page.screenshot({ path: outPath });
    await browser.close();
    console.log('SUCCESS: screenshot captured at ' + outPath);
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
