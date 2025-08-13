'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariants, slideFromLeftVariants, slideFromRightVariants, staggerChildrenVariants } from '@/utils/animations';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Speak Like a Native: Mastering Pronunciation and Intonation",
    category: "Fluency Seekers",
    image: "/assets/images/blog_1.png",
    imageAlt: "People talking in a café",
  },
  {
    id: 2,
    title: "Ace Your Spanish Job Interview: From '¡hola!' to Salary Talks",
    category: "Career Builders",
    image: "/assets/images/blog_2.png"  ,
    imageAlt: "Two professionals having a conversation",
  },
  {
    id: 3,
    title: "Ace your exams with our carefully crafted lessons and assignments",
    category: "Highschool Students",
    image: "/assets/images/blog_3.png",
    imageAlt: "Coffee cup with Spanish drawings",
  }
];

export default function BlogSection() {
  return (
    <motion.div 
      className="flex flex-col py-20 px-6 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="w-full max-w-6xl mx-auto"
        variants={staggerChildrenVariants}
      >
        {/* Header with title and "View all" link */}
        <motion.div 
          className="flex justify-between items-center mb-12"
          variants={fadeUpVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            variants={fadeUpVariants}
          >
            Learning resources that bring<br />language to life
          </motion.h2>
          <Link href="/blog" className="flex items-center text-gray-600 hover:text-gray-900 hover:translate-x-2 transition-all duration-300">
            <span>View all articles</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
        
        {/* Blog posts grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerChildrenVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="flex flex-col h-full bg-white rounded-2xl hover:-translate-y-4  transition-all duration-300"
              variants={fadeUpVariants}
              custom={index * 0.1}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-56 mb-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <Image 
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Category tag */}
              <div className="mb-3">
                <span className="inline-block px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-600">
                  {post.category}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h3>
              
              {/* This creates space at the bottom to push the category up */}
              <div className="flex-grow"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
