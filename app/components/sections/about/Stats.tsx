"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
    const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-sm text-[#216FA8]">{t('about.stats.tons')}</p>
            </div>

            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">20+</p>
              <p className="text-sm text-[#216FA8]">{t('about.stats.cities')}</p>
            </div>

            {/* Statistik pengalaman */}
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">25+</p>
              <p className="text-sm text-[#216FA8]">{t('about.stats.experience')}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}