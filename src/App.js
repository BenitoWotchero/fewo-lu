import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from './components/ImageGallery';
import BookingButtons from './components/BookingButtons';
import FeatureList from './components/FeatureList';
import ContactForm from './components/ContactForm';
import './styles/ImageGallery.css';

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
        <h1>{t('welcome')}</h1>
      </div>

      <main>
        <section>
          <ImageGallery />
        </section>
        <section className="description">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutDescription')}</p>
        </section>
        <FeatureList />
        <BookingButtons />
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