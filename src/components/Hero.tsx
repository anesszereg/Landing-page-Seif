'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, springyVariants } from '@/utils/animations';

export default function Hero() {
  return (
    <motion.div 
      className="flex flex-col px-6 py-20 items-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div 
        className="text-center max-w-3xl mx-auto px-6 mb-12"
        variants={fadeUpVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          variants={slideFromLeftVariants}
        >
          Your Journey to Spanish Fluency Starts Here
        </motion.h1>
      </motion.div>
      
      {/* Hero image container with rounded corners */}
      <div className="relative w-full max-w-5xl mx-auto rounded-3xl ">
        {/* Background image */}
        <div
          className="w-full h-[400px] bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: "url('/assets/images/hero_section_image.png')"
          }}
        ></div>
        
        {/* Absolute positioned elements */}
        <div className="absolute bg-white bottom-0 left-0 p-6 z-10 flex items-center gap-2 rounded-tr-3xl">
            <div className="bg-orange-500 text-black w-fit rounded-full p-2">
            <FaArrowRight />
            </div>
          <button className="bg-black hover:bg-orange-600 text-white py-2 px-5 rounded-full flex items-center gap-2 transition-colors">
            Book A Session
          </button>
        </div>
        
        {/* Stats badge */}
        <div className="absolute bottom-6 right-6 bg-gray-200/50 backdrop-blur-sm p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-gray-800">89%</div>
          <div className="text-sm text-gray-700">Pass rate of<br />students in their<br />BAC exams</div>
        </div>
      </div>
    </motion.div>
  );
}
