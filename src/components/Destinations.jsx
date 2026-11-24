import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { destinationsData, propertiesData, FALLBACK_IMAGE } from '../data/properties';
import './Destinations.css';

const Destinations = ({ onSelectCity }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-earth-africa"></i>
            <span>{t.destinations.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.destinations.titleStart} <span>{t.destinations.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.destinations.subtitle}</p>
        </div>

        <div className="destinations-grid">
          {destinationsData.map((dest) => {
            const count = propertiesData.filter((p) => p.cityKey === dest.cityKey).length;
            return (
              <button
                key={dest.cityKey}
                type="button"
                className="destination-card"
                onClick={() => onSelectCity(dest.cityKey)}
              >
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
                <div className="destination-overlay"></div>
                <div className="destination-content">
                  <span className="destination-tag">{dest.tag[lang]}</span>
                  <h3>{dest.name[lang]}</h3>
                  <div className="destination-meta">
                    <span>
                      <strong>{count}</strong> {t.destinations.unitsLabel}
                    </span>
                    <span className="destination-arrow">
                      {t.destinations.exploreBtn}{' '}
                      <i className={`fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}`}></i>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
