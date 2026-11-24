import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { propertiesData, FALLBACK_IMAGE } from '../data/properties';
import './CompareModal.css';

const CompareModal = ({ isOpen, onClose, compareIds, onRemoveCompare, onSelectProperty }) => {
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

  if (!isOpen) return null;

  const items = propertiesData.filter((p) => compareIds.includes(p.id));

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
        <div className="compare-header">
          <div>
            <h3>{t.compare.title}</h3>
            <p>{t.compare.subtitle}</p>
          </div>
          <button type="button" className="modal-icon-btn" onClick={onClose} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>{t.compare.featureCol}</th>
                {items.map((prop) => (
                  <th key={prop.id}>
                    <div className="compare-prop-head">
                      <img
                        src={prop.images[0]}
                        alt={prop.title[lang]}
                        onError={(e) => {
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                      <strong>{prop.title[lang]}</strong>
                      <button
                        type="button"
                        className="compare-remove-x"
                        onClick={() => onRemoveCompare(prop.id)}
                        aria-label="Remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t.compare.price}</td>
                {items.map((p) => (
                  <td key={p.id} className="compare-price-cell">
                    {p.priceDisplay[lang]}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.location}</td>
                {items.map((p) => (
                  <td key={p.id}>{p.location[lang]}</td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.status}</td>
                {items.map((p) => (
                  <td key={p.id}>{t.status[p.status]}</td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.area}</td>
                {items.map((p) => (
                  <td key={p.id}>
                    {p.area} {t.properties.sqm}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.rooms}</td>
                {items.map((p) => (
                  <td key={p.id}>
                    {p.beds} {t.properties.beds} / {p.baths} {t.properties.baths}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.finishing}</td>
                {items.map((p) => (
                  <td key={p.id}>{p.finishing[lang]}</td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.payment}</td>
                {items.map((p) => (
                  <td key={p.id}>{p.paymentPlan[lang]}</td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.year}</td>
                {items.map((p) => (
                  <td key={p.id}>{p.yearBuilt}</td>
                ))}
              </tr>
              <tr>
                <td>{t.compare.action}</td>
                {items.map((p) => (
                  <td key={p.id}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        onClose();
                        onSelectProperty(p);
                      }}
                    >
                      {t.compare.viewBtn}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
