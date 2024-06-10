import prisma from '@/lib/db';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogList from './blog-list';
import Filter from '@/components/ui/filter';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read and learn about the latest and greatest innovations, news, and events in geosciences.',
  openGraph: {
    description:
      'Read and learn about the latest and greatest innovations, news, and events in geosciences.',
    images: [
      {
        url: siteConfig.ogImage,
        width: '1200',
        height: '630',
        alt: 'geotech4all\'s logo with a globe',
      },
    ],
  },
};

interface Query {
  category?: string; // cuz im only accessing category currently | probably has to change when i add search
}

const getData = async (query: Query) => {
  const articles = await prisma.article.findMany({
    where: query?.category ? { categoryName: query.category } : {},
    include: { author: true },
    orderBy: {
      createdAt: 'desc',
    },
    take: 9,
  });
  return articles;
};

export const dynamic = 'force-dynamic'; // opt out of cache for this route

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const articles = await getData(searchParams);

  return (
    <>
      <section className='sticky top-0 px-6 md:px-8 lg:px-20 pt-10 pb-4 lg:py-14 flex max-lg:items-center flex-col-reverse lg:flex-row gap-8 md:gap-10 justify-between'>
        <div className='z-10 grid place-content-center gap-4 lg:gap-6 max-w-prose'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-accent'>
            Our article library
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-accent lg:pr-12'>
            Read and learn about the latest and greatest innovations, news, and
            events in geosciences.
          </p>
        </div>
        <div className='relative max-h-[500px]'>
          <Image
            src='/images/placeholder.jpg'
            alt='hero image'
            width={500}
            height={500}
            className='object-cover rounded-lg relative z-10 shadow-xl w-auto height-auto'
          />
          <div
            aria-hidden='true'
            className='absolute top-2 -left-2 rounded-lg border-dashed border border-focus w-full h-full'
          ></div>
        </div>
      </section>
      <section className='relative z-20 bg-main min-h-screen px-6 md:px-8 lg:px-20 py-10 lg:py-14 flex flex-col gap-10 lg:gap-16'>
        <h2 className='font-bold text-xl lg:text-4xl capitalize'>
          <span className='text-red-400'># </span>
          {`${searchParams.category ? searchParams.category : 'all'}`}
        </h2>
        <Filter />
        {!articles.length ? (
          <div className='grid place-content-center w-full min-h-[400px] max-w-screen-md mx-auto'>
            <div className='flex flex-col gap-4 items-center'>
              <p className='font-medium lg:text-lg'>
                Sorry, we couldn&apos;t find any articles.
              </p>
            </div>
          </div>
        ) : (
          <BlogList articles={articles} />
        )}
      </section>
    </>
  );
}

export default page;
