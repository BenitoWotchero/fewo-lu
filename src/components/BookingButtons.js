import React from 'react';
import { useTranslation } from 'react-i18next';
import airbnbLogo from '../img-design/logo-airbnb.jpg';
import bookingLogo from '../img-design/logo-booking.jpg';

function BookingButtons() {
  const { t } = useTranslation();
  
  return (
    <div className="booking-buttons">
      <div className="booking-option">
        <img src={airbnbLogo} alt="AirBnB" className="platform-logo" />
        <div className="rating-container">
          <div className="rating">4.67</div>
          <div className="rating-max">/ 5</div>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Außergewöhnlich</div>
        <a href="https://www.airbnb.de/rooms/904192651719812259" className="booking-button airbnb" target="_blank" rel="noopener noreferrer">
          Auf AirBnB buchen
        </a>
      </div>

      <div className="booking-option">
        <img src={bookingLogo} alt="Booking.com" className="platform-logo" />
        <div className="rating-container">
          <div className="rating">9.7</div>
          <div className="rating-max">/ 10</div>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Herausragend</div>
        <a href="https://www.booking.com/hotel/pl/mazurskie-energie.de.html" className="booking-button booking" target="_blank" rel="noopener noreferrer">
          Auf Booking.com buchen
        </a>
      </div>
    </div>
  );
}

export default BookingButtons;