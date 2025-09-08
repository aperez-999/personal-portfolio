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

The project uses React Router v7 Data Router, lazy-loaded routes, and a shared layout:

```
src/
├── app/
│   ├── layout/
│   │   └── RootLayout.jsx         # Shared layout with Navbar/Footer/ScrollRestoration
│   └── router.jsx                 # createHashRouter + RouterProvider
├── components/                    # Reusable UI components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectFilter.jsx
│   ├── SkillBar.jsx
│   ├── Socials.jsx
│   └── ThemeProvider.jsx
├── data/                          # Data files for content
│   ├── personalInfo.js
│   ├── projects.js
│   └── skills.js
├── pages/                         # Route components
│   ├── AboutPage.jsx
│   ├── HomePage.jsx
│   ├── NotFound.jsx
│   ├── ProjectDetail.jsx
│   ├── ProjectsPage.jsx
│   └── SkillsPage.jsx
├── sections/                      # Page sections used on Home and pages
│   ├── AboutMe.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   └── Skills.jsx
└── index.jsx                      # Entry point
```


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Alejandro Perez - [alexperezr456@gmail.com](mailto:alexperezr456@gmail.com)

Project Link: [https://github.com/aperez-999/personal-portfolio](https://github.com/aperez-999/personal-portfolio)
