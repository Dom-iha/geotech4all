import data from '@/data/data.json';
import { Metadata } from 'next';
import Link from 'next/link';
import Headline from '@/components/cards/headline';
import Article from '@/components/cards/article';
import Event from '@/components/cards/event';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import prisma from '@/lib/db';

export const metadata: Metadata = {
  title: 'Geosciencehub',
};

const getData = async () => {
  const articles = await prisma.article.findMany({
    include: { author: true, category: true },
  });
  return articles;
};

async function Geohub() {
  const articles = await getData();

  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-2'>
        <div className='news-hero flex flex-col justify-between relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 lg:min-h-[88vh]'>
          <p className='pt-6 ml-8 lg:ml-10 font-medium text-lg text-main'>
            News Flash
          </p>
          <div className='flex flex-col justify-end max-w-[609px] max-lg:p-8 lg:ml-[50px] lg:pb-8'>
            <h1 className='text-main text-2xl lg:text-5xl font-bold mb-3'>
              2024 Nigeria Infrastructural Budget: A Comparative Analysis
            </h1>
            <p className='max-w-[575px] max-sm:hidden text-main text-lg lg:text-2xl mb-6'>
              Nigeria&apos;s 2024 budget, recently approved by the federal
              government, allocates a significant portion to infrastructure
              development...
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-main w-fit rounded-md'
            >
              <span className='uppercase tracking-widest font-medium text-accent lg:text-lg relative z-10 group-hover:text-main duration-500'>
                Read More
              </span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:-translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
              <span className='absolute delay-300 top-0 left-0 w-full bg-main duration-500 group-hover:translate-y-full h-full'></span>
            </button>
          </div>
        </div>
      </section>
      {/* Headlines section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-xl lg:text-3xl mb-5'>Headlines</h2>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8'>
          {data.headlines.map((headline, index) => (
            <Headline
              key={index}
              title={headline.title}
              cover={headline.cover}
              content={headline.content}
            />
          ))}
        </ul>
      </section>
      {/* Articles section */}
      <section className='px-6 md:px-8 lg:px-24 py-14 flex flex-col gap-10'>
        <h2 className='font-bold text-xl lg:text-3xl lg:mb-5'>Articles</h2>
        {!articles ? (
          <div className='grid place-content-center w-full min-h-[400px] rounded-lg border-dashed border-2 border-white/40'>
            <div className='flex flex-col gap-4 items-center'>
              <p className='font-semibold text-altTxt'>
                We&apos;re sorry, our library is currently empty.
              </p>
            </div>
          </div>
        ) : (
          <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8 justify-center'>
            {articles.map((article) => (
              <Article
                id={article.id}
                key={article.id}
                slug={article.slug}
                title={article.title}
                image={article.image}
                author={article.author}
                excerpt={article.excerpt}
                content={article.content}
                createdAt={article.createdAt}
                category={article.categoryName}
              />
            ))}
          </ul>
        )}
        <Link
          href='/blog'
          className='mx-auto w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
        >
          View All
          <ArrowRightIcon aria-hidden='true' />
        </Link>
      </section>
      {/* Events slider section */}
      <section id='events' className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-center text-xl lg:text-3xl mb-5'>
          Events
        </h2>
        <div>
          <ul className='flex gap-8 max-lg:flex-wrap justify-center'>
            {data.events.map((event) => (
              <Event
                key={event.title}
                date={event.date}
                time={event.time}
                title={event.title}
                cover={event.cover}
                details={event.details}
                location={event.location}
              />
            ))}
          </ul>
        </div>
      </section>
      {/* Opportunities advert */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h1 className='text-4xl font-bold mb-8'>Opportunities</h1>
        <div className='internship h-[25rem] relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <div className='grid place-items-center content-center h-full'>
            <p className='max-w-[575px] text-main text-center lg:text-2xl mb-6'>
              Looking for an internship position in a geoscience firm? Check
              firms you can apply to as a prospective intern
            </p>
            <Link
              href={`/geohub/opportunities`}
              className=' w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-main text-accent min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              View
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Geohub;
