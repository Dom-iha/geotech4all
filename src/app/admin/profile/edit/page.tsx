'use client';
import { Save } from 'lucide-react';
import { useState } from 'react';

function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    usename: '',
    bio: '',
    links: '',
    details: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setProfileInfo((prevState) => ({
        ...prevState,
        name: value,
      }));
    } else if (name === 'username') {
      setProfileInfo((prevState) => ({
        ...prevState,
        username: value,
      }));
    } else if (name === 'links') {
      setProfileInfo((prevState) => ({
        ...prevState,
        links: value,
      }));
    } else if (name === 'bio') {
      setProfileInfo((prevState) => ({
        ...prevState,
        bio: value,
      }));
    } else {
      setProfileInfo(profileInfo);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('saved');
  };

  return (
    <section className='min-h-[calc(100vh-60px)] py-20'>
      <div className='max-w-screen-sm mx-auto'>
        <div className='flex mb-5 pb-4 border-b'>
          <h1 className='font-bold text-3xl'>Edit Profile</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-semibold'
            >
              name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={profileInfo.name}
              onChange={handleChange}
              placeholder='Enter your article title'
              aria-describedby='title-error'
              className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='details'
              className='block mb-2 text-sm font-semibold'
            >
              username
            </label>
            <input
              type='text'
              id='details'
              name='excerpt'
              value={profileInfo.details}
              onChange={handleChange}
              placeholder='Enter a brief description of your article avoid special characters'
              aria-describedby='excerpt-error'
              className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='bio'
              className='block mb-2 text-sm font-semibold'
            >
              bio
            </label>
            <textarea
              id='bio'
              name='bio'
              placeholder='Describe yourself...'
              rows={3}
              value={profileInfo.bio}
              onChange={handleChange}
              className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='links'
              className='block mb-2 text-sm font-semibold'
            >
              links
            </label>
            <input
              type='text'
              id='links'
              name='links'
              value={profileInfo.links}
              onChange={handleChange}
              placeholder='Enter a brief description of your article avoid special characters'
              aria-describedby='excerpt-error'
              className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
            />
          </div>

          <button
            type='submit'
            className='bg-accent flex gap-2 text-white px-8 py-3 rounded ml-auto mt-8 w-fit'
          >
            <Save />
            <span>{loading ? 'Saving...' : 'Save'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;
