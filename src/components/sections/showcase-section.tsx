import React from 'react';
import Reveal from '../shared/reveal';
import Link from 'next/link';
import Fade from '../shared/fade';
import Image from 'next/image';
import MaxWidthWrapper from '../shared/max-width-wrapper';

function ShowcaseSection() {
  return (
    <section className='py-14'>
      <MaxWidthWrapper>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8 items-center'>
          <div className='max-lg:row-[1]'>
            <Fade>
              <Image
                src={'/images/training.jpg'}
                width={500}
                height={300}
                alt='3 students sudying with a computer - by freepik on freepic.com'
                className='rounded-lg w-full'
              />
            </Fade>
          </div>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <h2 className='text-2xl lg:text-4xl font-bold'>
              What we do
            </h2>
            <div className='grid gap-2'>
              <Reveal>
                <p className='md:text-lg lg:text-xl max-w-prose'>
                  We are on a mission to upskill young geoscientists and bridge
                  the gap between the industry and academia. We provide a
                  platform for geoscientists to learn, share and collaborate on
                  projects. by providing training services to help them get
                  started with popular tools like ArcGis, and QGIS.
                </p>
              </Reveal>
            </div>
            <Link
              href='/services'
              className='block text-main relative w-fit px-6 py-2 bg-gray-900 hover:bg-gray-900/90 rounded-md transition duration-300'
            >
              learn more
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ShowcaseSection;
