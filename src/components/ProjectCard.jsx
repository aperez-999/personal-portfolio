import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, image, codeUrl, liveUrl, technologies } = project;
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {technologies.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        )}
        
        <div className="flex space-x-4 mt-auto">
          <motion.a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex-1 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
          <motion.a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-600 hover:text-white transition-colors flex-1 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    codeUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ProjectCard; 