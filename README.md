# Alejandro Perez - Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Project Showcase**: Filter projects by technology
- **Skills Section**: Visual representation of skills with progress bars
- **Modular Architecture**: Easy to update and maintain

## 🛠️ Technologies Used

- **React.js**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling

## 📂 Project Structure

The project follows a modular structure for easy maintenance:

```
src/
├── components/         # Reusable UI components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectFilter.jsx
│   ├── SkillBar.jsx
│   ├── Socials.jsx
│   └── ThemeProvider.jsx
├── data/               # Data files for content
│   ├── personalInfo.js
│   ├── projects.js
│   └── skills.js
├── sections/           # Main page sections
│   ├── AboutMe.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   └── Skills.jsx
├── App.jsx             # Main application component
└── index.js            # Entry point
```

## 🔄 How to Update Content

### Adding a New Project

1. Open `src/data/projects.js`
2. Add a new project object to the array:

```javascript
{
  id: 9, // Increment from the last ID
  title: "Your New Project",
  description: "Description of your project",
  image: "/personal-portfolio/assets/images/your-project-image.png",
  codeUrl: "https://github.com/your-username/your-repo",
  liveUrl: "https://your-live-demo-url.com",
  technologies: ["React", "Tailwind CSS", "Other Tech"]
}
```

### Updating Skills

1. Open `src/data/skills.js`
2. Add or modify skills in the appropriate array:

```javascript
// For programming skills
{ name: "New Skill", proficiency: 80 }

// For tools and technologies
"New Tool"

// For frameworks
{ name: "New Framework", icon: "framework-icon" }

// For certifications
{
  name: "New Certification",
  issuer: "Certification Provider",
  date: "2024",
  url: "https://certification-url.com"
}
```

### Updating Personal Information

1. Open `src/data/personalInfo.js`
2. Update the relevant fields in the personalInfo object

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/aperez-999/personal-portfolio.git
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Alejandro Perez - [aperez999@example.com](mailto:aperez999@example.com)

Project Link: [https://github.com/aperez-999/personal-portfolio](https://github.com/aperez-999/personal-portfolio)
