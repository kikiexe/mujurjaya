"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#1C5C8C] via-[#216FA8] to-[#2A8BCB] relative overflow-hidden">
      {/* Background efek dekoratif */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Konten teks */}
          <div className="text-white space-y-5 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {t('home.cta.description')}
            </p>
          </div>

          {/* Tombol CTA */}
          <div className="flex items-center justify-center md:justify-end">
            <Link
              href="/contact"
              className="group bg-white text-[#216FA8] px-8 py-4 rounded-xl font-semibold 
                        shadow-lg hover:shadow-2xl transition-all duration-300 
                        flex items-center gap-2 hover:scale-105"
            >
              {t('home.cta.button')}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}