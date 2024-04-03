import Image from 'next/image';
import reporter from '../../../public/assets/images/reporter.png';
import events from '../../../public/assets/images/events.png';
import data from '@/data/data.json';
import ArticleCard from '@/components/ui/ArticleCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geohub',
};

function Geohub() {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-2'>
        <div className='news-hero flex flex-col justify-between relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 lg:min-h-[88vh]'>
          <p className='pt-6 ml-8 lg:ml-10 font-medium text-lg text-main'>
            News Flash
          </p>
          <div className='flex flex-col justify-end max-w-[609px] max-lg:p-8 lg:ml-[50px] lg:pb-8'>
            <h1 className='text-main text-2xl lg:text-5xl font-bold mb-3'>
              2023 Nigeria Infrastructural Budget: A Comparative Analysis
            </h1>
            <p className='max-w-[575px] max-sm:hidden text-main text-lg lg:text-2xl mb-6'>
              Nigeria&apos;s 2023 budget, recently approved by the federal
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
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Headlines</h2>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8'>
          <li className='flex max-lg:flex-col gap-4 shadow-md bg-alt p-4 rounded-md'>
            <Image
              src={reporter}
              alt='Close up on reporter taking an interview'
              width={295}
              height={206}
              className='rounded-md'
            />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc molestie phasellus
                integer id risus est egestas.
              </p>
              <button
                type='button'
                className='w-full mt-auto relative text-main hover:text-accent transition-colors duration-200 border-2 px-8 py-2 border-accent rounded-md self-center after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-right hover:after:scale-x-0 hover:after:origin-left after:transition after:duration-300'
              >
                <span className='relative z-10'>Full Story</span>
              </button>
            </div>
          </li>
          <li className='flex max-lg:flex-col gap-4 shadow-md bg-alt p-4 rounded-md'>
            <Image
              src={reporter}
              alt='Close up on reporter taking an interview'
              width={295}
              height={206}
              className='rounded-md'
            />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc molestie phasellus
                integer id risus est egestas.
              </p>
              <button
                type='button'
                className='w-full mt-auto relative text-main hover:text-accent transition-colors duration-200 border-2 px-8 py-2 border-accent rounded-md self-center after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-right hover:after:scale-x-0 hover:after:origin-left after:transition after:duration-300'
              >
                <span className='relative z-10'>Full Story</span>
              </button>
            </div>
          </li>
        </ul>
      </section>
      {/* Articles section */}
      <section className='px-6 md:px-8 lg:px-24 py-14 bg-alt flex flex-col gap-10'>
        <h2 className='font-bold text-2xl lg:text-4xl lg:mb-5'>Articles</h2>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8 justify-center'>
          {data.articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              createdAt={article.createdAt}
              cover={article.cover}
              author={article.author}
            />
          ))}
        </ul>
        <button
          type='button'
          className='cursor-pointer relative text-main hover:text-accent transition-colors duration-200 border-2 px-8 py-2 border-accent rounded-md self-center mt-10 after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-right hover:after:scale-x-0 hover:after:origin-left after:transition after:duration-300'
        >
          <span className='relative z-10'>View All</span>
        </button>
      </section>
      {/* Events slider section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Events</h2>
        <div>
          <ul className='flex gap-8 max-lg:flex-wrap'>
            <li className='flex flex-col lg:flex-row gap-4 w-[590px]'>
              <Image
                src={events}
                alt='Close up on reporter taking an interview'
                className='rounded-md max-lg:w-full'
              />
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-xl'>Geohub spotlight</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ac purus
                  scelerisque enim amet convallis tristique mauris.
                </p>
                <button
                  type='button'
                  className='mt-auto w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
                >
                  Set Reminder
                </button>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row gap-4 w-[590px]'>
              <Image
                src={events}
                alt='Close up on reporter taking an interview'
                className='rounded-md max-lg:w-full'
              />
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-xl'>Geohub spotlight</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ac purus
                  scelerisque enim amet convallis tristique mauris.
                </p>
                <button
                  type='button'
                  className='mt-auto w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
                >
                  Set Reminder
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Opportunities advert */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h1 className='text-4xl font-bold mb-8'>Internship</h1>
        <div className='internship h-[25rem] relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <div className='grid place-items-center content-center h-full'>
            <p className='max-w-[575px] text-main text-center lg:text-2xl mb-6'>
              Looking for an internship position in a geoscience firm? Check
              firms you can apply to as a prospective intern
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-main w-fit rounded-md'
            >
              <span className='tracking-widest font-medium text-accent lg:text-lg relative z-10 group-hover:text-main duration-500'>
                View Opportunities
              </span>
              <span className='absolute top-0 left-0 w-full bg-main duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Geohub;
