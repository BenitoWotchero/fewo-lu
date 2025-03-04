import React from 'react';
import airbnbLogo from '../img-design/logo-airbnb.jpg';
import bookingLogo from '../img-design/logo-booking.jpg';

const BookingButtons = () => {
  return (
    <div className="booking-buttons">
      <div className="booking-option">
        <img src={airbnbLogo} alt="Airbnb Logo" className="platform-logo" />
        <div className="rating-container">
          <span className="rating">4.67</span>
          <span className="rating-max">/5</span>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Außergewöhnlich</div>
        <a 
          href="https://www.airbnb.de/rooms/53756241" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="booking-button airbnb"
        >
          Auf Airbnb buchen
        </a>
      </div>
      
      <div className="booking-option">
        <img src={bookingLogo} alt="Booking.com Logo" className="platform-logo" />
        <div className="rating-container">
          <span className="rating">9.7</span>
          <span className="rating-max">/10</span>
        </div>
        <div className="stars">★★★★★</div>
        <div className="rating-text">Herausragend</div>
        <a 
          href="https://www.booking.com/hotel/de/ferienwohnung-l.de.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="booking-button booking"
        >
          Auf Booking.com buchen
        </a>
      </div>
    </div>
  );
};

export default BookingButtons;