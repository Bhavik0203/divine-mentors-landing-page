import React from 'react';
import blogimg2 from "../assets/images/th.jpg"
// import banner2 from "../images/bg4.png";
import { Timeline } from "../components/ui/timeline";
import bgimg from '../../../public/n.jpeg'

export default function OneBlog() {

 
  const data = [
    {
      title: "1:1 Vedic Consultations",
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] dark:text-neutral-200">
            <strong>rooted in ancient insight</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-600 dark:text-neutral-300">
            Personalized guidance based on the timeless wisdom of the Vedas — uncover deeper truths about your life path, relationships, and purpose through sacred conversation and spiritual counsel.
          </p>
        </div>
      ),
    },
    {
      title: "1:1 Energy Healing",
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] dark:text-neutral-200">
            <strong>to restore what’s been lost</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-600 dark:text-neutral-300">
            Through ancient energy healing practices, dissolve blockages and recalibrate your inner system to experience clarity, emotional balance, and energetic renewal.
          </p>
        </div>
      ),
    },
    {
      title: "Panchabhuta Rituals",
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] dark:text-neutral-200">
            <strong>harmonize with the 5 elements</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-600 dark:text-neutral-300">
            A sacred ritual journey that reconnects you with the elemental forces of Earth, Water, Fire, Air, and Space — aligning body, mind, and spirit with nature’s divine rhythm.
          </p>
        </div>
      ),
    },
    {
      title: "1:1 Yoga & Breathwork",
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] dark:text-neutral-200">
            <strong>from teachers who’ve lived it</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-600 dark:text-neutral-300">
            Dive deep into breath-led movement and traditional yogic wisdom with mentors who embody the path — fostering inner stillness, physical vitality, and spiritual clarity.
          </p>
        </div>
      ),
    },
  ];
  
  
  return (
     <div className="relative isolate overflow-hidden px-6 pt-24 sm:pb-32 lg:overflow-visible lg:px-0
      pb-20 bg-gradient-to-br from-[#576F9F]/20 to-[#576F9F]/5"
>
             {/* Background Overlay */}
       <div className="absolute inset-0 bg-[#576F9F]/10 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${bgimg.src})` }} 
       ></div>
      
      {/* Content */}
      <div className="relative z-10">
  <div className="mx-auto w-full px-10  grid grid-cols-1 lg:grid-cols-3 lg:items-start">
    
    {/* Sticky Left Section */}
    <div className="lg:sticky lg:top-4 lg:col-span-1">
    
<div className="flex-1 w-full max-w-full pt-28 ">
<h3 className="font-bold text-gray-900 uppercase mb-4">
                       Events
                      </h3>
      <h2 
  className=" text-gray-800 mb-4" 
  style={{ fontSize: '3.25rem', lineHeight: '3.5rem' }}
>
SEPT 15–28  Rüti ZH, Switzerland
</h2>

        <p className="text-gray-600 leading-relaxed text-justify" style={{ fontSize: '1.10rem', lineHeight: '2rem', }}>
        This September, meet India’s sacred wisdom keepers in Zurich.
        <br/>Step into a sacred space with Vedic masters, astrologers, and energy healers.</p>
      </div>
    </div>
    {/* Right Section with Timeline */}
    <div className="lg:col-span-2 relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  </div>
  
  {/* Bottom Section */}
  <div className="mx-auto w-full px-10 mt-16 text-center">
    <p className="text-gray-800 text-4xl md:text-5xl font-medium mb-2">
      This is not a workshop.
    </p>
    <p className="text-gray-600 text-2xl md:text-3xl italic">
      This is a return to something your soul never forgot.
    </p>
  </div>
      </div>
    </div>
  );
}
