import React from 'react';
import { WifiOff, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="accueil" className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-800"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img src="/assets/images/nonetchat.png" alt="NoNetChat Logo" className="h-24" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          {t('hero_title_1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">{t('hero_title_2')}</span>{t('hero_title_3')}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=fr.pmietlicki.nonetchat"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-blue hover:bg-brand-teal text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            aria-label="Télécharger NoNetChat sur Google Play Store"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4ZM5.42951 5.02951L14.1421 12L5.42951 18.9705V5.02951Z" />
            </svg>
            <span>{t('hero_download')} <strong>Google Play</strong></span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
            <WifiOff className="h-6 w-6 text-orange-400" />
            <p className="text-gray-300">{t('hero_feature_1')}</p>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
            <Users className="h-6 w-6 text-orange-400" />
            <p className="text-gray-300">{t('hero_feature_2')}</p>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
            <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-gray-300">{t('hero_feature_3')}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
