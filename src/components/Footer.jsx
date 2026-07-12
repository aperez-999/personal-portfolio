import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-espresso-950 text-espresso-50">
      {/* CTA band */}
      <div className="container-p py-16 border-b border-espresso-50/10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="eyebrow text-brass-light"><span className="h-px w-8 bg-brass-light/50" />Let's work together</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-espresso-50 max-w-xl leading-tight">
              Have a project or role in mind?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${personalInfo.email}`} className="btn-accent">Email me</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-p py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src="./assets/images/perezdev-mark.png" alt="PerezDev" className="h-8 w-8 rounded-lg ring-1 ring-brass/40" />
          <span className="font-serif text-lg">Perez<span className="text-brass">Dev</span></span>
        </div>

        <Socials tone="light" />

        <div className="flex items-center gap-6 text-sm text-espresso-100/50">
          <Link to="/resume" className="hover:text-brass transition-colors">Resume</Link>
          <button onClick={scrollTop} className="hover:text-brass transition-colors">Back to top ↑</button>
        </div>
      </div>

      <div className="container-p pb-8 text-center md:text-left">
        <p className="text-xs text-espresso-100/40">
          © {year} Alejandro Perez-Rivero · Built with React, Tailwind CSS & Framer Motion · Miami, FL
        </p>
      </div>
    </footer>
  );
}
