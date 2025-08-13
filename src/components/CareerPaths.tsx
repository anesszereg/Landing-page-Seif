'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerChildrenVariants, rotateScaleVariants } from '@/utils/animations';

export default function CareerPaths() {
  return (
    <motion.div 
      className="flex flex-col px-6 py-20 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildrenVariants}
    >
      {/* Heading */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        variants={fadeUpVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          variants={fadeUpVariants}
        >
          Find the path that aligns<br />with your aspirations.
        </motion.h2>
      </motion.div>
      
      {/* Cards container */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto"
        variants={staggerChildrenVariants}
      >
        {/* Card 1 - Cultural Explorers */}
        <motion.div 
          className="relative rounded-3xl p-2 overflow-hidden h-[400px] transform transition-transform hover:scale-[1.02] duration-300 shadow-l bg-[url('/assets/images/section_2_1.jpg')] bg-cover bg-center flex items-end -rotate-4"
          variants={rotateScaleVariants}
          custom={0}
        >
          {/* Background image */}

          
          {/* Text overlay with backdrop */}
          <motion.div 
            className="p-6 bg-white/60 backdrop-blur-sm rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-black font-bold mb-2">The Cultural Explorers</h3>
            <p className="text-gray-700">
              Perfect for travelers and culture enthusiasts who want to connect more deeply with Spanish
            </p>
          </motion.div>
        </motion.div>
        
        {/* Card 2 - Career Builder */}
        <motion.div 
          className="relative rounded-3xl p-2 overflow-hidden h-[400px] transform transition-transform hover:scale-[1.02] duration-300 shadow-l bg-[url('/assets/images/section_2_2.png')] bg-cover bg-center flex items-end -translate-y-4"
          variants={rotateScaleVariants}
          custom={1}
        >
          {/* Text overlay with backdrop */}
          <motion.div 
            className="p-6 bg-white/60 backdrop-blur-sm rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-black font-bold mb-2">The Career Builder</h3>
            <p className="text-gray-700">
              For professionals who need Spanish to advance their career or open up new opportunities
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3 - Academic Achiever */}
        <motion.div 
          className="relative rounded-3xl p-2 overflow-hidden h-[400px] transform transition-transform hover:scale-[1.02] duration-300 shadow-l bg-[url('/assets/images/section_2_3.jpg')] bg-cover bg-center flex items-end rotate-5"
          variants={rotateScaleVariants}
          custom={2}
        >
          {/* Text overlay with backdrop */}
          <motion.div 
            className="p-6 bg-white/60 backdrop-blur-sm rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-black font-bold mb-2">The Academic Achiever</h3>
            <p className="text-gray-700">
              For students preparing for exams or academic requirements with structured learning
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
