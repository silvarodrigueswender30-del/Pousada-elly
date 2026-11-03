const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const input = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/hero.jpg';
  const outJpg = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/og-whatsapp.jpg';
  const outRootJpg = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/og-image.jpg';
  const outAppJpg = 'PROJETOS/pousada-eliiy-zita-pedro/site/src/app/opengraph-image.jpg';
  const outTwitterJpg = 'PROJETOS/pousada-eliiy-zita-pedro/site/src/app/twitter-image.jpg';

  console.log('Gerando imagem oficial Open Graph / WhatsApp (1200x630, JPG, Q=88)...');

  // 1200x630 é a dimensão canônica do WhatsApp e Facebook
  await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 88, progressive: true })
    .toFile(outJpg);

  fs.copyFileSync(outJpg, outRootJpg);
  fs.copyFileSync(outJpg, outAppJpg);
  fs.copyFileSync(outJpg, outTwitterJpg);

  const s = fs.statSync(outJpg).size;
  console.log(`Imagem gerada com sucesso: ${(s / 1024).toFixed(1)} KB (${s} bytes)`);
}

createOgImage().catch(console.error);
