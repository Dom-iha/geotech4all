import Image from 'next/image';
import React from 'react';

function Profile() {
  return (
    <div className='min-h-[85vh] grid place-items-center px-4 py-8 lg:py-14 lg:px-24'>
      <div className='flex flex-col items-center gap-8 w-full h-full'>
        <h1 className='text-4xl'>Hello {'{user}'}</h1>
        <Image
          src=''
          alt='users profile photo'
          className='bg-accent w-20 h-20 rounded-full lg:w-[15rem] lg:h-[15rem]'
        />
        {/* <div className='bg-accent w-[20rem] h-[30rem]'>

        </div> */}
      </div>
    </div>
  );
}

export default Profile;
