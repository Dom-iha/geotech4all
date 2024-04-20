import React from 'react';
import product from '../../../public/assets/images/product.png';
import Image from 'next/image';
import { Quote } from '../Icons';

function Testimonial({
  name,
  message,
  position,
}: {
  name: string;
  message: string;
  position: string;
}) {
  return (
    <li className='min-w-[300px] lg:min-w-[400px] text-center border border-dashed p-4 flex flex-col gap-4 lg:gap-6 rounded-md'>
      <Quote />
      <p className='text-sm lg:text-base text-left'>{message}</p>
      <div className='flex gap-6 items-center'>
        <Image
          alt='Old vintage compass and travel instruments on ancient map'
          src={product}
          className='rounded-full w-12 h-12'
        />
        <div>
          <div className='flex flex-col items-start'>
            <p className='font-semibold text-sm md:text-base'>{name}</p>
            <p className='text-sm'>{position}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Testimonial;
