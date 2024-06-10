import Link from 'next/link';
import prisma from '@/lib/db';
import { Metadata } from 'next';
import data from '@/data/data.json';
import { siteConfig } from '@/config/site';
import Event from '@/components/cards/event';
import Article from '@/components/cards/article';
import Headline from '@/components/cards/headline';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import EventCard from '@/components/cards/event';

export const metadata: Metadata = {
  title: 'Geosciencehub',
  description:
    'Get the latest news, articles, and events in the geoscience community.',
  openGraph: {
    description:
      'Get the latest news, articles, and events in the geoscience community.',
    images: [
      {
        url: siteConfig.ogImage,
        width: '1200',
        height: '630',
        // alt: ''
      },
    ],
  },
};

export const revalidate = 3600 * 24; // 24 hours

async function Geohub() {
  const [news, articles, headlines, events] = await prisma.$transaction([
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
          notIn: ['headlines', 'news'],
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
        categoryName: 'headlines',
      },
      take: 2,
    }),
    prisma.event.findMany({
      orderBy: {
        createdAt: 'desc',
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
      <section className='py-2'>
        <MaxWidthWrapper>
          <div
            className='overflow-hidden news-hero bg-cover bg-no-repeat bg-fixed flex flex-col justify-between relative rounded-md after:backdrop-blur-md'
            style={{ backgroundImage: `url(${news?.image})` }}
          >
            <p className='z-10 relative pt-6 ml-8 lg:ml-10 font-medium text-lg text-main'>
              News Flash
            </p>
            <article className='relative z-10 pt-24 lg:pt-32 xl:pt-60'>
              <div className='flex flex-col justify-end max-w-[609px] max-lg:p-8 lg:ml-[50px] lg:pb-8'>
                <h1 className='text-main text-xl md:text-2xl lg:text-4xl font-bold mb-3'>
                  {news?.title}
                </h1>
                <p className='max-w-[575px] max-sm:hidden text-main md:text-lg lg:text-2xl mb-6'>
                  {shorten(news?.excerpt ?? '', 60)}
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
        </MaxWidthWrapper>
      </section>

      {/* Headlines section */}
      <section className='py-14'>
        <MaxWidthWrapper>
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
        </MaxWidthWrapper>
      </section>

      {/* Articles section */}
      <section className='py-14'>
        <MaxWidthWrapper className='flex flex-col gap-10'>
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
        </MaxWidthWrapper>
      </section>

      {/* Events slider section */}
      <section className='py-14'>
        <MaxWidthWrapper className='flex flex-col gap-4'>
          <h2 className='font-bold text-center lg:text-left text-xl md:text-2xl lg:text-4xl mb-5 lg:mb-10'>
            Events
          </h2>
          <div>
            <ul className='grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 md:gap-12 lg:gap-16 justify-center'>
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  slug={event.slug}
                  name={event.name}
                  time={event.time}
                  venue={event.venue}
                  location={event.location}
                  link={event.link}
                  image={event.image}
                  date={event.date}
                />
              ))}
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Opportunities advert */}
      <section className='py-14'>
        <MaxWidthWrapper>
          <h1 className='text-4xl font-bold mb-8'>Opportunities</h1>
          <div className='bg-[url(/images/internship.png)] bg-no-repeat h-[25rem] relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
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
        </MaxWidthWrapper>
      </section>
    </>
  );
}

export default Geohub;
