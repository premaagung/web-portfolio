import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-6" : ""
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative bg-slate-100 overflow-hidden ${
          featured ? "aspect-video md:aspect-auto md:h-full" : "aspect-16/10"
        }`}
      >
      {/* // In the image container div, replace the placeholder section: */}
      {project.imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-slate-100 to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-white/50 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <span className="text-slate-500 text-sm font-medium">
              {project.title}
            </span>
          </div>
        </div>
      )}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === "completed"
                ? "bg-green-100 text-green-700"
                : project.status === "in-progress"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {project.status === "in-progress"
              ? "In Progress"
              : project.status === "completed"
              ? "Completed"
              : "Planned"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="View source on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-slate-400 text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Categories */}
        <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs text-slate-500 font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}