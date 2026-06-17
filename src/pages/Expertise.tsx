import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Link, 
  Zap, 
  Monitor, 
  HelpCircle 
} from 'lucide-react';
import { FaReact, FaAngular } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';

// Dynamic Icon Map
const iconMap: Record<string, React.ReactNode> = {
  ReactIcon: <FaReact className="w-7 h-7 text-sky-400 group-hover:animate-[spin_15s_linear_infinite]" />,
  AngularIcon: <FaAngular className="w-7 h-7 text-red-500" />,
  Cpu: <Cpu className="w-7 h-7 text-secondary" />,
  Link: <Link className="w-7 h-7 text-amber-400" />,
  Zap: <Zap className="w-7 h-7 text-accent" />,
  Monitor: <Monitor className="w-7 h-7 text-emerald-400" />
};

export const Expertise: React.FC = () => {
  const expertiseList = portfolioData.expertise;

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      {/* Page Title */}
      <SectionTitle 
        title="Core Expertise" 
        subtitle="Deep dive into my specialized technical expertise and architecture competencies for building modern applications."
        align="center"
      />

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseList.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col h-full hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300 hover-lift"
          >
            {/* Background subtle glowing radial gradient */}
            <div className="absolute -top-10 -left-10 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

            {/* Icon Wrapper with glow */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 dark:border-white/5 flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:shadow-glow-primary transition-all duration-300">
              {iconMap[item.iconName] || <HelpCircle className="w-7 h-7 text-slate-400" />}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-textSecondary font-light leading-relaxed flex-grow">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Expertise;
