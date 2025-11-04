import Image from 'next/image';

export default function Certification() {
  return (
    <section className="p-8 bg-blue-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-xl font-regular text-[#216FA8] mb-4">
            Jaminan Kualitas
          </h2>
          <p className="text-[#000000] text-2xl font-bold max-w-2xl mx-auto">
            SERTIFIKASI DAN STANDAR INTERNASIONAL
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certificate 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert1.jpg"
                alt="Certification 1"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Sertifikasi ISO</h3>
          </div>

          {/* Certificate 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert2.jpg"
                alt="Certification 2"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">Sertifikasi Halal</h3>
          </div>

          {/* Certificate 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/images/cert3.jpg"
                alt="Certification 3"
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