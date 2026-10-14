import Image from "next/image";
import { achievements, certifications, education } from "@/data/experience";
import type { Credential } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CredentialCard({ item }: { item: Credential }) {
  return (
    <li className="reveal overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[4/3] bg-surface-2">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="p-5">
        <h4 className="font-semibold leading-snug">{item.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </li>
  );
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="education-title"
          eyebrow="Education & achievements"
          title="Academics and recognition"
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <li key={e.school} className="reveal flex gap-5 rounded-3xl border border-border bg-surface p-6 md:p-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-1.5">
                <Image src={e.logo} alt={`${e.school} logo`} width={44} height={44} className="h-auto max-h-11 w-auto object-contain" />
              </div>
              <div>
                <p className="t-label text-muted">{e.period}</p>
                <h3 className="t-h3 mt-2">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.school}</p>
                <p className="mt-3 font-semibold text-accent">{e.grade}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="t-h3 reveal mt-16 mb-6">Achievements</h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <CredentialCard key={a.title} item={a} />
          ))}
        </ul>

        <h3 className="t-h3 reveal mt-16 mb-6">Certifications</h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <CredentialCard key={c.title} item={c} />
          ))}
        </ul>
      </div>
    </section>
  );
}
