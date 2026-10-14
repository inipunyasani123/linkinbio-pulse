const SITE = "https://linkinbio-pulse.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/showreel", "/hire"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
