import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Reveal from '@/components/shared/reveal';
import prisma from '@/lib/db';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Opportunities',
  description: 'Find the latest opportunities for geoscientists in nigeria.',
  openGraph: {
    description: 'Find the latest opportunities for geoscientists in nigeria.',
  },
};

async function page() {
  const opportunities = await prisma.opportunity.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!opportunities.length) return noResults;

  return (
    <MaxWidthWrapper className='py-14 min-h-[calc(100vh-60px)]'>
      <ul className='flex flex-col gap-8 lg:gap-12 max-w-screen-md mx-auto'>
        {opportunities.map((opportunity, _) => (
          <li key={opportunity.id}>
            <Reveal>
              <div className='pl-4 relative'>
                <Link
                  href={`/opportunities/${opportunity.slug}`}
                  className={`hover:underline text-lg lg:text-3xl font-semibold mb-2.5 before:absolute before:bg-accent/70 before:h-full before:w-1.5 before:top-0 before:left-0 before:transition before:duration-500 before:origin-top before:hover:origin-bottom before:hover:scale-y-0`}
                >
                  {opportunity.title}
                </Link>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </MaxWidthWrapper>
  );
}

export default page;

const noResults = (
  <section className='px-6 md:px-8 lg:px-24 min-h-[calc(100vh-60px)] grid place-items-center'>
    <div className='flex flex-col gap-6 justify-center items-center h-full'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold capitalize'>
        hi there friend
      </h1>
      <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
        There are no available opportunities at the moment. Please check back
        later, or check out our blog to read some articles.
      </p>
      <Link
        href={`/blog`}
        className='w-fit p-2 px-6 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main hover:bg-accent/80 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
      >
        Blog
        <ArrowRightIcon aria-hidden='true' />
      </Link>
    </div>
  </section>
);
