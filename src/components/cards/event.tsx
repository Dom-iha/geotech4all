import { ArrowRightIcon } from '@radix-ui/react-icons';
import {
  ArrowRight,
  CalendarDays,
  Clock,
  LinkIcon,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import formatTime from '@/utils/formatTime';

interface EventCardProps {
  id: string;
  name: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  link: string | null;
  location: string | null;
}

function EventCard({
  name,
  time,
  date,
  venue,
  link,
  image,
  id,
}: EventCardProps) {
  return (
    <li className='flex flex-col lg:flex-row gap-4 rounded-lg bg-slate-50 p-4 shadow-md'>
      <Image
        src={image}
        alt={name}
        width={200}
        height={150}
        className='rounded-lg h-auto w-auto object-cover aspect-video lg:aspect-auto object-center'
      />
      <div className='flex flex-col gap-4'>
        <p className='font-semibold text-lg'>{name}</p>
        <div className='flex justify-between gap-8 lg:justify-start'>
          <time
            className='flex items-center gap-2 tracking-tight text-zinc-600'
            dateTime={new Date(date).toISOString()}
          >
            <CalendarDays size={20} />{' '}
            <span>
              {new Date(date).toLocaleDateString('en-Us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </time>
          <time
            className='flex items-center gap-2 tracking-tight text-zinc-600'
            dateTime={new Date(date).toISOString()}
          >
            <Clock size={20} /> <span>{formatTime(time)}</span>
          </time>
        </div>
        <div className='flex justify-between gap-4 lg:justify-start flex-wrap'>
          <span className='flex items-center gap-2 tracking-tight text-zinc-600 min-w-fit'>
            <MapPin size={20} /> <span>{venue}</span>
          </span>
          {link && link.trim() !== '' && (
            <span className='flex items-center gap-2 tracking-tight text-zinc-600 min-w-fit'>
              <LinkIcon size={20} />{' '}
              <Link
                href={link}
                target='_blank'
                className='font-medium text-blue-600'
              >
                Event Link
              </Link>
            </span>
          )}
        </div>

        <Link
          href={`/geohub/events/${id}`}
          className='mt-auto text-sm w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
        >
          Details
          <ArrowRightIcon />
        </Link>
      </div>
    </li>
  );
}

export default EventCard;
