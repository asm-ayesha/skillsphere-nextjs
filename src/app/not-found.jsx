import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-50 via-white to-indigo-100 px-4">

        <div className="text-center max-w-md">

          {/* 404 Number */}
          <h1 className="text-8xl font-extrabold text-sky-900">404</h1>

          {/* Message */}
          <h2 className="mt-4 text-2xl font-semibold text-sky-500">
            Oops! This lesson is not available 📚
          </h2>

          <p className="mt-2 text-gray-500">
            The page you’re looking for doesn’t exist or has been moved to another course.
          </p>

          {/* Illustration style circle */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-3xl">
              🎓
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3 justify-center">
            <Link
              href="/"
              className="px-5 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition"
            >
              Back to Home
            </Link>


          </div>

        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;