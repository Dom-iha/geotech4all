const Gallery: React.FC = () => {
  return (
    <>
      <section className='px-24 py-14'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-8xl text-center font-bold'>Gallery</h1>
          <p className='text-center mt-4 text-2xl max-w-[900px] font-medium'>
            Explore memorable moments from our events and journey so far
          </p>
          <button
            type='button'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-3 border-accent w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-main text-lg relative z-10 group-hover:text-accent duration-500'>
              Let&apos;s go
            </span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
