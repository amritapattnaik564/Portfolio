import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

  export const Projects = () => {
    const projects = portfolioData.projects;

    // Stagger configurations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
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
          title="Featured Projects"
          subtitle="A collection of enterprise systems, responsive portals, and application platforms built with modern frontend architectures."
          align="center"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  export default Projects;
