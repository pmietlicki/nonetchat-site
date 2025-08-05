import React, { useEffect, useRef, useState } from 'react';
import { 
  MessageCircle, 
  FileText, 
  Mic, 
  Server, 
  Shield, 
  Bluetooth, 
  Filter,
  Users
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: MessageCircle,
      title: t('features_card_1_title'),
      description: t('features_card_1_desc'),
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: t('features_card_2_title'),
      description: t('features_card_2_desc'),
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mic,
      title: t('features_card_3_title'),
      description: t('features_card_3_desc'),
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Server,
      title: t('features_card_4_title'),
      description: t('features_card_4_desc'),
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: t('features_card_5_title'),
      description: t('features_card_5_desc'),
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Bluetooth,
      title: t('features_card_6_title'),
      description: t('features_card_6_desc'),
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Filter,
      title: t('features_card_7_title'),
      description: t('features_card_7_desc'),
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      title: t('features_card_8_title'),
      description: t('features_card_8_desc'),
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleFeatures(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features_title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features_subtitle')}
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`feature-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  visibleFeatures[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                } hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features_why_title')}
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>{t('features_why_1')}</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>{t('features_why_2')}</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>{t('features_why_3')}</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>{t('features_why_4')}</strong></span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <MessageCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;