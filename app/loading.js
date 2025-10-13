import React from 'react'


export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-100 text-gray-800 font-sans">
      <div className="text-center space-y-4 animate-pulse">
        <div className="text-4xl font-bold text-emerald-600">Loading...</div>
        <p className="text-lg text-gray-600">Please wait while we prepare your page.</p>
      </div>
    </div>
  )
}

