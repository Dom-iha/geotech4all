import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/db';

async function Related({
  authorId,
  authorName,
}: {
  authorId: string;
  authorName: string | null;
}) {
  const relatedArticles = await prisma.article.findMany({
    where: {
      authorId: authorId,
    },
  });

  if (!relatedArticles) {
    return null;
  }

  return (
    <section className='max-w-screen-md mx-auto pt-6 pb-14 px-4 lg:px-8 flex flex-col gap-8 lg:gap-10'>
      <h3 className='lg:text-2xl '>More from <span className='italic font-medium'>{authorName}</span></h3>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-8 justify-between'>
        {relatedArticles.slice(0, 3).map((post) => (
          <li key={post.id} className='w-fit flex gap-10 border border-dashed'>
            <Link href={`./${post.slug}`} className='flex flex-col gap-3'>
              <Image src={post.image} width={220} height={120} alt='' className='rounded-md' />
              <p className='font-medium hover:underline'>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Related;
