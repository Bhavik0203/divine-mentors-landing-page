"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, ArrowRight, Users, Clock, Shield } from 'lucide-react';

const PricingSection = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [counts, setCounts] = useState({ success: 0, satisfaction: 0, support: 0, results: 0 });
  const statsRef = useRef(null);

  const pricingTiers = [
    {
      name: "Essential",
      icon: <Shield className="w-6 h-6" />,
      price: '$299',
      description: "Perfect for individuals starting their journey",
      features: [
        "5 coaching sessions",
        "Personal assessment", 
        "Basic meal planning",
        "Email support",
        "Resource library access"
      ],
      popular: false
    },
    {
      name: "Professional", 
      icon: <Star className="w-6 h-6" />,
      price: '$599',
      description: "Most comprehensive transformation package",
      features: [
        "12 coaching sessions",
        "Advanced assessment",
        "Custom meal & workout plans", 
        "24/7 chat support",
        "Progress tracking app",
        "Weekly check-ins",
        "Bonus resources"
      ],
      popular: true
    },
    {
      name: "Elite",
      icon: <Users className="w-6 h-6" />,
      price: '$999', 
      description: "Premium experience with exclusive benefits",
      features: [
        "Unlimited coaching sessions",
        "VIP assessment suite",
        "Personalized nutrition coaching",
        "Priority support", 
        "Mobile app premium",
        "Monthly masterclasses",
        "1-on-1 mentorship",
        "Exclusive community access"
      ],
      popular: false
    }
  ];

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            const targets = { success: 10000, satisfaction: 95, support: 24, results: 3 };
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setCounts({
                success: Math.floor(targets.success * progress),
                satisfaction: Math.floor(targets.satisfaction * progress),
                support: Math.floor(targets.support * progress),
                results: Math.floor(targets.results * progress)
              });

              if (currentStep >= steps) {
                clearInterval(timer);
                // Set final values
                setCounts(targets);
              }
            }, stepDuration);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#576F9F] via-[#8ca1ca] to-[#576F9F]"></div>
      
      <div className="max-w-7xl mx-auto ">
        <div className='flex flex-col lg:flex-row gap-12'>
        {/* left side */}
        <div className="grid lg:grid-cols-1 gap-12 items-center mb-16 lg:w-1/3">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-[#576F9F]/10 text-[#576F9F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              Limited Time Pricing
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Investment in Your
              <br />
              <span className="text-[#576F9F]">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect package designed to deliver real, measurable results for your personal growth journey.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                30-day money back guarantee
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No setup fees
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6" ref={statsRef}>
            <div className="text-center p-6 bg-[#576F9F] rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-white mb-2">{counts.success.toLocaleString()}+</div>
              <div className="text-white text-sm">Success Stories</div>
            </div>
            <div className="text-center p-6 bg-[#576F9F] rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-white mb-2">{counts.satisfaction}%</div>
              <div className="text-white text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-[#576F9F] rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-white mb-2">{counts.support}/7</div>
              <div className="text-white text-sm">Expert Support</div>
            </div>
            <div className="text-center p-6 bg-[#576F9F] rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-white mb-2">{counts.results}mo</div>
              <div className="text-white text-sm">Avg. Results</div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="bg-white rounded-3xl lg:w-2/3 shadow-2xl border border-gray-100 overflow-hidden">
          {/* Plan Selector */}
          <div className="border-b border-gray-100 p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {pricingTiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedTier === index
                      ? 'bg-[#576F9F] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${selectedTier === index ? 'text-white' : 'text-[#576F9F]'}`}>
                      {tier.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold">{tier.name}</div>
                      <div className={`text-sm ${selectedTier === index ? 'text-blue-100' : 'text-gray-500'}`}>
                        {tier.price}/person
                      </div>
                    </div>
                  </div>
                  {tier.popular && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      POPULAR
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Plan Details */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Plan Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#576F9F]/10 rounded-xl flex items-center justify-center text-[#576F9F]">
                    {pricingTiers[selectedTier].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{pricingTiers[selectedTier].name}</h3>
                    <p className="text-gray-600">{pricingTiers[selectedTier].description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-5xl font-bold text-[#576F9F] mb-2">
                    {pricingTiers[selectedTier].price}
                    <span className="text-2xl text-gray-500 font-normal">/person</span>
                  </div>
                  <p className="text-gray-600">One-time investment in your future</p>
                </div>

                <button className="w-full bg-[#576F9F] hover:bg-[#4a5f8a] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
                  Reserve Your Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Secure payment
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Instant access
                  </div>
                </div>
                 {/* Bonus Section */}
                 <div className="mt-8 p-4 bg-[#576F9F]/5 rounded-xl border border-[#576F9F]/20">
                  <div className="flex items-center gap-2 text-[#576F9F] font-semibold mb-2">
                    <Star className="w-4 h-4" />
                    Bonus Included
                  </div>
                  <p className="text-sm text-gray-600">
                    Free access to our exclusive transformation community and monthly live Q&A sessions with experts.
                  </p>
                </div>
              </div>

              {/* Right: Features List */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">What's included:</h4>
                <div className="space-y-4">
                  {pricingTiers[selectedTier].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 bg-[#576F9F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by thousands of successful transformations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Forbes</div>
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Wellness Today</div>
            <div className="text-2xl font-bold text-gray-400">Health Magazine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;