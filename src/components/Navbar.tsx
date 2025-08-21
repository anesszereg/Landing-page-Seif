'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, LanguageCode } from '../context/TranslationContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  
  // Get translation utilities from our custom hook
  const { t, currentLanguage, currentLanguageInfo, changeLanguage, allLanguages } = useTranslation();
  
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

  // Close mobile menu and language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (isLanguageMenuOpen) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, isLanguageMenuOpen]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 bg-white w-full px-4 sm:px-6 py-3 flex justify-between items-center border-b border-gray-100 transition-all ${scrolled ? 'shadow-md' : ''}`}>
      {/* Logo */}

      <Link href="/" className="flex items-center">
        <Image src="/assets/images/Logo.svg" alt="Logo" width={100} height={100} />
      </Link>
      
      {/* Center Navigation - Desktop */}
      <div className="hidden md:block ml-50">
        <div className="border border-yellow-400 rounded-full px-4 py-1 flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{t('navbar.about')}</Link>
          <button onClick={() => scrollToSection('learn')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{t('navbar.learn')}</button>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{t('navbar.blog')}</Link>
        </div>
      </div>
      
      {/* Right Side - Desktop */}
      <div className="hidden md:flex text-black items-center space-x-4">
        <Link href="/#contact">
        <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{t('navbar.contactUs')}</button>
        </Link>
        
        <Link href="/group-class" className="bg-yellow-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors">
          {t('navbar.bookSession')}
        </Link>
        
        <div className="relative">
          <button 
            className="flex items-center" 
            onClick={(e) => {
              e.stopPropagation();
              setIsLanguageMenuOpen(!isLanguageMenuOpen);
            }}
          >
            <Image 
              src={currentLanguageInfo.flag} 
              alt={currentLanguageInfo.name} 
              width={24} 
              height={16} 
              className="rounded" 
            />
            {/* <span className="ml-2 text-sm">{currentLanguageInfo.name}</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Language Dropdown Menu */}
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
              {Object.entries(allLanguages).map(([code, langInfo]) => (
                <button
                  key={code}
                  className={`flex items-center w-full text-left px-4 py-2 text-sm ${currentLanguage === code ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                  onClick={() => changeLanguage(code as LanguageCode)}
                >
                  <Image src={langInfo.flag} alt={langInfo.name} width={24} height={16} className="rounded  mr-2" />
                  <span className="text-black">{langInfo.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
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
              <Link 
                href="/about"
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navbar.about')}
              </Link>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('learn');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('navbar.learn')}
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('blog');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('navbar.blog')}
              </button>
              <button 
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 text-left w-full"
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('navbar.contactUs')}
              </button>
              
              {/* Language Selection */}
              <div className="px-6 py-3 text-sm font-medium text-gray-700">
                <div className="mb-2">Language:</div>
                <div className="flex flex-col space-y-2">
                  {Object.entries(allLanguages).map(([code, langInfo]) => (
                    <button
                      key={code}
                      className={`flex items-center px-2 py-1 rounded ${currentLanguage === code ? 'bg-gray-100' : ''}`}
                      onClick={() => {
                        changeLanguage(code as LanguageCode);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <Image src={langInfo.flag} alt={langInfo.name} width={24} height={16} className="rounded mr-2" />
                      <span>{langInfo.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <Link 
                  href="/group-class" 
                  className="block w-full bg-yellow-400 text-black px-5 py-2 rounded-full text-center text-sm font-medium hover:bg-yellow-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navbar.bookSession')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
