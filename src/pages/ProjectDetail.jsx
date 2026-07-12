import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowUpRight, HiArrowLeft, HiCodeBracket } from 'react-icons/hi2';
import { projects } from '../data/projects';
import ProjectPlaceholder from '../components/ProjectPlaceholder';

function findProjectBySlug(slug) {
  return projects.find(
    (p) => (p.slug || (p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug
  );
}

function Section({ title, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-serif font-semibold mb-4 text-espresso-950">{title}</h2>
      <div className="space-y-3 text-espresso-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => findProjectBySlug(slug), [slug]);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    document.title = project?.title ? `${project.title} | Alejandro Perez-Rivero` : 'Project';
  }, [project]);

  if (!project) {
    return (
      <div className="container-p py-32 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-brass-dark hover:text-espresso-900 font-medium">← Back to Projects</Link>
      </div>
    );
  }

  const { title, description, technologies = [], codeUrl, liveUrl, highlights = [], image } = project;

  return (
    <article className="bg-espresso-50">
      {/* Header on espresso */}
      <header className="bg-espresso-950 text-espresso-50 pt-28 pb-16">
        <div className="container-p">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-espresso-100/70 hover:text-brass transition-colors mb-8">
            <HiArrowLeft /> All projects
          </Link>
          {technologies[0] && <p className="text-xs font-mono uppercase tracking-widest text-brass-light mb-3">{technologies[0]}</p>}
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold max-w-3xl leading-tight">{title}</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Visit live site <HiArrowUpRight />
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                <HiCodeBracket /> View code
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container-p -mt-8 pb-20">
        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-espresso-200 shadow-card bg-espresso-900 aspect-[16/9]">
          {broken ? (
            <ProjectPlaceholder primary={technologies[0]} size="lg" />
          ) : (
            <img src={image} alt={title} className="w-full h-full object-cover" onError={() => setBroken(true)} />
          )}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr,320px] gap-12">
          <div>
            <Section title="Overview"><p className="text-lg">{description}</p></Section>
            {highlights.length > 0 && (
              <Section title="Highlights">
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
            <Link to="/projects" className="inline-flex items-center gap-2 text-brass-dark hover:text-espresso-900 font-medium">
              <HiArrowLeft /> Back to all projects
            </Link>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="font-serif text-lg mb-4 text-espresso-950">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
            {(codeUrl || liveUrl) && (
              <div className="card p-6">
                <h3 className="font-serif text-lg mb-4 text-espresso-950">Links</h3>
                <div className="flex flex-col gap-3">
                  {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-espresso-700 hover:text-brass-dark inline-flex items-center gap-1.5">Live site <HiArrowUpRight size={14} /></a>}
                  {codeUrl && <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="text-espresso-700 hover:text-brass-dark inline-flex items-center gap-1.5"><HiCodeBracket size={16} /> Source code</a>}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
