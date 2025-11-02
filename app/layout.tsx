// app/layout.tsx

import type { Metadata } from "next";
import { poppins } from "./fonts"; // <-- 1. Impor Poppins dari file fonts.ts
// @ts-expect-error: allow side-effect CSS import without type declarations
import "./globals.css";

// Impor Navbar dan Footer
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
      {/* 2. Terapkan className dari Poppins ke body */}
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}