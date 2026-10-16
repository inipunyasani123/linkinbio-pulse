'use client';

import { sedia } from '@/lib/pulse';
import useHariIni from './useHariIni';

export default function Sedia({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
      {sedia(hari).map((s) => (
        <li key={s.label} className={`rounded-xl border p-4 ${s.status === 'penuh' ? 'border-white/15 text-white/60' : 'border-[#d3ff3d]/60'}`}>
          <p className="font-mono text-xs uppercase tracking-wide">{s.label}</p>
          <p className={`mt-2 font-display text-2xl font-bold uppercase ${s.status === 'penuh' ? '' : 'text-[#d3ff3d]'}`}>{s.status}</p>
        </li>
      ))}
    </ul>
  );
}
