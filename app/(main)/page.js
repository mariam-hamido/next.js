import React from 'react'

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-100 text-gray-800 font-sans p-6 sm:p-12">
      <div className="text-center space-y-6 max-w-2xl mx-auto mt-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-emerald-700 drop-shadow-sm">Welcome to Our Store</h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Discover a curated selection of products designed to elevate your lifestyle. From fashion to tech, we bring you quality, style, and simplicity — all in one place.
        </p>
        <img src="/images/Hero.jpg" alt='hero' className='rounded-lg'></img>
      </div>
    </div>
  )
}

