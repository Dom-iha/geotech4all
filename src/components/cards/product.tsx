import Image from 'next/image';
import React from 'react';

interface ProductProps {
  name: string;
  type: string;
  details: string;
  availability: boolean | string;
  cover: string;
}

function Product(props: ProductProps) {
  return (
    <li className='relative flex flex-col lg:flex-row gap-4 rounded-3xl h-[400px] overflow-hidden bg-accent'>
      <Image
        src={`https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt={props.name}
        width={300}
        height={400}
        className='object-cover'
      />
      <div className='absolute bottom-2 left-2 pt-10 p-4 h-fit w-full bg-main rounded-2xl flex flex-col gap-2 max-w-[95%]'>
        <div className='absolute py-2 px-4 bg-main -top-7 left-4 flex flex-col text-center rounded-xl shadow-md'>
          <p className='text-red-500 font-bold'>{props.availability}</p>
        </div>
        <p className='font-semibold text-lg'>{props.name}</p>
        <p className='text-sm'>{props.details.slice(0, 20)}...</p>
        <button
          type='button'
          className=' w-full rounded-2xl p-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
        >
          View
        </button>
      </div>
    </li>
  );
}

export default Product;
