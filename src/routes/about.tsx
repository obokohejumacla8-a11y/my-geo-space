import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Award,
  GraduationCap,
  Quote,
  FileText,
  ExternalLink,
  BookOpen,
  Search,
  Printer,
  Download,
  Briefcase,
  Compass,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import certGeopng from "@/assets/cert-geopng.jpg";
import certWebgis from "@/assets/cert-webgis.jpg";
import certTechgeo from "@/assets/cert-techgeo.png";
import certMphil from "@/assets/cert-mphil.jpg";
import certBachelor from "@/assets/cert-bachelor.jpg";
import certApdit from "@/assets/cert-apdit.jpg";
import certAssociate from "@/assets/cert-associate.jpg";
import profilePhoto from "@/assets/profile-hejumacla.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hejumacla T. Oboko" },
      { name: "description", content: "GIS Specialist with a Master of Philosophy in Geomatics from PNG University of Technology." },
      { property: "og:title", content: "About — Hejumacla T. Oboko" },
      { property: "og:description", content: "Background, education, research interests and professional philosophy." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hejumacla T. Oboko",
          jobTitle: "GIS Specialist & WebGIS Developer",
          email: "mailto:oboko.hejumacla8@gmail.com",
          telephone: "+675 7220 4015",
          url: "https://hejumacla-portfolio.lovable.app/about",
          sameAs: ["https://www.linkedin.com/in/hejumacla-oboko"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lae",
            addressRegion: "Morobe Province",
            addressCountry: "PG",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "PNG University of Technology",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: "Spatial Assessment of Groundwater Potential Zones of East New Britain Province, Papua New Guinea",
          author: { "@type": "Person", name: "Hejumacla T. Oboko" },
          url: "https://archives.palarch.nl/index.php/jae/article/view/7248",
          publisher: { "@type": "Organization", name: "PalArch Foundation" },
        }),
      },
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

const researchInterests = [
  "GIS Innovation",
  "Municipal Planning",
  "Smart Cities",
  "WebGIS Development",
  "Remote Sensing",
  "Land Use & Land Cover Change",
  "Climate Change",
  "Terrestrial Environments",
  "Geospatial Analysis",
  "Conservation",
];

type Certification = {
  title: string;
  issuer: string;
  date: string;
  year: number;
  mode: "Online" | "In-Person";
  detail: string;
  credentialId?: string;
  url?: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "TechGeo Geospatial Certification Exam",
    issuer: "TechGeo Mapping Academy",
    date: "May 2026",
    year: 2026,
    mode: "Online",
    detail: "Score 85% (34/40) — GIS · Remote Sensing · Web Mapping · Spatial Analysis · GeoAI · Photogrammetry · Cartography",
    credentialId: "TG-2026-SJ8KE3RS",
    url: "https://techgeo.io/verify/TG-2026-SJ8KE3RS",
    image: certTechgeo,
  },
  {
    title: "GeoPNG Inaugural Congress",
    issuer: "PNG University of Technology — School of Surveying & Land Studies",
    date: "21–22 August 2025",
    year: 2025,
    mode: "In-Person",
    detail: "Active participation in the inaugural geospatial congress: 'Geospatial Solutions for a Sustainable Future'.",
    image: certGeopng,
  },
  {
    title: "WebGIS Ascension Workshop",
    issuer: "WebGIS Ascension",
    date: "17 July 2025",
    year: 2025,
    mode: "Online",
    detail: "Certificate of Completion — advanced WebGIS workflows and deployment.",
    url: "https://webgisascension.com",
    image: certWebgis,
  },
  {
    title: "Master of Philosophy in Geomatics",
    issuer: "PNG University of Technology",
    date: "17 April 2026",
    year: 2026,
    mode: "In-Person",
    detail: "Awarded by the Council of PNG Unitech — research focus on WebGIS for municipal building & land asset management.",
    image: certMphil,
  },
  {
    title: "Bachelor in Geographical Information Science (with Merit)",
    issuer: "PNG University of Technology",
    date: "3 April 2019",
    year: 2019,
    mode: "In-Person",
    detail: "Four-year undergraduate degree in GIScience — graduated with Merit.",
    image: certBachelor,
  },
  {
    title: "Advanced Professional Diploma in Information Technology",
    issuer: "PNG Unitech · DATEC Learning Centre",
    date: "2011",
    year: 2011,
    mode: "In-Person",
    detail: "One-year full-time advanced diploma — Permanent ID B00105.",
    credentialId: "201112L053",
    image: certApdit,
  },
  {
    title: "Associate Diploma in Information Technology",
    issuer: "DATEC Learning Centres",
    date: "2 July 2011",
    year: 2011,
    mode: "In-Person",
    detail: "One-year full-time foundation IT diploma — Permanent ID B00105.",
    credentialId: "201102L006",
    image: certAssociate,
  },
];

