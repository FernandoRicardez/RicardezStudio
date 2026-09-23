const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');
const archiveRoot = path.join(appRoot, 'content', 'artworks');
const publicRoot = path.join(appRoot, 'public', 'assets', 'artworks');
const outputFile = path.join(appRoot, 'src', 'data', 'published-artworks.generated.json');
const records = [];

const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (entry.name === 'artwork.json') records.push({ file: target, directory });
  }
};
walk(archiveRoot);

const published = records.flatMap(({ file, directory }) => {
  const record = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (record.visibility !== 'published') return [];
  const required = [record.id, record.slug, record.year, record.title?.es, record.title?.en, record.medium?.es, record.medium?.en, record.images?.[0]?.file];
  if (required.some((value) => value === null || value === undefined || value === '')) {
    throw new Error(`Published artwork is missing required catalog data: ${file}`);
  }

  const images = record.images.map((image) => {
    const source = path.join(directory, image.file);
    if (!fs.existsSync(source)) throw new Error(`Missing image ${image.file} for ${record.slug}`);
    const destinationDirectory = path.join(publicRoot, String(record.year), record.slug);
    fs.mkdirSync(destinationDirectory, { recursive: true });
    fs.copyFileSync(source, path.join(destinationDirectory, image.file));
    return {
      src: `/assets/artworks/${record.year}/${record.slug}/${image.file}`,
      alt: image.alt,
      kind: image.kind,
    };
  });

  return [{
    id: record.id,
    slug: record.slug,
    title: record.title,
    year: record.year,
    medium: record.medium,
    dimensions: record.dimensions?.heightCm && record.dimensions?.widthCm
      ? `${record.dimensions.heightCm} × ${record.dimensions.widthCm} cm`
      : undefined,
    status: record.status || undefined,
    description: record.descriptions?.es && record.descriptions?.en
      ? [{ es: record.descriptions.es, en: record.descriptions.en }]
      : undefined,
    images,
    exhibitions: record.exhibitions?.length ? record.exhibitions : undefined,
    recognitions: record.recognitions?.length ? record.recognitions : undefined,
    publications: record.publications?.length ? record.publications : undefined,
  }];
});

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(published, null, 2)}\n`, 'utf8');
console.log(`Synced ${published.length} published artwork record(s).`);
