import React, { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
// Eager-load home so the first paint isn't a blank Suspense gap
import HomePage from '../pages/HomePage';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Resume = lazy(() => import('../sections/Resume'));
const NotFound = lazy(() => import('../pages/NotFound'));

const PageFallback = () => (
  <div className="min-h-[50vh] bg-espresso-950" aria-hidden="true" />
);

const loaderWrapper = (element) => (
  <Suspense fallback={<PageFallback />}>{element}</Suspense>
);

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
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
