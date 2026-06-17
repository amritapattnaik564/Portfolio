import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import type { ExperienceItem } from '../data/portfolioData';

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { x: index % 2 === 0 ? -40 : 40, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
      }}
      className="relative w-full glass-card p-6 md:p-8 rounded-3xl hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 hover-lift"
    >
      {/* Decorative Blur Background bubble */}
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

      {/* Role and Title */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">{exp.role}</h3>
          <p className="text-sm font-semibold text-primary/90 mt-1 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            {exp.company}
          </p>
        </div>

        {/* Location and Duration */}
        <div className="flex flex-col sm:items-end text-xs text-textSecondary gap-1.5">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 dark:border-white/5 text-white font-medium">
            <Calendar className="w-3.5 h-3.5 text-secondary" />
            {exp.duration}
          </span>
          <span className="flex items-center gap-1.5 sm:justify-end text-textSecondary">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {exp.location}
          </span>
        </div>
      </div>

      {/* Responsibilities list */}
      <div className="mt-6 pt-4 border-t border-white/5">
        <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Key Responsibilities</h4>
        <ul className="space-y-2.5">
          {exp.responsibilities.map((resp, idx) => (
            <li key={idx} className="text-sm text-textSecondary font-light leading-relaxed flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
export default ExperienceCard;
