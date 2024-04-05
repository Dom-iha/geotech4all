import { LocateFixedIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface EventProps {
  title: string;
  date: string;
  time: string;
  details: string;
  location: string;
  cover: string;
}

function Event(props: EventProps) {
  return (
    <li className='relative flex flex-col lg:flex-row gap-4 rounded-3xl h-[400px] overflow-hidden bg-accent'>
      <Image
        src={`https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt={props.title}
        width={300}
        height={400}
        className='object-cover'
      />
      <div className='absolute bottom-2 left-2 pt-10 p-4 h-fit w-full bg-main rounded-2xl flex flex-col gap-2 max-w-[95%]'>
        <div className='absolute py-2 px-4 bg-main -top-7 left-4 flex flex-col text-center rounded-xl shadow-md'>
          <small className='text-accent font-medium'>{props.date.split(' ')[0]}</small>
          <p className='text-red-500 font-bold'>{props.date.split(' ')[1].replace(',', ' ')}</p>
        </div>
        <p className='font-semibold text-lg'>{props.title}</p>
        {/* <p className='text-sm'>{props.details.slice(0, 50)}...</p> */}
        <p className='text-sm'>
          {props.time}
        </p>
        <p className='text-sm flex gap-2'>
          <LocateFixedIcon strokeWidth={1}/>
          {props.location}
        </p>
        <button
          type='button'
          className=' w-full rounded-2xl p-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
        >
          Register
        </button>
      </div>
    </li>
  );
}

export default Event;
