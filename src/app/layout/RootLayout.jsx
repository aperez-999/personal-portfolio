import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function useHashScroll() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 40);
      }
    }
  }, [location]);
}

function useDocumentTitle() {
  const location = useLocation();
  React.useEffect(() => {
    const map = {
      '/': 'Alejandro Perez-Rivero | Full-Stack & AI Software Engineer',
      '/about': 'About | Alejandro Perez-Rivero',
      '/skills': 'Skills | Alejandro Perez-Rivero',
      '/projects': 'Projects | Alejandro Perez-Rivero',
      '/resume': 'Resume | Alejandro Perez-Rivero',
    };
    const base = 'Alejandro Perez-Rivero | Full-Stack & AI Software Engineer';
    document.title = map[location.pathname] || base;
  }, [location.pathname]);
}

function useScrollOnNavigate() {
  const location = useLocation();
  const prevPath = React.useRef(location.pathname);

  React.useLayoutEffect(() => {
    const pathChanged = prevPath.current !== location.pathname;
    prevPath.current = location.pathname;
    if (!pathChanged || location.state?.scrollToId || location.hash) return;
    // Instant, so a long page doesn't glide through the new route.
    // In-page links still use smooth scrolling.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname, location.hash, location.state]);
}

export default function RootLayout() {
  useHashScroll();
  useDocumentTitle();
  useScrollOnNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-espresso-50 text-espresso-900">
      <Navbar />
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main-content')?.focus();
          document.getElementById('main-content')?.scrollIntoView({ block: 'start' });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-espresso-900 focus:text-espresso-50 focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <main id="main-content" role="main" tabIndex={-1} key={location.pathname} className="page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
