import Link from 'next/link';
import Seo from '../components/Seo';
import { useLanguage } from '../context/LanguageContext';
import styles from './Home.module.css';

const HomePage = () => {
  const { t } = useLanguage();

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fer Ricardez',
    jobTitle: 'Visual Artist',
    url: 'https://ricardezfer.com',
    sameAs: ['https://www.instagram.com/fer_ricardez'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Leon',
      addressRegion: 'Guanajuato',
      addressCountry: 'MX',
    },
  };

  return (
    <div className={styles.page}>
      <Seo
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        jsonLd={personJsonLd}
      />
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/assets/Hero.gif"
          alt="Fer Ricardez hero artwork"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.description}>{t.hero.description}</p>
            <div className={styles.ctaGroup}>
              <Link className={styles.ctaButton} href="/works">
                {t.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => ({
  props: {},
});

export default HomePage;