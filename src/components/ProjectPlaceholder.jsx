import React from 'react';
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiJavascript,
  SiMongodb, SiExpress, SiTailwindcss, SiHtml5, SiVite, SiPython,
} from 'react-icons/si';

const MARK = './assets/images/perezdev-mark.png';

const ICONS = {
  'next.js': SiNextdotjs,
  'next.js 15': SiNextdotjs,
  'react': SiReact,
  'react.js': SiReact,
  'node.js': SiNodedotjs,
  'express': SiExpress,
  'express.js': SiExpress,
  'typescript': SiTypescript,
  'javascript': SiJavascript,
  'mongodb': SiMongodb,
  'tailwind css': SiTailwindcss,
  'tailwindcss': SiTailwindcss,
  'html': SiHtml5,
  'vite': SiVite,
  'python': SiPython,
};

/**
 * Branded fallback shown when a project image is missing/broken.
 * Renders the primary technology's brand mark on the espresso gradient,
 * with the PerezDev logo as a subtle corner watermark.
 */
export default function ProjectPlaceholder({ primary, size = 'md' }) {
  const key = (primary || '').toLowerCase().trim();
  const Icon = ICONS[key];
  const iconSize = size === 'lg' ? 88 : 56;

  return (
    <div className="relative w-full h-full grid place-items-center overflow-hidden bg-gradient-to-br from-espresso-800 to-espresso-950">
      {/* faint plank lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 22px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-brass-light/90">
        {Icon ? <Icon size={iconSize} /> : (
          <img src={MARK} alt="" className={size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'} />
        )}
        {primary && (
          <span className="text-xs font-mono uppercase tracking-widest text-espresso-100/55">
            {primary}
          </span>
        )}
      </div>
      {/* corner brand watermark */}
      <img
        src={MARK}
        alt=""
        className="absolute bottom-3 right-3 w-7 h-7 opacity-30"
      />
    </div>
  );
}
