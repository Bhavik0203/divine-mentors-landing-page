"use client";
import { useState, useEffect } from 'react';
import { Sparkles, Heart, Brain, Compass, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import bg from '../../../public/bg2.png';
export default function SpiritualBenefitsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: Heart,
      title: "Inner Peace & Harmony",
      description: "Discover profound tranquility and emotional balance through ancient wisdom and modern mindfulness practices",
      number: "01"
    },
    {
      icon: Brain,
      title: "Enhanced Clarity & Focus",
      description: "Sharpen your mental acuity and gain crystal-clear insight into life's deepest questions and challenges",
      number: "02"
    },
    {
      icon: Compass,
      title: "Divine Purpose & Direction",
      description: "Uncover your soul's true calling and align with your highest potential for meaningful existence",
      number: "03"
    },
    {
      icon: Star,
      title: "Elevated Consciousness",
      description: "Expand your awareness beyond the ordinary and experience profound spiritual awakening and growth",
      number: "04"
    },
    {
      icon: Zap,
      title: "Unlimited Energy & Vitality",
      description: "Tap into infinite sources of spiritual energy that revitalize your body, mind, and spirit",
      number: "05"
    },
    {
      icon: Sparkles,
      title: "Miraculous Manifestation",
      description: "Master the art of conscious creation and watch your deepest desires unfold with divine timing",
      number: "06"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % benefits.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [benefits.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const currentBenefit = benefits[currentSlide];
  const IconComponent = currentBenefit.icon;

  return (
    <section className=" py-16 bg-[#122730] text-white bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('${bg.src}')` }}>
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/20"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 20}%`,
                width: '80px',
                height: '80px',
                transform: `rotate(${i * 7}deg)`,
                borderRadius: i % 3 === 0 ? '50%' : '0%'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center ">
          <div className="relative inline-block">
            <h2 className="text-5xl font-black text-black mb-4 relative">
              What You'll Gain
              {/* <div className="absolute -top-2 -right-6 w-12 h-12 border-4 border-yellow-400 rounded-full animate-spin"></div> */}
            </h2>
          </div>
          <p className="text-xl text-gray-600 opacity-90 max-w-2xl mx-auto font-light">
            Transform every aspect of your spiritual journey
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0  cursor-pointer top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              {/* Previous Card */}
              <div className="hidden lg:block transform scale-75 opacity-50 transition-all duration-700">
                {benefits[(currentSlide - 1 + benefits.length) % benefits.length] && (
                  <BenefitCard 
                    benefit={benefits[(currentSlide - 1 + benefits.length) % benefits.length]} 
                    isActive={false}
                  />
                )}
              </div>

              {/* Current Card */}
              <div className="transform scale-100 opacity-100 transition-all duration-700 lg:col-span-1">
                <BenefitCard benefit={currentBenefit} isActive={true} />
              </div>

              {/* Next Card */}
              <div className="hidden lg:block transform scale-75 opacity-50 transition-all duration-700">
                {benefits[(currentSlide + 1) % benefits.length] && (
                  <BenefitCard 
                    benefit={benefits[(currentSlide + 1) % benefits.length]} 
                    isActive={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        {/* <div className="flex flex-col items-center mt-12 space-y-6">
        
          <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-2xl font-bold">{currentBenefit.number}</span>
            <div className="w-px h-6 bg-white/40"></div>
            <span className="text-sm opacity-80">of {benefits.length.toString().padStart(2, '0')}</span>
          </div>

          <div className="flex space-x-3">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
              >
                <div className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 shadow-lg' 
                    : 'bg-white/30 group-hover:bg-white/50'
                }`}>
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 right-10 w-6 h-6 border-2 border-white/30 rotate-45 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-yellow-400/50 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-8 w-8 h-8 border border-white/20 rounded-full animate-spin"></div> */}
    </section>
  );
}

// Separate Card Component
function BenefitCard({ benefit, isActive }: { benefit: { icon: any, number: string, title: string, description: string }, isActive: boolean }) {
  const IconComponent = benefit.icon;
  
  return (
    <div className={`relative group transition-all duration-500 ${
      isActive ? 'transform hover:scale-105' : ''
    }`}>
      {/* Card Background */}
      <div className="relative .
      
      
      
      
      
      
      
      
      
      
      bg-[#283042] backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl min-h-[320px] flex flex-col">
        {/* Number Badge */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-black text-lg shadow-lg">
          {benefit.number}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <h3 className="text-2xl font-bold mb-4 leading-tight">
            {benefit.title}
          </h3>
          <p className="text-white/90 leading-relaxed text-base">
            {benefit.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400/50 rounded-full"></div>
        <div className="absolute top-4 left-4 w-1 h-1 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
}