const experience = [
  {
    period: "2024 – Present",
    role: "GIS Specialist & WebGIS Developer",
    org: "Independent · Lae, PNG",
    points: [
      "Designed and deployed a WebGIS platform for municipal building and land asset management in Lae.",
      "Integrated Mapbox dashboards with AI-assisted spatial querying for non-technical decision-makers.",
    ],
  },
  {
    period: "2022 – 2024",
    role: "Geospatial Analyst — WaSH & Community Mapping",
    org: "NGO & Development Sector",
    points: [
      "Led WaSH scoping assessments using CommCare mobile data collection across rural PNG.",
      "Produced E-Coffee community maps supporting smallholder farmer livelihoods.",
    ],
  },
  {
    period: "2019 – 2022",
    role: "Spatial Analyst — Environment & Resources",
    org: "Research & Consulting",
    points: [
      "Groundwater potential mapping for East New Britain using MCDA & AHP-weighted remote sensing.",
      "LULC change detection, NDVI monitoring and geomorphology mapping for environmental baselines.",
    ],
  },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ About</p>
        <div className="mt-4 grid gap-10 md:grid-cols-[1fr_340px] items-start">
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
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-3xl" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-[oklch(0.22_0.04_180)] via-[oklch(0.18_0.02_200)] to-[oklch(0.16_0.018_200)]">
              <img
                src={profilePhoto}
                alt="Portrait of Hejumacla T. Oboko, GIS Specialist"
                width={1024}
                height={1280}
                className="block w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                <div className="font-display text-base font-semibold">Hejumacla T. Oboko</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary mt-1">GIS Specialist · Lae, PNG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research interests */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center gap-3">
          <Compass size={18} className="text-primary" />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Research interests</p>
        </div>
        <h2 className="mt-3 font-display text-3xl font-semibold">Where my work focuses</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {researchInterests.map((r) => (
            <span
              key={r}
              className="text-sm rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-foreground hover:border-primary/70 transition-colors"
            >
              {r}
            </span>
          ))}
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

      {/* Resume */}
      <ResumeSection />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold">Education</h2>
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
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Research</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Publications & articles</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Peer-reviewed research and theses contributing to geospatial science in Papua New Guinea.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="surface-card p-7 hover-lift flex flex-col">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-secondary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Published · Journal Article</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
              Spatial Assessment of Groundwater Potential Zones of East New Britain Province, Papua New Guinea
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Undergraduate thesis research applying multi-criteria decision analysis (MCDA) and AHP-weighted remote sensing layers to delineate groundwater potential zones across East New Britain.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Groundwater", "Remote Sensing", "MCDA", "AHP"].map((t) => (
                <span key={t} className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">{t}</span>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-muted-foreground">
              PalArch's Journal of Archaeology of Egypt / Egyptology
            </p>
            <a
              href="https://archives.palarch.nl/index.php/jae/article/view/7248"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-5 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
            >
              Read publication <ExternalLink size={14} />
            </a>
          </article>

          <article className="surface-card p-7 hover-lift flex flex-col">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-secondary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Master's Thesis · 2025</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
              Integrating Web-Based GIS for Building and Land Asset Management System in Lae Urban Municipality
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Master of Philosophy research designing and deploying a production WebGIS platform for municipal property, infrastructure and land-asset management — combining spatial databases, dashboards and AI-assisted querying.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["WebGIS", "Asset Management", "Mapbox", "Urban GIS"].map((t) => (
                <span key={t} className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">{t}</span>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-muted-foreground">
              PNG University of Technology — School of Surveying & Land Studies
            </p>
            <span className="mt-auto pt-5 inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
              Available on request
            </span>
          </article>
        </div>
      </section>

      <BlogSection />

      <CertificationsSection />

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

function ResumeSection() {
  const handleDownload = () => {
    if (typeof window !== "undefined") window.print();
  };
  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-16 print-area">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Briefcase size={18} className="text-primary" />
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Resume</p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold">Professional experience</h2>
        </div>
        <button
          onClick={handleDownload}
          className="no-print inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          <Download size={16} /> Download resume (PDF)
        </button>
      </div>

      <div className="mt-8 surface-card p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start border-b border-border pb-6">
          <div>
            <div className="font-display text-2xl font-semibold">Hejumacla T. Oboko</div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mt-1">
              GIS Specialist · Geospatial Analyst · WebGIS Developer
            </div>
          </div>
          <div className="text-sm text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Lae, Morobe Province, PNG</div>
            <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /> oboko.hejumacla8@gmail.com</div>
            <div className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +675 7220 4015</div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {experience.map((x) => (
            <div key={x.role} className="grid gap-2 md:grid-cols-[160px_1fr]">
              <div className="font-mono text-xs text-secondary">{x.period}</div>
              <div>
                <div className="font-display text-lg font-semibold">{x.role}</div>
                <div className="text-sm text-muted-foreground">{x.org}</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"all" | "Online" | "In-Person">("all");
  const [year, setYear] = useState<"all" | number>("all");

  const years = useMemo(
    () => Array.from(new Set(certifications.map((c) => c.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certifications.filter((c) => {
      if (mode !== "all" && c.mode !== mode) return false;
      if (year !== "all" && c.year !== year) return false;
      if (q && !`${c.title} ${c.issuer} ${c.detail}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, mode, year]);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-16 print-area">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Credentials</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Certifications & workshops</h2>
        </div>
        <button
          onClick={handlePrint}
          className="no-print inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition"
        >
          <Printer size={16} /> Export as PDF
        </button>
      </div>

      {/* Filters */}
      <div className="no-print mt-8 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certifications…"
            aria-label="Search certifications"
            className="w-full rounded-md border border-border bg-input pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex rounded-md border border-border overflow-hidden text-sm">
          {(["all", "Online", "In-Person"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-2 transition-colors ${mode === m ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {m === "all" ? "All modes" : m}
            </button>
          ))}
        </div>
        <select
          value={String(year)}
          onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))}
          aria-label="Filter certifications by year"
          className="rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
        >
          <option value="all">All years</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <p className="no-print mt-3 font-mono text-[11px] text-muted-foreground">
        Showing {filtered.length} of {certifications.length}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {filtered.map((c) => (
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
              <div className="mt-auto pt-3 border-t border-border space-y-2">
                {c.credentialId && (
                  <p className="font-mono text-[10px] text-muted-foreground">ID: {c.credentialId}</p>
                )}
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
                  >
                    Verify credential <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                    Verification on request
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="md:col-span-3 surface-card p-10 text-center text-sm text-muted-foreground">
            No certifications match those filters.
          </div>
        )}
      </div>
    </section>
  );
}
