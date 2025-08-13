'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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

  // Close more dropdown when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMoreOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (isMoreOpen) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, isMoreOpen]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 bg-white w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center border-b border-gray-100 transition-all ${scrolled ? 'shadow-md' : ''}`}>
      <div className="flex items-center">
        <Image src="/assets/images/logo.png" alt="Logo" width={140} height={10} className="object-cover sm:w-[160px] md:w-[180px] h-[50px]" priority />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</button>
        <button onClick={() => scrollToSection('career-paths')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Career Paths</button>
        <button onClick={() => scrollToSection('roadmap')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Roadmap</button>
        <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Testimonials</button>
        <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Blog</button>
        
        {/* More dropdown */}
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button 
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMoreOpen(!isMoreOpen);
            }}
          >
            More
            <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-4 w-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          <AnimatePresence>
            {isMoreOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Resources
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Desktop CTA */}
      <div className="hidden md:block">
        <Link href="/enroll" className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Enroll
        </Link>
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
                  scrollToSection('hero');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('career-paths');
                  setIsMobileMenuOpen(false);
                }}
              >
                Career Paths
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('roadmap');
                  setIsMobileMenuOpen(false);
                }}
              >
                Roadmap
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('testimonials');
                  setIsMobileMenuOpen(false);
                }}
              >
                Testimonials
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
              <Link 
                href="/resources" 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/faq" 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <Link 
                  href="/enroll" 
                  className="block w-full bg-gray-900 text-white px-5 py-2 rounded-md text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enroll
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
