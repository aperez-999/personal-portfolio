import React, { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Resume = lazy(() => import('../sections/Resume'));
const NotFound = lazy(() => import('../pages/NotFound'));

const loaderWrapper = (element) => (
  <Suspense fallback={<div className="p-8">Loading...</div>}>
    {element}
  </Suspense>
);

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: loaderWrapper(<HomePage />) },
      { path: 'about', element: loaderWrapper(<AboutPage />) },
      { path: 'skills', element: loaderWrapper(<SkillsPage />) },
      { path: 'projects', element: loaderWrapper(<ProjectsPage />) },
      { path: 'projects/:slug', element: loaderWrapper(<ProjectDetail />) },
      { path: 'resume', element: loaderWrapper(<Resume />) },
      { path: '*', element: loaderWrapper(<NotFound />) },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
