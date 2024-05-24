import training from '../../public/images/training.png';
import FeaturedSection from '@/components/ui/featured-section';
import HeroSection from '@/components/ui/hero-section';
import prisma from '@/lib/db';
import Link from 'next/link';
import TestimonialSection from '@/components/ui/testimonial-section';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Reveal from '@/components/shared/reveal';
import AboutSection from '@/components/ui/about-section';

export default async function Home() {
  const articles = await prisma.article.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 2,
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedSection articles={articles} />
      {/* Stats section */}
      <section className='bg-accent min-h-[300px] px-6 md:px-8 lg:px-24 py-10 flex'>
        <article className='flex flex-wrap justify-between items-center min-w-full'>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>30+</p>
            <p className='font-medium'>Students Trained</p>
          </div>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>100+</p>
            <p className='font-medium'>Maps Produced</p>
          </div>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>50+</p>
            <p className='font-medium'>Successful surveys</p>
          </div>
          <div className='text-main text-center'>
            <p className='font-bold text-2xl md:text-3xl lg:text-6xl'>1000+</p>
            <p className='font-medium'>Community members</p>
          </div>
        </article>
      </section>
      <TestimonialSection />

      {/* Community section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='relative rounded-xl p-5 flex flex-col gap-4 lg:gap-7 text-center justify-center items-center min-h-96 bg-accent'>
          <h3 className='text-main text-2xl lg:text-4xl font-bold'>
            Community
          </h3>
          <p className='max-w-prose text-main md:text-lg lg:text-xl'>
            Join our community of like-minded individuals and professionals to
            share ideas, collaborate on projects, and learn from each other.
          </p>
          <Link
            href='#'
            className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 bg-main text-acceent border-2 transition duration-300'
          >
            <DiscordLogoIcon /> Join
          </Link>
        </div>
      </section>
    </>
  );
}
