"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

// Ikon panah untuk tombol utama
const ArrowRightIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Ikon kotak untuk tombol produk
const BoxIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7m8 4v10" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#A9DBFF]/30 to-[#FFFFFF] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Konten teks */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent">
                {t('home.hero.title1')}
              </span>
              <br />
              <span className="text-gray-900">{t('home.hero.title2')}</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              {t('home.hero.description')}
            </p>
          </div>
          
          {/* Gambar hero */}
          <div className="relative order-1 lg:order-2">
             <Image
              src="https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/home.jpg" 
              alt="Area penjemuran mie sohun di pabrik"
              width={550}
              height={400}
              className="rounded-lg sm:rounded-xl bg-[#d9d9d9] shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Tombol aksi */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-12 sm:mt-16">
          {/* Tombol utama */}
          <Link href="/contact" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-[#1C5C8C] via-[#216FA8] to-[#2A8BCB] text-white px-6 sm:px-8 py-3 rounded-full font-semibold 
                       transition-all duration-300 shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
            >
              {t('home.hero.btn.contact')}
              <ArrowRightIcon />
            </button>
          </Link>
          
          {/* Tombol sekunder */}
          <Link href="/product" className="w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full font-semibold 
                       transition-all duration-300 shadow-md hover:shadow-lg 
                       transform hover:-translate-y-1 hover:scale-105 hover:border-[#216FA8] hover:text-[#216FA8] text-sm sm:text-base"
            >
              <BoxIcon />
              {t('home.hero.btn.products')}
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}