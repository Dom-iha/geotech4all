import Link from 'next/link';
import prisma from '@/lib/db';
import { cache } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Progressbar from '../progressbar';
import Share from '@/components/cards/share';
import Related from '@/components/cards/related';
import { ArrowUpRightFromSquareIcon } from 'lucide-react';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import ShareDesktop from '@/components/cards/share-desktop';
import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';

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

export const revalidate = 3600 * 12;

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getArticle(slug);


  if (!article) {
    return notFound();
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(article.createdAt));

  return (
    <>
      <Progressbar /> {/*currently tracking entire page scroll*/}
      <article className='py-6 lg:py-10 px-6 md:px-10 flex flex-col gap-5 max-w-screen-md mx-auto'>
        {/* <ShareDesktop title={article.title} /> */}
        <section className='space-y-4'>
          <time
            className='text-zinc-600 text-sm tracking-tight'
            dateTime={new Date(article.createdAt).toISOString()}
          >
            Published on {formattedDate}
          </time>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl leading-tight'>
            {article.title}
          </h1>
          <div className='rounded-full w-fit flex justify-center bg-red-200 text-red-600 px-4 py-1'>
            <p>{article.categoryName}</p>
          </div>
          {article.author.linkedin ? (
            <Link
              href={article.author.linkedin}
              target='_blank'
              className='flex items-center gap-3 py-2'
            >
              <Image
                src={article.author.image ?? '/profile.svg'}
                alt={''}
                width={42}
                height={42}
                className='w-6 h-6 lg:w-10 lg:h-10 rounded-full border'
              />
              <p className='text-sm lg:text-base font-medium'>
                {article.author.name}
              </p>
            </Link>
          ) : (
            <div className='flex items-center gap-3 py-2'>
              <Image
                src={article.author.image ?? '/profile.svg'}
                alt={''}
                width={42}
                height={42}
                className='w-6 h-6 lg:w-10 lg:h-10 rounded-full border'
              />
              <p className='text-sm lg:text-base font-medium'>
                {article.author.name}
              </p>
            </div>
          )}
        </section>

        <Image
          src={article.image}
          alt={article.title}
          width={768}
          height={400}
          className='w-auto h-auto aspect-video rounded-lg'
        />
        <section
          className='prose prose-zinc prose-base lg:prose-lg xl:prose-xl mt-2 lg:mt-4'
          dangerouslySetInnerHTML={{
            __html: article.content ? article.content : '',
          }}
        />
      </article>
      <section className='py-6 lg:py-10 px-6 md:px-10 max-w-screen-md mx-auto space-y-6'>
        <Share title={article.title} />

        <Related
          authorName={article.author.name}
          authorId={article.authorId}
          currentArticle={article.id}
        />

        <div className='p-6 lg:p-10 flex flex-col items-center border border-input border-dashed rounded-xl max-w-screen-md mx-auto'>
          <div className='flex flex-col gap-6 lg:gap-8 text-center items-center'>
            <h3 className=' text-2xl lg:text-4xl font-bold'>Join us</h3>
            <p className=' max-w-prose md:text-lg lg:text-xl'>
              Join our community of geoscience enthusiasts and professionals to
              share ideas, and learn from each other.
            </p>
            <Link
              href='https://chat.whatsapp.com/J7SblOAgAan7IrAsWAL3MC'
              target='_blank'
              className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 text-main bg-accent text-acceent transition duration-300 max-md:self-center'
            >
              Join
              <ArrowUpRightFromSquareIcon className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
