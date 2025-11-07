"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Certification() {
  const { t } = useLanguage();

  const certifications = [
    {
      key: 'about.cert.iso',
      image: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/BADAN_POM.png',
      alt: 'Sertifikasi ISO'
    },
    {
      key: 'about.cert.halal',
      image: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/Halal.svg',
      alt: 'Sertifikasi Halal'
    },
    {
      key: 'about.cert.haccp',
      image: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/BADAN_POM.png',
      alt: 'Sertifikasi HACCP'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-xl font-regular text-[#216FA8] mb-3 sm:mb-4">
            {t('about.cert.subtitle')}
          </h2>
          <p className="text-[#000000] text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mx-auto">
            {t('about.cert.title')}
          </p>
        </div>

        {/* Grid sertifikasi - HORIZONTAL di mobile */}
        <div className="flex flex-row justify-center gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 max-w-4xl mx-auto">
  {certifications.map((cert, index) => (
    <div key={index} className="w-1/3 sm:w-auto p-4 sm:p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              {/* Container gambar dengan fixed height dan proper alignment */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 relative mb-4 sm:mb-6 flex items-center justify-center">
                <Image 
                  src={cert.image}
                  alt={cert.alt}
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800 leading-tight">
                {t(cert.key)}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}