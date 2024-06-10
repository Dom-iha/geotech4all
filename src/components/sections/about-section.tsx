import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Reveal from '../shared/reveal';
import Fade from '../shared/fade';
import MaxWidthWrapper from '../shared/max-width-wrapper';

function AboutSection() {
  return (
    <section className='py-14'>
      <MaxWidthWrapper>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8 items-center'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <h2 className='text-2xl lg:text-4xl font-bold'>
              Who we are
            </h2>
            <div className='grid gap-2'>
              <Reveal>
                <p className='md:text-lg lg:text-xl max-w-prose'>
                  We are a team of geoscientists that specialize in maps and
                  data. We help individuals and organizations collect
                  exploration data, create beautiful maps, and share their
                  findings with the world.
                </p>
              </Reveal>
            </div>
            <Link
              href='/about'
              className='block text-main relative w-fit px-6 py-2 bg-gray-900 hover:bg-gray-900/90 rounded-md transition duration-300'
            >
              learn more
            </Link>
          </div>
          <div className='max-lg:row-[1]'>
            <Fade>
              <Image
                src={'/images/about-map.jpg'}
                width={500}
                height={300}
                alt='flat lay map with a pin - Image by jannoon028 on Freepik'
                className='rounded-lg w-full'
              />
            </Fade>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default AboutSection;
