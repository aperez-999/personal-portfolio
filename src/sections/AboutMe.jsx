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
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9,
      y: shouldReduceMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }
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
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto text-base md:text-lg"
          variants={fadeIn}
        >
          A quick look at who I am, how I work, and what I care about beyond the code.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={imageAnimation}
          >
            <motion.div
              className="relative w-56 h-56 md:w-64 md:h-64 mx-auto"
              variants={imageAnimation}
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500 via-blue-400 to-sky-500 opacity-60 blur-xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
                <motion.img
                  src="./assets/images/about-me.jpg"
                  alt="About Me"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 400px, 80vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Introduction
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutMeParagraphs[0]}
              </p>
            </motion.div>
            
            {aboutMeParagraphs.length > 1 && (
              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                  My Passion
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {aboutMeParagraphs[1]}
                </p>
              </motion.div>
            )}
            
            {aboutMeParagraphs.length > 2 && (
              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                  Beyond Coding
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
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
