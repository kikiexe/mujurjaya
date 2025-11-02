// app/contact/page.tsx

import Hero from '@/components/sections/contact/Hero';
import Form from '@/components/sections/contact/Form';
import Location from '@/components/sections/contact/Location';

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <Form />
      <Location />
    </main>
  );
}