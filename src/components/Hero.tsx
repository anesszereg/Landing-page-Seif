'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import Link from 'next/link';

export default function Hero() {
  const { t, tReact } = useTranslation();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div 
      id="hero"
      className="font-sans bg-white pt-24"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        className="container mx-auto bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          {/* Left Content */}
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2">
            
            {/* Main Heading with styling */}
            <motion.div className="mb-6">
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                <span className="text-black">{tReact('hero.aprende')}</span>
              </motion.h1>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                <span className="text-black">{tReact('hero.espanol')}</span>
              </motion.h1>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                <span className="text-black">{tReact('hero.con')} </span> 
                <span className="text-red-500">{tReact('hero.pasion')}</span>
              </motion.h1>
            </motion.div>

            {/* Spanish welcome and description */}
            <motion.h2 className="text-3xl font-bold text-black mb-4">{tReact('hero.bienvenido')}</motion.h2>
            
            <motion.p className="text-gray-700 mb-8 max-w-lg">
              {tReact('hero.description')}
            </motion.p>

            {/* CTA Button */}
            <Link href="/group-class">
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tReact('hero.button')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Teacher Image */}
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2 relative flex justify-center">
            <div className="bg-yellow-300 rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
              {/* Speech bubble */}
              <div className="absolute -top-10 -left-4 bg-white px-5 py-3 rounded-2xl shadow-md">
                <p className="font-bold text-black">{tReact('hero.speechBubble')}</p>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              
              {/* Teacher image */}
              <img 
                src="/assets/Team/Seif.svg" 
                alt="Spanish Teacher" 
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
