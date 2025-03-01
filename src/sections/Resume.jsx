import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeProvider';
import Footer from '../components/Footer';
const Resume = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-8 px-6 max-w-4xl mx-auto my-8 shadow-lg transition-colors duration-300`}>
      {/* Header */}
      <header className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} pb-4 mb-6`}>
        <h1 className="text-3xl font-bold text-center mb-2">ALEJANDRO PEREZ-RIVERO</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
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
            <h3 className="font-bold">Miami Dade College</h3>
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
        
        {/* NutriFlow */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">NutriFlow - Founder & Full-Stack Developer</h3>
            <span>Jan 2025 – Present</span>
          </div>
          <p className="italic mb-2">Miami, FL</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed <span className="font-bold">NutriFlow</span> an advanced fitness and nutrition tracking platform utilizing the <span className="font-bold">MERN stack</span>.</li>
            <li>Implemented robust authentication with <span className="font-bold">JWT</span>, including secure account creation, login, and password reset.</li>
            <li>Engineered <span className="font-bold">RESTful API</span> architecture to integrate data between fitness logger, workout planner, and dashboard.</li>
            <li>Designed a comprehensive <span className="font-bold">Fitness Hub</span> with categorized exercise splits and personalized workout plans.</li>
            <li>Optimized database queries and API response times to enhance performance and reduce load times.</li>
            <li>Integrated dynamic UI with <span className="font-bold">Tailwind CSS</span> and <span className="font-bold">React.js</span> for an intuitive user experience.</li>
          </ul>
        </div>
        
        {/* Trusted Health Rates */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">Trusted Health Rates - Founder & Full-Stack Developer</h3>
            <span>Sep 2024 – Nov 2024</span>
          </div>
          <p className="italic mb-2">Miami, FL</p>
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

      {/* Projects Section */}
      <section className="mb-6">
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>PROJECTS</h2>
        
        {/* PerezDev's Production Store */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <h3 className="font-bold">PerezDev's Production Store | <span className="font-normal">React.js, Express.js, MongoDB, Node.js, Tailwind CSS</span></h3>
            <span>Sep 2024 – Oct 2024</span>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Developed e-commerce production showcase platform using <span className="font-bold">React.js</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">Express.js</span>, and <span className="font-bold">MongoDB</span>.</li>
            <li>Implemented full CRUD functionality via RESTful APIs for seamless product management.</li>
            <li>Optimized database efficiency, reducing query times by <span className="font-bold">40%</span>.</li>
            <li>Enhanced user experience with Tailwind CSS for a modern and responsive UI.</li>
          </ul>
        </div>
        
        {/* AI-Powered Resume Enhancer */}
        <div>
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
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className={`text-xl font-bold border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} mb-3`}>TECHNICAL SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <p><span className="font-bold">Programming Languages:</span> JavaScript (ES6+), Python, Java, HTML, CSS</p>
          </div>
          <div>
            <p><span className="font-bold">Frontend:</span> React.js, Redux, Chakra UI, Tailwind CSS</p>
          </div>
          <div>
            <p><span className="font-bold">Backend:</span> Node.js, Express.js, RESTful APIs</p>
          </div>
          <div>
            <p><span className="font-bold">Databases:</span> MongoDB, PostgreSQL, Firebase</p>
          </div>
          <div>
            <p><span className="font-bold">Tools & Platforms:</span> Git, Postman, Chrome DevTools, Figma, Microsoft Office</p>
          </div>
          <div>
            <p><span className="font-bold">Other:</span> Responsive Design, UI/UX, Adobe Photoshop, Adobe Premiere Pro</p>
          </div>
        </div>
      </section>

      {/* Back to Portfolio Link */}
      <div className="mt-8 text-center">
        <Link to="/" className={`${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
          ← Back to Portfolio
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
