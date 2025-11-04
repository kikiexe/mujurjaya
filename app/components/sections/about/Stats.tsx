export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-100 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stat Item 1 */}
            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">1900+</p>
              <p className="text-sm text-[#216FA8]">Farmers Spread</p>
            </div>

            {/* Stat Item 2 */}
            <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <p className="text-4xl font-bold text-gray-900 mb-2">50+</p>
              <p className="text-sm text-[#216FA8]">Export Countries</p>
            </div>

            {/* Stat Item 3 */}
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">25+</p>
              <p className="text-sm text-[#216FA8]">Years Experience</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}