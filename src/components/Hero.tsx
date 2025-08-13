'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, springyVariants } from '@/utils/animations';

export default function Hero() {
  return (
    <motion.div 
      className="flex flex-col px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 items-center mb-8 sm:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div 
        className="text-center max-w-3xl mx-auto px-2 sm:px-6 mb-8 sm:mb-12"
        variants={fadeUpVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          variants={slideFromLeftVariants}
        >
          Your Journey to Spanish Fluency Starts Here
        </motion.h1>
      </motion.div>
      
      {/* Hero image container with rounded corners */}
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background image */}
        <div
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center rounded-2xl sm:rounded-3xl"
          style={{
            backgroundImage: "url('/assets/images/hero_section_image.png')"
          }}
        ></div>
        
        {/* Absolute positioned elements */}
        <div className="absolute bg-white bottom-0 left-0 p-3 sm:p-6 z-10 flex items-center gap-2 rounded-tr-xl sm:rounded-tr-3xl">
            <div className="bg-orange-500 text-black w-fit rounded-full p-1 sm:p-2">
              <FaArrowRight className="text-xs sm:text-base" />
            </div>
          <button className="bg-black hover:bg-orange-600 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-5 rounded-full flex items-center gap-2 transition-colors">
            Book A Session
          </button>
        </div>
        
        {/* Stats badge */}
        <div className="absolute bottom-2 sm:bottom-6 right-2 sm:right-6 bg-gray-200/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg sm:rounded-xl text-center">
          <div className="text-xl sm:text-3xl font-bold text-gray-800">89%</div>
          <div className="text-xs sm:text-sm text-gray-700">Pass rate of<br />students in their<br />BAC exams</div>
        </div>
      </div>
    </motion.div>
  );
}
