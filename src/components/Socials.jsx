import React from 'react';
import { personalInfo } from '../data/personalInfo';

export default function Socials() {
  return (
    <div className="flex space-x-4">
      {/* Twitter Icon */}
      {personalInfo.twitter && (
        <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="ri-twitter-fill text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-all"></i>
        </a>
      )}
      
      {/* LinkedIn Icon */}
      {personalInfo.linkedin && (
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="ri-linkedin-fill text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-2xl transition-all"></i>
        </a>
      )}
      
      {/* GitHub Icon */}
      {personalInfo.github && (
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="ri-github-fill text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl transition-all"></i>
        </a>
      )}
      
      {/* Email */}
      {personalInfo.email && (
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <i className="ri-mail-fill text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-2xl transition-all"></i>
        </a>
      )}
    </div>
  );
}
