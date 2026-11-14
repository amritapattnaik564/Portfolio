import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
}

  export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <motion.div
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
        }}
        className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 hover-lift"
      >
        {/* Project Image Container */}
        <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-white/5">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover action overlay links */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {(project.liveLink && project.liveLink !== '#') || (project.githubLink && project.githubLink !== '#') ? (
              <>
                {project.liveLink && project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary hover:bg-primary/80 text-white flex items-center justify-center shadow-glow-primary transition-all duration-200 hover:scale-110"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-white/10 transition-all duration-200 hover:scale-110"
                    title="View Code"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </>
            ) : (
              <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <span className="text-xs font-semibold text-white block">Enterprise Project</span>
                <span className="text-[10px] text-textSecondary block">Client Production Platform</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-primary uppercase font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors tracking-wide">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-textSecondary font-light leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

        </div>
      </motion.div>
    );
  };
  export default ProjectCard;
