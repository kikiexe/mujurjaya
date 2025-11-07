'use client';

import { Mail, Phone, Instagram } from 'lucide-react';
import { ptSerif } from '@/fonts';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#293241] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
          
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-8">
              {/* Logo di sebelah kiri - DIPERTAHANKAN */}
              <div className="w-50 h-50 relative flex-shrink-0">
                <Image 
                  src="https://jboanawxorngsnjgmnwt.supabase.co/storage/v1/object/public/aset_mujur_jaya/logomj.png"
                  alt="Logo Mujur Jaya"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Teks di sebelah kanan logo */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">MUJUR JAYA</h3>
                <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
                  {t('footer.company.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 md:ml-24">
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-white flex-shrink-0" />
                <a 
                  href="mailto:pnssohun@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-base"
                >
                  pnssohun@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-white flex-shrink-0" />
                <span className="text-gray-300 text-base">0821-1807-7079</span>
              </li>
              <li className="flex items-center gap-4">
                <Instagram size={20} className="text-white flex-shrink-0" />
                <a 
                  href="https://instagram.com/mujurjaya_kroya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors text-base"
                >
                  @mujurjaya_kroya
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-4">{t('footer.location.title')}</h3>
            {/* Google Maps Mini Embed */}
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.702249433284!2d109.25641030000001!3d-7.6073444000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654160c0eff441%3A0x54feffa40ca5f318!2sPabrik%20Sohun%20Gelang%20Indah!5e0!3m2!1sid!2sid!4v1762326104214!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('footer.location.title')}
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#293241] py-6">
        <div className="container mx-auto px-5 text-center text-xs text-gray-400">
          <div className="border-t border-gray-700 pt-4 w-full max-w-md mx-auto space-y-2">
            <p className={`${ptSerif.className} font-bold text-sm`}>
              © 2025 PD. Mujur Jaya Gelang Indah
            </p>
            <p className="text-gray-400 text-xs">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}