import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "../locale/en/translation.json";
import es from "../locale/es/translation.json";
import ja from "../locale/ja/translation.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  ja: { translation: ja },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const locale = Localization.getLocales(); // e.g. 'en', 'es'
    const supportedLocale = Object.keys(resources).includes(locale)
      ? locale
      : "en";
    callback(supportedLocale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v3",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
