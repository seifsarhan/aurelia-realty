import React from 'react';
import React, { useState } from 'react';
import './Hero.css';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const Hero = () => {
const Hero = ({ onQuickSearch, onBookConsult }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [status, setStatus] = useState('sale');
  const [city, setCity] = useState('all');
  const [type, setType] = useState('all');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onQuickSearch({ status, city, type });
  };

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-subtitle">{t.heroSubtitle}</p>
        <div className="hero-actions">
          <button className="btn btn-primary">{t.browseProps}</button>
          <button className="btn btn-outline">{t.bookConsult}</button>
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="section-eyebrow">
            <i className="fas fa-crown"></i>
            <span>{t.hero.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            {t.hero.titleStart}{' '}
            <span className="hero-title-accent">{t.hero.titleHighlight}</span>
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={scrollToProperties}>
              <i className="fas fa-building"></i>
              <span>{t.hero.browseBtn}</span>
            </button>
            <button type="button" className="btn btn-outline btn-lg" onClick={onBookConsult}>
              <i className="fas fa-headset"></i>
              <span>{t.hero.consultBtn}</span>
            </button>
          </div>
        </div>

        {/* Interactive Quick Search Bar */}
        <form className="hero-search-box glass-card animate-fade-up" onSubmit={handleSearchSubmit}>
          <div className="hero-search-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={status === 'sale'}
              className={`search-tab ${status === 'sale' ? 'active' : ''}`}
              onClick={() => setStatus('sale')}
            >
              {t.hero.searchBuy}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={status === 'rent'}
              className={`search-tab ${status === 'rent' ? 'active' : ''}`}
              onClick={() => setStatus('rent')}
            >
              {t.hero.searchRent}
            </button>
          </div>

          <div className="hero-search-fields">
            <div className="search-field">
              <label htmlFor="hero-city">
                <i className="fas fa-location-dot"></i> {t.hero.cityLabel}
              </label>
              <select
                id="hero-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="all">{t.hero.allCities}</option>
                <option value="riyadh">{t.cities.riyadh}</option>
                <option value="dubai">{t.cities.dubai}</option>
                <option value="north_coast">{t.cities.north_coast}</option>
                <option value="new_cairo">{t.cities.new_cairo}</option>
              </select>
            </div>

            <div className="search-divider" aria-hidden="true"></div>

            <div className="search-field">
              <label htmlFor="hero-type">
                <i className="fas fa-house-chimney"></i> {t.hero.typeLabel}
              </label>
              <select
                id="hero-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">{t.hero.allTypes}</option>
                <option value="villa">{t.types.villa}</option>
                <option value="penthouse">{t.types.penthouse}</option>
                <option value="apartment">{t.types.apartment}</option>
                <option value="chalet">{t.types.chalet}</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary hero-search-submit">
              <i className="fas fa-magnifying-glass"></i>
              <span>{t.hero.searchAction}</span>
            </button>
          </div>
        </form>

        {/* Live Stats Strip */}
        <div className="hero-stats">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <strong className="hero-stat-value">{stat.value}</strong>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
