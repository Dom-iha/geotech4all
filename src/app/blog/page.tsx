import { Metadata } from 'next';
import Article from '@/components/cards/article';
import Filter from '@/components/ui/filter';
import Image from 'next/image';
import placeholder from '../../../public/assets/images/placeholder.jpg';
import prisma from '@/lib/db';
import BlogList from './blog-list';

export const metadata: Metadata = {
  title: 'Blog',
};

interface Query {
  category?: string; // cuz im only accessing category currently | probably has to change when i add search
}

const getData = async (query: Query) => {
  const articles = await prisma.article.findMany({
    where: query?.category ? { categoryName: query.category } : {},
    include: { author: true },
  });
  return articles;
};

export const dynamic = 'force-dynamic'; // opt out of cache for this route
// should probably revalidate after some time instead -TODO
interface SearchParams {
  [key: string]: string | string[] | undefined; // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
}

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const articles = await getData(searchParams);

  return (
    <>
      <section className='sticky top-0 px-6 md:px-8 lg:px-24 pt-10 pb-4 lg:py-14 flex max-lg:items-center flex-col-reverse lg:flex-row gap-8 justify-between'>
        <div className='z-10 grid place-content-center gap-4 lg:gap-6 max-w-prose'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-accent capitalize'>
            our article library
          </h1>
          <p className='font-medium text-lg md:text-xl lg:text-2xl text-accent'>
            Read and learn about the latest and greatest innovations, news, and
            events in geosciences.
          </p>
        </div>
        <div className='relative max-h-[500px]'>
          <Image
            src={placeholder}
            alt='hero image'
            width={500}
            height={500}
            className='object-cover rounded-lg relative z-10 shadow-xl w-auto height-auto'
          />
          <div
            aria-hidden='true'
            className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-input w-full h-full'
          ></div>
        </div>
      </section>
      <section className='relative z-50 bg-main min-h-screen px-6 md:px-8 lg:px-24 py-10 lg:py-14 flex flex-col gap-10 lg:gap-16'>
        <h2 className='font-bold text-xl lg:text-4xl capitalize'>{`# ${searchParams.category? searchParams.category : 'all posts'}`}</h2>
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
          <BlogList articles={articles}/>
        )}
      </section>
    </>
  );
}

export default page;
