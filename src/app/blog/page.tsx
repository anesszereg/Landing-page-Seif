'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/context/TranslationContext';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

// Animation variants as Framer Motion variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -8, scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.05, x: 5 }
};

// Blog page component
export default function BlogPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  // Featured blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: 'Mastering Spanish Grammar: A Comprehensive Guide',
      description: 'Unlock the secrets of Spanish grammar with our detailed guide, covering everything from verb conjugations to sentence structure. This comprehensive resource is designed to help learners of all levels improve their understanding and use of Spanish grammar.',
      image: '/assets/images/blog_1.png',
      slug: 'mastering-spanish-grammar',
      category: 'Grammar'
    },
    {
      id: 2,
      title: 'Top 10 Spanish Phrases for Travelers',
      description: 'Equip yourself with essential Spanish phrases for your next trip. Learn how to order food, ask for directions, and more. This guide provides practical phrases that will enhance your travel experience in Spanish-speaking countries.',
      image: '/assets/images/blog2.png',
      slug: 'top-10-spanish-phrases-travelers',
      category: 'Travel'
    }
  ];

  // Latest blog posts data
  const latestPosts = [
    {
      id: 3,
      title: 'The Best Resources for Learning Spanish Online',
      description: 'Discover the top online resources for learning Spanish, including apps, websites, and interactive courses.',
      image: '/assets/images/blog3.png',
      slug: 'best-resources-learning-spanish-online',
      category: 'Resources'
    },
    {
      id: 4,
      title: 'Spanish Culture and Traditions: An Overview',
      description: 'Explore the rich culture and traditions of Spanish-speaking countries, from festivals to cuisine.',
      image: '/assets/images/blog4.png',
      slug: 'spanish-culture-traditions-overview',
      category: 'Culture'
    }
  ];

  // Categories and tags
  const categories = ['Grammar', 'Vocabulary', 'Culture', 'Travel', 'Resources'];
  const tags = ['Beginner', 'Intermediate', 'Advanced', 'Tips', 'Tricks', 'Learning', 'Spanish', 'Language', 'Culture', 'Travel'];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-sans bg-white pt-24"
    >


      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6 sm:py-8 mb-16 sm:mb-24"
        variants={staggerContainer}
      >
        {/* Breadcrumb */}
        <motion.div
          className="text-sm text-black mb-4"
          variants={fadeIn}
        >
          <Link href="/" className="hover:text-yellow-500 transition-colors">{t('blog.breadcrumb.home')}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{t('blog.page.title')}</span>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
          variants={titleVariants}
        >
          {t('blog.page.title')}
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="relative mb-8 sm:mb-12"
          variants={fadeIn}
        >
          <div className="bg-[#F4FAFF] border border-gray-200 rounded-md flex justify-start  items-center px-3 py-2">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={t('blog.search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-1 pl-2 bg-transparent placeholder:text-gray-400 text-black border-none focus:outline-none focus:ring-0"
            />
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div variants={fadeIn}>
          <h2 className="text-xl sm:text-2xl text-black font-bold mb-4 sm:mb-6">{t('blog.featured.title')}</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          >
            {featuredPosts.map(post => (
              <motion.div
                key={post.id}
                className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover="hover"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative w-full">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={500}
                        className="w-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl text-black font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-4">{post.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Latest Posts */}
        <motion.div
          className="mt-12"
          variants={fadeIn}
        >
          <h2 className="text-xl sm:text-2xl text-black font-bold mb-4 sm:mb-6">{t('blog.latest.title')}</h2>
          <div className="space-y-8">
            {latestPosts.map(post => (
              <motion.div
                key={post.id}
                className="flex flex-col md:flex-row gap-8 p-4 rounded-lg hover:bg-gray-50"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover="hover"
              >
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl text-black font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </Link>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium inline-block transition-colors"
                    >
                      {t('blog.readmore')}
                    </motion.div>
                  </Link>
                </div>
                <div className="flex-none">
                  <Link href={`/blog/${post.slug}`} className="block relative w-full md:w-64 h-40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={250}
                      height={160}
                      className="object-cover rounded-md w-full h-full"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="mt-10"
          variants={fadeIn}
        >
          <h2 className="text-xl text-black font-bold mb-4">{t('blog.categories.title')}</h2>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {categories.map(category => (
              <motion.div
                key={category}
                variants={listItemVariants}
                transition={{ duration: 0.3 }}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                <Link href={`/blog/category/${category.toLowerCase()}`} className="block px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-md text-gray-700 text-sm transition-colors">
                  {category}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="mt-8"
          variants={fadeIn}
        >
          <h2 className="text-xl text-black font-bold mb-4">{t('blog.tags.title')}</h2>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {tags.map(tag => (
              <motion.div
                key={tag}
                variants={listItemVariants}
                transition={{ duration: 0.3 }}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                <Link href={`/blog/tag/${tag.toLowerCase()}`} className="block px-3 py-1 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-md text-sm text-gray-700 transition-colors">
                  {tag}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <ContactSection />
      <Footer  />
    </motion.div>
  );
}
