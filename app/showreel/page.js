import { BINGKAI, PROYEK, SITE } from '@/lib/pulse';
import Gambar from '../components/Gambar';
import Kembali from '../components/Kembali';
import LembarCue from '../components/LembarCue';

export const metadata = {
  title: 'Showreel 2026',
  description: 'Lembar cue showreel 2026 Raka Wijaya — enam segmen dalam dua menit, lengkap dengan klien, alat, dan catatan — plus daftar proyek motion design.',
  alternates: { canonical: `${SITE}/showreel` },
};

export default function Showreel() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-14">
      <div className="scanlines" aria-hidden="true" />
      <Kembali judul="001 / showreel" />
      <h1 className="relative z-10 mt-14 text-5xl font-bold uppercase leading-[0.9] md:text-7xl">Showreel<br /><span className="neon-lime">2026</span></h1>
      <p className="relative z-10 mt-5 max-w-md text-sm leading-relaxed text-white/75">Dua menit, enam proyek. Geser penanda waktu untuk membaca lembar cue — apa yang tampil, untuk siapa, dengan alat apa.</p>
      <LembarCue />

      <section id="proyek" aria-labelledby="proyek-h" className="relative z-10 mt-20 scroll-mt-8">
        <h2 id="proyek-h" className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">002 / proyek</h2>
        <ul className="mt-4 border-t border-white/15">
          {PROYEK.map((p) => (
            <li key={p.nama} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-white/15 py-5 md:grid-cols-[10rem_minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1.4fr)] md:items-center md:gap-6">
              <Gambar src={`/images/reel/${p.bingkai}.webp`} alt={BINGKAI[p.bingkai]} width={1280} height={720} asli={1280} sizes="(min-width: 768px) 160px, 112px" className="row-span-3 aspect-video w-full rounded-md border border-white/15 object-cover md:row-span-1" />
              <p className="font-display text-3xl font-bold uppercase tracking-tight">{p.nama}</p>
              <p className="font-mono text-xs uppercase tracking-wide text-[#d3ff3d]">{p.jenis} · {p.tahun} · {p.durasi}</p>
              <p className="text-sm text-white/75">{p.hasil}</p>
            </li>
          ))}
        </ul>
      </section>
      <p className="relative z-10 mt-10 font-mono text-[11px] text-white/60">Klien dan angka adalah contoh purwarupa desain.</p>
    </main>
  );
}
