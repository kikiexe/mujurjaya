"use client";

import Link from 'next/link';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [activeLang, setActiveLang] = useState('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar - Tetap ditampilkan di semua device */}
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

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-[#216FA8]">
            <Link href="/" className="relative group pb-1.5 inline-block">
              MUJUR JAYA

              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 
                               transition-opacity duration-300 ease-out 
                               group-hover:opacity-0"></span>
              
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 
                               scale-x-0 origin-right transition-transform duration-300 ease-out 
                               group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            <nav>
              <ul className="flex space-x-6 lg:space-x-8 text-base">
                <li>
                  <div className="inline-block">
                    <Link href="/" className="font-bold text-[#216FA8]">
                      Home
                    </Link>
                    <div className="h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0"></div>
                  </div>
                </li>
                
                <li>
                  <a href="/about" className="relative group font-bold pb-1.5 text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out">
                    About
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a href="/product" className="relative group font-bold pb-1.5 text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out">
                    Product
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="relative group font-bold pb-1.5 text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out">
                    Contact
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Language Switcher */}
            <div className="relative flex items-center gap-2 text-sm font-medium">
              <span
                className={`absolute top-0 h-full w-12 rounded-md bg-[#216FA8]/30 transition-transform duration-300 ease-in-out ${
                  activeLang === 'EN' ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'
                }`}
                aria-hidden="true"
              />

              <button 
                onClick={() => setActiveLang('ID')}
                className={`relative z-10 w-12 px-3 py-1.5 rounded-md transition-colors duration-300 ${
                  activeLang === 'ID' 
                  ? 'text-[#216FA8] font-bold' 
                  : 'text-[#828484] hover:bg-gray-200/50'
                }`}
              >
                ID
              </button>
              
              <button 
                onClick={() => setActiveLang('EN')}
                className={`relative z-10 w-12 px-3 py-1.5 rounded-md transition-colors duration-300 ${
                  activeLang === 'EN' 
                  ? 'text-[#216FA8] font-bold' 
                  : 'text-[#828484] hover:bg-gray-200/50'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="relative flex items-center gap-1 text-xs font-medium">
              <span
                className={`absolute top-0 h-full w-10 rounded-md bg-[#216FA8]/30 transition-transform duration-300 ease-in-out ${
                  activeLang === 'EN' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'
                }`}
                aria-hidden="true"
              />

              <button 
                onClick={() => setActiveLang('ID')}
                className={`relative z-10 w-10 px-2 py-1 rounded-md transition-colors duration-300 ${
                  activeLang === 'ID' 
                  ? 'text-[#216FA8] font-bold' 
                  : 'text-[#828484]'
                }`}
              >
                ID
              </button>
              
              <button 
                onClick={() => setActiveLang('EN')}
                className={`relative z-10 w-10 px-2 py-1 rounded-md transition-colors duration-300 ${
                  activeLang === 'EN' 
                  ? 'text-[#216FA8] font-bold' 
                  : 'text-[#828484]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMobileMenu}
              className="text-[#216FA8] p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 pb-4">
            <ul className="flex flex-col space-y-1">
              <li>
                <div className="inline-block w-full">
                  <Link 
                    href="/" 
                    className="block py-2 px-4 font-bold text-[#216FA8]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0"></div>
                </div>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="relative group inline-block w-full py-2 px-4 font-bold text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/product" 
                  className="relative group inline-block w-full py-2 px-4 font-bold text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="relative group inline-block w-full py-2 px-4 font-bold text-[#828484] hover:text-[#216FA8] transition-colors duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#216FA8] to-white/0 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}