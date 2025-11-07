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
    <section className="p-8 bg-blue-100">
      <div className="container mx-auto px-4">
        
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-xl font-regular text-[#216FA8] mb-4">
            {t('about.cert.subtitle')}
          </h2>
          <p className="text-[#000000] text-2xl font-bold max-w-2xl mx-auto">
            {t('about.cert.title')}
          </p>
        </div>

        {/* Grid sertifikasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className=" p-6 flex flex-col items-center">
              {/* Container gambar dengan fixed height dan proper alignment */}
              <div className="w-32 h-32 md:w-40 md:h-40 relative mb-6 flex items-center justify-center">
                <Image 
                  src={cert.image}
                  alt={cert.alt}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {t(cert.key)}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}