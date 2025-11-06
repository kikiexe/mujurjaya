"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Certification() {
  const { t } = useLanguage();

  const certifications = [
    {
      key: 'about.cert.iso',
      image: '/images/cert1.jpg',
      alt: 'Sertifikasi ISO'
    },
    {
      key: 'about.cert.halal',
      image: '/images/cert2.jpg',
      alt: 'Sertifikasi Halal'
    },
    {
      key: 'about.cert.haccp',
      image: '/images/cert3.jpg',
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <Image 
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">
                {t(cert.key)}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}