const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processQuemSomos() {
  const input = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-editada/patiomobile.jpg';
  const outWebp = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial/quem-somos.webp';
  const outAvif = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/editorial/quem-somos.avif';

  // Também salvar cópia em site/public/media/ para compatibilidade
  const outMediaWebp = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/quem-somos.webp';

  console.log('Convertendo patiomobile.jpg para quem-somos (aspect 4:4.6, 1200x1380)...');

  await sharp(input)
    .resize(1200, 1380, { fit: 'cover', position: 'center' })
    .webp({ quality: 86 })
    .toFile(outWebp);

  await sharp(input)
    .resize(1200, 1380, { fit: 'cover', position: 'center' })
    .avif({ quality: 82 })
    .toFile(outAvif);

  await sharp(input)
    .resize(1200, 1380, { fit: 'cover', position: 'center' })
    .webp({ quality: 86 })
    .toFile(outMediaWebp);

  // Também substituir suite-varanda.webp para garantir que qualquer referência antiga não mostre a foto do print
  const outSuiteVaranda = 'PROJETOS/pousada-eliiy-zita-pedro/site/public/media/suite-varanda.webp';
  await sharp(input)
    .resize(1200, 1380, { fit: 'cover', position: 'center' })
    .webp({ quality: 86 })
    .toFile(outSuiteVaranda);

  const sWebp = fs.statSync(outWebp).size;
  const sAvif = fs.statSync(outAvif).size;
  console.log(`Sucesso: quem-somos.webp: ${(sWebp / 1024).toFixed(1)} KB | quem-somos.avif: ${(sAvif / 1024).toFixed(1)} KB`);
}

processQuemSomos().catch(console.error);
