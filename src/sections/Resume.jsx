import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-900 text-white py-12 px-6 transition-all duration-700 ease-in-out transform hover:scale-105">
      <div className="container mx-auto">
        {/* Header / Personal Info */}
        <header className="resume-header text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Alejandro Perez-Rivero</h1>
          <p className="text-lg mb-4">Email: alexperezr456@gmail.com | Phone: (786) 481-8530</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/alejandro-perez-rivero-3209a828b/"
              target="_blank"
              className="text-2xl transition-transform transform hover:scale-110"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/aperez-999"
              target="_blank"
              className="text-2xl transition-transform transform hover:scale-110"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-summary mb-10">
          <h2 className="text-3xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-lg">
            Motivated and skilled software developer with experience in front-end and learning back-end development, passionate about
            building user-centered solutions and advancing skills to eventually be in full-stack web development. Known for strong problem-solving skills
            and commitment to delivering high-quality code.
          </p>
        </section>

        {/* Skills */}
        <section className="resume-skills mb-10">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Programming Languages: JavaScript, HTML, CSS, Java, Python</li>
            <li>Frameworks & Libraries: ReactJS, Node.js (Learning), Tailwind CSS</li>
            <li>Tools: Git, VS Code, Microsoft Word, Excel, Outlook, Powerpoint</li>
            <li>Other: Responsive Design, UI/UX principles, Figma, Adobe Premiere Pro, Adobe Photoshop, Wix Studio</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="resume-experience mb-10">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <div className="job mb-6">
            <h3 className="text-2xl font-bold">Freelance Web Developer</h3>
            <p className="text-lg">Self-Employed | 2023 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed an interactive website for a health insurance company, <a href="https://aperez-999.github.io/health-insurance-app/" target="_blank" className="text-blue-400 hover:underline">TrustedHealthRates</a>, enabling users to receive personalized insurance quotes.</li>
              <li>Implemented advanced data collection forms with real-time validation and automated email submission to streamline client communication.</li>
              <li>Designed and developed responsive user interfaces using JavaScript, HTML, CSS, and React, ensuring seamless functionality across devices.</li>
              <li>Collaborated directly with clients to understand business objectives, resulting in custom-tailored solutions that boosted customer engagement.</li>
            </ul>
          </div>
          <div className="job">
            <h3 className="text-2xl font-bold">Member, National Society of Leadership and Success (NSLS)</h3>
            <p className="text-lg">Florida International University | 2023 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Engaged in leadership training workshops and team collaboration activities to refine communication and project management skills.</li>
              <li>Applied goal-setting strategies and time management techniques to complete freelance projects ahead of deadlines with exceptional client satisfaction.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="resume-education mb-10">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <div className="degree mb-4">
            <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-lg">Miami Dade College Honors | 2022 - 2024 (Dual Enrollment Programs)</p>
            <p className="text-lg">Florida International University Honors | 2024 - Present (Expected to Graduate 2026)</p>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-projects mb-10">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="project mb-6">
            <h3 className="text-2xl font-bold">Calorie Tracker and Workout Routine App</h3>
            <p className="text-lg">
              <a href="https://github.com/aperez-999/caloric-app" target="_blank" className="text-blue-400 hover:underline">GitHub</a> | 
              <a href="https://aperez-999.github.io/caloric-app/" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
            </p>
            <p className="text-lg">Developed a web application that allows users to track their daily calorie intake, log different workout plans, and view their caloric progress using ReactJS, JavaScript, HTML, and CSS.</p>
          </div>
          <div className="project mb-6">
            <h3 className="text-2xl font-bold">Weather App</h3>
            <p className="text-lg">
              <a href="https://github.com/aperez-999/weather-app" target="_blank" className="text-blue-400 hover:underline">GitHub</a> | 
              <a href="https://aperez-999.github.io/weather-app/" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
            </p>
            <p className="text-lg">Built a responsive weather application using JavaScript and CSS that provides real-time weather information using an external API.</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-certifications mb-10">
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Microsoft Word (Office 2016), Certiport Exam</li>
            <li>Microsoft PowerPoint (Office 2016), Certiport Exam</li>
            <li>Microsoft Outlook (Office 2016), Certiport Exam</li>
            <li>National Society of Leadership and Success Induction Certification</li>
            <li>Responsive Web Design (HTML & CSS), freeCodeCamp</li>
            <li>JavaScript Development, freeCodeCamp</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="footer text-center mt-12">
          <div className="footer-socials space-x-6 mb-4">
            <Link to="/" className="text-lg text-blue-400 hover:underline">Home</Link>
            <Link to="/projects" className="text-lg text-blue-400 hover:underline">Projects</Link>
            <Link to="/skills" className="text-lg text-blue-400 hover:underline">Skills</Link>
            <Link to="/about" className="text-lg text-blue-400 hover:underline">About</Link>
          </div>
          <p className="text-sm text-gray-400">© 2024 Alejandro Perez | FIU Honors College</p>
          <div className="socials-in-footer space-x-4 mt-2">
            <a href="https://github.com/aperez-999" target="_blank" className="text-2xl transition-transform transform hover:scale-110">
              <i className="ri-github-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-perez-rivero-3209a828b/" target="_blank" className="text-2xl transition-transform transform hover:scale-110">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="https://www.instagram.com/alejandropz.r/" target="_blank" className="text-2xl transition-transform transform hover:scale-110">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Resume;
