"use client"
import React from 'react';
import Image from 'next/image';
import mentor1 from '../../../public/Swami_Pratik_3.jpg';
import banner2 from '../../../public/banner222.jpg';
const AboutSection = () => {
  return (
    <div  className=" py-16  bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('${banner2.src}')` }}>
      {/* Decorative Pattern */}
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-10 flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src={mentor1}
                  alt="Venerable Shinomori Aoshi"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="mb-6">
              <p className="text-white text-sm font-medium tracking-wider uppercase mb-4">
              About the Event
              </p>
           
            </div>

            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-4xl">
            Divine Mentors presents an extraordinary spiritual gathering bringing authentic Indian wisdom traditions to Switzerland. Our four esteemed mentors – direct from India's spiritual centers – share centuries-old practices specifically adapted for modern seekers' needs. This (2 week) intensive transformation weekend (delete) combines classical teachings with scientifically validated approaches for mental clarity, emotional balance, and spiritual growth. Set against the inspiring backdrop of the Swiss Alps, you'll find the perfect environment for profound inner work and lasting change. This exclusive event is designed for serious practitioners ready to commit to genuine spiritual development and personal excellence.</p>

            <button className="bg-white hover:bg-blue-200 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              More About
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-blue-400/20 rounded-full"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 border border-purple-400/20 rounded-full"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-blue-400/20 rounded-full"></div>
    </div>
  );
};

export default AboutSection;