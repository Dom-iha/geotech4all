import Image from 'next/image';
import geohub from '../../../public/icons/geohub.jpg';
import Link from 'next/link';
import { Metadata } from 'next';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import data from '@/data/data.json';
import Product from '@/components/cards/product';
import ServiceList from './service-list';

export const metadata: Metadata = {
  title: 'Services',
};
const Services: React.FC = () => {
  return (
    <>
      <section className='px-6 md:px-8 py-10 min-h-[calc(100vh-60px)] grid place-content-center'>
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-10 justify-center items-center'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold'>
            Tailor-made solutions for your geoscience needs
          </h1>
          <p className='text-center lg:mt-4 text-xl lg:text-2xl max-w-[900px]'>
            From enterprises to academia – we help the community solve geo
            problems.
          </p>
          <Link
            href='#services'
            className='h-16 w-16 lg:w-20 lg:h-20 grid place-items-center border-accent border-dashed border rounded-full'
          >
            <DoubleArrowDownIcon className='down-arrow' />
          </Link>
        </div>
      </section>
      
      <ServiceList />

      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <h2 className='text-2xl lg:text-4xl font-bold mb-16'>Products</h2>
        <ul className='grid gap-8 lg:gap-10 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'>
          {data.products.slice(0, 3).map((product) => (
            <Product
              key={product.name}
              name={product.name}
              cover={product.cover}
              description={product.description}
              availability={product.availability}
            />
          ))}
        </ul>
      </section>
      <section className='px-6 md:px-8 lg:px-24 py-14'>
        <div>
          <h3 className='text-2xl lg:text-4xl font-bold mb-10'>Powered by</h3>
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Image src={geohub} alt='partners log' className='w-[150px]' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
