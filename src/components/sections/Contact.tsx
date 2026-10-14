import { siteConfig, socials } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "@/components/ui/Icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's talk about your next project."
          description="Open to full-stack and frontend opportunities. Send a message or reach out directly."
        />
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <ul className="reveal divide-y divide-border border-y border-border self-start">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex min-h-14 items-center justify-between gap-4 py-4 font-medium transition-colors hover:text-accent"
              >
                <span className="break-all">{siteConfig.email}</span>
                <ArrowUpRight className="shrink-0" />
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex min-h-14 items-center justify-between gap-4 py-4 font-medium transition-colors hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="shrink-0" />
                </a>
              </li>
            ))}
          </ul>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
