'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface SliderProps{
  content: StaticImageData[],
}

function ImageSlider(props: SliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const percentToTranslate = -100 * imageIndex + '%';

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === props.content.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((prevImageIndex) => prevImageIndex + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
    
  }, [imageIndex]);

  const showNext = () => {
    if (imageIndex === props.content.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevImageIndex) => prevImageIndex + 1);
    }
    // console.log(imageIndex);
    // console.log(percentToTranslate);
  };

  const showPrevious = () => {
    if (imageIndex === 0) {
      setImageIndex(props.content.length - 1);
    } else {
      setImageIndex((prevImageIndex) => prevImageIndex - 1);
    }
    // console.log(imageIndex);
  };

  return (
    <div className='w-full min-h-[300px] max-w-[400px] relative z-10 group'>
      <div className='flex w-full overflow-hidden'>
      {props.content.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full min-h-[300px] bg-red-400 rounded-lg aspect-video transition-all duration-300`}
            style={{ translate: `${-100 * imageIndex}% ` }}
          >
            <Image
              src={image}
              alt='hero image'
              title=''
              width={400}
              height={300}
              className='object-cover rounded-lg shadow-xl h-auto w-auto'
            />
          </div>
        ))}
      </div>
      <button
        type='button'
        title='previous'
        onClick={showPrevious}
        className='flex items-center justify-center w-10 h-full rounded-l-md bg-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-300 text-main absolute top-0 left-0'
      >
        <ChevronLeftIcon />
      </button>
      <button
        type='button'
        title='next'
        onClick={showNext}
        className='flex items-center justify-center w-10 h-full rounded-r-md bg-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-300 text-main absolute top-0 right-0'
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
