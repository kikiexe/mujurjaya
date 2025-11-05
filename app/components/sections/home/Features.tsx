export default function Features() {
  const features = [
    {
      title: 'Standar Kualitas Internasional',
      description: 'Produk kami diproses menggunakan teknologi modern yang memenuhi standar internasional, menjaga kualitas dan kesegaran.'
    },
    {
      title: 'Bahan Baku Premium',
      description: 'Kami hanya menggunakan bahan baku pilihan terbaik yang dipilih secara teliti untuk menghasilkan produk berkualitas tinggi.'
    },
    {
      title: 'Jaminan Ekspor Luas',
      description: 'Berpengalaman dalam mengirimkan produk ke berbagai negara dengan sistem logistik yang efisien dan terpercaya.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-xl font-regular text-[#216FA8] mb-4">
            Mengapa Harus Memilih Kami?
          </h2>
          <p className="text-[#000000] text-2xl font-bold max-w-2xl mx-auto">
            MITRA TERPERCAYA UNTUK KEBUTUHAN SOHUN ANDA
          </p>
        </div>
        
        {/* Grid fitur */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#d9d9d9]/23 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#216FA8] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#000000] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}