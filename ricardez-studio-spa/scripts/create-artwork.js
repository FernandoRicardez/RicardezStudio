const fs = require('node:fs');
const path = require('node:path');

const [year, slug] = process.argv.slice(2);
if (!year || !slug || !/^(\d{4}|in-progress)$/.test(year) || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run artwork:new -- <YYYY|in-progress> <slug>');
  process.exit(1);
}

const directory = path.resolve(__dirname, '..', 'content', 'artworks', year, slug);
const file = path.join(directory, 'artwork.json');
if (fs.existsSync(file)) {
  console.error(`Artwork already exists: ${file}`);
  process.exit(1);
}

const completedYear = year === 'in-progress' ? null : Number(year);
const record = {
  id: null,
  slug,
  visibility: 'draft',
  title: { es: null, en: null },
  startedAt: null,
  completedAt: null,
  year: completedYear,
  medium: { es: null, en: null },
  dimensions: { heightCm: null, widthCm: null },
  status: null,
  series: null,
  edition: null,
  descriptions: { es: null, en: null },
  images: [],
  exhibitions: [],
  recognitions: [],
  publications: [],
  review: ['metadata-review-needed', 'image-needed'],
};

fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(file, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
console.log(`Created ${file}`);
