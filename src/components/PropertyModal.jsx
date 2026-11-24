import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { advisorsData, FALLBACK_IMAGE } from '../data/properties';
import './PropertyModal.css';

const PropertyModal = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onCalculateMortgage,
  onShare
}) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [activeImg, setActiveImg] = useState(0);
  const [visitType, setVisitType] = useState('inperson');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [bookingRef, setBookingRef] = useState(null);

  useEffect(() => {
    setActiveImg(0);
    setBookingRef(null);
    setVisitorName('');
    setVisitorPhone('');
  }, [property?.id]);

  useEffect(() => {
    if (!property) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const advisor = advisorsData.find((a) => a.id === property.advisorId) || advisorsData[0];

  const handleBooking = (e) => {
    e.preventDefault();
    const randomRef = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
  };

  const nextImage = () => setActiveImg((prev) => (prev + 1) % property.images.length);
  const prevImage = () =>
    setActiveImg((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="property-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-topbar">
          <div className="modal-topbar-badges">
            <span className="badge-gold">{property.badge[lang]}</span>
            <span className="badge-status">{t.status[property.status]}</span>
          </div>

          <div className="modal-topbar-actions">
            <button
              type="button"
              className="modal-icon-btn"
              onClick={() => onShare(property)}
              title={t.modal.shareBtn}
              aria-label={t.modal.shareBtn}
            >
              <i className="fas fa-share-nodes"></i>
            </button>
            <button
              type="button"
              className={`modal-icon-btn ${isFavorite ? 'fav-active' : ''}`}
              onClick={() => onToggleFavorite(property.id)}
              title={t.properties.saveTooltip}
              aria-label={t.properties.saveTooltip}
            >
              <i className={isFavorite ? 'fas fa-heart' : 'fa-regular fa-heart'}></i>
            </button>
            <button
              type="button"
              className="modal-icon-btn close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="modal-scroll-content">
          {/* Image Gallery */}
          <div className="modal-gallery">
            <div className="gallery-main">
              <img
                src={property.images[activeImg]}
                alt={property.title[lang]}
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
              {property.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="gallery-arrow prev"
                    onClick={prevImage}
                    aria-label="Previous photo"
                  >
                    <i className={`fas fa-chevron-${lang === 'ar' ? 'right' : 'left'}`}></i>
                  </button>
                  <button
                    type="button"
                    className="gallery-arrow next"
                    onClick={nextImage}
                    aria-label="Next photo"
                  >
                    <i className={`fas fa-chevron-${lang === 'ar' ? 'left' : 'right'}`}></i>
                  </button>
                </>
              )}
              <span className="gallery-counter">
                {activeImg + 1} / {property.images.length}
              </span>
            </div>

            <div className="gallery-thumbs">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`gallery-thumb ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img
                    src={img}
                    alt={`${property.title[lang]} ${i + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="modal-main-grid">
            {/* Left / Main Details */}
            <div className="modal-details-col">
              <div className="modal-heading">
                <div>
                  <h2>{property.title[lang]}</h2>
                  <p className="modal-loc">
                    <i className="fas fa-location-dot"></i> {property.location[lang]}
                  </p>
                </div>
                <div className="modal-price-box">
                  <strong>{property.priceDisplay[lang]}</strong>
                  <span>{property.pricePerSqm[lang]}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="modal-specs-grid">
                <div className="spec-box">
                  <i className="fas fa-bed"></i>
                  <strong>{property.beds}</strong>
                  <span>{t.properties.beds}</span>
                </div>
                <div className="spec-box">
                  <i className="fas fa-bath"></i>
                  <strong>{property.baths}</strong>
                  <span>{t.properties.baths}</span>
                </div>
                <div className="spec-box">
                  <i className="fas fa-ruler-combined"></i>
                  <strong>{property.area} {t.properties.sqm}</strong>
                  <span>{t.compare.area}</span>
                </div>
                <div className="spec-box">
                  <i className="fas fa-car"></i>
                  <strong>{property.parking}</strong>
                  <span>{t.modal.parking}</span>
                </div>
                <div className="spec-box">
                  <i className="fas fa-calendar"></i>
                  <strong>{property.yearBuilt}</strong>
                  <span>{t.modal.yearBuilt}</span>
                </div>
                <div className="spec-box">
                  <i className="fas fa-gem"></i>
                  <strong>{property.finishing[lang]}</strong>
                  <span>{t.modal.finishing}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3>{t.modal.overview}</h3>
                <p className="modal-description">{property.description[lang]}</p>
              </div>

              <div className="modal-payment-banner">
                <div>
                  <small>{t.modal.paymentPlan}</small>
                  <strong>{property.paymentPlan[lang]}</strong>
                </div>
                {property.status === 'sale' && (
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => onCalculateMortgage(property)}
                  >
                    <i className="fas fa-calculator"></i> {t.modal.calcBtn}
                  </button>
                )}
              </div>

              <div className="modal-section">
                <h3>{t.modal.amenities}</h3>
                <ul className="amenities-list">
                  {property.amenities[lang].map((am, idx) => (
                    <li key={idx}>
                      <i className="fas fa-circle-check"></i>
                      <span>{am}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right / Booking & Advisor Column */}
            <div className="modal-sidebar-col">
              <div className="modal-advisor-card">
                <small className="sidebar-label">{t.modal.advisorTitle}</small>
                <div className="advisor-mini">
                  <img src={advisor.avatar} alt={advisor.name[lang]} />
                  <div>
                    <h4>{advisor.name[lang]}</h4>
                    <p>{advisor.role[lang]}</p>
                    <a href={`tel:${advisor.phone.replace(/\s+/g, '')}`} className="advisor-phone">
                      <i className="fas fa-phone"></i> {advisor.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="modal-booking-card">
                <h3>
                  <i className="fas fa-calendar-check"></i> {t.modal.bookTitle}
                </h3>

                {bookingRef ? (
                  <div className="booking-confirmed">
                    <div className="booking-check">
                      <i className="fas fa-check"></i>
                    </div>
                    <h4>{t.modal.bookingSuccessTitle}</h4>
                    <p>{t.modal.bookingSuccessDesc}</p>
                    <div className="ref-pill">
                      {t.modal.refNumber} <strong>{bookingRef}</strong>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm w-100"
                      onClick={() => setBookingRef(null)}
                    >
                      {t.modal.bookAnother}
                    </button>
                  </div>
                ) : (
                  <form className="booking-form" onSubmit={handleBooking}>
                    <div className="visit-toggle">
                      <button
                        type="button"
                        className={visitType === 'inperson' ? 'active' : ''}
                        onClick={() => setVisitType('inperson')}
                      >
                        <i className="fas fa-person-walking"></i> {t.modal.visitInPerson}
                      </button>
                      <button
                        type="button"
                        className={visitType === 'virtual' ? 'active' : ''}
                        onClick={() => setVisitType('virtual')}
                      >
                        <i className="fas fa-video"></i> {t.modal.visitVirtual}
                      </button>
                    </div>

                    <div className="booking-row-2">
                      <div className="booking-field">
                        <label>{t.modal.dateLabel}</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="booking-field">
                        <label>{t.modal.timeLabel}</label>
                        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="07:30 PM">07:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="booking-field">
                      <input
                        type="text"
                        placeholder={t.modal.namePlaceholder}
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="booking-field">
                      <input
                        type="tel"
                        placeholder={t.modal.phonePlaceholder}
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      {t.modal.confirmBooking}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
