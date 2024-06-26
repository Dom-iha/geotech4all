'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import shorten from '@/utils/shorten';
import { User } from '@prisma/client';

interface ArticleProps {
  title: string;
  image: string;
  categoryName: string;
  createdAt: Date;
  author: User;
  slug: string;
  id: string;
}

function Article({title, image, categoryName, createdAt, author, slug}: ArticleProps) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className='w-fit rounded-lg'
    >
      <div className='flex flex-col gap-2 h-full'>
        <div className='group relative overflow-hidden rounded-md h-full'>
          <Image
            src={image}
            alt={title}
            className='rounded-lg h-auto w-auto object-cover aspect-video group-hover:scale-105 transition-all duration-300'
            width={300}
            height={250}
          />
        </div>
        <div className='flex flex-col gap-4 justify-between max-w-[400px] px-2 py-4 h-full'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center text-sm font-medium'>
              <p className='bg-red-200 text-red-600 rounded-full px-3 py-1'>
                {categoryName}
              </p>
              <p>
                {new Date(createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
            <p className='font-bold lg:text-lg'>{shorten(title, 90)}</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-3 items-center font-medium text-sm'>
              <Image
                src={author.image || '/profile.svg'}
                alt={`${author.name}'s profile picture`}
                height={30}
                width={30}
                className='rounded-full shadow-sm'
              />
              <p className=''>{author.name}</p>
            </div>
            <Link
              href={`/blog/${slug}`}
              className='w-fit p-2 flex items-center font-medium gap-2 rounded-md hover:bg-gray-200 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Read
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default Article;
