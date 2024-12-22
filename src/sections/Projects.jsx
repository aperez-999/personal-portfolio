export default function Projects() {
  const projects = [
    {
      title: "Responsive Weather App",
      description: "Built using HTML, CSS, and JavaScript, this weather app provides real-time weather updates for any city by fetching a weather API.",
      image: "/personal-portfolio/assets/images/weather-app.png",
      codeUrl: "https://github.com/aperez-999/weather-app",
      liveUrl: "https://aperez-999.github.io/weather-app/"
    },
    {
      title: "Health Insurance Website (Responsive)",
      description: "Built using HTML, CSS, and JavaScript, this website provides a simple and intuitive interface for managing health insurance policies.",
      image: "/personal-portfolio/assets/images/Health Insurance Website.png",
      codeUrl: "https://github.com/aperez-999/health-insurance-app",
      liveUrl: "https://aperez-999.github.io/health-insurance-app/"
    },
    {
      title: "Responsive Calorie Logger and Workout App",
      description: "Built using HTML, CSS, JavaScript, and ReactJS this calorie and workout logger keeps track of daily calorie intake, exercise sessions, and provides a summary based on the users inputs with friendly UI.",
      image: "/personal-portfolio/assets/images/Caloric App.png",
      codeUrl: "https://github.com/aperez-999/caloric-app",
      liveUrl: "https://aperez-999.github.io/caloric-app/"
    },
    {
      title: "Interactive To-Do App",
      description: "Built using HTML, CSS, JavaScript, and React this To-Do app stores its list inside local storage and allows users to add, delete, and mark tasks as completed with advanced transitions and animations for user enjoyment.",
      image: "/personal-portfolio/assets/images/Todo App.png",
      codeUrl: "https://github.com/aperez-999/todo-app",
      liveUrl: "https://aperez-999.github.io/todo-app/"
    },
    {
      title: "Random Quote Generator",
      description: "Built using ReactJS and CSS, this quote generator generates random quotes from an API server on the click of a button and also makes users tweet the quote if needed, with clean and formatted UI.",
      image: "/personal-portfolio/assets/images/RandomQuoteGen.png",
      codeUrl: "https://github.com/aperez-999/random-quote-app",
      liveUrl: "https://aperez-999.github.io/random-quote-app/"
    },
    {
      title: "Interactive Calculator App",
      description: "Built using HTML, CSS, and JavaScript, this calculator app supports basic arithmetic operations (+, -, *, /) and also includes a memory feature for storing and recalling previous calculations.",
      image: "/personal-portfolio/assets/images/calculator-app.png",
      codeUrl: "https://github.com/aperez-999/calculator-app",
      liveUrl: "https://aperez-999.github.io/calculator-app/"
    }
    
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Here are the projects I've worked on that showcase my skills in web development
          and problem-solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    View Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-600 hover:text-white transition-colors">
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}