import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to <b>Lakeside Vibes Masuria</b>",
          "gallery": {
            "title": "Image Gallery",
            "prev": "Previous",
            "next": "Next",
            "imageAlt": "Vacation rental image {{number}}"
          },
          "contactForm": {
            "title": "Contact Us",
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "submit": "Send Message",
            "successMessage": "Thank you for your message! We will get back to you soon.",
            "errorMessage": "Sorry, there was an error sending your message. Please try again later.",
            "recaptchaError": "Please complete the reCAPTCHA verification"
          },
          "aboutTitle": "About our Holiday Home",
          "aboutDescription": "Discover our charming <strong>eco-friendly holiday home</strong> in the heart of Masuria, featuring its own private beach area in Stare Juchy. This spacious retreat offers <strong>three comfortable bedrooms</strong>, a welcoming living room, and a fully equipped kitchen with modern amenities. Two well-appointed bathrooms ensure comfort for all guests. The house is perfectly situated for outdoor enthusiasts, with excellent opportunities for hiking, fishing, and cycling in the surrounding nature. After an active day, unwind in our beautiful garden or the cozy communal lounge. The property offers <strong>free WiFi and private parking</strong> for your convenience. Located just 43 km from the historic Boyen Fortress and surrounded by attractions like Indian Village and Talki Golf Course, our house combines peaceful seclusion with easy access to local points of interest. All linens and towels are provided for a carefree stay.",
          "bookNow": "Book now:",
          "bookOnAirbnb": "Book on AirBnB",
          "bookOnBookingCom": "Book on Booking.com",
          "copyright": "© 2025 Your Holiday Home. All rights reserved."
        }
      },
      de: {
        translation: {
          "welcome": "Willkommen zu <b>Lakeside Vibes Masuria</b>",
          "gallery": {
            "title": "Bildergalerie",
            "prev": "Vorheriges",
            "next": "Nächstes",
            "imageAlt": "Ferienwohnungsbild {{number}}"
          },
          "contactForm": {
            "title": "Kontaktieren Sie uns",
            "name": "Name",
            "email": "E-Mail",
            "message": "Nachricht",
            "submit": "Nachricht senden",
            "successMessage": "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
            "errorMessage": "Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
            "recaptchaError": "Bitte führen Sie die reCAPTCHA-Verifizierung durch"
          },
          "aboutTitle": "Über unser Ferienhaus",
          "aboutDescription": "Entdecken Sie unser charmantes <strong>ökologisches Ferienhaus</strong> im Herzen Masurens mit eigenem Strandbereich in Stare Juchy. Diese geräumige Unterkunft bietet <strong>drei komfortable Schlafzimmer</strong>, einen einladenden Wohnbereich und eine vollständig ausgestattete Küche mit modernen Geräten. Zwei gut ausgestattete Badezimmer sorgen für den Komfort aller Gäste. Das Haus ist ideal für Naturliebhaber gelegen, mit ausgezeichneten Möglichkeiten zum Wandern, Angeln und Radfahren in der umgebenden Natur. Nach einem aktiven Tag können Sie sich in unserem schönen Garten oder in der gemütlichen Gemeinschaftslounge entspannen. Die Unterkunft bietet <strong>kostenloses WLAN und private Parkplätze</strong> für Ihren Komfort. Nur 43 km von der historischen Boyen-Festung entfernt und umgeben von Attraktionen wie dem Indian Village und dem Talki Golfplatz, verbindet unser Haus friedliche Abgeschiedenheit mit guter Erreichbarkeit lokaler Sehenswürdigkeiten. Handtücher und Bettwäsche werden für einen sorgenfreien Aufenthalt zur Verfügung gestellt.",
          "bookNow": "Jetzt buchen:",
          "bookOnAirbnb": "Auf AirBnB buchen",
          "bookOnBookingCom": "Auf Booking.com buchen",
          "copyright": "© 2025 Ihr Ferienhaus. Alle Rechte vorbehalten. IMPRESSUM. DATENSCHUTZ"
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