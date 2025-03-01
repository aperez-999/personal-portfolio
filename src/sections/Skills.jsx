import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from '../components/SkillBar';
import { programmingSkills, toolsAndTechnologies, frameworks, certifications } from '../data/skills';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills');
  
  // Set up intersection observer hooks
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    }
  };
  
  // Function to get icon path based on framework name
  const getIconPath = (iconName) => {
    return `/assets/icons/${iconName}.svg`;
  };
  
  return (
    <section id="skills" className="py-16 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          My Skills & Expertise
        </motion.h2>
        
        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <motion.button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-5 py-2.5 text-sm font-medium rounded-l-lg ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveTab('tools')}
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === 'tools'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tools & Tech
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveTab('frameworks')}
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === 'frameworks'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Frameworks
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setActiveTab('certifications')}
              className={`px-5 py-2.5 text-sm font-medium rounded-r-lg ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </motion.button>
          </div>
        </motion.div>
        
        {/* Tab Content with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div 
              key="skills"
              className="space-y-8 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-center"
                variants={itemVariants}
              >
                Programming Languages
              </motion.h3>
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <SkillBar name={skill.name} proficiency={skill.proficiency} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Tools & Technologies Tab */}
          {activeTab === 'tools' && (
            <motion.div 
              key="tools"
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-center"
                variants={itemVariants}
              >
                Tools & Technologies
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {toolsAndTechnologies.map((tool, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h4 className="font-medium text-center">{tool}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Frameworks Tab */}
          {activeTab === 'frameworks' && (
            <motion.div 
              key="frameworks"
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-center"
                variants={itemVariants}
              >
                Frameworks & Libraries
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {frameworks.map((framework, index) => (
                  <motion.div 
                    key={index} 
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="mb-3 flex justify-center">
                      <motion.img 
                        src={getIconPath(framework.icon)} 
                        alt={framework.name} 
                        className="h-12 w-12"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h4 className="font-medium">{framework.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div 
              key="certifications"
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-center"
                variants={itemVariants}
              >
                Certifications & Courses
              </motion.h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-lg">{cert.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                      </div>
                      <motion.a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}