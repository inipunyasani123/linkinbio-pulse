import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LINKS, PROFIL } from '@/lib/pulse';
import { hariIniWIB } from '@/lib/waktu';
import Tersedia from './components/Tersedia';

// Kurva easing yang dipakai di seluruh situs: cubic-bezier(0.22, 1, 0.36, 1),
// digambar di kotak 240 × 240 (sumbu y terbalik). Titik lime bergerak di
// sepanjang kurva, balok di bawahnya bergerak dengan easing yang sama.
const KURVA = 'M 0 240 C 52.8 0 86.4 0 240 0';

function Kurva() {
  return (
    <figure className="kurva relative hidden w-[240px] shrink-0 md:block" aria-hidden="true">
      <div className="relative h-[240px] w-[240px]">
        <svg width="240" height="240" viewBox="0 0 240 240" className="absolute inset-0 overflow-visible">
          <g stroke="rgba(255,255,255,0.08)">
            {[60, 120, 180].map((v) => <line key={`h${v}`} x1="0" x2="240" y1={v} y2={v} />)}
            {[60, 120, 180].map((v) => <line key={`v${v}`} y1="0" y2="240" x1={v} x2={v} />)}
          </g>
          <rect x="0" y="0" width="240" height="240" fill="none" stroke="rgba(255,255,255,0.18)" />
          <line x1="0" y1="240" x2="52.8" y2="0" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 4" />
          <line x1="240" y1="0" x2="86.4" y2="0" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 4" />
          <path d={KURVA} fill="none" stroke="#d3ff3d" strokeWidth="2.5" />
          <circle cx="52.8" cy="0" r="5" fill="#0a0a0c" stroke="#fff" strokeWidth="1.5" />
          <circle cx="86.4" cy="0" r="5" fill="#0a0a0c" stroke="#fff" strokeWidth="1.5" />
        </svg>
        <span className="kurva-titik absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-[#d3ff3d] shadow-[0_0_18px_rgba(211,255,61,0.7)]" />
      </div>
      <div className="mt-5 h-2 w-full rounded-full bg-white/10">
        <span className="kurva-balok block h-2 w-8 rounded-full bg-[#d3ff3d]" />
      </div>
      <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
        <span>ease-out</span><span>.22, 1, .36, 1</span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-14">
      <div className="scanlines" aria-hidden="true" />

      <header className="masuk relative z-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
        <span>PULSE® / link.index</span>
        <Tersedia hari={hariIniWIB()} />
      </header>

      <section className="masuk relative z-10 mt-14 md:mt-20 md:flex md:items-end md:justify-between md:gap-10" style={{ animationDelay: '0.05s' }}>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">{PROFIL.nama} — {PROFIL.kota}</p>
          <h1 className="mt-3 text-6xl font-bold uppercase leading-[0.9] md:text-8xl">
            Motion<br /><span className="neon-lime">Designer</span>
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            Membuat merek bergerak: title sequence, brand motion system, dan visual 3D yang berdenyut.
          </p>
        </div>
        <Kurva />
      </section>

      <nav className="relative z-10 mt-14 border-t border-white/15 md:mt-20" aria-label="Tautan utama">
        {LINKS.map((l, i) => (
          <Link
            key={l.no}
            href={l.href}
            className="masuk group flex items-center gap-5 border-b border-white/15 py-5 md:gap-8 md:py-6"
            style={{ animationDelay: `${0.12 + i * 0.06}s` }}
          >
            <span className="font-mono text-[11px] text-white/60 transition group-hover:text-[#d3ff3d]">{l.no}</span>
            <span className="geser flex-1 font-display text-3xl font-bold uppercase tracking-tight transition-colors group-hover:text-[#d3ff3d] md:text-5xl">
              {l.label}
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-wide text-white/65 sm:block">{l.meta}</span>
            <ArrowUpRight size={22} className="shrink-0 text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d3ff3d]" aria-hidden="true" />
          </Link>
        ))}
      </nav>

      <footer className="masuk relative z-10 mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/65" style={{ animationDelay: '0.4s' }}>
        <span>Instagram & Vimeo: {PROFIL.handle}</span>
        <span>AE · C4D · Blender · Rive</span>
        <span className="w-full normal-case tracking-normal">Persona fiktif untuk purwarupa desain — klien dan angka hanya contoh.</span>
      </footer>
    </main>
  );
}
