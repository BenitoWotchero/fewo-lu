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
        <button onClick={() => handleLanguageChange('de')}>Deutsch</button>
        <button onClick={() => handleLanguageChange('en')}>English</button>
      </div>
      
      <div className="header">
        <h1 dangerouslySetInnerHTML={{ __html: t('welcome')}}></h1>
      </div>

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
      <footer>
        <p>{t('copyright')}</p>
      </footer>
    </div>
  );
}

export default App;