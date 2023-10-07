import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    // Ajoutez d'autres langues au besoin
];

i18n.use(HttpBackend) // Utilisez HttpBackend pour charger des traductions à partir d'un serveur si nécessaire
    .use(LanguageDetector) // Detecte automatiquement la langue du navigateur
    .use(initReactI18next)
    .init({
        lng: 'en', // force la langue à 'en'
        fallbackLng: 'en', // langue de repli
        debug: false,
        ns: ['translation', 'app-menu', 'node-context-menu'],
        defaultNS: 'translation',

        interpolation: {
            escapeValue: false, // réact est déjà en sécurité par défaut contre le xss
        },
    });

export default i18n;
