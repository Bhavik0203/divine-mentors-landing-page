"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Users, Calendar, Heart, ChevronDown, ChevronUp, Play, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, CheckCircle, ArrowRight, BookOpen, Award, Target, Zap, Clock, Shield, Brain, Mountain, Handshake } from 'lucide-react';
import Image from 'next/image';
import banner from '../../public/mainbanner.jpg';
import banner2 from '../../public/banner2.jpeg';
import bg from '../../public/bhavik-02.png';
import mentor1 from '../../public/RAM_Baba.jpeg';
import mentor2 from '../../public/Swami_Pratik_3.jpg';
import mentor3 from '../../public/Naga_Baba_3.jpg';
import mentor4 from '../../public/Acharya_Shyam_Chetan_5.jpg';
import SpiritualBenefitsSection from './components/pain-point';
import blog1 from '../../public/BLOG-IMG.jpg';
import blog2 from '../../public/blog2.png';
import blog3 from '../../public/blog3.jpeg';
import OfferingsDesigns from './components/offer';
import AboutSection from './components/about';
import EventsWorkshops from './components/events';
import OneBlog from './components/legacyScrollBar';
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
      name: "Ram Baba",
      bio: "Private 1:1 consultations offering mindfulness, breathwork, and spiritual clarity.",
      image: mentor1, // Replace with actual image import or URL
      specialty: "Meditation & Mindfulness",
      offerings: [
        "Guided Meditation",
        "Pranayama Practices",
        "Mindfulness Coaching"
      ],
      website: "https://divinementors.com"
    },
    {
      name: "Mahant Swami Pratik Puri",
      bio: "1:1 sessions focused on ancient Indian energy healing and inner alignment.",
      image: mentor2,
      specialty: "Energy Healing",
      offerings: [
        "Energy Clearing",
        "Chakra Balancing",
        "Intuitive Spiritual Guidance"
      ],
      website: "https://divinementors.com"
    },
    {
      name: "Mahant Savan Bharti Naga Baba",
      bio: "Consultations on Vedic scriptures, philosophy, and spiritual discipline.",
      image: mentor3,
      specialty: "Vedic Philosophy",
      offerings: [
        "Vedic Teachings",
        "Scripture Study",
        "Spiritual Life Counseling"
      ],
      website: "https://divinementors.com"
    },
    {
      name: "Acharya Shyam Chetan",
      bio: "Spiritual guidance from the Divine Feminine path focused on inner peace and transformation.",
      image: mentor4,
      specialty: "Spiritual Counseling",
      offerings: [
        "Awakening Divine Feminine",
        "Inner Peace Practices",
        "Emotional & Energetic Healing"
      ],
      website: "https://divinemothercenter.org"
    }
  ];
  

  const offerings = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: " Authentic Spiritual Guidance",
      description: "Direct transmission of wisdom through lineage-based mentors with decades of experience in classical Indian traditions."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: " Personalized Transformation",
      description: "Individual assessment of your spiritual journey with customized practices tailored to your unique path of self-discovery."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: " Science-Backed Methods",
      description: "Proven techniques including pranayama, meditation, and spiritual psychology, validated by clinical research as effective alternatives to traditional approaches."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: " Modern Life Integration",
      description: "Practical tools for stress management, emotional intelligence, and leadership qualities that seamlessly integrate into your professional and personal life."
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: " Premium Swiss Experience",
      description: "Exclusive setting in Switzerland's breathtaking landscape, ensuring tranquility and focus for profound spiritual work."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Lifelong Mentorship",
      description: "Building lasting connections with authentic mentors for continuous guidance on your spiritual journey."
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
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#576F9F]/80 backdrop-blur-md shadow-lg' : ' bg-[#576F9F]/40 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 shadow-2xs">
          <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <Image src="/logo.png" alt="Divine Mentors" className="h-18" width={80} height={80} />
              </div>
              
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                {['Home', 'About', 'Mentors', 'Events', 'Blog', 'Contact Us'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     className="text-white py-2 hover:text-#576F9F transition-colors font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Book Now Button */}
            <div className="hidden md:flex">
              <button className="text-[#576F9F] bg-white px-6 py-2 rounded-full hover:shadow-lg hover:border-2 hover:border-[#576F9F] transform hover:scale-105 transition-all">
                Book Now
              </button>
            </div>

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
                   className="block px-3 py-2 items-center justify-center text-gray-700 hover:text-#576F9F">
                  {item}
                </a>
              ))}
              <button className="w-full mt-2 bg-#576F9F text-white px-6 py-2 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-start justify-start px-6 py-12 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src={banner}
      alt="Spiritual Background"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-20 text-left text-white max-w-xl py-20 items-center justify-center px-10">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
      Join the <span className="text-[#576F9F]">Transformational</span> Event
    </h1>
    <p className="text-xl md:text-2xl mb-8 opacity-90">
      With Divine Mentors - Awaken Your Inner Wisdom & Transform Your Life
    </p>
    <button className="bg-white text-[#576F9F] px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
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
      <section className=" py-16" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-xl text-gray-600">Discover the transformative experiences waiting for you</p>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group">
              <div className="card group relative w-[280px] h-[320px] bg-white rounded-[15px] flex flex-col items-center justify-center text-center p-6 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#576F9F] rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#576F9F]/80 transition-colors duration-300">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{offering.description}</p>
                </div>
                
                {/* Top Right Corner */}
                <div className="card-before absolute top-0 right-0 w-[20%] h-[20%] bg-[#576F9F]/20  rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-[15px]"></div>
                
                {/* Bottom Left Corner */}
                {/* <div className="card-after absolute bottom-0 left-0 w-[20%] h-[20%] bg-[#576F9F]/20 rounded-tl-[100%] rounded-br-[15px] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-[15px] flex items-center justify-center">
                   </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>
      {/* <OfferingsDesigns/> */}
       <AboutSection/>

      {/* About the Event */}
      {/* <section className="py-20 bg-white">
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
              <button className="bg-#576F9F text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
                alt="Spiritual Gathering" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-#576F9F rounded-xl p-6 text-white">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6" />
                  <span className="font-bold">10,000+ Lives Transformed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       
      {/* Meet the Gurus */}
      <section className="py-16 bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Divine Mentors</h2>
            <p className="text-xl text-gray-600">Learn from masters who have dedicated their lives to spiritual wisdom</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <article key={index} className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
                {/* <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    dateTime="2025-01-01"
                    className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                  >
                    <span>2025</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Divine</span>
                  </time>
                </div> */}

                <div className="hidden sm:block sm:basis-56">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold text-gray-900 uppercase">
                        {mentor.name}
                      </h3>
                    </a>

                    <p className="mt-2 text-sm/relaxed text-gray-700 mb-4">
                      {mentor.bio}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Specialty:</p>
                      <p className="text-sm text-gray-800 font-medium">{mentor.specialty}</p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                      href="#"
                      className="block bg-[#576F9F] px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-[#4a5f8a]"
                    >
                      Book Session
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
   
      {/* <EventsWorkshops/> */}

      {/* Pain Points Slider */}
      {/* <section className="py-20 bg-#576F9F text-white">
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
      {/* <SpiritualBenefitsSection/> */}
      
      {/* Blog Section */}
      
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Our Blog</h2>
            <p className="text-xl text-gray-600">Insights and wisdom for your spiritual journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-#576F9F font-medium mb-2">{blog.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-#576F9F font-medium hover:text-#576F9F flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-#576F9F text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Read All Blogs
            </button>
          </div>
        </div> */}
        <OneBlog/>
      <div className=" ">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side - Full Blog Section */}
          <div className="lg:col-span-1 relative bg-black/10 inset-0 overflow-hidden shadow-2xl min-h-[700px]">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Image 
              src={blog1} 
              alt="Person in traditional setting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Know the Basic Tenets<br />
                With Traditional<br />
                Definitions.
              </h2>
              <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                Read More
              </button>
            </div>
          </div>

          {/* Right Side - Top and Bottom Sections */}
          <div className="lg:col-span-1">
            
            {/* Top Right - Learn and Practice Hindu Tradition */}
            <div className="relative bg-black  overflow-hidden shadow-2xl min-h-[350px]">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <Image 
              src={blog2} 
                alt="Person in meditation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex flex-col justify-center h-full p-6">
                <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Learn and Practice Hindu<br />
                  Tradition and Culture.
                </h2>
                <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                Read More
              </button>
              </div>
            </div>

            {/* Bottom Right - Understand the Concepts */}
            <div className="relative bg-black  overflow-hidden shadow-2xl min-h-[350px]">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <Image 
              src={blog3} 
                alt="Traditional vessels and artifacts" 
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="relative z-10 flex flex-col justify-center h-full p-6">
                <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Understand the Concepts With<br />
                  Orthodox Interpretation.
                </h2>
                <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                Read More
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Navigation Icons (Optional) */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-20">
          <div className="bg-red-900 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-red-800 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div className="bg-red-900 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-red-800 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="bg-red-900 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-red-800 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
   
      
    

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
          
          <h2 className="text-4xl md:text-6xl font-bold text-#576F9F mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-#576F9F mb-8 max-w-2xl mx-auto">
            Don't let another day pass living below your potential. Join thousands who have discovered their divine purpose.
          </p>
          <button className="bg-#576F9F text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-#576F9F transform hover:scale-105 transition-all duration-300 shadow-2xl">
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
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? 'ring-4 ring-#576F9F transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-#576F9F to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-#576F9F mb-4">
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
                    ? 'bg-gradient-to-r from-#576F9F to-pink-600 text-white hover:shadow-lg' 
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
                      <input type="text" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-#576F9F focus:border-transparent placeholder-white" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <input type="email" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-#576F9F focus:border-transparent placeholder-white" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                      <input type="tel" className="w-full px-4 py-3 bg-black/20 backdrop-blur-md rounded-lg border border-white focus:ring-2 focus:ring-#576F9F focus:border-transparent placeholder-white" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Package Selection *</label>
                      <select className="w-full px-4 py-3 bg-black/20 backdrop-blur-md text-white rounded-lg border border-white focus:ring-2  focus:ring-#576F9F focus:border-transparent">
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
                  <textarea className="w-full px-4 border-white py-3 rounded-lg borderbg-black/20 backdrop-blur-md focus:ring-2 focus:ring-#576F9F focus:border-transparent placeholder-white" rows={2} placeholder="Let us know if you have any special requirements or questions..."></textarea>
                </div>
                
  
                
                <button type="submit" className="w-full bg-#576F9F  text-white py-2 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-#576F9F to-pink-400 bg-clip-text text-transparent mb-4">
                Divine Mentors
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Guiding souls on their journey to spiritual awakening and personal transformation through ancient wisdom and modern healing practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-#576F9F p-3 rounded-full hover:bg-#576F9F transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-#576F9F p-3 rounded-full hover:bg-#576F9F transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-#576F9F p-3 rounded-full hover:bg-#576F9F transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-#576F9F p-3 rounded-full hover:bg-#576F9F transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-#576F9F transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-#576F9F transition-colors">About Us</a></li>
                <li><a href="#mentors" className="text-gray-300 hover:text-#576F9F transition-colors">Our Mentors</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-#576F9F transition-colors">Events</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-#576F9F transition-colors">Blog</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-#576F9F transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-#576F9F mr-3" />
                  <span className="text-gray-300">123 Spiritual Way, Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-#576F9F mr-3" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-#576F9F mr-3" />
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
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-#576F9F"
                  />
                  <button className="bg-gradient-to-r from-#576F9F to-pink-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all">
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
                <a href="#privacy" className="text-gray-300 hover:text-#576F9F transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-300 hover:text-#576F9F transition-colors">Terms of Service</a>
                <a href="#disclaimer" className="text-gray-300 hover:text-#576F9F transition-colors">Disclaimer</a>
                <a href="#cookies" className="text-gray-300 hover:text-#576F9F transition-colors">Cookie Policy</a>
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
      <button className="bg-gradient-to-r from-#576F9F to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold">
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
