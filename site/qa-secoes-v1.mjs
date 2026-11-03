import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = "PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots/paleta-v1";
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto("http://localhost:3005", { waitUntil: "networkidle" });
  await page.waitForTimeout(3800); // aguarda preloader solene subir

  // 1. Hero com CTA Solar e Paleta V1
  await page.screenshot({ path: path.join(outDir, "01-hero-cta-solar.png") });

  // 2. Acomodações
  const acomodacoes = page.locator("#acomodacoes");
  if (await acomodacoes.count() > 0) {
    await acomodacoes.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, "02-acomodacoes.png") });
  }

  // 3. Diferenciais (Bússola de Areia)
  const diferenciais = page.locator("#diferenciais");
  if (await diferenciais.count() > 0) {
    await diferenciais.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, "03-diferenciais-bussola.png") });
  }

  // 4. Mapa e Bento Grid
  const visita = page.locator("#visita");
  if (await visita.count() > 0) {
    await visita.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, "04-bento-mapa.png") });
  }

  // 5. Mobile 375x812
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobilePage.goto("http://localhost:3005", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(3800);
  await mobilePage.screenshot({ path: path.join(outDir, "mobile-hero.png") });

  await browser.close();
  console.log("Screenshots da Paleta V1 capturados com sucesso!");
}

run().catch(console.error);
