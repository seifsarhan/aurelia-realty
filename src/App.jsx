import React from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Destinations from './components/Destinations';
import MortgageCalculator from './components/MortgageCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Advisors from './components/Advisors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import CompareModal from './components/CompareModal';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import './App.css';

function App() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [filters, setFilters] = useState({
    status: 'all',
    city: 'all',
    type: 'all',
    search: '',
    sort: 'featured'
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelia_favorites');
      return saved ? JSON.parse(saved) : ['aur-01', 'aur-02'];
    } catch {
      return [];
    }
  });

  const [compareIds, setCompareIds] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState('');
  const [toasts, setToasts] = useState([]);
  const [showBackTop, setShowBackTop] = useState(false);

  const [calcState, setCalcState] = useState({
    price: 850000,
    downPercent: 15,
    years: 10,
    rate: 0
  });

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_favorites', JSON.stringify(favorites));
    } catch {
      // ignore storage errors
    }
  }, [favorites]);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pushToast = useCallback((message, icon = 'fa-circle-check') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev.slice(-2), { id, message, icon }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  }, []);

  const handleToggleFavorite = (propertyId) => {
    setFavorites((prev) => {
      const exists = prev.includes(propertyId);
      if (exists) {
        pushToast(t.toasts.removedFav, 'fa-heart-crack');
        return prev.filter((id) => id !== propertyId);
      }
      pushToast(t.toasts.addedFav, 'fa-heart');
      return [...prev, propertyId];
    });
  };

  const handleToggleCompare = (propertyId) => {
    setCompareIds((prev) => {
      if (prev.includes(propertyId)) {
        pushToast(t.toasts.removedCompare, 'fa-code-compare');
        return prev.filter((id) => id !== propertyId);
      }
      if (prev.length >= 3) {
        pushToast(t.toasts.maxCompare, 'fa-circle-exclamation');
        return prev;
      }
      pushToast(t.toasts.addedCompare, 'fa-code-compare');
      return [...prev, propertyId];
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickSearch = ({ status, city, type }) => {
    setFilters((prev) => ({
      ...prev,
      status,
      city,
      type
    }));
    scrollToSection('properties');
  };

  const handleSelectCity = (cityKey) => {
    setFilters((prev) => ({
      ...prev,
      city: cityKey,
      status: 'all',
      type: 'all'
    }));
    pushToast(`${t.toasts.filterApplied} ${t.cities[cityKey]}`, 'fa-location-dot');
    scrollToSection('properties');
  };

  const handleCalculateMortgage = (property) => {
    setSelectedProperty(null);
    setCalcState((prev) => ({
      ...prev,
      price: Math.min(Math.max(property.priceUSD, 150000), 4000000)
    }));
    pushToast(t.toasts.calcLoaded, 'fa-calculator');
    setTimeout(() => scrollToSection('calculator'), 120);
  };

  const handleShareProperty = (property) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${property.id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    pushToast(t.toasts.linkCopied, 'fa-link');
  };

  const handleRequestPlan = (summary) => {
    setPrefillMessage(summary);
    pushToast(t.toasts.planPrefilled, 'fa-paper-plane');
    scrollToSection('contact');
  };

  const handleConsultAdvisor = (advisor) => {
    const msg =
      lang === 'ar'
        ? `أرغب في حجز استشارة عقارية مع المستشار ${advisor.name.ar} (${advisor.role.ar}).`
        : `I would like to schedule a private consultation with ${advisor.name.en} (${advisor.role.en}).`;
    setPrefillMessage(msg);
    scrollToSection('contact');
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageToggle />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      
      <footer style={{ backgroundColor: '#0a0a0a', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#888' }}>&copy; {new Date().getFullYear()} {t.footer}</p>
      </footer>
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="app-root">
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setFavoritesOpen(true)}
        onBookClick={() => scrollToSection('contact')}
      />

      <main>
        <Hero
          onQuickSearch={handleQuickSearch}
          onBookConsult={() => scrollToSection('contact')}
        />

        <FeaturedProperties
          filters={filters}
          setFilters={setFilters}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
          onSelectProperty={setSelectedProperty}
        />

        <Destinations onSelectCity={handleSelectCity} />

        <MortgageCalculator
          calcState={calcState}
          setCalcState={setCalcState}
          onRequestPlan={handleRequestPlan}
        />

        <WhyChooseUs />

        <Advisors onConsultAdvisor={handleConsultAdvisor} />

        <Testimonials />

        <FAQ />

        <ContactForm prefillMessage={prefillMessage} />
      </main>

      <Footer onSelectCity={handleSelectCity} />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onCalculateMortgage={handleCalculateMortgage}
        onShare={handleShareProperty}
      />

      {/* Saved Favorites Drawer */}
      <FavoritesDrawer
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={setSelectedProperty}
      />

      {/* Compare Modal */}
      <CompareModal
        isOpen={compareOpen}
        onClose={() => setCompareOpen(false)}
        compareIds={compareIds}
        onRemoveCompare={handleToggleCompare}
        onSelectProperty={setSelectedProperty}
      />

      {/* Floating Compare Bar */}
      {compareIds.length > 0 && (
        <div className="compare-bar">
          <div className="compare-bar-text">
            <i className="fas fa-code-compare" style={{ color: 'var(--gold)' }}></i>
            <span>
              <strong>{compareIds.length}/3</strong> {t.properties.compareBarLabel}
            </span>
          </div>
          <div className="compare-bar-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setCompareOpen(true)}
              disabled={compareIds.length < 2}
              style={{ opacity: compareIds.length < 2 ? 0.6 : 1 }}
            >
              {t.properties.compareNow}
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setCompareIds([])}
            >
              {t.properties.clearCompare}
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp & Back-to-Top */}
      <div className="floating-actions">
        {showBackTop && (
          <button
            type="button"
            className="fab-btn fab-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
        <a
          href="https://wa.me/966504829100"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-btn fab-whatsapp"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Toast Notifications */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <i className={`fas ${toast.icon}`}></i>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
