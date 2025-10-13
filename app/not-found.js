import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-100 text-gray-800 font-sans p-6 sm:p-12">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold text-emrald-600 drop-shadow-sm">404</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-slate-50 rounded-lg shadow hover:bg-emerald-700 transition duration-300 text-lg font-medium"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}
