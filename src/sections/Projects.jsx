import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Set up intersection observer hooks
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Get unique technology categories from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));
  
  // Display only the number of visible projects
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  // Respect reduced motion preference
  const shouldReduceMotion = useReducedMotion();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }
    }
  };
  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : -20,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden scroll-mt-24">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Here are the projects I've worked on that showcase my skills in web development
          and problem-solving.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div variants={itemVariants}>
          <ProjectFilter 
            technologies={allTechnologies} 
            activeFilter={filter} 
            setFilter={setFilter} 
          />
        </motion.div>
        
        {/* Summary and grid */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-600 dark:text-gray-400">
          <span>Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length} projects</span>
          {filter !== 'all' && (
            <button onClick={() => setFilter('all')} className="underline hover:text-blue-600 dark:hover:text-blue-400">Clear filter</button>
          )}
        </div>
        {/* Projects grid with AnimatePresence for smooth transitions */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Load more button or end message */}
        {filteredProjects.length === 0 ? (
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-400">No projects match this filter.</p>
          </motion.div>
        ) : visibleProjects < filteredProjects.length ? (
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={loadMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        ) : (
          <motion.p className="text-center mt-12 text-gray-600 dark:text-gray-400" variants={itemVariants}>
            You’ve reached the end.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}