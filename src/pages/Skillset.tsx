import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';
import { SkillCard } from '../components/SkillCard';

  export const Skillset = () => {
    const skillset = portfolioData.skillset;

    // Stagger entry configurations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
        }
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
          title="My Skillset"
          subtitle="Structured core skillset grouped by technical domain, highlighting modern web development competencies."
          align="center"
        />

        {/* Skills Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {skillset.map((categoryData, idx) => (
            <div key={idx}>
              <SkillCard categoryData={categoryData} />
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  export default Skillset;
