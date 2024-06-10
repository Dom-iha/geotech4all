import Link from 'next/link';
import prisma from '@/lib/db';
import { cache } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Share from '@/components/cards/share';
import Progressbar from '@/app/(root)/blog/progressbar';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import {
   ArrowUpRightFromSquare,
  CalendarCheck,
  CalendarDays,
  Clock,
  LinkIcon,
  MapPin,
} from 'lucide-react';
import formatTime from '@/utils/formatTime';

const getEvent = cache(async (id: string) => {
  const event = await prisma.event.findUnique({
    where: {
      id: id,
    },
    include: { author: true },
  });
  return event;
});

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const event = await getEvent(id);

  if (!event) return {};

  return {
    metadataBase: new URL('https://www.geotech4all.com'),
    title: event?.name,
    // keywords: '',
    openGraph: {
      type: 'article',
      url: `https://www.geotech4all.com/geohub/events/${id}`,
      title: event.name,
      description: 'upcoming event!!',
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
  const opportunities = await prisma.opportunity.findMany({
    include: { author: true },
  });
  return opportunities.map((opportunity) => opportunity.slug);
};

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const event = await getEvent(id);
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
