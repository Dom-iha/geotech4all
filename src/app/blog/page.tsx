import { Metadata } from 'next';
import Article from '@/components/cards/article';
import Filter from '@/components/ui/filter';
import data from '@/data/data.json';
import Image from 'next/image';
import placeholder from '../../../public/assets/images/placeholder.jpg';

export const metadata: Metadata = {
  title: 'Blog',
};

function page() {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 pt-10 pb-4 lg:py-14 flex flex-col-reverse lg:flex-row gap-8 justify-between'>
        <div className='z-10 grid place-content-center gap-4 lg:gap-6 max-w-[600px]'>
          <h1 className='text-2xl lg:text-5xl font-semibold text-accent capitalize'>
            our article library.
          </h1>
          <p className='font-medium text-lg lg:text-2xl text-accent'>
            Read and learn about the latest and greatest innovations, news, and
            events in geosciences.
          </p>
        </div>
        <div className='relative max-h-[500px]'>
          <Image
            src={placeholder}
            alt='hero image'
            width={400}
            height={500}
            className='object-cover rounded-lg relative z-10 shadow-xl bg-fuchsia-500'
          />
          <div
            aria-hidden='true'
            className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-accent/50 w-full h-full'
          ></div>
        </div>
      </section>
      <section className='min-h-screen px-6 md:px-8 lg:px-24 py-10 lg:py-14 flex flex-col gap-10'>
        <Filter />
        {/* <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8 justify-center'>
          {data.articles.slice(0, 3).map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              content={article.content}
              createdAt={article.createdAt}
              cover={article.cover}
              author={article.author}
            />
          ))}
        </ul> */}

        <div className='grid place-content-center w-full min-h-[400px] rounded-lg border-dashed border-2 border-white/40'>
          <div className='flex flex-col gap-4 items-center'>
            <p className='font-semibold text-altTxt'>
              We&apos;re sorry, our library is currently empty.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
