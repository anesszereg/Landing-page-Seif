'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariants, scaleVariants, staggerChildrenVariants } from '@/utils/animations';
import { useTranslation } from '@/context/TranslationContext';

const TeamSection = () => {
  const { t } = useTranslation();
  
  // Define translation key types to fix TypeScript errors
  type TeamMemberKey = 'team.seif.role' | 'team.seif.description' | 'team.nada.role' | 'team.nada.description' | 'team.feriel.role' | 'team.feriel.description';
  const teamMembers = [
    {
      name: 'Seif',
      roleKey: 'team.seif.role' as TeamMemberKey,
      descriptionKey: 'team.seif.description' as TeamMemberKey,
      image: '/assets/Team/Seif.svg'
    },
    {
      name: 'Katret Nada',
      roleKey: 'team.nada.role' as TeamMemberKey,
      descriptionKey: 'team.nada.description' as TeamMemberKey,
      image: '/assets/Team/KatretNada.svg'
    },
    {
      name: 'Feriel',
      roleKey: 'team.feriel.role' as TeamMemberKey,
      descriptionKey: 'team.feriel.description' as TeamMemberKey,
      image: '/assets/Team/Feriel.webp'
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
          {t('team.title')}
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-gray-700"
          variants={fadeUpVariants}
          custom={1}
        >
          {t('team.description')}
        </motion.p>
      </motion.div>
      
      {/* Video Section */}
      <motion.div 
        className="relative w-full max-w-4xl mx-auto aspect-video mb-16 overflow-hidden rounded-lg shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleVariants}
        custom={2}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/2SIdIAMzHH0"
          title="Spanish Lessons Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
            className="flex flex-col items-center "
            variants={fadeUpVariants}
            custom={index + 3}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-full aspect-square rounded-lg mb-4 overflow-hidden relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={member.image} 
                alt={`${member.name} - Spanish instructor`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </motion.div>
            <h3 className="font-semibold text-black text-xl mb-1">{member.name}</h3>
            <p className="text-center text-gray-700">
              {t(member.roleKey)} {t(member.descriptionKey)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
