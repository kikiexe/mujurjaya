"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Clients() {
  const { t } = useLanguage();
  
  const clientLogos = [
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/klaten.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/kudus.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/purbalingga.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/semarang.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/surakarta.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/tasikmalaya.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/tegal.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/banjar.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/cilacap.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/karawang.png",
    "https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/rembang.png"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t('home.clients.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {clientLogos.map((logoUrl, index) => (
            
            <div 
              key={logoUrl}
              className="rounded-lg sm:rounded-xl flex items-center justify-center aspect-square"
            >
              <img
                src={logoUrl}
                alt={`Logo Klien ${index + 1}`}
                className="object-contain w-full h-full sm:rounded-xl rounded-lg"
              />
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}