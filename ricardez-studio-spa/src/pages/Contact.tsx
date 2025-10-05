import { FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{t.contact.pageTitle}</h1>
        <p>{t.contact.intro}</p>
      </header>

      <div className={styles.contentGrid}>
        <section className={styles.details}>
          <ul>
            <li>
              <span>{t.contact.instagramLabel}</span>
              <a
                href="https://www.instagram.com/fer_ricardez"
                target="_blank"
                rel="noopener noreferrer"
              >
                @fer_ricardez
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.forms}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>{t.contact.formTitle}</h2>
            <label>
              <span>{t.contact.nameFieldLabel}</span>
              <input type="text" name="name" placeholder={t.contact.namePlaceholder} required />
            </label>
            <label>
              <span>{t.contact.emailFieldLabel}</span>
              <input type="email" name="email" placeholder={t.contact.emailPlaceholder} required />
            </label>
            <label>
              <span>{t.contact.messageFieldLabel}</span>
              <textarea
                name="message"
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                required
              />
            </label>
            <button type="submit">{t.contact.submit}</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
