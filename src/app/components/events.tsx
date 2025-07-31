"use client"
import React from 'react';
const EventsWorkshops = () => {
  const events = [
    {
      id: 1,
      date: '13',
      month: 'Apr',
      title: "Honoring Yogi Bhajan's Birthday 2020",
      time: '8:00 am',
      image: '/api/placeholder/120/80', // Replace with actual image path
      bgColor: 'bg-orange-100'
    },
    {
      id: 2,
      date: '06',
      month: 'May',
      title: 'Gong Yoga Relaxation and Meditation',
      time: '8:00 am',
      image: '/api/placeholder/120/80', // Replace with actual image path
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      date: '19',
      month: 'Jul',
      title: 'September New Moon Gong',
      time: '8:00 am',
      image: '/api/placeholder/120/80', // Replace with actual image path
      bgColor: 'bg-gray-100'
    },
    {
      id: 4,
      date: '09',
      month: 'Aug',
      title: 'Kundalini Yoga to Melt Unhealthy Habits',
      time: '8:00 am',
      image: '/api/placeholder/120/80', // Replace with actual image path
      bgColor: 'bg-teal-100'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">EVENTS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Upcoming Events And<br />Workshops
        </h1>
      </div>

      {/* Events List */}
      <div className="space-y-6 mb-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center p-4">
              {/* Event Image */}
              <div className="flex-shrink-0 mr-6">
                <div className={`relative rounded-lg overflow-hidden ${event.bgColor} w-24 h-16`}>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Date Overlay */}
                  <div className="absolute top-1 right-1 bg-white rounded-full w-8 h-8 flex flex-col items-center justify-center text-xs font-semibold text-gray-700">
                    <span className="text-xs leading-none">{event.date}</span>
                  </div>
                </div>
                <div className="text-center mt-1">
                  <span className="text-xs text-gray-500 uppercase">{event.month}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-blue-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {event.time}
                </div>
              </div>

              {/* Info Button */}
              <div className="flex-shrink-0">
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Events Button */}
      <div className="text-center">
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
          More Events
        </button>
      </div>
    </div>
  );
};

export default EventsWorkshops;