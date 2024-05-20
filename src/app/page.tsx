import Image from 'next/image';
import training from '../../public/assets/images/training.png';
import TestimonialSlider from '@/components/ui/testimonial-slider';
import FeaturedSection from '@/components/ui/featured-section';
import HeroSection from '@/components/ui/hero-section';
import prisma from '@/lib/db';
import Link from 'next/link';
import { ArrowUpRightFromSquareIcon } from 'lucide-react';

export default async function Home() {
  const articles = await prisma.article.findMany({
    where: {
      featured: true,
    },
  });

  return (
    <>
      <HeroSection />
      {/* Training advert */}
      {/* <section className='px-6 md:px-8 lg:px-24 py-14'>
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
      </section> */}

      <FeaturedSection articles={articles} />
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
        <TestimonialSlider />
      </section>

      {/* Community section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='relative rounded-md flex flex-col gap-4 lg:gap-7 text-center justify-center items-center min-h-96 bg-accent'>
          <h3 className='text-main text-2xl lg:text-4xl font-bold'>
            Community
          </h3>
          <p className='max-w-prose text-main text-lg lg:text-xl'>
            Join our community of like-minded individuals and professionals to
            share ideas, collaborate on projects, and learn from each other.
          </p>
          <Link
            href='Link'
            className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 bg-main text-acceent border-2 transition duration-300'
          >
            Telegram
            <ArrowUpRightFromSquareIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
