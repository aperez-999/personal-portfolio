import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectFilter = ({ categories, activeFilter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((cat) => {
        const active = activeFilter === cat;
        return (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={active}
            whileTap={{ scale: 0.96 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              active
                ? 'bg-espresso-900 text-espresso-50 border-espresso-900'
                : 'bg-white text-espresso-700 border-espresso-200 hover:border-espresso-400'
            }`}
          >
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
};

ProjectFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ProjectFilter;
