import Image from 'next/image';
import { Edit, Trash } from 'lucide-react';

function Post({
  title,
  image,
  username,
  tag,
  date,
}: {
  title: string;
  image: string;
  username: string | null;
  tag: string;
  date: string;
}) {
  return (
    <li className='shadow-md rounded-md bg-accent/70 text-main font-semibold p-8 flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='rounded-md bg-accent/80 w-fit py-1 px-2'>
          <p className='text-main'>{tag}</p>
        </div>
        <div className='flex'>
          <button
            type='button'
            title='edit'
            className='px-4 py-2 rounded-md text-blue-500'
          >
            <Edit />
          </button>
          <button
            type='button'
            title='delete'
            className='px-4 py-2 rounded-md text-red-500'
          >
            <Trash />
          </button>
        </div>
      </div>
      <h2>{title}</h2>
      <div className='flex gap-3'>
        <Image
          src={image}
          alt={username!}
          width={20}
          height={20}
          className='w-[20px] h-[20px]'
        />
        <p className=''>{username}</p>
        <p className=''>{date}</p>
      </div>
    </li>
  );
}

export default Post;
