import Hero from '@/components/sections/about/Hero';
import Story from '@/components/sections/about/Story';
import Stats from '@/components/sections/about/Stats';
import Certification from '@/components/sections/about/Certification';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Story />
      <Stats />
      <Certification />
    </main>
  );
}