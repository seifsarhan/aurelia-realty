import React from 'react';
import { useLanguage } from '../LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();
  
  return (
    <button className="lang-toggle-btn glass-card" onClick={toggleLanguage}>
      <i className="fas fa-globe"></i> {lang === 'ar' ? 'English' : 'العربية'}
    </button>
  );
};

export default LanguageToggle;
