export default function Hero() {
  return (
     <section className="bg-gradient-to-b from-[#A9DBFF]/30 to-[#FFFFFF] py-16 md:py-24 flex items-center">
       <div className="container mx-auto px-4">
         <div className="max-w-2xl mx-auto text-center space-y-6">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
             <span className="bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent">
               Tentang Mujur Jaya
             </span>
           </h1>

           <p className="text-gray-600 text-lg">
            Mengenal lebih dekat tentang Mujur Jaya, produsen mie sohun premium dari Indonesia yang berkomitmen menyediakan produk berkualitas tinggi dengan standar internasional untuk mitra ekspor di seluruh dunia.
           </p>
         </div>
       </div>
     </section>
  );
}