import { Experience, Skill, Education } from './types';

export const PERSONAL_INFO = {
  name: "Ting Teck Chuan",
  title: "Software Developer",
  email: "tingteckchuan@gmail.com",
  phone: "+60 108658228",
  location: "Malaysia",
  summary: "Backend Engineer with 4+ years of experience building and optimizing backend systems across enterprise, fintech, and government domains. Strong focus on Java & Spring Boot, API development, and performance optimization for data‑intensive workflows.\n\nExperienced in debugging production issues end‑to‑end (server health, logs, database behavior, and application logic), improving slow systems, and stabilizing legacy codebases. Comfortable operating in startup, scale‑up, and MNC environments, frequently trusted to jump into unfamiliar projects and resolve critical backend issues.\n\nActively building side projects (real users, TestFlight release), with hands‑on exposure to WebSocket‑based multiplayer systems, and ongoing self‑driven learning in LLMs, RAG, and fine‑tuning.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "pymsoft",
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
    company: "B2BE GSS Sdn Bhd",
    role: "Intern Developer",
    duration: "Dec 2019 – Feb 2020",
    techStack: ["C", "Vue.js", "HTML/CSS"],
    description: [
      "Implemented business transaction documents in C programming.",
      "Developed front-end web portals using Vue.js based on precise design specifications."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Java / Spring Boot", level: 85, category: "Backend" },
  { name: "PostgreSQL / SQL", level: 80, category: "Backend" },
  { name: "APIs & Services", level: 60, category: "Backend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "Flutter", level: 50, category: "Frontend" },
  { name: "Git / Version Control", level: 75, category: "Tools" },
  { name: "Linux", level: 60, category: "Tools" },
  { name: "JMeter / Testing", level: 30, category: "Tools" },
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