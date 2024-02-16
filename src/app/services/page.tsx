import Image from 'next/image';
import geohub from '../../../public/assets/icons/geohub.jpg';

const Services: React.FC = () => {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-10 min-h-[85vh] grid place-items-center'>
        <div className='flex flex-col gap-6 lg:gap-10 justify-center items-center'>
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
        <ul className='grid gap-8 lg:gap-32 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'>
          <li className='grid gap-4 lg:gap-8'>
            <h3 className='text-xl lg:text-2xl font-semibold'>
              Geological Services
            </h3>
            <p className='lg:text-xl'>
              Our geological services encompass a wide range of expertise
              including geological mapping, mineral exploration, and site
              characterization.
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
              Project Writing
            </h3>
            <p className='lg:text-xl'>
              Our project writing services offer professional assistance in
              preparing high-quality project proposals, reports and research
              papers.
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
              Our field mapping services combine fieldwork expertise with
              advanced mapping technologies to facilitate accurate geological
              surveys.
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
              Software Training
            </h3>
            <p className='lg:text-xl'>
              Our software training programs provide hands-on instruction in popular geological software incliding ArcGis, Petrel and Surfer.
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
            <h3 className='text-xl lg:text-2xl font-semibold'>Equipment sales</h3>
            <p className='lg:text-xl'>
              We offer a comprehensive selection of high quality geological
              equipments to support fieldwork, research, and
              exploration activities.
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
              Geopysical survey
            </h3>
            <p className='lg:text-xl'>
              Our geophysical survey services utilize state-of-the-art equipment
              to conduct non-invasive subsurface investigations
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
          <h3 className='text-2xl lg:text-6xl font-bold mb-20'>
            Proudly sponsored by
          </h3>
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Image src={geohub} alt='partners log' className='w-[200px]'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
