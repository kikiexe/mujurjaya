"use client";

import { Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Form() {
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
        setStatusMessage('Pesan berhasil terkirim! Terima kasih.');
        // Reset form
        setNama('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus('error');
        setStatusMessage(data.error || 'Gagal mengirim pesan.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setStatusMessage('Terjadi kesalahan. Coba lagi nanti.');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Form kontak */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent mb-2">
              Kirim Pesan
            </h2>
            <p className="text-gray-600 mb-8">
              Hubungi kami untuk informasi lebih lanjut tentang produk dan kemitraan.
            </p>
            
            <form className="space-y-12" onSubmit={handleSubmit}>
              
              {/* Input nama */}
              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="peer relative z-10 block w-full p-2 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder=" " 
                />
                <label 
                  htmlFor="nama" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8]"
                >
                  Nama
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
                  className="peer relative z-10 block w-full p-2 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8]"
                >
                  Email
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
                  className="peer relative z-10 block w-full p-2 bg-transparent border-0
                             appearance-none focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder=" "
                />
                <label 
                  htmlFor="message" 
                  className="absolute z-0 text-gray-500 duration-300 transform 
                             -translate-y-6 scale-75 top-3 origin-[0] 
                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                             peer-focus:scale-75 peer-focus:-translate-y-6
                             peer-focus:text-[#216FA8]"
                >
                  Message
                </label>
                <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-gray-300 z-0"></span>
                <span 
                  className="absolute bottom-0 left-0 block w-full h-0.5 bg-[#216FA8] z-5 
                             transform scale-x-0 transition-transform duration-300 ease-in-out
                             peer-focus:scale-x-100"
                ></span>
              </div>
              
              {/* Status dan tombol submit */}
              <div className="flex justify-between items-center">
                {/* Pesan status */}
                <div>
                  {status === 'success' && (
                    <p className="text-green-600">{statusMessage}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600">{statusMessage}</p>
                  )}
                </div>
                
                {/* Tombol submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#216FA8] text-white font-semibold px-8 py-3 rounded-lg 
                               hover:bg-[#1C5C8C] transition-all duration-300 
                               shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                               disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Mengirim...' : 'Submit'}
                  </button>
                </div>
              </div>

            </form>
          </div>
          
          {/* Informasi kontak */}
          <div className="md:col-span-2 md:pl-12 md:border-l border-gray-200">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#216FA8] mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Hubungi kami untuk konsultasi produk dan informasi kemitraan.
              </p>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone size={30} className="text-[#216FA8] bg-[#A9DBFF] rounded-full p-2 flex-shrink-0" />
                <span className="font-medium">+62 123-456-7890</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#216FA8] mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Kunjungi kantor dan pabrik kami untuk melihat proses produksi langsung.
              </p>
              <div className="flex items-center gap-3 text-gray-800">
                <MapPin size={30} className="text-[#216FA8] bg-[#A9DBFF] rounded-full p-2 flex-shrink-0" />
                <span className="font-medium">
                  Jl. Selayar, Jawa Tengah, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}