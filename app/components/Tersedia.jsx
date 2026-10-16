'use client';

import { sedia } from '@/lib/pulse';
import useHariIni from './useHariIni';

// Penanda ketersediaan di kepala beranda: bulan terdekat yang masih punya slot.
// Penanda statis (bukan titik berkedip) — ini informasi jadwal, bukan status daring.
export default function Tersedia({ hari: awal }) {
  const hari = useHariIni(awal);
  const b = sedia(hari).find((x) => x.status !== 'penuh');
  return (
    <span className="flex items-center gap-2">
      <span className="inline-block h-1.5 w-3 bg-[#d3ff3d]" aria-hidden="true" /> terbuka {b.bulan}
    </span>
  );
}
