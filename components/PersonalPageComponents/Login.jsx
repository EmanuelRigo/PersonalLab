"use client";

import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-200"
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <Link href="/register" className="text-sky-600 hover:underline">
            ¿No tienes una cuenta? Regístrate
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;