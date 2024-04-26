'use client';
import { useContext, useState } from 'react';
import AuthContext from '@/context/AuthContext';
import Event from '@/components/cards/event';

function CreateEvent() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('write');
  const [error, setError] = useState<boolean | null>(null);
  const [value, setValue] = useState();
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    details: '',
  });

  const formData = new FormData();
  formData.append('title', eventData.title);
  formData.append('details', eventData.details);
  formData.append('date', eventData.date);
  formData.append('time', eventData.time);
  formData.append('time', eventData.location);
  formData.append('content', value!); // remove this. value is actually undefined by default

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setEventData((prevState) => ({
        ...prevState,
        title: value,
      }));
    } else if (name === 'date') {
      setEventData((prevState) => ({
        ...prevState,
        excerpt: value,
      }));
    } else if (name === 'time') {
      setEventData((prevState) => ({
        ...prevState,
        excerpt: value,
      }));
    } else if (name === 'location') {
      setEventData((prevState) => ({
        ...prevState,
        excerpt: value,
      }));
    } else {
      setEventData((prevState) => ({
        ...prevState,
        excerpt: value,
      }));
    }
  };

  const publish = async () => {
    setLoading(true);
    const url = process.env.NEXT_PUBLIC_API_URL || '';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
        body: formData,
      });
      if (response.ok) {
        console.log('Published');
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await publish();
  };

  return (
    <div className='h-full py-14 px-4'>
      <section className='max-w-screen-md mx-auto mb-10'>
        <div className='shadow-md grid grid-cols-2 rounded-md bg-accent/80 text-main p-2'>
          <button
            type='button'
            onClick={() => setView('write')}
            className={`p-2 rounded-md transition duration-300 ${
              view === 'write' ? 'bg-main text-accent' : ''
            }`}
          >
            Write
          </button>
          <button
            type='button'
            onClick={() => setView('preview')}
            className={`p-2 rounded-md transition duration-300 ${
              view === 'preview' ? 'bg-main text-accent' : ''
            }`}
          >
            Preview
          </button>
        </div>
      </section>
      <div className='max-w-screen-md mx-auto bg-main shadow-md rounded-md p-4 lg:py-10 lg:px-8 min-h-[80vh]'>
        {view === 'write' ? (
          <div className='w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='title'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Title
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={eventData.title}
                  onChange={handleChange}
                  placeholder='Enter your article title'
                  aria-describedby='title-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='details'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Details
                </label>
                <input
                  type='text'
                  id='details'
                  name='excerpt'
                  value={eventData.details}
                  onChange={handleChange}
                  placeholder='Enter a brief description of your article avoid special characters'
                  aria-describedby='excerpt-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='date'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Date
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={eventData.date}
                  onChange={handleChange}
                  placeholder='Enter a brief description of your article avoid special characters'
                  aria-describedby='excerpt-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='time'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Time
                </label>
                <input
                  type='time'
                  id='time'
                  name='time'
                  value={eventData.time}
                  onChange={handleChange}
                  placeholder='Enter a brief description of your article avoid special characters'
                  aria-describedby='excerpt-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='location'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Location
                </label>
                <input
                  type='location'
                  id='location'
                  name='location'
                  value={eventData.location}
                  onChange={handleChange}
                  placeholder='Enter a brief description of your article avoid special characters'
                  aria-describedby='excerpt-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <button
                type='submit'
                className='bg-accent flex gap-2 text-white p-3 rounded mt-8'
              >
                {loading ? 'Posting...' : 'Post'}
              </button>
            </form>
          </div>
        ) : (
          <Event
            title={eventData.title}
            details={eventData.details}
            date={eventData.date}
            location={eventData.location}
            cover=''
            time=''
          />
        )}
      </div>
    </div>
  );
}

export default CreateEvent;
