const fs = require('node:fs');
const path = require('node:path');
const QRCode = require('qrcode');
const certificates = require('../src/data/certificates.json');

const identifier = process.argv[2];
if (!identifier) {
  console.error('Usage: npm run certificate:qr -- <certificate ID or artwork ID>');
  process.exit(1);
}

const certificate = certificates.find((item) =>
  item.certificateId.toLowerCase() === identifier.toLowerCase() ||
  item.artworkId.toLowerCase() === identifier.toLowerCase()
);

if (!certificate) {
  console.error(`No certificate found for "${identifier}".`);
  process.exit(1);
}

const outputDirectory = path.resolve(__dirname, '..', 'certificates', 'qr');
const outputFile = path.join(outputDirectory, `${certificate.certificateId}.svg`);
const verificationUrl = `https://ricardezfer.com/verify/${certificate.verificationToken}`;

fs.mkdirSync(outputDirectory, { recursive: true });
QRCode.toFile(outputFile, verificationUrl, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 4,
  color: { dark: '#000000', light: '#FFFFFF' },
}, (error) => {
  if (error) throw error;
  console.log(`Created ${outputFile}`);
  console.log(`URL: ${verificationUrl}`);
});
