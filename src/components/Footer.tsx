import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = ({ onLinkClick }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/images/nonetchat.png" alt="NoNetChat Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">NoNetChat</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/pmietlicki/nonetchat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@nonetchat.com"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#fonctionnalites" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_features')}
                </a>
              </li>
              <li>
                <a href="#technologie" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_tech')}
                </a>
              </li>
              <li>
                <a href="#securite" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_security')}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_privacy')}
                </a>
              </li>
              <li>
                <a href="/terms" onClick={onLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_terms')}
                </a>
              </li>
              <li>
                <a href="mailto:contact@nonetchat.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {t('footer_contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer_copy')} 
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              {t('footer_for')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>{t('footer_version')}</span>
              <span>•</span>
              <span>{t('footer_android')}</span>
              <span>•</span>
              <a 
                href="https://play.google.com/store/apps/details?id=fr.pmietlicki.nonetchat"
                target="_blank"
                rel="noopener noreferrer"  
                className="hover:text-white transition-colors duration-300"
              >
                {t('footer_google')}
              </a>
            </div>
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="mt-8 text-xs text-gray-600 text-center">
          <p>
            {t('footer_keywords')}
          </p>
        </div>

        {/* Language Selector */}
        <div className="mt-8 text-center">
          <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language} className="bg-gray-800 text-white rounded-md p-2">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="ar">العربية</option>
            <option value="bn">বাংলা</option>
            <option value="hi">हिन्दी</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="mr">मराठी</option>
            <option value="nl">Nederlands</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="pl">Polski</option>
            <option value="pt">Português</option>
            <option value="ro">Română</option>
            <option value="ru">Русский</option>
            <option value="sw">Kiswahili</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="tr">Türkçe</option>
            <option value="ur">اردو</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;