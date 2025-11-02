  import { Mail, Phone, Instagram } from 'lucide-react';
  import { ptSerif } from '@/fonts';

  export default function Footer() {
    return (
      <>
        <footer className="bg-[#293241] text-white">
          <div className="container mx-auto px-4 py-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              
              <div>
                <h3 className="text-lg font-regular mb-4">MUJUR JAYA</h3>
                <p className="text-white-400 leading-relaxed">
                  Produsen mie sohun premium terpercaya yang berkomitmen menghadirkan produk terbaik 
                  untuk kebutuhan ekspor Anda di seluruh Indonesia.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-white" />
                    <a href="mailto:info@mujurjaya.com" className="text-gray-300 hover:text-white transition-colors">
                      info@mujurjaya.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-white" />
                    <span className="text-gray-300">0812345678912</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Instagram size={18} className="text-white" />
                    <a href="https://instagram.com/mujurjaya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      @mujurjaya
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-regular mb-4">Lokasi Kami</h3>
                {/* Placeholder for Google Maps */}
                <div className="bg-gray-500 h-32 w-full rounded-md">
                  <p className="flex items-center justify-center h-full text-white-300">
                    Map Placeholder
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-[#293241] py-3">
          <div className="container mx-auto px-5 text-center text-xs text-gray-400">
            <div className="border-t border-gray-700 pt-3 w-full max-w-md mx-auto">
              <p>
                <span className={`${ptSerif.className} font-bold block`}>
                  © 2025 PT Mujur Jaya
                </span>
                <span className="block mt-1">
                  Premium Glass Noodle Manufacturer & Exporter. All Rights Reserved
                </span>
              </p>
            </div>
          </div>
        </div>
        </footer>
      </>
    );
  }