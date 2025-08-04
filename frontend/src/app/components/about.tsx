"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import mentor1 from '../../../public/Swami_Pratik_3.jpg';
import banner2 from '../../../public/banner222.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 md:py-12 bg-[#122730] ">
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
            <h2 className="text-4xl font-bold text-white mb-4"> {t('about.title')}
              </h2>
            </div>

            <div className="text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-4xl space-y-4">
              {t('about.description').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* <button className="bg-white cursor-pointer hover:bg-blue-200 text-black font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base">
              More About
            </button> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;