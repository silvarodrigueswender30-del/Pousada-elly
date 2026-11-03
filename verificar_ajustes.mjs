import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = path.resolve("PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-vistoria-ajustes");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await chromium.launch();

  // 1. Mobile Preloader Check
  console.log("Checking Mobile Preloader...");
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto("http://localhost:3005", { waitUntil: "commit" });
  await mobilePage.waitForTimeout(600); // During preloader logo display
  await mobilePage.screenshot({ path: path.join(outDir, "01-preloader-mobile.png") });

  // Wait for preloader curtain to finish
  await mobilePage.waitForTimeout(3500);

  // 2. Mobile Ticker
  await mobilePage.evaluate(() => window.scrollTo(0, 500));
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: path.join(outDir, "02-hero-ticker-mobile.png") });

  // 3. Mobile WhatsApp Button & Balloon
  await mobilePage.waitForTimeout(1500); // ensures 3.8s elapsed for balloon
  await mobilePage.screenshot({ path: path.join(outDir, "03-whatsapp-balloon-mobile.png") });

  // 4. Mobile Footer 100vw check
  await mobilePage.evaluate(() => {
    const footer = document.querySelector("footer") || document.querySelector("#contato-final");
    if (footer) footer.scrollIntoView();
  });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: path.join(outDir, "04-footer-mobile-100vw.png") });
  await mobileCtx.close();

  // 5. Desktop Check (1440px)
  console.log("Checking Desktop 1440px...");
  const deskCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const deskPage = await deskCtx.newPage();
  await deskPage.goto("http://localhost:3005");
  await deskPage.waitForTimeout(4000); // after preloader

  // WhatsApp Balloon Desktop
  await deskPage.screenshot({ path: path.join(outDir, "05-desktop-whatsapp-balloon.png") });

  // Desktop Footer 100vw check
  await deskPage.evaluate(() => {
    const footer = document.querySelector("footer");
    if (footer) footer.scrollIntoView();
    else window.scrollTo(0, document.body.scrollHeight);
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "06-footer-desktop-100vw.png") });

  await deskCtx.close();
  await browser.close();
  console.log("Screenshots captured successfully in", outDir);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
