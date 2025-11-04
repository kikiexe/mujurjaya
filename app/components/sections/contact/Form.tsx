// file: app/components/sections/contact/Form.tsx
"use client"; // <-- Tambahkan ini di baris paling atas

import { Phone, MapPin } from 'lucide-react';
import { useState } from 'react'; // <-- Impor useState

export default function Form() {
  // --- State untuk menyimpan data form ---
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // --- Fungsi untuk menangani submit ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah refresh halaman
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
        // Kosongkan form
        setNama('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus('error');
        setStatusMessage(data.error || 'Gagal mengirim pesan.');
      }
    } catch (error) {
      console.error('Error submitting form:', error); // <-- Tambahkan ini
      setStatus('error');
      setStatusMessage('Terjadi kesalahan. Coba lagi nanti.');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* === Kolom Kiri: Form === */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent mb-2">
              Kirim Pesan
            </h2>
            <p className="text-gray-600 mb-8">
              Mengenal lebih dekat dedikasi kami dalam menghadirkan sohun kualitas terbaik dari Indonesia untuk dunia.
            </p>
            
            {/* Ganti <form> dengan ini */}
            <form className="space-y-12" onSubmit={handleSubmit}>
              
              {/* --- Input Nama --- */}
              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={nama} // <-- Hubungkan ke state
                  onChange={(e) => setNama(e.target.value)} // <-- Hubungkan ke state
                  required // <-- Tambahkan validasi
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
              
              {/* --- Input Email --- */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email} // <-- Hubungkan ke state
                  onChange={(e) => setEmail(e.target.value)} // <-- Hubungkan ke state
                  required // <-- Tambahkan validasi
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
              
              {/* --- Input Message --- */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message} // <-- Hubungkan ke state
                  onChange={(e) => setMessage(e.target.value)} // <-- Hubungkan ke state
                  required // <-- Tambahkan validasi
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
              
              {/* Tombol Submit dan Pesan Status */}
              <div className="flex justify-between items-center">
                {/* Pesan Status */}
                <div>
                  {status === 'success' && (
                    <p className="text-green-600">{statusMessage}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600">{statusMessage}</p>
                  )}
                </div>
                
                {/* Tombol Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === 'loading'} // <-- Matikan tombol saat loading
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
          
          {/* === Kolom Kanan: Info === */}
          <div className="md:col-span-2 md:pl-12 md:border-l border-gray-200">
            {/* (Konten "Call Us" dan "Visit Us" tetap sama...) */}
            <div className="mb-12 ">
              <h3 className="text-2xl font-bold text-[#216FA8] mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Adonan dibentuk menjadi mie sohun dan dikeringkan dengan suhu terkontrol untuk mempertahankan kualitas dan nutrisi.
              </p>
              <div className="flex items-center gap-3 text-gray-800">
                <Phone size={18} className="text-[#216FA8] bg-[#A9DBFF] rounded-b-sm" />
                <span className="font-medium">+62 123-456-7890</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#216FA8] mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Adonan dibentuk menjadi mie sohun dan dikeringkan dengan suhu terkontrol untuk mempertahankan kualitas dan nutrisi.
              </p>
              <div className="flex items-start gap-3 text-gray-800">
                <MapPin size={18} className="text-[#216FA8] bg-[#A9DBFF] rounded-b-sm mt-1 flex-shrink-0" />
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