export type LanguageKey = 'en' | 'es';

type CVSection = {
  title: string;
  items: string[];
};

type Translation = {
  nav: {
    home: string;
    works: string;
    about: string;
    instagram: string;
    cv: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  home: {
    studioStatement: string;
    highlightTitle: string;
    highlightCopy: string;
  };
  works: {
    pageTitle: string;
    intro: string;
    modal: {
      title: string;
      year: string;
      medium: string;
      dimensions: string;
      exhibition: string;
      close: string;
    };
  };
  about: {
    pageTitle: string;
    bio: string[];
    cvTitle: string;
    cvSections: CVSection[];
    portraitAlt: string;
  };
  contact: {
    pageTitle: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    formTitle: string;
    newsletterTitle: string;
    nameFieldLabel: string;
    emailFieldLabel: string;
    messageFieldLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
  };
  footer: {
    rights: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    worksTitle: string;
    worksDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  languageToggle: {
    label: string;
    short: string;
  };
};

export const translations: Record<LanguageKey, Translation> = {
  en: {
    nav: {
      home: 'Home',
      works: 'Selected Works',
      about: 'Bio',
      instagram: 'Instagram',
      cv: 'Download CV',
    },
    hero: {
      title: 'Fer Ricárdez',
      subtitle: 'Visual Artist | León, Guanajuato',
      description:
        'My work transforms personal experiences into visual narratives. As an artist with spinal muscular atrophy, I paint with urgency in the face of a weakening body. I explore disability, the dreamlike, and the autobiographical. Each piece is a testimony of my existence and a tangible dialogue with the world, beyond the screens that shaped my childhood and my career in technology.',
      cta: 'Explore Selected Works',
    },
    home: {
      studioStatement:
        'Color, memory, and the cadence of León guide each composition. Fer Ricárdez invites viewers to move slowly, tracing layers of pigment and gesture that echo the rhythm of daily life.',
      highlightTitle: 'Recent Series: Cartografías de Color',
      highlightCopy:
        'An ongoing body of work translating neighborhood walks into intuitive chromatic maps. Each canvas balances precise mark-making with improvisational movement, creating a visual score of the city.',
    },
    works: {
      pageTitle: 'Selected Works',
      intro:
        'A curated selection of paintings, murals, and works on paper from the last five years. Click any piece to view additional details.',
      modal: {
        title: 'Title',
        year: 'Year',
        medium: 'Medium',
        dimensions: 'Dimensions',
        exhibition: 'Exhibition',
        close: 'Close',
      },
    },
    about: {
      pageTitle: 'Bio',
      bio: [
        'Fernando Manuel Ricárdez Lara (León, Guanajuato, 1995) is a computer systems engineer from Universidad La Salle Bajío. He combines technological training with an artistic practice focused on disability, illness, and memory. His work transforms personal experiences, such as the diagnosis and surgery of a macro pituitary adenoma, into pictorial narratives that move between the surreal and the autobiographical. In 2025 he received the PECDA Guanajuato grant, was selected for the Pérez Romo Biennial and the XV Joaquín Clausell National Painting Biennial, and earned an Honorable Mention at the XI University Biennial of Contemporary Art. His exhibitions include solo and group shows in Mexico and abroad, highlighted by his first solo presentation at the Congress of the State of Guanajuato.',
      ],
      cvTitle: 'Curriculum Vitae',
      cvSections: [
        {
          title: 'Recognitions & Awards',
          items: [
            '2025 - Program for the Stimulus to Creation and Artistic Development (PECDA), Government of Mexico / Guanajuato',
            '2025 - Honorable Mention, XI National University Biennial of Contemporary Art, UABC, Tijuana',
            '2025 - Co-responsibility Grant for Artistic, Cultural & Creative Talent Incubation, IMJU León',
            '2024 - First Place, "Sin Barreras" International Art Competition, Argentina',
          ],
        },
        {
          title: 'Solo Exhibitions',
          items: [
            "2026 - 'Beyond Diagnosis', Envision Art Gallery, Wichita, Kansas, USA, July-August",
            "2026 - 'Clinical Vestiges', Museo de la Ciudad de San Francisco del Rincón, Guanajuato, Mexico, March-April",
            "2025 - 'Fragments of a Spinal Memory', Centro Cultural Santa Fe, Congress of the State of Guanajuato, Guanajuato, Mexico, May-June",
          ],
        },
        {
          title: 'Selected Group Exhibitions',
          items: [
            '2026 - Dr. Pérez Romo Painting Biennial, Autonomous University of Aguascalientes (UAA), Aguascalientes, Mexico',
            '2026 - Tránsitos: A Land That Overflows, Mi Museo Universitario, Universidad La Salle Bajío, León, Guanajuato, Mexico',
            '2026 - TRÁMITE — TOMO 0010, Garage Guanajuato, Querétaro, Mexico',
            '2025 - XI National University Biennial of Contemporary Art, Sala de Arte Álvaro Blancarte, Tijuana, Mexico',
            '2025 - XV Joaquín Clausell National Painting Biennial, UACAM, Campeche, Mexico',
            '2025 - Dr. Pérez Romo Painting Biennial, Autonomous University of Aguascalientes (UAA), Aguascalientes, Mexico',
            '2025 - 62nd Art of Possibilities Art Show & Sale, Courage Kenny Rehabilitation Institute, Minnesota, USA',
            '2024 - Sin Barreras International Art Contest, Argentina',
          ],
        },
        {
          title: 'Education & Training',
          items: [
            '2024-present - Private painting instruction with Oliver Esquivel Morales',
            '2024-present - Private painting instruction with José Juan Castro Escobedo',
            '2024-2026 - Art workshops, Universidad de Guanajuato',
            '2015-2019 - Software Engineering and Computer Systems, Universidad La Salle Bajío',
          ],
        },

      ],
      portraitAlt: 'Portrait of Fer Ricárdez',
    },
    contact: {
      pageTitle: 'Contact',
      intro:
        'For collaborations, commissions, or press inquiries please reach out through the channels below or send a direct message using the form.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      instagramLabel: 'Instagram',
      formTitle: 'Send a Message',
      newsletterTitle: 'Newsletter',
      nameFieldLabel: 'Name',
      emailFieldLabel: 'Email',
      messageFieldLabel: 'Message',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Email address',
      messagePlaceholder: 'Your message',
      submit: 'Send Message',
      newsletterPlaceholder: 'Email for updates',
      newsletterButton: 'Join Newsletter',
    },
    footer: {
      rights: '© 2025 Fer Ricárdez. All rights reserved.',
    },
    meta: {
      homeTitle: 'Fer Ricárdez | Visual Artist',
      homeDescription: 'Visual artist exploring disability, memory, and the autobiographical through painting.',
      worksTitle: 'Selected Works | Fer Ricárdez',
      worksDescription: 'Curated selection of recent paintings, murals, and works on paper.',
      aboutTitle: 'Bio | Fer Ricárdez',
      aboutDescription: 'Biography, exhibitions, and awards for visual artist Fer Ricárdez.',
      contactTitle: 'Contact | Fer Ricárdez',
      contactDescription: 'Collaborations, commissions, and press inquiries for Fer Ricárdez.',
    },
    languageToggle: {
      label: 'Cambiar idioma',
      short: 'ES',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      works: 'Obra Seleccionada',
      about: 'Bio',
      instagram: 'Instagram',
      cv: 'Descargar CV',
    },
    hero: {
      title: 'Fer Ricárdez',
      subtitle: 'Artista Visual | León, Guanajuato',
      description:
        'Mi obra transforma experiencias personales en narrativas visuales. Como artista con atrofia muscular espinal, pinto con un sentido de urgencia ante un cuerpo que decae. Exploro la discapacidad, lo onírico y lo autobiográfico. Cada pieza es testimonio de mi existencia y un diálogo tangible con el mundo, más allá de las pantallas que moldearon mi infancia y mi carrera en tecnología.',
      cta: 'Ver Obra Seleccionada',
    },
    home: {
      studioStatement:
        'Color, memoria y la cadencia de León guían cada composición. Fer Ricárdez invita a mirar con calma, siguiendo capas de pigmento y gesto que repiten el ritmo de la vida cotidiana.',
      highlightTitle: 'Serie Reciente: Cartografías de Color',
      highlightCopy:
        'Un cuerpo de trabajo en proceso que traduce caminatas de barrio en mapas cromáticos intuitivos. Cada lienzo equilibra trazos precisos con movimiento improvisado, componiendo una partitura visual de la ciudad.',
    },
    works: {
      pageTitle: 'Obra Seleccionada',
      intro:
        'Selección curada de pinturas, murales y obra sobre papel de los últimos cinco años. Haz clic en cada pieza para ver detalles.',
      modal: {
        title: 'Título',
        year: 'Año',
        medium: 'Técnica',
        dimensions: 'Dimensiones',
        exhibition: 'Exhibición',
        close: 'Cerrar',
      },
    },
    about: {
      pageTitle: 'Bio',
      bio: [
        'Fernando Manuel Ricárdez Lara (León, Guanajuato, 1995). Ingeniero en Sistemas Computacionales por la Universidad La Salle Bajío, combina su formación tecnológica con una práctica artística marcada por la exploración de la discapacidad, la enfermedad y la memoria. Su obra transforma experiencias personales, como el diagnóstico y la cirugía de un macroadenoma hipofisario, en narrativas pictóricas que dialogan entre lo surreal y lo autobiográfico. En 2025 obtuvo el PECDA Guanajuato, fue seleccionado en la Bienal Pérez Romo, en la XV Bienal Nacional de Pintura Joaquín Clausell y recibió Mención Honorífica en la XI Bienal Universitaria de Arte Contemporáneo. Ha participado en exposiciones individuales y colectivas en México y en el extranjero, destacando su primera muestra individual en el Congreso del Estado de Guanajuato.',
      ],
      cvTitle: 'Currículum',
      cvSections: [
        {
          title: 'Reconocimientos y Premios',
          items: [
            '2025 - Programa de Estímulo a la Creación y Desarrollo Artístico (PECDA), Gobierno de México / Guanajuato',
            '2025 - Mención Honorífica, XI Bienal Nacional Universitaria de Arte Contemporáneo, UABC, Tijuana',
            '2025 - Beca de Corresponsabilidad para la Incubación de Talento Artístico, Cultural y Creativo, IMJU León',
            '2024 - Primer Lugar, Concurso Internacional de Arte "Sin Barreras", Argentina',
          ],
        },
        {
          title: 'Exposiciones Individuales',
          items: [
            '2026 - "Beyond Diagnosis", Envision Art Gallery, Wichita, Kansas, EE. UU., julio-agosto',
            '2026 - "Vestigios clínicos", Museo de la Ciudad de San Francisco del Rincón, Guanajuato, México, marzo-abril',
            '2025 - "Fragmentos de un recuerdo espinal", Centro Cultural Santa Fe, Congreso del Estado de Guanajuato, Guanajuato, México, mayo-junio',
          ],
        },
        {
          title: 'Exposiciones Colectivas (Selección)',
          items: [
            '2026 - Bienal de Pintura "Dr. Pérez Romo", Universidad Autónoma de Aguascalientes (UAA), Aguascalientes, México',
            '2026 - Tránsitos: una tierra que desborda, Mi Museo Universitario, Universidad La Salle Bajío, León, Guanajuato, México',
            '2026 - TRÁMITE — TOMO 0010, Garage Guanajuato, Querétaro, México',
            '2025 - XI Bienal Nacional Universitaria de Arte Contemporáneo, Sala de Arte Álvaro Blancarte, Tijuana, México',
            '2025 - XV Bienal Nacional de Pintura Joaquín Clausell, UACAM, Campeche, México',
            '2025 - Bienal de Pintura "Dr. Pérez Romo", Universidad Autónoma de Aguascalientes (UAA), Aguascalientes, México',
            '2025 - 62nd Art of Possibilities Art Show & Sale, Courage Kenny Rehabilitation Institute, Minnesota, EE. UU.',
            '2024 - Concurso Internacional de Arte "Sin Barreras", Argentina',
          ],
        },
        {
          title: 'Estudios',
          items: [
            '2024 a la fecha - Clases privadas de pintura con Oliver Esquivel Morales',
            '2024 a la fecha - Clases privadas de pintura con José Juan Castro Escobedo',
            '2024-2026 - Talleres de arte, Universidad de Guanajuato',
            '2015-2019 - Ingeniería en Software y Sistemas Computacionales, Universidad La Salle Bajío',
          ],
        },

      ],
      portraitAlt: 'Retrato de Fer Ricárdez',
    },
    contact: {
      pageTitle: 'Contacto',
      intro:
        'Para colaboraciones, comisiones o prensa utiliza los siguientes medios o envía un mensaje directo con el formulario.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      instagramLabel: 'Instagram',
      formTitle: 'Enviar mensaje',
      newsletterTitle: 'Boletín',
      nameFieldLabel: 'Nombre',
      emailFieldLabel: 'Correo',
      messageFieldLabel: 'Mensaje',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      messagePlaceholder: 'Tu mensaje',
      submit: 'Enviar',
      newsletterPlaceholder: 'Correo para novedades',
      newsletterButton: 'Suscribirme',
    },
    footer: {
      rights: '© 2025 Fer Ricárdez. Todos los derechos reservados.',
    },
    meta: {
      homeTitle: 'Fer Ricárdez | Artista Visual',
      homeDescription: 'Artista visual que explora discapacidad, memoria y autobiografía a través de la pintura.',
      worksTitle: 'Obra Seleccionada | Fer Ricárdez',
      worksDescription: 'Selección curada de pinturas, murales y obra sobre papel recientes.',
      aboutTitle: 'Bio | Fer Ricárdez',
      aboutDescription: 'Biografía, exposiciones y reconocimientos de Fer Ricárdez.',
      contactTitle: 'Contacto | Fer Ricárdez',
      contactDescription: 'Colaboraciones, comisiones y prensa para Fer Ricárdez.',
    },
    languageToggle: {
      label: 'Switch language',
      short: 'EN',
    },
  },
};