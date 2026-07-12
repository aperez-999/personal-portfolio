import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillBar = ({ name, proficiency }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="font-medium text-espresso-900">{name}</span>
        <span className="text-sm font-mono text-espresso-500">{proficiency}%</span>
      </div>
      <div className="h-2 bg-espresso-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brass-dark to-brass"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

export default SkillBar;
