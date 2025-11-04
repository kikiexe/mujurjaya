// file: app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ambil API key dari .env.local
// Pastikan RESEND_API_KEY sudah ada di file .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Ambil data (nama, email, message) dari body request
    const { nama, email, message } = await request.json();

    // 2. Kirim email menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: 'Kontak Website <onboarding@resend.dev>', 
      to: [process.env.EMAIL_PENERIMA!], // <-- UBAH MENJADI INI
      subject: `Pesan Baru dari ${nama} - Website Mujur Jaya`,
      replyTo: email, // Email pengirim tetap tercatat di sini
      html: `
        <h3>Pesan baru dari formulir kontak:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 3. Tangani jika ada error dari Resend
    if (error) {
      // Kirim balasan JSON error
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // 4. Kirim balasan JSON sukses
    return NextResponse.json({ message: 'Email berhasil terkirim!', data }, { status: 200 });

  } catch (error: unknown) { // <-- PERBAIKAN DARI 'error: any'
    // 5. Tangani jika ada error lain (misal: JSON tidak valid)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Terjadi kesalahan' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Terjadi kesalahan tidak dikenal' }, { status: 500 });
  }
}