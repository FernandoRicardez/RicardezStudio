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
      about: 'About',
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
      pageTitle: 'About',
      bio: [
        'Fernando Manuel Ricárdez Lara (Fer Ricárdez) is a multidisciplinary visual artist from León, Guanajuato. His practice bridges painting, installation, and site-responsive projects that celebrate the cultural pulse of central Mexico.',
        'Ricárdez studied Visual Arts at Universidad De La Salle Bajío and has participated in residencies and public art programs throughout Mexico. His work has been exhibited across the country and is part of private collections in Mexico and the United States.',
      ],
      cvTitle: 'Curriculum Vitae',
      cvSections: [
        {
          title: 'Education',
          items: [
            '2016 — Bachelor of Visual Arts, Universidad De La Salle Bajío, León, MX',
            '2019 — Residency, Centro de las Artes de Guanajuato, Salamanca, MX',
          ],
        },
        {
          title: 'Awards & Recognitions',
          items: [
            '2024 — FONCA Young Creators Grant, Painting',
            '2022 — Municipal Institute of Art & Culture Grant, León',
          ],
        },
        {
          title: 'Solo Exhibitions',
          items: [
            '2025 — "Cartografías de Color", Museo de Arte e Historia de Guanajuato, León',
            '2023 — "Trama Resonante", Galería Aurora, San Miguel de Allende',
          ],
        },
        {
          title: 'Group Exhibitions',
          items: [
            '2024 — "Fronteras Mutables", Espacio Alterno, Guadalajara',
            '2023 — "Topografías Cercanas", Casa de la Cultura Diego Rivera, Guanajuato',
            '2022 — "Nuevos Relatos", Centro de las Artes de Guanajuato, Salamanca',
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
    languageToggle: {
      label: 'Cambiar idioma',
      short: 'ES',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      works: 'Obra Seleccionada',
      about: 'Perfil',
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
      pageTitle: 'Perfil',
      bio: [
        'Fernando Manuel Ricárdez Lara (Fer Ricárdez) es un artista visual multidisciplinario originario de León, Guanajuato. Su práctica conecta la pintura, la instalación y proyectos de sitio específico que celebran el pulso cultural del centro de México.',
        'Ricárdez estudió Artes Visuales en la Universidad De La Salle Bajío y ha participado en residencias y programas de arte público en todo México. Su obra se ha exhibido en distintos espacios del país y forma parte de colecciones privadas en México y Estados Unidos.',
      ],
      cvTitle: 'Currículum',
      cvSections: [
        {
          title: 'Formación',
          items: [
            '2016 — Licenciatura en Artes Visuales, Universidad De La Salle Bajío, León, MX',
            '2019 — Residencia, Centro de las Artes de Guanajuato, Salamanca, MX',
          ],
        },
        {
          title: 'Premios y Distinciones',
          items: [
            '2024 — Jóvenes Creadores FONCA, Pintura',
            '2022 — Becario del Instituto Municipal de Arte y Cultura, León',
          ],
        },
        {
          title: 'Exposiciones Individuales',
          items: [
            '2025 — "Cartografías de Color", Museo de Arte e Historia de Guanajuato, León',
            '2023 — "Trama Resonante", Galería Aurora, San Miguel de Allende',
          ],
        },
        {
          title: 'Exposiciones Colectivas',
          items: [
            '2024 — "Fronteras Mutables", Espacio Alterno, Guadalajara',
            '2023 — "Topografías Cercanas", Casa de la Cultura Diego Rivera, Guanajuato',
            '2022 — "Nuevos Relatos", Centro de las Artes de Guanajuato, Salamanca',
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
    languageToggle: {
      label: 'Switch language',
      short: 'EN',
    },
  },
};
