'use client';

import { Mail, Phone, Instagram } from 'lucide-react';
import { ptSerif } from '@/fonts';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#293241] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-regular mb-4">MUJUR JAYA</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.company.desc')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-regular mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <a 
                  href="mailto:info@mujurjaya.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@mujurjaya.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span className="text-gray-300">0812345678912</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-white" />
                <a 
                  href="https://instagram.com/mujurjaya_kroya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @mujurjaya_kroya
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-regular mb-4">{t('footer.location.title')}</h3>
            {/* Google Maps Mini Embed - Lebar penuh, tinggi dikurangi */}
            <div className="w-full h-60 overflow-hidden">
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
      <div className="bg-[#293241] py-3">
        <div className="container mx-auto px-5 text-center text-xs text-gray-400">
          <div className="border-t border-gray-700 pt-3 w-full max-w-md mx-auto">
            <p>
              <span className={`${ptSerif.className} font-bold block`}>
                © 2025 PD. Mujur Jaya Gelang Indah
              </span>
              <span className="block mt-1">
                {t('footer.tagline')}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}