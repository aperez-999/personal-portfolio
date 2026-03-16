import React from 'react';
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
    hidden: { scale: shouldReduceMotion ? 1 : 0.9, opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.03,
          boxShadow:
            "0 20px 25px -5px rgba(15, 23, 42, 0.5), 0 10px 10px -5px rgba(15, 23, 42, 0.4)",
          transition: { duration: 0.25, ease: "easeOut" }
        }
  };

  return (
    <section
      id="home"
      className="pt-28 pb-20 overflow-hidden scroll-mt-24 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-7rem)] flex items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <motion.p
              className="text-sm tracking-[0.25em] uppercase text-blue-400"
              variants={itemVariants}
            >
              Software Developer & Problem Solver
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              Hello! I&apos;m{" "}
              <span className="text-blue-400">{personalInfo.name}</span>
            </motion.h1>
            <motion.h2
              className="text-lg md:text-xl text-slate-300"
              variants={itemVariants}
            >
              {personalInfo.title} • {personalInfo.location}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              {personalInfo.shortBio}
            </motion.p>
            <motion.p
              className="text-sm md:text-base text-blue-300 font-medium"
              variants={itemVariants}
            >
              {personalInfo.education.university} •{" "}
              {personalInfo.education.degree} (
              {personalInfo.education.graduationYear})
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:alexperezr456@gmail.com"
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Work With Me
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full border border-blue-400/70 text-blue-300 hover:bg-blue-500/10 hover:border-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  <span>View Projects</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <Socials />
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-sky-500 opacity-60 blur-lg" />
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-slate-900 bg-slate-900 shadow-2xl">
                <motion.img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}