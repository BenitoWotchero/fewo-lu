import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to our vacation rental",
          "gallery": {
            "title": "Image Gallery",
            "prev": "Previous",
            "next": "Next",
            "imageAlt": "Vacation rental image {{number}}"
          },
          "aboutTitle": "About our Holiday Home",
          "aboutDescription": "Enjoy your stay in our cozy holiday home, surrounded by beautiful nature. Perfect for families or groups up to 6 people. Equipped with all comforts for a relaxing vacation, including a fully equipped kitchen, fireplace, and terrace with barbecue facilities.",
          "bookNow": "Book now:",
          "bookOnAirbnb": "Book on AirBnB",
          "bookOnBookingCom": "Book on Booking.com",
          "copyright": "© 2024 Your Holiday Home. All rights reserved."
        }
      },
      de: {
        translation: {
          "welcome": "Willkommen in unserer Ferienwohnung",
          "gallery": {
            "title": "Bildergalerie",
            "prev": "Vorheriges",
            "next": "Nächstes",
            "imageAlt": "Ferienwohnungsbild {{number}}"
          },
          "aboutTitle": "Über unser Ferienhaus",
          "aboutDescription": "Genießen Sie Ihren Aufenthalt in unserem gemütlichen Ferienhaus, umgeben von wunderschöner Natur. Perfekt für Familien oder Gruppen bis zu 6 Personen. Ausgestattet mit allem Komfort für einen erholsamen Urlaub, inklusive voll ausgestatteter Küche, Kamin und Terrasse mit Grillmöglichkeit.",
          "bookNow": "Jetzt buchen:",
          "bookOnAirbnb": "Auf AirBnB buchen",
          "bookOnBookingCom": "Auf Booking.com buchen",
          "copyright": "© 2024 Ihr Ferienhaus. Alle Rechte vorbehalten."
        }
      }
    },
    lng: "de",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;