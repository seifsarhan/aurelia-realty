import React from 'react';
import React, { useMemo } from 'react';
import './FeaturedProperties.css';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { propertiesData, FALLBACK_IMAGE } from '../data/properties';

const FeaturedProperties = () => {
const FeaturedProperties = ({
  filters,
  setFilters,
  favorites,
  onToggleFavorite,
  compareIds,
  onToggleCompare,
  onSelectProperty
}) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t.villaOrchid,
      location: t.locRiyadh,
      price: t.priceOrchid,
      beds: 5,
      baths: 6,
      area: '600'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t.panoramaRes,
      location: t.locDubai,
      price: t.pricePanorama,
      beds: 3,
      baths: 4,
      area: '250'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: t.oasisPalace,
      location: t.locEgypt,
      price: t.priceOasis,
      beds: 6,
      baths: 7,
      area: '1000'
  const categories = ['all', 'villa', 'penthouse', 'apartment', 'chalet'];
  const statuses = ['all', 'sale', 'rent'];

  const filteredProperties = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    let list = propertiesData.filter((item) => {
      if (filters.status !== 'all' && item.status !== filters.status) return false;
      if (filters.city !== 'all' && item.cityKey !== filters.city) return false;
      if (filters.type !== 'all' && item.type !== filters.type) return false;

      if (query) {
        const haystack = [
          item.title.ar,
          item.title.en,
          item.location.ar,
          item.location.en,
          item.badge.ar,
          item.badge.en,
          t.cities[item.cityKey]
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    if (filters.sort === 'price_asc') {
      list = [...list].sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (filters.sort === 'price_desc') {
      list = [...list].sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (filters.sort === 'area_desc') {
      list = [...list].sort((a, b) => b.area - a.area);
    } else {
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  ];

    return list;
  }, [filters, t.cities]);

  const hasActiveFilters =
    filters.status !== 'all' ||
    filters.city !== 'all' ||
    filters.type !== 'all' ||
    filters.search.trim() !== '';

  const resetFilters = () => {
    setFilters({
      status: 'all',
      city: 'all',
      type: 'all',
      search: '',
      sort: 'featured'
    });
  };

  return (
    <section className="featured-properties">
    <section id="properties" className="featured-properties">
      <div className="container">
        <h2 className="section-title">{t.featTitle}</h2>
        <div className="properties-grid">
          {properties.map(property => (
            <div key={property.id} className="property-card glass-card">
              <div className="property-image-wrapper">
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="property-price">{property.price}</div>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="property-location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
                <div className="property-features">
                  <span><i className="fas fa-bed"></i> {property.beds} {t.rooms}</span>
                  <span><i className="fas fa-bath"></i> {property.baths} {t.baths}</span>
                  <span><i className="fas fa-vector-square"></i> {property.area} m²</span>
                </div>
                <button className="btn btn-outline w-100">{t.details}</button>
              </div>
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-key"></i>
            <span>{t.properties.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.properties.titleStart} <span>{t.properties.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.properties.subtitle}</p>
        </div>

        {/* Interactive Filter Toolbar */}
        <div className="filter-panel glass-card">
          <div className="filter-row-top">
            <div className="search-input-wrap">
              <i className="fas fa-magnifying-glass"></i>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                placeholder={t.properties.searchPlaceholder}
                aria-label={t.properties.searchPlaceholder}
              />
              {filters.search && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
                  aria-label="Clear search"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          ))}

            <div className="filter-selects">
              <select
                value={filters.city}
                onChange={(e) => setFilters((prev) => ({ ...prev, city: e.target.value }))}
                aria-label={t.hero.cityLabel}
              >
                <option value="all">{t.cities.all}</option>
                <option value="riyadh">{t.cities.riyadh}</option>
                <option value="dubai">{t.cities.dubai}</option>
                <option value="north_coast">{t.cities.north_coast}</option>
                <option value="new_cairo">{t.cities.new_cairo}</option>
              </select>

              <select
                value={filters.sort}
                onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                aria-label={t.properties.sortLabel}
              >
                <option value="featured">{t.properties.sortFeatured}</option>
                <option value="price_asc">{t.properties.sortPriceAsc}</option>
                <option value="price_desc">{t.properties.sortPriceDesc}</option>
                <option value="area_desc">{t.properties.sortAreaDesc}</option>
              </select>
            </div>
          </div>

          <div className="filter-row-bottom">
            <div className="status-pills">
              {statuses.map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`filter-pill ${filters.status === st ? 'active' : ''}`}
                  onClick={() => setFilters((prev) => ({ ...prev, status: st }))}
                >
                  {t.status[st]}
                </button>
              ))}
            </div>

            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${filters.type === cat ? 'active' : ''}`}
                  onClick={() => setFilters((prev) => ({ ...prev, type: cat }))}
                >
                  {t.types[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Meta */}
        <div className="results-meta">
          <p className="results-count">
            <strong>{filteredProperties.length}</strong> {t.properties.resultsCount}
          </p>
          {hasActiveFilters && (
            <button type="button" className="reset-link" onClick={resetFilters}>
              <i className="fas fa-rotate-left"></i> {t.properties.resetFilters}
            </button>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="empty-state glass-card">
            <div className="empty-icon">
              <i className="fas fa-building-circle-xmark"></i>
            </div>
            <h3>{t.properties.noResultsTitle}</h3>
            <p>{t.properties.noResultsDesc}</p>
            <button type="button" className="btn btn-primary" onClick={resetFilters}>
              {t.properties.resetFilters}
            </button>
          </div>
        ) : (
          <div className="properties-grid">
            {filteredProperties.map((property) => {
              const isFav = favorites.includes(property.id);
              const isCompared = compareIds.includes(property.id);

              return (
                <article key={property.id} className="property-card glass-card">
                  <div
                    className="property-image-wrapper"
                    onClick={() => onSelectProperty(property)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectProperty(property);
                      }
                    }}
                  >
                    <img
                      src={property.images[0]}
                      alt={property.title[lang]}
                      className="property-image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                    <div className="property-image-gradient"></div>

                    <div className="property-badges">
                      <span className="badge-gold">{property.badge[lang]}</span>
                      <span className={`badge-status ${property.status}`}>
                        {t.status[property.status]}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`fav-btn ${isFav ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(property.id);
                      }}
                      aria-label={t.properties.saveTooltip}
                      title={t.properties.saveTooltip}
                    >
                      <i className={isFav ? 'fas fa-heart' : 'fa-regular fa-heart'}></i>
                    </button>

                    <div className="property-price-overlay">
                      <span className="property-price-main">{property.priceDisplay[lang]}</span>
                      <span className="property-price-sub">{property.pricePerSqm[lang]}</span>
                    </div>
                  </div>

                  <div className="property-body">
                    <div className="property-head">
                      <h3
                        className="property-title"
                        onClick={() => onSelectProperty(property)}
                      >
                        {property.title[lang]}
                      </h3>
                      <p className="property-location">
                        <i className="fas fa-location-dot"></i> {property.location[lang]}
                      </p>
                    </div>

                    <div className="property-features">
                      <span>
                        <i className="fas fa-bed"></i> {property.beds} {t.properties.beds}
                      </span>
                      <span>
                        <i className="fas fa-bath"></i> {property.baths} {t.properties.baths}
                      </span>
                      <span>
                        <i className="fas fa-ruler-combined"></i> {property.area} {t.properties.sqm}
                      </span>
                    </div>

                    <div className="property-payment-pill">
                      <i className="fas fa-credit-card"></i>
                      <span>{property.paymentPlan[lang]}</span>
                    </div>

                    <div className="property-card-actions">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm property-detail-btn"
                        onClick={() => onSelectProperty(property)}
                      >
                        {t.properties.detailsBtn}
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${isCompared ? 'btn-outline active-compare' : 'btn-ghost'}`}
                        onClick={() => onToggleCompare(property.id)}
                      >
                        <i className={`fas ${isCompared ? 'fa-check' : 'fa-code-compare'}`}></i>
                        <span>{isCompared ? t.properties.comparedBtn : t.properties.compareBtn}</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
