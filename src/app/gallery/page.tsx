const Gallery: React.FC = () => {
  return (
    <>
      <section className='px-6 lg:px-24 min-h-screen grid place-items-center'>
        <div className='flex flex-col gap-4 lg:gap-10 justify-center items-center'>
          <h1 className='text-3xl lg:text-8xl text-center font-bold'>
            Gallery
          </h1>
          <p className='text-center mt-4 text-2xl max-w-[900px] font-medium'>
            Explore memorable moments from our events and journey so far
          </p>
          <button
            type='button'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-3 border-accent w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
              Let&apos;s go
            </span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
          </button>
        </div>
      </section>
      <section className='px-6 lg:px-24 py-14 '>
        <div className='py-10'>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Trainings</h2>
          <div className='flex max-lg:flex-col gap-8 justify-between'>
            <div className='w-full h-[250px] lg:w-[500px] lg:h-[500px] bg-accent'></div>
            <div className='flex flex-col gap-5 justify-center'>
              <p className='font-bold text-2xl lg:text-4xl'>Gis class</p>
              <p className='max-w-[500px] font-medium lg:text-2xl'>
                We are driven by the belief that geoscience holds the key to
                understanding our planet, and addressing global challenges.
              </p>
              <button
                type='button'
                className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md'
              >
                <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                  More on our socials
                </span>
                <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
              </button>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Meetings</h2>
          <div className='flex max-lg:flex-col gap-8 justify-between'>
            <div className='w-full h-[250px] lg:w-[500px] lg:h-[500px] bg-accent'></div>
            <div className='flex flex-col gap-5 justify-center'>
              <p className='font-bold text-2xl lg:text-4xl'>Gis class</p>
              <p className='max-w-[500px] font-medium lg:text-2xl'>
                We are driven by the belief that geoscience holds the key to
                understanding our planet, and addressing global challenges.
              </p>
              <button
                type='button'
                className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md'
              >
                <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                  More on our socials
                </span>
                <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
              </button>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5'>
            Community Service
          </h2>
          <div className='flex max-lg:flex-col gap-8 justify-between'>
            <div className='w-full h-[250px] lg:w-[500px] lg:h-[500px] bg-accent'></div>
            <div className='flex flex-col gap-5 justify-center'>
              <p className='font-bold text-2xl lg:text-4xl'>Drainage cleanup</p>
              <p className='max-w-[500px] font-medium lg:text-2xl'>
                We are driven by the belief that geoscience holds the key to
                understanding our planet, and addressing global challenges.
              </p>
              <button
                type='button'
                className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md'
              >
                <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                  More on our socials
                </span>
                <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
