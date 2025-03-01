import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

// Animated page wrapper component
const AnimatedPage = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

// Routes with animations
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Main portfolio component with all sections
  const MainPortfolio = () => (
    <AnimatedPage>
      <main className='space-y-32'>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </AnimatedPage>
  );
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/resume" element={
          <AnimatedPage>
            <Resume />
          </AnimatedPage>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`nav a[href*=${sectionId}]`)?.classList.add('text-blue-600');
        } else {
          document.querySelector(`nav a[href*=${sectionId}]`)?.classList.remove('text-blue-600');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Router>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <AnimatedRoutes />
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}
