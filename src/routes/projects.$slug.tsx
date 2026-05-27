import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Hejumacla T. Oboko` },
          { name: "description", content: loaderData.project.metaDescription ?? loaderData.project.challenge },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.metaDescription ?? loaderData.project.challenge },
          { property: "og:image", content: loaderData.project.cover },
          { property: "og:type", content: "article" },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: loaderData.project.title,
              description: loaderData.project.metaDescription ?? loaderData.project.challenge,
              image: loaderData.project.cover,
              locationCreated: loaderData.project.location,
              keywords: loaderData.project.tags.join(", "),
              author: {
                "@type": "Person",
                name: "Hejumacla T. Oboko",
              },
            }),
          },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary">← All projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const data = Route.useLoaderData() as { project: import("@/lib/projects").Project };
  const { project } = data;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      <div className="mx-auto max-w-5xl px-6 pt-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.sdgs.map((s) => (
            <span key={s} className="rounded-full bg-secondary/15 text-secondary text-xs font-mono px-2.5 py-1">{s}</span>
          ))}
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-primary" /> {project.location}
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-10">
        <div className="surface-card overflow-hidden aspect-[16/9]">
          <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 mt-16 grid md:grid-cols-3 gap-10">
        <aside className="space-y-6 md:sticky md:top-24 self-start">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Tools</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {project.tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Tags</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs font-mono border border-border rounded px-2 py-1">{t}</span>
              ))}
            </div>
          </div>
          {project.link && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Link</h3>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary hover:underline break-all">
                Visit <ExternalLink size={14} />
              </a>
            </div>
          )}
        </aside>

        <div className="md:col-span-2 space-y-10">
          <Section title="The challenge">{project.challenge}</Section>
          <Section title="The solution">{project.solution}</Section>
          <Section title="Impact">{project.impact}</Section>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 mt-20">
          <h2 className="font-display text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((g) => (
              <figure key={g.src} className="surface-card overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <figcaption className="px-5 py-3 text-xs text-muted-foreground border-t border-border">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Next */}
      <div className="mx-auto max-w-6xl px-6 mt-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">/ Continue exploring</p>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="surface-card overflow-hidden hover-lift group grid grid-cols-[120px_1fr]">
              <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="p-5">
                <h4 className="font-display font-semibold">{p.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold border-l-2 border-primary pl-3">{title}</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
