import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';

// eğer LanguageDetector,Backend kullanırsak public/locales altında tanımladığım json dosyasından resources leri alır
// bu yüzden aşağıdaki kodu artık devre dışı bırakabiliriz.
// const resources = {
//     tr: {
//         translation: {
//             welcome: 'Hoşgeldin'
//         }
//     },
//     en: {
//         translation: {
//             welcome: 'Welcome'
//         }
//     }
// }

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'tr-TR', //Eğer locales altında ilgili dil yok ise default olarak bunu kullan
        debug: true, // i18next le ilgili tüm config objelerini console.log 'da göster.
    })

export default i18n;