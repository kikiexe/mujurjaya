// app/contexts/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ID' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  // Navbar
  'nav.home': {
    ID: 'Home',
    EN: 'Home'
  },
  'nav.about': {
    ID: 'About',
    EN: 'About'
  },
  'nav.product': {
    ID: 'Product',
    EN: 'Product'
  },
  'nav.contact': {
    ID: 'Contact',
    EN: 'Contact'
  },
  
  // Home Page
  'home.hero.title1': {
    ID: 'Kualitas Sohun Terbaik',
    EN: 'Best Quality Glass Noodles'
  },
  'home.hero.title2': {
    ID: 'Untuk Pasar Global',
    EN: 'For Global Market'
  },
  'home.hero.description': {
    ID: 'Produsen mie sohun premium dari Indonesia. Kami berdedikasi menyediakan produk berkualitas tinggi dengan standar internasional untuk mitra ekspor di seluruh dunia',
    EN: 'Premium glass noodle manufacturer from Indonesia. We are dedicated to providing high-quality products with international standards for export partners worldwide'
  },
  'home.hero.btn.contact': {
    ID: 'Hubungi Tim Ekspor',
    EN: 'Contact Export Team'
  },
  'home.hero.btn.products': {
    ID: 'Lihat Produk Kami',
    EN: 'View Our Products'
  },
  
  // Features Section
  'home.features.subtitle': {
    ID: 'Mengapa Harus Memilih Kami?',
    EN: 'Why Choose Us?'
  },
  'home.features.title': {
    ID: 'MITRA TERPERCAYA UNTUK KEBUTUHAN SOHUN ANDA',
    EN: 'TRUSTED PARTNER FOR YOUR GLASS NOODLE NEEDS'
  },
  'home.features.quality.title': {
    ID: 'Standar Kualitas Internasional',
    EN: 'International Quality Standards'
  },
  'home.features.quality.desc': {
    ID: 'Produk kami diproses menggunakan teknologi modern yang memenuhi standar internasional, menjaga kualitas dan kesegaran.',
    EN: 'Our products are processed using modern technology that meets international standards, maintaining quality and freshness.'
  },
  'home.features.ingredients.title': {
    ID: 'Bahan Baku Premium',
    EN: 'Premium Raw Materials'
  },
  'home.features.ingredients.desc': {
    ID: 'Kami hanya menggunakan bahan baku pilihan terbaik yang dipilih secara teliti untuk menghasilkan produk berkualitas tinggi.',
    EN: 'We only use the best selected raw materials carefully chosen to produce high-quality products.'
  },
  'home.features.export.title': {
    ID: 'Jaminan Ekspor Luas',
    EN: 'Wide Export Guarantee'
  },
  'home.features.export.desc': {
    ID: 'Berpengalaman dalam mengirimkan produk ke berbagai negara dengan sistem logistik yang efisien dan terpercaya.',
    EN: 'Experienced in delivering products to various countries with efficient and reliable logistics systems.'
  },
  
  // Products Section
  'home.products.title': {
    ID: 'Produk Unggulan Kami',
    EN: 'Our Featured Products'
  },
  'home.products.description': {
    ID: 'Kami menawarkan berbagai varian mie sohun untuk memenuhi kebutuhan spesifik pasar Anda, termasuk kustomisasi ukuran dan kemasan',
    EN: 'We offer various glass noodle variants to meet your specific market needs, including size and packaging customization'
  },
  'home.products.feature1': {
    ID: 'Kontrol kualitas yang ketat di setiap tahap produksi',
    EN: 'Strict quality control at every production stage'
  },
  'home.products.feature2': {
    ID: 'Kapasitas produksi besar untuk memenuhi permintaan ekspor',
    EN: 'Large production capacity to meet export demand'
  },
  'home.products.feature3': {
    ID: 'Sertifikasi internasional (Halal, ISO, HACCP)',
    EN: 'International certifications (Halal, ISO, HACCP)'
  },
  
  // CTA Section
  'home.cta.title': {
    ID: 'Siap Memulai Kemitraan?',
    EN: 'Ready to Start Partnership?'
  },
  'home.cta.description': {
    ID: 'Tim kami siap membantu Anda dengan informasi produk, sampel, dan penawaran harga terbaik untuk kebutuhan ekspor Anda.',
    EN: 'Our team is ready to assist you with product information, samples, and the best price offers for your export needs.'
  },
  'home.cta.button': {
    ID: 'Hubungi Kami',
    EN: 'Contact Us'
  },
  
  // Clients Section
  'home.clients.title': {
    ID: 'Client Kami',
    EN: 'Our Clients'
  },
  
  // About Page
  'about.hero.title': {
    ID: 'Tentang Mujur Jaya',
    EN: 'About Mujur Jaya'
  },
  'about.hero.description': {
    ID: 'Mengenal lebih dekat tentang Mujur Jaya, produsen mie sohun premium dari Indonesia yang berkomitmen menyediakan produk berkualitas tinggi dengan standar internasional untuk mitra ekspor di seluruh dunia.',
    EN: 'Get to know Mujur Jaya, a premium glass noodle manufacturer from Indonesia committed to providing high-quality products with international standards for export partners worldwide.'
  },
  'about.story.title': {
    ID: 'Cerita Kami: Dari Ladang ke Meja Anda',
    EN: 'Our Story: From Field to Your Table'
  },
  'about.story.description': {
    ID: 'Mujur Jaya bermula dari visi sederhana: menghadirkan mie sohun berkualitas tinggi yang menghubungkan tradisi kuliner Indonesia dengan pasar global. Dengan dedikasi terhadap kualitas dan inovasi, kami telah tumbuh menjadi produsen terkemuka yang dipercaya oleh mitra ekspor di seluruh dunia.',
    EN: 'Mujur Jaya started with a simple vision: to present high-quality glass noodles that connect Indonesian culinary traditions with the global market. With dedication to quality and innovation, we have grown into a leading manufacturer trusted by export partners worldwide.'
  },
  'about.stats.farmers': {
    ID: 'Farmers Spread',
    EN: 'Farmers Spread'
  },
  'about.stats.countries': {
    ID: 'Export Countries',
    EN: 'Export Countries'
  },
  'about.stats.experience': {
    ID: 'Years Experience',
    EN: 'Years Experience'
  },
  'about.cert.subtitle': {
    ID: 'Jaminan Kualitas',
    EN: 'Quality Assurance'
  },
  'about.cert.title': {
    ID: 'SERTIFIKASI DAN STANDAR INTERNASIONAL',
    EN: 'CERTIFICATION AND INTERNATIONAL STANDARDS'
  },
  'about.cert.iso': {
    ID: 'Sertifikasi ISO',
    EN: 'ISO Certification'
  },
  'about.cert.halal': {
    ID: 'Sertifikasi Halal',
    EN: 'Halal Certification'
  },
  'about.cert.haccp': {
    ID: 'Sertifikasi HACCP',
    EN: 'HACCP Certification'
  },
  
  // Product Page
  'product.hero.title': {
    ID: 'Proses Produksi',
    EN: 'Production Process'
  },
  'product.hero.description': {
    ID: 'Transparansi adalah kunci kami. Lihat bagaimana kami mengubah bahan baku terbaik menjadi sohun berkualitas ekspor.',
    EN: 'Transparency is our key. See how we transform the best raw materials into export-quality glass noodles.'
  },
  'product.step1.title': {
    ID: 'Seleksi Bahan Baku',
    EN: 'Raw Material Selection'
  },
  'product.step1.desc': {
    ID: 'Pemilihan bahan baku berkualitas tinggi adalah pondasi kami. Kami hanya menggunakan pati dari sumber terpercaya yang melewati quality control ketat.',
    EN: 'Selection of high-quality raw materials is our foundation. We only use starch from trusted sources that pass strict quality control.'
  },
  'product.step2.title': {
    ID: 'Pencampuran & Pengolahan',
    EN: 'Mixing & Processing'
  },
  'product.step2.desc': {
    ID: 'Proses pencampuran sohun dengan teknologi modern dan formula rahasia kami untuk menghasilkan adonan dengan tekstur sempurna.',
    EN: 'Glass noodle mixing process with modern technology and our secret formula to produce dough with perfect texture.'
  },
  'product.step3.title': {
    ID: 'Pembentukan & Pengeringan',
    EN: 'Forming & Drying'
  },
  'product.step3.desc': {
    ID: 'Adonan dibentuk menjadi mie sohun dan dikeringkan dengan suhu yang terkontrol, mempertahankan kualitas dan nutrisi.',
    EN: 'The dough is formed into glass noodles and dried at controlled temperatures, maintaining quality and nutrition.'
  },
  'product.step4.title': {
    ID: 'Pengemasan & Quality Control',
    EN: 'Packaging & Quality Control'
  },
  'product.step4.desc': {
    ID: 'Produk dikemas dengan higienis dan melewati quality control akhir sebelum siap diekspor ke seluruh dunia.',
    EN: 'Products are hygienically packaged and undergo final quality control before being ready for export worldwide.'
  },
  
  // Contact Page
  'contact.hero.title': {
    ID: 'Kontak Kami',
    EN: 'Contact Us'
  },
  'contact.hero.description': {
    ID: 'Mengenal lebih dekat dedikasi kami dalam menghadirkan sohun kualitas terbaik dari Indonesia untuk dunia.',
    EN: 'Learn more about our dedication to presenting the best quality glass noodles from Indonesia to the world.'
  },
  'contact.form.title': {
    ID: 'Kirim Pesan',
    EN: 'Send Message'
  },
  'contact.form.subtitle': {
    ID: 'Hubungi kami untuk informasi lebih lanjut tentang produk dan kemitraan.',
    EN: 'Contact us for more information about products and partnerships.'
  },
  'contact.form.name': {
    ID: 'Nama',
    EN: 'Name'
  },
  'contact.form.email': {
    ID: 'Email',
    EN: 'Email'
  },
  'contact.form.message': {
    ID: 'Message',
    EN: 'Message'
  },
  'contact.form.submit': {
    ID: 'Submit',
    EN: 'Submit'
  },
  'contact.form.sending': {
    ID: 'Mengirim...',
    EN: 'Sending...'
  },
  'contact.form.success': {
    ID: 'Pesan berhasil terkirim! Terima kasih.',
    EN: 'Message sent successfully! Thank you.'
  },
  'contact.call.title': {
    ID: 'Call Us',
    EN: 'Call Us'
  },
  'contact.call.desc': {
    ID: 'Hubungi kami untuk konsultasi produk dan informasi kemitraan.',
    EN: 'Contact us for product consultation and partnership information.'
  },
  'contact.visit.title': {
    ID: 'Visit Us',
    EN: 'Visit Us'
  },
  'contact.visit.desc': {
    ID: 'Kunjungi kantor dan pabrik kami untuk melihat proses produksi langsung.',
    EN: 'Visit our office and factory to see the production process directly.'
  },
  'contact.location.title': {
    ID: 'Lokasi Kami',
    EN: 'Our Location'
  },
  
  // Footer
  'footer.company.desc': {
    ID: 'Produsen mie sohun premium terpercaya yang berkomitmen menghadirkan produk terbaik untuk kebutuhan ekspor Anda di seluruh Indonesia.',
    EN: 'Trusted premium glass noodle manufacturer committed to providing the best products for your export needs throughout Indonesia.'
  },
  'footer.contact.title': {
    ID: 'Kontak Kami',
    EN: 'Contact Us'
  },
  'footer.location.title': {
    ID: 'Lokasi Kami',
    EN: 'Our Location'
  },
  'footer.copyright': {
    ID: '© 2025 PT Mujur Jaya',
    EN: '© 2025 PT Mujur Jaya'
  },
  'footer.tagline': {
    ID: 'Premium Glass Noodle Manufacturer & Exporter. All Rights Reserved',
    EN: 'Premium Glass Noodle Manufacturer & Exporter. All Rights Reserved'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ID');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ID' || savedLang === 'EN')) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}