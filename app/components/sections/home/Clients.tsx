"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Clients() {
  const { t } = useLanguage();
  const clients = Array(4).fill(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t('home.clients.title')}
          </h2>
        </div>
        
        {/* Grid logo klien */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {clients.map((_, index) => (
            <div 
              key={index}
              className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 aspect-square"
            >
              <div className="text-center text-gray-400">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">🏢</div>
                <p className="text-xs sm:text-sm font-medium">Client Logo</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}