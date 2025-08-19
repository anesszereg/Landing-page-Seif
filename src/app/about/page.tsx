'use client';

import React from 'react';

import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import ContactSection from '@/components/ContactSection';

export default function AboutPage() {
  const { t } = useTranslation();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="font-sans bg-white pt-24"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div 
        className="container mx-auto px-40 py-8 "
        variants={staggerContainer}
      >
        {/* breadcrumb */}

        <motion.div
          className="text-sm text-black mb-4"
          variants={fadeIn}
        >
          <Link href="/" className="hover:text-yellow-500 transition-colors">{t('navbar.home')}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{t('about.title')}</span>
        </motion.div>
        {/* Page Title */}
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          variants={fadeIn}
        >
          {t('about.title')}
        </motion.h1>
        
        {/* Video Section */}
        <motion.div 
          className="rounded-lg w-full aspect-video mb-12 overflow-hidden shadow-lg"
          variants={fadeIn}
          whileHover={{ scale: 1.01 }}
        >
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/2SIdIAMzHH0"
            title="Spanish Lessons Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
        
        {/* Our Mission Section */}
        <motion.div 
          className="mb-16"
          variants={fadeIn}
        >
          <motion.h2 
            className="text-xl font-bold text-gray-900 mb-6"
            variants={fadeIn}
          >
            {t('about.mission.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-700 mb-6 max-w-4xl"
            variants={fadeIn}
          >
            {t('about.mission.description')}
          </motion.p>
        </motion.div>
        
        {/* Our Team Section */}
        <motion.div 
          className="mb-16"
          variants={fadeIn}
        >
          <motion.h2 
            className="text-xl font-bold text-gray-900 mb-8"
            variants={fadeIn}
          >
            {t('about.team.title')}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Team Member 1 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-yellow-200 w-full aspect-square mb-4 rounded-lg"></div>
              <h3 className="font-semibold text-gray-900">{t('about.team.seif.name')}</h3>
              <p className="text-sm text-gray-500 mb-2">{t('about.team.seif.role')}</p>
              <p className="text-sm text-gray-700">
                {t('about.team.seif.description')}
              </p>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-yellow-200 w-full aspect-square mb-4 rounded-lg"></div>
              <h3 className="font-semibold text-gray-900">{t('about.team.nacib.name')}</h3>
              <p className="text-sm text-gray-500 mb-2">{t('about.team.nacib.role')}</p>
              <p className="text-sm text-gray-700">
                {t('about.team.nacib.description')}
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-yellow-200 w-full aspect-square mb-4 rounded-lg"></div>
              <h3 className="font-semibold text-gray-900">{t('about.team.ferial.name')}</h3>
              <p className="text-sm text-gray-500 mb-2">{t('about.team.ferial.role')}</p>
              <p className="text-sm text-gray-700">
                {t('about.team.ferial.description')}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Our Teaching Philosophy */}
        <motion.div 
          className="mb-16"
          variants={fadeIn}
        >
          <motion.h2 
            className="text-xl font-bold text-gray-900 mb-6"
            variants={fadeIn}
          >
            {t('about.philosophy.title')}
          </motion.h2>
        </motion.div>
        
        {/* Progress to Higher Levels Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center justify-center"
            variants={fadeIn}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* This represents the illustration of progress levels */}
              
              <Image src="/assets/images/about_image.svg" alt="Progress Levels" width={500} height={500} />
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <motion.h2 
              className="text-2xl text-black font-bold mb-4"
              variants={fadeIn}
            >
              {t('about.progress.title')}
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-4"
              variants={fadeIn}
            >
              {t('about.progress.description')}
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Book Now Section */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          whileInView={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/book" className=" bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors inline-block">
              {t('about.cta.button')}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <ContactSection />
      <Footer />
    </motion.div>
  );
}
