import data from '@/data/data.json';
import Article from '@/components/cards/article';
import { auth, currentUser } from '@clerk/nextjs';
import { toast } from 'sonner';

async function Dashboard() {
  const { userId } = auth();
  const user = await currentUser();

  // if (userId || user) {
  //   toast.success('Signup successful!', {
  //     style: { border: '1px solid hsl(147, 86%, 57%)' },
  //   });
  // }

  return (
    <div className='min-h-[92vh] grid bg-gray-50'>
      <section className='px-6 md:px-8 lg:px-24 py-14 flex flex-col gap-10'>
        <h1 className='font-bold text-2xl lg:text-4xl lg:mb-5'>Dashboard</h1>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8 justify-center'>
          {data.articles.map((article) => (
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
    </div>
  );
}

export default Dashboard;
