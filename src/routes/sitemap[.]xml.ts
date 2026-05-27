import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects } from "@/lib/projects";

const BASE_URL = "https://hejumacla-portfolio.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/projects", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
          ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: "0.8" })),
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
