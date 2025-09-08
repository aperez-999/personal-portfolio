import React from 'react';
import Home from '../sections/Home';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollToId;
    if (id) {
      // Scroll after initial paint
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        // Clear the state to avoid re-scrolling on back/forward
        navigate(location.pathname, { replace: true, state: null });
      }, 0);
    }
  }, [location, navigate]);

  return (
    <main className="space-y-32">
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
