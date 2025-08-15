import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
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
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const LanguageSelector = ({ inMenu = false }) => {
    const baseClasses = inMenu ? 'w-full p-2 border rounded-md' : 'p-1 rounded-md';
    const colorClasses = isScrolled || inMenu ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white';

    return (
      <select 
        onChange={(e) => changeLanguage(e.target.value)} 
        defaultValue={i18n.language}
        className={`${baseClasses} ${colorClasses}`}>
        <option className="text-black" value="en">English</option>
        <option className="text-black" value="fr">Français</option>
        <option className="text-black" value="es">Español</option>
        <option className="text-black" value="de">Deutsch</option>
        <option className="text-black" value="ar">العربية</option>
        <option className="text-black" value="bn">বাংলা</option>
        <option className="text-black" value="hi">हिन्दी</option>
        <option className="text-black" value="id">Bahasa Indonesia</option>
        <option className="text-black" value="it">Italiano</option>
        <option className="text-black" value="ja">日本語</option>
        <option className="text-black" value="ko">한국어</option>
        <option className="text-black" value="mr">मराठी</option>
        <option className="text-black" value="nl">Nederlands</option>
        <option className="text-black" value="pa">ਪੰਜਾਬੀ</option>
        <option className="text-black" value="pl">Polski</option>
        <option className="text-black" value="pt">Português</option>
        <option className="text-black" value="ro">Română</option>
        <option className="text-black" value="ru">Русский</option>
        <option className="text-black" value="sw">Kiswahili</option>
        <option className="text-black" value="ta">தமிழ்</option>
        <option className="text-black" value="te">తెలుగు</option>
        <option className="text-black" value="tr">Türkçe</option>
        <option className="text-black" value="ur">اردو</option>
        <option className="text-black" value="zh">中文</option>
      </select>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/images/nonetchat.png" alt="NoNetChat Logo" className="h-8 w-8" />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              NoNetChat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/#accueil" className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}>{t('Accueil')}</a>
            <a href="/#fonctionnalites" className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}>{t('footer_features')}</a>
            <a href="/#technologie" className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}>{t('footer_tech')}</a>
            <a href="/#securite" className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}>{t('footer_security')}</a>
            <a href="/#faq" className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-teal'
              }`}>{t('footer_faq')}</a>
            <LanguageSelector />
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
              <a onClick={() => handleNavClick('#accueil')} className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">{t('Accueil')}</a>
              <a onClick={() => handleNavClick('#fonctionnalites')} className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">{t('footer_features')}</a>
              <a onClick={() => handleNavClick('#technologie')} className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">{t('footer_tech')}</a>
              <a onClick={() => handleNavClick('#securite')} className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">{t('footer_security')}</a>
              <a onClick={() => handleNavClick('#faq')} className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">{t('footer_faq')}</a>
              <div className="px-3 py-2">
                <LanguageSelector inMenu={true} />
              </div>
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
