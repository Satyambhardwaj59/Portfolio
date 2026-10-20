import Image from "next/image";
import { siteConfig, socials } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { HeroRole } from "@/components/sections/HeroRole";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.7fr_1fr] md:gap-16">
        <div>
          <p className="hero-in t-label mb-6 text-accent" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="sr-only">Software Engineer specializing in frontend and full-stack development</span>
            <HeroRole />
          </p>
          <h1 id="hero-title" className="t-display">
            I build software that makes the web feel effortless.
          </h1>
          <p className="hero-in t-lead mt-8 max-w-xl" style={{ "--i": 2 } as React.CSSProperties}>
            I&apos;m Satyam Kumar, a software engineer creating fast, accessible web applications with
            React, Next.js, TypeScript, Node.js and MongoDB.
          </p>
          <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href={siteConfig.resume} variant="secondary" external>
              Download Resume
            </ButtonLink>
          </div>
          <ul className="hero-in mt-8 flex items-center gap-3" style={{ "--i": 4 } as React.CSSProperties}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-text hover:text-text"
                >
                  {s.label === "GitHub" ? <GithubIcon /> : <LinkedinIcon />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/satyam.webp"
              alt="Portrait of Satyam Kumar"
              width={451}
              height={553}
              priority
              sizes="(min-width: 768px) 28rem, 20rem"
              className="h-auto w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
