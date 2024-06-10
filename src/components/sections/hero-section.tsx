import React from 'react';
import Link from 'next/link';
import Reveal from '../shared/reveal';
import MaxWidthWrapper from '../shared/max-width-wrapper';

function HeroSection() {
  return (
    <section className='relative flex items-center text-main'>
      <MaxWidthWrapper className='hero py-28 md:py-32 lg:py-40'>
        <div className='z-10 flex flex-col gap-4 items-center md:items-start md:text-left lg:gap-8 lg:pr-0 max-w-prose'>
          <Reveal>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-accent'>
              Geoscience For All
            </h1>
          </Reveal>
          <Reveal>
            <p className='font-medium text-lg md:text-xl lg:text-2xl max-w-prose text-accent'>
              Empowering individuals and communities through
              accessible, impactful, and innovative geoscience solutions.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href='/about'
              className='block relative w-fit text-main hover:text-accent transition-colors duration-500 border-2 px-6 py-2.5 border-accent rounded-md after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-left hover:after:scale-x-0 hover:after:origin-right after:transition after:duration-500'
            >
              <span className='relative z-10 capitalize tracking-widest text-sm'>
                learn how
              </span>
            </Link>
          </Reveal>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
