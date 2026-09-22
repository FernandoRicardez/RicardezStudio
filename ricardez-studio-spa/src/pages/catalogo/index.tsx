import Link from 'next/link';
import { useMemo, useState } from 'react';
import Seo from '../../components/Seo';
import { useLanguage } from '../../context/LanguageContext';
import { artworks } from '../../data/artworks';
import { localize } from '../../lib/artworks';
import styles from './Catalog.module.css';

type SortOrder = 'newest' | 'oldest' | 'title';

const statusLabels = {
  en: { available: 'Available', 'private-collection': 'Private collection', 'artist-collection': 'Artist collection', 'not-available': 'Not available' },
  es: { available: 'Disponible', 'private-collection': 'Colección privada', 'artist-collection': 'Colección del artista', 'not-available': 'No disponible' },
} as const;

export default function CatalogPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [medium, setMedium] = useState('');
  const [series, setSeries] = useState('');
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState<SortOrder>('newest');
  const isEs = language === 'es';

  const options = useMemo(() => ({
    years: Array.from(new Set(artworks.map((artwork) => artwork.year))).sort((a, b) => b - a),
    media: Array.from(new Set(artworks.map((artwork) => localize(artwork.medium, language)))).sort(),
    series: Array.from(new Set(artworks.flatMap((artwork) => artwork.series ? [localize(artwork.series, language)] : []))).sort(),
    statuses: Array.from(new Set(artworks.map((artwork) => artwork.status))),
  }), [language]);

  const visibleArtworks = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    return artworks
      .filter((artwork) => {
        const title = localize(artwork.title, language);
        return (!normalizedQuery || `${title} ${artwork.id}`.toLocaleLowerCase(language).includes(normalizedQuery)) &&
          (!year || artwork.year === Number(year)) &&
          (!medium || localize(artwork.medium, language) === medium) &&
          (!series || (artwork.series && localize(artwork.series, language) === series)) &&
          (!status || artwork.status === status);
      })
      .sort((a, b) => sort === 'oldest'
        ? a.year - b.year
        : sort === 'title'
          ? localize(a.title, language).localeCompare(localize(b.title, language), language)
          : b.year - a.year);
  }, [language, medium, query, series, sort, status, year]);

  return (
    <div className={styles.page}>
      <Seo
        title={isEs ? 'Catálogo de obra | Fer Ricárdez' : 'Artwork Catalog | Fer Ricárdez'}
        description={isEs ? 'Archivo vivo de la obra de Fer Ricárdez.' : 'A living archive of artworks by Fer Ricárdez.'}
      />
      <header className={styles.header}>
        <p className={styles.eyebrow}>{isEs ? 'Archivo' : 'Archive'}</p>
        <h1>{isEs ? 'Catálogo de obra' : 'Artwork catalog'}</h1>
        <p>{isEs ? 'Un registro vivo de pinturas y obra sobre lienzo.' : 'A living record of paintings and works on canvas.'}</p>
      </header>

      <section className={styles.filters} aria-label={isEs ? 'Filtros del catálogo' : 'Catalog filters'}>
        <label className={styles.search}>
          <span>{isEs ? 'Buscar' : 'Search'}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isEs ? 'Título o ID' : 'Title or ID'} type="search" />
        </label>
        <label><span>{isEs ? 'Año' : 'Year'}</span><select value={year} onChange={(event) => setYear(event.target.value)}><option value="">{isEs ? 'Todos' : 'All'}</option>{options.years.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>{isEs ? 'Técnica' : 'Medium'}</span><select value={medium} onChange={(event) => setMedium(event.target.value)}><option value="">{isEs ? 'Todas' : 'All'}</option>{options.media.map((item) => <option key={item}>{item}</option>)}</select></label>
        {options.series.length > 0 && <label><span>{isEs ? 'Serie' : 'Series'}</span><select value={series} onChange={(event) => setSeries(event.target.value)}><option value="">{isEs ? 'Todas' : 'All'}</option>{options.series.map((item) => <option key={item}>{item}</option>)}</select></label>}
        <label><span>{isEs ? 'Estado' : 'Status'}</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option value="">{isEs ? 'Todos' : 'All'}</option>{options.statuses.map((item) => <option key={item} value={item}>{statusLabels[language][item]}</option>)}</select></label>
        <label><span>{isEs ? 'Orden' : 'Sort'}</span><select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}><option value="newest">{isEs ? 'Más reciente' : 'Newest first'}</option><option value="oldest">{isEs ? 'Más antigua' : 'Oldest first'}</option><option value="title">{isEs ? 'Título A–Z' : 'Title A–Z'}</option></select></label>
      </section>

      <p className={styles.count} aria-live="polite">{visibleArtworks.length} {isEs ? 'obras' : 'artworks'}</p>
      <div className={styles.grid}>
        {visibleArtworks.map((artwork) => (
          <article key={artwork.id} className={styles.card}>
            <Link href={`/catalogo/${artwork.slug}`}>
              <div className={styles.imageFrame}><img src={artwork.images[0].src} alt={localize(artwork.images[0].alt, language)} loading="lazy" /></div>
              <div className={styles.meta}>
                <h2>{localize(artwork.title, language)}</h2>
                <p>{artwork.year} · {localize(artwork.medium, language)}</p>
                {artwork.dimensions && <p>{artwork.dimensions}</p>}
              </div>
            </Link>
          </article>
        ))}
      </div>
      {visibleArtworks.length === 0 && <p className={styles.empty}>{isEs ? 'No hay obras que coincidan con estos filtros.' : 'No artworks match these filters.'}</p>}
    </div>
  );
}

export const getStaticProps = async () => ({ props: {} });
