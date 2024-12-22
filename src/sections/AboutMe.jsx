export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/personal-portfolio/assets/images/about-me.jpg"
              alt="About Me"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hi, I'm Alejandro Perez, an 18-year-old Computer Science student at Florida International 
                University's Honors College. Born and raised in Miami, Florida, I come from a Hispanic 
                background—both of my parents are from Cuba.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Early Interest In Technology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From a young age, I've always been drawn to computers. That curiosity ultimately led me 
                to pursue a degree in Computer Science, where I could turn my passion for computers into a career.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Goals and Aspirations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                My long-term goal is to become a full-stack developer, creating websites and applications 
                that are not only visually appealing but also efficient and seamless in their functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
