import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ name, proficiency }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out motion-reduce:transition-none"
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