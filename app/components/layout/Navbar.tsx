"use client";

import Link from 'next/link';
import { Mail, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk efek sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Bar - Informasi kontak */}
      <div className="bg-[#293241] text-white text-xs sm:text-sm py-2 px-4">
        <div className="container mx-auto flex justify-start items-center gap-4 sm:gap-6">
          <a href="mailto:info@mujurjaya.com" className="flex items-center gap-2 hover:text-gray-300">
            <Mail size={16} />
            <span>info@mujurjaya.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>0812345678912</span>
          </div>
        </div>
      </div>

      {/* Header utama dengan efek sticky */}
      <header className={`sticky top-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${scrolled ? 'py-4 px-6' : 'py-0 px-0'} 
      `}>
        
        {/* Container dengan efek pill saat scroll */}
        <div className={`
          transition-all duration-300 ease-in-out mx-auto
          ${scrolled
            ? 'bg-[#216FA8]/90 backdrop-blur-lg shadow-lg rounded-xl max-w-5xl'
            : 'bg-white rounded-none shadow-none max-w-full'
          }
        `}>
          
          {/* Konten navbar utama */}
          <div className="container mx-auto flex justify-between items-center p-4">
            
            {/* Logo */}
            <div className="text-xl md:text-2xl font-bold">
              <Link href="/" className={`relative group pb-1.5 inline-block ${scrolled ? 'text-white' : 'text-[#216FA8]'}`}>
                MUJUR JAYA
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${scrolled ? 'from-white to-white/0' : 'from-[#216FA8] to-white/0'} 
                                 transition-opacity duration-300 ease-out 
                                 group-hover:opacity-0`}></span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${scrolled ? 'from-white to-white/0' : 'from-[#216FA8] to-white/0'} 
                                 scale-x-0 origin-right transition-transform duration-300 ease-out 
                                 group-hover:scale-x-100`}></span>
              </Link>
            </div>

            {/* Navigasi desktop */}
            <div className="hidden md:flex items-center gap-8 lg:gap-16">
              <nav>
                <ul className="flex space-x-6 lg:space-x-8 text-base">
                  {[
                    { path: '/', key: 'nav.home' },
                    { path: '/about', key: 'nav.about' },
                    { path: '/product', key: 'nav.product' },
                    { path: '/contact', key: 'nav.contact' }
                  ].map(({ path, key }) => (
                    <li key={path}>
                      <Link 
                        href={path} 
                        className={`relative group font-bold pb-1.5 ${
                          isActive(path) 
                            ? (scrolled ? 'text-white' : 'text-[#216FA8]') 
                            : (scrolled ? 'text-white/80 hover:text-white' : 'text-[#828484] hover:text-[#216FA8]')
                        } transition-colors duration-300 ease-out`}
                      >
                        {t(key)}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                          scrolled ? 'from-white to-white/0' : 'from-[#216FA8] to-white/0'
                        } ${
                          isActive(path) ? '' : 'scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100'
                        }`}></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Language switcher desktop */}
              <div className="relative flex items-center gap-2 text-sm font-medium">
                <span
                  className={`absolute top-0 h-full w-12 rounded-md transition-transform duration-300 ease-in-out ${
                    language === 'EN' ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'
                  } ${scrolled ? 'bg-white/30' : 'bg-[#216FA8]/30'}`}
                  aria-hidden="true"
                />
                <button 
                  onClick={() => setLanguage('ID')}
                  className={`relative z-10 w-12 px-3 py-1.5 rounded-md transition-colors duration-300 ${
                    language === 'ID' 
                    ? (scrolled ? 'text-white font-bold' : 'text-[#216FA8] font-bold')
                    : (scrolled ? 'text-white/80 hover:bg-white/20' : 'text-[#828484] hover:bg-gray-200/50')
                  } cursor-pointer`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`relative z-10 w-12 px-3 py-1.5 rounded-md transition-colors duration-300 ${
                    language === 'EN' 
                    ? (scrolled ? 'text-white font-bold' : 'text-[#216FA8] font-bold')
                    : (scrolled ? 'text-white/80 hover:bg-white/20' : 'text-[#828484] hover:bg-gray-200/50')
                  } cursor-pointer`} 
                >
                  EN
                </button>
              </div>
            </div>
            {/* Tombol hamburger mobile */}
            <div className="flex md:hidden items-center gap-3">
              <button 
                onClick={toggleMobileMenu}
                className={`p-2 hover:bg-gray-100 rounded-md transition-colors ${scrolled ? 'text-white hover:bg-white/20' : 'text-[#216FA8] hover:bg-gray-100'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} /> 
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="7" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } ${scrolled ? 'bg-[#216FA8]' : 'bg-white'}`}
          >
            <nav className="container mx-auto pb-4">
              <ul className="flex flex-col space-y-1">
                {[
                  { path: '/', key: 'nav.home' },
                  { path: '/about', key: 'nav.about' },
                  { path: '/product', key: 'nav.product' },
                  { path: '/contact', key: 'nav.contact' }
                ].map(({ path, key }) => (
                  <li key={path} className="px-4">
                    <Link 
                      href={path} 
                      className={`relative group inline-block py-2 pb-[10px] font-bold ${
                        isActive(path) 
                          ? (scrolled ? 'text-white' : 'text-[#216FA8]') 
                          : (scrolled ? 'text-white/80 hover:text-white' : 'text-[#828484] hover:text-[#216FA8]')
                      } transition-colors duration-300 ease-out`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(key)}
                      <span className={`absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r ${
                        scrolled ? 'from-white to-white/0' : 'from-[#216FA8] to-white/0'
                      } ${
                        isActive(path) ? '' : 'scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100'
                      }`}></span>
                    </Link>
                  </li>
                ))}

                {/* Language switcher mobile */}
                <li className="flex justify-center pt-4 mt-4 border-t border-gray-200">
                  <div className="relative flex items-center gap-1 text-xs font-medium">
                    <span
                      className={`absolute top-0 h-full w-10 rounded-md transition-transform duration-300 ease-in-out ${
                        language === 'EN' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'
                      } ${scrolled ? 'bg-white/30' : 'bg-[#216FA8]/30'}`}
                      aria-hidden="true"
                    />
                    <button 
                      onClick={() => setLanguage('ID')}
                      className={`relative z-10 w-10 px-2 py-1 rounded-md transition-colors duration-300 ${
                        language === 'ID' 
                        ? (scrolled ? 'text-white font-bold' : 'text-[#216FA8] font-bold')
                        : (scrolled ? 'text-white/80' : 'text-[#828484]')
                      }`}
                    >
                      ID
                    </button>
                    <button 
                      onClick={() => setLanguage('EN')}
                      className={`relative z-10 w-10 px-2 py-1 rounded-md transition-colors duration-300 ${
                        language === 'EN' 
                        ? (scrolled ? 'text-white font-bold' : 'text-[#216FA8] font-bold')
                        : (scrolled ? 'text-white/80' : 'text-[#828484]')
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div> 
      </header> 
    </>
  );
}