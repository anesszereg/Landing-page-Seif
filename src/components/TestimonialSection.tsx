'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerChildrenVariants, springyVariants } from '@/utils/animations';
import { useTranslation } from '@/context/TranslationContext';

// Testimonial data
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

type CourseType = 'general' | 'private' | 'groupclass' | 'younglearners';

interface TestimonialSectionProps {
  courseType?: CourseType;
}

export default function TestimonialSection({ courseType = 'general' }: TestimonialSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  
  // Get testimonials - combining reviews from all course types
  const getTestimonials = (): Testimonial[] => {
    // Combining 3 reviews from each course type
    const combinedTestimonials = [
      // Private course reviews
      {
        id: 1,
        name: t('private.reviews.review1.name'),
        rating: 5,
        comment: t('private.reviews.review1.text'),
        date: "Feb 28, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 2,
        name: t('private.reviews.review2.name'),
        rating: 5,
        comment: t('private.reviews.review2.text'),
        date: "Mar 15, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 3,
        name: t('private.reviews.review3.name'),
        rating: 5,
        comment: t('private.reviews.review3.text'),
        date: "Jan 10, 2024",
        avatar: "/assets/images/profile.webp"
      },
      
      // Group class reviews
      {
        id: 4,
        name: t('groupclass.reviews.name1'),
        rating: 5,
        comment: t('groupclass.reviews.text1'),
        date: "Feb 18, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 5,
        name: t('groupclass.reviews.name2'),
        rating: 5,
        comment: t('groupclass.reviews.text2'),
        date: "Mar 22, 2024",
        avatar: "/assets/images/profile.webp"
      },
      // Adding a general review to make up 3 for groupclass
      {
        id: 6,
        name: "Chris S",
        rating: 5,
        comment: t('testimonial.comment.3'),
        date: "Apr 18, 2023",
        avatar: "/assets/images/profile.webp"
      },
      
      // Young learners reviews
      {
        id: 7,
        name: t('younglearners.reviews.name1'),
        rating: 5,
        comment: t('younglearners.reviews.text1'),
        date: "Jan 12, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 8,
        name: t('younglearners.reviews.name2'),
        rating: 5,
        comment: t('younglearners.reviews.text2'),
        date: "Feb 5, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 9,
        name: t('younglearners.reviews.name3'),
        rating: 5,
        comment: t('younglearners.reviews.text3'),
        date: "Mar 20, 2024",
        avatar: "/assets/images/profile.webp"
      },
      
      // General course reviews
      {
        id: 10,
        name: "Leslie M",
        rating: 5,
        comment: t('testimonial.comment.1'),
        date: "Feb 28, 2024",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 11,
        name: "Maria C",
        rating: 5,
        comment: t('testimonial.comment.2'),
        date: "Jun 19, 2023",
        avatar: "/assets/images/profile.webp"
      },
      {
        id: 12,
        name: "Gaelle",
        rating: 5,
        comment: t('testimonial.comment.4'),
        date: "Mar 26, 2024",
        avatar: "/assets/images/profile.webp"
      }
    ];
    
    return combinedTestimonials;
  };
  
  const testimonials: Testimonial[] = getTestimonials();

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <div id="testimonials" className="py-20 px-6 bg-white">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeUpVariants}
        >
          <motion.h2 
            className="text-3xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
            variants={fadeUpVariants}
          >
            {courseType === 'private' ? t('private.reviews.title') :
             courseType === 'groupclass' ? t('groupclass.reviews.title') :
             courseType === 'younglearners' ? t('younglearners.reviews.title') :
             t('testimonial.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            {courseType === 'private' ? t('private.reviews.description') :
             courseType === 'groupclass' ? t('groupclass.reviews.description') :
             courseType === 'younglearners' ? t('younglearners.reviews.description') :
             t('testimonial.description')}
          </motion.p>
        </motion.div>
        
        {/* Testimonial grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildrenVariants}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-line hover:scale-[1.02] hover:-translate-y-1"
              variants={springyVariants}
              custom={index}
            >
              {/* Avatar and name */}
              <div className="flex items-center mb-2">
                {/*  */}
                <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
              </div>
              
              {/* Rating */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              
              {/* Read more link */}
              <div className="flex justify-between items-center">
                <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  {t('testimonial.readMore')}
                </button>
                <span className="text-gray-500 text-sm">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Load more button */}
        {!showAll && testimonials.length > 6 && (
          <motion.div 
            className="flex justify-center mt-10"
            variants={fadeUpVariants}
            custom={2}
          >
            <motion.button 
              onClick={() => setShowAll(true)}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('testimonial.readMore')}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
