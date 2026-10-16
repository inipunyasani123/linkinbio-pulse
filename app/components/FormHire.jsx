'use client';

import { useState } from 'react';
import { TARIF, sedia } from '@/lib/pulse';
import useHariIni from './useHariIni';

export default function FormHire({ hari: awal }) {
  const hari = useHariIni(awal);
  const [selesai, setSelesai] = useState(false);
  const input = 'w-full border-b border-white/45 bg-transparent py-2 text-white placeholder:text-white/40 focus:border-[#d3ff3d]';

  return (
    <section id="form" aria-labelledby="form-h" className="relative z-10 mt-14 scroll-mt-8 rounded-2xl border border-white/15 p-5 md:p-8">
      <h2 id="form-h" className="font-display text-3xl font-bold uppercase md:text-4xl">Hire <span className="neon-lime">me</span></h2>
      {selesai ? (
        <div role="status" className="mt-5">
          <p className="font-mono text-sm text-[#d3ff3d]">&gt; brief diterima_</p>
          <p className="mt-2 text-sm text-white/75">Ini purwarupa desain: tidak ada pesan yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-5 min-h-11 rounded-full border border-white/30 px-5 py-2 font-mono text-xs uppercase hover:border-[#d3ff3d] hover:text-[#d3ff3d]">Kirim brief lain</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="h-nama" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Nama / studio</label>
            <input id="h-nama" required autoComplete="name" className={input} />
          </div>
          <div>
            <label htmlFor="h-surel" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Surel</label>
            <input id="h-surel" type="email" required autoComplete="email" className={input} />
          </div>
          <div>
            <label htmlFor="h-jenis" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Jenis</label>
            <select id="h-jenis" className={`${input} bg-[#0a0a0c]`}>{TARIF.map((t) => <option key={t.nama}>{t.nama}</option>)}</select>
          </div>
          <div>
            <label htmlFor="h-bulan" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Mulai</label>
            <select id="h-bulan" className={`${input} bg-[#0a0a0c]`}>{sedia(hari).filter((s) => s.status !== 'penuh').map((s) => <option key={s.label}>{s.label}</option>)}</select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="h-brief" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Brief singkat</label>
            <textarea id="h-brief" required rows={3} className={input} />
          </div>
          <button type="submit" className="rounded-full bg-[#d3ff3d] py-3.5 font-display text-lg font-bold uppercase text-[#0a0a0c] hover:bg-white md:col-span-2">Kirim brief</button>
          <p className="font-mono text-[11px] text-white/60 md:col-span-2">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
