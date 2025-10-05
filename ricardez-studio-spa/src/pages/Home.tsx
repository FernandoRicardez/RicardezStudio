import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/Hero.gif';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="Fer Ricardez hero artwork"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.description}>{t.hero.description}</p>
            <div className={styles.ctaGroup}>
              <Link className={styles.ctaButton} to="/works">
                {t.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
