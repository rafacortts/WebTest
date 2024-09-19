// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "changeLanguage": "Change Language"
    }
  },
  pt: {
    translation: {
      "welcome": "Bem-vindo",
      "changeLanguage": "Mudar Idioma"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma inicial
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
