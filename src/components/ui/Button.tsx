import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink border-accent hover:bg-text hover:border-text",
  secondary:
    "bg-transparent text-text border-border hover:border-text hover:bg-surface",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
