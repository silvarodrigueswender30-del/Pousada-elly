import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screenshotsDir = path.join(__dirname, "screenshots");
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const siteDir = path.join(__dirname, "..", "site");
const PORT = 3456;
const URL = `http://localhost:${PORT}`;

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (e) {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server failed to start within timeout");
}

async function run() {
  console.log("Iniciando Next.js server de teste...");
  const server = spawn("npx.cmd", ["next", "start", "-p", String(PORT)], {
    cwd: siteDir,
    stdio: "inherit",
    shell: true,
  });

  const errors = [];
  const warnings = [];

  try {
    await waitForServer(URL);
    console.log(`Servidor ativo em ${URL}. Inicializando Playwright...`);

    const browser = await chromium.launch({
      headless: true,
      args: ["--enable-webgl", "--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
    });

    // 1. Desktop Test (1440x900)
    console.log("Capturando Desktop (1440x900)...");
    const desktopPage = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });

    desktopPage.on("console", (msg) => {
      if (msg.type() === "error") errors.push(`[Console Error Desktop]: ${msg.text()}`);
    });
    desktopPage.on("pageerror", (err) => {
      errors.push(`[Page Error Desktop]: ${err.message}`);
    });

    await desktopPage.goto(URL, { waitUntil: "networkidle" });
    await desktopPage.waitForTimeout(2000); // aguarda animações e carregamento de fontes/mapa

    await desktopPage.screenshot({
      path: path.join(screenshotsDir, "desktop-full.png"),
      fullPage: true,
    });

    // Hero screenshot
    const heroEl = await desktopPage.$("#hero");
    if (heroEl) {
      await heroEl.screenshot({ path: path.join(screenshotsDir, "desktop-hero.png") });
    }

    // Suites screenshot
    const suitesEl = await desktopPage.$("#suites");
    if (suitesEl) {
      await suitesEl.screenshot({ path: path.join(screenshotsDir, "desktop-suites.png") });
    }

    // Map screenshot
    const mapEl = await desktopPage.$("#localizacao");
    if (mapEl) {
      await mapEl.scrollIntoViewIfNeeded();
      await desktopPage.waitForTimeout(4000); // espera flyTo e renderização dos tiles do mapa
      await mapEl.screenshot({ path: path.join(screenshotsDir, "desktop-map.png") });
    }

    await desktopPage.close();

    // 2. Mobile Test (375x812 - iPhone X/12)
    console.log("Capturando Mobile (375x812)...");
    const mobilePage = await browser.newPage({
      viewport: { width: 375, height: 812 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });

    mobilePage.on("console", (msg) => {
      if (msg.type() === "error") errors.push(`[Console Error Mobile]: ${msg.text()}`);
    });

    await mobilePage.goto(URL, { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(1500);

    await mobilePage.screenshot({
      path: path.join(screenshotsDir, "mobile-full.png"),
      fullPage: true,
    });

    // Mobile Hero
    const mobileHero = await mobilePage.$("#hero");
    if (mobileHero) {
      await mobileHero.screenshot({ path: path.join(screenshotsDir, "mobile-hero.png") });
    }

    // Mobile Menu Open Test
    const menuBtn = await mobilePage.$("button[aria-label*='Menu']");
    if (menuBtn) {
      await menuBtn.click();
      await mobilePage.waitForTimeout(400);
      await mobilePage.screenshot({ path: path.join(screenshotsDir, "mobile-menu.png") });
    }

    await mobilePage.close();
    await browser.close();

    console.log("Capturas finalizadas com sucesso!");
    console.log("Erros detectados:", errors.length ? errors : "Nenhum erro");
  } catch (err) {
    console.error("Erro durante a execução do QA:", err);
  } finally {
    console.log("Encerrando servidor Next.js...");
    if (server.pid) {
      // no Windows, precisamos matar o processo e seus descendentes
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"]);
    }
  }
}

run();
