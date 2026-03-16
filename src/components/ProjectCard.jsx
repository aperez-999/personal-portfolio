import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { title, description, image, codeUrl, liveUrl, technologies, slug } = project;
  const computedSlug = slug || (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  const [imgSrc, setImgSrc] = useState(image);
  const primaryTech = Array.isArray(technologies) && technologies.length > 0 ? technologies[0] : null;
  return (
    <motion.div
      className="bg-white/95 dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-slate-100 dark:border-slate-800"
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 22px 30px -12px rgba(15,23,42,0.45), 0 10px 18px -10px rgba(15,23,42,0.55)"
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link to={`/projects/${computedSlug}`} className="relative overflow-hidden h-48 block">
        <motion.img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          onError={() => setImgSrc('./assets/icons/portfolio.png')}
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        {primaryTech && (
          <span className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-semibold uppercase tracking-wide rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200">
            {primaryTech}
          </span>
        )}
        <Link to={`/projects/${computedSlug}`} className="hover:underline">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
            {title}
          </h3>
        </Link>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
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
        
        <div className="flex space-x-4 mt-auto pt-2">
          <motion.a
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors flex-1 text-center text-sm md:text-[0.9rem]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Code
          </motion.a>
          <motion.a
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-colors flex-1 text-center text-sm md:text-[0.9rem]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
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