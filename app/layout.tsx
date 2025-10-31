// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error: TS cannot find module/type declarations for side-effect CSS import in some setups
import "@/globals.css";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* <-- Tambahkan Navbar di sini */}
        {children} {/* <-- Ini adalah isi dari setiap halaman (page.tsx) */}
        <Footer /> {/* <-- Tambahkan Footer di sini */}
      </body>
    </html>
  );
}