/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import guyimge from "../assets/Rectangle 39322.png";
import logo from "../assets/brand-logo.svg";

interface InputProps {
  label: string;
  id: string;
  [key: string]: any;
}

const Input = ({ label, id, ...props }: InputProps) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
    />
  </div>
);

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[500px] rounded-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-300 rotate-[-2deg]">
            <img
              src={guyimge}
              alt="Welcome Back"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-200">
                  Sign in to continue your journey with us
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="pb-6 mb-6 border-b border-gray-200">
            <img src={logo} alt="Hovertask Logo" className="h-8" />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">
              Sign in to your Hovertask account
            </p>
          </div>

          <form className="space-y-6">
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20">
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
