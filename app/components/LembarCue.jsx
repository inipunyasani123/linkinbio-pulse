'use client';

import { useState } from 'react';
import { BINGKAI, CUE, SEGMEN_BINGKAI, tc } from '@/lib/pulse';
import Gambar from './Gambar';

const TOTAL = CUE[CUE.length - 1][1];

export default function LembarCue() {
  const [t, setT] = useState(20);
  const aktif = CUE.findIndex(([a, b]) => t >= a && t < b);
  const i = aktif === -1 ? CUE.length - 1 : aktif;
  const [a, b, proyek, klien, alat, catatan] = CUE[i];

  return (
    <section aria-labelledby="cue-h" className="relative z-10 mt-12 rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-8">
      <h2 id="cue-h" className="sr-only">Lembar cue showreel</h2>
      {/* Monitor: bingkai diam segmen yang sedang ditunjuk penanda waktu */}
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/15 bg-[#0a0a0c]">
        {SEGMEN_BINGKAI.map((b, k) => (
          <Gambar key={b} src={`/images/reel/${b}.webp`} alt={k === i ? BINGKAI[b] : ''} aria-hidden={k === i ? undefined : 'true'} width={1280} height={720} asli={1280} sizes="(min-width: 1024px) 860px, calc(100vw - 88px)" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <span className="absolute left-3 top-3 rounded bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d3ff3d]" aria-hidden="true">● segmen {i + 1}/{CUE.length}</span>
      </div>
      <div className="flex items-baseline justify-between font-mono">
        <span className="text-4xl font-bold text-[#d3ff3d] md:text-6xl" aria-hidden="true">{tc(t)}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-white/65">/ {tc(TOTAL)}</span>
      </div>

      {/* Pita segmen */}
      <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
        {CUE.map(([s, e], k) => <span key={s} className={`h-full border-r border-[#0a0a0c] ${k === i ? 'bg-[#d3ff3d]' : 'bg-white/25'}`} style={{ width: `${((e - s) / TOTAL) * 100}%` }} />)}
      </div>
      <label htmlFor="cue-waktu" className="sr-only">Penanda waktu showreel</label>
      <input id="cue-waktu" type="range" min={0} max={TOTAL - 1} value={t} onChange={(e) => setT(Number(e.target.value))} aria-valuetext={`${tc(t)}, ${proyek}`} className="mt-1 h-11 w-full cursor-pointer accent-[#d3ff3d]" />

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" aria-live="polite">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/65">Segmen {i + 1} · {tc(a)}–{tc(b)}</p>
          <p className="mt-2 font-display text-3xl font-bold uppercase leading-tight md:text-4xl">{proyek}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{catatan}</p>
        </div>
        <dl className="grid content-start gap-3 font-mono text-xs uppercase tracking-wide">
          <div className="border-l-2 border-[#d3ff3d] pl-3"><dt className="text-white/60">Klien</dt><dd className="mt-1 normal-case text-white">{klien}</dd></div>
          <div className="border-l-2 border-[#d3ff3d] pl-3"><dt className="text-white/60">Alat</dt><dd className="mt-1 normal-case text-white">{alat}</dd></div>
        </dl>
      </div>

      <ol className="mt-8 grid gap-2 border-t border-white/15 pt-5 md:grid-cols-3">
        {CUE.map(([s, , p], k) => (
          <li key={s}>
            <button type="button" onClick={() => setT(s)} aria-current={k === i ? 'true' : undefined} className={`min-h-11 w-full rounded-lg px-3 py-2 text-left font-mono text-xs transition ${k === i ? 'bg-[#d3ff3d] text-[#0a0a0c]' : 'text-white/75 hover:bg-white/10'}`}>
              {tc(s)} — {p}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
