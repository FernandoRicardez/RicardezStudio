import { useMemo, useState } from 'react';
import { artworks, type Artwork, type LocalizedText } from '../data/artworks';
import { useLanguage } from '../context/LanguageContext';
import styles from './SelectedWorks.module.css';

const SelectedWorks = () => {
  const { t, language } = useLanguage();
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  const sortedArtworks = useMemo(
    () => [...artworks].sort((a, b) => b.year - a.year),
    []
  );

  const resolve = (text: LocalizedText) => text[language];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{t.works.pageTitle}</h1>
        <p>{t.works.intro}</p>
      </header>

      <div className={styles.grid}>
        {sortedArtworks.map((artwork) => (
          <button
            key={artwork.id}
            type="button"
            className={styles.card}
            onClick={() => setActiveArtwork(artwork)}
          >
            <img src={artwork.image} alt={resolve(artwork.title)} loading="lazy" />
            <div className={styles.cardMeta}>
              <span className={styles.cardYear}>{artwork.year}</span>
              <h2 className={styles.cardTitle}>{resolve(artwork.title)}</h2>
              <span className={styles.cardMedium}>{resolve(artwork.medium)}</span>
            </div>
          </button>
        ))}
      </div>

      {activeArtwork && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalContent}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveArtwork(null)}
              aria-label={t.works.modal.close}
            >
              &times;
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalImage}>
                <img src={activeArtwork.image} alt={resolve(activeArtwork.title)} />
              </div>
              <div className={styles.modalDetails}>
                <h3>{resolve(activeArtwork.title)}</h3>
                <ul>
                  <li>
                    <strong>{t.works.modal.year}:</strong> {activeArtwork.year}
                  </li>
                  <li>
                    <strong>{t.works.modal.medium}:</strong> {resolve(activeArtwork.medium)}
                  </li>
                  <li>
                    <strong>{t.works.modal.dimensions}:</strong> {activeArtwork.dimensions}
                  </li>
                  {activeArtwork.exhibition ? (
                    <li>
                      <strong>{t.works.modal.exhibition}:</strong> {resolve(activeArtwork.exhibition)}
                    </li>
                  ) : null}
                </ul>
                <div className={styles.modalDescription}>
                  {activeArtwork.description.map((paragraph, index) => (
                    <p key={`${activeArtwork.id}-paragraph-${index}`}>{resolve(paragraph)}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.modalBackground}
            onClick={() => setActiveArtwork(null)}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};

export default SelectedWorks;






