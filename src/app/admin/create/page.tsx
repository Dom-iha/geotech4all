'use client';
import { useContext, useState } from 'react';
import TextEditor from '@/components/ui/text-editor';
import AuthContext from '@/context/AuthContext';
import { Upload } from 'lucide-react';

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
    <div className='min-h-[92vh] py-14 px-4'>
      <div className='max-w-[800px] mx-auto bg-main shadow-md p-4 lg:p-8 '>
        <section>
          <h1 className='text-center font-bold text-xl lg:text-2xl mb-5'>
            {view === 'write' ? 'New Post' : 'Preview'}
          </h1>
        </section>
        {view === 'write' ? (
          <div className='w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div>
                <input
                  type='file'
                  id='image'
                  name='cover'
                  onChange={(e) => handleImage(e.target.files)}
                  className='sr-only peer'
                />
                <label
                  htmlFor='image'
                  className='grid place-content-center w-full min-h-40 mb-5 border-accent border hover:cursor-pointer hover:border-dashed hover:bg-accent/10 peer-focus-visible:bg-accent/10 transition duration-300'
                >
                  <span className='flex flex-col gap-3 items-center'>
                    <Upload size={30} />
                    <span>
                      {imageName
                        ? 'Upload - ' + imageName
                        : 'Select image to upload'}
                    </span>
                  </span>
                </label>
              </div>
              <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 uppercase'>
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
                <label htmlFor='excerpt' className='block mb-2 uppercase'>
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
                  className='placeholder:text-transparent border-accent border focus-visible:border-transparent focus-visible:outline-1 focus-visible:outline-dashed p-3 w-full'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='content' className='block mb-2 uppercase'>
                  Content
                </label>
                <TextEditor
                  value={value}
                  onChange={handleEditorContentChange}
                />
              </div>
              <button
                type='submit'
                className='bg-accent flex gap-2 text-white p-3 rounded mt-8'
              >
                {loading ? 'Publishing...' : 'Publish'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className='text-4xl font-bold mb-8'>{articleData.title}</h2>
            <p>{articleData.excerpt}</p>
            {/* Tailwind removes list styles by default and it affects the article preview (FIX THIS) */}
            <div dangerouslySetInnerHTML={{ __html: value ? value : '' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateBlog;
