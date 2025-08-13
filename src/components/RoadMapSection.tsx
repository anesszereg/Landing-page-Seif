'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, staggerChildrenVariants } from "@/utils/animations";

type CourseItem = {
  id: string;
  title: string;
  description: string;
}

export default function RoadMapSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>('01');
  
  const courseItems: CourseItem[] = [
    {
      id: '01',
      title: 'Foundations',
      description: 'Master basic greetings, and essential survival phrases.'
    },
    {
      id: '02',
      title: 'Daily Conversations',
      description: 'Learn vocabulary and phrases for everyday situations.'
    },
    {
      id: '03',
      title: 'Expanding Horizons',
      description: 'Develop your vocabulary and grammar for more complex conversations.'
    },
    {
      id: '04',
      title: 'Practical Mastery',
      description: 'Apply your skills in real-world scenarios and cultural contexts.'
    },
    {
      id: '05',
      title: 'Advanced Communication',
      description: 'Perfect your fluency and tackle complex topics with confidence.'
    },
    {
      id: '06',
      title: 'Native-Like Fluency',
      description: 'Refine your skills to communicate at a near-native level.'
    },
  ];

  const toggleItem = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <motion.div 
      className="py-20 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left side - Roadmap */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={slideFromLeftVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeUpVariants}
          >
            Roadmap to Spanish mastery
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 max-w-xl"
            variants={fadeUpVariants}
          >
            Take the first step towards mastering Spanish. Discover our structured courses designed 
            to elevate your skills.
          </motion.p>
          
          {/* Course items */}
          <motion.div 
            className="space-y-6"
            variants={staggerChildrenVariants}
          >
            {courseItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="border-t border-line"
                variants={fadeUpVariants}
                custom={index * 0.1}
              >
                <div 
                  className="py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="w-full">
                    <h3 className="text-lg text-black font-bold">{item.id}: {item.title}</h3>
                    <motion.div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedItem === item.id ? 'max-h-20 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                      animate={{ 
                        height: expandedItem === item.id ? 'auto' : 0,
                        opacity: expandedItem === item.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-black">{item.description}</p>
                    </motion.div>
                  </div>
                  <button className="text-green-500 ml-4 flex-shrink-0">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedItem === item.id ? (
                        <line x1="5" y1="12" x2="19" y2="12" />
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </>
                      )}
                    </motion.svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right side image */}
        <motion.div 
          className="w-full md:w-1/2 mt-10 md:mt-0"
          variants={slideFromRightVariants}
        >
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/images/section_3.png" 
              alt="Student learning Spanish"
              width={500}
              height={600}
              className="object-cover rounded-3xl w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
