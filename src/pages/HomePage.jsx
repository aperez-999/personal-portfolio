import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Home from '../sections/Home';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollToId;
    if (id) {
      setTimeout(() => {
        if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navigate(location.pathname, { replace: true, state: null });
      }, 60);
    }
  }, [location, navigate]);

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
