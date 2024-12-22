import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';


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
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen animate-fadeIn">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className='space-y-32'>
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
