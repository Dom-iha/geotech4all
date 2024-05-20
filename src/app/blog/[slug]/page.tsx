import Image from 'next/image';
import Related from '@/components/cards/related';
import prisma from '@/lib/db';
import { Metadata } from 'next';
import { cache } from 'react';
import { siteConfig } from '@/app/config/site';
import { notFound } from 'next/navigation';
import Progressbar from '../progressbar';

const getArticle = cache(async (slug: string) => {
  const article = await prisma.article.update({
    where: {
      slug: slug,
    },
    include: { author: true },
    data: {
      views: {
        increment: 1,
      },
    },
  });
  return article;
});
// above function isn't necessary if you're using fetch() as Next.js caches fetch reqs to the same url by default but since im using prisma it needs to be done manually

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticle(slug);

  if (!article) return {};

  return {
    metadataBase: new URL('https://www.geotech4all.com'),
    title: article?.title,
    // keywords: '',
    openGraph: {
      type: 'article',
      url: `https://www.geotech4all.com/blog/${slug}`,
      title: article.title,
      description: article.excerpt,
      siteName: 'Geotech4All',
      publishedTime: new Date(article.createdAt).toISOString(),
      authors: [article.author.name || 'Geotech4All'],
      images: [
        {
          url: article.image,
          width: '1200',
          height: '630',
          // alt: ''
        },
      ],
    },
  };
}

// generate all possible articles at compilation (SSG)
export const generateStaticParams = async () => {
  const articles = await prisma.article.findMany({
    include: { author: true, category: true },
  });
  return articles.map((article) => article.slug);
};

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className='grid min-h-[calc(100vh-60px)] place-content-center'>
        <h1 className='text-purple-500 text-lg font-semibold'>
          Ooops! We couldn&apos;t find that post.
        </h1>
      </div>
      // notFound()
    );
  }

  // need to handle error cases when user loses connection and display fallback ui

  return (
    <>
      <Progressbar /> {/*currently tracking entire page scroll*/}
      <article className='py-10 lg:py-16 px-4 flex flex-col gap-5 max-w-screen-md mx-auto'>
        <Image
          src={article.image}
          alt={article.title}
          width={768}
          height={400}
          className='w-auto h-auto aspect-video rounded-lg'
        />
        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl mt-4'>{article.title}</h1>
        <div className='rounded-full w-fit flex justify-center bg-purple-200 text-purple-600 px-4 py-1'>
          <p>{article.categoryName}</p>
        </div>
        <section className='flex items-center gap-3 py-2'>
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
        </section>
        <section
          className='prose prose-base lg:prose-lg xl:prose-xl mt-2 lg:mt-4'
          dangerouslySetInnerHTML={{
            __html: article.content ? article.content : '',
          }}
        />
      </article>

      <Related
        authorName={article.author.name}
        authorId={article.authorId}
        currentArticle={article.id}
      />
    </>
  );
}

export default page;
