import Image from 'next/image';
import reporter from '../../../public/assets/images/reporter.png';
import events from '../../../public/assets/images/events.png';
import darwin from '../../../public/assets/images/darwin.png';
import catastrophism from '../../../public/assets/images/catastrophism.png';
import fauna from '../../../public/assets/images/fauna.png';
import keytopast from '../../../public/assets/images/keytopast.png';
import africa from '../../../public/assets/images/africa.png';
import geotextile from '../../../public/assets/images/geotextile.png';
import Link from 'next/link';

function Geohub() {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 py-2'>
        <div className='news-hero  relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <p className='pt-6 ml-8 lg:ml-10 font-medium text-lg text-main'>
            News Flash
          </p>
          <div className='flex flex-col justify-end max-w-[609px] max-lg:p-8 lg:ml-[50px] lg:pb-8 h-[80vh]'>
            <h1 className='text-main text-2xl lg:text-5xl font-bold mb-3'>
              2023 Nigeria Infrastructural Budget: A Comparative Analysis
            </h1>
            <p className='max-w-[575px] text-main text-lg lg:text-2xl mb-6'>
            Nigeria&amp;s 2023 budget, recently approved by the federal government, allocates a significant portion to infrastructure development...
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-main w-fit rounded-md'
            >
              <span className='uppercase tracking-widest font-medium text-accent lg:text-lg relative z-10 group-hover:text-main duration-500'>
                Read More
              </span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:-translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-main duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
              <span className='absolute delay-300 top-0 left-0 w-full bg-main duration-500 group-hover:translate-y-full h-full'></span>
            </button>
          </div>
        </div>
      </section>
      {/* Headlines section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Headlines</h2>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8'>
          <li className='flex max-md:flex-col gap-4'>
            <Image
              src={reporter}
              alt='Close up on reporter taking an interview'
            />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc molestie phasellus
                integer id risus est egestas.
              </p>
              <button
                type='button'
                className='w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
              >
                Full Story
              </button>
            </div>
          </li>
          <li className='flex max-md:flex-col gap-4 w-fit'>
            <Image
              src={reporter}
              alt='Close up on reporter taking an interview'
            />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc molestie phasellus
                integer id risus est egestas.
              </p>
              <button
                type='button'
                className='w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
              >
                Full Story
              </button>
            </div>
          </li>
        </ul>
      </section>
      {/* Articles section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Articles</h2>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-8'>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={darwin}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                Evolution: What if Darwin’s was wrong?
                </p>
                <p>
                  The difference between right and wrong is a function of perspective.
                  Now, what do you think an agnostic would tell you about God and the exact origin of life? 
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={catastrophism}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                  CATASTROPHISM: Plant, Animal, and Human
                </p>
                <p>
                  At the onset of the quest of humans to know more about the earth. Many ideas, theories, and philosophies have sprung up to explain the origin of the earth...
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={fauna}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                  Beyond Faunal succession: What&amp;s life Morphing to?
                </p>
                <p>
                  As species become complex up the strata, so does generation become more complex with increasing knowledge and technological advancement...
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={keytopast}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                  The Present is the Key to the Past. What is the Key to the future?
                </p>
                <p>
                  The past was the present. The present was the future. And the future is the present.
                  Let&amp;s view Charles Lyell and James Hutton Earth principle through...
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={africa}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                  AFRICA VS THE WORLD: THE BATTLE FOR POWER AND...
                </p>
                <p>
                  Africa is the world&amp;s second-largest continent, covering approximately 30 million square kilometers and comprising 54 countries. Africa is home to a diverse range of...
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
          <li className='shadow-md w-fit rounded-md'>
            <Link href={''} className='flex flex-col gap-4'>
              <Image
                src={geotextile}
                alt='Grayscale shot of rock slide'
                className='rounded-t-md'
              />
              <div className='flex flex-col gap-2 max-w-[400px] px-4 lg:px-6 pb-4'>
                <p className='font-bold text-lg lg:text-xl'>
                  Importance of geotextile in geotechnical industry
                </p>
                <p>
                  Geotextile is a synthetic fabric made of polypropylene, polyethylene or a combination of both that is used in various geotechnical applications. The...
                </p>
                <div className='flex justify-between'>
                  <p className='mt-8 text-sm font-bold'>Geotech4all</p>
                  <p className='mt-8 text-sm font-bold'>July 2nd, 2024</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </section>
      {/* Events slider section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Events</h2>
        <div>
          <ul className='flex gap-8 max-lg:flex-wrap'>
            <li className='flex flex-col lg:flex-row gap-4 w-[590px]'>
              <Image
                src={events}
                alt='Close up on reporter taking an interview'
                className='rounded-md max-lg:w-full'
              />
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-xl'>Geohub spotlight</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ac purus
                  scelerisque enim amet convallis tristique mauris.
                </p>
                <button
                  type='button'
                  className='w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
                >
                  Set Reminder
                </button>
              </div>
            </li>
            <li className='flex flex-col lg:flex-row gap-4 w-[590px]'>
              <Image
                src={events}
                alt='Close up on reporter taking an interview'
                className='rounded-md max-lg:w-full'
              />
              <div className='flex flex-col gap-2'>
                <p className='font-bold text-xl'>Geohub spotlight</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lorem ac purus
                  scelerisque enim amet convallis tristique mauris.
                </p>
                <button
                  type='button'
                  className='w-full rounded-md p-3 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
                >
                  Set Reminder
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Opportunities advert */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h1 className='text-4xl font-bold mb-8'>Internship</h1>
        <div className='internship h-[25rem] relative rounded-md after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <div className='grid place-items-center content-center h-full'>
            <p className='max-w-[575px] text-main text-center lg:text-2xl mb-6'>
              Looking for an internship position in a geoscience firm? Check
              firms you can apply to as a prospective intern
            </p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-main w-fit rounded-md'
            >
              <span className='tracking-widest font-medium text-accent lg:text-lg relative z-10 group-hover:text-main duration-500'>
                View Opportunities
              </span>
              <span className='absolute top-0 left-0 w-full bg-main duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Geohub;
