import Link from 'next/link';
import Image from 'next/image';
import { Timer } from 'lucide-react';
import { ArrowRightIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import logo from '../../../public/favicon.ico';
import { ArticleProps } from '../../types';

function Article(props: ArticleProps) {
  const slug = props.excerpt.toLowerCase().replace(/\s/g, '-');

  return (
    <li className='shadow-md w-fit rounded-lg bg-alt'>
      <div className='flex flex-col gap-4 h-full'>
        <Image
          src={props.cover}
          alt={props.title}
          className='rounded-t-lg w-full object-cover min-h-[200px] max-h-[200px]'
          width={390}
          height={200}
        />
        <div className='flex flex-col gap-4 max-w-[400px] p-4 lg:px-6'>
          <div className='flex justify-between items-center text-sm font-medium'>
            <p>{props.createdAt}</p>
            <DotsVerticalIcon aria-hidden='true' />
            <p className='flex gap-2 items-center'>
              <Timer strokeWidth={1} /> 10mins
            </p>
          </div>
          <p className='font-bold text-lg'>{props.title}</p>
          <p className='text-sm lg:text-base'>
            {props.content.slice(0, 77)}...
          </p>
          <div className='flex justify-between'>
            <Link
              href={`/blog/${slug}`}
              className='w-fit p-2 flex items-center font-semibold gap-2 hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Read now
              <ArrowRightIcon aria-hidden='true' />
            </Link>
            <Image
              src={logo}
              alt={`${props.author}'s profile picture`}
              height={40}
              width={40}
              aria-label={props.author}
              className='rounded-full shadow-sm'
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Article;
