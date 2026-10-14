# Satyam Kumar: Portfolio

Personal developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

## Stack

| Tool | Version |
| --- | --- |
| Next.js | 16.4.0 |
| React / React DOM | 19.3.0 |
| TypeScript | 6.0.3 |
| Tailwind CSS | 4.3.3 |
| ESLint | 9.x with `eslint-config-next` 16.4.0 |

Requires Node.js 20.9 or newer.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm start          # serve the production build
```

## Project structure

```text
src/
  app/            layout, page, globals.css, robots, sitemap, icons, Open Graph image
  components/
    layout/       Navbar (client), Footer
    sections/     Hero, About, Projects, Skills, Experience, Education, Contact, ContactForm (client)
    ui/           Button, SectionHeading, Icons, RevealOnScroll (client)
  data/           site.ts, projects.ts, skills.ts, experience.ts  <- edit content here
  types/          shared TypeScript types
public/images/    optimized WebP project, certificate, logo and profile images
```

All portfolio content lives in `src/data`. Add a project by appending an entry to `projects.ts` and putting its screenshot in `public/images/projects/`.

## Environment variables

Copy `.env.example` to `.env.local`. All values are optional.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, Open Graph, sitemap, robots. Defaults to the existing Vercel URL. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` | EmailJS identifiers for the contact form. Defaults to the values from the original site. |

EmailJS identifiers are public by design; no server secrets are used.

## Deployment

Deploy on Vercel by importing the repository (framework preset: Next.js). Set `NEXT_PUBLIC_SITE_URL` to your production domain if it changes. Any Node host works with `npm run build && npm start`.

## Notes

- Montserrat is self-hosted (`src/app/fonts`), so builds do not need network access to Google Fonts.
- Animations respect `prefers-reduced-motion`.
