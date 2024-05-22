'use client';
import React from 'react';
import Link from 'next/link';
import Reveal from '../shared/reveal';

function HeroSection() {
  return (
    <section className='hero relative flex items-center min-h-[calc(100vh-60px)] text-main'>
      <div className='fade absolute w-full h-full'></div>
      <div className='z-10 grid gap-4 lg:gap-8 p-6 md:p-8 lg:pl-24 lg:pr-0 max-w-prose'>
        <Reveal>
          <h1 className='text-3xl lg:text-6xl font-bold text-accent'>
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
            className='block relative w-fit text-main hover:text-accent transition-colors duration-500 border-2 px-8 py-3 border-accent rounded-md after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-left hover:after:scale-x-0 hover:after:origin-right after:transition after:duration-500'
          >
            <span className='relative z-10 uppercase tracking-widest'>
              learn how
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
