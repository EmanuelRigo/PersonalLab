"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to ?section=patient-form
    router.push(`/?section=patient-form`);

    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 w-full min-h-96 bg-white ">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form  onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Usuario</label>
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
          <label className="block text-gray-700">Contraseña</label>
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
           
            className="bg-sky-600 text-white w-full px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
