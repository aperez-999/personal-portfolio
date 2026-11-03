import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { projects } from '../data/projects';

const AI_TECH = ['Groq API', 'OpenAI API', 'Gemini API', 'Ollama', 'MCP'];
const FULLSTACK_TECH = ['Node.js', 'Express', 'Express.js', 'Supabase', 'MongoDB', 'PostgreSQL'];

function categorize(project) {
  const tags = new Set();
  if (project.featured) tags.add('Featured');
  const tech = project.technologies || [];
  if (tech.some((t) => AI_TECH.includes(t)) || /ai/i.test(project.title)) tags.add('AI & LLM');
  if (tech.some((t) => FULLSTACK_TECH.includes(t))) tags.add('Full-Stack');
  else tags.add('Frontend');
  return tags;
}

const CATEGORIES = ['All', 'Featured', 'AI & LLM', 'Full-Stack', 'Frontend'];

export default function Projects({ standalone = false }) {
  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(6);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  const tagged = useMemo(
    () => projects.map((p) => ({ ...p, _cats: categorize(p) })),
    []
  );

  const filtered = filter === 'All' ? tagged : tagged.filter((p) => p._cats.has(filter));
  const shown = filtered.slice(0, visible);

  return (
    <section className={`section-y bg-espresso-50 ${standalone ? '!pt-28' : ''}`} ref={ref}>
      <div className="container-p">
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="scroll-mt-28 text-center max-w-2xl mx-auto"
        >
          <p className="eyebrow justify-center"><span className="h-px w-8 bg-brass/50" />Selected work</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">Selected projects</h2>
          <p className="mt-4 text-espresso-600 text-lg">
            SaaS products, AI tools, and full-stack apps, including work I founded and features I shipped on a team.
          </p>
        </motion.div>

        <div className="mt-12">
          <ProjectFilter
            categories={CATEGORIES}
            activeFilter={filter}
            setFilter={(c) => { setFilter(c); setVisible(6); }}
          />
        </div>

        <motion.div layout className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {shown.map((project) => (
              <motion.div
                key={project.slug || project.title}
                className="h-full"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible((v) => Math.min(v + 3, filtered.length))}
              className="btn-outline"
            >
              Load more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
