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
          className='self-start mt-auto relative text-main hover:text-accent transition-colors duration-200 border-2 px-8 py-2 border-accent rounded-md after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-right hover:after:scale-x-0 hover:after:origin-left after:transition after:duration-300'
        >
          <span className='relative z-10'>Full Story</span>
        </Link>
      </div>
    </li>
  );
}

export default Headline;
