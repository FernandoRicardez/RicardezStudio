import { useRouter } from 'next/router';
import { useLanguage } from '../context/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const { toggleLanguage, t, language } = useLanguage();
  const router = useRouter();

  const linkClass = (href: string) =>
    router.pathname === href ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          <span className={styles.brandName}>Fer Ricárdez</span>
          <span className={styles.brandRole}>{t.hero.subtitle}</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/" className={linkClass('/')}>{t.nav.home}</a>
          <a href="/works" className={linkClass('/works')}>{t.nav.works}</a>
          <a href="/about" className={linkClass('/about')}>{t.nav.about}</a>
          <a
            className={styles.navLink}
            href="https://www.instagram.com/fer_ricardez"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.instagram}
          </a>
        </nav>
        <div className={styles.actions}>
          <a
            className={styles.cvButton}
            href={language === 'es' ? '/assets/CV_Fer_Ricardez_espanol.pdf' : '/assets/CV_Fer_Ricardez_english.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.cv}
          </a>
          <button
            type="button"
            className={styles.languageButton}
            onClick={toggleLanguage}
            aria-label={t.languageToggle.label}
            title={t.languageToggle.label}
          >
            {t.languageToggle.short}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
