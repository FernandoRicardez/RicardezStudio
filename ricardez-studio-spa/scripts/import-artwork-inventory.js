const fs = require('node:fs');
const path = require('node:path');

const sourceFile = process.argv[2];
if (!sourceFile) {
  console.error('Usage: npm run artwork:import -- <inventory.tsv>');
  process.exit(1);
}

const archiveRoot = path.resolve(__dirname, '..', 'content', 'artworks');

const fixMojibake = (value) => {
  const text = value.trim();
  return /Ã|Â|â€/.test(text) ? Buffer.from(text, 'latin1').toString('utf8') : text;
};

const slugify = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '') || 'sin-titulo';

const parseDate = (value) => {
  if (!value || value.toLowerCase() === 'pendiente') return null;
  const [day, month, year] = value.split('/');
  if (!day || !month || !year) return null;
  return `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const parseCentimeters = (value) => {
  const number = Number(value.replace(',', '.'));
  return Number.isFinite(number) ? number : null;
};

const knownIds = new Map([
  ['quizá marte sea más accesible', 'FER-2023-001'],
  ['familia, rampa y lazos', 'FER-2024-005'],
  ['14 y 47, fragmentos de luz', 'FER-2024-004'],
  ['brotes de agradecimiento', 'FER-2024-002'],
  ['mi cabeza da limones', 'FER-2024-001'],
  ['sustento electrorgancio', 'FER-2025-001'],
  ['buscando cuerpos extraños con positrones', 'FER-2025-003'],
  ['árbol familiar', 'FER-2026-006'],
]);

const counters = new Map([[2022, 0], [2023, 1], [2024, 5], [2025, 3], [2026, 0]]);
const usedSlugs = new Set();
const lines = fs.readFileSync(path.resolve(sourceFile), 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
const rows = lines.slice(1).map((line, index) => {
  const [mediumEs = '', titleEn = '', titleEs = '', startedRaw = '', completedRaw = '', heightRaw = '', widthRaw = ''] = line.split('\t').map(fixMojibake);
  const startedAt = parseDate(startedRaw);
  const completedAt = parseDate(completedRaw);
  const folderYear = completedAt ? Number(completedAt.slice(0, 4)) : 'in-progress';
  const baseSlug = slugify(titleEs || titleEn);
  let slug = baseSlug;
  let suffix = 2;
  while (usedSlugs.has(`${folderYear}/${slug}`)) slug = `${baseSlug}-${suffix++}`;
  usedSlugs.add(`${folderYear}/${slug}`);

  let id = knownIds.get(titleEs.toLocaleLowerCase('es')) || null;
  if (typeof folderYear === 'number') {
    if (id) {
      const knownSequence = Number(id.split('-').at(-1));
      counters.set(folderYear, Math.max(counters.get(folderYear) || 0, knownSequence));
    } else {
      const next = (counters.get(folderYear) || 0) + 1;
      counters.set(folderYear, next);
      id = `FER-${folderYear}-${String(next).padStart(3, '0')}`;
    }
  }

  const review = [];
  if (!titleEn) review.push('missing-english-title');
  if (!titleEs) review.push('missing-spanish-title');
  if (!completedAt) review.push('completion-date-pending');
  review.push('image-needed', 'medium-translation-needed', 'publication-review-needed');

  return {
    folderYear,
    slug,
    record: {
      id,
      slug,
      visibility: 'draft',
      title: { es: titleEs || null, en: titleEn || null },
      startedAt,
      completedAt,
      year: typeof folderYear === 'number' ? folderYear : null,
      medium: { es: mediumEs || null, en: null },
      dimensions: { heightCm: parseCentimeters(heightRaw), widthCm: parseCentimeters(widthRaw) },
      status: null,
      series: null,
      edition: null,
      descriptions: { es: null, en: null },
      images: [],
      exhibitions: [],
      recognitions: [],
      publications: [],
      review,
      source: { file: path.basename(sourceFile), row: index + 2 },
    },
  };
});

let created = 0;
let skipped = 0;
for (const { folderYear, slug, record } of rows) {
  const directory = path.join(archiveRoot, String(folderYear), slug);
  const destination = path.join(directory, 'artwork.json');
  if (fs.existsSync(destination)) {
    skipped += 1;
    continue;
  }
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(destination, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
  created += 1;
}

const missingEnglish = rows.filter(({ record }) => !record.title.en).length;
const pending = rows.filter(({ record }) => !record.completedAt).length;
const report = `# Inventory import report\n\n- Records scaffolded: ${rows.length}\n- Missing English titles: ${missingEnglish}\n- Pending completion dates: ${pending}\n- Images currently needed: ${rows.length}\n\nEvery imported record remains \`draft\`. Review the flags in each \`artwork.json\` before publishing.\n`;
fs.writeFileSync(path.join(archiveRoot, 'IMPORT_REPORT.md'), report, 'utf8');
console.log(`Created ${created} draft artwork folders in ${archiveRoot}; skipped ${skipped} existing records.`);
console.log(`Missing English titles: ${missingEnglish}; pending works: ${pending}`);
