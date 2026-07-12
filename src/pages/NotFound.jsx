import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center bg-espresso-50 px-4">
      <div className="text-center">
        <p className="font-serif text-8xl text-brass">404</p>
        <h1 className="mt-4 text-2xl font-serif font-semibold text-espresso-950">Page not found</h1>
        <p className="mt-2 text-espresso-600">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </div>
  );
}
