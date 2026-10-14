import { SectionHeading } from "@/components/ui/SectionHeading";

const facts = [
  { label: "Focus", value: "Frontend and full-stack web applications" },
  { label: "Stack", value: "MERN, with Next.js and TypeScript" },
  { label: "Education", value: "B.Tech in Computer Science, NSIT Patna" },
  { label: "Now", value: "Full-Stack Developer at Walsis eConnect" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="About" title="Clean code, careful interfaces." />
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a MERN stack developer who enjoys the whole path from a design to a working
              feature: responsive interfaces in React and Next.js, REST APIs in Node.js and
              Express, and data modelled in MongoDB.
            </p>
            <p>
              I&apos;ve built full applications with authentication, role-based dashboards,
              payments and real-time features, and I&apos;ve worked in teams through internships
              and my current full-stack role. I care about usability, maintainable structure and
              performance.
            </p>
            <p>
              I keep learning through certifications and projects, and I like working through
              problems until the solution is simple. I topped my B.Tech batch and my diploma
              programme.
            </p>
          </div>
          <dl className="reveal divide-y divide-border border-y border-border">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                <dt className="t-label pt-1 text-muted">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
