import Image from 'next/image';

export default function Story() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Konten cerita perusahaan */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900 bg-clip-text">
                Cerita Kami: Dari Ladang ke Meja Anda
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-lg">
              Mujur Jaya bermula dari visi sederhana: menghadirkan mie sohun berkualitas tinggi yang menghubungkan tradisi kuliner Indonesia dengan pasar global. Dengan dedikasi terhadap kualitas dan inovasi, kami telah tumbuh menjadi produsen terkemuka yang dipercaya oleh mitra ekspor di seluruh dunia.
            </p>
            <p className="text-gray-600 text-lg max-w-lg">
              Mujur Jaya bermula dari visi sederhana: menghadirkan mie sohun berkualitas tinggi yang menghubungkan tradisi kuliner Indonesia dengan pasar global. Dengan dedikasi terhadap kualitas dan inovasi, kami telah tumbuh menjadi produsen terkemuka yang dipercaya oleh mitra ekspor di seluruh dunia.
            </p>
            <p className="text-gray-600 text-lg max-w-lg">
              Mujur Jaya bermula dari visi sederhana: menghadirkan mie sohun berkualitas tinggi yang menghubungkan tradisi kuliner Indonesia dengan pasar global. Dengan dedikasi terhadap kualitas dan inovasi, kami telah tumbuh menjadi produsen terkemuka yang dipercaya oleh mitra ekspor di seluruh dunia.
            </p>
          </div>
          
          {/* Gambar ilustrasi */}
          <div className="relative">
             <Image
              src="/images/hero-factory.jpg" 
              alt="Proses produksi Mujur Jaya"
              width={550}
              height={400}
              className="rounded-xl bg-[#d9d9d9] shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}