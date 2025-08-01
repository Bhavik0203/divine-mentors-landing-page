"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Star, Users, Calendar, Heart, ChevronDown, ChevronUp, Play, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, CheckCircle, ArrowRight, BookOpen, Award, Target, Zap, Clock, Shield, Brain, Mountain, Handshake } from 'lucide-react';
import Image from 'next/image';
import banner from '../../public/mainbanner.jpg';
import banner2 from '../../public/banner222.jpg';
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
import UniversityHero from './components/universityhero';
import PricingSection from './components/pricingsection';
import BenefitsSection from './components/benefitssection';
import LanguageSwitcher from './components/LanguageSwitcher';
import Link from 'next/link';
// import banner from '';

const DivineMentorsLanding = () => {
  const { t } = useTranslation();
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
    t('painPoints.title'),
    t('painPoints.subtitle'),
    t('painPoints.description'),
    t('painPoints.practice'),
    t('painPoints.beliefs'),
    t('painPoints.purpose')
  ];

  const mentors = [
    {
      name: t('mentors.ramBaba.name'),
      bio: t('mentors.ramBaba.bio'),
      image: mentor1,
      link: 'https://divinementors.com/team/ram-baba/',
      specialty: t('mentors.ramBaba.specialty'),
      offerings: t('mentors.ramBaba.offerings', { returnObjects: true }) as string[],
      website: "https://divinementors.com"
    },
    {
      name: t('mentors.swamiPratik.name'),
      bio: t('mentors.swamiPratik.bio'),
      image: mentor2,
      link: "https://divinementors.com/team/mahant-swami-pratik-puri/",
      specialty: t('mentors.swamiPratik.specialty'),
      offerings: t('mentors.swamiPratik.offerings', { returnObjects: true }) as string[],
      website: "https://divinementors.com"
    },
    {
      name: t('mentors.nagaBaba.name'),
      bio: t('mentors.nagaBaba.bio'),
      image: mentor3,
      link: "https://divinementors.com/team/naga-baba/",
      specialty: t('mentors.nagaBaba.specialty'),
      offerings: t('mentors.nagaBaba.offerings', { returnObjects: true }) as string[],
      website: "https://divinementors.com"
    },
    {
      name: t('mentors.acharyaShyam.name'),
      bio: t('mentors.acharyaShyam.bio'),
      image: mentor4,
      link: "#contact",
      specialty: t('mentors.acharyaShyam.specialty'),
      offerings: t('mentors.acharyaShyam.offerings', { returnObjects: true }) as string[],
      website: "https://divinemothercenter.org"
    }
  ];
  

  const offerings = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('offerings.authenticGuidance.title'),
      description: t('offerings.authenticGuidance.description')
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('offerings.personalizedTransformation.title'),
      description: t('offerings.personalizedTransformation.description')
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t('offerings.scienceBackedMethods.title'),
      description: t('offerings.scienceBackedMethods.description')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('offerings.modernLifeIntegration.title'),
      description: t('offerings.modernLifeIntegration.description')
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: t('offerings.premiumSwissExperience.title'),
      description: t('offerings.premiumSwissExperience.description')
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: t('offerings.lifelongMentorship.title'),
      description: t('offerings.lifelongMentorship.description')
    }
  ];

  const blogs = [
    {
      title: t('blogs.innerPeace.title'),
      excerpt: t('blogs.innerPeace.excerpt'),
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      date: t('blogs.innerPeace.date')
    },
    {
      title: t('blogs.divinePurpose.title'),
      excerpt: t('blogs.divinePurpose.excerpt'),
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      date: t('blogs.divinePurpose.date')
    },
    {
      title: t('blogs.sacredPractices.title'),
      excerpt: t('blogs.sacredPractices.excerpt'),
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      date: t('blogs.sacredPractices.date')
    }
  ];

  const faqs = [
    {
      question: t('faq.difference.question'),
      answer: t('faq.difference.answer')
    },
    {
      question: t('faq.experience.question'),
      answer: t('faq.experience.answer')
    },
    {
      question: t('faq.readiness.question'),
      answer: t('faq.readiness.answer')
    },
    {
      question: t('faq.sessions.question'),
      answer: t('faq.sessions.answer')
    },
    {
      question: t('faq.professionals.question'),
      answer: t('faq.professionals.answer')
    },
    {
      question: t('faq.accommodation.question'),
      answer: t('faq.accommodation.answer')
    }
  ];

  const pricingTiers = [
    {
      name: t('pricing.seeker.name'),
      price: t('pricing.seeker.price'),
      features: t('pricing.seeker.features', { returnObjects: true }) as string[],
      popular: false
    },
    {
      name: t('pricing.disciple.name'),
      price: t('pricing.disciple.price'),
      features: t('pricing.disciple.features', { returnObjects: true }) as string[],
      popular: true
    },
    {
      name: t('pricing.divine.name'),
      price: t('pricing.divine.price'),
      features: t('pricing.divine.features', { returnObjects: true }) as string[],
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
                {[
                  { key: 'home', href: '#home' },
                  { key: 'about', href: '#about' },
                  { key: 'mentors', href: '#mentors' },
                  { key: 'events', href: '#events' },
                  { key: 'blog', href: '#blog' },
                  { key: 'contact', href: '#contact' }
                ].map((item) => (
                  <a key={item.key} href={item.href} 
                     className="text-white py-2 hover:text-[#d0daee] transition-colors font-medium">
                    {t(`navigation.${item.key}`)}
                  </a>
                ))}
              </div>
            </nav>

            {/* Language Switcher */}
            <div className="hidden md:flex mr-4">
              <LanguageSwitcher />
            </div>

            {/* Book Now Button */}
            <div className="hidden md:flex">
              <a href="#contact" className="text-[#576F9F] bg-white px-6 py-2 rounded-full hover:shadow-lg hover:border-2 hover:border-[#576F9F] transform hover:scale-105 transition-all inline-block">
                {t('navigation.bookNow')}
              </a>
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
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'mentors', href: '#mentors' },
                { key: 'events', href: '#events' },
                { key: 'blog', href: '#blog' },
                { key: 'contactUs', href: '#contact' }
              ].map((item) => (
                <a key={item.key} href={item.href}
                   className="block px-3 py-2 items-center justify-center text-gray-700 hover:text-#576F9F">
                  {t(`navigation.${item.key}`)}
                </a>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <div><a href="#contact" className="w-full mt-2 bg-[#576F9F] text-white px-6 py-2 rounded-full">
                {t('navigation.bookNow')}
              </a></div>
              
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

  <div className="relative z-20 text-left text-white max-w-3xl pt-28 pb-20 items-center justify-center px-10">
    <h1 className="text-5xl md:text-5xl font-bold mb-6 animate-fade-in">
      {t('hero.title').split('Authentic Spiritual Wisdom').map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index === 0 && <span className="text-yellow-300">Authentic Spiritual Wisdom</span>}
        </React.Fragment>
      ))}
    </h1>
    <p className="text-xl md:text-2xl mb-6 opacity-90">
      {t('hero.subtitle')}
    </p>
    <p className="text-lg mb-8 opacity-80 leading-relaxed">
      {t('hero.description')}
    </p>
    <button className="bg-white text-[#576F9F] px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
      {t('hero.cta')}
    </button>
  </div>



       
      </section>
    
      {/* What We Offer */}
      <section className=" py-16" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('offerings.title')}</h2>
        <p className="text-xl text-gray-600">{t('common.learnMore')}</p>
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
     <section id='about'>
       <AboutSection/>
       </section>
     
     
       
   
      <section id='mentors' className="py-16 bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Meet Our Divine Mentors</h2>
            <p className="text-xl text-gray-600">Learn from masters who have dedicated their lives to spiritual wisdom</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <article key={index} className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
              
              
                <div className="hidden sm:block sm:basis-56">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <Link href={mentor.link}>
                      <h3 className="font-bold text-gray-900 uppercase">
                        {mentor.name}
                      </h3>
                      </Link>
                    
                      <Link href={mentor.link}>
                    <p className="mt-2 text-sm/relaxed text-gray-700 mb-4">
                      {mentor.bio}
                    </p>
                    </Link>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Specialty:</p>
                      <p className="text-sm text-gray-800 font-medium">{mentor.specialty}</p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                  <Link href={mentor.link}
                      className="block bg-[#576F9F] px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-[#4a5f8a]"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              
              </article>
            ))}
          </div>
        </div>
      </section>
   
     <section id='events'>
        <OneBlog/>
     </section>
      <div id='blog'>
       
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <a href="https://divinementors.com/breaking-free-from-addictions-a-spiritual-approach/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="lg:col-span-1 relative bg-black/10 inset-0 overflow-hidden shadow-2xl min-h-[700px]">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <Image 
                src={blog1} 
                alt="Person in traditional setting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  
