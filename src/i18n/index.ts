import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import hi from "./locales/hi/common.json";
import ja from "./locales/ja/common.json";
import zh from "./locales/zh/common.json";

function getInitialLanguage(): string {
  try {
    const saved = localStorage.getItem("sylvara_language");
    if (saved && ["en", "hi", "ja", "zh"].includes(saved)) {
      return saved;
    }
  } catch {
    // storage unavailable
  }
  return "en";
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    ja: { translation: ja },
    zh: { translation: zh },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
