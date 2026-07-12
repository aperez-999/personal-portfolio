import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiRedux,
  SiVite, SiSpringboot, SiShadcnui, SiMongodb, SiPostgresql, SiSupabase,
  SiOpenai, SiTypescript, SiJavascript, SiPython, SiCplusplus,
} from 'react-icons/si';
import { HiOutlineSparkles } from 'react-icons/hi';
import SkillBar from '../components/SkillBar';
import { programmingSkills, toolsAndTechnologies, frameworks, aiTechnologies, certifications } from '../data/skills';

const iconMap = {
  react: SiReact, nextjs: SiNextdotjs, nodejs: SiNodedotjs, express: SiExpress,
  tailwind: SiTailwindcss, redux: SiRedux, vite: SiVite, spring: SiSpringboot,
  shadcn: SiShadcnui, mongodb: SiMongodb, postgresql: SiPostgresql, supabase: SiSupabase,
  openai: SiOpenai,
};

const tabs = [
  { id: 'languages', label: 'Languages' },
  { id: 'stack', label: 'Stack' },
  { id: 'toolbox', label: 'Toolbox' },
  { id: 'certs', label: 'Certifications' },
];

const langIcon = { 'TypeScript': SiTypescript, 'JavaScript': SiJavascript, 'React.js': SiReact, 'Python': SiPython, 'C++': SiCplusplus };

export default function Skills() {
  const [tab, setTab] = useState('languages');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stack = [...frameworks, ...aiTechnologies];

  return (
    <section id="skills" className="section-y bg-espresso-100/60 scroll-mt-20" ref={ref}>
      <div className="container-p">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow"><span className="h-px w-8 bg-brass/50" />Skills & expertise</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">The tools behind the work.</h2>
          <p className="mt-4 text-espresso-600 text-lg">
            Languages, frameworks, and platforms I use to design, build, and ship production software.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-espresso-200">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                tab === t.id ? 'text-espresso-950' : 'text-espresso-500 hover:text-espresso-800'
              }`}
            >
              {t.label}
              {tab === t.id && (
                <motion.span layoutId="tab-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-brass" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[18rem]">
          <AnimatePresence mode="wait">
            {tab === 'languages' && (
              <motion.div
                key="languages"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-2 gap-x-12 gap-y-7 max-w-4xl"
              >
                {programmingSkills.map((s) => (
                  <div key={s.name} className="flex items-center gap-4">
                    {langIcon[s.name] && React.createElement(langIcon[s.name], { className: 'text-espresso-400 shrink-0', size: 22 })}
                    <div className="flex-1"><SkillBar name={s.name} proficiency={s.proficiency} /></div>
                  </div>
                ))}
              </motion.div>
            )}

            {tab === 'stack' && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {stack.map((f) => {
                  const Icon = iconMap[f.icon] || HiOutlineSparkles;
                  return (
                    <div
                      key={f.name}
                      className="group card p-5 flex items-center gap-3 hover:-translate-y-1 hover:shadow-card hover:border-brass/40"
                    >
                      <Icon size={26} className="text-espresso-500 group-hover:text-brass-dark transition-colors shrink-0" />
                      <span className="font-medium text-espresso-800 text-sm">{f.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {tab === 'toolbox' && (
              <motion.div
                key="toolbox"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-wrap gap-2.5"
              >
                {toolsAndTechnologies.map((tool) => (
                  <span key={tool} className="chip hover:border-brass/50 hover:bg-white transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </motion.div>
            )}

            {tab === 'certs' && (
              <motion.div
                key="certs"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 gap-4 max-w-4xl"
              >
                {certifications.map((c) => (
                  <div key={c.name} className="card p-5 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg text-espresso-950">{c.name}</h4>
                      <p className="text-sm text-espresso-500 mt-1">{c.issuer}</p>
                    </div>
                    <span className="chip shrink-0">{c.date}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
