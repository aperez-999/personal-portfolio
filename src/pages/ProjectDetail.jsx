import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowUpRight, HiArrowLeft, HiCodeBracket, HiOutlineStar } from 'react-icons/hi2';
import { projects } from '../data/projects';
import ProjectPlaceholder from '../components/ProjectPlaceholder';

function findProjectBySlug(slug) {
  return projects.find(
    (p) => (p.slug || (p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug
  );
}

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i },
  }),
};

function Section({ title, children, i }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;
  return (
    <motion.section variants={fade} initial="hidden" animate="show" custom={i} className="mb-12">
      <h2 className="text-xl font-serif font-semibold mb-4 text-espresso-950 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brass" />
        {title}
      </h2>
      <div className="space-y-3 text-espresso-700 leading-relaxed">{children}</div>
    </motion.section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => findProjectBySlug(slug), [slug]);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    document.title = project?.title ? `${project.title} | Alejandro Perez-Rivero` : 'Project';
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="container-p py-32 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-brass-dark hover:text-espresso-900 font-medium">← Back to Projects</Link>
      </div>
    );
  }

  const { title, description, technologies = [], codeUrl, liveUrl, highlights = [], image, featured } = project;
  const hasLinks = Boolean(codeUrl || liveUrl);

  return (
    <article className="bg-espresso-50">
      {/* Header on espresso */}
      <header className="relative overflow-hidden bg-espresso-950 text-espresso-50 pt-28 pb-20">
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(176,137,72,0.28) 0%, rgba(176,137,72,0) 60%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 96px)',
          }}
        />
        <div className="container-p relative">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-espresso-100/70 hover:text-brass-light transition-colors mb-8">
            <HiArrowLeft /> All projects
          </Link>

          <div className="flex items-center gap-3 mb-3">
            {technologies[0] && (
              <p className="text-xs font-mono uppercase tracking-widest text-brass-light">{technologies[0]}</p>
            )}
            {featured && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brass-light/90">
                <HiOutlineStar size={13} /> Featured
              </span>
            )}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold max-w-3xl leading-tight text-espresso-50">{title}</h1>

          <div className="mt-8 flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-accent hover:scale-105 active:scale-95 transition-transform">
                Visit live site <HiArrowUpRight />
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light hover:scale-105 active:scale-95 transition-transform">
                <HiCodeBracket /> View code
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container-p -mt-10 pb-24">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden border border-espresso-200 shadow-lift bg-espresso-900 aspect-[16/9] group"
        >
          {broken ? (
            <ProjectPlaceholder primary={technologies[0]} size="lg" />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              onError={() => setBroken(true)}
            />
          )}
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1fr,320px] gap-x-14 gap-y-10">
          <div>
            <Section title="Overview" i={0}>
              <p className="text-lg">{description}</p>
            </Section>

            {highlights.length > 0 && (
              <Section title="Highlights" i={1}>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-brass-dark hover:text-espresso-900 transition-colors"
            >
              <HiArrowLeft /> Back to all projects
            </Link>
          </div>

          {/* Consistent single sidebar card — same shape whether a project has links or not */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="card p-6">
              <h3 className="font-serif text-lg mb-4 text-espresso-950">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>

              {hasLinks && (
                <>
                  <div className="h-px bg-espresso-100 my-6" />
                  <h3 className="font-serif text-lg mb-4 text-espresso-950">Links</h3>
                  <div className="flex flex-col gap-3">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-espresso-100 px-4 py-3 text-sm font-medium text-espresso-800 hover:border-brass/40 hover:bg-espresso-50 transition-colors"
                      >
                        Live site <HiArrowUpRight size={15} className="text-brass-dark" />
                      </a>
                    )}
                    {codeUrl && (
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-espresso-100 px-4 py-3 text-sm font-medium text-espresso-800 hover:border-brass/40 hover:bg-espresso-50 transition-colors"
                      >
                        Source code <HiCodeBracket size={15} className="text-brass-dark" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  );
}
