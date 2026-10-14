import { siteConfig, socials } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";

const iconFor = (label: string) => (label === "GitHub" ? <GithubIcon /> : <LinkedinIcon />);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold tracking-tight">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-text hover:text-text"
            >
              {iconFor(s.label)}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email Satyam Kumar"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-text hover:text-text"
          >
            <MailIcon />
          </a>
          <a
            href="#home"
            className="ml-2 text-sm font-semibold text-muted transition-colors hover:text-text"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
