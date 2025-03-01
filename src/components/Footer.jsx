import React from 'react';
import { motion } from 'framer-motion';
import Socials from './Socials';

export default function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.footer 
      className="bg-white dark:bg-gray-900 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Text */}
          <motion.div 
            className="text-center md:text-left mb-4 md:mb-0"
            variants={itemVariants}
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} PerezDev. All rights reserved.
            </p>
            <motion.p 
              className="text-gray-500 dark:text-gray-400 text-xs mt-1"
              variants={itemVariants}
            >
              Built with React, Tailwind CSS & Framer Motion
            </motion.p>
          </motion.div>

          {/* Social Icons Component */}
          <motion.div 
            className="flex justify-center md:justify-end space-x-6"
            variants={itemVariants}
          >
            <Socials />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
