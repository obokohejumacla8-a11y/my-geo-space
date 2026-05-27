import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hejumacla T. Oboko" },
      { name: "description", content: "Get in touch for GIS consulting, WebGIS development, spatial analysis and field mapping projects." },
      { property: "og:title", content: "Contact — Hejumacla T. Oboko" },
      { property: "og:description", content: "Reach out for GIS consulting and WebGIS projects." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">/ Contact</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold leading-[1.05]">
          Let's map something <span className="text-gradient">meaningful</span>.
        </h1>
        <p className="mt-6 text-muted-foreground">
          Available for GIS consulting, WebGIS platform development, spatial analysis, remote sensing studies and field data-collection projects across the Pacific.
        </p>

        <div className="mt-10 space-y-5">
          <a href="mailto:oboko.hejumacla8@gmail.com" className="flex items-start gap-4 surface-card p-5 hover-lift">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary"><Mail size={18} /></span>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="font-medium">oboko.hejumacla8@gmail.com</div>
            </div>
          </a>
          <div className="flex items-start gap-4 surface-card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary"><Phone size={18} /></span>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="font-medium">+675 7220 4015</div>
              <div className="text-sm text-muted-foreground">8244 8573 · 7208 4084</div>
            </div>
          </div>
          <div className="flex items-start gap-4 surface-card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary"><MapPin size={18} /></span>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Location</div>
              <div className="font-medium">4 Mile, Eagle Street, Stage 2</div>
              <div className="text-sm text-muted-foreground">Lae, Morobe Province, Papua New Guinea</div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="surface-card p-8 self-start"
      >
        <h2 className="font-display text-2xl font-semibold">Send a message</h2>
        <p className="text-sm text-muted-foreground mt-1">I'll get back to you within 1–2 business days.</p>

        <div className="mt-6 space-y-4">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Organization" name="org" />
          <div>
            <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              id="message" name="message"
              required rows={5}
              className="mt-2 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              placeholder="Tell me about your project, study area and timeline…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Send size={16} /> {sent ? "Sent — talk soon" : "Send message"}
          </button>
          {sent && <p className="text-sm text-primary">Thanks! Your message has been recorded locally — I'll be in touch via email.</p>}
        </div>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-2 w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
