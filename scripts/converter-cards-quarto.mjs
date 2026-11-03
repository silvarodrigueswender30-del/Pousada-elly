import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-quarto';
const destDirs = [
  'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quartos',
  'PROJETOS/pousada-eliiy-zita-pedro/site/public/media'
];

destDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = [
  { input: 'card-quarto1.jpg', output: 'quarto-card-1.webp' },
  { input: 'card-quarto2.jpg', output: 'quarto-card-2.webp' },
  { input: 'card-quarto3.jpg', output: 'quarto-card-3.webp' }
];

async function convert() {
  console.log('Iniciando conversão com sharp (1200x900, 4:3 cover center, quality 85)...');
  for (const item of files) {
    const inputPath = path.join(srcDir, item.input);
    const meta = await sharp(inputPath).metadata();
    console.log(`Original: ${item.input} - ${meta.width}x${meta.height} (${(fs.statSync(inputPath).size / 1024).toFixed(1)} KB)`);

    for (const d of destDirs) {
      const outputPath = path.join(d, item.output);
      await sharp(inputPath)
        .resize(1200, 900, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      const outStat = fs.statSync(outputPath);
      console.log(` -> Salvo em ${outputPath} (${(outStat.size / 1024).toFixed(1)} KB / ${outStat.size} bytes)`);
    }
  }
  console.log('Conversão concluída com sucesso!');
}

convert().catch(err => {
  console.error('Erro na conversão:', err);
  process.exit(1);
});
