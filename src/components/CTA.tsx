import React from 'react';
import { Download, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('cta_title_1')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
            {t('cta_title_2')}
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('cta_subtitle')}
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://play.google.com/store/apps/details?id=fr.pmietlicki.nonetchat"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-blue hover:bg-brand-teal text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[250px]"
            aria-label="Télécharger NoNetChat sur Google Play Store"
          >
            <Download className="h-6 w-6 group-hover:animate-bounce" />
            <div className="text-left">
              <div className="text-sm">{t('hero_download')}</div>
              <div className="font-bold">Google Play</div>
            </div>
          </a>
          
          <a
            href="https://apkpure.com/fr/nonetchat/fr.pmietlicki.nonetchat"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3 min-w-[250px]"
            aria-label="Télécharger NoNetChat APK sur APKPure"
          >
            <Download className="h-6 w-6" />
            <div className="text-left">
              <div className="text-sm text-blue-200">{t('cta_dl_apk')}</div>
              <div className="font-bold">APKPure</div>
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>{t('cta_free')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>{t('cta_no_ads')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>{t('cta_privacy')}</span>
          </div>
        </div>

        {/* Call to Action Text */}
        <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
          <p className="text-white text-lg mb-4">
            🚀 <strong>{t('cta_try_now')}</strong> {t('cta_no_registration')}
          </p>
          <p className="text-blue-200 text-sm">
            {t('cta_android_version')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

