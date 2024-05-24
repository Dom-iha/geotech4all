import React from 'react';
import product from '../../../public/images/product.png';
import Image from 'next/image';
import { LucideQuote } from 'lucide-react';

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
    <div className='min-w-[300px] lg:min-w-[400px] text-center border border-input border-dashed p-4 flex flex-col gap-4 lg:gap-6 rounded-md'>
      <LucideQuote size={40} className='text-focus'/>
      <p className='text-sm lg:text-base text-left'>{message}</p>
      <div className='flex gap-6 items-center'>
        <Image
          alt=''
          src={product}
          width={40}
          height={40}
          className='rounded-full w-10 h-10'
        />
        <div>
          <div className='flex flex-col items-start'>
            <p className='font-semibold text-sm'>{name}</p>
            <p className='text-sm'>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
