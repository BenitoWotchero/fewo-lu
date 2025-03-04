import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from './components/ImageGallery';
import BookingButtons from './components/BookingButtons';
import FeatureList from './components/FeatureList';
import ContactForm from './components/ContactForm';
import './styles/main.css';
import './styles/gallery.css';
import './styles/booking.css';
import './styles/features.css';
import './styles/contact.css';

// SVG-Flaggen als Komponenten
const UKFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10">
    <clipPath id="uk">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk)" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const PolishFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" width="20" height="12">
    <rect width="16" height="10" fill="#fff"/>
    <rect width="16" height="5" y="5" fill="#dc143c"/>
    <rect width="16" height="10" fill="none" stroke="#000" strokeWidth="0.5"/>
  </svg>
);

const GermanFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="20" height="12">
    <rect width="5" height="3" y="0" x="0" fill="#000"/>
    <rect width="5" height="2" y="1" x="0" fill="#DD0000"/>
    <rect width="5" height="1" y="2" x="0" fill="#FFCE00"/>
    <rect width="5" height="3" fill="none" stroke="#000" strokeWidth="0.1"/>
  </svg>
);

function App() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className="App">
      <div className="language-selector">
        <button 
          onClick={() => handleLanguageChange('en')} 
          aria-label="English" 
          className={`flag-button ${currentLang === 'en' ? 'active' : ''}`}
        >
          <UKFlag />
        </button>
        <button 
          onClick={() => handleLanguageChange('pl')} 
          aria-label="Polski" 
          className={`flag-button ${currentLang === 'pl' ? 'active' : ''}`}
        >
          <PolishFlag />
        </button>
        <button 
          onClick={() => handleLanguageChange('de')} 
          aria-label="Deutsch" 
          className={`flag-button ${currentLang === 'de' ? 'active' : ''}`}
        >
          <GermanFlag />
        </button>
      </div>
      
      <header className="header">
        <div className="header-content">
          <span className="welcome-text" dangerouslySetInnerHTML={{ __html: t('welcome').split('Lakeside')[0]}}></span>
          <div className="title-container">
            <h1 className="title">Lakeside Vibes</h1>
            <span className="subtitle">Masuria</span>
          </div>
        </div>
      </header>

      <main>
        <section className="gallery">
          <ImageGallery />
        </section>
        <section className="intro-text">
          <h2 dangerouslySetInnerHTML={{ __html: t('aboutTitle')}}></h2>
          <div dangerouslySetInnerHTML={{ __html: t('introText') }} />
        </section>
        <BookingButtons />
        <section className="description">
          <div dangerouslySetInnerHTML={{ __html: t('aboutDescription') }} />
        </section>
        <FeatureList />
        <section className="contact">
          <ContactForm />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;