"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "500+",
      label: t('about.stats.farmers')
    },
    {
      value: "20+",
      label: t('about.stats.countries')
    },
    {
      value: "25+",
      label: t('about.stats.experience')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${
                  index < stats.length - 1 
                    ? 'border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0' 
                    : ''
                }`}
              >
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-[#216FA8]">{stat.label}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}