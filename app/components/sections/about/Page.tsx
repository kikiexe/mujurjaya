import Hero from '@/components/sections/about/Hero';
import Story from '@/components/sections/about/Story';
import Stats from '@/components/sections/about/Stats';
import Cta from '@/components/sections/about/Cta';
import Certification from '@/components/sections/about/Certification';

export default function About() {
  return (
    <main>
      <Hero />
      <Story />
      <Stats />
      <Certification />
      <Cta />
    </main>
  );
}