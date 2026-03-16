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
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-900 text-slate-900 dark:text-white overflow-hidden scroll-mt-24"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4"
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="text-xs tracking-[0.25em] uppercase text-center text-blue-500 mb-3"
          variants={itemVariants}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-4"
          variants={itemVariants}
        >
          Software Projects &amp; Case Studies
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto text-base md:text-lg"
          variants={itemVariants}
        >
          A mix of solo and collaborative builds that highlight how I design,
          develop, and ship real products with modern web technologies.
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
        <div className="flex items-center justify-between mb-6 text-sm text-slate-600 dark:text-slate-300">
          <span>
            Showing {Math.min(visibleProjects, filteredProjects.length)} of{" "}
            {filteredProjects.length} projects
          </span>
          {filter !== 'all' && (
            <button
              onClick={() => setFilter('all')}
              className="underline hover:text-blue-500 dark:hover:text-blue-400"
            >
              Clear filter
            </button>
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
            <p className="text-slate-600 dark:text-slate-300">
              No projects match this filter.
            </p>
          </motion.div>
        ) : visibleProjects < filteredProjects.length ? (
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={loadMore}
              className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        ) : (
          <motion.p
            className="text-center mt-12 text-slate-600 dark:text-slate-300"
            variants={itemVariants}
          >
            You’ve reached the end.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}