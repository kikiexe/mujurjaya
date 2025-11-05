// app/components/sections/product/Stepper.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Data untuk setiap langkah
const steps = [
  {
    title: 'Seleksi Bahan Baku',
    description: 'Pemilihan bahan baku berkualitas tinggi adalah pondasi kami. Kami hanya menggunakan pati dari sumber terpercaya yang melewati quality control ketat.',
    imageUrl: '/images/step-1-bahan-baku.png',
  },
  {
    title: 'Pencampuran & Pengolahan',
    description: 'Proses pencampuran sohun dengan teknologi modern dan formula rahasia kami untuk menghasilkan adonan dengan tekstur sempurna.',
    imageUrl: '/images/step-2-pengolahan.png',
  },
  {
    title: 'Pembentukan & Pengeringan',
    description: 'Adonan dibentuk menjadi mie sohun dan dikeringkan dengan suhu yang terkontrol, mempertahankan kualitas dan nutrisi.',
    imageUrl: '/images/step-3-pembentukan.png',
  },
  {
    title: 'Pengemasan & Quality Control',
    description: 'Produk dikemas dengan higienis dan melewati quality control akhir sebelum siap diekspor ke seluruh dunia.',
    imageUrl: '/images/step-4-pengemasan.png',
  },
];

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step-index') || '0', 10);
            setActiveStep((prev) => Math.max(prev, index));
          }
        });
      },
      {
        rootMargin: '-20% 0px -30% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
  }, []);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Wadah dengan padding top */}
        <div className="pt-6 md:pt-8 lg:pt-10">
          <div className="relative">
            {/* Container untuk spacing yang benar */}
            <div className="space-y-12 md:space-y-20">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isEven = index % 2 === 0;
                const isLast = index === steps.length - 1;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    data-step-index={index}
                    className="relative"
                  >
                    {/* Garis connecting ke step berikutnya */}
                    {!isLast && (
                      <>
                        {/* Garis untuk mobile */}
                        <div 
                          className="md:hidden absolute left-5 top-10 w-0.5 bg-gray-200 z-0"
                          style={{ height: 'calc(100% + 3rem)' }}
                          aria-hidden="true"
                        ></div>
                        <div 
                          className={`md:hidden absolute left-5 top-10 w-0.5 bg-[#216FA8] z-0 transition-all duration-700 ease-out ${
                            isActive && index < activeStep ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ height: 'calc(100% + 3rem)' }}
                          aria-hidden="true"
                        ></div>
                      </>
                    )}
                    {/* Layout untuk mobile: Garis di kiri dengan konten di kanan */}
                    <div className="md:hidden flex gap-6">
                      {/* Kolom kiri: Nomor dengan garis */}
                      <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500
                            ${isActive ? 'bg-[#216FA8] text-white scale-110 shadow-lg' : 'bg-gray-300 text-gray-500 scale-100'}`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Kolom kanan: Konten */}
                      <div className={`flex-1 space-y-4 relative z-10 ${!isLast ? 'pb-12' : ''}`}>
                        {/* Judul */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 pt-1">
                          {step.title}
                        </h3>

                        {/* Gambar */}
                        <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                          <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center items-center aspect-square border border-gray-100">
                            <Image
                              src={step.imageUrl}
                              alt={step.title}
                              width={200}
                              height={200}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Deskripsi */}
                        <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Layout untuk tablet & desktop: Grid 2 kolom */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                      
                      {/* Garis untuk desktop - hanya jika bukan step terakhir */}
                      {!isLast && (
                        <>
                          <div 
                            className="absolute left-1/2 top-1/2 w-1 bg-gray-200 -translate-x-1/2 z-0"
                            style={{ height: 'calc(100% + 5rem)' }}
                            aria-hidden="true"
                          ></div>
                          <div 
                            className={`absolute left-1/2 top-1/2 w-1 bg-[#216FA8] -translate-x-1/2 z-0 transition-all duration-700 ease-out ${
                              isActive && index < activeStep ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ height: 'calc(100% + 5rem)' }}
                            aria-hidden="true"
                          ></div>
                        </>
                      )}
                      
                      {/* Kolom Gambar */}
                      <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex justify-center items-center aspect-square">
                          <Image
                            src={step.imageUrl}
                            alt={step.title}
                            width={200}
                            height={200}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Kolom Teks */}
                      <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? 'translate-x-8' : '-translate-x-8')} ${isEven ? 'md:pl-8 lg:pl-16' : 'md:pr-8 lg:pr-16 md:text-right'}`}>
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                    </div>
                    
                    {/* Bulatan Nomor untuk tablet & desktop */}
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