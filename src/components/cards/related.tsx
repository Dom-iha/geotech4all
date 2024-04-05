import Link from 'next/link';
import Image from 'next/image';
import img from '../../../public/assets/images/geotextile.png'

interface relatedProps {
   id:string;
   title: string;
   cover: string;
}

function Related(props: relatedProps) {
  return (
    <li className='w-fit flex gap-10'>
      <Link href={`./${props.id}`} className='flex flex-col gap-4'>
        <Image
          src={img}
          alt='Grayscale shot of rock slide'
        />
        <div className='flex items-start flex-col gap-2'>
          <p className='font-bold text-lg lg:text-xl'>{props.title}</p>
          <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent rounded-md'
            >
              <span className='font-medium text-main max-md:text-sm relative z-10 group-hover:text-accent duration-500'>
                Read
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
        </div>
      </Link>
    </li>
  );
}

export default Related;
