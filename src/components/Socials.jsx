import React from 'react';

export default function Socials() {
  return (
    <div className="flex space-x-4">
      {/* Twitter Icon */}
      <a href="https://x.com/aperez_999" target="_blank" rel="noopener noreferrer">
        <i className="ri-twitter-fill text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-all"></i>
      </a>
      
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/alejandro-perez-rivero-3209a828b/" target="_blank" rel="noopener noreferrer">
        <i className="ri-linkedin-fill text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-2xl transition-all"></i>
      </a>
      
      {/* GitHub Icon */}
      <a href="https://github.com/aperez-999" target="_blank" rel="noopener noreferrer">
        <i className="ri-github-fill text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl transition-all"></i>
      </a>
      
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/aperezzz/" target="_blank" rel="noopener noreferrer">
        <i className="ri-instagram-fill text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 text-2xl transition-all"></i>
      </a>
    </div>
  );
}
