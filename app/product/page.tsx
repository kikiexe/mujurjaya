// app/product/page.tsx

import Hero from '@/components/sections/product/Hero';
import Stepper from '@/components/sections/product/Stepper';
import Cta from '@/components/sections/home/Cta';

export default function ProductPage() {
  return (
    <main>
      <Hero />
      <Stepper />
      <Cta />
    </main>
  );
}