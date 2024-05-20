'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from '../shared/reveal';

function HeroSection() {
  return (
    <section className='hero relative flex items-center min-h-screen text-main'>
      <div className='fade absolute w-full h-full bg-gradient-to-'></div>
      <div
        // initial={{ opacity: 0, translateY: -10, scale: 0.9 }}
        // whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.5 }}
        className='z-10 grid gap-4 lg:gap-8 p-6 md:p-8 lg:pl-24 lg:pr-0 max-w-prose'
      >
        <Reveal>
          <h1 className='text-3xl lg:text-6xl font-bold text-accent'>
            Geoscience For All
          </h1>
        </Reveal>
        <Reveal>
          <p className='font-medium text-lg lg:text-3xl lg:max-w-[654px] text-accent'>
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
