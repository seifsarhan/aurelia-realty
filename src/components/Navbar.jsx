import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Navbar.css';

const Navbar = ({ favoritesCount, onOpenFavorites, onBookClick }) => {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#properties', label: t.nav.properties },
    { href: '#destinations', label: t.nav.destinations },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#advisors', label: t.nav.advisors },
    { href: '#contact', label: t.nav.contact }
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="brand-logo" aria-label={t.brandName}>
            <span className="brand-emblem">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L25 10.5V25H17.5V16.5H10.5V25H3V10.5L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M14 6.5L19.5 11H8.5L14 6.5Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-text">
              <strong className="brand-name">{t.brandName}</strong>
              <small className="brand-sub">{t.brandSub}</small>
            </span>
          </a>

          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="nav-icon-btn"
              onClick={onOpenFavorites}
              aria-label={t.nav.saved}
              title={t.nav.saved}
            >
              <i className="fa-regular fa-heart"></i>
              {favoritesCount > 0 && <span className="nav-badge">{favoritesCount}</span>}
            </button>

            <button
              type="button"
              className="nav-lang-btn"
              onClick={toggleLanguage}
              aria-label="Toggle Language"
            >
              <i className="fas fa-globe"></i>
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm nav-cta-desktop"
              onClick={onBookClick}
            >
              {t.nav.bookViewing}
            </button>

            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
            >
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-header">
          <div className="brand-text">
            <strong className="brand-name">{t.brandName}</strong>
            <small className="brand-sub">{t.brandSub}</small>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="mobile-nav-list">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleNavClick}
            >
              <span>{item.label}</span>
              <i className={`fas fa-chevron-${lang === 'ar' ? 'left' : 'right'}`}></i>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn btn-ghost w-100"
            onClick={() => {
              setMobileOpen(false);
              onOpenFavorites();
            }}
          >
            <i className="fa-regular fa-heart"></i>
            {t.nav.saved} ({favoritesCount})
          </button>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => {
              setMobileOpen(false);
              onBookClick();
            }}
          >
            <i className="fas fa-calendar-check"></i>
            {t.nav.bookViewing}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
