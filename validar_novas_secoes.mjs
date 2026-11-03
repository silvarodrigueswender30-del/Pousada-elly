import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outDir = path.resolve("PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-novas-secoes-arq");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await chromium.launch();

  // Desktop (1440px)
  const deskCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const deskPage = await deskCtx.newPage();

  // 1. Preloader Check (sem cor roxa, logo exata do Print 5)
  console.log("1. Validando Preloader Desktop...");
  await deskPage.goto("http://localhost:3005", { waitUntil: "commit" });
  await deskPage.waitForTimeout(600);
  await deskPage.screenshot({ path: path.join(outDir, "01-preloader-print5-desktop.png") });

  // Aguarda fim da cortina do preloader
  await deskPage.waitForTimeout(3500);

  // 2. Seção Faixa de Números Proposta A (Gradiente de Sol)
  console.log("2. Validando Faixa de Números Proposta A...");
  await deskPage.evaluate(() => {
    const el = document.querySelector("#numeros-autoridade");
    if (el) el.scrollIntoView();
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "02-faixa-numeros-proposta-a.png") });

  // 3. Seção Acomodações Estilo Print 1
  console.log("3. Validando Seção Acomodações Estilo Print 1...");
  await deskPage.evaluate(() => {
    const el = document.querySelector("#acomodacoes");
    if (el) el.scrollIntoView();
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "03-acomodacoes-print1.png") });

  // 4. Seção Nossos Diferenciais Estilo Print 2 (Foto Circular Central + Métricas)
  console.log("4. Validando Nossos Diferenciais Estilo Print 2...");
  await deskPage.evaluate(() => {
    const el = document.querySelector("#diferenciais");
    if (el) el.scrollIntoView();
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "04-diferenciais-circulo-print2.png") });

  // 5. Seção Vivência na Orla Estilo Print 4 + Glassmorphism Print 3
  console.log("5. Validando Vivência na Orla Estilo Print 4 + Glassmorphism...");
  await deskPage.evaluate(() => {
    const el = document.querySelector("#visita");
    if (el) el.scrollIntoView();
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "05-vivencia-orla-print4-glassmorphism.png") });

  // 6. Rota Interna de Acomodação: Footer 100vw
  console.log("6. Validando Footer 100vw na Página Interna de Acomodação...");
  await deskPage.goto("http://localhost:3005/acomodacoes/chale-master-15p");
  await deskPage.waitForTimeout(1500);
  await deskPage.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await deskPage.waitForTimeout(1000);
  await deskPage.screenshot({ path: path.join(outDir, "06-footer-pagina-interna-100vw.png") });

  await deskCtx.close();

  // Mobile (390px)
  console.log("7. Validando Mobile 390px...");
  const mobCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const mobPage = await mobCtx.newPage();
  await mobPage.goto("http://localhost:3005", { waitUntil: "commit" });
  await mobPage.waitForTimeout(600);
  await mobPage.screenshot({ path: path.join(outDir, "07-preloader-mobile-print5.png") });

  await mobPage.waitForTimeout(3500);
  // Diferenciais no mobile
  await mobPage.evaluate(() => {
    const el = document.querySelector("#diferenciais");
    if (el) el.scrollIntoView();
  });
  await mobPage.waitForTimeout(1000);
  await mobPage.screenshot({ path: path.join(outDir, "08-diferenciais-mobile-print2.png") });

  await mobCtx.close();
  await browser.close();
  console.log("Todos os screenshots de validação capturados com sucesso!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
