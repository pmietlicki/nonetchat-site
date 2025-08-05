import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = ({ onLinkClick }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      // It's a section link
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // It's a page link
      onLinkClick(e);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center space-x-2">
            <img src="/assets/images/nonetchat.png" alt="NoNetChat Logo" className="h-8 w-8" />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              NoNetChat
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#accueil"
              onClick={(e) => handleNavClick(e, '#accueil')}
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}
            >
              {t('Accueil')}
            </a>
            <a 
              href="#fonctionnalites"
              onClick={(e) => handleNavClick(e, '#fonctionnalites')}
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}
            >
              {t('footer_features')}
            </a>
            <a 
              href="#technologie"
              onClick={(e) => handleNavClick(e, '#technologie')}
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}
            >
              {t('footer_tech')}
            </a>
            <a 
              href="#securite"
              onClick={(e) => handleNavClick(e, '#securite')}
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}
            >
              {t('footer_security')}
            </a>
            <a 
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}
            >
              {t('footer_faq')}
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=fr.pmietlicki.nonetchat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-teal text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              {t('hero_download')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#accueil"
                onClick={(e) => handleNavClick(e, '#accueil')}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
              >
                {t('Accueil')}
              </a>
              <a
                href="#fonctionnalites"
                onClick={(e) => handleNavClick(e, '#fonctionnalites')}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
              >
                {t('footer_features')}
              </a>
              <a
                href="#technologie"
                onClick={(e) => handleNavClick(e, '#technologie')}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
              >
                {t('footer_tech')}
              </a>
              <a
                href="#securite"
                onClick={(e) => handleNavClick(e, '#securite')}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
              >
                {t('footer_security')}
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
              >
                {t('footer_faq')}
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=fr.pmietlicki.nonetchat"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md font-medium text-center"
              >
                {t('hero_download')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;