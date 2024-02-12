'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import quarry from '../../public/assets/images/quarry.png';
import product from '../../public/assets/images/product.png';
import training from '../../public/assets/images/training.png';
import Link from 'next/link';

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <section className='hero flex items-center min-h-screen text-main'>
        <div className='grid gap-4 lg:gap-8 lg:ml-[108px] max-sm:p-6 max-md:p-8 max-w-[686px]'>
          <h1 className='text-3xl lg:text-6xl font-bold mb'>
            Geoscience For All!
          </h1>
          <p className='font-medium text-lg lg:text-3xl lg:max-w-[654px]'>
            Empowering individuals and communities through
            accessible, impactful, and innovative geoscience solutions.
          </p>
          <Link
            href='/about'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-main w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-accent lg:text-lg relative z-10 group-hover:text-main duration-500'>
              Learn How
            </span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-main duration-500 group-hover:translate-y-full h-full'></span>
          </Link>
        </div>
      </section>
      {/* Training advert */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-[32px]'>
          Training Services
        </h2>
        <div className='lg:p-4 flex flex-col lg:flex-row gap-4 lg:gap-10'>
          <Image
            src={training}
            alt='Men looking at tablet medium shot'
            className='max-w-[565px] max-md:h-[264px] max-md:max-w-[320px]'
          />
          <div className='flex flex-col gap-3 lg:gap-6'>
            <h3 className='text-xl lg:text-4xl font-bold'>Learn ArcGis</h3>
            <p className='text-lg lg:text-3xl max-w-[478px]'>
              Join our next cohort on ArcGis fundamentals
            </p>
            <p className='text-md lg:text-3xl font-semibold'>Starts June</p>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-accent w-fit rounded-md'
            >
              <span className='tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Register
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </button>
          </div>
        </div>
      </section>
      {/* News flash */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='font-bold text-2xl lg:text-4xl mb-[42px]'>News Flash</h2>
        <div className='flex flex-col gap-8 md:flex-row lg:gap-32'>
          <article className='flex flex-col gap-8 max-lg:order-2'>
            <div>
              <div className='pl-4 relative'>
                <h3 className='text-lg lg:text-4xl font-bold mb-2.5 before:absolute before:bg-accent before:h-full before:w-2 before:top-0 before:left-0'>
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className='pl-4'>
                <p className='lg:text-2xl'>
                  Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                  vehicula duis sollicitudin.
                </p>
              </div>
            </div>
            <div>
              <div className='pl-4'>
                <h3 className='text-lg lg:text-4xl font-bold mb-2.5'>
                  Eu nisl turpis dui vehicula duis sollicitudin.
                </h3>
              </div>
              <div className='pl-4'>
                <p className='lg:text-2xl'>
                  Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                  vehicula duis sollicitudin.
                </p>
              </div>
            </div>
            <Link
              href='/geohub'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase tracking-widest font-medium text-main lg:text-lg relative z-10 group-hover:text-accent duration-500'>
                Read More
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-300 group-hover:translate-x-full h-full'></span>
            </Link>
          </article>
          <div>
            <Image
              src={quarry}
              alt='Male worker with bulldozer in sand quarry'
              className='rounded-md'
            />
          </div>
        </div>
      </section>
      {/* Products advert */}
      {/* <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-[32px]'>Products</h2>
        <div>
          <ul className='flex gap-2 flex-wrap justify-between'>
            <li className='max-w-[334px] text-center'>
              <Image
                src={product}
                alt='Old vintage compass and travel instruments on ancient map'
                className='h-[264px] rounded-md'
              />
              <p className='font-bold text-xl lg:text-3xl mt-2'>
                Eu nisl turpis dui.
              </p>
              <p className='text-lg lg:text-2xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button
                type='button'
                className='w-full rounded-md p-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
              >
                View
              </button>
            </li>
            <li className='max-w-[334px] text-center'>
              <Image
                src={product}
                alt='Old vintage compass and travel instruments on ancient map'
                className='h-[264px] rounded-md'
              />
              <p className='font-bold text-xl lg:text-3xl mt-2'>
                Eu nisl turpis dui.
              </p>
              <p className='text-lg lg:text-2xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button
                type='button'
                className='w-full rounded-md p-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
              >
                View
              </button>
            </li>
            <li className='max-w-[334px] text-center'>
              <Image
                src={product}
                alt='Old vintage compass and travel instruments on ancient map'
                className='h-[264px] rounded-md'
              />
              <p className='font-bold text-xl lg:text-3xl mt-2'>
                Eu nisl turpis dui.
              </p>
              <p className='text-lg lg:text-2xl'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button
                type='button'
                className='w-full rounded-md p-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
              >
                View
              </button>
            </li>
          </ul>
          <div className='flex justify-center mt-8'>
            <button
              type='button'
              className='rounded-md px-4 py-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
            >
              Load more products
            </button>
          </div>
        </div>
      </section> */}

      {/* COmmunity section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div className='community relative rounded-md flex flex-col gap-4 lg:gap-7 text-center justify-center items-center h-[393px] after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <h3 className='text-main text-2xl lg:text-4xl font-bold'>
            Join Our Community
          </h3>
          <p className='max-w-[934px] text-main text-lg lg:text-2xl'>
            Lorem ipsum dolor sit amet consectetur. Ut amet sed turpis augue
            blandit. Molestie ut libero eget feugiat enim. Eget risus
            consectetur enim placerat. Egestas ipsum quam vitae netus pulvinar
            diam.
          </p>
          <button
            type='button'
            className='w-fit rounded-md px-8 py-2.5 bg-main text-acceent border-2 hover:border-main hover:bg-transparent hover:text-main transition duration-300'
          >
            Join Now
          </button>
        </div>
      </section>
    </>
  );
}
