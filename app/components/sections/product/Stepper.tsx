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
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* PERUBAHAN 1: Wadah pt-10 dipisahkan dari wadah 'relative' */}
        <div className="pt-10">
          <div className="relative">
            {/* PERUBAHAN 2: Garis sekarang menggunakan style inline untuk posisi dan tinggi yang presisi */}
            <div
              className="absolute left-1/2 w-1 bg-gray-200 -translate-x-1/2"
              style={{
                // Lingkaran adalah h-12 (3rem), jadi garis dimulai 1.5rem dari atas (tengah lingkaran pertama)
                top: '13.1rem',
                // Tingginya adalah 100% dikurangi 3rem (tinggi total satu lingkaran) agar berakhir di tengah lingkaran terakhir
                height: 'calc(100% - 26.2rem)',
              }}
              aria-hidden="true"
            ></div>

            <div
              className="absolute left-1/2 w-1 bg-[#216FA8] -translate-x-1/2 transition-all duration-700 ease-out"
              style={{
                top: '13.1rem',
                height: activeStep === 0 ? '0%' : `calc((100% - 26.2rem) * ${activeStep / (steps.length - 1)})`,
              }}
              aria-hidden="true"
            ></div>

            <div className="space-y-20">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    data-step-index={index}
                    className="relative"
                  >
                    {/* Grid untuk layout gambar dan teks */}
                    <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                      
                      {/* Kolom Gambar dengan Efek Scroll */}
                      <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex justify-center items-center aspect-square">
                          <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                            Gambar
                          </div>
                          <Image
                            src={step.imageUrl}
                            alt={step.title}
                            width={200}
                            height={200}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Kolom Teks dengan Efek Scroll */}
                      <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <div className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isEven ? 'translate-x-8' : '-translate-x-8')} ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>

                    </div>
                    
                    {/* Bulatan Nomor (dipindahkan ke tengah) dengan Efek Scroll */}
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 z-10
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