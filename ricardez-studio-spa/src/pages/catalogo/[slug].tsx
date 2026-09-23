import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { useLanguage } from '../../context/LanguageContext';
import { artworks, type Artwork } from '../../data/artworks';
import { getAdjacentArtworks, getArtworkBySlug, localize } from '../../lib/artworks';
import styles from './ArtworkDetail.module.css';

type Props = { artwork: Artwork; previous: Artwork | null; next: Artwork | null };

export default function ArtworkDetailPage({ artwork, previous, next }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { language } = useLanguage();
  const isEs = language === 'es';
  const title = localize(artwork.title, language);
  const medium = localize(artwork.medium, language);
  const status = artwork.status ? {
    available: isEs ? 'Disponible' : 'Available',
    'private-collection': isEs ? 'Colección privada' : 'Private collection',
    'artist-collection': isEs ? 'Colección del artista' : 'Artist collection',
    'not-available': isEs ? 'No disponible' : 'Not available',
  }[artwork.status] : null;

  return (
    <article className={styles.page}>
      <Seo title={`${title}, ${artwork.year} | Fer Ricárdez`} description={`${title}, ${artwork.year}. ${medium}.`} image={artwork.images[0].src} type="article" jsonLd={{ '@context': 'https://schema.org', '@type': 'VisualArtwork', name: title, creator: { '@type': 'Person', name: 'Fer Ricárdez' }, dateCreated: artwork.year, artMedium: medium, image: `https://ricardezfer.com${artwork.images[0].src}`, url: `https://ricardezfer.com/catalogo/${artwork.slug}` }} />
      <Link href="/catalogo" className={styles.back}>← {isEs ? 'Catálogo' : 'Catalog'}</Link>
      <div className={styles.hero}>
        <div className={styles.primaryImage}><img src={artwork.images[0].src} alt={localize(artwork.images[0].alt, language)} /></div>
        <header className={styles.info}>
          <p className={styles.id}>{artwork.id}</p>
          <h1>{title}</h1>
          <dl>
            <div><dt>{isEs ? 'Año' : 'Year'}</dt><dd>{artwork.year}</dd></div>
            <div><dt>{isEs ? 'Técnica' : 'Medium'}</dt><dd>{medium}</dd></div>
            {artwork.dimensions && <div><dt>{isEs ? 'Dimensiones' : 'Dimensions'}</dt><dd>{artwork.dimensions}</dd></div>}
            {artwork.series && <div><dt>{isEs ? 'Serie' : 'Series'}</dt><dd>{localize(artwork.series, language)}</dd></div>}
            {artwork.edition && <div><dt>{isEs ? 'Edición' : 'Edition'}</dt><dd>{artwork.edition}</dd></div>}
            {status && <div><dt>{isEs ? 'Estado' : 'Status'}</dt><dd>{status}</dd></div>}
          </dl>
        </header>
      </div>

      {artwork.description && <section className={styles.section}><h2>{isEs ? 'Sobre la obra' : 'About the work'}</h2><div>{artwork.description.map((paragraph, index) => <p key={index}>{localize(paragraph, language)}</p>)}</div></section>}
      {artwork.images.length > 1 && <section className={styles.section}><h2>{isEs ? 'Vistas adicionales' : 'Additional views'}</h2><div className={styles.additionalImages}>{artwork.images.slice(1).map((image) => <figure key={image.src}><img src={image.src} alt={localize(image.alt, language)} loading="lazy" />{image.caption && <figcaption>{localize(image.caption, language)}</figcaption>}</figure>)}</div></section>}
      {artwork.exhibitions && <section className={styles.section}><h2>{isEs ? 'Exposiciones' : 'Exhibitions'}</h2><ul>{artwork.exhibitions.map((item, index) => <li key={index}>{localize(item.title, language)}{item.venue ? ` — ${item.venue}` : ''}{item.city ? `, ${item.city}` : ''}{item.year ? ` (${item.year})` : ''}</li>)}</ul></section>}
      {artwork.recognitions && <section className={styles.section}><h2>{isEs ? 'Reconocimientos' : 'Recognitions'}</h2><ul>{artwork.recognitions.map((item, index) => <li key={index}>{localize(item.title, language)}{item.year ? ` (${item.year})` : ''}</li>)}</ul></section>}
      {artwork.publications && <section className={styles.section}><h2>{isEs ? 'Publicaciones' : 'Publications'}</h2><ul>{artwork.publications.map((item, index) => <li key={index}>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{localize(item.title, language)}</a> : localize(item.title, language)}</li>)}</ul></section>}

      <nav className={styles.pager} aria-label={isEs ? 'Navegación entre obras' : 'Artwork navigation'}>
        <span>{previous && <Link href={`/catalogo/${previous.slug}`}>← {localize(previous.title, language)}</Link>}</span>
        <span>{next && <Link href={`/catalogo/${next.slug}`}>{localize(next.title, language)} →</Link>}</span>
      </nav>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: artworks.map(({ slug }) => ({ params: { slug } })), fallback: false });
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const artwork = getArtworkBySlug(String(params?.slug));
  if (!artwork) return { notFound: true };
  return { props: { artwork, ...getAdjacentArtworks(artwork) } };
};
