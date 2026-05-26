import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Quote, FileText, ExternalLink, BookOpen } from "lucide-react";
import certGeopng from "@/assets/cert-geopng.jpg";
import certWebgis from "@/assets/cert-webgis.jpg";
import certTechgeo from "@/assets/cert-techgeo.png";
import profilePhoto from "@/assets/profile-hejumacla.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hejumacla T. Oboko" },
      { name: "description", content: "GIS Specialist with a Master of Philosophy in Geomatics from PNG University of Technology." },
      { property: "og:title", content: "About — Hejumacla T. Oboko" },
      { property: "og:description", content: "Background, education and professional philosophy." },
    ],
  }),
  component: About,
});

const education = [
  { period: "2024–2025", title: "Master of Philosophy in Geomatics", org: "PNG University of Technology" },
  { period: "2016–2019", title: "Bachelor in Geographical Information Science (with Merit)", org: "PNG University of Technology" },
  { period: "2010–2011", title: "Advanced Professional Diploma in Information Technology (APDIT)", org: "DATEC Learning Center & PNG Unitech" },
];

const skillGroups = [
  { label: "GIS Software", items: ["ArcGIS", "ArcGIS Pro", "QGIS", "Global Mapper"] },
  { label: "WebGIS & Programming", items: ["Mapbox Integration", "Web Mapping Applications", "Dashboard Design"] },
  { label: "Remote Sensing", items: ["LULC Classification", "NDVI", "Groundwater Modeling", "Soil Health"] },
  { label: "Mobile Data Collection", items: ["CommCare", "GPS Field Surveying"] },
  { label: "Analysis", items: ["MCDA", "AHP", "Network Optimization", "Asset Management"] },
];

const certifications = [
  {
    title: "TechGeo Geospatial Certification Exam",
    issuer: "TechGeo Mapping Academy",
    date: "May 2026",
    mode: "Online Assessment",
    detail: "Score 85% (34/40) — GIS · Remote Sensing · Web Mapping · Spatial Analysis · GeoAI · Photogrammetry · Cartography",
    credentialId: "TG-2026-SJ8KE3RS",
    image: certTechgeo,
  },
  {
    title: "GeoPNG Inaugural Congress",
    issuer: "PNG University of Technology — School of Surveying & Land Studies",
    date: "21–22 August 2025",
    mode: "In-Person",
    detail: "Active participation and contribution to the inaugural geospatial congress, themed 'Geospatial Solutions for a Sustainable Future'.",
    image: certGeopng,
  },
  {
    title: "WebGIS Ascension Workshop",
    issuer: "WebGIS Ascension",
    date: "17 July 2025",
    mode: "Online",
    detail: "Certificate of Completion — advanced WebGIS workflows and deployment.",
    image: certWebgis,
  },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ About</p>
        <div className="mt-4 grid gap-10 md:grid-cols-[1fr_320px] items-start">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Building <span className="text-gradient">spatial intelligence</span> for Papua New Guinea.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I'm a results-oriented GIS professional with expertise in utilizing geospatial technologies to solve complex urban management, environmental, and agricultural challenges. My work spans WebGIS solutions for municipal asset management, advanced spatial analysis for groundwater resource assessment, and mobile data collection workflows for rural development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I'm committed to leveraging the Power of Where to advance the Sustainable Development Goals — across clean water, sustainable cities, gender equality and decent work.
            </p>
          </div>
          <div className="relative md:sticky md:top-24">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl" aria-hidden />
            <div className="relative surface-card overflow-hidden rounded-2xl">
              <img
                src={profilePhoto}
                alt="Portrait of Hejumacla T. Oboko, GIS Specialist"
                width={1024}
                height={1280}
                className="h-full w-full object-cover aspect-[4/5]"
              />
              <div className="p-5 border-t border-border">
                <div className="font-display text-base font-semibold">Hejumacla T. Oboko</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary mt-1">GIS Specialist · Lae, PNG</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="font-display text-3xl font-semibold">Technical skills</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label} className="surface-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">{g.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm border border-border rounded px-2.5 py-1">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold">Education & certifications</h2>
        <ol className="mt-8 relative border-l border-border ml-3 space-y-8">
          {education.map((e) => (
            <li key={e.title} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap size={10} />
              </span>
              <div className="font-mono text-xs text-secondary">{e.period}</div>
              <div className="mt-1 font-display text-lg font-semibold">{e.title}</div>
              <div className="text-sm text-muted-foreground">{e.org}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Credentials</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Certifications & workshops</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Continued professional development across geospatial assessment, WebGIS and community-level mapping.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certifications.map((c) => (
            <article key={c.title} className="surface-card overflow-hidden flex flex-col hover-lift">
              <div className="aspect-[4/3] bg-muted border-b border-border overflow-hidden">
                <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-secondary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">{c.mode} · {c.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                {c.credentialId && (
                  <p className="mt-auto pt-3 font-mono text-[10px] text-muted-foreground border-t border-border">
                    ID: {c.credentialId}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="surface-card p-10 md:p-14 text-center">
          <Quote className="mx-auto text-primary" size={28} />
          <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-snug">
            "GIS is not just about making maps; it's about providing the <span className="text-gradient">spatial intelligence</span> necessary to build sustainable cities, protect our natural resources, and empower local communities through data-driven decisions."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground font-mono">— Hejumacla T. Oboko</div>
        </div>
      </section>
    </>
  );
}
