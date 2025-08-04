import React from 'react';
import Image from 'next/image';

const UniversityHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg" // Replace with your actual image path
          alt="Students studying together"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Find Your University Now
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              Mauris, in lacinia quam iaculis non. Suspendisse nibh enim, bibendum 
              id aliquet dapibus, id urna. Maecenas tincidunt eleifend aliquet. 
              Quisque sit amet consequat arcu.
            </p>
            
            <div className="pt-4">
              <button className="bg-white cursor-pointer text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column - Image space (content continues behind overlay) */}
          <div className="hidden lg:block">
            {/* This space is for the right side of the image to show through */}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"></div>
    </div>
  );
};

export default UniversityHero;