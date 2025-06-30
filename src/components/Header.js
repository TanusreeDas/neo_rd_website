'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const handleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  return (
    <header className="flex justify-between items-center p-4 bg-[#003153] text-white relative z-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="ml-1">
            <Image 
              src="/compLogo.png" 
              alt="NeoRD.AI Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          <Link href="/" className="text-2xl font-bold hover:underline">
            NeoRD.AI
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {/* Platform Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleMenu('platform')}
                className="hover:underline font-bold hover:text-black flex items-center"
              >
                Platform<span className="ml-2">▾</span>
              </button>
              {openMenu === 'platform' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                  <li>
                    <Link href="/platform/ai-automation" className="block px-4 py-2 hover:bg-gray-100">AI Automation</Link>
                  </li>
                  <li>
                    <Link href="/platform/analytics" className="block px-4 py-2 hover:bg-gray-100">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/platform" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Solutions Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleMenu('solutions')}
                className="hover:underline font-bold hover:text-black flex items-center"
              >
                Solutions<span className="ml-2">▾</span>
              </button>
              {openMenu === 'solutions' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                  <li>
                    <Link href="/solutions/healthcare" className="block px-4 py-2 hover:bg-gray-100">Healthcare</Link>
                  </li>
                  <li>
                    <Link href="/solutions/finance" className="block px-4 py-2 hover:bg-gray-100">Finance</Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Customers Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleMenu('customers')}
                className="hover:underline font-bold hover:text-black flex items-center"
              >
                Customers<span className="ml-2">▾</span>
              </button>
              {openMenu === 'customers' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                  <li>
                    <Link href="/customers/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/customers/case-studies" className="block px-4 py-2 hover:bg-gray-100">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/customers" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Resources Dropdown */}
            <li className="relative">
              <button
                onClick={() => handleMenu('resources')}
                className="hover:underline font-bold hover:text-black flex items-center"
              >
                Resources<span className="ml-2">▾</span>
              </button>
              {openMenu === 'resources' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                  <li>
                    <Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                  </li>
                  <li>
                    <Link href="/resources/whitepapers" className="block px-4 py-2 hover:bg-gray-100">Whitepapers</Link>
                  </li>
                  <li>
                    <Link href="/resources" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href="/login" className="inline-block mr-4 px-4 py-2 border rounded hover:bg-black transition-colors font-medium">Login</Link>
        <Link href="/contact" className="inline-block mr-4 px-4 py-2 border bg-black text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
