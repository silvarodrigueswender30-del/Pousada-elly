import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const clientPath = path.resolve("PROJETOS/pousada-eliiy-zita-pedro/site/src/components/EditorialHomeClient.tsx");
const content = fs.readFileSync(clientPath, "utf-8");

// 1.1 Análise de Cinzas Genéricos e Overlays
const hexMatches = content.match(/#[0-9a-fA-F]{3,8}/g) || [];
const uniqueHexes = [...new Set(hexMatches.map(h => h.toLowerCase()))];

const blackOverlayMatches = content.match(/bg-black\/[0-9]+/g) || [];
const uniqueOverlays = [...new Set(blackOverlayMatches)];

// Análise específica das seções
const painelCalmaOverlay = content.includes("Uma enseada que abraça a calma");
const statsSection = content.includes("• ACOLHIMENTO E ESTRUTURA REAL NA AREIA");

// Cálculos de Luminância e Contraste WCAG 2.1
function hexToRgb(hex) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map(x => x + x).join("");
  const num = parseInt(c, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function relativeLuminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05));
}

// Pares em uso no site atual
const pairsToAudit = [
  { name: "Texto Normal em Fundo Claro", text: "#0a301a", bg: "#f8faf8", context: "Body, títulos, cards" },
  { name: "Texto Secundário em Fundo Claro", text: "#4a5c50", bg: "#f8faf8", context: "Subtítulos, parágrafos descritivos" },
  { name: "Texto Muted em Fundo Claro", text: "#788a7e", bg: "#f8faf8", context: "Palavras não ativas do manifesto, contadores" },
  { name: "Texto Branco em Fundo Escuro", text: "#ffffff", bg: "#082112", context: "Hero, rodapé, seções escuras" },
  { name: "Texto Secundário em Fundo Escuro", text: "#f8faf8", bg: "#082112", context: "Labels e cards no bento grid" },
  { name: "Botão CTA Laranja com Texto Verde Noite", text: "#0a301a", bg: "#f29b2f", context: "Botão Solicitar Reserva (RECOMENDADO)" },
  { name: "Botão CTA Laranja com Texto Branco (Erro clássico)", text: "#ffffff", bg: "#f29b2f", context: "Comparativo de perigo proibido" },
  { name: "Números das Estatísticas em Fundo Areia", text: "#0a301a", bg: "#f5efe6", context: "Faixa de números 08, 0m, 3 a 15, +160" },
  { name: "Texto Secundário das Estatísticas em Fundo Areia", text: "#4a5c50", bg: "#f5efe6", context: "Legenda sob os números" },
  { name: "Card Branco em Fundo Brisa", text: "#0a301a", bg: "#ffffff", context: "Cards de depoimentos e FAQ" },
  { name: "Tag Verde Mata com Texto Branco", text: "#ffffff", bg: "#157d40", context: "Pills de status e categorias" },
  { name: "Acento Azul Enseada em Fundo Verde Noite", text: "#7abcd5", bg: "#082112", context: "Destaque náutico no escuro" }
];

const auditResults = pairsToAudit.map(pair => {
  const cr = contrastRatio(pair.text, pair.bg);
  return {
    ...pair,
    ratio: cr.toFixed(2) + ":1",
    wcagAA_Normal: cr >= 4.5 ? "PASS" : "FAIL",
    wcagAA_Large: cr >= 3.0 ? "PASS" : "FAIL",
    wcagAAA: cr >= 7.0 ? "PASS" : "FAIL"
  };
});

// Captura de Screenshots Baseline Antes (1366, 768, 390)
const outDir = path.resolve("PROJETOS/pousada-eliiy-zita-pedro/06-qa/baseline-cores-antes");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function captureBaselines() {
  const browser = await chromium.launch();

  const viewports = [
    { name: "desktop-1366", width: 1366, height: 900 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-390", width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2
    });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3005");
    await page.waitForTimeout(4000); // aguarda fim do preloader

    // Fullpage screenshot
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-full.png`),
      fullPage: true
    });

    // Seção Hero
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-01-hero.png`)
    });

    // Seção Estatísticas
    await page.evaluate(() => {
      const stats = document.querySelector("#estrutura-numeros") || document.querySelector("section.bg-\\[\\#f5efe6\\]") || document.querySelector("#manifesto");
      if (stats) stats.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-02-stats.png`)
    });

    // Painéis de Foto
    await page.evaluate(() => {
      const panels = document.querySelector("#cenas-praia") || document.querySelector("#acomodacoes");
      if (panels) panels.scrollIntoView();
    });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(outDir, `${vp.name}-03-paineis-foto.png`)
    });

    await ctx.close();
  }

  await browser.close();
  console.log("Auditoria e Screenshots Baseline concluídos com sucesso.");
}

console.log("Hexes encontrados no código:", uniqueHexes);
console.log("Overlays pretos encontrados:", uniqueOverlays);
console.log("Resultados de Contraste:");
console.table(auditResults);

fs.writeFileSync(
  path.join(outDir, "auditoria-contraste.json"),
  JSON.stringify({ uniqueHexes, uniqueOverlays, auditResults }, null, 2)
);

captureBaselines().catch(err => {
  console.error(err);
  process.exit(1);
});
