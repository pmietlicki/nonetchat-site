import React from 'react';
import { Smartphone, Share2, Database, Shield, Languages, Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Technology = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      name: t('tech_card_1'),
      description: t('tech_card_1_desc'),
      icon: Smartphone,
    },
    {
      name: t('tech_card_2'),
      description: t('tech_card_2_desc'),
      icon: Share2,
    },
    {
      name: t('tech_card_3'),
      description: t('tech_card_3_desc'),
      icon: Database,
    },
    {
      name: t('tech_card_4'),
      description: t('tech_card_4_desc'),
      icon: Shield,
    },
    {
      name: t('tech_card_5'),
      description: t('tech_card_5_desc'),
      icon: Wind,
    },
    {
      name: t('tech_card_6'),
      description: t('tech_card_6_desc'),
      icon: Languages,
    },
  ];

  return (
    <section id="technologie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('tech_title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="group bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
