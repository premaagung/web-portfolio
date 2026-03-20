import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj_smartify",
    title: "Smartify AI — LMS Learning Content Creation",
    slug: "smartify-ai-lms",
    description: "Thesis project: AI-powered LMS that generates complete learning courses using LLM. Auto-creates chapters, curates YouTube videos, generates summaries & quizzes. Reduced content creation from 3-4 hours to minutes.",
    longDescription: "Undergraduate thesis project developed for Sekolah Pariwisata Mediterranean Bali. Smartify is a production-grade LMS prototype integrating Gemini LLM to automate hospitality education content creation.\n\nKey technical achievements:\n- Multi-step AI pipeline: topic → chapter structure → video curation → summary generation → quiz creation\n- YouTube Data API integration with fallback handling for niche topics\n- Curriculum alignment review system allowing instructors to validate AI output before publishing\n- Real-time progress tracking with per-user chapter completion\n- Docker containerization with GitHub Actions CI/CD pipeline to DigitalOcean\n- Rate-limiting resilience: sequential delays for Gemini free tier, fallback to OpenRouter\n\nSystem handles the complete lifecycle: AI generation → human review → student consumption → progress analytics.",
    technologies: ["Next.js 14", "TypeScript", "MySQL", "Prisma", "NextAuth", "Gemini API", "YouTube API", "Docker", "CI/CD", "Tailwind"],
    categories: ["AI/ML", "Full-Stack", "EdTech", "DevOps"],
    githubUrl: "https://github.com/premaagung/smartify",
    liveUrl: undefined, // Add if deployed
    featured: true,
    status: "completed",
    startDate: "2024-08-01",
    endDate: "2025-01-01",
    createdAt: "2024-08-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
  },
  {
    id: "proj_docmind",
    title: "DocMind — RAG PDF Q&A with Streaming",
    slug: "docmind-rag-pdf",
    description: "Full-stack RAG application for document Q&A. Upload PDFs, get chunked embeddings in vector DB, query with streaming responses. Dark-themed production UI with document library management.",
    longDescription: "Advanced document intelligence platform implementing Retrieval-Augmented Generation (RAG) architecture. Users upload PDFs which are chunked, embedded, and stored in a vector database for semantic search.\n\nTechnical highlights:\n- Streaming architecture: Fetch API ReadableStream delivers tokens in real-time to UI\n- Per-document chat context isolation: switching documents clears conversation history\n- Vector database integration for semantic document retrieval\n- Anthropic/OpenAI API abstraction for response generation\n- Document lifecycle management: upload, list, switch, delete with confirmation\n- Custom dark-themed design system with CSS variables\n- Auto-scroll chat interface with conversation reset capability\n\nDemonstrates production-grade AI application architecture with careful attention to UX patterns for AI interfaces (streaming, context isolation, error handling).",
    technologies: ["Next.js 14", "TypeScript", "RAG", "Vector DB", "Anthropic API", "Streaming API", "PDF Processing", "Dark UI"],
    categories: ["AI/ML", "Full-Stack", "Document AI"],
    githubUrl: "https://github.com/premaagung/pdf-chat-rag", // Assuming this is DocMind
    featured: true,
    status: "completed",
    startDate: "2024-10-01",
    createdAt: "2024-10-01T00:00:00Z",
    updatedAt: "2024-12-01T00:00:00Z",
  },
  {
    id: "proj_chefcanvas",
    title: "ChefCanvas — AI Recipe Generator for Professional Kitchens",
    slug: "chefcanvas-ai-recipes",
    description: "AI-powered menu ideation for chefs. Converts ingredients + flavor vision into kitchen-ready recipes with scaled measurements, PDF export, and portion rescaling. Built with Next.js 16 + Tailwind v4.",
    longDescription: "Domain-specific AI application for culinary professionals. ChefCanvas transforms raw ingredients and flavor intentions into complete, structured recipes suitable for professional kitchen execution.\n\nKey features:\n- Gemini 2.0 Flash integration for recipe generation with strict output formatting\n- Dynamic portion scaling: pure frontend mathematics for real-time yield adjustments (10 pax → 35 pax instantly)\n- PDF export pipeline using jsPDF for print-ready kitchen documentation\n- Inline editable AI output: chefs can refine generated recipes before saving\n- Recipe Book management with course-type filtering (Amuse-Bouche through Dessert)\n- Copy-as-text functionality for integration with kitchen display systems\n- Modern stack: Next.js 16 App Router, Tailwind CSS v4, Prisma 7, SQLite\n\nDemonstrates ability to build domain-specific AI tools with attention to real-world workflow integration (PDF export, portion math, editing capabilities).",
    technologies: ["Next.js 16", "TypeScript", "Tailwind v4", "Gemini 2.0", "jsPDF", "Prisma 7", "SQLite"],
    categories: ["AI/ML", "Full-Stack", "Culinary Tech"],
    githubUrl: "https://github.com/premaagung/ChefCanvas",
    featured: true,
    status: "completed",
    startDate: "2024-11-01",
    createdAt: "2024-11-01T00:00:00Z",
    updatedAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "proj_miami_cruise",
    title: "Miami Cruise Center — Booking & Reservation System",
    slug: "miami-cruise-booking",
    description: "Full-stack hospitality booking platform with real-time inventory, multi-currency payments, and admin dashboard. Complete reservation lifecycle management.",
    longDescription: "End-to-end booking system for cruise tour operators. Handles complex hospitality requirements including real-time inventory management, payment processing, and operational dashboards.\n\nSystem capabilities:\n- Real-time availability checking with inventory reservation locks\n- Multi-currency payment processing integration\n- Customer booking workflow with confirmation emails\n- Administrative dashboard for operators: schedule management, dynamic pricing, customer communications\n- Responsive frontend for mobile bookings\n- Database design for hospitality domain (bookings, customers, schedules, payments)\n\nDemonstrates traditional full-stack engineering without AI—showing versatility in building core business systems.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind"],
    categories: ["Full-Stack", "Booking System", "Hospitality"],
    githubUrl: "https://github.com/premaagung/miami-cruise-center",
    featured: false,
    status: "completed",
    startDate: "2023-09-01",
    endDate: "2024-02-01",
    createdAt: "2023-09-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}