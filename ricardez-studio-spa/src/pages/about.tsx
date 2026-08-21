import Seo from '../components/Seo';
import { useLanguage } from '../context/LanguageContext';
import styles from './About.module.css';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <Seo title={t.meta.aboutTitle} description={t.meta.aboutDescription} />
      <header className={styles.header}>
        <h1>{t.about.pageTitle}</h1>
      </header>

      <section className={styles.bioSection}>
        <div className={styles.portraitWrapper}>
          <img src="/assets/profile.jpg" alt={t.about.portraitAlt} />
        </div>
        <div className={styles.bioText}>
          {t.about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.cvSection}>
        <h2>{t.about.cvTitle}</h2>
        <div className={styles.cvGrid}>
          {t.about.cvSections.map((section) => (
            <article key={section.title} className={styles.cvColumn}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => ({
  props: {},
});

export default AboutPage;