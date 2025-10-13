import React from 'react'

export default function Footer() {
  return (
    <div className="bg-emerald-600 py-4  text-slate-50 font-semibold text-center text-lg">
      <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </div>
  )
}
