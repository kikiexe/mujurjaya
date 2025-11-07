"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#A9DBFF]/30 to-[#FFFFFF] pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent mb-3 sm:mb-4">
            {t('contact.hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('contact.hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}