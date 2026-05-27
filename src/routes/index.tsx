import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Layers, Database, Satellite, Trees, Building2, Waves, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import pngLandscape from "@/assets/png-landscape.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hejumacla T. Oboko — An enthusiast GIS Specialist & WebGIS Developer" },
      { name: "description", content: "Results-oriented GIS Professional building WebGIS platforms, spatial analyses and mobile data workflows across Papua New Guinea." },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: Layers, title: "GIS Software", items: "ArcGIS · ArcGIS Pro · QGIS · Global Mapper" },
  { icon: Database, title: "WebGIS & Programming", items: "Mapbox · Web Mapping Apps · Dashboards" },
  { icon: Satellite, title: "Remote Sensing", items: "LULC · NDVI · Groundwater Modeling" },
  { icon: MapPin, title: "Field & Analysis", items: "CommCare · GPS · MCDA · AHP" },
];

function Index() {
  const featured = projects[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for GIS consulting · Lae, PNG
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            The Power of <span className="text-gradient">Where</span>, applied to real problems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm <span className="text-foreground font-medium">Hejumacla T. Oboko</span> — a GIS Specialist building WebGIS platforms, spatial analyses and mobile field workflows that move communities, municipalities and ecosystems toward the SDGs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              View projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium hover:border-primary transition">
              Get in touch
            </Link>
          </div>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["10+", "Years in GIS"],
              ["17", "Districts mapped"],
              ["1,847+", "Properties in WebGIS"],
              ["6", "SDGs advanced"],
            ].map(([v, l]) => (
              <div key={l} className="border-l-2 border-primary/60 pl-4">
                <dt className="font-display text-3xl font-semibold">{v}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Capabilities</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Core technical skills</h2>
          </div>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">Full profile <ArrowRight size={14} /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="surface-card p-6 hover-lift">
              <Icon className="text-primary" size={22} />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Featured project</p>
        <div className="mt-4 surface-card overflow-hidden grid md:grid-cols-2">
          <div className="relative aspect-[16/11] md:aspect-auto">
            <img src={featured.cover} alt={featured.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap gap-2">
              {featured.sdgs.map((s) => (
                <span key={s} className="rounded-full bg-secondary/15 text-secondary text-xs font-mono px-2.5 py-1">{s}</span>
              ))}
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold">{featured.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{featured.subtitle}</p>
            <p className="mt-5 text-sm leading-relaxed">{featured.solution}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span key={t} className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">{t}</span>
              ))}
            </div>
            <Link to="/projects/$slug" params={{ slug: featured.slug }} className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
              Read case study <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* All projects */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Selected work</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Projects in the field</h2>
          </div>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">All projects <ArrowRight size={14} /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="surface-card overflow-hidden hover-lift group block">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {p.sdgs.map((s) => (
                    <span key={s} className="text-[10px] font-mono uppercase tracking-wider text-secondary">{s}</span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PNG Vision */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={pngLandscape}
          alt="Aerial view of Papua New Guinea — rainforest mountains meeting the Pacific coastline"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-secondary">/ Papua New Guinea</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              Mapping a nation of <span className="text-gradient">extraordinary diversity</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              From the volcanic ridges of New Britain to the Sepik wetlands and the urban frontier of Lae —
              Papua New Guinea is one of the most biologically and culturally rich landscapes on Earth.
              Yet much of it remains under-mapped. GIS is how we close that gap, turning terrain, rivers,
              villages and assets into the spatial intelligence our country needs to grow sustainably.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building2, title: "Smart municipalities", body: "WebGIS for land, property and revenue management in fast-growing urban centres." },
              { icon: Trees, title: "Forest & land care", body: "Monitoring logging, oil-palm expansion and NDVI change to protect customary land." },
              { icon: Waves, title: "Water & WaSH", body: "Mapping groundwater potential and rural water infrastructure for healthier communities." },
              { icon: ShieldCheck, title: "Climate resilience", body: "Hazard, drainage and exposure mapping to prepare provinces for a changing climate." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="surface-card p-6 hover-lift backdrop-blur-sm bg-card/70">
                <Icon className="text-primary" size={22} />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Philosophy</p>
        <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-snug">
          "GIS is not just about making maps; it's about providing the <span className="text-gradient">spatial intelligence</span> necessary to build sustainable cities, protect our natural resources, and empower local communities through data-driven decisions."
        </blockquote>
      </section>
    </>
  );
}
