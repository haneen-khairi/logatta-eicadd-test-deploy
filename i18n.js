import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './public/locales/en/translation.json';
import translationAR from './public/locales/ar/translation.json'; 

// the translations
const resources = {
  ar: {
    translation: translationAR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // default language
    debug: true,
    interpolation: {
      escapeValue: false // not needed for React as it escapes by default
    }
  });

export default i18n;
