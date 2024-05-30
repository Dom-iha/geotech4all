'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ImageSlider({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const percentToTranslate = -100 * imageIndex + '%';

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex((prevImageIndex) => prevImageIndex + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [imageIndex, images.length]);

  const showNext = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prevImageIndex) => prevImageIndex + 1);
    }
    // console.log(imageIndex);
    // console.log(percentToTranslate);
  };

  const showPrevious = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex((prevImageIndex) => prevImageIndex - 1);
    }
    // console.log(imageIndex);
  };

  return (
    <div className='w-full min-h-[300px] max-w-[400px] relative z-10 group'>
      <ul className='flex w-full overflow-hidden'>
        {images.map((image, index) => (
          <li
            key={index}
            className={`w-full h-full min-h-[300px] rounded-lg aspect-video transition-all duration-300`}
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
          </li>
        ))}
      </ul>
      <button
        type='button'
        title='previous'
        onClick={showPrevious}
        className='flex items-center justify-center w-10 h-10 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-main absolute top-[150px] left-1'
      >
        <ChevronLeft size={25} />
      </button>
      <button
        type='button'
        title='next'
        onClick={showNext}
        className='flex items-center justify-center w-10 h-10 rounded-full bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-main absolute top-[150px] right-1'
      >
        <ChevronRight size={25} />
      </button>
    </div>
  );
}

export default ImageSlider;
