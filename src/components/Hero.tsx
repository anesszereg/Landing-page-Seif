'use client';

// Import icons if needed in the future
// import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUpVariants, slideFromLeftVariants } from '@/utils/animations';
import { useTranslation } from '@/context/TranslationContext';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <motion.div 
      id="hero"
      className="flex flex-col px-4 sm:px-6 py-12 sm:py-16 md:py-20 items-center mb-12 sm:mb-16 mt-16 sm:mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Heading */}
      <motion.div 
        className="text-center max-w-3xl mx-auto px-2 sm:px-6 mb-8 sm:mb-12"
        variants={fadeUpVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          variants={slideFromLeftVariants}
        >
          {t('hero.title')}
        </motion.h1>
      </motion.div>
      
      {/* Hero image container with rounded corners */}
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background image */}
        <div
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center rounded-2xl sm:rounded-3xl"
          style={{
            backgroundImage: "url('/assets/images/hero_section_image.webp')"
          }}
        ></div>
        
        {/* Absolute positioned elements */}
        <div className="absolute bg-white bottom-0 left-0 p-3 sm:p-6 z-10 flex items-center gap-2 rounded-tr-xl sm:rounded-tr-3xl">
         
          <button className="bg-black hover:bg-orange-600 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-10 sm:px-5 rounded-full flex items-center gap-2 transition-colors">
          {t('hero.cta')}
          </button>
        </div>
        

      </div>
    </motion.div>
  );
}
