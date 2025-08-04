"use client";
import { useState } from "react";
import React from "react";
import { 
  Star, 
  Heart, 
    Calendar,
  Users, 
  
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function OfferingsDesigns() {
  const [currentDesign, setCurrentDesign] = useState(0);
  
   const offerings = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Heart-Centered Healing",
      description: "Experience profound emotional and spiritual healing through ancient practices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Connection",
      description: "Join a supportive community of spiritual seekers on similar journeys"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personal Transformation",
      description: "Discover your authentic self through guided spiritual awakening"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Continuous guidance and mentorship beyond the initial event"
    }
  ];

  const designs = [
    // Design 1: Hexagonal Cards
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className="group relative">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#f87f18]/20">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f87f18] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f87f18] to-orange-600 rounded-full flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Design 2: Staggered Timeline
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="space-y-8">
        {offerings.map((offering, index) => (
          <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-1 ${index % 2 === 1 ? 'text-right' : ''}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{offering.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{offering.description}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f87f18] to-orange-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300">
                {offering.icon}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        ))}
      </div>
    </div>,

    // Design 3: Masonry Grid
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className="break-inside-avoid mb-8">
            <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
              index % 3 === 0 ? 'pt-12 pb-8' : index % 3 === 1 ? 'pt-8 pb-12' : 'pt-10 pb-10'
            }`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f87f18] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {React.cloneElement(offering.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{offering.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{offering.description}</p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#f87f18] to-orange-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Design 4: Circular Flow
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-62 h-62 bg-gradient-to-br from-[#f87f18]/10 to-orange-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f87f18] to-orange-600 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#f87f18] transition-colors duration-300">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Design 5: Gradient Overlays
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((offering, index) => (
          <div key={index} className="group h-80">
            <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f87f18]/90 to-orange-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <div className="mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                  <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{offering.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ];

  const designNames = [
    "Hexagonal Cards",
    "Staggered Timeline", 
    "Masonry Grid",
    "Circular Flow",
    "Gradient Overlays"
  ];

  return (
    <div className="min-h-screen  py-16">
      {/* Design Navigator */}
      

      {/* Current Design */}
      <div className="transition-all duration-500 ease-in-out">
        {designs[currentDesign]}
      </div>
      
      {/* Design Dots */}
      <div className="flex justify-center mt-12 gap-3">
        {designs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDesign(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentDesign === index 
                ? 'bg-[#f87f18] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}