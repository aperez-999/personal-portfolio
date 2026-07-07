import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  // Split the about me text into paragraphs
  const aboutMeParagraphs = personalInfo.aboutMe.split('\n\n').filter(p => p.trim() !== '');
  
  // Set up intersection observer hooks for different elements
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const shouldReduceMotion = useReducedMotion();
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    }
  };
  
  const imageAnimation = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };
  
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={imageAnimation}
          >
            <motion.img
              src="./assets/images/about-me.jpg"
              alt="About Me"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 400px, 80vw"
              className="rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {aboutMeParagraphs[0]}
              </p>
            </motion.div>
            
            {aboutMeParagraphs.length > 1 && (
              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-semibold mb-4">My Passion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {aboutMeParagraphs[1]}
                </p>
              </motion.div>
            )}
            
            {aboutMeParagraphs.length > 2 && (
              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-semibold mb-4">Beyond Coding</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {aboutMeParagraphs[2]}
                </p>
              </motion.div>
            )}
            
            <motion.div 
              className="pt-4"
              variants={fadeIn}
            >
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
