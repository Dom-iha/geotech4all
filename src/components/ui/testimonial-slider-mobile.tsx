'use client';
import { useEffect, useRef, useState } from 'react';
import data from '@/data/data.json';
import { motion, useAnimate, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User2 } from 'lucide-react';
import Image from 'next/image';

function TestimonialSliderMobile() {
  const [testimonials, setTestimonials] = useState(data.testimonials);
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (testimonyIndex === data.testimonials.length - 1) {
  //       setTestimonyIndex(0);
  //     } else {
  //       setTestimonyIndex((prevTestimonyIndex) => prevTestimonyIndex + 1);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [testimonyIndex]);

  const showNext = () => {
    if (activeIndex === data.testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }
  };

  const showPrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.testimonials.length - 1);
    } else {
      setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
    }
  };

  return (
    <div className='md:hidden w-full relative z-10 flex flex-col gap-4 lg:gap-10 justify-between items-center'>
      <div className='flex gap-4 mr-auto'>
        <button
          type='button'
          title='previous'
          onClick={showPrevious}
          className='w-10 h-10 bg-accent text-main rounded-md grid place-content-center mlg:absolute top-1/2 -left-6 lg:-translate-y-1/2'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type='button'
          title='next'
          onClick={showNext}
          className='w-10 h-10 bg-accent text-main rounded-md grid place-content-center mlg:absolute top-1/2 -right-6 lg:-translate-y-1/2'
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <motion.ul ref={scrollerRef} className='flex w-fit gap-8'>
        {/* <AnimatePresence> */}
        <motion.li
          layout
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, delay: 0.25 }}
          key={crypto.randomUUID()}
          className={`w-full h-full flex flex-col gap-5 max-w-prose`}
        >
          <p className='font-medium text-cente'>
            {testimonials[activeIndex].message}
          </p>
          <div className='flex gap-6 items-center'>
            <User2 size={30} />
            <div>
              <div className='flex flex-col items-start'>
                <p className='font-semibold text-sm'>
                  {testimonials[activeIndex].name}
                </p>
                <p className='text-sm'>{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </div>
        </motion.li>
        {/* </AnimatePresence> */}
      </motion.ul>
      {/* <button
        type='button'
        title='next'
        onClick={showNext}
        className='w-12 h-12 bg-accent text-main rounded-full grid place-content-center max-lg:absolute top-1/2 -right-6 max-lg:-translate-y-1/2'
      >
        <ChevronRight size={40} />
      </button> */}
    </div>
  );
}

export default TestimonialSliderMobile;
