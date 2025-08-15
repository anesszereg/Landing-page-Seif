'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, staggerChildrenVariants } from "@/utils/animations";
import { useTranslation } from '@/context/TranslationContext';

type CourseItem = {
  id: string;
  title: string;
  description: string;
}

export default function RoadMapSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>('01');
  const { t } = useTranslation();
  
  const courseItems: CourseItem[] = [
    {
      id: '01',
      title: t('roadmap.course.01.title'),
      description: t('roadmap.course.01.description')
    },
    {
      id: '02',
      title: t('roadmap.course.02.title'),
      description: t('roadmap.course.02.description')
    },
    {
      id: '03',
      title: t('roadmap.course.03.title'),
      description: t('roadmap.course.03.description')
    },
    {
      id: '04',
      title: t('roadmap.course.04.title'),
      description: t('roadmap.course.04.description')
    },
    {
      id: '05',
      title: t('roadmap.course.05.title'),
      description: t('roadmap.course.05.description')
    },
    {
      id: '06',
      title: t('roadmap.course.06.title'),
      description: t('roadmap.course.06.description')
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
      id="roadmap"
      className="py-20 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildrenVariants}
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
            {t('roadmap.title')}
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 max-w-xl"
            variants={fadeUpVariants}
          >
            {t('roadmap.description')}
          </motion.p>
          
          {/* Course items */}
          <motion.div 
            className="space-y-6"
            variants={staggerChildrenVariants}
          >
            {courseItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="border-t border-line "
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
                  <button className="text-[#FFD370] ml-4 flex-shrink-0">
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
              src="/assets/images/section_3.webp" 
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
