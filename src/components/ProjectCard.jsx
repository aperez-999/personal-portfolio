import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCodeBracket, HiArrowUpRight } from 'react-icons/hi2';
import { HiStar } from 'react-icons/hi';
import ProjectPlaceholder from './ProjectPlaceholder';

const ProjectCard = ({ project }) => {
  const { title, description, image, codeUrl, liveUrl, technologies = [], slug, featured } = project;
  const computedSlug = slug || (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const [broken, setBroken] = useState(false);
  const primary = technologies[0];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group card overflow-hidden h-full flex flex-col hover:shadow-card hover:border-brass/30"
    >
      {/* Media */}
      <Link to={`/projects/${computedSlug}`} className="relative block h-52 overflow-hidden bg-espresso-900">
        {broken ? (
          <ProjectPlaceholder primary={primary} />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
          />
        )}
        {featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-espresso-950/85 backdrop-blur px-3 py-1 text-xs font-semibold text-brass-light">
            <HiStar size={12} /> Featured
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-grow p-6">
        {primary && (
          <span className="text-xs font-mono uppercase tracking-widest text-brass-dark mb-2">{primary}</span>
        )}
        <Link to={`/projects/${computedSlug}`}>
          <h3 className="font-serif text-xl text-espresso-950 group-hover:text-brass-dark transition-colors leading-snug">
            {title}
          </h3>
        </Link>
        <p className="mt-3 text-sm text-espresso-600 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.slice(0, 4).map((t) => (
            <span key={t} className="chip !px-2.5 !py-0.5 !text-[11px]">{t}</span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[11px] text-espresso-400 self-center">+{technologies.length - 4}</span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-espresso-100">
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-espresso-700 hover:text-brass-dark transition-colors">
              <HiCodeBracket size={17} /> Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-espresso-700 hover:text-brass-dark transition-colors">
              Live <HiArrowUpRight size={15} />
            </a>
          )}
          <Link to={`/projects/${computedSlug}`}
            className="ml-auto text-sm font-medium text-brass-dark hover:text-espresso-900 transition-colors">
            Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    codeUrl: PropTypes.string,
    liveUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    slug: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
