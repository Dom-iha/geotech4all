import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ArticleProps } from '../../types';

async function Article(props: ArticleProps) {
  const shorten = (sentence: string) => {
    if(sentence.length > 70){
      return sentence.slice(0, 60) + '...'
    } else {
      return sentence;
    }
  }

  return (
    <li className='border border-dashed w-fit rounded-lg'>
      <div className='flex flex-col gap-2 h-full'>
        <Image
          src={props.image}
          alt={props.title}
          className='rounded-t-lg w-full object-cover min-h-[200px] max-h-[200px]'
          width={390}
          height={200}
        />
        <div className='flex flex-col gap-4 justify-between max-w-[400px] p-4 h-full'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center text-sm font-medium'>
              <p className='bg-purple-200 text-purple-600 rounded-xl px-2.5 py-1'>
                {props.category}
              </p>
              <p>{new Date(props.createdAt).toDateString().split(' ').slice(1).join(' ')}</p>
            </div>
            <p className='font-bold lg:text-lg'>{props.title}</p>
            <p className='text-sm lg:text-base'>
              {shorten(props.excerpt)}
            </p>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-3 items-center font-medium text-sm'>
              <Image
                src={props.author.image || '/profile.svg'}
                alt={`${props.author.name}'s profile picture`}
                height={30}
                width={30}
                className='rounded-full shadow-sm'
              />
              <p className=''>{props.author.name}</p>
            </div>
            <Link
              href={`/blog/${props.slug}`}
              className='w-fit p-2 flex items-center font-medium gap-2 rounded-md hover:bg-gray-200 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Read
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Article;
