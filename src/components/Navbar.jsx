import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);

  const isHome = location.pathname === "/";
  const isResume = location.pathname === "/resume";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  // Track which section is in view (home page only) to highlight the active link
  useEffect(() => {
    if (!isHome) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  // On subpages the top of the page is light, so the translucent bar would
  // hide its light-colored links — keep it solid there (and once scrolled).
  const solid = scrolled || !isHome;

  const goToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={false}
      animate={solid ? "solid" : "transparent"}
      variants={{
        solid: {
          backgroundColor: "rgba(26,18,11,0.85)",
          borderColor: "rgba(176,137,72,0.18)",
          boxShadow: "0 8px 30px -12px rgba(26,18,11,0.55)",
        },
        transparent: {
          backgroundColor: "rgba(26,18,11,0)",
          borderColor: "rgba(247,241,231,0)",
          boxShadow: "0 0 0 0 rgba(0,0,0,0)",
        },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md print:hidden"
    >
      {/* Scroll progress — thin brass gradient tracking page depth */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-espresso-50/5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brass-dark via-brass to-brass-light"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <motion.nav
        initial={false}
        animate={{ height: solid ? 60 : 76 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="container-p flex items-center justify-between"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => goToSection(e, "home")}
          className="flex items-center gap-2.5 group"
          aria-label="PerezDev home"
        >
          <motion.img
            src="./assets/images/perezdev-mark.png"
            alt="PerezDev"
            initial={false}
            animate={{ width: solid ? 32 : 36, height: solid ? 32 : 36 }}
            whileHover={{ scale: 1.08, rotate: 4 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg ring-1 ring-brass/40 group-hover:ring-brass group-hover:shadow-[0_0_0_4px_rgba(176,137,72,0.15)] transition-shadow"
          />
          <span className="text-espresso-50 font-serif text-lg tracking-tight group-hover:text-brass-light/90 transition-colors">
            Perez<span className="text-brass-light">Dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => {
            const active = isHome && activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => goToSection(e, s.id)}
                className={`relative px-3.5 py-2 text-sm rounded-full transition-colors ${
                  active ? "text-brass-light" : "text-espresso-100/80 hover:text-espresso-50"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-brass/12 ring-1 ring-brass/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{s.name}</span>
              </a>
            );
          })}
          <NavLink
            to="/resume"
            className={`relative px-3.5 py-2 text-sm rounded-full transition-colors ${
              isResume ? "text-brass-light" : "text-espresso-100/80 hover:text-espresso-50"
            }`}
          >
            {isResume && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-full bg-brass/12 ring-1 ring-brass/30"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">Resume</span>
          </NavLink>
          <a
            href="mailto:alexperezr456@gmail.com"
            className="btn-accent ml-3 !px-5 !py-2 hover:scale-105 hover:shadow-lift active:scale-95 transition-transform"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-espresso-50 hover:bg-espresso-50/10 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              {isOpen ? <HiX size={22} /> : <HiOutlineMenuAlt4 size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-espresso-950/97 backdrop-blur-md border-t border-espresso-50/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-p py-4 flex flex-col">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => goToSection(e, s.id)}
                  className="py-3 text-espresso-100/85 hover:text-brass-light hover:pl-1.5 border-b border-espresso-50/5 transition-all"
                >
                  {s.name}
                </a>
              ))}
              <NavLink
                to="/resume"
                onClick={() => setIsOpen(false)}
                className={`py-3 hover:pl-1.5 border-b border-espresso-50/5 transition-all ${
                  isResume ? "text-brass-light pl-1.5" : "text-espresso-100/85 hover:text-brass-light"
                }`}
              >
                Resume
              </NavLink>
              <a
                href="mailto:alexperezr456@gmail.com"
                className="btn-accent mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
