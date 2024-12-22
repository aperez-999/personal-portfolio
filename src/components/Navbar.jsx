import React, { useState } from "react";
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleClick(e, 'home')}
              className="text-2xl font-bold flex items-center space-x-2 transition-all duration-500"
            >
              <span className="text-blue-600">⟨/⟩</span>
              <span className="text-gray-900 dark:text-white">PerezDev</span>
            </a>
          </div> 

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleClick(e, 'home')}
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500">Home</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')}
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500">About</a>
            <a href="#skills" onClick={(e) => handleClick(e, 'skills')}
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500">Skills</a>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')}
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500">Projects</a>
            <a
              href="/resume.html" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500"
            >
              Resume
            </a>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <a href="mailto:alexperezr456@gmail.com"
               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-500">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 dark:text-gray-300 transition-all duration-500">
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4 transition-all duration-500`}>
          <div className="space-y-2">
            <a href="#home" onClick={(e) => handleClick(e, 'home')}
               className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')}
               className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" onClick={(e) => handleClick(e, 'skills')}
               className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#about" onClick={(e) => handleClick(e, 'projects')}
               className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="mailto:alexperezr456@gmail.com"
               className="block py-2 text-blue-600 dark:text-blue-400">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
