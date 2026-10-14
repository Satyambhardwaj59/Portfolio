"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
      active === id ? "text-text" : "text-muted hover:text-text"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="text-base font-bold tracking-tight" onClick={() => setOpen(false)}>
          {siteConfig.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-text md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg md:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === item.id ? "true" : undefined}
              className={`flex min-h-12 items-center border-b border-border/60 text-lg font-semibold ${
                active === item.id ? "text-accent" : "text-text"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-ink"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
