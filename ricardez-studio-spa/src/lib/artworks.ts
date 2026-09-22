import { artworks, type Artwork, type LocalizedText } from '../data/artworks';
import type { LanguageKey } from '../i18n/translations';

export const getArtworkById = (id: string) => artworks.find((artwork) => artwork.id === id);

export const getArtworkBySlug = (slug: string) =>
  artworks.find((artwork) => artwork.slug === slug);

export const localize = (text: LocalizedText, language: LanguageKey) => text[language];

export const getAdjacentArtworks = (artwork: Artwork) => {
  const index = artworks.findIndex(({ id }) => id === artwork.id);
  return {
    previous: index > 0 ? artworks[index - 1] : null,
    next: index < artworks.length - 1 ? artworks[index + 1] : null,
  };
};
