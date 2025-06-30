'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb] py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex mb-8 border-b">
          <button
            className={`flex-1 p-4 ${isLogin ? 'border-b-2 border-[#1DA1F2] text-[#1DA1F2]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 p-4 ${!isLogin ? 'border-b-2 border-[#1DA1F2] text-[#1DA1F2]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {submitted && (
          <div className="text-green-600 text-center font-semibold mb-4">
            {isLogin ? 'Login successful!' : 'Registration successful!'}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2] font-semibold"
            >
              Sign in
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2] font-semibold"
            >
              Register
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>

        {/* Google Login Button */}
        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
            // onClick={handleGoogleLogin} // Implement this with your auth logic
          >
            <Image
              src="/google.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
