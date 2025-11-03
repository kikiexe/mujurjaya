// app/components/sections/product/Hero.tsx

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#A9DBFF]/30 to-[#FFFFFF] pt-16 md:pt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent mb-4">
            Proses Produksi
          </h1>
          <p className="text-lg text-black-500 max-w-3xl mx-auto">
            Transparansi adalah kunci kami. Lihat bagaimana kami mengubah bahan baku terbaik menjadi sohun berkualitas ekspor.
          </p>
        </div>
      </div>
    </section>
  );
}