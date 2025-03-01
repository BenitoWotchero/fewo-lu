import React from 'react';
import { useTranslation } from 'react-i18next';

function FeatureList() {
  const { t } = useTranslation();
  
  return (
    <section className="feature-list">
      <div className="feature-item">
        <span className="feature-icon">🏠</span>
        <span>Die ganze Unterkunft</span>
      </div>
      
      <div className="feature-item">
        <span className="feature-icon">📏</span>
        <span>140 m² groß</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🅿️</span>
        <span>Kostenlose Parkplätze</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">📶</span>
        <span>WLAN inklusive</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🐕</span>
        <span>Haustiere erlaubt</span>
      </div>

      <div className="feature-item">
        <span className="feature-icon">🚿</span>
        <span>Eigenes Badezimmer</span>
      </div>
    </section>
  );
}

export default FeatureList; 