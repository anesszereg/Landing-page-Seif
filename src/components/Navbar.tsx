'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  // Smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 bg-white w-full px-4 sm:px-6 py-3 flex justify-between items-center border-b border-gray-100 transition-all ${scrolled ? 'shadow-md' : ''}`}>
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center mr-2">
            <span className="text-black font-bold text-lg">S</span>
          </div>
          <div>
            <div className="font-medium text-gray-800">Spanish</div>
            <div className="text-sm text-gray-600">with Seif</div>
          </div>
        </div>
      </div>
      
      {/* Center Navigation - Desktop */}
      <div className="hidden md:block">
        <div className="border border-gray-200 rounded-full px-4 py-1 flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">About</button>
          <button onClick={() => scrollToSection('learn')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Learn</button>
          <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Blog</button>
        </div>
      </div>
      
      {/* Right Side - Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact Us</button>
        
        <Link href="/book" className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors">
          Book Your Free Session
        </Link>
        
        <button className="flex items-center">
          <Image src="/assets/images/en-flag.svg" alt="English" width={24} height={16} className="rounded" />
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }} 
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-20 border-b border-gray-200 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col py-2">
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('learn');
                  setIsMobileMenuOpen(false);
                }}
              >
                Learn
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('blog');
                  setIsMobileMenuOpen(false);
                }}
              >
                Blog
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Us
              </button>
              
              {/* Language Selection */}
              <div className="px-6 py-3 text-sm font-medium text-gray-700 flex items-center">
                <span className="mr-3">Language:</span>
                <button className="flex items-center">
                  <Image src="/assets/images/en-flag.svg" alt="English" width={24} height={16} className="rounded" />
                  <span className="ml-2">English</span>
                </button>
              </div>
              
              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <Link 
                  href="/book" 
                  className="block w-full bg-yellow-400 text-black px-5 py-2 rounded-full text-center text-sm font-medium hover:bg-yellow-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Your Free Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
