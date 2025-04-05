'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Toggle between Login and Register */}
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

          {/* Login Form */}
          {isLogin ? (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#1DA1F2] focus:ring-[#1DA1F2] border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                <Link href="/forgot-password" className="text-sm text-[#1DA1F2] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
              >
                Sign in
              </button>
            </form>
          ) : (
            /* Register Form */
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1DA1F2] focus:border-[#1DA1F2]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1DA1F2] hover:bg-[#1991db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
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
    </div>
  );
} 