import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Screenshots = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const screenshots = [
    {
      title: t('screenshot_1_title'),
      description: t('screenshot_1_desc'),
      image: "/assets/images/flutter_02.webp"
    },
    {
      title: t('screenshot_2_title'),
      description: t('screenshot_2_desc'),
      image: "/assets/images/flutter_03.webp"
    },
    {
      title: t('screenshot_3_title'),
      description: t('screenshot_3_desc'),
      image: "/assets/images/flutter_04.webp"
    },
    {
      title: t('screenshot_4_title'),
      description: t('screenshot_4_desc'),
      image: "/assets/images/flutter_05.webp"
    },
    {
      title: t('screenshot_5_title'),
      description: t('screenshot_5_desc'),
      image: "/assets/images/flutter_07.webp"
    },
    {
      title: t('screenshot_6_title'),
      description: t('screenshot_6_desc'),
      image: "/assets/images/flutter_09.webp"
    },
    {
      title: t('screenshot_7_title'),
      description: t('screenshot_7_desc'),
      image: "/assets/images/flutter_10.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="captures" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('screenshots_title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('screenshots_subtitle')}
          </p>
        </div>

        <div className={`relative transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 order-2 md:order-1"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              {/* Phone mockup with screenshot */}
              <div className="relative w-full max-w-xs md:max-w-sm order-1 md:order-2">
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-gray-800 rounded-[2.5rem] p-1">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-gray-900 h-8 flex items-center justify-center">
                        <div className="bg-white rounded-full w-20 h-1"></div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[9/19.5] overflow-hidden">
                        <img
                          src={screenshots[currentSlide].image}
                          alt={screenshots[currentSlide].title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        
                        {/* Overlay to simulate app interface */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Mock UI elements */}
                        <div className="absolute top-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <Smartphone className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 text-sm">NoNetChat</div>
                                <div className="text-xs text-green-600">En ligne • Via Bluetooth</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 order-3 md:order-3"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Slide information */}
            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-4 ring-blue-500 shadow-xl' 
                    : 'hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className="aspect-[9/16] bg-gray-100">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-xs font-medium text-gray-900 truncate">
                      {screenshot.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;