Freeing yourself from <br />
                  addictions: <br />
                  A spiritual path
                </h2>
                <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                  Read More
                </button>
              </div>
            </div>
          </a>

          <div className="lg:col-span-1">
            
            {/* Top Right - Learn and Practice Hindu Tradition */}
            <a href="https://divinementors.com/managing-anxiety-with-mindfulness-and-clarity/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative bg-black  overflow-hidden shadow-2xl min-h-[350px] hover:shadow-3xl transition-all duration-300">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <Image 
                src={blog2} 
                  alt="Person in meditation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col justify-center h-full p-6">
                  <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                   Dealing with fear through <br/>
                   mindfulness and clarity

                  </h2>
                  <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                  Read More
                </button>
                </div>
              </div>
            </a>

            {/* Bottom Right - Understand the Concepts */}
            <a href="https://divinementors.com/the-role-of-spiritual-counseling-in-mental-health-a-science-backed-alternative-to-psychotherapy/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative bg-black  overflow-hidden shadow-2xl min-h-[350px] hover:shadow-3xl transition-all duration-300">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <Image 
              src={blog3} 
                alt="Traditional vessels and artifacts" 
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="relative z-10 flex flex-col justify-center h-full p-6">
                <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                 The Role of Spiritual Counseling in Mental Health: <br/>A Scientifically Based Alternative to <br/>Psychotherapy
