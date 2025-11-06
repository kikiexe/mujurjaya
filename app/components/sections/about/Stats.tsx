'use client';

import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Starts when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Statistik petani */}
            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">
                {isVisible ? (
                  <CountUp start={0} end={1900} duration={2.5} suffix="+" />
                ) : (
                  "0+"
                )}
              </p>
              <p className="text-sm text-[#216FA8]">Farmers Spread</p>
            </div>

            {/* Statistik negara ekspor */}
            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">
                {isVisible ? (
                  <CountUp start={0} end={50} duration={2} suffix="+" />
                ) : (
                  "0+"
                )}
              </p>
              <p className="text-sm text-[#216FA8]">Export Countries</p>
            </div>

            {/* Statistik pengalaman */}
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">
                {isVisible ? (
                  <CountUp start={0} end={25} duration={2} suffix="+" />
                ) : (
                  "0+"
                )}
              </p>
              <p className="text-sm text-[#216FA8]">Years Experience</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}