export type Artwork = {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  exhibition?: string;
  image: string;
};

export const artworks: Artwork[] = [
  {
    id: '2025-cartografias-04',
    title: 'Cartografías de Color IV',
    year: 2025,
    medium: 'Acrylic, pigment, and graphite on canvas',
    dimensions: '160 x 120 cm',
    exhibition: '"Cartografías de Color" — Museo de Arte e Historia de Guanajuato, 2025',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2025-cartografias-03',
    title: 'Cartografías de Color III',
    year: 2025,
    medium: 'Mixed media on canvas',
    dimensions: '140 x 110 cm',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2024-vibraciones-02',
    title: 'Vibraciones del Bajío II',
    year: 2024,
    medium: 'Oil and sand on canvas',
    dimensions: '180 x 140 cm',
    exhibition: '"Fronteras Mutables" — Espacio Alterno, Guadalajara, 2024',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2024-mural-aurora',
    title: 'Mural Aurora',
    year: 2024,
    medium: 'Exterior mural, mineral paint',
    dimensions: '600 x 400 cm',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2023-trama-resonante-01',
    title: 'Trama Resonante I',
    year: 2023,
    medium: 'Acrylic and charcoal on canvas',
    dimensions: '150 x 120 cm',
    exhibition: '"Trama Resonante" — Galería Aurora, San Miguel de Allende, 2023',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2023-topografia-azul',
    title: 'Topografía Azul',
    year: 2023,
    medium: 'Pigment on handmade paper',
    dimensions: '56 x 76 cm',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2022-nuevos-relatos-03',
    title: 'Nuevos Relatos III',
    year: 2022,
    medium: 'Mixed media on canvas',
    dimensions: '130 x 100 cm',
    exhibition: '"Nuevos Relatos" — Centro de las Artes de Guanajuato, Salamanca, 2022',
    image: 'https://images.unsplash.com/photo-1524412529635-a258ed66c650?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2022-narrativas-urbanas',
    title: 'Narrativas Urbanas',
    year: 2022,
    medium: 'Site-specific installation',
    dimensions: 'Variable dimensions',
    image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2021-ciclos-01',
    title: 'Ciclos I',
    year: 2021,
    medium: 'Oil and plaster on wood panel',
    dimensions: '100 x 80 cm',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2021-ciclos-02',
    title: 'Ciclos II',
    year: 2021,
    medium: 'Oil and plaster on wood panel',
    dimensions: '100 x 80 cm',
    image: 'https://images.unsplash.com/photo-1529220516271-4d53e913d7a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2020-ritmo-urbano',
    title: 'Ritmo Urbano',
    year: 2020,
    medium: 'Spray paint and acrylic on canvas',
    dimensions: '140 x 100 cm',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2020-senderos',
    title: 'Senderos',
    year: 2020,
    medium: 'Ink and gouache on paper',
    dimensions: '50 x 65 cm',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80',
  },
];
