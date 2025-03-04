import React from 'react';
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

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <div className="language-selector">
        <button onClick={() => handleLanguageChange('de')} aria-label="Deutsch" className="flag-button">🇩🇪</button>
        <button onClick={() => handleLanguageChange('en')} aria-label="English" className="flag-button">🇬🇧</button>
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
        <section>
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