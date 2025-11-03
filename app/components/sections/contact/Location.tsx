// file: app/components/sections/contact/Location.tsx

export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent">
            Our Location
          </span>
        </h2>
        
        {/* Placeholder Peta */}
        <div className="w-full max-w-4xl mx-auto h-96 bg-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Nanti kamu bisa ganti div ini dengan <iframe> dari Google Maps
          */}
          <div className="flex items-center justify-center h-full text-gray-500">
            [ Placeholder Peta Google Maps ]
          </div>
        </div>

      </div>
    </section>
  );
}