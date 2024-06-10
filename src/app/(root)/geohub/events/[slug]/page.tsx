import Share from '@/components/cards/share';
import prisma from '@/lib/db';
import formatTime from '@/utils/formatTime';
import {
  ArrowUpRightFromSquare,
  CalendarDays,
  Clock,
  LinkIcon,
  MapPin
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';

const getEvent = cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
    include: { author: true },
  });
  return event;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const event = await getEvent(slug);

  if (!event) return {};

  return {
    metadataBase: new URL('https://www.geotech4all.com'),
    title: event?.name,
    // keywords: '',
    openGraph: {
      type: 'article',
      url: `https://www.geotech4all.com/geohub/events/${slug}`,
      title: event.name,
      description: event.description,
      siteName: 'Geotech4All',
      publishedTime: new Date(event.createdAt).toISOString(),
      authors: [event.author.name || 'Geotech4All'],
      images: [
        {
          url: event.image,
          width: '1200',
          height: '630',
          // alt: ''
        },
      ],
    },
  };
}

export const generateStaticParams = async () => {
  const events = await prisma.event.findMany({
    include: { author: true },
  });
  return events.map((event) => event.slug);
};

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const event = await getEvent(slug);
  if (!event) return null;

  return (
    <>
      <article className='py-10 lg:py-16 px-4 flex flex-col gap-5 max-w-screen-md mx-auto'>
        <Image
          src={event.image}
          alt={event.name}
          width={768}
          height={400}
          className='w-auto h-auto aspect-auto rounded-lg'
        />

        <section className='flex flex-col gap-4'>
          <h1 className='font-bold md:text-xl lg:text-2xl'>{event.name}</h1>
          <div className='flex justify-between gap-8 lg:justify-start'>
            <time
              className='flex items-center gap-2 tracking-tight text-zinc-600'
              dateTime={new Date(event.date).toISOString()}
            >
              <CalendarDays size={20} />{' '}
              <span>
                {new Date(event.date).toLocaleDateString('en-Us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </time>
            <time
              className='flex items-center gap-2 tracking-tight text-zinc-600'
              dateTime={new Date(event.date).toISOString()}
            >
              <Clock size={20} /> <span>{formatTime(event.time)}</span>
            </time>
          </div>
          <div className='flex items-center gap-2 tracking-tight text-zinc-600'>
            <MapPin size={20} /> <span>{event.venue}</span>
          </div>
          {event.link && event.link.trim() !== '' && (
            <div className='flex items-center gap-2 tracking-tight text-zinc-600'>
              <LinkIcon size={20} />{' '}
              <Link
                href={event.link}
                target='_blank'
                className='font-medium text-blue-600'
              >
                Event Link
              </Link>
            </div>
          )}
        </section>

        <span className='block my-2 h-px bg-input w-full' />

        <section
          className='prose prose-base lg:prose-lg xl:prose-xl mt-2 lg:mt-4'
          dangerouslySetInnerHTML={{
            __html: event.details ? event.details : '',
          }}
        />
      </article>
      <section className='py-6 lg:py-10 px-6 md:px-10 max-w-screen-md mx-auto space-y-6'>
        <Share title={event.name} />

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
              <ArrowUpRightFromSquare className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
