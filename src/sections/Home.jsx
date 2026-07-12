import React from 'react';
import { motion } from 'framer-motion';
import Socials from '../components/Socials';
import { personalInfo } from '../data/personalInfo';
import { HiArrowDown } from 'react-icons/hi';

const stat = (value, label) => ({ value, label });
const stats = [
  stat('3+', 'Years building'),
  stat('12+', 'Shipped projects'),
  stat('1', 'SaaS founded'),
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i },
  }),
};

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-espresso-950 text-espresso-50 scroll-mt-20"
    >
      {/* Subtle warm ambience — single soft radial, not glowy */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(176,137,72,0.28) 0%, rgba(176,137,72,0) 60%)' }}
      />
      {/* Fine vertical wood-plank lines, very low opacity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 96px)',
        }}
      />

      <div className="container-p relative grid lg:grid-cols-12 gap-12 items-center min-h-screen pt-28 pb-20">
        {/* Left: copy */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.p variants={fade} initial="hidden" animate="show" custom={0} className="eyebrow text-brass-light">
            <span className="h-px w-8 bg-brass-light/60" />
            {personalInfo.tagline}
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 font-serif font-semibold leading-[1.02] text-espresso-50 text-5xl sm:text-6xl lg:text-7xl"
          >
            Alejandro
            <br />
            <span className="text-brass">Perez-Rivero</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg sm:text-xl text-espresso-100/80 max-w-xl"
          >
            {personalInfo.title} building{' '}
            <span className="text-espresso-50">scalable SaaS platforms</span>, AI workflows, and
            modern web experiences from Miami, FL.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollTo('projects')} className="btn-accent">
              View my work
            </button>
            <a href="mailto:alexperezr456@gmail.com" className="btn-ghost-light">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex items-center gap-8"
          >
            <Socials tone="light" />
            <div className="h-8 w-px bg-espresso-50/15" />
            <p className="text-sm text-espresso-100/60">
              {personalInfo.education.degree} · {personalInfo.education.university.replace(' Honors College', '')}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 grid grid-cols-3 max-w-lg divide-x divide-espresso-50/10 border-t border-espresso-50/10 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-2 first:pl-0">
                <dt className="font-serif text-3xl text-brass-light">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-espresso-100/55">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-brass/25" />
            <div className="relative w-64 h-80 sm:w-72 sm:h-[26rem] overflow-hidden rounded-[1.75rem] border border-espresso-50/10 shadow-lift">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-espresso-50/90">Available for new roles</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-espresso-100/50 hover:text-brass transition-colors"
      >
        <HiArrowDown className="animate-bounce" size={22} />
      </button>
    </section>
  );
}
