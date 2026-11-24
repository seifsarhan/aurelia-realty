import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { advisorsData } from '../data/properties';
import './Advisors.css';

const Advisors = ({ onConsultAdvisor }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="advisors" className="advisors-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-user-tie"></i>
            <span>{t.advisors.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.advisors.titleStart} <span>{t.advisors.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.advisors.subtitle}</p>
        </div>

        <div className="advisors-grid">
          {advisorsData.map((adv) => (
            <div key={adv.id} className="advisor-card glass-card">
              <div className="advisor-photo-wrap">
                <img src={adv.avatar} alt={adv.name[lang]} loading="lazy" />
                <span className="advisor-exp-badge">{adv.experience[lang]}</span>
              </div>
              <div className="advisor-body">
                <h3>{adv.name[lang]}</h3>
                <p className="advisor-role">{adv.role[lang]}</p>

                <div className="advisor-stats">
                  <span>
                    <i className="fas fa-handshake"></i> {adv.deals[lang]}
                  </span>
                  <span>
                    <i className="fas fa-language"></i> {adv.languages[lang]}
                  </span>
                </div>

                <div className="advisor-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => onConsultAdvisor(adv)}
                  >
                    <i className="fas fa-calendar-day"></i>
                    <span>{t.advisors.scheduleBtn}</span>
                  </button>
                  <a
                    href={`tel:${adv.phone.replace(/\s+/g, '')}`}
                    className="btn btn-ghost btn-sm advisor-call-btn"
                    aria-label={adv.phone}
                    title={adv.phone}
                  >
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
