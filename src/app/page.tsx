'use client';
import Image from 'next/image';
import quarry from '../../public/assets/images/quarry.png';
import training from '../../public/assets/images/training.png';
import Link from 'next/link';
import Testimonial from '@/components/testimonial';
import data from '@/data/data.json';

export default function Home() {

  return (
    <>
      <section className='hero relative flex items-center min-h-screen text-main'>
        <div className='fade absolute w-full h-full bg-gradient-to-'></div>
        <div className='z-10 grid gap-4 lg:gap-8 lg:ml-[108px] max-sm:p-6 max-md:p-8 max-w-[686px]'>
          <h1 className='text-3xl lg:text-6xl font-bold text-accent'>
            Geoscience For All
          </h1>
          <p className='font-medium text-lg lg:text-3xl lg:max-w-[654px] text-accent'>
            Empowering individuals and communities through
            accessible, impactful, and innovative geoscience solutions.
          </p>
          <Link
            href='/about'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
              Learn How
            </span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
          </Link>
        </div>
      </section>
      {/* Training advert */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-[32px]'>
          Training Services
        </h2>
        <div className='lg:p-4 flex flex-col lg:flex-row gap-4 lg:gap-10'>
          <Image
            src={training}
            alt='Men looking at tablet medium shot'
            className='max-w-[500px] max-md:h-[264px] max-md:w-full'
          />
          <div className='flex flex-col gap-3 lg:gap-6'>
            <h3 className='text-xl lg:text-4xl font-bold'>ArcGis Classes</h3>
            <p className='text-lg lg:text-2xl max-w-[478px]'>
              Join our next cohort on ArcGis fundamentals and learn how to
              create and share beautiful maps, explore data, and share your
              findings.
            </p>
            <p className='text-md lg:text-3xl font-semibold'>Starts June</p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md'
            >
              <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Register
              </span>
              <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
            </button>
          </div>
        </div>
      </section>
      {/* News flash */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-[42px]'>News Flash</h2>
        <div className='flex flex-col gap-8 md:flex-row lg:gap-32'>
          <article className='flex flex-col gap-8 max-lg:order-2'>
            <div>
              <div className='pl-4 relative'>
                <h3 className='text-lg lg:text-3xl font-bold mb-2.5 before:absolute before:bg-accent before:h-full before:w-2 before:top-0 before:left-0'>
                  2024 Nigeria Infrastructural Budget: A Comparative Analysis
                </h3>
              </div>
              <div className='pl-4'>
                <p className='lg:text-xl'>
                  Nigeria&apos;s 2024 budget, recently approved by the federal
                  government, allocates a significant portion to infrastructure
                  development...
                </p>
              </div>
            </div>
            <div>
              <div className='pl-4'>
                <h3 className='text-lg lg:text-3xl font-bold mb-2.5'>
                  Pilgangoora Lithium Mine Ousts Greenbushes as...
                </h3>
              </div>
              <div className='pl-4'>
                <p className='lg:text-xl'>
                  Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                  vehicula duis sollicitudin.
                </p>
              </div>
            </div>
            <Link
              href='/geohub'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Read More
              </span>
              <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
            </Link>
          </article>
          <div>
            <Image
              src={quarry}
              alt='Male worker with bulldozer in sand quarry'
              className='rounded-md lg:min-w-[400px]'
            />
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className='bg-accent min-h-[300px] px-6 md:px-8 lg:px-24 py-10 flex'>
        <article className='flex flex-wrap justify-between items-center min-w-full'>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>30+</p>
            <p className='font-medium'>Students Taught</p>
          </div>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>100+</p>
            <p className='font-medium'>Maps Produced</p>
          </div>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>50+</p>
            <p className='font-medium'>Successful surveys</p>
          </div>
        </article>
      </section>

      {/* Testimonials */}
      <section className='px-6 md:px-8 lg:px-24 py-10'>
        <h2 className='text-2xl lg:text-4xl font-bold my-10 lg:my-20 text-center'>
          What People Say
        </h2>
        <div>
          <ul className='grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-8'>
            {data.testimonials.map((testimony, index) => (
              <Testimonial
                key={index}
                name={testimony.name}
                position={testimony.position}
                message={testimony.message}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Community section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='community relative rounded-md flex flex-col gap-4 lg:gap-7 text-center justify-center items-center h-[393px] after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <h3 className='text-main text-2xl lg:text-4xl font-bold'>
            Join Our Community
          </h3>
          <p className='max-w-[934px] text-main text-lg lg:text-2xl'>
            Join our community of like-minded individuals and professionals to
            share ideas, collaborate on projects, and learn from each other.
          </p>
          <button
            type='button'
            className='w-fit rounded-md px-8 py-2.5 bg-main text-acceent border-2 hover:border-main hover:bg-transparent hover:text-main transition duration-300'
          >
            Telegram
          </button>
        </div>
      </section>
    </>
  );
}
