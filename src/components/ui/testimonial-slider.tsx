'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import data from '@/data/data.json';
import Testimonial from '../cards/testimonial';

interface Test {
  name: string;
  position: string;
  message: string;
  image: string;
}

function TestimonialSlider() {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [testimonials,setTestimonials] = useState(data.testimonials);

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
    if (testimonyIndex === data.testimonials.length - 1) {
      setTestimonyIndex(0);
    } else {
      setTestimonyIndex((prevTestimonyIndex) => prevTestimonyIndex + 1);
    }
  };

  const showPrevious = () => {
    if (testimonyIndex === 0) {
      setTestimonyIndex(data.testimonials.length - 1);
    } else {
      setTestimonyIndex((prevTestimonyIndex) => prevTestimonyIndex - 1);
    }
  };

  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const cloneChildren = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      const clonedNodes = scrollerContent.map(child => child.cloneNode(true));
      clonedNodes.forEach(clone => scrollerRef.current?.appendChild(clone));
    }
  };

  useEffect(() => {
    cloneChildren();
  }, []);


  // useEffect(() => {
  //   if (testimonyIndex === data.testimonials.length - 2) {
  //     setTestimonials([...testimonials, ...data.testimonials]);
  //   }
  // }, [testimonyIndex, testimonials]);

  return (
    <div className='w-full relative z-10 flex flex-col lg:gap-6 scroller overflow-hidden max-md:hidden'>
      <ul ref={scrollerRef} className='flex w-fit gap-8 scroller-inner'>
        {testimonials.map((testimony, index) => (
          <li
            key={index}
            // style={{ translate: `${-100 * testimonyIndex}% ` }}
            className={`w-full h-full transition-all duration-300`}
          >
            <Testimonial
              key={index}
              name={testimony.name}
              message={testimony.message}
              position={testimony.position}
            />
          </li>
        ))}
      </ul>
      {/* <div className='flex gap-6 items-center justify-center'>
        <button
          type='button'
          title='previous'
          onClick={showPrevious}
          className='w-10 h-10 bg-accent text-main rounded-full grid place-content-center max-lg:absolute top-1/2 -left-6 max-lg:-translate-y-1/2'
        >
          <ChevronLeftIcon />
        </button>
        <button
          type='button'
          title='next'
          onClick={showNext}
          className='w-10 h-10 bg-accent text-main rounded-full grid place-content-center max-lg:absolute top-1/2 -right-6 max-lg:-translate-y-1/2'
        >
          <ChevronRightIcon />
        </button>
      </div> */}
    </div>
  );
}

export default TestimonialSlider;
