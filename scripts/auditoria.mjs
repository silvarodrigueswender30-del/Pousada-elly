import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteScript = path.resolve(__dirname, "../site/scripts/auditoria.mjs");
const siteDir = path.resolve(__dirname, "../site");

try {
  execSync(`node "${siteScript}"`, { cwd: siteDir, stdio: "inherit" });
  process.exit(0);
} catch (err) {
  process.exit(1);
}
