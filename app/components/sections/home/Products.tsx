// app/components/sections/home/Products.tsx
import Image from 'next/image';

const CheckmarkIcon = () => (
  <svg 
    className="w-6 h-6 text-[#216FA8] mr-3 flex-shrink-0" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Products() {
  const features = [
    'Kontrol kualitas yang ketat di setiap tahap produksi',
    'Kapasitas produksi besar untuk memenuhi permintaan ekspor',
    'Sertifikasi internasional (Halal, ISO, HACCP)'
  ];

  return (
    // Mengubah background menjadi biru muda yang lebih solid sesuai gambar
    <section className="py-16 md:py-24 bg-[#EBF5FF]">
      <div className="container mx-auto px-4">
        
        {/* Layout utama: grid 2 kolom di layar medium ke atas */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Kolom Kiri: Gambar */}
          <div className="w-full ">
            <Image
              // Ganti dengan path gambar pabrik Anda
              src="/images/factory-drying.jpg" 
              alt="Proses penjemuran mie sohun di pabrik"
              width={600}
              height={400}
              className="rounded-2xl bg-[#d9d9d9] shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Kolom Kanan: Teks Deskripsi */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#216FA8] mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Kami menawarkan berbagai varian mie sohun untuk memenuhi kebutuhan spesifik pasar Anda, termasuk kustomisasi ukuran dan kemasan
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <CheckmarkIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}