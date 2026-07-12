import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';

const Resume = () => {
  return (
    <div className="bg-espresso-100/60 min-h-screen pt-24 pb-16">
      <div className="container-p">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-espresso-600 hover:text-brass-dark transition-colors mb-6">
          <HiArrowLeft /> Back to portfolio
        </Link>

        <div className="bg-white border border-espresso-200 shadow-card rounded-2xl px-6 sm:px-10 py-10 max-w-4xl mx-auto text-espresso-800">
          {/* Header */}
          <header className="border-b border-espresso-200 pb-5 mb-7 text-center">
            <h1 className="font-serif text-3xl font-semibold text-espresso-950 tracking-wide">ALEJANDRO PEREZ-RIVERO</h1>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm mt-3 text-espresso-600">
              <span>Miami, FL</span><span className="text-espresso-300">|</span>
              <span>(786) 481-8530</span><span className="text-espresso-300">|</span>
              <a href="mailto:alexperezr456@gmail.com" className="hover:text-brass-dark">alexperezr456@gmail.com</a><span className="text-espresso-300">|</span>
              <a href="https://linkedin.com/in/aperezrivero" className="hover:text-brass-dark">linkedin.com/in/aperezrivero</a><span className="text-espresso-300">|</span>
              <a href="https://github.com/aperez-999" className="hover:text-brass-dark">github.com/aperez-999</a>
            </div>
          </header>

          <Block title="Summary">
            <p className="text-sm leading-relaxed">
              Full-stack software engineer and FIU Computer Science student with experience shipping production
              features at Boats Group using React, TypeScript, Node.js, and AWS. Skilled in building scalable web
              applications, developing REST APIs, and integrating AI-driven functionality. U.S. citizen, open to
              remote or on-site software engineering internships and full-time roles.
            </p>
          </Block>

          <Block title="Experience">
            <Entry title="Royal Caribbean Group — IT Shipboard Engineering Intern" meta="Summer 2026 · Incoming" sub="Miami, FL"
              bullets={[
                'Incoming summer 2026 internship on the IT shipboard engineering team.',
              ]} />
            <Entry title="Boats Group — Software Developer Intern" meta="Jun 2025 – Aug 2025" sub="Miami, FL"
              bullets={[
                'Shipped 10+ production features in Listings Editor using React, TypeScript, Node.js, and Tailwind CSS.',
                'Enhanced photo-upload UX and resolved CORS/image bugs, reducing invalid submissions by 80%.',
                'Led E2E development of Private Seller Analytics with real-time metrics and Kameleoon A/B testing.',
                'Built scalable analytics via container architecture and backend APIs, improving deployment reliability.',
                'Leveraged AWS S3 for asset delivery, reducing image-load latency by 20% across listings pages.',
              ]} />
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
              ]} />
          </Block>

          <Block title="Technical Skills">
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
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
              sub="B.S. Computer Science — GPA 3.95 · Jun 2024 – Expected Aug 2026" />
            <Entry title="The Honors College at Miami Dade College" meta="Miami, FL"
              sub="A.A. Computer Science — GPA 3.75 · Jun 2022 – May 2024" />
          </Block>
        </div>
      </div>
    </div>
  );
};

const Block = ({ title, children, last }) => (
  <section className={last ? '' : 'mb-7'}>
    <h2 className="font-serif text-lg font-semibold text-espresso-950 border-b border-espresso-200 pb-1 mb-3 uppercase tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

const Entry = ({ title, meta, sub, bullets = [] }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-3">
      <h3 className="font-semibold text-espresso-900">{title}</h3>
      {meta && <span className="text-sm text-espresso-500 shrink-0">{meta}</span>}
    </div>
    {sub && <p className="text-sm italic text-espresso-600 mt-0.5">{sub}</p>}
    {bullets.length > 0 && (
      <ul className="list-disc pl-5 space-y-1 text-sm mt-2 text-espresso-700 marker:text-brass">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </div>
);

export default Resume;
