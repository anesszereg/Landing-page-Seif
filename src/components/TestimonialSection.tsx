'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerChildrenVariants, springyVariants } from '@/utils/animations';

// Testimonial data
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export default function TestimonialSection() {
  const [showAll, setShowAll] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Leslie M",
      rating: 5,
      comment: "Langua rocks! I've tried Babbel and others and there is no comparison. Langua's AI chat feature is rapidly allowing me to get over my fear of speaking French and improving my abilities. The flashcards are the best vocab builder I've used...",
      date: "Feb 28, 2024",
      avatar: "/assets/images/avatar-1.png"
    },
    {
      id: 2,
      name: "Maria C",
      rating: 5,
      comment: "I LOVE Langua! I've been using it daily for months. The chat feature is fantastic - it feels like talking to a real, empathetic language partner who corrects me and suggests more advanced phrasing. It's pressure-free and I'm...",
      date: "Jun 19, 2025",
      avatar: "/assets/images/avatar-2.png"
    },
    {
      id: 3,
      name: "Chris S",
      rating: 5,
      comment: "This is by far the best language learning app I have tried - and I've tried many! I need to learn very Mexico-specific Spanish, and this app gets insanely granular with extremely localized info about meanings, usage, even slang. It's...",
      date: "Apr 18, 2025",
      avatar: "/assets/images/avatar-3.png"
    },
    {
      id: 4,
      name: "Gaelle",
      rating: 5,
      comment: "As a language teacher, I find langua far more effective than apps like duolingo, which my husband uses for french. With its realistic conversations and flexibility to focus on whatever topics interest me, Langua is a game...",
      date: "Mar 26, 2024",
      avatar: "/assets/images/avatar-4.png"
    },
    {
      id: 5,
      name: "Kathy",
      rating: 5,
      comment: "Langua is fantastic. I've tried Babbel and Duolingo and I find Langua far more useful. The AI conversation is the best!!",
      date: "Feb 2, 2024",
      avatar: "/assets/images/avatar-5.png"
    },
    {
      id: 6,
      name: "Harriet Waninge",
      rating: 5,
      comment: "Langua excels in leveraging AI in ways other language learning apps don't. For instance, the option to save words from the conversation as spaced repetition flashcards is so useful. Then there's the grammar practice mode in which...",
      date: "Aug 26, 2024",
      avatar: "/assets/images/avatar-6.png"
    }
  ];

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
            Discover why 10,000+ learners choose 
            <span className="text-[#FBBF24]"> Spanish with Seif </span>
             for building real-world fluency
          </motion.h2>
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
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <div className="w-full h-full bg-gray-300 relative">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
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
                  Read more
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
              Load more
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
