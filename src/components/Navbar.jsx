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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-espresso-950/90 backdrop-blur-md border-b border-espresso-50/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-p flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => goToSection(e, "home")}
          className="flex items-center gap-2.5 group"
          aria-label="PerezDev home"
        >
          <span className="grid place-items-center h-9 w-9 rounded-lg border border-brass/60 text-brass font-serif font-semibold text-lg leading-none group-hover:bg-brass group-hover:text-espresso-950 transition-colors">
            P
          </span>
          <span className="text-espresso-50 font-serif text-lg tracking-tight">
            Perez<span className="text-brass">Dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => goToSection(e, s.id)}
              className="px-3.5 py-2 text-sm text-espresso-100/80 hover:text-espresso-50 transition-colors rounded-full"
            >
              {s.name}
            </a>
          ))}
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `px-3.5 py-2 text-sm transition-colors rounded-full ${
                isActive ? "text-brass" : "text-espresso-100/80 hover:text-espresso-50"
              }`
            }
          >
            Resume
          </NavLink>
          <a href="mailto:alexperezr456@gmail.com" className="btn-accent ml-3 !px-5 !py-2">
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
          {isOpen ? <HiX size={22} /> : <HiOutlineMenuAlt4 size={22} />}
        </button>
      </nav>

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
                  className="py-3 text-espresso-100/85 hover:text-brass border-b border-espresso-50/5 transition-colors"
                >
                  {s.name}
                </a>
              ))}
              <NavLink
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="py-3 text-espresso-100/85 hover:text-brass border-b border-espresso-50/5 transition-colors"
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
    </header>
  );
}
