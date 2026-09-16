import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiArrowLeft,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineDownload,
} from 'react-icons/hi';

const Resume = () => {
  const handleDownload = () => window.print();

  return (
    <div className="bg-espresso-50 print:bg-white">
      {/* Dark hero band — mirrors the site's project-detail motif (hidden on print) */}
      <header className="relative overflow-hidden bg-espresso-950 text-espresso-50 pt-28 pb-16 print:hidden">
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
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-espresso-100/70 hover:text-brass-light transition-colors"
            >
              <HiArrowLeft /> Back to portfolio
            </Link>
            <button
              onClick={handleDownload}
              className="btn-accent !px-5 !py-2.5 hover:scale-105 active:scale-95 transition-transform"
            >
              <HiOutlineDownload size={18} /> Download PDF
            </button>
          </div>

          <div className="mt-10">
            <p className="eyebrow text-brass-light mb-3">
              <span className="h-px w-8 bg-brass-light/60" />Résumé
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso-50">
              Alejandro Perez-Rivero
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-5 text-espresso-100/75">
              <span className="inline-flex items-center gap-1.5"><HiOutlineLocationMarker className="text-brass-light" /> Miami, FL</span>
              <span className="inline-flex items-center gap-1.5"><HiOutlinePhone className="text-brass-light" /> (786) 481-8530</span>
              <a href="mailto:alexperezr456@gmail.com" className="inline-flex items-center gap-1.5 hover:text-espresso-50 transition-colors">
                <HiOutlineMail className="text-brass-light" /> alexperezr456@gmail.com
              </a>
              <a href="https://linkedin.com/in/aperezrivero" className="hover:text-espresso-50 transition-colors">linkedin.com/in/aperezrivero</a>
              <a href="https://github.com/aperez-999" className="hover:text-espresso-50 transition-colors">github.com/aperez-999</a>
            </div>
          </div>
        </div>
      </header>

      {/* One continuous resume sheet — like a real single-page document */}
      <div className="container-p -mt-8 pb-24 print:mt-0 print:pb-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white text-espresso-800 border border-espresso-200/60 shadow-lift print:shadow-none print:border-none rounded-3xl px-6 sm:px-14 py-12 sm:py-14 max-w-4xl mx-auto"
        >
          {/* Print-only header, since the dark hero is hidden on print */}
          <div className="hidden print:block text-center mb-8 pb-6 border-b border-espresso-200">
            <h1 className="font-serif text-3xl font-semibold text-espresso-950">Alejandro Perez-Rivero</h1>
            <p className="text-sm text-espresso-600 mt-2">
              Miami, FL · (786) 481-8530 · alexperezr456@gmail.com · linkedin.com/in/aperezrivero · github.com/aperez-999
            </p>
          </div>

          <Block title="Summary">
            <p className="text-[0.95rem] leading-relaxed">
              Full-stack software engineer and FIU Computer Science student with experience shipping production
              features at Royal Caribbean Group and Boats Group. Skilled in React, Next.js, TypeScript, Spring Boot,
              Node.js, and AWS. Builds scalable web applications, REST APIs, and AI-driven products. U.S. citizen,
              open to remote or on-site software engineering roles.
            </p>
          </Block>

          <Block title="Experience">
            <Entry
              title="Royal Caribbean Group — IT Enterprise Products Quality Shipboard Engineer Intern"
              meta="May 2026 – Aug 2026"
              sub="Miramar, FL"
              bullets={[
                'Developed and shipped production full-stack features for the Crew Management platform using Next.js, React, TypeScript, Reactive Java, Spring Boot, and MariaDB.',
                'Owned end-to-end delivery across frontend, backend, BFF, and database layers for enterprise workforce capabilities including Position Hierarchy, Voyage Planning, Kitchen Number, and Supervisor Resolution.',
                'Designed REST APIs, Flyway migrations, reactive services, and scalable data models; collaborated with PMs, UX, architects, and senior engineers via Agile design reviews.',
              ]}
            />
            <Entry
              title="Boats Group — Software Developer Intern"
              meta="Jun 2025 – Aug 2025"
              sub="Miami, FL"
              bullets={[
                'Delivered 10+ production features using React, TypeScript, Node.js, and Tailwind CSS.',
                'Improved photo-upload UX and resolved CORS/image bugs, reducing invalid submissions by 80%.',
                'Built and launched Private Seller Analytics with real-time metrics and Kameleoon A/B testing.',
                'Leveraged AWS S3 for media delivery, reducing image-load latency by 20%; collaborated in Agile sprints with Jira, GitHub PRs, and QA workflows.',
              ]}
              last
            />
          </Block>

          <Block title="Projects">
            <Entry title="Offervia — Enterprise-Grade AI Career Platform" meta="Next.js, TypeScript, Supabase, Groq API"
              bullets={[
                'Founded and launched an AI-driven SaaS for resume tailoring, interview coaching, and job analysis.',
                'Implemented secure auth, Stripe subscriptions, 26 Row-Level Security policies, and Sentry monitoring.',
                'Deployed to offervia.app on Next.js 15 + Vercel with SEO optimization and 100% TypeScript coverage.',
              ]} />
            <Entry title="NutriFlow — Full-Stack Fitness & Nutrition App" meta="React, Node.js, Express, MongoDB, JWT"
              bullets={[
                'Built and deployed a MERN application with JWT authentication and an AI fitness chatbot (Groq API).',
                'Optimized queries and caching, reducing dashboard load times by 40%.',
              ]} />
            <Entry title="Corazones Vivos — Nonprofit Outreach Platform" meta="Next.js, TypeScript, Tailwind CSS, SEO"
              bullets={[
                'Architected a bilingual full-stack deployment with Vercel CI/CD and top-tier SEO crawl indexing.',
              ]}
              last
            />
          </Block>

          <Block title="Technical Skills">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              <p><b className="text-espresso-950">Languages:</b> TypeScript, JavaScript, Python, Java, C++, SQL, HTML/CSS</p>
              <p><b className="text-espresso-950">Frontend:</b> React, Next.js, Redux, Tailwind CSS, shadcn/ui</p>
              <p><b className="text-espresso-950">Backend & AI:</b> Node.js, Express, REST APIs, OpenAI/Groq, Spring Boot</p>
              <p><b className="text-espresso-950">Data:</b> Supabase, PostgreSQL, MongoDB</p>
              <p><b className="text-espresso-950">Cloud & Tools:</b> AWS S3, Docker, Vercel, Git, Jira, Postman, Sentry</p>
              <p><b className="text-espresso-950">Methods:</b> Agile/Scrum, E2E Testing (Playwright), A/B Testing</p>
            </div>
          </Block>

          <Block title="Education" last>
            <Entry title="Florida International University (FIU)" meta="Miami, FL"
              sub="B.S. Computer Science — GPA 3.95 · Jun 2024 – Expected Dec 2026" />
            <Entry title="The Honors College at Miami Dade College" meta="Miami, FL"
              sub="A.A. Computer Science — GPA 3.75 · Jun 2022 – May 2024"
              last
            />
          </Block>
        </motion.div>
      </div>
    </div>
  );
};

const Block = ({ title, children, last }) => (
  <section className={last ? '' : 'mb-10'}>
    <h2 className="font-serif text-lg font-semibold text-espresso-950 border-b border-brass/25 pb-2.5 mb-5 uppercase tracking-wide flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brass print:hidden" />
      {title}
    </h2>
    {children}
  </section>
);

const Entry = ({ title, meta, sub, bullets = [], last }) => (
  <div className={`${last ? '' : 'mb-6'} pl-4 border-l-2 border-espresso-100 print:border-espresso-200`}>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-3">
      <h3 className="font-semibold text-espresso-900">{title}</h3>
      {meta && <span className="text-sm text-brass-dark font-medium shrink-0">{meta}</span>}
    </div>
    {sub && <p className="text-sm italic text-espresso-600 mt-0.5">{sub}</p>}
    {bullets.length > 0 && (
      <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2.5 text-espresso-700 marker:text-brass">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </div>
);

export default Resume;
