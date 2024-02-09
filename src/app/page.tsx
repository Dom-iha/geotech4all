'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import quarry from '../../public/assets/images/quarry.png';
import product from '../../public/assets/images/product.png';
import training from '../../public/assets/images/training.png';

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <section className='hero flex items-center min-h-[44.3125rem] text-main'>
        <div className='grid gap-8 ml-[108px] max-w-[686px]'>
          <h1 className='text-6xl font-bold mb'>Geoscience For All!</h1>
          <p className='font-medium text-3xl max-w-[654px]'>
            Empowering individuals and communities through
            accessible, impactful, and innovative geoscience solutions.
          </p>
          <button
            type='button'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-main w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-accent text-lg relative z-10 group-hover:text-main duration-500'>
              Learn How
            </span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-main duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-main duration-500 group-hover:translate-y-full h-full'></span>
          </button>
        </div>
      </section>
      <section className='px-24 py-14'>
        <h2 className='font-bold text-[40px] mb-[42px]'>News Flash</h2>
        <div className='flex gap-32'>
          <article className='flex flex-col gap-8'>
            <div>
              <div className='pl-4 relative'>
                <h3 className=' text-4xl font-bold mb-2.5 before:absolute before:bg-accent before:h-full before:w-2 before:top-0 before:left-0'>
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className='pl-4'>
                <p className='text-2xl'>
                  Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                  vehicula duis sollicitudin.
                </p>
              </div>
            </div>
            <div>
              <div className='pl-4'>
                <h3 className=' text-4xl font-bold mb-2.5'>
                  Eu nisl turpis dui vehicula duis sollicitudin.
                </h3>
              </div>
              <div className='pl-4'>
                <p className='text-2xl'>
                  Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                  vehicula duis sollicitudin.
                </p>
              </div>
            </div>
            <button
              type='button'
              className='cursor-pointer relative group overflow-hidden border-2 px-10 py-2 border-accent w-fit rounded-md'
            >
              <span className='uppercase tracking-widest font-medium text-main text-lg relative z-10 group-hover:text-accent duration-500'>
                Read More
              </span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
              <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
            </button>
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
      <section className='px-24 py-14'>
        <h2 className='text-4xl font-bold mb-[32px]'>Products</h2>
        <div>
          <ul className='flex gap-2 justify-between'>
            <li className='max-w-[334px] text-center'>
              <Image
                src={product}
                alt='Old vintage compass and travel instruments on ancient map'
                className='h-[264px] rounded-md'
              />
              <p className='font-bold text-3xl mt-2'>Eu nisl turpis dui.</p>
              <p className='text-[26px]'>
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
              <p className='font-bold text-3xl mt-2'>Eu nisl turpis dui.</p>
              <p className='text-[26px]'>
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
              <p className='font-bold text-3xl mt-2'>Eu nisl turpis dui.</p>
              <p className='text-[26px]'>
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
      </section>
      <section className='px-24 py-14'>
        <h2 className='text-4xl font-bold mb-[32px]'>Training Services</h2>
        <div className='p-4 flex gap-10'>
          <Image
            src={training}
            alt='Men looking at tablet medium shot'
            className='max-w-[565px]'
          />
          <div className='flex flex-col gap-6'>
            <h3 className=' text-4xl font-bold'>
              Eu nisl turpis dui vehicula duis sollicitudin.
            </h3>
            <p className='text-3xl max-w-[478px]'>
              Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
              vehicula duis sollicitudin.
            </p>
            <p className='text-4xl font-semibold'>Starting Date:</p>
            <button
              type='button'
              className='w-fit rounded-md px-8 py-2.5 bg-accent text-main border-2 hover:border-accent hover:bg-main hover:text-accent transition duration-300'
            >
              Register
            </button>
          </div>
        </div>
      </section>
      <section className='px-24 py-14'>
        <div className='community relative rounded-md flex flex-col gap-7 text-center justify-center items-center h-[393px] after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:rounded-md after:bg-accent/90 '>
          <h3 className='text-main text-4xl font-bold'>Join Our Community</h3>
          <p className='max-w-[934px] text-main text-2xl'>
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
