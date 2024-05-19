import { Metadata } from 'next';
import Article from '@/components/cards/article';
import Filter from '@/components/ui/filter';
import Image from 'next/image';
import placeholder from '../../../public/assets/images/placeholder.jpg';
import prisma from '@/lib/db';

export const metadata: Metadata = {
  title: 'Blog',
};

const getData = async () => {
  const articles = await prisma.article.findMany({
    include: { author: true, category: true },
  });
  return articles;
};

export const dynamic = 'force-dynamic' // opt out of cache for this route 
// should probably revalidate after some time instead -TODO

async function page() {
  const articles = await getData();
  

  return (
    <>
      <section className='sticky top-0 px-6 md:px-8 lg:px-24 pt-10 pb-4 lg:py-14 flex max-lg:items-center flex-col-reverse lg:flex-row gap-8 justify-between'>
        <div className='z-10 grid place-content-center gap-4 lg:gap-6 max-w-[600px]'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-accent capitalize'>
            our article library.
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
            width={400}
            height={500}
            className='object-cover rounded-lg relative z-10 shadow-xl'
          />
          <div
            aria-hidden='true'
            className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-accent/50 w-full h-full'
          ></div>
        </div>
      </section>
      <section className='relative bg-main min-h-screen px-6 md:px-8 lg:px-24 py-10 lg:py-14 flex flex-col gap-10'>
        <Filter />
        {!articles ? (
          <div className='grid place-content-center w-full min-h-[400px] rounded-lg border-dashed border-2 border-white/40'>
            <div className='flex flex-col gap-4 items-center'>
              <p className='font-semibold text-altTxt'>
                We&apos;re sorry, our library is currently empty.
              </p>
            </div>
          </div>
        ) : (
          <ul className='grid grid-cols-[repeat(auto-fill,_minmax(19rem,_1fr))] gap-8 justify-center'>
            {articles.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                title={article.title}
                image={article.image}
                author={article.author}
                category={article.categoryName}
                excerpt={article.excerpt}
                content={article.content}
                slug={article.slug}
                createdAt={article.createdAt}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default page;
