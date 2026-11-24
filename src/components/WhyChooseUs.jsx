import React from 'react';
import './WhyChooseUs.css';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const WhyChooseUs = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="why-choose-us">
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <h2 className="section-title">{t.whyTitle}</h2>
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-award"></i>
            <span>{t.why.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.why.titleStart} <span>{t.why.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{t.why.subtitle}</p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-card text-center">
            <div className="feature-icon">🏆</div>
            <h3>{t.whyExpTitle}</h3>
            <p>{t.whyExpDesc}</p>
          {t.why.features.map((feat, idx) => (
            <div key={idx} className="feature-card glass-card">
              <div className="feature-icon">
                <i className={`fas ${feat.icon}`}></i>
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* 4-Step Acquisition Journey */}
        <div className="process-box glass-card">
          <h3 className="process-heading">{t.why.processTitle}</h3>
          <div className="process-steps">
            {t.why.steps.map((step) => (
              <div key={step.num} className="process-step">
                <span className="step-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="feature-card glass-card text-center">
            <div className="feature-icon">💎</div>
            <h3>{t.whyExcTitle}</h3>
            <p>{t.whyExcDesc}</p>
          </div>
          <div className="feature-card glass-card text-center">
            <div className="feature-icon">🤝</div>
            <h3>{t.whyServTitle}</h3>
            <p>{t.whyServDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
