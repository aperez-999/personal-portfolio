import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ name, proficiency }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-slate-800 dark:text-slate-100">{name}</span>
        <span className="text-sm text-slate-500 dark:text-slate-300">{proficiency}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400 rounded-full transition-all duration-1000 ease-out motion-reduce:transition-none"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired
};

export default SkillBar; 