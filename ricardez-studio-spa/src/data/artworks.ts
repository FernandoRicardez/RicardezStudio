export type LocalizedText = {
  en: string;
  es: string;
};

export type Artwork = {
  id: string;
  slug: string;
  title: LocalizedText;
  year: number;
  medium: LocalizedText;
  dimensions?: string;
  series?: LocalizedText;
  edition?: string;
  status?: 'available' | 'private-collection' | 'artist-collection' | 'not-available';
  description?: LocalizedText[];
  images: {
    src: string;
    alt: LocalizedText;
    caption?: LocalizedText;
    kind?: 'artwork' | 'detail' | 'installation' | 'documentation';
  }[];
  exhibitions?: { title: LocalizedText; venue?: string; city?: string; year?: number }[];
  recognitions?: { title: LocalizedText; year?: number }[];
  publications?: { title: LocalizedText; url?: string }[];
};

const legacyArtworks: Artwork[] = [
  {
    id: 'FER-2024-001',
    slug: 'mi-cabeza-da-limones',
    title: {
      en: 'My Head Grows Lemons',
      es: 'Mi cabeza da Limones',
    },
    year: 2024,
    medium: {
      en: 'Acrylic with marble dust on canvas',
      es: 'Acrilico con polvo de marmol sobre lienzo',
    },
    dimensions: '40 x 40 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/MiCabezaDaLimones.jpg', alt: { en: 'My Head Grows Lemons', es: 'Mi cabeza da Limones' } }],
    recognitions: [{ title: { en: 'Honorable mention, Emerging Artist, XI University Art Biennial (UABC)', es: 'Mencion honorifica como artista emergente en la XI Bienal de Arte Universitario (UABC)' } }],
    description: [
      {
        en: 'This piece began with the diagnosis of a pituitary tumor that a neurosurgeon described as the size of a "taco-stand lemon" (4 cm x 3 cm x 2 cm). The metaphor became the anchor for a series that embraces the surreal image of growing citrus inside the skull.',
        es: 'Esta obra surge del diagnostico de un tumor en mi hipofisis, descrito por un neurocirujano como del tamano de un limon "de taqueria" (4 cm x 3 cm x 2 cm). Esta metafora se convirtio en el punto de partida para explorar una serie de pinturas basadas en lo surreal de tener un limon en la cabeza.',
      },
      {
        en: 'The painting is rendered at a one-to-one scale, positioning the lemon where the tumor lived. I relied on the first emergency MRI to map the form, translating clinical scans into a tactile visual testimony.',
        es: 'La pintura esta realizada a escala 1:1, mostrando mi cabeza con la posicion y el tamano del tumor, ahora convertido en limon. Para lograr esta representacion me apoye en la primera resonancia magnetica de emergencia.',
      },
    ],
  },
  {
    id: 'FER-2024-002',
    slug: 'brotes-de-agradecimiento',
    title: {
      en: 'Sprouts of Gratitude',
      es: 'Brotes de agradecimiento',
    },
    year: 2024,
    medium: {
      en: 'Acrylic with modeling clay on canvas',
      es: 'Acrilico con plastilita sobre lienzo',
    },
    dimensions: '50 x 50 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/BrotesDeAgradecimiento.jpg', alt: { en: 'Sprouts of Gratitude', es: 'Brotes de agradecimiento' } }],
    description: [
      {
        en: 'Gratitude blossoms as small flowers that mark a new beginning. This work was created for the neurosurgeon who removed a macro pituitary adenoma from my brain in August 2024.',
        es: 'El agradecimiento brota en mi como pequenas flores, marcando un nuevo comienzo. Esta obra fue realizada como agradecimiento para la neurocirujana que removio un macro adenoma hipofisiario en agosto de 2024.',
      },
      {
        en: 'Layered textures and bright color invite viewers to find beauty inside resilience and to embrace gratitude even in difficult seasons.',
        es: 'Con texturas en capas y colores brillantes invito a encontrar belleza en la resiliencia y a abrazar el agradecimiento incluso en tiempos dificiles.',
      },
    ],
  },
  {
    id: 'FER-2024-003',
    slug: 'maligno-benigno',
    title: {
      en: 'Malignant / Benign',
      es: 'Maligno / Benigno',
    },
    year: 2024,
    medium: {
      en: 'Acrylic on canvas (diptych)',
      es: 'Acrilico sobre lienzo (diptico)',
    },
    dimensions: '25 x 51 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/MalignoBenigno.jpg', alt: { en: 'Malignant / Benign', es: 'Maligno / Benigno' } }],
    recognitions: [{ title: { en: 'Honorable mention, Emerging Artist, XI University Art Biennial (UABC)', es: 'Mencion honorifica como artista emergente en la XI Bienal de Arte Universitario (UABC)' } }],
    description: [
      {
        en: 'This diptych emerged from the pathology reports of my tumor. Initial results pointed to a metastatic pituitary adenocarcinoma, an extremely rare diagnosis that opened a second round of studies and reviews.',
        es: 'Diptico que surge del diagnostico patologico de mi tumor. Los resultados iniciales indicaban adenocarcinoma hipofisiario en metastasis, un diagnostico raro que abrio nuevas revisiones y estudios.',
      },
      {
        en: 'In "Malignant" the tumor appears as a lemon held by a crab claw, a direct symbol for cancer and the fear of an aggressive verdict. "Benign" enshrines the form on a luminous altar, echoing the Schrodinger-like uncertainty where dread and hope coexist.',
        es: 'En "Maligno" el tumor se simboliza como un limon sostenido por una tenaza de cangrejo, evocando el temor de un diagnostico agresivo. En "Benigno" el tumor se presenta como un altar luminoso, una dualidad al estilo del gato de Schroedinger donde conviven la ansiedad y la esperanza.',
      },
    ],
  },
  {
    id: 'FER-2025-001',
    slug: 'sustento-electrorganico',
    title: {
      en: 'Electrorganic Sustenance',
      es: 'Sustento electrorganico',
    },
    year: 2025,
    medium: {
      en: 'Acrylic on canvas',
      es: 'Acrilico sobre lienzo',
    },
    dimensions: '90 x 40 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/SustentoElectroOrganico.jpg', alt: { en: 'Electrorganic Sustenance', es: 'Sustento electrorganico' } }],
    exhibitions: [{ title: { en: 'Dr. Perez Romo Biennial', es: 'Bienal Dr Perez Romo' }, venue: 'UAA', year: 2025 }],
    description: [
      {
        en: 'One day before my tumor ruptured I watched a cloudy sky intersected by a power pole, hovering like a dream. The next day, from a hospital bed, a serum pole mirrored that vision. Both fused into a single memory.',
        es: 'Un dia antes de que mi tumor se rompiera observe el cielo nublado atravesado por un poste de luz. Al dia siguiente, desde la cama del hospital, vi el poste de suero. Ambos se fundieron en mi memoria.',
      },
      {
        en: 'The work holds the tension between organic and mechanical support systems: the electricity that powers my chair and bed, and the IV that sustained my body. Two poles, one lifeline.',
        es: 'La obra plantea una dualidad entre lo organico y lo mecanico: la electricidad que sostiene mi silla y mi cama, y el suero que mantuvo con vida a mi cuerpo. Dos postes, un mismo sustento.',
      },
    ],
  },
  {
    id: 'FER-2025-002',
    slug: 'costo-cuerpo-internado',
    title: {
      en: 'Cost of a Hospitalized Body',
      es: 'Costo de un cuerpo internado',
    },
    year: 2025,
    medium: {
      en: 'Acrylic on canvas',
      es: 'Acrilico sobre lienzo',
    },
    dimensions: '100 x 75 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/CsostoCuerpoIntternado.jpg', alt: { en: 'Cost of a Hospitalized Body', es: 'Costo de un cuerpo internado' } }],
    exhibitions: [{ title: { en: 'XV Joaquin Clausell Painting Biennial', es: 'XV Bienal de Pintura Joaquin Clausell' }, venue: 'UACAM' }],
    description: [
      {
        en: 'Each ten-millimeter grid square, separated by two millimeters, represents the roughly 4,941 USD spent during my first hospitalization for a macro pituitary adenoma.',
        es: 'Cada cuadrícula de 10 mm, separada por 2 mm, simboliza los aproximadamente 4,941 dolares gastados en mi primer internamiento por un macroadenoma hipofisiario.',
      },
      {
        en: 'Up close the painting tracks individual expenses; at a distance it reveals a mosaic about inequity and the fragile economics of staying alive.',
        es: 'De cerca la pintura registra gastos puntuales; a distancia revela un mosaico sobre la desigualdad y la fragilidad economica de permanecer con vida.',
      },
    ],
  },
  {
    id: 'FER-2024-004',
    slug: '14-y-47-fragmentos-de-luz',
    title: {
      en: '14 & 47, Light Fragments',
      es: '14 y 47, Fragmentos de luz',
    },
    year: 2024,
    medium: {
      en: 'Acrylic on canvas',
      es: 'Acrilico sobre lienzo',
    },
    dimensions: '91 x 157 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/14y47fragmentosdeLuz.jpg', alt: { en: '14 & 47, Light Fragments', es: '14 y 47, Fragmentos de luz' } }],
    description: [
      {
        en: 'The composition mirrors the visual acuity percentages I had in each eye when the tumor affected my sight. The world appeared divided yet flooded with light and color.',
        es: 'La composicion refleja los porcentajes de agudeza visual que tenia en cada ojo cuando el tumor afecto mi vista. El mundo se percibia dividido pero lleno de luz y color.',
      },
      {
        en: 'A gradient from red to violet references the visible spectrum, while the grid filters the passage of light. Limitations in perception become a structure through which color continues to flow.',
        es: 'La gradacion cromatica del rojo al violeta alude al espectro visible, mientras la cuadricula filtra el paso de la luz. Las limitaciones en la percepcion se vuelven estructura para que el color siga fluyendo.',
      },
    ],
  },
  {
    id: 'FER-2025-003',
    slug: 'buscando-cuerpos-extranos-con-positrones',
    title: {
      en: 'Searching for Foreign Bodies with Positrons',
      es: 'Buscando cuerpos extranos con positrones',
    },
    year: 2025,
    medium: {
      en: 'Mixed media (oil and acrylic) on canvas',
      es: 'Tecnica mixta (oleo y acrilico) sobre lienzo',
    },
    dimensions: '80 x 45 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/BuscandoCuerposPositrones.jpg', alt: { en: 'Searching for Foreign Bodies with Positrons', es: 'Buscando cuerpos extranos con positrones' } }],
    description: [
      {
        en: 'After surgery the initial pathology suggested metastasis, triggering a cascade of tests: colonoscopy, blood work, a PET scan. The radioactive liquid rendered my body on a disc, transparent and asymmetrical.',
        es: 'Tras la cirugia los primeros resultados patologicos sugirieron metastasis y desencadenaron estudios: colonoscopia, analisis de sangre, tomografia PET. El liquido radiactivo mostro mi cuerpo transparente y asimetrico.',
      },
      {
        en: 'Living with spinal muscular atrophy has shaped my form. This painting is both clinical and emotional, a self-exploration of a body that resists while confronting the possibility of more foreign growths.',
        es: 'Vivir con atrofia muscular espinal ha moldeado mi cuerpo. La obra es clinica y emocional a la vez: una autoexploracion de un cuerpo que resiste mientras enfrenta la posibilidad de nuevos cuerpos extranos.',
      },
    ],
  },
  {
    id: 'FER-2023-001',
    slug: 'quizas-marte-sea-mas-accesible',
    title: {
      en: 'Perhaps Mars Will Be More Accessible',
      es: 'Quizas Marte sea mas accesible',
    },
    year: 2023,
    medium: {
      en: 'Acrylic on canvas',
      es: 'Acrilico sobre lienzo',
    },
    dimensions: '35 x 45 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/Quiza-marte-sea-mas-accesible_Fernando-Manuel-Ricardez-Lara.jpg', alt: { en: 'Perhaps Mars Will Be More Accessible', es: 'Quizas Marte sea mas accesible' } }],
    recognitions: [{ title: { en: 'First prize, Latin American "Sin Barreras" competition, Argentina', es: 'Primer lugar en el concurso latinoamericano "Sin barreras", Argentina' } }],
    description: [
      {
        en: 'Vivid colors and simplified forms speak to the complexity of securing dignified housing, a challenge magnified for disabled people. An astronaut in a wheelchair faces a house inspired by Barragan and Legorreta palettes.',
        es: 'Con colores vivos y formas simples abordo la complejidad de acceder a una vivienda digna, un reto amplificado para las personas con discapacidad. Un astronauta en silla de ruedas mira una casa con paleta inspirada en Barragan y Legorreta.',
      },
      {
        en: 'The work asks whether the barriers we meet on Earth would repeat in any new colony, and whether we can transform our shared spaces here without escaping to another planet.',
        es: 'La obra cuestiona si las barreras que enfrentamos en la Tierra se repetirian en otra colonia y si podemos transformar nuestros espacios compartidos sin escapar a otro planeta.',
      },
    ],
  },
  {
    id: 'FER-2024-005',
    slug: 'familia-rampa-y-lazos',
    title: {
      en: 'Family, Ramp, and Ties',
      es: 'Familia, rampa, y lazos',
    },
    year: 2024,
    medium: {
      en: 'Acrylic on canvas with hemp thread',
      es: 'Acrilico sobre lienzo con hilo de canamo',
    },
    dimensions: '100 x 150 cm',
    status: 'not-available',
    images: [{ src: '/assets/paintings/FamiliaRampayLazos_15x100x4_FernandoRicardez.jpg', alt: { en: 'Family, Ramp, and Ties', es: 'Familia, rampa, y lazos' } }],
    description: [
      {
        en: 'A family self-portrait anchored by a wooden ramp, capturing daily negotiations with accessibility. Every character and object: parents, children, tree, ramp; embodies a facet of collective resilience.',
        es: 'Autorretrato familiar anclado por una rampa de madera que captura las negociaciones cotidianas con la accesibilidad. Cada personaje y objeto representa una faceta de la resiliencia colectiva.',
      },
      {
        en: 'The ramp and steps symbolize both obstacles and solutions on the path toward independence. Disability shapes family life and mirrors broader social realities.',
        es: 'La rampa y los escalones simbolizan obstaculos y soluciones en el camino hacia la independencia. La discapacidad da forma a la vida familiar y refleja realidades sociales mas amplias.',
      },
      {
        en: 'It is a call to recognize diversity and to build inclusive environments through everyday acts of care.',
        es: 'Es un llamado a reconocer la diversidad y construir entornos inclusivos a traves de actos cotidianos de cuidado.',
      },
    ],
  },
];

export const artworks: Artwork[] = [
  ...legacyArtworks,
  ...(publishedArtworkRecords as Artwork[]),
];
import publishedArtworkRecords from './published-artworks.generated.json';
