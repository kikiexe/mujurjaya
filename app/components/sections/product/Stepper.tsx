"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Stepper() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Data langkah-langkah produksi dengan translation keys
  const steps = [
    {
      titleKey: 'product.step1.title',
      descriptionKey: 'product.step1.desc',
      imageUrl: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/wallpaperflare.com_wallpaper%20(1).jpg',
    },
    {
      titleKey: 'product.step2.title',
      descriptionKey: 'product.step2.desc',
      imageUrl: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/wallpaperflare.com_wallpaper%20(1).jpg',
    },
    {
      titleKey: 'product.step3.title',
      descriptionKey: 'product.step3.desc',
      imageUrl: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/wallpaperflare.com_wallpaper%20(1).jpg',
    },
    {
      titleKey: 'product.step4.title',
      descriptionKey: 'product.step4.desc',
      imageUrl: 'https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/wallpaperflare.com_wallpaper%20(1).jpg',
    },
  ];

  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step-index') || '0', 10);
            setActiveStep((prev) => Math.max(prev, index));
            
            // Hitung progress berdasarkan visibility
            if (index === activeStep) {
              const rect = entry.boundingClientRect;
              const windowHeight = window.innerHeight;
              const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
              const progress = Math.max(0, Math.min(100, (visibleHeight / rect.height) * 100));
              setLineProgress(progress);
            }
          }
        });
      },
      {
        rootMargin: '-10% 0px -15% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 1, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    const currentRefs = stepRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeStep]);

  // Scroll listener untuk smooth line progress
  useEffect(() => {
    const handleScroll = () => {
      const currentStepRef = stepRefs.current[activeStep];
      if (!currentStepRef) return;

      const rect = currentStepRef.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung progress berdasarkan posisi scroll
      let progress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const startTrigger = windowHeight * 0.3;
        const endTrigger = windowHeight * 0.7;
        
        if (rect.top <= startTrigger) {
          progress = 100;
        } else if (rect.top <= endTrigger) {
          const progressRange = endTrigger - startTrigger;
          const currentProgress = endTrigger - rect.top;
          progress = Math.max(0, Math.min(100, (currentProgress / progressRange) * 100));
        }
      }
      
      setLineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10">
          <div className="relative">
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isEven = index % 2 === 0;
                const isLast = index === steps.length - 1;
                const isLineCompleted = index < activeStep;
                const isCurrentLine = index === activeStep;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    data-step-index={index}
                    className="relative"
                  >
                    {/* Layout untuk Mobile & Tablet */}
                    <div className="lg:hidden flex gap-4 sm:gap-6">
                      {/* Nomor step dan garis vertikal */}
                      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-500
                            ${isActive ? 'bg-[#216FA8] text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500 scale-100'}`}
                        >
                          {index + 1}
                        </div>
                        
                        {/* Garis penghubung untuk mobile */}
                        {!isLast && (
                          <>
                            <div 
                              className="absolute top-8 sm:top-10 w-1 bg-gray-200 z-0"
                              style={{ height: 'calc(100% + 2rem)' }}
                              aria-hidden="true"
                            ></div>
                            <div 
                              className={`absolute top-8 sm:top-10 w-1 bg-[#216FA8] z-0 transition-all duration-300 ${
                                isLineCompleted ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{ 
                                height: isLineCompleted 
                                  ? 'calc(100% + 2rem)' 
                                  : (isCurrentLine ? `calc(${lineProgress}% + 2rem)` : '0%')
                              }}
                              aria-hidden="true"
                            ></div>
                          </>
                        )}
                      </div>

                      {/* Konten step */}
                      <div className={`flex-1 space-y-3 sm:space-y-4 relative z-10 ${!isLast ? 'pb-8 sm:pb-12' : ''}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 pt-1">
                          {t(step.titleKey)}
                        </h3>

                        {/* Gambar dengan animasi */}
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                          style={{
                            transitionDelay: isActive ? `${index * 150}ms` : '0ms'
                          }}
                        >
                            {/* Modifikasi di sini: tambahkan `relative` dan `overflow-hidden` pada parent div */}
                            {/* Hapus width/height dari Image, tambahkan fill dan object-cover */}
                          <div className="relative bg-white rounded-lg shadow-lg p-3 sm:p-4 flex justify-center items-center aspect-square border border-gray-100 overflow-hidden">
                            <Image
                              src={step.imageUrl}
                              alt={t(step.titleKey)}
                              fill={true} // Mengisi penuh parent
                              className="object-cover rounded-lg" // Memastikan gambar proporsional
                              priority={index === 0}
                            />
                          </div>
                        </div>

                        {/* Deskripsi dengan animasi */}
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                          }`}
                          style={{
                            transitionDelay: isActive ? `${index * 150 + 300}ms` : '0ms'
                          }}
                        >
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {t(step.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Layout untuk Desktop */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-center">
                      
                      {/* Garis untuk desktop */}
                      {!isLast && (
                        <>
                          <div 
                            className="absolute left-1/2 top-1/2 w-1 bg-gray-200 -translate-x-1/2 z-0"
                            style={{ height: 'calc(100% + 4rem)' }}
                            aria-hidden="true"
                          ></div>
                          <div 
                            className={`absolute left-1/2 top-1/2 w-1 bg-[#216FA8] -translate-x-1/2 z-0 transition-all duration-700 ease-out ${
                              isLineCompleted ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              height: isLineCompleted 
                                ? 'calc(100% + 4rem)' 
                                : (isCurrentLine ? `calc(${lineProgress}% + 4rem)` : '0%')
                            }}
                            aria-hidden="true"
                          ></div>
                        </>
                      )}
                      
                      {/* Gambar step */}
                      <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                            {/* Modifikasi di sini: tambahkan `relative` dan `overflow-hidden` pada parent div */}
                            {/* Hapus width/height dari Image, tambahkan fill dan object-cover */}
                        <div className="relative bg-gray-100 rounded-xl shadow-lg p-4 xl:p-6 flex justify-center items-center aspect-square overflow-hidden">
                          <Image
                            src={step.imageUrl}
                            alt={t(step.titleKey)}
                            fill={true} // Mengisi penuh parent
                            className="object-cover rounded-lg" // Memastikan gambar proporsional
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Teks step */}
                      <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? 'translate-x-8' : '-translate-x-8')
                          } ${isEven ? 'lg:pl-8 xl:pl-12' : 'lg:pr-8 xl:pr-12 lg:text-right'}`}
                          style={{
                            transitionDelay: isActive ? `${index * 200}ms` : '0ms'
                          }}
                        >
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3 lg:mb-4">
                            {t(step.titleKey)}
                          </h3>
                          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                            {t(step.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Nomor step untuk desktop */}
                    <div
                      className={`hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 xl:w-12 xl:h-12 rounded-full items-center justify-center font-bold text-lg xl:text-xl transition-all duration-500 z-10
                        ${isActive ? 'bg-[#216FA8] text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500 scale-100'}`}
                    >
                      {index + 1}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}