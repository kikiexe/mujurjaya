"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import CountUp from 'react-countup'; // <-- 1. Impor CountUp

export default function Stats() {
    const { t } = useLanguage();

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        
                        <div className="text-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0">
                            {/* 2. Ganti angka statis dengan CountUp */}
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                <CountUp 
                                    end={500} 
                                    duration={2.5} 
                                    enableScrollSpy={true} 
                                    scrollSpyOnce={true} 
                                    suffix="+" 
                                />
                            </p>
                            <p className="text-xs sm:text-sm text-[#216FA8] font-medium">{t('about.stats.tons')}</p>
                        </div>

                        <div className="text-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0">
                             {/* 3. Ganti angka statis dengan CountUp */}
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                <CountUp 
                                    end={20} 
                                    duration={2.5} 
                                    enableScrollSpy={true} 
                                    scrollSpyOnce={true} 
                                    suffix="+" 
                                />
                            </p>
                            <p className="text-xs sm:text-sm text-[#216FA8] font-medium">{t('about.stats.cities')}</p>
                        </div>

                        {/* Statistik pengalaman */}
                        <div className="text-center">
                             {/* 4. Ganti angka statis dengan CountUp */}
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                <CountUp 
                                    end={25} 
                                    duration={2.5} 
                                    enableScrollSpy={true} 
                                    scrollSpyOnce={true} 
                                    suffix="+" 
                                />
                            </p>
                            <p className="text-xs sm:text-sm text-[#216FA8] font-medium">{t('about.stats.experience')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}