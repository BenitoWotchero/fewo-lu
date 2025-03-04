import React from 'react';
import { useTranslation } from 'react-i18next';

function FeatureList() {
  const { t } = useTranslation();
  
  return (
    <section className="feature-list">
      <h2>{t('featuresSection.title')}</h2>
      <div className="feature-item">
        <span className="feature-icon">🏠</span>
        <span>{t('featuresSection.entireAccommodation')}</span>
      </div>
      
      <div className="feature-item">
        <span className="feature-icon">📏</span>
        <span>{t('featuresSection.size')}</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🅿️</span>
        <span>{t('featuresSection.freeParking')}</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">📶</span>
        <span>{t('featuresSection.wifiIncluded')}</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🐕</span>
        <span>{t('featuresSection.petsAllowed')}</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🚿</span>
        <span>{t('featuresSection.privateBathroom')}</span>
      </div>
    </section>
  );
}

export default FeatureList; 