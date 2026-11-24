import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Footer.css';

const Footer = ({ onSelectCity }) => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <strong>{t.brandName}</strong>
              <span>{t.brandSub}</span>
            </div>
            <p className="footer-about">{t.footer.about}</p>
            <div className="footer-socials">
              <a href="#contact" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#contact" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#contact" aria-label="X"><i className="fab fa-x-twitter"></i></a>
              <a href="#contact" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#properties">{t.nav.properties}</a></li>
              <li><a href="#calculator">{t.nav.calculator}</a></li>
              <li><a href="#advisors">{t.nav.advisors}</a></li>
              <li><a href="#faq">{t.faq.eyebrow}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t.footer.markets}</h4>
            <ul>
              <li>
                <button type="button" onClick={() => onSelectCity('riyadh')}>
                  {t.cities.riyadh}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCity('dubai')}>
                  {t.cities.dubai}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCity('north_coast')}>
                  {t.cities.north_coast}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCity('new_cairo')}>
                  {t.cities.new_cairo}
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter-col">
            <h4>{t.footer.newsletterTitle}</h4>
            <p>{t.footer.newsletterDesc}</p>
            {subscribed ? (
              <div className="newsletter-done">
                <i className="fas fa-circle-check"></i>
                <span>{t.footer.subscribedMsg}</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  {t.footer.subscribeBtn}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="footer-legal">
            <a href="#contact">{t.footer.privacy}</a>
            <a href="#contact">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
