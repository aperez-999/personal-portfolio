import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeProvider';

const Resume = () => {
  const { isDark } = useTheme();

  const border = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div
      className={`py-8 px-6 max-w-4xl mx-auto my-8 shadow-lg transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Header */}
      <header className={`border-b ${border} pb-4 mb-6`}>
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          ALEJANDRO PEREZ-RIVERO
        </h1>

        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span>Miami, FL</span>
          <span>|</span>
          <span>(786) 481-8530</span>
          <span>|</span>

          <a
            href="mailto:alexperezr456@gmail.com"
            className="hover:underline"
          >
            alexperezr456@gmail.com
          </a>

          <span>|</span>

          <a
            href="https://linkedin.com/in/aperezrivero"
            className="hover:underline"
          >
            linkedin.com/in/aperezrivero
          </a>

          <span>|</span>

          <a
            href="https://github.com/aperez-999"
            className="hover:underline"
          >
            github.com/aperez-999
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${border} mb-3`}>
          SUMMARY
        </h2>

        <p className="text-sm leading-relaxed">
          Full-stack software developer and FIU Computer Science student with
          experience shipping production features at Boats Group using React,
          TypeScript, Node.js, and AWS. Skilled in building scalable web
          applications, developing REST APIs, and integrating AI-driven
          functionality. U.S. citizen, open to remote or on-site software
          engineering internships and full-time roles.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${border} mb-3`}>
          EXPERIENCE
        </h2>

        <div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h3 className="font-bold">
              Boats Group – Software Developer Intern
            </h3>
            <span>Jun 2025 – Aug 2025</span>
          </div>

          <p className="italic mb-2">Miami, FL</p>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Shipped 10+ production features in Listings Editor using React,
              TypeScript, Node.js, and Tailwind CSS.
            </li>
            <li>
              Enhanced photo-upload UX and resolved CORS/image bugs, reducing
              invalid submissions by 80%.
            </li>
            <li>
              Led E2E development of Private Seller Analytics feature with
              real-time metrics and Kameleoon A/B testing.
            </li>
            <li>
              Built scalable analytics card via container architecture and
              backend APIs, improving modular deployment reliability.
            </li>
            <li>
              Assisted in Agile sprints using Jira and GitHub, contributing to
              PR reviews, QA testing, and AI-assisted code refactoring.
            </li>
            <li>
              Leveraged AWS S3 for asset delivery, reducing image-load latency
              by 20% across listings pages.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${border} mb-3`}>
          PROJECTS
        </h2>

        {/* Offervia */}
        <div className="mb-4">
          <h3 className="font-bold">
            Offervia – AI-Powered Resume &amp; Job Search Platform
            <span className="font-normal">
              {' '}
              | Next.js, TypeScript, Supabase, OpenAI API, Tailwind CSS
            </span>
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Built and launched an AI-driven SaaS platform for resume
              tailoring, interview coaching, and job-posting analysis.
            </li>
            <li>
              Implemented secure authentication (email + Google OAuth), rate
              limiting, and transactional email verification for production
              readiness.
            </li>
            <li>
              Integrated OpenAI API for context-aware resume rewriting and
              deployed to offervia.app with SEO optimization and analytics.
            </li>
            <li>
              Achieved 95+ PageSpeed score and scalable serverless deployment
              using Next.js 15 and Vercel.
            </li>
          </ul>
        </div>

        {/* NutriFlow */}
        <div className="mb-4">
          <h3 className="font-bold">
            NutriFlow – Full-Stack Fitness &amp; Nutrition App
            <span className="font-normal">
              {' '}
              | React, Node.js, Express, MongoDB, JWT
            </span>
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Built and deployed MERN application with JWT authentication
              scaling to 50+ active users.
            </li>
            <li>
              Developed REST APIs connecting food logs, workout planner, and AI
              Fitness Chatbot (Groq API).
            </li>
            <li>
              Optimized database queries and caching, reducing dashboard load
              times by 40%.
            </li>
            <li>
              Delivered responsive UI using React and Tailwind CSS, receiving
              4.7-star user feedback during beta.
            </li>
          </ul>
        </div>

        {/* Trusted Health Rates */}
        <div>
          <h3 className="font-bold">
            Trusted Health Rates
            <span className="font-normal">
              {' '}
              | React, Node.js, MongoDB, EmailJS
            </span>
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Developed full-stack health insurance platform improving quote
              comparison workflow.
            </li>
            <li>
              Implemented automated email quote system via EmailJS, boosting
              lead interaction by 45%.
            </li>
            <li>
              Optimized metadata and SEO components, increasing organic traffic
              by 60% post-launch.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${border} mb-3`}>
          TECHNICAL SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <p>
            <span className="font-bold">Languages:</span> JavaScript (ES6+),
            TypeScript, Python, Java, C, HTML, CSS
          </p>

          <p>
            <span className="font-bold">Frontend:</span> React.js, Next.js,
            Redux, Tailwind CSS, Chakra UI, Shadcn UI, Responsive Design
          </p>

          <p>
            <span className="font-bold">Backend &amp; APIs:</span> Node.js,
            Express.js, REST APIs, OpenAI API, Groq API, Flask, Django
          </p>

          <p>
            <span className="font-bold">Databases:</span> MongoDB, PostgreSQL,
            Firebase, SQL
          </p>

          <p>
            <span className="font-bold">Tools:</span> Git, GitHub, Jira,
            Docker, AWS (S3, EC2), Vercel, Postman
          </p>

          <p>
            <span className="font-bold">Methodologies:</span> Agile / Scrum,
            Unit Testing, A/B Testing
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className={`text-xl font-bold border-b ${border} mb-3`}>
          EDUCATION
        </h2>

        <div className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-bold">
              Florida International University (FIU)
            </h3>
            <span>Miami, FL</span>
          </div>

          <div className="flex justify-between text-sm">
            <p>Bachelor of Science in Computer Science – GPA: 3.95</p>
            <p>Jun 2024 – Expected Aug 2026</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="font-bold">
              The Honors College at Miami Dade College
            </h3>
            <span>Miami, FL</span>
          </div>

          <div className="flex justify-between text-sm">
            <p>Associate of Arts in Computer Science – GPA: 3.75</p>
            <p>Jun 2022 – May 2024</p>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className={`hover:underline ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Resume;