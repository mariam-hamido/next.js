import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-100 text-gray-800 font-sans p-6 sm:p-12">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-emerald-600 drop-shadow-sm">About Us</h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          We’re a passionate team of designers and developers dedicated to crafting elegant, user-friendly digital experiences. Our mission is to bring ideas to life through thoughtful design, clean code, and culturally resonant communication.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Whether you're launching a brand, building a mobile app, or refining your online presence, we’re here to help you stand out with style and clarity.
        </p>
      </div>
    </div>
  )
}