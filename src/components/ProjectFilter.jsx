import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectFilter = ({ technologies, activeFilter, setFilter }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-2 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeFilter === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Projects
      </motion.button>
      
      {technologies.map(tech => (
        <motion.button
          key={tech}
          onClick={() => setFilter(tech)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === tech
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tech}
        </motion.button>
      ))}
    </motion.div>
  );
};

ProjectFilter.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default ProjectFilter; 