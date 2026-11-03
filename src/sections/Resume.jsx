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
      {/* Dark hero band - mirrors the site's project-detail motif (hidden on print) */}
      <header className="relative overflow-hidden bg-espresso-950 text-espresso-50 pt-28 pb-24 print:hidden">
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

          <div className="mt-8">
            <p className="eyebrow text-brass-light mb-3">
              <span className="h-px w-8 bg-brass-light/60" />Résumé
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso-50">
              Alejandro Perez-Rivero
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-espresso-100/75">
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

      {/* One continuous resume sheet - like a real single-page document */}
      <div className="container-p -mt-12 pb-24 print:mt-0 print:pb-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl rounded-3xl border border-espresso-200/60 bg-white px-6 py-10 text-espresso-800 shadow-lift print:border-none print:shadow-none sm:px-12 sm:py-12"
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
              Full-stack and AI software engineer. FIU Computer Science student, expected graduation December 2026.
              Completed a summer 2026 internship at Royal Caribbean Group. Joining the company as an Associate
              Software Engineer in January 2027. That role has not started. Founder of Offervia. Previously a software developer intern
              at Boats Group. React, Next.js, TypeScript, Spring Boot, Node.js, and AWS. U.S. citizen.
            </p>
          </Block>

          <Block title="Experience">
            <Entry
              title="Royal Caribbean Group - Associate Software Engineer (Incoming)"
              meta="Starting January 2027"
              sub="Miramar, FL"
              bullets={['Offer accepted. This role has not started.']}
            />
            <Entry
              title="Royal Caribbean Group - IT Enterprise Products Quality Shipboard Engineer Intern"
              meta="May 2026 – Aug 2026"
              sub="Miramar, FL"
              bullets={[
                'Shipped full-stack features for the Crew Management platform with Next.js, React, TypeScript, Reactive Java, Spring Boot, and MariaDB.',
                'Worked on Position Hierarchy, Voyage Planning, Kitchen Number, and Supervisor Resolution across the frontend, backend, BFF, and database.',
                'Wrote REST APIs, Flyway migrations, and reactive services, and joined design reviews with PMs, UX, and senior engineers.',
              ]}
            />
            <Entry
              title="Boats Group - Software Developer Intern"
              meta="Jun 2025 – Aug 2025"
              sub="Miami, FL"
              bullets={[
                'Delivered 10+ features in the live product using React, TypeScript, Node.js, and Tailwind CSS.',
                'Improved photo-upload UX and fixed CORS and image bugs, cutting invalid submissions by 80%.',
                'Built Private Seller Analytics with real-time metrics and Kameleoon A/B testing.',
                'Used AWS S3 for media delivery, cutting image-load latency by 20%. Worked in Agile sprints with Jira, GitHub PRs, and QA.',
              ]}
              last
            />
          </Block>

          <Block title="Projects">
            <Entry title="Offervia - AI Career Platform" meta="Next.js, TypeScript, Supabase, Groq API"
              bullets={[
                'Founded an app for resume tailoring, interview coaching, cover letters, and ATS checks. Live at offervia.app.',
                'Added auth, Stripe subscriptions, 26 row-level security policies, and Sentry.',
                'Deployed on Next.js 15 and Vercel. Written in TypeScript, with Playwright tests.',
              ]} />
            <Entry title="NutriFlow - Fitness and nutrition app" meta="React, Node.js, Express, MongoDB, JWT, Swift"
              bullets={[
                'Web app for meal and workout logging, recovery check-ins, readiness scores, saved plans, and AI coaching. Live at nutriflowdev.vercel.app.',
                'JWT auth on React, Node.js, Express, and MongoDB. Coaching uses the Groq API. Query and caching changes cut dashboard load times by 40%.',
                'A Swift iOS app is in development and is not released yet.',
              ]} />
            <Entry title="PerezDev CLI - AI agent setup" meta="TypeScript, Node.js, MCP, GitHub Actions"
              bullets={[
                'CLI (npm package perezdev-hub) that syncs skills, rules, and MCP config to Claude Code, Codex, Cursor, Copilot, Cline, Windsurf, and Roo Code.',
                'perezdev.lock.json records installed files. perezdev doctor fails CI when those files drift.',
              ]} />
            <Entry title="Dayform - Capstone Project" meta="React, Express, MongoDB, Gemini"
              bullets={[
                'Team lead for an FIU Capstone 2 fitness app. Ran Scrum with Jira tickets and daily standups.',
                'Shipped signup, workout and meal logs, goals, and a weekly dashboard. Gemini can estimate a meal or write a short note from recent logs.',
                'React, Vite, and Tailwind on the front. Express and MongoDB on the API. Live at dayform-fitness.vercel.app.',
              ]} />
            <Entry title="Corazones Vivos - Nonprofit site" meta="Next.js, TypeScript, Tailwind CSS, SEO"
              bullets={[
                'Bilingual Next.js site for the nonprofit, deployed on Vercel with CI and SEO for crawl indexing.',
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
              sub="B.S. Computer Science, GPA 3.95. Jun 2024 – Expected December 2026" />
            <Entry title="The Honors College at Miami Dade College" meta="Miami, FL"
              sub="A.A. Computer Science, GPA 3.75. Jun 2022 – May 2024"
              last
            />
          </Block>
        </motion.div>
      </div>
    </div>
  );
};

const Block = ({ title, children, last }) => (
  <section className={last ? '' : 'mb-9'}>
    <h2 className="font-serif text-lg font-semibold text-espresso-950 border-b border-brass/25 pb-2.5 mb-5 uppercase tracking-wide flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-brass print:hidden" />
      {title}
    </h2>
    {children}
  </section>
);

const Entry = ({ title, meta, sub, bullets = [], last }) => (
  <div className={`${last ? '' : 'mb-7'} border-l-2 border-espresso-100 pl-4 print:border-espresso-200`}>
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
