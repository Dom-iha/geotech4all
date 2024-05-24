import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Reveal from '../shared/reveal';
import Fade from '../shared/fade';

function AboutSection() {
  return (
    <section className='px-6 md:px-8 lg:px-24 py-14'>
      <div className='grid lg:grid-cols-2 gap-6 lg:mt-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-2xl lg:text-4xl font-bold'>About Geotech4All</h2>
          <div className='grid gap-2'>
            <Reveal>
              <p className='md:text-lg lg:text-xl max-w-prose'>
                We are a team of geoscientists that specialize in maps and data.
                We help organizations and individuals create beautiful maps,
                collect data and share their findings with the world.
              </p>
            </Reveal>
            <Reveal>
              <p className='md:text-lg lg:text-xl max-w-prose'>
                We also provide training services to help you get started with
                popular geoscience tools like ArcGis, QGIS, and more.
              </p>
            </Reveal>
          </div>
          <Link
            href='/about'
            className='block relative w-fit border-2 px-8 py-3 border-accent hover:border-dashed rounded-md transition duration-300'
          >
            learn more
          </Link>
        </div>
        <div className='max-lg:row-[1]'>
          <Fade>
            <Image
              src={'/map.jpg'}
              width={500}
              height={300}
              alt='flat lay photography of camera, book, and bag - by Annie Spratt on Unsplash'
              className='rounded-lg w-full'
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
