import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { propertiesData, FALLBACK_IMAGE } from '../data/properties';
import './FavoritesDrawer.css';

const FavoritesDrawer = ({ isOpen, onClose, favorites, onToggleFavorite, onSelectProperty }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const savedItems = propertiesData.filter((p) => favorites.includes(p.id));

  return (
    <>
      <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`fav-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="fav-drawer-header">
          <h3>
            <i className="fas fa-heart"></i> {t.favorites.title} ({savedItems.length})
          </h3>
          <button type="button" className="drawer-close" onClick={onClose} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="fav-drawer-body">
          {savedItems.length === 0 ? (
            <div className="fav-empty">
              <div className="fav-empty-icon">
                <i className="fa-regular fa-heart"></i>
              </div>
              <h4>{t.favorites.emptyTitle}</h4>
              <p>{t.favorites.emptyDesc}</p>
              <a
                href="#properties"
                className="btn btn-primary btn-sm"
                onClick={onClose}
              >
                {t.favorites.browseBtn}
              </a>
            </div>
          ) : (
            <div className="fav-list">
              {savedItems.map((prop) => (
                <div key={prop.id} className="fav-item">
                  <img
                    src={prop.images[0]}
                    alt={prop.title[lang]}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                  <div className="fav-item-info">
                    <h4>{prop.title[lang]}</h4>
                    <p className="fav-loc">{prop.location[lang]}</p>
                    <strong className="fav-price">{prop.priceDisplay[lang]}</strong>
                    <div className="fav-item-actions">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          onClose();
                          onSelectProperty(prop);
                        }}
                      >
                        {t.favorites.viewDetails}
                      </button>
                      <button
                        type="button"
                        className="fav-remove-btn"
                        onClick={() => onToggleFavorite(prop.id)}
                      >
                        <i className="fas fa-trash-can"></i> {t.favorites.remove}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default FavoritesDrawer;
