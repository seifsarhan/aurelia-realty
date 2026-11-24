import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './FAQ.css';

const FAQ = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-circle-question"></i>
            <span>{t.faq.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.faq.titleStart} <span>{t.faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item glass-card ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">
                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