Scientific studies
                </h2>
                <button className="bg-[#576F9F] hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 w-fit">
                Read More
              </button>
              </div>
            </div>
  </a>
          </div>
        </div>

        {/* Side Navigation Icons (Optional) */}
       
      </div>
   
      
    {/* <UniversityHero/> */}

      {/* CTA Section */}
     
            {/* <PricingSection/> */}
      {/* <section className="py-20 bg-white text-[#576F9F]">
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
                  index === currentSlide ? 'bg-[#576F9F]' : 'bg-[#576F9F]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}
      <BenefitsSection/>
      <section id="contactus" className="relative py-16 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')` }}>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Transformation Awaits
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't let another day pass living below your potential. Join thousands who have discovered their divine purpose.
          </p>
          <button className="bg-#576F9F text-[#576F9F] px-12 py-4 rounded-full bg-white text-xl font-bold hover:bg-[#8ba0ca] hover:text-white border border-[#576F9F] transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Book Your Transformation Now
          </button>
        </div>
      </section>

      {/* FAQ and Booking Form Section */}
    <section className=" py-16  bg-[#576F9F]">
       {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="relative z-10 max-w-7xl mx-auto ">
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
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 hover:backdrop-blur-md transition-colors"
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
                
  
                
                <button type="submit" className="w-full bg-black/20 backdrop-blur-md text-white py-2 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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
               <div className="flex-shrink-0 mb-4">
                <Image src="/logo.png" alt="Divine Mentors" className="h-28" width={120} height={80} />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Guiding souls on their journey to spiritual awakening and personal transformation through ancient wisdom and modern healing practices.
              </p>
              {/* <div className="flex space-x-4">
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
              </div> */}
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
              {/* <div className="mt-6">
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
              </div> */}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
                <a href="#privacy" className="text-gray-300 hover:text-#576F9F transition-colors">Privacy Policy</a>
                <a href="#terms" className="text-gray-300 hover:text-#576F9F transition-colors">Terms of Service</a>
                <a href="#disclaimer" className="text-gray-300 hover:text-#576F9F transition-colors">Disclaimer</a>
                <a href="#cookies" className="text-gray-300 hover:text-#576F9F transition-colors">Cookie Policy</a>
              </div> */}
              <p className="text-gray-400 text-sm text-center md:text-right">
                © 2025 Divine Mentors. All rights reserved. | Transforming lives through spiritual wisdom.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        <button 
          onClick={() => window.location.href = 'tel:+919876543210'}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl active:scale-95 cursor-pointer group"
          title="Call us at +91 98765 43210"
        >
          <Phone className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      </div>
     
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
