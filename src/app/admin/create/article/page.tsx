'use client';
import { useContext, useState } from 'react';
import TextEditor from '@/components/ui/text-editor';
import AuthContext from '@/context/AuthContext';
import { Plane, Upload } from 'lucide-react';
import { ArticeType } from '@/types';
import Image from 'next/image';

function CreateBlog() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('write');
  const [error, setError] = useState<boolean | null>(null);
  const [value, setValue] = useState();
  const [articleData, setArticleData] = useState<ArticeType>({
    title: '',
    excerpt: '',
    image: '',
  });
  const [imageName, setImageName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const formData = new FormData();
  formData.append('title', articleData.title);
  formData.append('excerpt', articleData.excerpt);
  formData.append('image', articleData.image);
  formData.append('content', value!); // remove this. value is actually undefined by default

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

  const handleImage = (files: FileList | null) => {
    if (files && files[0]) {
      const selectedFile = files[0];
      console.log('Selected file:', selectedFile);

      setImageName(selectedFile.name);
      setSelectedImage(selectedFile ? URL.createObjectURL(selectedFile) : '');

      setArticleData((prevState) => ({
        ...prevState,
        image: selectedFile,
      }));
    }
  };

  const handleEditorContentChange = (content: any) => {
    setValue(content);
  };

  const publish = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
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
              <div>
                <input
                  type='file'
                  accept='image/*'
                  id='image'
                  name='cover'
                  onChange={(e) => handleImage(e.target.files)}
                  className='sr-only peer'
                />
                <label
                  htmlFor='image'
                  className='grid place-content-center w-full min-h-48 mb-5 rounded-md border-accent border hover:cursor-pointer hover:border-dashed hover:bg-accent/10 peer-focus-visible:bg-accent/10 transition duration-300'
                >
                  <span className='flex flex-col gap-3 items-center'>
                    <Upload size={30} />
                    <span>
                      {imageName ? imageName : 'Select image to upload'}
                    </span>
                  </span>
                </label>
              </div>
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
                  value={articleData.title}
                  onChange={handleChange}
                  placeholder='Enter your article title'
                  aria-describedby='title-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='excerpt'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Excerpt
                </label>
                <input
                  type='text'
                  id='excerpt'
                  name='excerpt'
                  value={articleData.excerpt}
                  onChange={handleChange}
                  placeholder='Enter a brief description of your article avoid special characters'
                  aria-describedby='excerpt-error'
                  className='placeholder:text-transparent rounded-md border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='content'
                  className='block mb-2 uppercase text-sm font-semibold'
                >
                  Content
                </label>
                <TextEditor
                  value={value}
                  onChange={handleEditorContentChange}
                />
              </div>
              <button
                type='submit'
                className='bg-accent flex gap-2 text-white px-8 py-3 rounded mt-8 ml-auto w-fit'
              >
                <Plane />
                <span>{loading ? 'Publishing...' : 'Publish'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold'>{articleData.title}</h2>
            <Image
              src={selectedImage}
              alt={imageName}
              width={600}
              height={250}
              className='w-full max-h-[400px] rounded-md'
            />
            <div className='flex items-center gap-3'>
              <Image
                src={''}
                alt={''}
                width={40}
                height={40}
                className='w-[20px] h-[20px]'
              />
              <div className='flex flex-col leading-4 font-semibold text-sm'>
                <p className=''>Geotech4All</p>
                <p className=''>Today</p>
              </div>
            </div>
            {/* Tailwind removes list styles by default and it affects the article preview (FIX THIS) */}
            <div dangerouslySetInnerHTML={{ __html: value ? value : '' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateBlog;
