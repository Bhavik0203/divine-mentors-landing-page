"use client"
import React from 'react';
import Image from 'next/image';
import mentor1 from '../../../public/Swami_Pratik_3.jpg';
import banner2 from '../../../public/banner222.jpg';

const AboutSection = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat bg-fixed relative"
    style={{ backgroundImage: `url('${banner2.src}')` }}>
      {/* Decorative Pattern */}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 max-w-6xl">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
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
          <div className="flex-1 text-center lg:text-left max-w-2xl order-1 lg:order-2">
            <div className="mb-4 sm:mb-6">
              <p className="text-white text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-4">
                About the Event
              </p>
            </div>

            <p className="text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-4xl">
              Divine Mentors presents an extraordinary spiritual gathering bringing authentic Indian wisdom traditions to Switzerland. Our four esteemed mentors – direct from India's spiritual centers – share centuries-old practices specifically adapted for modern seekers' needs. This intensive transformation weekend combines classical teachings with scientifically validated approaches for mental clarity, emotional balance, and spiritual growth. Set against the inspiring backdrop of the Swiss Alps, you'll find the perfect environment for profound inner work and lasting change. This exclusive event is designed for serious practitioners ready to commit to genuine spiritual development and personal excellence.
            </p>

            {/* <button className="bg-white cursor-pointer hover:bg-blue-200 text-black font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base">
              More About
            </button> */}
          </div>
        </div>
      </div>

      {/* Background Pattern Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-24 h-24 border border-blue-400/20 rounded-full"></div>
      <div className="hidden md:block absolute bottom-32 left-16 w-16 h-16 border border-purple-400/20 rounded-full"></div>
      <div className="hidden md:block absolute top-1/2 right-8 w-8 h-8 bg-blue-400/20 rounded-full"></div>
    </div>
  );
};

export default AboutSection;