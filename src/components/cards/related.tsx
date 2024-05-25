import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/db';

async function Related({
  authorId,
  authorName,
  currentArticle,
}: {
  authorId: string;
  authorName: string | null;
  currentArticle: string;
}) {
  const relatedArticles = await prisma.article.findMany({
    where: {
      authorId: authorId,
    },
  });

  const otherArticlesExcludingCurrent = relatedArticles.filter(
    (article) => article.id !== currentArticle
  );

  if (!otherArticlesExcludingCurrent.length) {
    return null;
  }

  return (
    <section className='max-w-screen-md mx-auto my-8 pt-6 pb-14 px-4 flex flex-col gap-6 lg:gap-8'>
      <p className='lg:text-xl'>More from <span className='italic font-medium'>{authorName}</span></p>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-8 justify-between items-center'>
        {otherArticlesExcludingCurrent.slice(0, 3).map((post) => (
          <li key={post.id} className='w-fit flex gap-10'>
            <Link href={`./${post.slug}`} className='flex flex-col gap-3'>
              <Image src={post.image} width={220} height={120} alt='' className='rounded-md' />
              <p className='font-medium hover:underline max-lg:text-sm'>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Related;
