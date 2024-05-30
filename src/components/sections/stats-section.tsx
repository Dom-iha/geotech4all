import React from 'react';
import MaxWidthWrapper from '../shared/max-width-wrapper';

function StatsSection() {
  return (
    <section className='py-14'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-2 my-8 md:my-12 lg:my-16 text-center'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Our Impact</h2>
          <p className='lg:text-lg'>
            Some of the milestones we have achieved so far.
          </p>
        </div>
        <div className='bg-accent min-h-[300px] px-6 md:px-8 lg:px-10 py-10 flex rounded-2xl'>
          <ul className='flex flex-wrap justify-evenly items-center min-w-full'>
            <li className='text-main text-center'>
              <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>30+</p>
              <p className='font-medium'>Students Trained</p>
            </li>
            <li className='text-main text-center'>
              <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>100+</p>
              <p className='font-medium'>Maps Produced</p>
            </li>
            <li className='text-main text-center'>
              <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>50+</p>
              <p className='font-medium'>Successful surveys</p>
            </li>
            <li className='text-main text-center'>
              <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>
                1000+
              </p>
              <p className='font-medium'>Community members</p>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default StatsSection;
