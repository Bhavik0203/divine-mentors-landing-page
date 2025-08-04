"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}>
      
      <div ref={ref} className="relative mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start mb-16 md:mb-10 !text-gray-900 selection:!text-gray-900">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-6 sm:h-10 absolute left-3 md:left-3 w-6 sm:w-10 rounded-full bg-white flex items-center justify-center">
                <div
                  className="h-2 sm:h-4 w-2 sm:w-4 rounded-full bg-neutral-200 border border-neutral-300  p-2" />
              </div>
              <h3
                className="hidden md:block text-lg sm:pl-10 md:pl-20 md:text-3xl font-bold !text-gray-900 selection:!text-gray-900">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-0 md:pl-8 md:pr-8 w-full">
              <h3
                className="md:hidden block text-2xl mb-6 text-left font-bold !text-gray-900 selection:!text-gray-900">
                {item.title}
              </h3>
              <div className="text-lg md:text-xl !text-gray-800 selection:!text-gray-900 leading-relaxed" style={{ fontSize: '1.10rem', lineHeight: '2rem', }}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
