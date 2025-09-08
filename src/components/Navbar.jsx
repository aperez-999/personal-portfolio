import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from './ThemeProvider';
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const navbarVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            variants={logoVariants}
          >
            <a
              href="#home"
              onClick={(e) => handleClick(e, 'home')}
              className="text-2xl font-bold flex items-center space-x-2 transition-all duration-500"
            >
              <span className="text-blue-600">⟨/⟩</span>
              <span className="text-gray-900 dark:text-white">PerezDev</span>
            </a>
          </motion.div> 

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {['home', 'about', 'skills', 'projects'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => handleClick(e, item)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                custom={i}
                variants={linkVariants}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
            
            <motion.div custom={4} variants={linkVariants}>
              {(() => {
                const resumeClass = ({ isActive }) => (
                  "transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded " +
                  (isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400')
                );
                return (
                  <NavLink to="/resume" className={resumeClass}>
                    Resume
                  </NavLink>
                );
              })()}
            </motion.div>
            
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500"
              aria-label="Toggle theme"
              custom={5}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
            
            <motion.a 
              href="mailto:alexperezr456@gmail.com"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              custom={6}
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500"
              aria-label="Toggle theme"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
            
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-600 dark:text-gray-300 transition-all duration-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          id="mobile-menu"
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2">
            {['home', 'about', 'skills', 'projects'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => handleClick(e, item)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <NavLink to="/resume"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block py-2 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>Resume</NavLink>
            </motion.div>
            
            <motion.a 
              href="mailto:alexperezr456@gmail.com"
              className="block py-2 text-blue-600 dark:text-blue-400"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
