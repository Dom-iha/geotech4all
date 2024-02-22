'use client';
import { ChangeEvent, useState } from 'react';
import TextEditor from '@/components/ui/TextEditor';

function CreateBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [value, setValue] = useState();
  const [articleData, setArticleData] = useState({
    title: '',
    excerpt: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setArticleData((prevState) => ({
        ...prevState,
        title: value,
      }));
    } else {
      setArticleData((prevState) => ({
        ...prevState,
        excerpt: value,
      }));
    }
  };

  const handleEditorContentChange = (content: any) => {
    setValue(content);
  };

  const publish = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
      if (response.ok) {
        console.log('Published');
        setSuccess(true);
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
    <div className='min-h-[92vh] bg-gray-50 py-14 px-4'>
      <div className='max-w-screen-md mx-auto bg-main shadow-md p-4 lg:p-8 '>
        <h1 className='font-bold text-2xl lg:text-4xl lg:mb-5'>New Post</h1>
        <div className='w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
              <label htmlFor='cover' className='block mb-2'>
                Cover image
              </label>
              <input
                type='file'
                id='cover'
                name='cover'
                className='w-full py-16 pl-16 lg:pl-60 rounded h-40 border-accent border hover:cursor-pointer focus-visible:border-transparent focus-visible:outline-dashed'
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
                value={articleData.title}
                onChange={handleChange}
                placeholder='Enter your article title'
                aria-describedby='title-error'
                className='placeholder:text-transparent border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
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
                value={articleData.excerpt}
                onChange={handleChange}
                placeholder='Enter a brief description of your article'
                aria-describedby='excerpt-error'
                className='placeholder:text-transparent border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='content' className='block mb-2'>
                Content
              </label>
              <TextEditor value={value} onChange={handleEditorContentChange} />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 rounded'
            >
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
