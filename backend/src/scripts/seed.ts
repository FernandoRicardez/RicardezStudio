import { pool } from '../config/database';

type InitialArtwork = {
  slug: string;
  titleEn: string;
  titleEs: string;
  year: number;
  widthCm: number;
  heightCm: number;
  mediumEn: string;
  mediumEs: string;
  descriptionEn: string;
  descriptionEs: string;
  exhibitionEn?: string;
  exhibitionEs?: string;
  imageUrl: string;
};

const initialArtworks: InitialArtwork[] = [
  {
    slug: '2024-mi-cabeza-da-limones',
    titleEn: 'My Head Grows Lemons',
    titleEs: 'Mi cabeza da Limones',
    year: 2024,
    widthCm: 40,
    heightCm: 40,
    mediumEn: 'Acrylic with marble dust on canvas',
    mediumEs: 'Acrílico con polvo de mármol sobre lienzo',
    descriptionEn: 'This piece began with the diagnosis of a pituitary tumor that a neurosurgeon described as the size of a "taco-stand lemon" (4 cm x 3 cm x 2 cm). The metaphor became the anchor for a series that embraces the surreal image of growing citrus inside the skull.\n\nThe painting is rendered at a one-to-one scale, positioning the lemon where the tumor lived. I relied on the first emergency MRI to map the form, translating clinical scans into a tactile visual testimony.',
    descriptionEs: 'Esta obra surge del diagnóstico de un tumor en mi hipófisis, descrito por un neurocirujano como del tamaño de un limón "de taquería" (4 cm x 3 cm x 2 cm). Esta metáfora se convirtió en el punto de partida para explorar una serie de pinturas basadas en lo surreal de tener un limón en la cabeza.\n\nLa pintura está realizada a escala 1:1, mostrando mi cabeza con la posición y el tamaño del tumor, ahora convertido en limón. Para lograr esta representación me apoyé en la primera resonancia magnética de emergencia.',
    exhibitionEn: 'Honorable mention, Emerging Artist, XI University Art Biennial (UABC)',
    exhibitionEs: 'Mención honorífica como artista emergente en la XI Bienal de Arte Universitario (UABC)',
    imageUrl: '/assets/paintings/MiCabezaDaLimones.jpg',
  },
  {
    slug: '2024-brotes-de-agradecimiento',
    titleEn: 'Sprouts of Gratitude',
    titleEs: 'Brotes de agradecimiento',
    year: 2024,
    widthCm: 50,
    heightCm: 50,
    mediumEn: 'Acrylic with modeling clay on canvas',
    mediumEs: 'Acrílico con plastilita sobre lienzo',
    descriptionEn: 'Gratitude blossoms as small flowers that mark a new beginning. This work was created for the neurosurgeon who removed a macro pituitary adenoma from my brain in August 2024.\n\nLayered textures and bright color invite viewers to find beauty inside resilience and to embrace gratitude even in difficult seasons.',
    descriptionEs: 'El agradecimiento brota en mí como pequeñas flores, marcando un nuevo comienzo. Esta obra fue realizada como agradecimiento para la neurocirujana que removió un macroadenoma hipofisiario en agosto de 2024.\n\nCon texturas en capas y colores brillantes invito a encontrar belleza en la resiliencia y a abrazar el agradecimiento incluso en tiempos difíciles.',
    imageUrl: '/assets/paintings/BrotesDeAgradecimiento.jpg',
  },
  {
    slug: '2024-maligno-benigno',
    titleEn: 'Malignant / Benign',
    titleEs: 'Maligno / Benigno',
    year: 2024,
    widthCm: 25,
    heightCm: 51,
    mediumEn: 'Acrylic on canvas (diptych)',
    mediumEs: 'Acrílico sobre lienzo (díptico)',
    descriptionEn: 'This diptych emerged from the pathology reports of my tumor. Initial results pointed to a metastatic pituitary adenocarcinoma, an extremely rare diagnosis that opened a second round of studies and reviews.\n\nIn "Malignant" the tumor appears as a lemon held by a crab claw, a direct symbol for cancer and the fear of an aggressive verdict. "Benign" enshrines the form on a luminous altar, echoing the Schrodinger-like uncertainty where dread and hope coexist.',
    descriptionEs: 'Díptico que surge del diagnóstico patológico de mi tumor. Los resultados iniciales indicaban adenocarcinoma hipofisiario en metástasis, un diagnóstico raro que abrió nuevas revisiones y estudios.\n\nEn "Maligno" el tumor se simboliza como un limón sostenido por una tenaza de cangrejo, evocando el temor de un diagnóstico agresivo. En "Benigno" el tumor se presenta como un altar luminoso, una dualidad al estilo del gato de Schrödinger donde conviven la ansiedad y la esperanza.',
    exhibitionEn: 'Honorable mention, Emerging Artist, XI University Art Biennial (UABC)',
    exhibitionEs: 'Mención honorífica como artista emergente en la XI Bienal de Arte Universitario (UABC)',
    imageUrl: '/assets/paintings/MalignoBenigno.jpg',
  },
  {
    slug: '2025-sustento-electrorganico',
    titleEn: 'Electrorganic Sustenance',
    titleEs: 'Sustento electrorgánico',
    year: 2025,
    widthCm: 90,
    heightCm: 40,
    mediumEn: 'Acrylic on canvas',
    mediumEs: 'Acrílico sobre lienzo',
    descriptionEn: 'One day before my tumor ruptured I watched a cloudy sky intersected by a power pole, hovering like a dream. The next day, from a hospital bed, a serum pole mirrored that vision. Both fused into a single memory.\n\nThe work holds the tension between organic and mechanical support systems: the electricity that powers my chair and bed, and the IV that sustained my body. Two poles, one lifeline.',
    descriptionEs: 'Un día antes de que mi tumor se rompiera observé el cielo nublado atravesado por un poste de luz. Al día siguiente, desde la cama del hospital, vi el poste de suero. Ambos se fundieron en mi memoria.\n\nLa obra plantea una dualidad entre lo orgánico y lo mecánico: la electricidad que sostiene mi silla y mi cama, y el suero que mantuvo con vida a mi cuerpo. Dos postes, un mismo sustento.',
    exhibitionEn: 'Selected for the Dr. Perez Romo Biennial 2025 (UAA)',
    exhibitionEs: 'Obra seleccionada en la Bienal Dr. Pérez Romo 2025 (UAA)',
    imageUrl: '/assets/paintings/SustentoElectroOrganico.jpg',
  },
  {
    slug: '2025-costo-cuerpo-internado',
    titleEn: 'Cost of a Hospitalized Body',
    titleEs: 'Costo de un cuerpo internado',
    year: 2025,
    widthCm: 100,
    heightCm: 75,
    mediumEn: 'Acrylic on canvas',
    mediumEs: 'Acrílico sobre lienzo',
    descriptionEn: 'Each ten-millimeter grid square, separated by two millimeters, represents the roughly 4,941 USD spent during my first hospitalization for a macro pituitary adenoma.\n\nUp close the painting tracks individual expenses; at a distance it reveals a mosaic about inequity and the fragile economics of staying alive.',
    descriptionEs: 'Cada cuadrícula de 10 mm, separada por 2 mm, simboliza los aproximadamente 4,941 dólares gastados en mi primer internamiento por un macroadenoma hipofisiario.\n\nDe cerca la pintura registra gastos puntuales; a distancia revela un mosaico sobre la desigualdad y la fragilidad económica de permanecer con vida.',
    exhibitionEn: 'Selected for the XV Joaquin Clausell Painting Biennial (UACAM)',
    exhibitionEs: 'Seleccionada en la XV Bienal de Pintura Joaquín Clausell (UACAM)',
    imageUrl: '/assets/paintings/CsostoCuerpoIntternado.jpg',
  },
  {
    slug: '2024-14-y-47',
    titleEn: '14 & 47, Light Fragments',
    titleEs: '14 y 47, Fragmentos de luz',
    year: 2024,
    widthCm: 91,
    heightCm: 157,
    mediumEn: 'Acrylic on canvas',
    mediumEs: 'Acrílico sobre lienzo',
    descriptionEn: 'The composition mirrors the visual acuity percentages I had in each eye when the tumor affected my sight. The world appeared divided yet flooded with light and color.\n\nA gradient from red to violet references the visible spectrum, while the grid filters the passage of light. Limitations in perception become a structure through which color continues to flow.',
    descriptionEs: 'La composición refleja los porcentajes de agudeza visual que tenía en cada ojo cuando el tumor afectó mi vista. El mundo se percibía dividido pero lleno de luz y color.\n\nLa gradación cromática del rojo al violeta alude al espectro visible, mientras la cuadrícula filtra el paso de la luz. Las limitaciones en la percepción se vuelven estructura para que el color siga fluyendo.',
    imageUrl: '/assets/paintings/14y47fragmentosdeLuz.jpg',
  },
  {
    slug: '2025-positrones',
    titleEn: 'Searching for Foreign Bodies with Positrons',
    titleEs: 'Buscando cuerpos extraños con positrones',
    year: 2025,
    widthCm: 80,
    heightCm: 45,
    mediumEn: 'Mixed media (oil and acrylic) on canvas',
    mediumEs: 'Técnica mixta (óleo y acrílico) sobre lienzo',
    descriptionEn: 'After surgery the initial pathology suggested metastasis, triggering a cascade of tests: colonoscopy, blood work, a PET scan. The radioactive liquid rendered my body on a disc, transparent and asymmetrical.\n\nLiving with spinal muscular atrophy has shaped my form. This painting is both clinical and emotional, a self-exploration of a body that resists while confronting the possibility of more foreign growths.',
    descriptionEs: 'Tras la cirugía los primeros resultados patológicos sugirieron metástasis y desencadenaron estudios: colonoscopia, análisis de sangre, tomografía PET. El líquido radiactivo mostró mi cuerpo transparente y asimétrico.\n\nVivir con atrofia muscular espinal ha moldeado mi cuerpo. La obra es clínica y emocional a la vez: una autoexploración de un cuerpo que resiste mientras enfrenta la posibilidad de nuevos cuerpos extraños.',
    imageUrl: '/assets/paintings/BuscandoCuerposPositrones.jpg',
  },
  {
    slug: '2023-quizas-marte',
    titleEn: 'Perhaps Mars Will Be More Accessible',
    titleEs: 'Quizás Marte sea más accesible',
    year: 2023,
    widthCm: 35,
    heightCm: 45,
    mediumEn: 'Acrylic on canvas',
    mediumEs: 'Acrílico sobre lienzo',
    descriptionEn: 'Vivid colors and simplified forms speak to the complexity of securing dignified housing, a challenge magnified for disabled people. An astronaut in a wheelchair faces a house inspired by Barragan and Legorreta palettes.\n\nThe work asks whether the barriers we meet on Earth would repeat in any new colony, and whether we can transform our shared spaces here without escaping to another planet.',
    descriptionEs: 'Con colores vivos y formas simples abordo la complejidad de acceder a una vivienda digna, un reto amplificado para las personas con discapacidad. Un astronauta en silla de ruedas mira una casa con paleta inspirada en Barragán y Legorreta.\n\nLa obra cuestiona si las barreras que enfrentamos en la Tierra se repetirían en otra colonia y si podemos transformar nuestros espacios compartidos sin escapar a otro planeta.',
    exhibitionEn: 'First prize, Latin American "Sin Barreras" competition, Argentina',
    exhibitionEs: 'Primer lugar en el concurso latinoamericano "Sin barreras", Argentina',
    imageUrl: '/assets/paintings/Quiza-marte-sea-mas-accesible_Fernando-Manuel-Ricardez-Lara.jpg',
  },
  {
    slug: '2024-familia-rampa-lazos',
    titleEn: 'Family, Ramp, and Ties',
    titleEs: 'Familia, rampa y lazos',
    year: 2024,
    widthCm: 100,
    heightCm: 150,
    mediumEn: 'Acrylic on canvas with hemp thread',
    mediumEs: 'Acrílico sobre lienzo con hilo de cáñamo',
    descriptionEn: 'A family self-portrait anchored by a wooden ramp, capturing daily negotiations with accessibility. Every character and object—parents, children, tree, ramp—embodies a facet of collective resilience.\n\nThe ramp and steps symbolize both obstacles and solutions on the path toward independence. Disability shapes family life and mirrors broader social realities.\n\nIt is a call to recognize diversity and to build inclusive environments through everyday acts of care.',
    descriptionEs: 'Autorretrato familiar anclado por una rampa de madera que captura las negociaciones cotidianas con la accesibilidad. Cada personaje y objeto—padres, hijos, árbol y rampa—representa una faceta de la resiliencia colectiva.\n\nLa rampa y los escalones simbolizan obstáculos y soluciones en el camino hacia la independencia. La discapacidad da forma a la vida familiar y refleja realidades sociales más amplias.\n\nEs un llamado a reconocer la diversidad y construir entornos inclusivos a través de actos cotidianos de cuidado.',
    imageUrl: '/assets/paintings/FamiliaRampayLazos_15x100x4_FernandoRicardez.jpg',
  },
];

