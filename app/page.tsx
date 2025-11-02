// app/page.tsx

import Hero from '@/components/sections/home/Hero';
import Features from '@/components/sections/home/Features';
import Products from '@/components/sections/home/Products';
import Cta from '@/components/sections/home/Cta';
import Clients from '@/components/sections/home/Clients';
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Cta />
      <Clients />
    </main>
  );
}