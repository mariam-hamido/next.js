import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-emerald-600 py-4 drop-shadow z-30">
      <ul className="flex gap-4 justify-around text-slate-50 font-semibold text-xl">
        <li><a href="/">Home</a> </li>
        <li><a href="/products">Products</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/todos">todo</a></li>
        <li><a href="/crs">CRS</a></li>
        <li><a href="/ssr">SSR</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}
