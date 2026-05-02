// ──────────────────────────────────────────────
// Portfolio Data — Single source of truth
// ──────────────────────────────────────────────

export const PERSONAL = {
  name: "Roshan Neupane",
  title: "Software Engineer",
  tagline: "Building scalable web experiences with Next.js",
  email: "roshanneupane676@gmail.com",
  linkedin: "https://www.linkedin.com/in/roshan-neupane-945209272/",
  github: "https://github.com/roshancom",
  location: "Nepal 🇳🇵",
  education: "BCA — Tribhuvan University",
  resumeUrl: "#contact",
} as const;

export const TYPEWRITER_WORDS = [
  "Software Engineer",
  "Next.js Expert",
  "Frontend Architect",
] as const;

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Test Coverage", value: 65, suffix: "%+" },
] as const;

export type SkillCategory = {
  title: string;
  skills: string[];
  colSpan?: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js"],
    colSpan: "md:col-span-2",
  },
  {
    title: "State & Data",
    skills: ["TanStack Query", "Zustand", "Context API"],
  },
  {
    title: "Forms & Validation",
    skills: ["React Hook Form", "Formik", "Yup", "Zod"],
  },
  {
    title: "UI / Styling",
    skills: ["Tailwind CSS", "Styled Components", "CSS Modules", "TanStack Table"],
    colSpan: "md:col-span-2",
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "Unit Testing", "Agile Methodology"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "ClickUp", "Chrome DevTools"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Hazesoft Pvt Ltd",
    period: "Aug 2023 — Present",
    bullets: [
      "Developed responsive and dynamic user interfaces that fetch data from RESTful APIs.",
      "Wrote unit tests to ensure features worked correctly and to maintain codebase stability, achieving over 65% test coverage.",
      "Translated client and user requirements into clean, easy-to-use frontend features.",
      "Collaborated effectively in an Agile team of 10, contributing to sprint planning and prioritization for international clients.",
    ],
  },
  {
    role: "Frontend Developer Trainee",
    company: "Hazesoft Pvt Ltd",
    period: "Feb 2023 — Jul 2023",
    bullets: [
      "Gained foundational knowledge in HTML, CSS, JavaScript, and React.",
      "Built responsive web pages and reusable components using modern UI frameworks.",
      "Collaborated with senior developers, incorporating feedback from code reviews.",
      "Utilized GitLab for version control and team collaboration.",
      "Practiced API integration for dynamic data display.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  focus: string;
  tags: string[];
  image: string;
  category: "ecommerce" | "featured";
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: "arbetsbyxor",
    title: "Arbetsbyxor",
    description: "Workwear store for professionals",
    focus: "Product-focused ecommerce design with category navigation for professional workwear and equipment.",
    tags: ["Ecommerce", "Workwear", "Product Catalog"],
    image: "/projects/arbetsbyxor.png",
    category: "ecommerce",
    link: "https://www.arbetsbyxor.com/"
  },
  {
    id: "zonefloorball",
    title: "Zonefloorball",
    description: "Specialized gear store featuring Nike collaborations.",
    focus: "Clean design and custom UI components.",
    tags: ["Next.js", "Lipscore", "GTM"],
    image: "/projects/zonefloorball.webp",
    category: "ecommerce",
    link: "https://zonefloorball.com/se/en"
  },
  {
    id: "sailracing",
    title: "Sail Racing",
    description: "High-quality Swedish sportswear site.",
    focus: "Technical excellence and robust Google Tag Manager integration.",
    tags: ["Styled Components", "Next.js", "GTM"],
    image: "/projects/sailracing.webp",
    category: "ecommerce",
    link: "https://sailracing.com/se/en"
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const TERMINAL_LINES: { command: string; output: string }[] = [
  { command: "who am i", output: "Roshan Neupane" },
  { command: "cat education.txt", output: "BCA — Tribhuvan University" },
  { command: "echo $LOCATION", output: "Nepal" },
  {
    command: "cat skills.txt | head -3",
    output: "Next.js • React • TypeScript",
  },
];
