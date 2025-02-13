import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation JSON files
import enTranslations from "../../locales/en.json";
import frTranslations from "../../locales/ar.json";

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
  },
  lng: "en", // Default language
  debug: true,
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
