"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Compass, Shield, Target, Zap, Brain, DollarSign, Star, Home, Play, Pause } from 'lucide-react';

const BenefitsSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Crystal Clear Life Purpose",
      description: "Discover your authentic dharma and align your career, relationships, and daily choices with your soul's true calling through guided self-inquiry and meditation.",
      gradient: "from-[#576F9F] to-[#576F9F]/40"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emotional Mastery & Resilience",
      description: "Learn powerful techniques to transform stress, anxiety, and overwhelm into sources of strength and wisdom using ancient emotional alchemy practices.",
       gradient: "from-[#576F9F] to-[#576F9F]/40"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Enhanced Mental Clarity & Focus",
      description: "Develop laser-sharp concentration and decision-making abilities through specialized pranayama and mindfulness techniques proven by neuroscience.",
       gradient: "from-[#576F9F] to-[#576F9F]/40"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Conscious Success & Abundance",
      description: "Integrate spiritual principles with practical success strategies to create wealth and achievement that align with your highest values and purpose.",
       gradient: "from-[#576F9F] to-[#576F9F]/40"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Authentic Leadership Presence",
      description: "Cultivate the charisma, intuition, and influence that comes from inner alignment, enabling you to lead with both power and compassion.",
       gradient: "from-[#576F9F] to-[#576F9F]/40"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Harmonious Relationships",
      description: "Master the art of conscious communication and emotional intelligence to create deeper, more fulfilling connections in all areas of your life.",
       gradient: "from-[#576F9F] to-[#576F9F]/40"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, benefits.length]);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % benefits.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">What You'll Gain</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transform every aspect of your spiritual journey with profound, lasting change</p>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col lg:flex-row gap-12 ">
          
          {/* Featured Card - Left Side */}
          <div className="lg:w-1/3">
            <div className="relative">
              {/* Main featured card */}
              <div className="bg-gradient-to-br from-[#576F9F] to-[#576F9F]/80 p-10 rounded-3xl text-white shadow-2xl">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      {benefits[activeCard].icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{benefits[activeCard].title}</h3>
                  
                  </div>
                  
                </div>
                <p className="text-white/90 text-lg leading-relaxed">{benefits[activeCard].description}</p>

                
                {/* Progress bar */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/70">Progress</span>
                    <span className="text-sm text-white/70">{activeCard + 1} of {benefits.length}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-1000 ease-out"
                      style={{ width: `${((activeCard + 1) / benefits.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-[#576F9F]" />
              </div>
            </div>
          </div>

          {/* Benefits List - Right Side */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveCard(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    index === activeCard ? 'scale-102' : 'hover:scale-101'
                  }`}
                >
                  <div className={`
                    flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-500 h-full
                    ${index === activeCard 
                      ? 'bg-[#576F9F]/10 border-[#576F9F] shadow-lg' 
                      : 'bg-white border-gray-200 hover:border-[#576F9F]/50 hover:bg-[#576F9F]/5'
                    }
                  `}>
                    {/* Icon */}
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500
                      ${index === activeCard 
                        ? 'bg-[#576F9F] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-900 group-hover:bg-[#576F9F]/20 group-hover:text-[#576F9F]'
                      }
                    `}>
                      {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h4 className={`
                        font-semibold text-lg transition-colors duration-500
                        ${index === activeCard ? 'text-gray-900' : 'text-gray-900 group-hover:text-gray-900'}
                      `}>
                        {benefit.title}
                      </h4>
                    </div>

                    {/* Active indicator */}
                    {/* <div className={`
                      flex-shrink-0 w-3 h-3 rounded-full transition-all duration-500
                      ${index === activeCard 
                        ? 'bg-[#576F9F] shadow-md' 
                        : 'bg-gray-300 group-hover:bg-[#576F9F]/50'
                      }
                    `}></div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

        {/* Step indicators */}
        
      </div>
    </section>
  );
};

export default BenefitsSection;