import React from 'react';

function Newsletter() {
  const subscribe = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className='flex flex-col gap-8 pb-20 max-w-2xl mx-auto'>
      <p className='text-main text-center text-xl font-semibold'>
        Stay up to date with what we&apos;re doing. Signup to our newsletter for
        blog posts and service updates
      </p>
      <form className='flex flex-col lg:flex-row gap-4 justify-center'>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email address'
          autoComplete='off'
          className='text-accent p-3 w-full rounded-md outline-main outline-offset-4 outline-2 focus:outline-dashed'
        />
        <button
          type='button'
          className='rounded-md py-2.5 px-4 bg-main text-accent border-2 hover:border-main hover:bg-accent hover:text-main transition duration-300'
          onClick={subscribe}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
