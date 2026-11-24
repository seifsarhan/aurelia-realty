import React from 'react';
import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ContactForm = () => {
const ContactForm = ({ prefillMessage, onFormSubmitted }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'buy',
    city: 'riyadh',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  useEffect(() => {
    if (prefillMessage) {
      setSubmittedRef(null);
      setFormData((prev) => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const refCode = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmitting(false);
      setSubmittedRef(refCode);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'buy',
        city: 'riyadh',
        message: ''
      });
      if (onFormSubmitted) onFormSubmitted(refCode);
    }, 550);
  };

  return (
    <section className="contact-section">
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-info">
            <h2 className="section-title" style={{ [lang === 'ar' ? 'left' : 'right']: '0', transform: 'none', textAlign: lang === 'ar' ? 'right' : 'left' }}>{t.contactTitle}</h2>
            <p className="contact-desc">{t.contactDesc}</p>
            
            <ul className="contact-details">
              <li><i className="fas fa-phone-alt"></i> +966 50 123 4567</li>
              <li><i className="fas fa-envelope"></i> info@luxuryrealestate.com</li>
              <li><i className="fas fa-map-marker-alt"></i> برج المملكة، الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder={t.fullName} required className="form-input" />
            <div className="section-eyebrow">
              <i className="fas fa-envelope-open-text"></i>
              <span>{t.contact.eyebrow}</span>
            </div>
            <h2 className="contact-title">
              {t.contact.titleStart} <span>{t.contact.titleHighlight}</span>
            </h2>
            <p className="contact-desc">{t.contact.desc}</p>

            <div className="contact-direct-links">
              <a href="tel:+966504829100" className="contact-chip">
                <i className="fas fa-phone-volume"></i>
                <span dir="ltr">+966 50 482 9100</span>
              </a>
              <a href="mailto:private@aureliaestates.com" className="contact-chip">
                <i className="fas fa-envelope"></i>
                <span>private@aureliaestates.com</span>
              </a>
              <div className="contact-chip">
                <i className="fas fa-clock"></i>
                <span>{t.contact.hours}</span>
              </div>
              <div className="form-group">
                <input type="email" placeholder={t.email} required className="form-input" />
            </div>

            <div className="offices-block">
              <h4>{t.contact.officesTitle}</h4>
              <div className="offices-grid">
                {t.contact.offices.map((office, idx) => (
                  <div key={idx} className="office-item">
                    <strong>
                      <i className="fas fa-location-dot"></i> {office.city}
                    </strong>
                    <span>{office.addr}</span>
                  </div>
                ))}
              </div>
              <div className="form-group">
                <input type="tel" placeholder={t.phone} required className="form-input" />
            </div>
          </div>

          <div className="contact-form-panel">
            {submittedRef ? (
              <div className="contact-success">
                <div className="success-circle">
                  <i className="fas fa-check"></i>
                </div>
                <h3>{t.contact.successTitle}</h3>
                <p>{t.contact.successDesc}</p>
                <div className="ref-pill">
                  {t.modal.refNumber} <strong>{submittedRef}</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSubmittedRef(null)}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
              <div className="form-group">
                <textarea placeholder={t.message} rows="4" className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">{t.sendBtn}</button>
            </form>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="c-name">{t.contact.fullName}</label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.fullName}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-phone">{t.contact.phone}</label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 5X XXX XXXX"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-email">{t.contact.email}</label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="c-type">{t.contact.inquiryType}</label>
                    <select
                      id="c-type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="buy">{t.contact.inquiryOptions.buy}</option>
                      <option value="invest">{t.contact.inquiryOptions.invest}</option>
                      <option value="rent">{t.contact.inquiryOptions.rent}</option>
                      <option value="sell">{t.contact.inquiryOptions.sell}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="c-city">{t.contact.preferredCity}</label>
                    <select
                      id="c-city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="riyadh">{t.cities.riyadh}</option>
                      <option value="dubai">{t.cities.dubai}</option>
                      <option value="north_coast">{t.cities.north_coast}</option>
                      <option value="new_cairo">{t.cities.new_cairo}</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-msg">{t.contact.message}</label>
                  <textarea
                    id="c-msg"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.message}
                    className="form-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={submitting}
                >
                  <i className={`fas ${submitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                  <span>{submitting ? t.contact.submitting : t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
