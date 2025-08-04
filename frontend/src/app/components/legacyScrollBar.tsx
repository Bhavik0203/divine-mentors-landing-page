"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';
import blogimg2 from "../assets/images/th.jpg"
// import banner2 from "../images/bg4.png";
import { Timeline } from "../components/ui/timeline";
import bgimg from '../../../public/n.jpeg'

export default function OneBlog() {
  const { t } = useTranslation();

  const data = [
    {
      title: t('events.services.vedicConsultations.title'),
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral9800 md:text-[30px] ">
            <strong>{t('events.services.vedicConsultations.subtitle')}</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800 d">
            {t('events.services.vedicConsultations.description')}
          </p>
        </div>
      ),
    },
    {
      title: t('events.services.energyHealing.title'),
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>{t('events.services.energyHealing.subtitle')}</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800 ">
            {t('events.services.energyHealing.description')}
          </p>
        </div>
      ),
    },
    {
      title: t('events.services.panchabhutaRituals.title'),
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
            <strong>{t('events.services.panchabhutaRituals.subtitle')}</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            {t('events.services.panchabhutaRituals.description')}
          </p>
        </div>
      ),
    },
    {
      title: t('events.services.yogaBreathwork.title'),
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>{t('events.services.yogaBreathwork.subtitle')}</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800 ">
            {t('events.services.yogaBreathwork.description')}
          </p>
        </div>
      ),
    },
  ];
  
  
  return (
     <div className="relative isolate overflow-hidden px-6 pt-24 mb-10 sm:pb-20 lg:overflow-visible lg:px-0
       bg-gradient-to-br from-[#576F9F]/20 to-[#576F9F]/5"
>
             {/* Background Overlay */}
       <div className="absolute inset-0 bg-[#576F9F]/10 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${bgimg.src})` }} 
       ></div>
      
      {/* Content */}
      <div className="relative z-10">
  <div className="mx-auto w-full px-2 lg:px-10 gap-10  grid grid-cols-1 lg:grid-cols-3 lg:items-start">
    
    {/* Sticky Left Section */}
    <div className="lg:sticky lg:top-4 lg:col-span-1">
    
<div className="flex-1 w-full max-w-full pt-4 sm:pt-28 ">
<h3 className="text-4xl font-bold text-black mb-4">
                       {t('events.title')}
                      </h3>
                      <h2 className="text-4xl font-bold text-black mb-4">
{t('events.subtitle')}
</h2>

        <p className="text-gray-800 leading-relaxed text-justify" style={{ fontSize: '1.10rem', lineHeight: '2rem', }}>
        {t('events.description')}
        </p>
      </div>
    </div>
    {/* Right Section with Timeline */}
    <div className="lg:col-span-2 relative w-full overflow-clip text-gray-900">
      <Timeline data={data} />
    </div>
  </div>
  
  {/* Bottom Section */}
  <div className="mx-auto w-full px-0 sm:px-10 pb-0 sm:pb-10 text-center lg:mt-16">
    <p className="text-gray-900 text-4xl md:text-5xl font-medium italic mb-2">
      {t('events.notWorkshop')}
    </p>
    <p className="text-gray-800 text-2xl md:text-3xl italic">
      {t('events.returnToSoul')}
    </p>
  </div>
      </div>
    </div>
  );
}
