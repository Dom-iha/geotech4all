import Image from 'next/image';
import React from 'react';

function Profile() {
  return (
    <div className='min-h-[92vh] grid place-items-center'>
      <h1 className='text-4xl'>Admin Profile</h1>
      <div>
        <Image src='' alt='users profile photo' />
      </div>
    </div>
  );
}

export default Profile;
