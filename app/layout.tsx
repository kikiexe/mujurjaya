// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// @ts-expect-error: TS cannot find module/type declarations for side-effect CSS import in some setups
import "./globals.css";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Konfigurasi font Poppins
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Pilih ketebalan font yang dibutuhkan
  subsets: ["latin"],
  variable: "--font-poppins", // Membuat CSS variable untuk font
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mujur Jaya",
  description: "Mujur Jaya Sohun Factory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}