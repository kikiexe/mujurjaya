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
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
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
        const startTrigger = windowHeight * 0.3; // Mulai animasi ketika 30% dari atas
        const endTrigger = windowHeight * 0.7;   // Selesai ketika 70% dari atas
        
        if (rect.top <= startTrigger) {
          progress = 100;
        } else if (rect.top <= endTrigger) {
          // Linear progress dari 0-100%
          const progressRange = endTrigger - startTrigger;
          const currentProgress = endTrigger - rect.top;
          progress = Math.max(0, Math.min(100, (currentProgress / progressRange) * 100));
        }
      }
      
      setLineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="pt-6 md:pt-8 lg:pt-10">
          <div className="relative">
            <div className="space-y-12 md:space-y-20">
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
                    {/* Garis penghubung antar step - MOBILE */}
                    {!isLast && (
                      <>
                        {/* Garis background abu-abu */}
                        <div 
                          className="md:hidden absolute left-5 top-10 w-1 bg-gray-200 z-0"
                          style={{ height: 'calc(100% + 3rem)' }}
                          aria-hidden="true"
                        ></div>
                        
                        {/* Garis biru dengan animasi progress */}
                        <div 
                          className={`md:hidden absolute left-5 top-10 w-1 bg-[#216FA8] z-0 transition-all duration-300 ${
                            isLineCompleted ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            height: isLineCompleted 
                              ? 'calc(100% + 3rem)' 
                              : (isCurrentLine ? `calc(${lineProgress}% + 3rem)` : '0%')
                          }}
                          aria-hidden="true"
                        ></div>
                      </>
                    )}

                    {/* Layout mobile */}
                    <div className="md:hidden flex gap-6">
                      {/* Nomor step */}
                      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500
                            ${isActive ? 'bg-[#216FA8] text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500 scale-100'}`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Konten step */}
                      <div className={`flex-1 space-y-4 relative z-10 ${!isLast ? 'pb-12' : ''}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 pt-1">
                          {t(step.titleKey)}
                        </h3>

                        {/* Gambar dengan animasi - TETAP SAMA SEPERTI SEBELUMNYA */}
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                          }`}
                          style={{
                            transitionDelay: isActive ? `${index * 150}ms` : '0ms'
                          }}
                        >
                          <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center aspect-square border border-gray-100">
                            <Image
                              src={step.imageUrl}
                              alt={t(step.titleKey)}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full rounded-lg"
                              priority={index === 0}
                            />
                          </div>
                        </div>

                        {/* Deskripsi dengan animasi */}
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
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

                    {/* Layout desktop */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                      
                      {/* Garis untuk desktop */}
                      {!isLast && (
                        <>
                          <div 
                            className="absolute left-1/2 top-1/2 w-1 bg-gray-200 -translate-x-1/2 z-0"
                            style={{ height: 'calc(100% + 5rem)' }}
                            aria-hidden="true"
                          ></div>
                          <div 
                            className={`absolute left-1/2 top-1/2 w-1 bg-[#216FA8] -translate-x-1/2 z-0 transition-all duration-700 ease-out ${
                              isLineCompleted ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              height: isLineCompleted 
                                ? 'calc(100% + 5rem)' 
                                : (isCurrentLine ? `calc(${lineProgress}% + 5rem)` : '0%')
                            }}
                            aria-hidden="true"
                          ></div>
                        </>
                      )}
                      
                      {/* Gambar step - TETAP SAMA SEPERTI SEBELUMNYA */}
                      <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex justify-center items-center aspect-square">
                          <Image
                            src={step.imageUrl}
                            alt={t(step.titleKey)}
                            width={200}
                            height={200}
                            className="object-cover w-full h-full rounded-lg"
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Teks step */}
                      <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <div 
                          className={`transition-all duration-700 ease-out ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? 'translate-x-8' : '-translate-x-8')
                          } ${isEven ? 'md:pl-8 lg:pl-16' : 'md:pr-8 lg:pr-16 md:text-right'}`}
                          style={{
                            transitionDelay: isActive ? `${index * 200}ms` : '0ms'
                          }}
                        >
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3">
                            {t(step.titleKey)}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                            {t(step.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Nomor step untuk desktop */}
                    <div
                      className={`hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center font-bold text-lg lg:text-xl transition-all duration-500 z-10
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