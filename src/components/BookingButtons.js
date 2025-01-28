import React from 'react';
import { useTranslation } from 'react-i18next';

function BookingButtons() {
  const { t } = useTranslation();
  
  return (
    <div className="booking-buttons">
      <div className="booking-option">
        <img src="/airbnb-logo.png" alt="AirBnB" className="platform-logo" />
        <div className="rating-container">
          <div className="rating">4.67</div>
          <div className="rating-max">/ 5</div>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Außergewöhnlich</div>
        <a href="https://airbnb.com/..." className="booking-button airbnb">
          Auf AirBnB buchen
        </a>
      </div>

      <div className="booking-option">
        <img src="/booking-logo.png" alt="Booking.com" className="platform-logo" />
        <div className="rating-container">
          <div className="rating">9.6</div>
          <div className="rating-max">/ 10</div>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Herausragend</div>
        <a href="https://booking.com/..." className="booking-button booking">
          Auf Booking.com buchen
        </a>
      </div>
    </div>
  );
}

export default BookingButtons;