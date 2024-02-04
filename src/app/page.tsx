'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import quarry from '../../public/assets/images/quarry.png';
import product from '../../public/assets/images/product.png';

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <section className='hero flex items-center min-h-[43rem] text-white'>
        <div className='pl-4 pr-40'>
          <h1 className='text-[4rem] font-bold'>
            Geoscience For All: Join the Revolution, Shape the Future!
          </h1>
          <p>
            Empowering individuals and communities through
            accessible, impactful, and innovative geoscience solutions.
          </p>
          <button
            type='button'
            className='bg-white py-2 px-6 rounded-3xl text-black'
            // onClick={() => router.push('/about')}
          >
            Learn How
          </button>
        </div>
      </section>
      <section className='bg-gray-100 p-6'>
        <h2 className=''>News Flash</h2>
        <div className='flex'>
          <div className='flex flex-col gap-4'>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                vehicula duis sollicitudin.
              </p>
            </div>
            <div>
              <h3>Eu nisl turpis dui vehicula duis sollicitudin.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu nisl turpis dui
                vehicula duis sollicitudin.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={quarry}
              alt='Male worker with bulldozer in sand quarry'
            />
          </div>
        </div>
        <h2>Products</h2>
        <div>
          <ul className='flex gap-2 justify-between'>
            <li>
              <Image src={product} alt='Old vintage compass and travel instruments on ancient map'/>
            </li>
            <li>
              <Image src={product} alt='Old vintage compass and travel instruments on ancient map'/>
            </li>
            <li>
              <Image src={product} alt='Old vintage compass and travel instruments on ancient map'/>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
