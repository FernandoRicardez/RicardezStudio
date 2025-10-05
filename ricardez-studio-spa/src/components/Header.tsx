import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const { toggleLanguage, t, language } = useLanguage();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.brandName}>Fer Ricárdez</span>
          <span className={styles.brandRole}>{t.hero.subtitle}</span>
        </NavLink>
        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/works" className={linkClass}>
            {t.nav.works}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {t.nav.about}
          </NavLink>
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
