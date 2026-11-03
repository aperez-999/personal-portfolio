export const projects = [
  {
    id: 1,
    slug: "offervia-ai-career-platform",
    title: "Offervia v2.2 - AI Career Platform",
    description: "AI career app I founded. v2.2 covers resume tailoring, interview coaching, cover letters with PDF export, ATS keyword scanning, and a workspace per application. It also has interactive demos. The stack is Next.js 15, TypeScript, Supabase, and the Groq API, with Stripe for the Pro plan and usage limits. Security includes a content security policy and 26 row-level security policies. Errors go to Sentry.",
    image: "./assets/images/Offervia.png",
    liveUrl: "https://www.offervia.app/",
    technologies: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Groq API", "Sentry", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Playwright", "Nodemailer"],
    featured: true,
    highlights: [
      "Resume tailoring, interview coaching, and cover letters with PDF export",
      "Content security policy and 26 row-level security policies",
      "Stripe Pro plan with usage limits",
      "TypeScript app with Playwright tests and Sentry"
    ]
  },
  {
    id: 2,
    slug: "perezdev-hub-ai-workflow",
    title: "PerezDev CLI - AI agent setup",
    description: "CLI that writes skills, rules, and MCP server config once, then syncs them to Claude Code, Codex, Cursor, GitHub Copilot, Cline, Windsurf, and Roo Code. The npm package is perezdev-hub and the command is perezdev. A lockfile, perezdev.lock.json, records what was installed. perezdev doctor checks those files, and the CI workflow fails when they drift from the lockfile.",
    image: "./assets/images/PerezDevHub.png",
    codeUrl: "https://github.com/aperez-999/perezdev-hub",
    liveUrl: null,
    technologies: ["TypeScript", "Node.js", "MCP", "GitHub Actions"],
    featured: true,
    highlights: [
      "Syncs skills, rules, and MCP server config to Claude Code, Codex, Cursor, Copilot, Cline, Windsurf, and Roo Code",
      "perezdev.lock.json records the files that were installed",
      "perezdev doctor fails CI when generated files drift from the lockfile"
    ]
  },
  {
    id: 3,
    slug: "nutriflow-ai-fitness-platform",
    title: "NutriFlow - Fitness and nutrition app",
    description: "Web app for meal and workout logging, recovery check-ins, readiness scores, saved plans, and AI coaching. Built with React, Node.js, Express, and MongoDB, with JWT auth and the Groq API for coaching. Query and caching changes cut dashboard load times by 40%. A Swift iOS app is in development and is not released yet.",
    image: "./assets/images/nutriflow-web.png",
    preview: {
      web: "./assets/images/nutriflow-web.png",
      ios: "./assets/images/nutriflow-ios.png",
    },
    codeUrl: "https://github.com/aperez-999/nutriflow",
    liveUrl: "https://nutriflowdev.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Groq API", "Swift (iOS, in development)"],
    featured: true,
    highlights: [
      "Meal and workout logging, recovery check-ins, readiness scores, and saved plans on the web app",
      "AI coaching through the Groq API",
      "Dashboard load times cut by 40% after query and caching changes",
      "Swift iOS app is in development and is not released yet"
    ]
  },
  {
    id: 4,
    slug: "fitness-wellness-tracker-capstone",
    title: "Dayform - Capstone Project",
    description: "Dayform is the fitness app my FIU team shipped for Capstone 2. You sign in, log workouts and meals, set goals, and check a weekly summary on the dashboard. Gemini can estimate a meal or write a short note from the last 28 days of logs. If that key is off, you still type the numbers in yourself. I was the team lead: Scrum board in Jira, daily standups, and the React, Express, and MongoDB work with the group. The site is on Vercel and the data is in MongoDB Atlas.",
    image: "./assets/images/FitnessTracker.png",
    codeUrl: "https://github.com/aperez-999/fitness-wellness-tracker",
    liveUrl: "https://dayform-fitness.vercel.app/",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Gemini API", "Vercel"],
    featured: false,
    highlights: [
      "Team lead for Capstone 2. Ran Scrum, kept the Jira tickets moving, and held daily standups.",
      "Signup and login with JWT, workout logs, meals with calories and macros, and goals that can count from those workouts.",
      "Dashboard for the week's meals and the next few goals, plus optional Gemini meal estimates and wellness notes.",
      "React and Vite on the front, Express and MongoDB on the API. Both are deployed on Vercel."
    ]
  },
  {
    id: 5,
    slug: "corazones-vivos-nonprofit",
    title: "Corazones Vivos Inc. - Nonprofit site",
    description: "Site for Corazones Vivos, a nonprofit, with community resources and events. Built with Next.js and TypeScript, deployed on Vercel, with bilingual pages and SEO so the site can be crawled and indexed.",
    image: "./assets/images/CorazonesVivos.png",
    liveUrl: "https://corazonesvivos.org",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel", "i18n"],
    featured: false
  },
  {
    id: 6,
    slug: "trusted-health-rates",
    title: "Trusted Health Rates - Insurance demo",
    description: "A small insurance app: get a quote, sign in, and look at policies and claims from a dashboard. React on the front, Node and Express with MongoDB behind it, JWT for the session, and EmailJS for the messages.",
    image: "./assets/images/Health Insurance Website.png",
    codeUrl: "https://github.com/aperez-999/health-insurance-app",
    liveUrl: "https://aperez-999.github.io/health-insurance-app/",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "EmailJS", "JWT Authentication", "RESTful API"]
  },
  {
    id: 7,
    slug: "interactive-todo-app",
    title: "To-Do App",
    description: "A React to-do list. Add a task, check it off, or delete it. The list stays in local storage, so a refresh doesn't wipe it. A few transitions keep the list from jumping when something changes.",
    image: "./assets/images/Todo App.png",
    codeUrl: "https://github.com/aperez-999/todo-app",
    liveUrl: "https://aperez-999.github.io/todo-app/",
    technologies: ["React", "CSS", "JavaScript", "Local Storage"]
  },
  {
    id: 8,
    slug: "random-quote-generator",
    title: "Random Quote Generator",
    description: "Click once and it pulls a quote from an API. If you like it, there's a button to tweet it. React, CSS, and not much else.",
    image: "./assets/images/RandomQuoteGen.png",
    liveUrl: "https://aperez-999.github.io/random-quote-app/",
    technologies: ["React", "CSS", "API Integration", "Twitter Integration"]
  },
  {
    id: 9,
    slug: "calorie-logger-workout-app",
    title: "Calorie and Workout Logger",
    description: "Log what you ate and what you did that day, then see a short summary of the numbers. React and Tailwind. Everything stays in the browser.",
    image: "./assets/images/Caloric App.png",
    codeUrl: "https://github.com/aperez-999/caloric-app",
    liveUrl: "https://aperez-999.github.io/caloric-app/",
    technologies: ["React", "TailwindCSS", "JavaScript", "Local Storage"]
  },
  {
    id: 10,
    slug: "interactive-calculator-app",
    title: "Calculator",
    description: "A calculator in HTML, CSS, and JavaScript. Add, subtract, multiply, divide, and store a number in memory so you can bring it back.",
    image: "./assets/images/calculator-app.png",
    codeUrl: "https://github.com/aperez-999/calculator-app",
    liveUrl: "https://aperez-999.github.io/calculator-app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 11,
    slug: "responsive-weather-app",
    title: "Weather App",
    description: "Type a city and it shows the current weather from a public API. HTML, CSS, and JavaScript, and the layout holds up on a phone.",
    image: "./assets/images/weather-app.png",
    liveUrl: "https://aperez-999.github.io/weather-app/",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"]
  },
]; 