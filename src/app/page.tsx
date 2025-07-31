"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Users, Calendar, Heart, ChevronDown, ChevronUp, Play, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, CheckCircle, ArrowRight, BookOpen, Award, Target, Zap, Clock, Shield } from 'lucide-react';
import Image from 'next/image';
import banner2 from '../../public/banner2.jpeg';
import SpiritualBenefitsSection from './components/pain-point';
// import banner from '';

const DivineMentorsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const painPoints = [
    "Transform your mindset and unlock your true potential",
    "Learn ancient wisdom from experienced spiritual mentors",
    "Build lasting connections with like-minded individuals",
    "Develop practical tools for daily spiritual practice",
    "Overcome limiting beliefs and emotional blockages",
    "Discover your life's purpose and divine calling"
  ];

  const mentors = [
    {
      name: "Guru Ananda",
      bio: "25+ years of meditation mastery and spiritual guidance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialty: "Meditation & Mindfulness"
    },
    {
      name: "Master Priya",
      bio: "Expert in chakra healing and energy transformation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e9?w=300&h=300&fit=crop&crop=face",
      specialty: "Energy Healing"
    },
    {
      name: "Sage Krishnan",
      bio: "Ancient Vedic wisdom teacher and life coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialty: "Vedic Philosophy"
    },
    {
      name: "Divine Mother Lakshmi",
      bio: "Spiritual counselor specializing in inner peace",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialty: "Spiritual Counseling"
    }
  ];

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

  const blogs = [
    {
      title: "The Path to Inner Peace",
      excerpt: "Discover ancient techniques for finding tranquility in modern life...",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      date: "July 20, 2025"
    },
    {
      title: "Awakening Your Divine Purpose",
      excerpt: "Learn how to align with your soul's true calling and live authentically...",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      date: "July 15, 2025"
    },
    {
      title: "Healing Through Sacred Practices",
      excerpt: "Explore time-tested spiritual practices for holistic healing...",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      date: "July 10, 2025"
    }
  ];

  const faqs = [
    {
      question: "What can I expect from this transformational event?",
      answer: "You'll experience guided meditations, healing sessions, spiritual teachings, and personal mentorship from our divine mentors. The event includes workshops, community sharing, and practical tools for your spiritual journey."
    },
    {
      question: "Do I need prior spiritual experience?",
      answer: "Not at all! Our events welcome seekers at all levels, from complete beginners to advanced practitioners. Our mentors tailor their guidance to meet you where you are on your journey."
    },
    {
      question: "What is included in the event registration?",
      answer: "Registration includes all sessions, materials, refreshments, access to our community platform, and follow-up resources. Premium packages include one-on-one mentor sessions."
    },
    {
      question: "Is there ongoing support after the event?",
      answer: "Yes! We provide continuous support through our online community, monthly group calls, and access to exclusive content. Our mentors remain available for guidance."
    },
    {
      question: "What should I bring to the event?",
      answer: "Just bring an open heart and mind! We'll provide all necessary materials. Comfortable clothing and a journal for personal reflections are recommended."
    }
  ];

  const pricingTiers = [
    {
      name: "Seeker",
      price: "$97",
      features: ["Full event access", "Group sessions", "Take-home materials", "Community access"],
      popular: false
    },
    {
      name: "Disciple",
      price: "$197",
      features: ["Everything in Seeker", "1-on-1 mentor session", "Premium materials", "Priority support"],
      popular: true
    },
    {
      name: "Divine",
      price: "$397",
      features: ["Everything in Disciple", "3 private sessions", "Lifetime community access", "Personal spiritual plan"],
      popular: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % painPoints.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 ">
                <Image src="/logo.png" alt="Divine Mentors" className="h-16 " width={70} height={80} />
              </div>
              
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Mentors', 'Events', 'Blog', 'Contact Us'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                   className="text-white py-2 hover:text-[#f87f18] transition-colors font-medium">
                  {item}
                </a>
              ))}
              <button className="bg-[#f87f18] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                Book Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Mentors', 'Events', 'Blog', 'Contact Us'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                   className="block px-3 py-2 text-gray-700 hover:text-[#f87f18]">
                  {item}
                </a>
              ))}
              <button className="w-full mt-2 bg-[#f87f18] text-white px-6 py-2 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
         
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" 
            alt="Spiritual Background" 
            className="w-full h-full object-cover"
          />
        </div> */}
         <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/main_video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-20"></div>
  </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Join the <span className="text-[#f87f18]">Transformational</span> Event
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            With Divine Mentors - Awaken Your Inner Wisdom & Transform Your Life
          </p>
          <button className="bg-white text-[#f87f18]  px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            Register Now - Transform Today
          </button>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
           src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" 
            alt="Spiritual Background" 
        </div> */}
      </section>

      {/* What We Offer */}
      <section className=" py-16  bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('${banner2.src}')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-[#f87f18] mb-4">{offering.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Event</h2>
              <p className="text-lg text-gray-600 mb-6">
                Divine Mentors brings together ancient wisdom and modern transformation techniques to create life-changing experiences. Our events are designed to awaken your inner potential, heal past wounds, and guide you toward your highest purpose.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through sacred teachings, guided meditations, energy healing, and personal mentorship, you'll embark on a journey of profound self-discovery. Our carefully curated programs blend traditional spiritual practices with contemporary healing modalities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands who have already transformed their lives through our divine guidance and supportive community of spiritual seekers.
              </p>
              <button className="bg-[#f87f18] text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
                alt="Spiritual Gathering" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6" />
                  <span className="font-bold">10,000+ Lives Transformed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Gurus */}
      <section className=" py-16  bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('${banner2.src}')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Divine Mentors</h2>
            <p className="text-xl text-gray-600">Learn from masters who have dedicated their lives to spiritual wisdom</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{mentor.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 mb-4">{mentor.bio}</p>
                  <button className="w-full bg-[#f87f18] text-white py-2 rounded-full hover:shadow-lg transition-all">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Slider */}
      {/* <section className="py-20 bg-[#f87f18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What You'll Gain</h2>
            <p className="text-xl opacity-90">Transform every aspect of your spiritual journey</p>
          </div>
          
          <div className="relative h-32 flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <p className="text-2xl font-medium transition-all duration-500">
                {painPoints[currentSlide]}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {painPoints.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}
      <SpiritualBenefitsSection/>
      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Our Blog</h2>
            <p className="text-xl text-gray-600">Insights and wisdom for your spiritual journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-[#f87f18] font-medium mb-2">{blog.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-[#f87f18] font-medium hover:text-[#f87f18] flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-[#f87f18] text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Read All Blogs
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" py-16  bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('${banner2.src}')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" alt="Transformation" className="rounded-full mx-auto shadow-lg" />
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop" alt="Healing" className="rounded-full mx-auto shadow-lg" />
            <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop" alt="Meditation" className="rounded-full mx-auto shadow-lg" />
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop" alt="Community" className="rounded-full mx-auto shadow-lg" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#f87f18] mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-[#f87f18] mb-8 max-w-2xl mx-auto">
            Don't let another day pass living below your potential. Join thousands who have discovered their divine purpose.
          </p>
          <button className="bg-[#f87f18] text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-[#f87f18] transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Book Your Transformation Now
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reserve Your Spot</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your transformation journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? 'ring-4 ring-[#f87f18] transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#f87f18] to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-[#f87f18] mb-4">
                    {tier.price}
                    <span className="text-lg text-gray-500">/person</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-bold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-[#f87f18] to-pink-600 text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and Booking Form Section */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')` }}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center z-50">
  <h2 className="text-4xl font-bold mb-4 text-white dark:text-white">
    Your Next Big Step Starts Here
  </h2>
  <p className="text-xl text-gray-200 dark:text-gray-200">
    Learn more and complete your registration for our transformative events
  </p>
</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FAQ Section - Left Side (1/2) */}
            <div className="lg:col-span-1 z-50">
             
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-lg shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/20 hover:backdrop-blur-md transition-colors"
                    >
                      <span className="font-medium text-white">{faq.question}</span>
                      {openFaq === index ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-100">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form - Right Side (1/2) */}
            <div className="lg:col-span-1 z-50">
            
              
              <form className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                      <input type="text" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-[#f87f18] focus:border-transparent placeholder-white" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <input type="email" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-[#f87f18] focus:border-transparent placeholder-white" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                      <input type="tel" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-[#f87f18] focus:border-transparent placeholder-white" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Package Selection *</label>
                      <select className="w-full px-4 py-3 bg-black/20 backdrop-blur-md text-white rounded-lg border border-white focus:ring-2  focus:ring-[#f87f18] focus:border-transparent">
                        <option>Select a package</option>
                        <option>Seeker - $97</option>
                        <option>Disciple - $197</option>
                        <option>Divine - $397</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2">Special Requirements or Questions</label>
                  <textarea className="w-full px-4 border-white py-3 rounded-lg borderbg-black/20 backdrop-blur-md focus:ring-2 focus:ring-[#f87f18] focus:border-transparent placeholder-white" rows={2} placeholder="Let us know if you have any special requirements or questions..."></textarea>
                </div>
                
  
                
                <button type="submit" className="w-full bg-[#f87f18]  text-white py-2 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Complete Registration & Pay
                </button>
                
                
              </form>
            </div>
          </div>
        </div>
      </section>

      
     

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f87f18] to-pink-400 bg-clip-text text-transparent mb-4">
                Divine Mentors
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Guiding souls on their journey to spiritual awakening and personal transformation through ancient wisdom and modern healing practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#f87f18] p-3 rounded-full hover:bg-[#f87f18] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f87f18] p-3 rounded-full hover:bg-[#f87f18] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f87f18] p-3 rounded-full hover:bg-[#f87f18] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#f87f18] p-3 rounded-full hover:bg-[#f87f18] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-[#f87f18] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#f87f18] transition-colors">About Us</a></li>
                <li><a href="#mentors" className="text-gray-300 hover:text-[#f87f18] transition-colors">Our Mentors</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-[#f87f18] transition-colors">Events</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-[#f87f18] transition-colors">Blog</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-[#f87f18] transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#f87f18] mr-3" />
                  <span className="text-gray-300">123 Spiritual Way, Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#f87f18] mr-3" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#f87f18] mr-3" />
                  <span className="text-gray-300">connect@divinementors.com</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Stay Connected</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#f87f18]"
                  />
                  <button className="bg-gradient-to-r from-[#f87f18] to-pink-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
                <a href="#privacy" className="text-gray-300 hover:text-[#f87f18] transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-300 hover:text-[#f87f18] transition-colors">Terms of Service</a>
                <a href="#disclaimer" className="text-gray-300 hover:text-[#f87f18] transition-colors">Disclaimer</a>
                <a href="#cookies" className="text-gray-300 hover:text-[#f87f18] transition-colors">Cookie Policy</a>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-right">
                © 2025 Divine Mentors. All rights reserved. | Transforming lives through spiritual wisdom.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110">
          <Phone className="w-6 h-6" />
        </button>
      </div>
      {/* <div className="fixed bottom-20 right-6 z-50 space-y-3">
      <button className="bg-gradient-to-r from-[#f87f18] to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold">
          Book Now
        </button>
      </div> */}

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .8; }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f87f18, #ec4899);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f87f18, #db2777);
        }
      `}</style>
    </div>
  );
};

export default DivineMentorsLanding;
