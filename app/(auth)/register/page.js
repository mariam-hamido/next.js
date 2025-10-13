
import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
<div className="bg-white  rounded-lg shadow-lg p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-emerald-600 mb-6 text-center">
        Create Your Account
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-emerald-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
    </div>
    
  );
}