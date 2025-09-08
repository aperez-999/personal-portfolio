import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

function findProjectBySlug(slug) {
  return projects.find(
    (p) => (p.slug || (p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug
  );
}

function Section({ title, children }) {
  if (!children) return null;
  const isEmptyArray = Array.isArray(children) && children.length === 0;
  if (isEmptyArray) return null;
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="space-y-3 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => findProjectBySlug(slug), [slug]);

  useEffect(() => {
    if (project?.title) {
      document.title = `${project.title} | Project | PerezDev`;
    } else {
      document.title = 'Project | PerezDev';
    }
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  const [imgSrc, setImgSrc] = useState(project.image);
  const {
    title,
    description,
    technologies = [],
    codeUrl,
    liveUrl,
    highlights = [],
    features = [],
    role,
    challenges = [],
    results = [],
    timeline,
  } = project;

  const hasRightColumn = role || timeline || (technologies?.length ?? 0) > 0 || codeUrl || liveUrl;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <Link to="/projects" className="hover:underline">Projects</Link>
        <span className="mx-2">/</span>
        <span aria-current="page" className="text-gray-900 dark:text-gray-200 font-medium">{title}</span>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        {technologies?.length ? (
          <div className="flex flex-wrap gap-2">
            {technologies.map((t, i) => (
              <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Live
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Code
            </a>
          )}
        </div>
      </header>

      {/* Hero image */}
      <div className="mb-10">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 80vw, 100vw"
          onError={() => setImgSrc('./assets/icons/portfolio.png')}
        />
      </div>

      {/* Content grid */}
      <div className={`grid grid-cols-1 ${hasRightColumn ? 'lg:grid-cols-[2fr,1fr] gap-10' : ''}`}>
        <div>
          <Section title="Overview">
            <p>{description}</p>
          </Section>

          {!!highlights.length && (
            <Section title="Highlights">
              <ul className="list-disc pl-5 space-y-2">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </Section>
          )}

          {!!features.length && (
            <Section title="Key Features">
              <ul className="list-disc pl-5 space-y-2">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Section>
          )}

          {!!challenges.length && (
            <Section title="Challenges">
              <ul className="list-disc pl-5 space-y-2">
                {challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </Section>
          )}

          {!!results.length && (
            <Section title="Results & Impact">
              <ul className="list-disc pl-5 space-y-2">
                {results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </Section>
          )}

          <div className="mt-8">
            <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Projects</Link>
          </div>
        </div>

        {hasRightColumn && (
          <aside className="space-y-6">
            {role && (
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2">My Role</h3>
                <p className="text-gray-700 dark:text-gray-300">{role}</p>
              </div>
            )}

            {timeline && (
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                <p className="text-gray-700 dark:text-gray-300">{timeline}</p>
              </div>
            )}

            {!!technologies.length && (
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(codeUrl || liveUrl) && (
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-3">Links</h3>
                <div className="flex gap-3">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      Live
                    </a>
                  )}
                  {codeUrl && (
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-600 hover:text-white text-sm"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
