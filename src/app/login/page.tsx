import React from "react";
import LogoSection from "../components/logos";

const Login = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-gray-100 w-full mt-6">
        <div className="container mx-auto px-40 py-10">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-600">
            Home / Page /{" "}
            <span className="text-pink-600">Shopping Cart</span>
          </p>
        </div>
      </header>

      {/* Login Form */}
      <div className="bg-white w-full max-w-md p-8 mb-6 px-8 py-10 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login</h2>
        <p className="text-center text-gray-600 mb-6">
          Please login using account detail below.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-pink-500 font-bold hover:underline">
            Create account
          </a>
        </div>
      </div>
      <LogoSection/>
    </div>
  );
};

export default Login;

