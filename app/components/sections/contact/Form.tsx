"use client";

import { Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Form() {
  const { t } = useLanguage();
  
  // State untuk form
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage(t('contact.form.success'));
        // Reset form
        setNama('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus('error');
        setStatusMessage(data.error || t('contact.form.error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setStatusMessage(t('contact.form.error'));
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Form kontak */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent mb-2 sm:mb-3">
              {t('contact.form.title')}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              {t('contact.form.subtitle')}
            </p>
            
            <form className="space-y-8 sm:space-y-10 lg:space-y-12" onSubmit={handleSubmit}>
              
              {/* Input nama */}
              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="peer relative z-10 block w-full p-2 sm:p-3 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent
                             text-sm sm:text-base"
                  placeholder=" " 
                />
                <label 
                  htmlFor="nama" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8] text-sm sm:text-base"
                >
                  {t('contact.form.name')}
                </label>
                <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-gray-300 z-0"></span>
                <span 
                  className="absolute bottom-0 left-0 block w-full h-0.5 bg-[#216FA8] z-5 
                             transform scale-x-0 transition-transform duration-300 ease-in-out
                             peer-focus:scale-x-100"
                ></span>
              </div>
              
              {/* Input email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="peer relative z-10 block w-full p-2 sm:p-3 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent
                             text-sm sm:text-base"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8] text-sm sm:text-base"
                >
                  {t('contact.form.email')}
                </label>
                <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-gray-300 z-0"></span>
                <span 
                  className="absolute bottom-0 left-0 block w-full h-0.5 bg-[#216FA8] z-5 
                             transform scale-x-0 transition-transform duration-300 ease-in-out
                             peer-focus:scale-x-100"
                ></span>
              </div>
              
              {/* Input pesan */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="peer relative z-10 block w-full p-2 sm:p-3 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent
                             text-sm sm:text-base resize-none"
                  placeholder=" "
                />
                <label 
                  htmlFor="message" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8] text-sm sm:text-base"
                >
                  {t('contact.form.message')}
                </label>
                <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-gray-300 z-0"></span>
                <span 
                  className="absolute bottom-0 left-0 block w-full h-0.5 bg-[#216FA8] z-5 
                             transform scale-x-0 transition-transform duration-300 ease-in-out
                             peer-focus:scale-x-100"
                ></span>
              </div>
              
              {/* Status dan tombol submit */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                {/* Pesan status */}
                <div className="flex-1">
                  {status === 'success' && (
                    <p className="text-green-600 text-sm sm:text-base">{statusMessage}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 text-sm sm:text-base">{statusMessage}</p>
                  )}
                </div>
                
                {/* Tombol submit */}
                <div className="flex justify-end w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#216FA8] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg 
                               hover:bg-[#1C5C8C] transition-all duration-300 
                               shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                               disabled:bg-gray-400 disabled:cursor-not-allowed
                               w-full sm:w-auto text-sm sm:text-base"
                  >
                    {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>
                </div>
              </div>

            </form>
          </div>
          
          {/* Informasi kontak */}
          <div className="lg:col-span-2 lg:pl-8 xl:pl-12 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0">
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[#216FA8] mb-3 sm:mb-4">
                {t('contact.call.title')}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">
                {t('contact.call.desc')}
              </p>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone size={30} className="text-[#216FA8] bg-[#A9DBFF] rounded-full p-1.5 sm:p-2 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">0821-1807-7079</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#216FA8] mb-3 sm:mb-4">
                {t('contact.visit.title')}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">
                {t('contact.visit.desc')}
              </p>
              <div className="flex items-start gap-3 text-gray-800">
                <MapPin size={30} className="text-[#216FA8] bg-[#A9DBFF] rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm sm:text-base leading-relaxed">
                  Jl. Raya Mujur-Kroya Rt 09/01 Kec. Kroya, Kab. Cilacap Jawa Tengah Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}