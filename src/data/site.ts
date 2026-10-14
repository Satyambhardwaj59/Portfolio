import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Satyam Kumar",
  role: "Frontend & Full-Stack Developer",
  title: "Satyam Kumar | Frontend & Full-Stack Developer",
  description:
    "Satyam Kumar is a frontend and full-stack developer building fast, accessible web applications with React, Next.js, TypeScript, Node.js, Express and MongoDB.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-satyam-kumars-projects-4080f490.vercel.app").replace(/\/$/, ""),
  email: "satyambhardwaj59@gmail.com",
  resume:
    "https://drive.google.com/file/d/1WvwqcT2rH4fppgMiX0kkB50lGYqoQ-8-/view?usp=sharing",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Satyambhardwaj59" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/satyam-kumar-297a3b27b" },
];

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const emailJs = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_lcdthtk",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_t6ernn3",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "KsiNz4vHfkOWMVBa4",
};
