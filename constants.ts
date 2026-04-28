import { Experience, Skill, Education } from './types';

export const PERSONAL_INFO = {
  name: "Ting Teck Chuan",
  title: "Software Developer",
  email: "tingteckchuan@gmail.com",
  phone: "+60 1160882788",
  location: "Malaysia",
  summary: "Backend Engineer with 5+ years of experience building and optimizing backend systems across enterprise, fintech, and government domains. Strong focus on Java & Spring Boot, API development, and performance optimization for data‑intensive workflows.\n\nExperienced in debugging production issues end‑to‑end (server health, logs, database behavior, and application logic), improving slow systems, and stabilizing legacy codebases. Comfortable operating in startup, scale‑up, and MNC environments, frequently trusted to jump into unfamiliar projects and resolve critical backend issues.\n\nActively building side projects (real users, TestFlight release), with hands‑on exposure to WebSocket‑based multiplayer systems, and ongoing self‑driven learning in LLMs, RAG, and fine‑tuning.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "pymsoft",
    type: "professional" as const,
    company: "Pymsoft Sdn Bhd",
    role: "Software Developer",
    duration: "Oct 2023 – Present",
    techStack: ["Java", "Spring Boot", "JPA", "JMeter", "PostgreSQL"],
    description: [
      "Contributed to and led backend development for government‑related systems, working within a legacy JSF‑based stack while modernizing performance‑critical components.",
      "Designed backend code skeletons and module structures from scratch, aligning technical implementation with business and regulatory requirements.",
      "Improved system responsiveness by reducing unnecessary AJAX requests, significantly lowering client‑server round trips and page load latency.",
      "Diagnosed and resolved performance bottlenecks involving pagination inefficiencies, ORM misuse, eager vs lazy loading, and transaction overhead.",
      "Eliminated common N+1 query issues and simplified overly complex query logic to improve maintainability and runtime efficiency.",
      "Researched and applied asynchronous processing patterns to balance throughput and CPU usage.",
      "Participated in on‑site requirement discussions and production support, gaining exposure to real‑world issue triage and stakeholder communication.",
      "Conducted stress testing using JMeter and monitored runtime behavior with JavaMelody."
    ]
  },
  {
    id: "hitachi",
    type: "professional" as const,
    company: "Hitachi Ebworx Sdn Bhd",
    role: "Application Engineer",
    duration: "Sep 2022 – Sep 2023",
    techStack: ["Spring Boot", "Spring Batch", "PostgreSQL", "JUnit", "SonarQube"],
    description: [
      "Operated as a backend problem‑solver across multiple concurrent projects, frequently assigned to resolve API‑level defects and system bugs.",
      "Optimized a critical bank end‑of‑day transaction processing pipeline, handling large transaction files by:",
      "Reading and staging data into temporary tables",
      "Performing high‑volume bulk inserts into core tables",
      "Replacing inefficient insert logic with precompiled parameterized SQL statements (prepared statements), significantly reducing execution time and database overhead.",
      "Gained strong exposure to Spring Batch, focusing on performance tuning for large datasets and batch workloads.",
      "Implemented unit tests, addressed code smells, and improved code quality using JUnit, Jacoco, and SonarQube."
    ]
  },
  {
    id: "ayp",
    type: "professional" as const,
    company: "AYP HR Group Sdn Bhd",
    role: "Software Engineer",
    duration: "Feb 2021 – Aug 2022",
    techStack: ["Laravel", "PHP", "JavaScript", "MySQL"],
    description: [
      "Developed full-stack web applications using Laravel (PHP) and JavaScript.",
      "Conducted code reviews adhering to strict company standards.",
      "Presented technical solutions during sprint planning sessions."
    ]
  },
  {
    id: "b2be",
    type: "professional" as const,
    company: "B2BE GSS Sdn Bhd",
    role: "Intern Developer",
    duration: "Dec 2019 – Feb 2020",
    techStack: ["C", "Vue.js", "HTML/CSS"],
    description: [
      "Implemented business transaction documents in C programming.",
      "Developed front-end web portals using Vue.js based on precise design specifications."
    ]
  },
  {
    id: "matchey",
    type: "personal" as const,
    platform: "ios" as const,
    company: "Matchey",
    role: "Solo Developer",
    duration: "2024 – Present",
    image: "/app.PNG",
    link: "https://apps.apple.com/my/app/matchey/id6758370075",
    techStack: ["Flutter", "Dart", "WebSocket", "Firebase"],
    description: [
      "A communication app for working professionals to connect and network with one another.",
      "Live on the App Store with real users.",
      "Built real-time messaging with WebSocket-based multiplayer architecture.",
      "Sole developer — handled design, backend, and mobile client end-to-end."
    ]
  },
  {
    id: "devkerja",
    type: "personal" as const,
    platform: "web" as const,
    company: "Devkerja",
    role: "Solo Developer",
    duration: "2024 – Present",
    link: "https://devkerja.com",
    techStack: ["TypeScript", "WebSocket", "GitHub API"],
    description: [
      "A collaborative coding platform that brings live code editing, GitHub integration, and built-in calling into one unified workspace.",
      "Eliminates context-switching by keeping everyone on the same surface — open one session, stay focused.",
      "Features GitHub repository integration to work with real files and branches directly in the editor.",
      "Embedded floating call window so teams can communicate without leaving the coding environment."
    ]
  },
  {
    id: "fitness-app",
    type: "personal" as const,
    platform: "ios" as const,
    company: "Fitness Manager",
    role: "Solo Developer",
    duration: "2025 – Present",
    image: "/app1.PNG",
    link: "https://testflight.apple.com/join/dx7zdwdw",
    techStack: ["Flutter", "Dart", "Firebase"],
    description: [
      "An all-in-one fitness client management app for personal trainers.",
      "Currently in TestFlight beta — join via the link.",
      "Manages client progress, workout plans, and session scheduling in one place.",
      "Sole developer — handled design, backend, and mobile client end-to-end."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Java / Spring Boot", level: 85, category: "Backend", icon: ["java", "spring"] },
  { name: "PostgreSQL / SQL", level: 80, category: "Backend", icon: ["postgres"] },
  { name: "APIs & Services", level: 60, category: "Backend", icon: ["postman"] },
  { name: "Python", level: 75, category: "Languages", icon: ["python"] },
  { name: "Flutter", level: 50, category: "Frontend", icon: ["flutter"] },
  { name: "Git / Version Control", level: 75, category: "Tools", icon: ["git"] },
  { name: "Linux", level: 60, category: "Tools", icon: ["linux"] },
  { name: "JMeter / Testing", level: 30, category: "Tools", icon: [], fallback: "gauge" },
  { name: "Codex", level: 70, category: "AI", icon: ["/codex-icon.svg"] },
  { name: "Claude Code", level: 75, category: "AI", icon: ["https://cdn.simpleicons.org/claude/D97757"] },
  { name: "Firebase", level: 60, category: "Backend", icon: ["firebase"] },
  { name: "Supabase", level: 60, category: "Backend", icon: ["supabase"] },
  { name: "Stripe", level: 50, category: "Backend", icon: ["https://cdn.simpleicons.org/stripe/635BFF"] },
  { name: "Render", level: 55, category: "Tools", icon: ["https://cdn.simpleicons.org/render/46E3B7"] },
];

export const EDUCATION: Education[] = [
  {
    institution: "Monash University",
    degree: "Bachelor's Degree in Computer Science / Information Technology"
  },
  {
    institution: "Monash University",
    degree: "Diploma in Mathematical Science (Major in Advance Computer Science)"
  },
  {
    institution: "Sunway University",
    degree: "Monash University Foundation Year (MUFY)"
  }
];