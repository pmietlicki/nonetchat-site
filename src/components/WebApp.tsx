import React from 'react';
import { Globe, Zap, ShieldCheck, MousePointerClick } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WebApp = () => {
  const { t } = useTranslation();

  const webFeatures = [
    {
      icon: Zap,
      title: t('webapp_feature_1_title', 'Accès Instantané'),
      description: t('webapp_feature_1_desc', 'Aucun téléchargement requis. Lancez l\'application et commencez à discuter directement depuis votre navigateur.'),
    },
    {
      icon: Globe,
      title: t('webapp_feature_2_title', 'Multi-plateforme'),
      description: t('webapp_feature_2_desc', 'Fonctionne sur n\'importe quel ordinateur (Windows, macOS, Linux) avec un navigateur web moderne.'),
    },
    {
      icon: ShieldCheck,
      title: t('webapp_feature_3_title', 'Sécurité Préservée'),
      description: t('webapp_feature_3_desc', 'Bénéficiez du même chiffrement de bout-en-bout et de la même confidentialité que l\'application mobile.'),
    },
  ];

  return (
    <section id="webapp" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Contenu texte */}
          <div className="lg:col-span-1">
            <h2 className="text-base font-semibold text-brand-blue uppercase tracking-wider">{t('webapp_section_eyebrow', 'NoNetChat pour le Web')}</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('webapp_title', 'Discutez sans installation, depuis votre navigateur.')}
            </h3>
            <p className="mt-4 text-xl text-gray-600">
              {t('webapp_subtitle', 'L\'expérience NoNetChat, directement accessible. Idéal pour une utilisation sur ordinateur.')}
            </p>
            
            <div className="mt-10">
              <a
                href="https://web.nonetchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                <MousePointerClick size={22} />
                {t('webapp_cta', 'Lancer NoNetChat Web')}
              </a>
            </div>
          </div>

          {/* Iframe dans une maquette de navigateur */}
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[550px] max-w-[700px]">
                <div className="rounded-lg h-full bg-gray-200">
                    <iframe 
                        src="https://web.nonetchat.com" 
                        className="w-full h-full border-0"
                        title="NoNetChat Web App Demo"
                        sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
            </div>
          </div>
        </div>
        
        {/* Section des avantages sous l'iframe */}
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {webFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white mx-auto">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                );
              })}
            </div>
        </div>

      </div>
    </section>
  );
};

export default WebApp;
