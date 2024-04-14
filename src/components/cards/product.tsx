import Image from 'next/image';
import { ArrowUpRightFromSquare } from 'lucide-react';

interface ProductProps {
  name: string;
  description: string;
  availability: boolean | string;
  cover: string;
}

function Product(props: ProductProps) {
  return (
    <li className='grid gap-4 max-w-[350px] rounded-xl shadow-md p-4 bg-alt'>
      <Image
        src={props.cover}
        alt={props.name}
        width={390}
        height={300}
        className='rounded-t-lg min-h-[200px] max-h-[250px]'
      />
      <div className='flex gap-4'>
        <p className='bg-green-400/20 text-green-500 font-semibold rounded-md p-1.5'>{props.availability}</p>
        <p></p>
      </div>
      <h3 className='text-lg lg:text-xl font-semibold'>{props.name}</h3>
      <button
        type='button'
        className='relative w-fit text-main hover:text-accent transition-colors duration-500 border-2 px-8 py-2 border-accent rounded-md after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-accent after:scale-x-100 after:origin-left hover:after:scale-x-0 hover:after:origin-right after:transition after:duration-500'
      >
        <span className='w-full items-center justify-center relative z-10 uppercase tracking-widest flex gap-2'>
          get
          <ArrowUpRightFromSquare size={18} />
        </span>
      </button>
    </li>
  );
}

export default Product;
