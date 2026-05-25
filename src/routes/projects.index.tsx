import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Hejumacla T. Oboko" },
      { name: "description", content: "GIS, WebGIS, remote sensing and field mapping projects across Papua New Guinea." },
      { property: "og:title", content: "GIS Projects — Hejumacla T. Oboko" },
      { property: "og:description", content: "Selected geospatial case studies across PNG." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Projects</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold">Case studies from the field</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Geospatial work spanning municipal asset management, WaSH scoping, groundwater modeling and community agriculture across Papua New Guinea.
      </p>

      <div className="mt-12 space-y-6">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="surface-card overflow-hidden grid md:grid-cols-[1.1fr_1fr] hover-lift group"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-muted">
              <img src={p.cover} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 font-mono text-xs text-foreground/80 bg-background/60 backdrop-blur px-2 py-1 rounded">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.sdgs.map((s) => (
                  <span key={s} className="rounded-full bg-secondary/15 text-secondary text-xs font-mono px-2.5 py-1">{s}</span>
                ))}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold flex items-start gap-2">
                {p.title}
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition" size={20} />
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.challenge}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
