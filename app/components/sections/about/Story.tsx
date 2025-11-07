"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Konten cerita perusahaan */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900 bg-clip-text">
                {t('about.story.title')}
              </span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('about.story.description')}
            </p>
          </div>
          
          {/* Gambar ilustrasi */}
          <div className="relative order-1 lg:order-2">
             <Image
              src="https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/wallpaperflare.com_wallpaper%20(1).jpg" 
              alt="Proses produksi Mujur Jaya"
              width={550}
              height={400}
              className="rounded-lg sm:rounded-xl bg-[#d9d9d9] shadow-xl sm:shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}