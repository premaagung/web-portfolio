// ==========================================
// Core Portfolio Data Structures
// Designed to match REST API responses exactly
// for seamless Phase 2 backend integration
// ==========================================

export interface Project {
  id: string;                    // UUID format: "proj_abc123"
  title: string;
  slug: string;                  // URL-friendly: "llm-integration-platform"
  description: string;           // Short summary for cards
  longDescription?: string;      // Detailed text for individual pages
  technologies: string[];        // e.g., ["Next.js", "TypeScript", "OpenAI"]
  categories: string[];           // e.g., ["AI/ML", "Web App", "SaaS"]
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;             // Featured image for cards
  galleryUrls?: string[];        // Additional screenshots
  featured: boolean;             // Show in hero/grid highlight
  status: "completed" | "in-progress" | "planned";
  startDate: string;             // ISO 8601: "2025-06-01"
  endDate?: string;
  createdAt: string;             // Record creation timestamp
  updatedAt: string;             // Last modification
}

export interface Skill {
  category: string;              // e.g., "Frontend", "Backend", "DevOps"
  items: SkillItem[];
}

export interface SkillItem {
  name: string;                  // e.g., "TypeScript"
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience: number;
  icon?: string;                 // Lucide icon name (optional)
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance";
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];        // Bullet points for resume style
  technologies: string[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label: string;
  icon: string;                // Lucide icon name
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  about: string;               // Long-form bio
  shortBio: string;            // 2-3 sentence version
  avatarUrl?: string;
  resumeUrl?: string;
  socials: SocialLink[];
  availability: "available" | "open-to-offers" | "not-available";
}