import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type LanguageKey } from '../i18n/translations';

type LanguageContextValue = {
  language: LanguageKey;
  setLanguage: (language: LanguageKey) => void;
  toggleLanguage: () => void;
  t: (typeof translations)[LanguageKey];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageKey>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
