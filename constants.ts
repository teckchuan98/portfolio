import { Experience, Skill, Education } from './types';

export const PERSONAL_INFO = {
  name: "Ting Teck Chuan",
  title: "Software Developer",
  email: "tingteckchuan@gmail.com",
  phone: "+60 108658228",
  location: "Malaysia",
  summary: "Software Developer with 3+ years of experience, specializing in backend development using Java and Spring Boot. Delivered end-to-end solutions for banking and government sectors. Proficient in API development, PostgreSQL, and performance optimization. Self-taught in Flutter mobile development.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "pymsoft",
    company: "Pymsoft Sdn Bhd",
    role: "Software Developer",
    duration: "Oct 2023 – Present",
    techStack: ["Java", "Spring Boot", "JPA", "JMeter", "PostgreSQL"],
    description: [
      "Designed code skeleton structures adhering to strict project logic and architectural standards.",
      "Resolved critical performance issues, optimizing Spring JPA/Native queries to eliminate N+1 problems and reduce CPU usage.",
      "Researched and implemented asynchronous methods to improve application responsiveness.",
      "Provided on-site support and requirements gathering, bridging the gap between technical implementation and business needs.",
      "Conducted stress-testing using JMeter and monitored performance with Java Melody."
    ]
  },
  {
    id: "hitachi",
    company: "Hitachi Ebworx Sdn Bhd",
    role: "Application Engineer",
    duration: "Sep 2022 – Sep 2023",
    techStack: ["Spring Boot", "Spring Batch", "PostgreSQL", "JUnit", "SonarQube"],
    description: [
      "Backend development using Spring Boot and PostgreSQL.",
      "Implemented rigorous unit tests (JUnit) and maintained code quality via SonarQube and Jacoco.",
      "Mastered Spring Batch for large-scale data processing.",
      "Optimized large query transactions for high-volume banking systems."
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
    id: "freelance",
    company: "Fiverr / Freelance",
    role: "Freelance Developer",
    duration: "Apr 2021 – Present",
    techStack: ["Python", "Java", "Automation Scripting"],
    description: [
      "Completed Python and Java assignments for diverse international clients.",
      "Adapted software solutions to meet ever-changing client requirements."
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
  { name: "Java / Spring Boot", level: 95, category: "Backend" },
  { name: "PostgreSQL / SQL", level: 85, category: "Backend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "Flutter", level: 70, category: "Frontend" },
  { name: "Laravel / PHP", level: 65, category: "Backend" },
  { name: "Vue / JS", level: 60, category: "Frontend" },
  { name: "JMeter / Testing", level: 80, category: "Tools" },
  { name: "Git / Version Control", level: 90, category: "Tools" },
];

export const EDUCATION: Education[] = [
  {
    institution: "Monash University",
    degree: "Bachelor's Degree in Computer Science / Information Technology"
  },
  {
    institution: "Monash College",
    degree: "Diploma in Mathematical Science (Major in Advance Computer Science)"
  }
];