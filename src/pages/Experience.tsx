import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';
import { ExperienceCard } from '../components/ExperienceCard';

export const Experience = () => {
  const experiences = portfolioData.experience;

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
        title="Professional Experience" 
        subtitle="My career journey, professional milestones, and engineering contributions."
        align="center"
      />

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto px-4 py-8">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-stretch relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 rounded-full bg-primary/30 animate-ping" />
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-slate-900 shadow-glow-primary z-20" />
                  </div>
                </div>

                {/* Left/Right Card Container */}
                <div className="w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0">
                  <ExperienceCard exp={exp} index={idx} />
                </div>

                {/* Empty spacer for desktop layout opposite side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
