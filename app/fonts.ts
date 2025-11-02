// app/fonts.ts
import { Poppins, PT_Serif } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const ptSerif = PT_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});