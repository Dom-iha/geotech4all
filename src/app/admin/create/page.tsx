'use client';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [formData, setFormData] = useState<FormData>();
  const [value, setValue] = useState();

  const publish = async () => {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Published');
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await publish();
  };

  const modules = {
   toolbar: [
     [{ 'header': [1, 2, 3, 4, false]}], 
     [{size: []}],
     [{font: []}],
     ['bold', 'italic', 'underline','strike', 'blockquote'],
     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
     ['link', 'image'],
     ['clean']
   ],
 }

  return (
    <div className='min-h-[92vh] bg-gray-50 py-14 px-4'>
      <div className='max-w-screen-md mx-auto bg-main shadow-md p-4 lg:p-8 '>
        <h1 className='font-bold text-2xl lg:text-4xl lg:mb-5'>New Post</h1>
        <div className='w-full'>
          <form
            action='POST'
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
          >
            <div>
              <label htmlFor='cover' className='block mb-2'>
                Cover image
              </label>
              <input
                type='file'
                id='cover'
                name='cover'
                className='w-full p-2 rounded h-40 border-accent border-2'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='title' className='block mb-2'>
                Title
              </label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Enter your article title'
                aria-describedby='title-error'
                className='placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='excerpt' className='block mb-2'>
                Excerpt
              </label>
              <input
                type='text'
                id='excerpt'
                name='excerpt'
                placeholder='Enter a breif description of your article'
                aria-describedby='excerpt-error'
                className='placeholder:text-transparent border-accent border-2 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-dashed py-3 pl-3 pr-10 w-full'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='body' className='block mb-2'>
                Content
              </label>
              <ReactQuill
                theme='snow'
                className=' focus-within:outline-2 focus-within:outline-dashed'
                value={value}
               //  onChange={setValue}
                modules={modules}
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded'
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
