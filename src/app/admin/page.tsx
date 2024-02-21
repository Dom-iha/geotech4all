'use client';
import ArticleCard from '@/components/ui/ArticleCard';
import { useRouter } from 'next/navigation';
import data from '../../../public/data/data.json';

const authenticated = false;

function Dashboard() {
  const router = useRouter();
  
  return (
    <div className='min-h-[92vh] grid bg-gray-50'>
      <section className='px-6 md:px-8 lg:px-24 py-14 flex flex-col gap-10'>
        <h1 className='font-bold text-2xl lg:text-4xl lg:mb-5'>Dashboard</h1>
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
          className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md self-center mt-10'
        >
          <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
            Load more
          </span>
          <span className='absolute top-0 left-0 w-full h-full bg-accent origin-left group-hover:origin-right group-hover:scale-x-0 transition duration-300'></span>
        </button>
      </section>
    </div>
  );
}

export default Dashboard;
