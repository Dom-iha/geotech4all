import Image from 'next/image';
import data from '@/data/data.json';
import Related from '@/components/cards/related';
import prisma from '@/lib/db';

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await prisma.article.findUnique({
    include: { author: true, category: true },
    where: {
      slug: slug,
    },
  });

  if (!article) {
    return (
      <div className='grid min-h-[calc(100vh-60px)] place-content-center'>
        <h1 className='text-purple-500 text-lg font-semibold'>
          Ooops! We couldn&apos;t find that post.
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className='py-16 px-4 flex flex-col gap-4 max-w-screen-md mx-auto'>
        <Image
          src={article.image}
          alt={article.title}
          width={600}
          height={250}
          className='w-full max-h-[400px] rounded-md'
        />
        <h1 className='text-xl lg:text-3xl font-semibold'>{article.title}</h1>
        <div className='rounded-full w-fit flex justify-center bg-purple-200 text-purple-600 px-4 py-1'>
          <p>{article.category.name || 'News'}</p>
        </div>
        <div className='flex items-center gap-3'>
          <Image
            src={article.author.image || '/profile.svg'}
            alt={''}
            width={40}
            height={40}
            className='w-[40px] h-[40px] rounded-full'
          />
          <div className='flex items-center gap-4 leading-4 font-medium text-sm'>
            <p className='lg:text-lg'>{article.author.name}</p>
            <span className='font-bold'>-</span>
            <p className='lg:text-lg'>
              {new Date(article.createdAt)
                .toDateString()
                .split(' ')
                .slice(1)
                .join(' ')}
            </p>
          </div>
        </div>
        <article
          className='prose lg:prose-xl'
          dangerouslySetInnerHTML={{
            __html: article.content ? article.content : '',
          }}
        />
      </div>

      <Related authorName={article.author.name} authorId={article.authorId} />
    </>
  );
}

export default page;
