import React from 'react';
import { useTranslation } from 'react-i18next';
import airbnbLogo from '../img-design/logo-airbnb.jpg';
import bookingLogo from '../img-design/logo-booking.jpg';

const BookingButtons = () => {
  const { t } = useTranslation();
  
  return (
    <div className="booking-buttons">
      <div className="booking-option">
        <img src={airbnbLogo} alt="Airbnb Logo" className="platform-logo" />
        <div className="rating-container">
          <span className="rating">{t('bookingSection.airbnbRating')}</span>
          <span className="rating-max">/5</span>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">{t('bookingSection.airbnbRatingText')}</div>
        <a 
          href="https://www.airbnb.de/rooms/904192651719812259" 
          target="_blank" 
          rel="noopener noreferrer nofollow" 
          className="booking-button airbnb"
        >
          {t('bookingSection.airbnbButton')}
        </a>
      </div>
      
      <div className="booking-option">
        <img src={bookingLogo} alt="Booking.com Logo" className="platform-logo" />
        <div className="rating-container">
          <span className="rating">{t('bookingSection.bookingComRating')}</span>
          <span className="rating-max">/10</span>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">{t('bookingSection.bookingComRatingText')}</div>
        <a 
          href="https://www.booking.com/hotel/pl/mazurskie-energie.de.html" 
          target="_blank" 
          rel="noopener noreferrer nofollow" 
          className="booking-button booking"
        >
          {t('bookingSection.bookingComButton')}
        </a>
      </div>
    </div>
  );
};

export default BookingButtons;