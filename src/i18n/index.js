import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBr from "./locales/pt-br";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt-BR",
    resources: {
      pt: { translation: ptBr.translations },
    },
  });

export default i18n;
