interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="reveal mb-12 max-w-2xl md:mb-16">
      <p className="t-label mb-4 text-accent">{eyebrow}</p>
      <h2 id={id} className="t-h2">
        {title}
      </h2>
      {description ? <p className="t-lead mt-5">{description}</p> : null}
    </header>
  );
}
