import prisma from '@/lib/db';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import FeaturedSection from '@/components/sections/featured-section';
import ShowcaseSection from '@/components/sections/showcase-section';
import TestimonialSection from '@/components/sections/testimonial-section';
import Image from 'next/image';
import StatsSection from '@/components/sections/stats-section';

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
      <ShowcaseSection />
      <StatsSection />
      <TestimonialSection />
      <FeaturedSection articles={articles} />
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='p-6 lg:pr-0 lg:py-12 lg:pl-12 flex flex-col md:flex-row gap-10 items-center justify-between border border-focus border-dashed rounded-xl'>
          <div className='flex flex-col gap-6 lg:gap-8 max-md:text-center'>
            <h3 className=' text-2xl lg:text-4xl font-bold'>
              Community
            </h3>
            <p className=' max-w-prose md:text-lg lg:text-xl'>
              Join our community of like-minded individuals and professionals to
              share ideas, collaborate on projects, and learn from each other.
            </p>
            <Link
              href='https://chat.whatsapp.com/J7SblOAgAan7IrAsWAL3MC'
              target='_blank'
              className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 text-main bg-accent text-acceent transition duration-300 max-md:self-center'
            >
              Join us
              <ArrowRightIcon />
            </Link>
          </div>
          <Image
            src='/images/community.jpg'
            alt='community image'
            width={500}
            height={300}
            className='rounded-l-lg max-md:hidden'
          />
        </div>
      </section>
    </>
  );
}