async function seed(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required to seed the database.');
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    for (const artwork of initialArtworks) {
      await client.query(
        `
          INSERT INTO artworks (
            slug,
            title_en,
            title_es,
            year,
            width_cm,
            height_cm,
            medium_en,
            medium_es,
            description_en,
            description_es,
            exhibition_en,
            exhibition_es,
            image_url,
            status
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 'hidden')
          ON CONFLICT (slug) DO UPDATE SET
            title_en = EXCLUDED.title_en,
            title_es = EXCLUDED.title_es,
            year = EXCLUDED.year,
            width_cm = EXCLUDED.width_cm,
            height_cm = EXCLUDED.height_cm,
            medium_en = EXCLUDED.medium_en,
            medium_es = EXCLUDED.medium_es,
            description_en = EXCLUDED.description_en,
            description_es = EXCLUDED.description_es,
            exhibition_en = EXCLUDED.exhibition_en,
            exhibition_es = EXCLUDED.exhibition_es,
            image_url = EXCLUDED.image_url
        `,
        [
          artwork.slug,
          artwork.titleEn,
          artwork.titleEs,
          artwork.year,
          artwork.widthCm,
          artwork.heightCm,
          artwork.mediumEn,
          artwork.mediumEs,
          artwork.descriptionEn,
          artwork.descriptionEs,
          artwork.exhibitionEn || null,
          artwork.exhibitionEs || null,
          artwork.imageUrl,
        ]
      );
    }

    await client.query('COMMIT');
    console.log(`Seeded ${initialArtworks.length} artworks`);
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch((error) => {
  console.error('Database seed failed', error);
  process.exitCode = 1;
});
