import Image from 'next/image';
import geolab from '../../../public/assets/icons/geolab.svg';
import geoconsult from '../../../public/assets/icons/geoconsult.svg';
import researchHub from '../../../public/assets/icons/researchHub.svg';
import breccias from '../../../public/assets/icons/breccias.svg';

const Services: React.FC = () => {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-4xl lg:text-8xl text-center font-bold'>
            Tailor-made solutions for your geoscience needs
          </h1>
          <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
            From large enterprises to student projects – we help the community
            solve geo problems.
          </p>
          <button
            type='button'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-3 border-accent w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
              What do you need
            </span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
          </button>
        </div>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-3xl lg:text-5xl font-bold mb-16'>What we offer</h2>
        <ul className='grid gap-8 lg:gap-32 mt-5 grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]'>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Geological Services
            </h3>
            <p className='lg:text-xl'>
              From spatial analysis and Geochemical plots to production of
              various kinds of maps, a complete solution.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                I need this
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Project Writing Assistance
            </h3>
            <p className='lg:text-xl'>
              From spatial analysis and Geochemical plots to production of
              various kinds of maps, a complete solution.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                I need this
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Field Mapping</h3>
            <p className='lg:text-xl'>
              From spatial analysis and Geochemical plots to production of
              various kinds of maps, a complete solution.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                I need this
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </li>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>Training</h3>
            <p className='lg:text-xl'>
              Upskill your geoscience knowledge with any of our online
              geoscience software training.
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                I need this
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </li>
        </ul>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div>
          <h3 className='text-3xl lg:text-6xl font-bold mb-20'>Our Partners</h3>
          <ul className='grid grid-cols-2 gap-20'>
            <li>
              <Image src={geolab} alt='partners log' />
            </li>
            <li>
              <Image src={geoconsult} alt='partners log' />
            </li>
            <li>
              <Image src={researchHub} alt='partners log' />
            </li>
            <li>
              <Image src={breccias} alt='partners log' />
            </li>
          </ul>
        </div>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14 bg-accent'>
        <div className='flex flex-col gap-8 max-w-[600px] mx-auto'>
          <p className='text-main text-center text-xl font-semibold'>
            Stay up to date with what we&apos;re doing. Sign Up for newsletters,
            blog posts and services updates
          </p>
          <form className='flex gap-4 justify-center'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email address'
              autoComplete='off'
              className='px-4 w-full rounded-md outline-main outline-offset-4 outline-2 focus:outline-dashed'
            />
            <button
              type='button'
              className='w-fit rounded-md py-3 px-4 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Services;
