const fs = require('node:fs');
const path = require('node:path');

const archiveRoot = path.resolve(__dirname, '..', 'content', 'artworks');
const translations = new Map([
  ['acrilico con polvo de marmol sobre cartón', 'Acrylic with marble dust on cardboard'],
  ['acrilico con polvo de marmol sobre lienzo', 'Acrylic with marble dust on canvas'],
  ['acrilico e hilo sobre lienzo', 'Acrylic and thread on canvas'],
  ['acrilico sobre lienzo', 'Acrylic on canvas'],
  ['acrilico sobre terciopelo', 'Acrylic on velvet'],
  ['Gouache y acrilico sobre lienzo', 'Gouache and acrylic on canvas'],
  ['Imagen digital intervenida a partir de registros radiográficos, impresión sobre soporte translúcido y montaje en caja de luz', 'Digitally altered image derived from radiographic records, printed on translucent material and mounted in a light box'],
  ['Impresión digital Fine Art sobre papel Hahnemühle Photo Rag 308 g/m² Intervenida con Grabado', 'Fine art digital print on Hahnemühle Photo Rag 308 gsm paper, hand-finished with engraving'],
  ['Mixta oleo y acrilico sobre lienzo', 'Mixed media: oil and acrylic on canvas'],
  ['Mixta, oleo y hoja de oro', 'Mixed media: oil and gold leaf'],
  ['Mixta: óleo sobre collage y lienzo', 'Mixed media: oil on collage and canvas'],
  ['Oleo sobre lienzo', 'Oil on canvas'],
]);

const files = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (entry.name === 'artwork.json') files.push(target);
  }
};
walk(archiveRoot);

let updated = 0;
const unknown = new Set();
for (const file of files) {
  const record = JSON.parse(fs.readFileSync(file, 'utf8'));
  const translation = translations.get(record.medium?.es);
  if (!translation) {
    unknown.add(record.medium?.es ?? '(missing medium)');
    continue;
  }
  record.medium.en = translation;
  record.review = record.review.filter((flag) => flag !== 'medium-translation-needed');
  fs.writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
  updated += 1;
}

if (unknown.size) {
  console.error(`Untranslated media:\n${[...unknown].join('\n')}`);
  process.exit(1);
}
console.log(`Translated media for ${updated} artwork records.`);
