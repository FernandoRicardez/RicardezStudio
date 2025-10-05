import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>{t.footer.rights}</span>
        <a
          className={styles.socialLink}
          href="https://www.instagram.com/fer_ricardez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fer Ricárdez on Instagram"
        >
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm6.25-.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
          </svg>
          <span>@fer_ricardez</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
