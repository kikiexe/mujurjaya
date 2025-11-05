export default function Clients() {
  // Data placeholder untuk logo klien
  const clients = Array(4).fill(null);

  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Client Kami
          </h2>
        </div>
        
        {/* Grid logo klien */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {clients.map((_, index) => (
            <div 
              key={index}
              className="bg-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 aspect-square"
            >
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🏢</div>
                <p className="text-xs font-medium">Client Logo</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}