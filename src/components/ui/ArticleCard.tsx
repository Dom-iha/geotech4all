import Link from 'next/link';
import Image from 'next/image';

function ArticleCard(props: ArticleProps) {
  return (
    <li className='shadow-md w-fit rounded-md bg-main'>
      <Link href={`./geohub/${props.id}`} className='flex flex-col gap-4 h-full'>
        <Image
          src={props.cover}
          alt='Grayscale shot of rock slide'
          className='rounded-t-md w-full'
          width={390}
          height={200}
        />
        <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
          <p className='font-bold text-lg lg:text-xl'>{props.title}</p>
          <p>{props.content}</p>
          <div className='flex justify-between'>
            <p className='mt-8 text-sm font-bold'>{props.author}</p>
            <p className='mt-8 text-sm font-bold'>{props.createdAt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ArticleCard;
