import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">Hejumacla T. Oboko</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            GIS Specialist · Geospatial Analyst · WebGIS Developer.
            Harnessing the Power of Where for sustainable impact.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary" /> 4 Mile, Eagle Street, Stage 2, Lae, Morobe Province, PNG</div>
          <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +675 7220 4015 · 8244 8573 · 7208 4084</div>
          <div className="flex items-center gap-2"><Mail size={16} className="text-primary" /> oboko.hejumacla8@gmail.com</div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hejumacla T. Oboko — GIS Portfolio
      </div>
    </footer>
  );
}
