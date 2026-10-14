import type { Credential, EducationItem, ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Walsis eConnect India Pvt Ltd",
    role: "Full-Stack Developer",
    period: "Dec 2025 – Present",
    logo: "/images/logos/walsis-logo.webp",
    highlights: [
      "Build responsive, reusable UI with React.js, Next.js and Tailwind CSS.",
      "Design and integrate secure REST APIs with Node.js and Express.js, backed by MongoDB.",
      "Ship user-focused features such as customizable workflows, real-time interactions and performance tracking.",
      "Improve state management with React Hooks, Context API and Redux, and keep the codebase modular and reusable.",
    ],
    stack: ["React", "Next.js", "Three.js", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "CommuSync",
    role: "Full-Stack Developer Intern",
    period: "Jul 2025 – Oct 2025",
    logo: "/images/logos/commusync-logo.webp",
    highlights: [
      "Built reusable, responsive React and Tailwind CSS components for a scalable web platform.",
      "Designed and integrated secure REST APIs with Node.js and Express.js.",
      "Refactored server logic for modularity and reuse, and managed state with Hooks and Context API.",
    ],
    stack: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "Aagaaz Training Centre",
    role: "Full-Stack Developer Intern",
    period: "May 2025 – Jun 2025",
    logo: "/images/logos/aagaaz.webp",
    highlights: [
      "Developed web applications with the MERN stack across frontend and backend.",
      "Collaborated in an agile team to build responsive UI and REST APIs.",
    ],
    stack: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "NIELIT Patna",
    role: "Data Science Intern",
    period: "Nov 2023 – Dec 2023",
    logo: "/images/logos/nielit.webp",
    highlights: [
      "Cleaned and analysed real-world datasets and built machine learning models in Python.",
      "Worked with Pandas, NumPy and Scikit-learn, including data visualization.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
];

export const education: EducationItem[] = [
  {
    school: "Netaji Subhas Institute of Technology, Patna",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sept 2023 – July 2026",
    grade: "8.6 CGPA",
    logo: "/images/logos/nsitlogo.webp",
  },
  {
    school: "Government Polytechnic Munger",
    degree: "Diploma in Electrical Engineering",
    period: "Sept 2020 – Aug 2023",
    grade: "8.4 CGPA",
    logo: "/images/logos/polytecniclogo.webp",
  },
];

export const achievements: Credential[] = [
  {
    title: "Topper of the batch in B.Tech",
    description: "Secured 1st rank in B.Tech.",
    image: "/images/certs/award.webp",
    imageAlt: "B.Tech batch topper award",
  },
  {
    title: "Best Event Coordinator, annual tech fest",
    description: "Awarded Best Coordinator for organising the college annual tech fest.",
    image: "/images/certs/best-cordinator.webp",
    imageAlt: "Best coordinator award certificate",
  },
  {
    title: "1st rank in Diploma",
    description: "Secured 1st rank in the Diploma in Electrical Engineering.",
    image: "/images/certs/gpmranker.webp",
    imageAlt: "Diploma first rank certificate",
  },
];

export const certifications: Credential[] = [
  {
    title: "Node.js — NamasteDev",
    description: "Backend development with Node.js, Express, MongoDB, AWS, Razorpay, WebSockets and cron jobs.",
    image: "/images/certs/node-js.webp",
    imageAlt: "Node.js certificate from NamasteDev",
  },
  {
    title: "React — NamasteDev",
    description: "Hooks, Redux, routing, performance optimization and testing for production React apps.",
    image: "/images/certs/react-certificate.webp",
    imageAlt: "React certificate from NamasteDev",
  },
  {
    title: "JavaScript — NamasteDev",
    description: "Execution context, closures, the event loop, promises and asynchronous JavaScript.",
    image: "/images/certs/javascript.webp",
    imageAlt: "JavaScript certificate from NamasteDev",
  },
  {
    title: "HTML, CSS & Responsive Design — Udemy",
    description: "Responsive layouts with Flexbox, Grid and media queries.",
    image: "/images/certs/html-css.webp",
    imageAlt: "HTML and CSS certificate from Udemy",
  },
];
