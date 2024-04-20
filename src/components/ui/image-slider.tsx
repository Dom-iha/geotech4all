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
    <div className='w-full min-h-[300px] max-w-[400px] relative z-10'>
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
        className='w-10 h-10 bg-red-400 text-accent rounded-full grid place-content-center absolute top-1/2 -left-6 -translate-y-1/2'
      >
        <ChevronLeftIcon />
      </button>
      <button
        type='button'
        title='next'
        onClick={showNext}
        className='w-10 h-10 bg-red-400 text-accent rounded-full grid place-content-center absolute top-1/2 -right-6 -translate-y-1/2'
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
