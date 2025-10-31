// app/page.tsx

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Pilih Galeri
      </h1>
      <div className="flex space-x-4">
        <Link href="/gallery/changli">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Lihat Changli
          </button>
        </Link>

        <Link href="/gallery/Melania">
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            Lihat Melania
          </button>
        </Link>

        <Link href="/gallery/ghibli">
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
            Lihat Ghibli
          </button>
        </Link>
      </div>
    </main>
  );
}