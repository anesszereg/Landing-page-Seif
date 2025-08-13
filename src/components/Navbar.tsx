'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  
  return (
    <nav className="bg-white w-full px-6 py-4 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <Image src="/assets/images/logo.png" alt="Logo" width={200} height={70} className=" object-contain" />
        {/* <Link href="/" className="font-bold text-xl text-gray-900">SpanishFluency</Link> */}
      </div>
      
      <div className="flex items-center space-x-8">
        <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</Link>
        <Link href="/curriculum" className="text-sm font-medium text-gray-700 hover:text-gray-900">Curriculum</Link>
        <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">Blog</Link>
        
        {/* More dropdown */}
        <div className="relative">
          <button 
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isMoreOpen && (
            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Resources
              </Link>
              <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                FAQ
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <Link href="/enroll" className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Enroll
        </Link>
      </div>
    </nav>
  );
}
