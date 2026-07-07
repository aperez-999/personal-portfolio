import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider } from '../../components/ThemeProvider';

function useHashScroll() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Use a small timeout to allow layout to settle
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location]);
}

function useDocumentTitle() {
  const location = useLocation();
  React.useEffect(() => {
    const map = {
      '/': 'PerezDev | Portfolio',
      '/about': 'About | PerezDev',
      '/skills': 'Skills | PerezDev',
      '/projects': 'Projects | PerezDev',
      '/resume': 'Resume | PerezDev',
    };
    const base = 'PerezDev | Portfolio';
    document.title = map[location.pathname] || base;
  }, [location.pathname]);
}

export default function RootLayout() {
  useHashScroll();
  useDocumentTitle();
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Navbar />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
        <main id="main-content" className="pt-20" role="main">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </ThemeProvider>
  );
}
