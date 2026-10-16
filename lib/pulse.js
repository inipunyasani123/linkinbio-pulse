/* Raka Wijaya — motion designer (persona fiktif). Satu sumber isi untuk halaman
   tautan, showreel, dan hire. Klien, durasi, dan tarif adalah contoh purwarupa. */

import { bulanKe } from './waktu';

export const SITE = 'https://linkinbio-pulse.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;
export const tc = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export const PROFIL = { nama: 'Raka Wijaya', kota: 'Jakarta', handle: '@raka.pulse' };

export const LINKS = [
  { no: '001', label: 'SHOWREEL 2026', meta: '2 menit — lembar cue lengkap', href: '/showreel' },
  { no: '002', label: 'PROYEK', meta: 'enam klien, enam gerak', href: '/showreel#proyek' },
  { no: '003', label: 'RATE CARD', meta: 'tarif mulai & durasi', href: '/hire' },
  { no: '004', label: 'HIRE ME', meta: 'slot bulan depan terbuka', href: '/hire#form' },
];

// Lembar cue showreel 120 detik: [mulai, selesai, proyek, klien, alat, catatan].
export const CUE = [
  [0, 14, 'Pembuka "PULSE"', 'Proyek pribadi', 'After Effects', 'Huruf yang berdenyut mengikuti ketukan 120 bpm.'],
  [14, 33, 'Title sequence "Kota Tanpa Tidur"', 'Serial dokumenter (fiktif)', 'Cinema 4D · Redshift', 'Lampu jalan menyala satu per satu membentuk judul.'],
  [33, 51, 'Brand motion "Arus"', 'Bank digital (fiktif)', 'After Effects · Rive', 'Logo cair yang berubah menjadi ikon transaksi.'],
  [51, 72, 'Iklan 15 detik "Kopi Pagi"', 'Kedai kopi (fiktif)', 'Blender', 'Uap kopi yang dipahat menjadi angka jam.'],
  [72, 94, 'Paket loop media sosial', 'Festival musik (fiktif)', 'After Effects', 'Delapan loop 6 detik dari satu sistem bentuk.'],
  [94, 120, 'Penutup & kontak', 'Proyek pribadi', 'After Effects', 'Garis neon menggambar nama dan alamat situs.'],
];

export const PROYEK = [
  { nama: 'Kota Tanpa Tidur', jenis: 'Title sequence', tahun: 2026, durasi: '48 dtk', hasil: 'Diputar di 3 festival film dokumenter (fiktif)' },
  { nama: 'Arus', jenis: 'Brand motion system', tahun: 2026, durasi: '24 aset', hasil: 'Dipakai di aplikasi & layar kantor cabang' },
  { nama: 'Kopi Pagi', jenis: 'Iklan 15 detik', tahun: 2025, durasi: '15 dtk', hasil: 'Tiga versi rasio: 9:16, 1:1, 16:9' },
  { nama: 'Riuh Fest', jenis: 'Loop media sosial', tahun: 2025, durasi: '8 × 6 dtk', hasil: 'Satu sistem bentuk, delapan warna' },
  { nama: 'Peta Rasa', jenis: 'Infografik bergerak', tahun: 2024, durasi: '90 dtk', hasil: 'Data 34 provinsi dalam satu peta' },
  { nama: 'Napas', jenis: 'Animasi aplikasi', tahun: 2024, durasi: '12 animasi', hasil: 'Animasi Lottie di bawah 40 KB per file' },
];

export const TARIF = [
  { nama: 'Loop media sosial', mulai: 3500000, waktu: '1 minggu', isi: '4 loop 6 detik dari satu sistem bentuk' },
  { nama: 'Title sequence', mulai: 15000000, waktu: '3–4 minggu', isi: 'Hingga 60 detik, termasuk storyboard' },
  { nama: 'Brand motion system', mulai: 28000000, waktu: '5–6 minggu', isi: 'Prinsip gerak, 20+ aset, panduan pakai' },
];

// Ketersediaan empat bulan, dihitung dari bulan berjalan (WIB): bulan ini penuh,
// lalu 1 slot, 2 slot, dan terbuka.
const POLA_SEDIA = ['penuh', '1 slot', '2 slot', 'terbuka'];
export const sedia = (hari) => POLA_SEDIA.map((status, i) => {
  const b = bulanKe(hari, i);
  return { label: `${b.nama} ${b.tahun}`, bulan: b.nama, status };
});
