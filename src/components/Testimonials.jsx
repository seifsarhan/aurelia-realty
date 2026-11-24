import React from 'react';
import './Testimonials.css';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const Testimonials = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="testimonials">
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">{t.testTitle}</h2>
        <div className="section-header">
          <div className="section-eyebrow">
            <i className="fas fa-star"></i>
            <span>{t.testimonials.eyebrow}</span>
          </div>
          <h2 className="section-title">
            {t.testimonials.titleStart} <span>{t.testimonials.titleHighlight}</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card glass-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{t.test1}</p>
            <div className="client-info">
              <div className="client-avatar">
                <img src="https://i.pravatar.cc/150?img=11" alt={t.test1Name} />
          {t.testimonials.items.map((item, idx) => (
            <article key={idx} className="testimonial-card glass-card">
              <div className="testimonial-top">
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="bought-pill">{item.bought}</span>
              </div>
              <div>
                <h4>{t.test1Name}</h4>
                <span>{t.test1Role}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{t.test2}</p>
            <div className="client-info">
              <div className="client-avatar">
                <img src="https://i.pravatar.cc/150?img=5" alt={t.test2Name} />
              <p className="testimonial-text">“{item.text}”</p>

              <div className="client-info">
                <div className="client-avatar">
                  <img src={item.avatar} alt={item.name} loading="lazy" />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
              <div>
                <h4>{t.test2Name}</h4>
                <span>{t.test2Role}</span>
              </div>
            </div>
          </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
