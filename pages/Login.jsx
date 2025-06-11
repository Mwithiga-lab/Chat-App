import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const TEST_EMAIL = "test@example.com";
const TEST_PASSWORD = "123456";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: TEST_EMAIL, // autofill test data
    password: TEST_PASSWORD,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === TEST_EMAIL &&
      formData.password === TEST_PASSWORD
    ) {
      console.log("Auto-login success!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try test@example.com / 123456");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
