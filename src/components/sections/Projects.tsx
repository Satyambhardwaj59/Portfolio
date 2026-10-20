import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, GithubIcon } from "@/components/ui/Icons";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo (opens in a new tab)`}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold transition-colors hover:text-accent"
        >
          Live demo <ArrowUpRight width={16} height={16} />
        </a>
      ) : null}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-text"
        >
          <GithubIcon width={16} height={16} /> Code
        </a>
      ) : null}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-300 hover:border-muted/60">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 34rem, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="t-h3">{project.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
        {project.note ? <p className="mt-3 text-xs text-muted">{project.note}</p> : null}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.stack.map((t) => (
            <li key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-border pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          description="Full-stack applications and smaller builds, each with source code and, where available, a live demo."
        />

        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3 md:gap-8">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>

        <h3 className="t-h3 reveal mt-20 mb-6">More projects</h3>
        <ul className="divide-y divide-border border-y border-border">
          {more.map((p) => (
            <li
              key={p.slug}
              className="grid gap-3 py-5 md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-8"
            >
              <div>
                <p className="font-semibold">{p.title}</p>
                {p.note ? <p className="mt-1 text-xs text-muted">{p.note}</p> : null}
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-2 text-xs font-medium text-muted/80">{p.stack.join(" · ")}</p>
              </div>
              <ProjectLinks project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
