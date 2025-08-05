import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ar from './locales/ar.json';
import bn from './locales/bn.json';
import hi from './locales/hi.json';
import id from './locales/id.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import mr from './locales/mr.json';
import nl from './locales/nl.json';
import pa from './locales/pa.json';
import pl from './locales/pl.json';
import pt from './locales/pt.json';
import ro from './locales/ro.json';
import ru from './locales/ru.json';
import sw from './locales/sw.json';
import ta from './locales/ta.json';
import te from './locales/te.json';
import tr from './locales/tr.json';
import ur from './locales/ur.json';
import zh from './locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      ar: { translation: ar },
      bn: { translation: bn },
      hi: { translation: hi },
      id: { translation: id },
      it: { translation: it },
      ja: { translation: ja },
      ko: { translation: ko },
      mr: { translation: mr },
      nl: { translation: nl },
      pa: { translation: pa },
      pl: { translation: pl },
      pt: { translation: pt },
      ro: { translation: ro },
      ru: { translation: ru },
      sw: { translation: sw },
      ta: { translation: ta },
      te: { translation: te },
      tr: { translation: tr },
      ur: { translation: ur },
      zh: { translation: zh },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
