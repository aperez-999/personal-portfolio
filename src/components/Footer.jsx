import React from 'react';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Text */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; 2024 PerezDev. All rights reserved.
            </p>
          </div>

          {/* Social Icons Component */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
