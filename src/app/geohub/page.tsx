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
  const [news, articles, headlines] = await prisma.$transaction([
    prisma.article.findFirst({
      where: {
        categoryName: 'news',
      },
      take: 1,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        categoryName: {
          notIn: ['headlines ', 'news'],
        },
      },
      include: {
        author: true,
      },
      take: 3,
    }),
    prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        categoryName: 'headlines ', // space is intentional mistake from schema i forgot to trim trailing whitespace when user submits a form
      },
      take: 2,
    }),
  ]);
  const shorten = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <section className='px-6 md:px-8 lg:px-20 py-2'>
        <div
          className='overflow-hidden news-hero bg-cover bg-no-repeat bg-fixed flex flex-col justify-between relative rounded-md lg:min-h-[calc(100vh-76px)] after:backdrop-blur-[5px]'
          style={{ backgroundImage: `url(${news?.image})` }}
        >
          <p className='z-10 relative pt-6 ml-8 lg:ml-10 font-medium text-lg text-main'>
            News Flash
          </p>
          <article className='relative z-10'>
            <div className='flex flex-col justify-end max-w-[609px] max-lg:p-8 lg:ml-[50px] lg:pb-8'>
              <h1 className='text-main text-xl md:text-2xl lg:text-4xl font-bold mb-3'>
                {news?.title}
              </h1>
              <p className='max-w-[575px] max-sm:hidden text-main md:text-lg lg:text-2xl mb-6'>
                {shorten(news?.excerpt!, 60)}
              </p>
              <Link
                href={`/blog/${news?.slug}`}
                className='w-fit px-2 py-3 flex items-center justify-center font-semibold rounded-md gap-2 bg-main text-accent min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-main outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
              >
                Read
                <ArrowRightIcon aria-hidden='true' />
              </Link>
            </div>
          </article>
        </div>
      </section>
      {/* Headlines section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-xl lg:text-3xl mb-5'>Headlines</h2>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8'>
          {headlines.map((headline, index) => (
            <Headline
              key={index}
              title={headline.title}
              cover={headline.image}
              content={headline.excerpt}
              slug={headline.slug}
            />
          ))}
        </ul>
      </section>
      {/* Articles section */}
      <section className='px-6 md:px-8 lg:px-24 py-14 flex flex-col gap-10'>
        <h2 className='font-bold text-xl lg:text-3xl lg:mb-4'>Learn</h2>
        {!articles ? (
          <div className='grid place-content-center w-full min-h-[400px] rounded-lg border-dashed border-2 border-white/40'>
            <div className='flex flex-col gap-4 items-center'>
              <p className='font-semibold text-altTxt'>
                We&apos;re sorry, our library is currently empty.
              </p>
            </div>
          </div>
        ) : (
          <ul className='grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 md:gap-12 lg:gap-16 justify-center'>
            {articles.map((article) => (
              <Article
                id={article.id}
                key={article.id}
                slug={article.slug}
                title={article.title}
                image={article.image}
                author={article.author}
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
      <section className='px-6 md:px-8 lg:px-24 py-14 flex flex-col gap-10'>
        <h2 className='font-bold text-center text-xl lg:text-3xl mb-5'>
          Upcoming Events
        </h2>
        <div>
          <ul className='flex gap-8 md:gap-12 lg:gap-16 max-lg:flex-wrap'>
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
