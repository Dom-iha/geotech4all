'use client';
import { useState } from 'react';
import { toast } from 'sonner';

function Newsletter() {
  const [email, setEmail] = useState('');

  const subscribe = (event: React.FormEvent) => {
    event.preventDefault();
    const invalid =
      (email.trim() === '' && !email.includes('@')) || !email.includes('.com');

    if (invalid) {
      return toast.error('Please enter a valid email', {
        style: {
          border: 'solid hsl(0, 100%, 67%)',
          background: 'hsl(0, 100%, 67%)',
        },
        position: 'top-right',
      });
    }

    toast.success('Subscibed successfully!', {
      style: {
        border: 'solid hsl(147, 86%, 57%)',
        background: 'hsl(147, 86%, 57%)',
      },
      position: 'top-right',
    });
    setEmail('');
  };

  return (
    <div className='flex flex-col gap-8 pb-20 max-w-2xl mx-auto'>
      <p className='text-main text-center text-lg lg:text-xl font-medium'>
        Subscribe to our newsletter for blog post and service updates
      </p>
      <form
        className='flex flex-col lg:flex-row gap-4 justify-center'
        onSubmit={subscribe}
      >
        <label htmlFor='emailaddress' className='sr-only'>
          Email
        </label>
        <input
          id='emailaddress'
          type='email'
          value={email}
          name='emailaddress'
          autoComplete='off'
          placeholder='Enter your email address'
          onChange={(event) => setEmail(event?.target.value)}
          className='text-accent p-3 w-full rounded-md outline-main outline-offset-2 outline-2 focus:outline-dashed'
        />
        <button
          type='submit'
          className='rounded-md py-2.5 px-4 bg-main text-accent border-2 hover:border-main hover:bg-accent hover:text-main transition duration-300 outline-main outline-offset-2 outline-2 focus:outline-dashed'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
