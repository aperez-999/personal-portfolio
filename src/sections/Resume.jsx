import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeProvider';
const Resume = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-8 px-6 max-w-4xl mx-auto my-8 shadow-lg transition-colors duration-300`}>
      {/* Header */}
      <header className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} pb-4 mb-6`}>
        <h1 className="text-3xl font-bold text-center mb-2">ALEJANDRO PEREZ-RIVERO</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span>Miami, FL</span>
          <span className="hidden sm:inline">|</span>
          <span>(786) 481-8530</span>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:alexperezr456@gmail.com" className="hover:underline">alexperezr456@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://linkedin.com/in/alejandroperezrivero" className="hover:underline">linkedin.com/in/alejandroperezrivero</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://github.com/aperez-999" className="hover:underline">github.com/aperez-999</a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>EDUCATION</h2>
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">Florida International University</h3>
            <span className="font-bold">Miami, FL</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <p>Bachelor of Science in Computer Science <span className="italic">(GPA: 3.95)</span></p>
            <p>June 2024 – Present</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">The Honors College at Miami Dade College</h3>
            <span className="font-bold">Miami, FL</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <p>Associate's of Arts in Computer Science <span className="italic">(GPA: 3.75)</span></p>
            <p>June 2022 – May 2024</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>EXPERIENCE</h2>
        
        {/* Boats Group */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">Boats Group - Software Developer Intern</h3>
            <span>Jun 2025 – Aug 2025</span>
          </div>
          <p className="italic mb-2">Miami, FL</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>• Shipped <span className="font-bold">10+ production features</span> in <span className="font-bold">Listings Editor</span> using <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">Tailwind CSS</span>.</li>
            <li>• Improved <span className="font-bold">photo-upload UX</span> and fixed <span className="font-bold">CORS/image bugs</span>, cutting invalid submissions by <span className="font-bold">80%</span>.</li>
            <li>• Led <span className="font-bold">E2E build</span> of a <span className="font-bold">Private Seller Analytics</span> feature with <span className="font-bold">real-time metrics</span> & <span className="font-bold">Kameleoon A/B testing</span>.</li>
            <li>• Built <span className="font-bold">scalable analytics card</span> via <span className="font-bold">container architecture</span>, <span className="font-bold">backend APIs</span> & <span className="font-bold">phased feature flags</span>.</li>
            <li>• Collaborated in <span className="font-bold">Agile sprints</span>, managing <span className="font-bold">JIRA tickets</span>, <span className="font-bold">GitHub PRs</span>, and <span className="font-bold">QA workflows</span>.</li>
            <li>• Leveraged <span className="font-bold">AWS S3</span> for asset storage, reducing <span className="font-bold">image-load latency</span> by <span className="font-bold">20%</span> across listings pages.</li>
            <li>• Drove <span className="font-bold">code-quality gains</span> by adopting <span className="font-bold">AI-assisted refactoring</span>, trimming review cycles by <span className="font-bold">15%</span>.</li>
          </ul>
        </div>


      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>PROJECTS</h2>
        
        {/* NutriFlow */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">NutriFlow | <span className="font-normal">React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS</span></h3>
            <span>Jan 2025 – Present</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed <span className="font-bold">NutriFlow</span> an advanced fitness and nutrition tracking platform utilizing the <span className="font-bold">MERN stack</span>.</li>
            <li>Implemented robust authentication with <span className="font-bold">JWT</span>, including secure account creation, login, and password reset.</li>
            <li>Engineered <span className="font-bold">RESTful API</span> architecture to integrate data between fitness logger, workout planner, and dashboard.</li>
            <li>Designed a comprehensive <span className="font-bold">Fitness Hub</span> with categorized exercise splits and personalized workout plans.</li>
            <li>Optimized database queries and API response times to enhance performance and reduce load times.</li>
            <li>Integrated dynamic UI with <span className="font-bold">Tailwind CSS</span> and <span className="font-bold">React.js</span> for an intuitive user experience.</li>
          </ul>
        </div>
        
        {/* AI-Powered Resume Enhancer */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">AI-Powered Resume Enhancer | <span className="font-normal">React.js, Python, OpenAI API, Express.js, MongoDB</span></h3>
            <span>Dec 2024 – Jan 2025</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developing AI-driven resume optimization tool utilizing Natural Language Processing (NLP).</li>
            <li>Integrating OpenAI's GPT API for real-time resume enhancement based on industry insights.</li>
            <li>Building secure backend with Node.js, Express.js, and MongoDB to manage user profiles.</li>
            <li>Creating interactive UI with React.js and Tailwind CSS for seamless user experience.</li>
          </ul>
        </div>
        
        {/* Trusted Health Rates */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">Trusted Health Rates | <span className="font-normal">React.js, Node.js, TailwindCSS, EmailJS</span></h3>
            <span>Sep 2024 – Nov 2024</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Founded <span className="font-bold">Trusted Health Rates</span>, a health insurance platform using <span className="font-bold">React.js</span>, <span className="font-bold">TailwindCSS</span>, and <span className="font-bold">Node.js</span>.</li>
            <li>Developed automated insurance quoting system, improving client engagement by <span className="font-bold">45%</span>.</li>
            <li>Integrated <span className="font-bold">EmailJS</span> for real-time notifications, boosting lead conversion rates by <span className="font-bold">30%</span>.</li>
            <li>Built high-performance backend API handling 100+ monthly user requests with secure data processing.</li>
            <li>Optimized SEO strategies, increasing organic traffic by <span className="font-bold">60%</span> and improving search rankings.</li>
            <li>Implemented robust security measures ensuring encrypted data transmission and industry compliance.</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills & Certifications Section */}
      <section>
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>TECHNICAL SKILLS & CERTIFICATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <p><span className="font-bold">Languages:</span> JavaScript (ES6+), TypeScript, Python, Java, HTML, CSS</p>
          </div>
          <div>
            <p><span className="font-bold">Certifications:</span> GitHub Foundations, HTML & CSS Responsive Design, JavaScript DSA</p>
          </div>
          <div>
            <p><span className="font-bold">Frontend:</span> React.js, Redux, Tailwind CSS, Chakra UI, Shadcn, Responsive Design, UI/UX</p>
          </div>
          <div>
            <p><span className="font-bold">Backend:</span> Node.js, Express.js, RESTful APIs, OpenAI API</p>
          </div>
          <div>
            <p><span className="font-bold">Databases:</span> MongoDB, PostgreSQL, Firebase, SQL</p>
          </div>
          <div>
            <p><span className="font-bold">Tools & Platforms:</span> Git, GitHub, JIRA, Postman, Bruno, Deno, Chrome DevTools, Figma, AWS (S3, EC2)</p>
          </div>
          <div>
            <p><span className="font-bold">Other:</span> Feature Flags (Kameleoon), Agile/Scrum, Microsoft Office, Adobe Photoshop, Adobe Premiere Pro</p>
          </div>
        </div>
      </section>

      {/* Back to Portfolio Link */}
      <div className="mt-8 text-center">
        <Link to="/" className={`${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Resume;
