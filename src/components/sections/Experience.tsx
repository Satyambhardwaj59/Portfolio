import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
        />
        <ol className="space-y-px overflow-hidden rounded-3xl border border-border bg-border">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="reveal bg-bg p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1.5">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="h-auto max-h-9 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <p className="t-label text-muted">{job.period}</p>
                </div>
                <div>
                  <h3 className="t-h3">{job.role}</h3>
                  <p className="mt-1 font-medium text-accent">{job.company}</p>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted marker:text-border">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.stack.map((t) => (
                      <li key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
