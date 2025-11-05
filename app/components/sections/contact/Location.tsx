export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-[#4971D5] to-[#37D2FA] bg-clip-text text-transparent">
            Lokasi Kami
          </span>
        </h2>
        
        {/* Google Maps Embed dengan Shadow Halus */}
        <div className="w-full max-w-4xl mx-auto h-96 rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.702249433284!2d109.25641030000001!3d-7.6073444000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654160c0eff441%3A0x54feffa40ca5f318!2sPabrik%20Sohun%20Gelang%20Indah!5e0!3m2!1sid!2sid!4v1762326104214!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pabrik Sohun Gelang Indah"
          ></iframe>
        </div>

      </div>
    </section>
  );
}