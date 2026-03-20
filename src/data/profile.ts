import { Profile, Skill, Experience } from "@/types";

export const profile: Profile = {
  name: "A.A. Bagus Premananta Kumara",
  title: "Applications Support Analyst | Full-Stack AI Developer",
  tagline: "Bridging AI/LLM systems, full-stack development, and DevOps to deliver production-grade solutions",
  location: "Denpasar, Bali, Indonesia",
  email: "agungprema@gmail.com",
  shortBio: "Computer Science graduate (GPA 3.88/4.00) with hands-on experience building AI-integrated applications, full-stack systems, and automated deployments. Led technical teams at Bangkit Academy (Google, Tokopedia, Gojek, Traveloka) and RevoU Tech Academy.",
  about: "I'm a Computer Science graduate from STIKOM Bali specializing in AI-integrated application development and system architecture. My work spans the full lifecycle: from LLM prompt engineering and RAG systems to Docker containerization and CI/CD pipelines.\n\nThrough the Bangkit Academy program, I developed production-grade Android applications applying SOLID principles and architectural patterns. At RevoU Tech Academy, I led a team through intensive Data Analytics & Gen AI training (Grade A, 88/100), mastering SQL analysis and AI-assisted workflows.\n\nMy thesis project, Smartify, demonstrates end-to-end system design: AI content generation, database architecture, authentication, API design, containerization, and cloud deployment. This experience directly translates to application support roles requiring system troubleshooting, technical documentation, and cross-functional collaboration.\n\nI'm passionate about building systems that combine AI capabilities with robust engineering practices—ensuring they work reliably in production, not just in demos.",
  avatarUrl: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf",
  availability: "available",
  socials: [
    {
      platform: "github",
      url: "https://github.com/premaagung",
      label: "GitHub",
      icon: "Github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/agungprema",
      label: "LinkedIn",
      icon: "Linkedin",
    },
    {
      platform: "email",
      url: "mailto:agungprema@gmail.com",
      label: "Email",
      icon: "Mail",
    },
  ],
};

export const skills: Skill[] = [
  {
    category: "AI & LLM Integration",
    items: [
      { name: "Gemini API / OpenAI", level: "Advanced", yearsOfExperience: 1, icon: "Brain" },
      { name: "RAG Architecture", level: "Advanced", yearsOfExperience: 1, icon: "Database" },
      { name: "Prompt Engineering", level: "Advanced", yearsOfExperience: 1, icon: "MessageSquare" },
      { name: "Streaming APIs", level: "Intermediate", yearsOfExperience: 1, icon: "Zap" },
    ],
  },
  {
    category: "Full-Stack Development",
    items: [
      { name: "Next.js (App Router)", level: "Advanced", yearsOfExperience: 2, icon: "Code" },
      { name: "TypeScript", level: "Advanced", yearsOfExperience: 2, icon: "FileCode" },
      { name: "Prisma ORM", level: "Advanced", yearsOfExperience: 1, icon: "Database" },
      { name: "Tailwind CSS", level: "Advanced", yearsOfExperience: 2, icon: "Palette" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", level: "Intermediate", yearsOfExperience: 1, icon: "Container" },
      { name: "CI/CD (GitHub Actions)", level: "Intermediate", yearsOfExperience: 1, icon: "GitBranch" },
      { name: "Cloud Deployment (DigitalOcean)", level: "Intermediate", yearsOfExperience: 1, icon: "Cloud" },
      { name: "Linux / SSH", level: "Intermediate", yearsOfExperience: 2, icon: "Terminal" },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "SQL (MySQL/PostgreSQL)", level: "Advanced", yearsOfExperience: 1, icon: "Table" },
      { name: "Data Visualization", level: "Intermediate", yearsOfExperience: 1, icon: "BarChart" },
      { name: "Python", level: "Intermediate", yearsOfExperience: 1, icon: "Terminal" },
      { name: "System Troubleshooting", level: "Advanced", yearsOfExperience: 2, icon: "Wrench" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp_thesis",
    company: "ITB STIKOM Bali",
    role: "Thesis Researcher — Smartify AI LMS",
    location: "Denpasar, Bali",
    type: "full-time",
    startDate: "2024-08-01",
    endDate: "2025-01-01",
    current: false,
    description: "Developed AI-powered Learning Management System as undergraduate thesis. Integrated LLM for automated content generation with production deployment.",
    achievements: [
      "Architected full-stack system with Next.js, MySQL, Prisma, NextAuth, and Gemini API",
      "Implemented Docker containerization and GitHub Actions CI/CD pipeline",
      "Deployed to DigitalOcean with automated testing and deployment workflows",
      "Reduced instructor content creation time from 3-4 hours to minutes per module",
      "Documented complete API and deployment architecture for academic defense",
    ],
    technologies: ["Next.js", "MySQL", "Prisma", "Docker", "CI/CD", "Gemini API", "YouTube API"],
  },
  {
    id: "exp_revou",
    company: "RevoU Tech Academy",
    role: "Team Leader — Data Analytics & Gen AI",
    location: "Remote",
    type: "full-time",
    startDate: "2024-09-01",
    endDate: "2024-12-01",
    current: false,
    description: "Intensive tech academy program (Grade A, 88/100). Led team through data analytics, SQL, and Generative AI curriculum.",
    achievements: [
      "Led project team through 850+ hours of structured learning and capstone delivery",
      "Mastered SQL for complex data querying, cleaning, and business problem-solving",
      "Built data visualization dashboards for stakeholder communication",
      "Utilized CustomGPT and AI tools to accelerate analytical workflows",
      "Coordinated task delegation and maintained team momentum across project lifecycle",
    ],
    technologies: ["SQL", "Python", "Data Visualization", "Generative AI", "CustomGPT", "Team Leadership"],
  },
  {
    id: "exp_bangkit",
    company: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
    role: "Mobile Development Path - Cohort Member",
    location: "Remote",
    type: "full-time",
    startDate: "2023-08-01",
    endDate: "2024-01-01",
    current: false,
    description: "Industry-recognized Android development program led by top Indonesian tech companies.",
    achievements: [
      "Analyzed application logic and system behavior across multiple Android projects",
      "Identified bugs and implemented fixes within structured development workflows",
      "Documented technical requirements and translated business needs into development tasks",
      "Applied SOLID principles and Android architecture patterns (MVVM, Repository)",
      "Collaborated cross-functionally within cohort environment",
    ],
    technologies: ["Android", "Kotlin", "Jetpack Compose", "SOLID", "MVVM", "Git"],
  },
];