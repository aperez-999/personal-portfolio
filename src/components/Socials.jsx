import React from 'react';
import { personalInfo } from '../data/personalInfo';

// tone: "light" for dark backgrounds, "dark" for light backgrounds
export default function Socials({ tone = 'dark', className = '' }) {
  const base =
    tone === 'light'
      ? 'text-espresso-100/70 hover:text-brass'
      : 'text-espresso-500 hover:text-brass-dark';

  const links = [
    personalInfo.linkedin && { href: personalInfo.linkedin, icon: 'ri-linkedin-fill', label: 'LinkedIn' },
    personalInfo.github && { href: personalInfo.github, icon: 'ri-github-fill', label: 'GitHub' },
    personalInfo.website && { href: personalInfo.website, icon: 'ri-global-line', label: 'Website' },
    personalInfo.email && { href: `mailto:${personalInfo.email}`, icon: 'ri-mail-fill', label: 'Email' },
  ].filter(Boolean);

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={l.label}
          className={`${base} transition-colors`}
        >
          <i className={`${l.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );
}
