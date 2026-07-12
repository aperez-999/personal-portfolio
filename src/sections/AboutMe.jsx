import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/personalInfo';
import { HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';

const paragraphs = personalInfo.aboutMe.split('\n\n').map((p) => p.trim()).filter(Boolean);

const facts = [
  { icon: HiOutlineLocationMarker, label: 'Based in', value: personalInfo.location },
  { icon: HiOutlineAcademicCap, label: 'Studying', value: `${personalInfo.education.degree}, ${personalInfo.education.graduationYear}` },
  { icon: HiOutlineBriefcase, label: 'Currently', value: 'Founder @ Offervia' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-y bg-espresso-50 scroll-mt-20" ref={ref}>
      <div className="container-p">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow"><span className="h-px w-8 bg-brass/50" />About me</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
            Engineer, builder, and lifelong learner.
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-12">
          {/* Left: photo + facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-espresso-200 shadow-card">
                <img
                  src="./assets/images/about-me.jpg"
                  alt={personalInfo.name}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden sm:block rounded-xl bg-espresso-900 text-espresso-50 px-5 py-4 shadow-lift">
                <p className="font-serif text-2xl text-brass-light">Miami, FL</p>
                <p className="text-xs uppercase tracking-wider text-espresso-100/60">Home base</p>
              </div>
            </div>

            <dl className="mt-10 space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-4">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-white border border-espresso-100 text-brass-dark shrink-0">
                    <f.icon size={20} />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-espresso-500">{f.label}</dt>
                    <dd className="text-espresso-900 font-medium">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right: story + experience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-espresso-700 leading-relaxed text-lg">
              {paragraphs.slice(0, 3).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Experience timeline */}
            <h3 className="mt-12 mb-6 text-2xl font-semibold">Experience</h3>
            <ol className="relative border-l border-espresso-200 pl-8 space-y-8">
              {personalInfo.experience.map((exp) => (
                <li key={exp.company} className="relative">
                  <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full bg-brass border-4 border-espresso-50" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h4 className="font-serif text-xl text-espresso-950">
                      {exp.role}
                      {exp.upcoming && (
                        <span className="ml-2 align-middle inline-flex items-center rounded-full bg-brass/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brass-dark">
                          Incoming
                        </span>
                      )}
                    </h4>
                    <span className="text-sm text-espresso-500">{exp.period}</span>
                  </div>
                  <p className="text-brass-dark font-medium">{exp.company} · {exp.location}</p>
                  {exp.highlights?.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-espresso-700 text-[0.95rem]">
                      {exp.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-brass mt-1.5 h-1 w-1 rounded-full bg-brass shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <a href="#projects" className="btn-primary">See what I've built</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
