import React, { useEffect, useRef, useState } from 'react';
import { Shield, Database, Eye, Lock, Wifi, Bluetooth, Bell, MapPin, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Security = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const securityFeatures = [
    {
      icon: Database,
      title: t('security_card_1_title'),
      description: t('security_card_1_desc'),
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Eye,
      title: t('security_card_2_title'),
      description: t('security_card_2_desc'),
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Lock,
      title: t('security_card_3_title'),
      description: t('security_card_3_desc'),
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const permissions = [
    {
      icon: MapPin,
      title: t('permissions_card_1_title'),
      description: t('permissions_card_1_desc'),
      required: true
    },
    {
      icon: Bluetooth,
      title: t('permissions_card_2_title'),
      description: t('permissions_card_2_desc'),
      required: true
    },
    {
      icon: Wifi,
      title: t('permissions_card_3_title'),
      description: t('permissions_card_3_desc'),
      required: true
    },
    {
      icon: Bell,
      title: t('permissions_card_4_title'),
      description: t('permissions_card_4_desc'),
      required: false
    },
    {
      icon: Mic,
      title: t('permissions_card_5_title'),
      description: t('permissions_card_5_desc'),
      required: false
    }
  ];

  return (
    <section id="securite" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('security_title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('security_subtitle')}
          </p>
        </div>

        {/* Security Features */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Privacy Policy Summary */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('security_summary_title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">{t('security_summary_1')}</strong>
                    <p className="text-gray-600 text-sm">{t('security_summary_1_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">{t('security_summary_2')}</strong>
                    <p className="text-gray-600 text-sm">{t('security_summary_2_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">{t('security_summary_3')}</strong>
                    <p className="text-gray-600 text-sm">{t('security_summary_3_desc')}</p>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <Shield className="h-16 w-16 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">{t('security_private_title')}</h4>
                  <p className="text-green-100 mb-6">
                    {t('security_private_desc')}
                  </p>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-sm text-green-100">{t('security_private_data')}</div>
                    <div className="text-2xl font-bold">100%</div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Required */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('permissions_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {permissions.map((permission, index) => {
              const Icon = permission.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{permission.title}</h4>
                      {permission.required ? (
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                          Requis
                        </span>
                      ) : (
                        <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                          Optionnel
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {permission.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              <strong>{t('permissions_note')}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;