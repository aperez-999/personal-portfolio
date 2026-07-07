import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Go back home</Link>
    </div>
  );
}
