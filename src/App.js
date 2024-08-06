import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageGallery from './components/ImageGallery';
import BookingButtons from './components/BookingButtons';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => changeLanguage('de')}>Deutsch</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </header>
      <h1>{t('welcome')}</h1>
      <main>
        <section>
          <ImageGallery />
        </section>
        <section className="description">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutDescription')}</p>
        </section>
        <BookingButtons />
      </main>
      <footer>
        <p>{t('copyright')}</p>
      </footer>
    </div>
  );
};

export default App;