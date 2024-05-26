import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeadlineProps {
  title: string;
  content: string;
  cover: string;
  slug: string;
}

function Headline(props: HeadlineProps) {
  const shorten = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <li className='flex max-lg:flex-col gap-4 rounded-md'>
      <Image
        src={props.cover}
        alt={props.title}
        width={200}
        height={150}
        className='rounded-lg h-auto w-auto object-cover aspect-video object-center'
      />
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>{props.title}</p>
        <p>
          {shorten(props.content, 40)} <br />
        </p>
        <Link
          href={`/blog/${props.slug}`}
          className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
        >
          Full Story
          <ArrowRightIcon aria-hidden='true' />
        </Link>
      </div>
    </li>
  );
}

export default Headline;
