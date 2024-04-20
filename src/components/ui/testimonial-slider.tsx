'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import data from '@/data/data.json';
import Testimonial from '../cards/testimonial';

function TestimonialSlider() {
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonyIndex === data.testimonials.length - 1) {
        setTestimonyIndex(0);
      } else {
        setTestimonyIndex((prevTestimonyIndex) => prevTestimonyIndex + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
    //eslint disable next line
  }, [testimonyIndex]);

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

  return (
    <div className='w-full relative z-10'>
      <ul className='flex w-full overflow-hidden gap-8'>
        {data.testimonials.map((testimony, index) => (
          <li
            key={index}
            className={`w-full h-full transition-all duration-300`}
            style={{ translate: `${-100 * testimonyIndex}% ` }}
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
      <button
        type='button'
        title='previous'
        onClick={showPrevious}
        className='w-10 h-10 bg-accent text-main rounded-full grid place-content-center absolute top-1/2 -left-6 -translate-y-1/2'
      >
        <ChevronLeftIcon />
      </button>
      <button
        type='button'
        title='next'
        onClick={showNext}
        className='w-10 h-10 bg-accent text-main rounded-full grid place-content-center absolute top-1/2 -right-6 -translate-y-1/2'
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default TestimonialSlider;
