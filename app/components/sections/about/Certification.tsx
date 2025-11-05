import Image from 'next/image';

export default function Certification() {
  return (
    <section className="p-8 bg-blue-100">
      <div className="container mx-auto px-4">
        
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-xl font-regular text-[#216FA8] mb-4">
            Jaminan Kualitas
          </h2>
          <p className="text-[#000000] text-2xl font-bold max-w-2xl mx-auto">
            SERTIFIKASI DAN STANDAR INTERNASIONAL
          </p>
        </div>

        {/* Grid sertifikasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sertifikat ISO */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert1.jpg"
                alt="Sertifikasi ISO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Sertifikasi ISO</h3>
          </div>

          {/* Sertifikat Halal */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert2.jpg"
                alt="Sertifikasi Halal"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Sertifikasi Halal</h3>
          </div>

          {/* Sertifikat HACCP */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert3.jpg"
                alt="Sertifikasi HACCP"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Sertifikasi HACCP</h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}