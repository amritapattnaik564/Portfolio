import { useEffect, useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SkillCategory, SkillItem } from '../data/portfolioData';

interface SkillCardProps {
  categoryData: SkillCategory;
}

  export const SkillCard = ({ categoryData }: SkillCardProps) => {
    const { category, iconName, skills } = categoryData;

    // Resolve Lucide Icon dynamically
    const IconComponent = (LucideIcons as unknown as Record<string, ComponentType<{ className?: string }>>)[iconName] || LucideIcons.HelpCircle;

    return (
      <motion.div
        variants={{
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
        }}
        className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300 shadow-lg"
      >
        {/* Decorative Blur BG */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary/50 flex items-center justify-center text-white shadow-glow-primary">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">{category}</h3>
        </div>

        {/* Skills Group Content */}
        <div className="flex-grow">
          {/* Check if we have linear or circular items, group them accordingly */}
          {skills.some(s => s.type === 'bar') ? (
            // Linear Progress Bars List
            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <LinearProgressBar key={idx} skill={skill} />
              ))}
            </div>
          ) : (
            // Circular Progress Indicators Grid
            <div className="grid grid-cols-2 gap-6 justify-items-center py-2">
              {skills.map((skill, idx) => (
                <CircularProgress key={idx} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  /* Sub-component: Linear Progress Bar */
    const LinearProgressBar = ({ skill }: { skill: SkillItem }) => {
      const [width, setWidth] = useState(0);

      useEffect(() => {
        // Trigger progress animation on mount
        const timer = setTimeout(() => setWidth(skill.level), 200);
        return () => clearTimeout(timer);
      }, [skill.level]);

      return (
        <div>
          <div className="flex justify-between items-center mb-1 px-1">
            <span className="text-sm font-medium text-white/90">{skill.name}</span>
            <span className="text-xs font-semibold text-primary">{skill.level}%</span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      );
    };

    /* Sub-component: Circular Progress Indicator */
      const CircularProgress = ({ skill }: { skill: SkillItem }) => {
        const [progress, setProgress] = useState(0);
        const radius = 30;
        const strokeWidth = 4.5;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        useEffect(() => {
          const timer = setTimeout(() => setProgress(skill.level), 200);
          return () => clearTimeout(timer);
        }, [skill.level]);

        return (
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* SVG Circle Loader */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Track Circle */}
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Active Animated Circle */}
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="url(#skillGlow)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                {/* Definitions for Gradients */}
                <defs>
                  <linearGradient id="skillGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Percentage Text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{progress}%</span>
              </div>
            </div>
            <span className="text-xs font-medium text-textSecondary mt-2 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        );
      };
      export default SkillCard;
