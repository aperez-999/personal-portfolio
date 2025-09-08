import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Socials from "../components/Socials";
import { personalInfo } from '../data/personalInfo';
import { Link } from 'react-router-dom';

export default function Home() {
  // Animation variants
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.3,
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 overflow-hidden scroll-mt-24">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <motion.img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              variants={imageVariants}
              whileHover="hover"
            />
          </motion.div>
          
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold"
              variants={itemVariants}
            >
              Hello! I'm {personalInfo.name}
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              {personalInfo.title} Based in {personalInfo.location}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              {personalInfo.shortBio}
            </motion.p>
            <motion.p 
              className="text-blue-600 dark:text-blue-400 font-medium"
              variants={itemVariants}
            >
              {personalInfo.education.university} | {personalInfo.education.degree} ({personalInfo.education.graduationYear})
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#skills" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work With Me
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/resume"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-block"
                >
                  See my Resume
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <Socials />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}