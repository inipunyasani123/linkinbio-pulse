import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["400", "500", "700"] });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Raka Wijaya","jobTitle":"Motion & Visual Designer","url":"https://linkinbio-pulse.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-pulse.pintuweb.id"),
  title: { default: "Raka Wijaya — Motion Designer", template: "%s — Raka Wijaya" },
  description: "Tautan Raka Wijaya, motion designer di Jakarta: lembar cue showreel 2026 yang bisa digeser, enam proyek, rate card, ketersediaan, dan formulir brief.",
  applicationName: "PULSE",
  keywords: ["motion designer jakarta", "showreel", "title sequence", "brand motion", "link in bio motion designer"],
  authors: [{ name: "PULSE" }],
  creator: "PULSE",
  publisher: "PULSE",
  alternates: { canonical: "https://linkinbio-pulse.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-pulse.pintuweb.id",
    siteName: "PULSE",
    title: "Raka Wijaya — Motion Designer",
    description: "Tautan Raka Wijaya, motion designer di Jakarta: lembar cue showreel 2026 yang bisa digeser, enam proyek, rate card, ketersediaan, dan formulir brief.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Raka Wijaya — Motion Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raka Wijaya — Motion Designer",
    description: "Tautan Raka Wijaya, motion designer di Jakarta: lembar cue showreel 2026 yang bisa digeser, enam proyek, rate card, ketersediaan, dan formulir brief.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${grotesk.variable} ${jbmono.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
