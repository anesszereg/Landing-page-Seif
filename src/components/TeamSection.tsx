'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariants, scaleVariants, staggerChildrenVariants, slideFromLeftVariants } from '@/utils/animations';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Seif',
      role: "I'm Seif,",
      description: "my aim is to get you speaking Spanish with pleasure, efficiency and confidence, right from the start."
    },
    {
      name: 'Katret Nada',
      role: "I'm Nada,",
      description: "my aim is to get you speaking Spanish with pleasure, efficiency and confidence, right from the start."
    },
    {
      name: 'Feriel',
      role: "I'm Feriel,",
      description: "my aim is to get you speaking Spanish with pleasure, efficiency and confidence, right from the start."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenVariants}
      >
        <motion.h2 
          className="text-4xl text-black font-bold mb-4"
          variants={fadeUpVariants}
          custom={0}
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-gray-700"
          variants={fadeUpVariants}
          custom={1}
        >
          Our team of experienced language instructors is dedicated to helping you achieve your language learning goals. Each 
          instructor brings a unique approach and expertise to create an engaging and effective learning experience.
        </motion.p>
      </motion.div>
      
      {/* Video Section */}
      <motion.div 
        className="relative w-full max-w-4xl mx-auto aspect-video bg-yellow-300 rounded-lg mb-16 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleVariants}
        custom={2}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
        </motion.div>
      </motion.div>

      {/* Team Members */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildrenVariants}
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            variants={fadeUpVariants}
            custom={index + 3}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-full aspect-square bg-yellow-300 rounded-lg mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
            <p className="text-center text-gray-700">
              {member.role} {member.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
