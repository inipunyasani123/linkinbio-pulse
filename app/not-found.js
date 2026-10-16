import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center px-6 md:px-14">
      <div className="scanlines" aria-hidden="true" />
      <p className="relative z-10 font-mono text-xs uppercase tracking-[0.3em] text-white/70">frame tidak ditemukan</p>
      <h1 className="relative z-10 mt-3 text-7xl font-bold uppercase leading-[0.9] md:text-9xl"><span className="neon-lime">404</span><br />cut</h1>
      <Link href="/" className="relative z-10 mt-10 inline-flex min-h-11 w-fit items-end border-b border-white/30 pb-1 font-display text-2xl font-bold uppercase hover:border-[#d3ff3d] hover:text-[#d3ff3d]">← Kembali ke link.index</Link>
    </main>
  );
}
