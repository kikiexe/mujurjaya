"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc')
    },
    {
      title: t('home.features.ingredients.title'),
      description: t('home.features.ingredients.desc')
    },
    {
      title: t('home.features.export.title'),
      description: t('home.features.export.desc')
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-xl font-regular text-[#216FA8] mb-3 sm:mb-4">
            {t('home.features.subtitle')}
          </h2>
          <p className="text-[#000000] text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mx-auto">
            {t('home.features.title')}
          </p>
        </div>
        
        {/* Grid fitur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#d9d9d9]/23 p-6 sm:p-8 rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#216FA8] mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-[#000000] leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}