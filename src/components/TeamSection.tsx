import React from 'react';
import Image from 'next/image';

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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black font-bold mb-4">Meet Our Team</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Our team of experienced language instructors is dedicated to helping you achieve your language learning goals. Each 
          instructor brings a unique approach and expertise to create an engaging and effective learning experience.
        </p>
      </div>
      
      {/* Video Section */}
      <div className="relative w-full max-w-4xl mx-auto aspect-video bg-yellow-300 rounded-lg mb-16 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square bg-yellow-300 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
            <p className="text-center text-gray-700">
              {member.role} {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
