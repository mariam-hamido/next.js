'use client'
import { useEffect } from 'react'

export default function GlobalError({error}) {
  useEffect(() => {
    console.error('error caught:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-100 text-gray-800 font-sans p-6 sm:p-12">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-5xl font-extrabold text-emerald-600 drop-shadow-sm">Something went wrong</h1>
        <p className='text-lg'>{error.message}</p>
        <div className="flex gap-4 justify-center mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
