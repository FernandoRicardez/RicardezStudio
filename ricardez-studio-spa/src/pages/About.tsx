import { useLanguage } from '../context/LanguageContext';
import styles from './About.module.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{t.about.pageTitle}</h1>
      </header>

      <section className={styles.bioSection}>
        <div className={styles.portraitWrapper}>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=720&q=80"
            alt={t.about.portraitAlt}
          />
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

export default About;
