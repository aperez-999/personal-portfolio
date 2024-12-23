import Socials from "../components/Socials";

export default function Home() {
  return (
    <section id="home" className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/personal-portfolio/assets/images/profile-pic.jpg"
              alt="Alejandro Perez"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hello! I'm Alejandro Perez
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Aspiring Full Stack Developer Based in Miami Florida, USA
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Crafting intuitive and high-performance web interfaces for great digital outcomes
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Florida International University Honors | Computer Science BS (Expected 2026)
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#skills" 
                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700  transition-colors">
                Work With Me
              </a>
              <a href="/personal-portfolio/resume.html" target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                      See my Resume
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}