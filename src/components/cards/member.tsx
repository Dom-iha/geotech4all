import Image from 'next/image';
import React from 'react';

interface MemberProps {
  name: string;
  bio: string;
  role: string;
  image: string;
}

function Member(props: MemberProps) {
  return (
    <div className='flex flex-col lg:flex-row rounded-md overflow-hidden'>
      <Image src={props.image} alt={`${props.image}'s picture`} />
      <div className='p-6 md:p-8 lg:bg-accent lg:text-main lg:p-16 flex flex-col gap-4'>
        <div>
          <h3 className='text-lg lg:text-2xl font-bold'>{props.name}</h3>
          <p className='font-bold'>{props.role}</p>
        </div>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default Member;
