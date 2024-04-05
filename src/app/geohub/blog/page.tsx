import { Metadata } from 'next';
import Article from '@/components/cards/article';
import Filter from '@/components/ui/filter';
import data from '@/data/data.json';
import Image from 'next/image';

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
            Learn and read about the latest and greatest innovations, news, and events in geosciences.
          </p>
        </div>
        <div className='relative'>
          <Image
            src={`https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt='hero image'
            width={400}
            height={500}
            className='object-cover rounded-lg relative z-10 shadow-xl bg-fuchsia-500'
          />
          <div
            aria-hidden='true'
            className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-red-400 w-full h-full'
          ></div>
        </div>
      </section>
      <section className='min-h-screen px-6 md:px-8 lg:px-24 py-10 lg:py-14 flex flex-col gap-10'>
        <Filter />
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8 justify-center'>
          {data.articles.slice(0, 3).map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              urlTitle={article.urlTitle}
              content={article.content}
              createdAt={article.createdAt}
              cover={article.cover}
              author={article.author}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default page;
