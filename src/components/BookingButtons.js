import React from 'react';
import { useTranslation } from 'react-i18next';

function BookingButtons() {
  const { t } = useTranslation();

  return (
    <div className="booking-buttons">
      <h3>{t('bookNow')}</h3>
      <a href="https://www.airbnb.com/your-listing" target="_blank" rel="noopener noreferrer" className="button airbnb">
        {t('bookOnAirbnb')}
      </a>
      <a href="https://www.booking.com/your-listing" target="_blank" rel="noopener noreferrer" className="button booking">
        {t('bookOnBookingCom')}
      </a>
    </div>
  );
}

export default BookingButtons;