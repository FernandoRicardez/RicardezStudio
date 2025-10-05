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
        'Fernando Manuel Ric\u00e1rdez Lara (Le\u00f3n, Guanajuato, 1995) is a computer systems engineer from Universidad La Salle Baj\u00edo. He combines technological training with an artistic practice focused on disability, illness, and memory. His work transforms personal experiences, such as the diagnosis and surgery of a macro pituitary adenoma, into pictorial narratives that move between the surreal and the autobiographical. In 2025 he received the PECDA Guanajuato grant, was selected for the P\u00e9rez Romo Biennial and the XV Joaqu\u00edn Clausell National Painting Biennial, and earned an Honorable Mention at the XI University Biennial of Contemporary Art. His exhibitions include solo and group shows in Mexico and abroad, highlighted by his first solo presentation at the Congress of the State of Guanajuato.',
      ],
      cvTitle: 'Curriculum Vitae',
      cvSections: [
        {
          title: 'Recognitions & Awards',
          items: [
            '2025 - Program for the Stimulus to Creation and Artistic Development (PECDA), Government of Mexico / Guanajuato',
            '2025 - Honorable Mention (Emerging Artist), XI National University Biennial of Contemporary Art, UABC Tijuana',
            '2025 - Co-responsibility Grant for Artistic, Cultural & Creative Talent Incubation, IMJU Leon',
            '2024 - First Place, "Sin Barreras" International Art Competition, Argentina',
          ],
        },
        {
          title: 'Solo Exhibitions',
          items: [
            "2025 - 'Fragmentos de un recuerdo espinal', Santa Fe Cultural Center, Congress of the State of Guanajuato, May-June",
          ],
        },
        {
          title: 'Education & Training',
          items: [
            '2024-present - Extension Culture Open Workshops, Universidad de Guanajuato',
            '2024-present - Private painting lessons with Jose Juan Castro Escobedo',
            '2024-present - Private painting lessons with Oliver Esquivel Morales',
            '2015-2019 - Software and Computer Systems Engineering, Universidad La Salle Bajio',
          ],
        },
        {
          title: 'Selected Group Exhibitions',
          items: [
            '2025 - Dr. Perez Romo Painting Biennial, UAA, Aguascalientes',
            '2024 - SinBarreras.org exhibition, Asociacion Civil por la Igualdad y la Justicia / Asociacion Azul / Red Latinoamericana por la Vida Independiente, Argentina',
            '2025 - XV Joaquin Clausell Biennial, UACAM, Campeche',
            '2025 - 62nd Art of Possibilities Art Show & Sale, Courage Kenny Rehabilitation Institute, Minnesota, USA',
            '2025 - XI National University Biennial of Contemporary Art, Sala de Arte Alvaro Blancarte, Tijuana',
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
        'Fernando Manuel Ric\u00e1rdez Lara (Le\u00f3n, Guanajuato, 1995). Ingeniero en Sistemas Computacionales por la Universidad La Salle Baj\u00edo, combina su formaci\u00f3n tecnol\u00f3gica con una pr\u00e1ctica art\u00edstica marcada por la exploraci\u00f3n de la discapacidad, la enfermedad y la memoria. Su obra transforma experiencias personales, como el diagn\u00f3stico y la cirug\u00eda de un macroadenoma hipofisario, en narrativas pict\u00f3ricas que dialogan entre lo surreal y lo autobiogr\u00e1fico. En 2025 obtuvo el PECDA Guanajuato, fue seleccionado en la Bienal P\u00e9rez Romo, en la XV Bienal Nacional de Pintura Joaqu\u00edn Clausell y recibi\u00f3 Menci\u00f3n Honor\u00edfica en la XI Bienal Universitaria de Arte Contempor\u00e1neo. Ha participado en exposiciones individuales y colectivas en M\u00e9xico y en el extranjero, destacando su primera muestra individual en el Congreso del Estado de Guanajuato.',
      ],
      cvTitle: 'Currículum',
      cvSections: [
        {
          title: 'Reconocimientos y Premios',
          items: [
            '2025 - Programa de Estimulo a la Creacion y Desarrollo Artistico (PECDA), Gobierno de Mexico / Guanajuato',
            '2025 - Mencion Honorifica como artista emergente, XI Bienal Nacional Universitaria de Arte Contemporaneo, UABC Tijuana',
            '2025 - Beca de Corresponsabilidad para la Incubacion de Talento Artistico, Cultural y Creativo, IMJU Leon',
            '2024 - Primer Lugar, Concurso Internacional de Arte "Sin Barreras", Argentina',
          ],
        },
        {
          title: 'Exposiciones Individuales',
          items: [
            '2025 - "Fragmentos de un recuerdo espinal", Centro Cultural Santa Fe, Congreso del Estado de Guanajuato, mayo-junio 2025',
          ],
        },
        {
          title: 'Estudios',
          items: [
            '2024 a la fecha - Talleres Libres de Extension Cultural, Universidad de Guanajuato',
            '2024 a la fecha - Clases privadas de pintura con Jose Juan Castro Escobedo',
            '2024 a la fecha - Clases privadas de pintura con Oliver Esquivel Morales',
            '2015-2019 - Ingenieria en Software y Sistemas Computacionales, Universidad La Salle Bajio',
          ],
        },
        {
          title: 'Exposiciones Colectivas (Seleccion)',
          items: [
            '2025 - Bienal de Pintura "Dr Perez Romo", UAA, Aguascalientes',
            '2024 - Concursosinbarreras.org, Asociacion Civil por la Igualdad y la Justicia / Asociacion Azul / Red Latinoamericana por la Vida Independiente, Argentina',
            '2025 - XV Bienal Joaquin Clausell, UACAM, Campeche',
            '2025 - 62nd Art of Possibilities Art Show & Sale, Courage Kenny Rehabilitation Institute, Minnesota, USA',
            '2025 - XI Bienal Nacional Universitaria de Arte Contemporaneo, Sala de Arte Alvaro Blancarte, Tijuana',
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
