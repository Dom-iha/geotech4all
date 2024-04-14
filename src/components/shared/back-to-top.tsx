'use client';
import { DoubleArrowUpIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the visibility state
      if (window.scrollY > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type='button'
      tabIndex={!isVisible ? -1 : undefined}
      className={`${
        isVisible ? 'translate-y-0' : 'translate-y-28'
      } z-50 flex items-center justify-center fixed w-12 h-12 bottom-10 right-10 p-2 rounded-full shadow-md bg-accent border border-dashed border-main focus-visible:outline-red-400 transition duration-500`}
      onClick={() => scrollTo(0, 0)}
    >
      <span className='sr-only'>scroll to top</span>
      <span className='flex flex-col items-center justify-center text-main'>
        <DoubleArrowUpIcon />
      </span>
    </button>
  );
}

export default BackToTop;
