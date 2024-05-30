import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import data from '@/data/data.json';
import ServiceList from './service-list';
import { siteConfig } from '@/config/site';
import Product from '@/components/cards/product';
import geohub from '../../../../public/icons/geohub.jpg';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export const metadata: Metadata = {
  title: 'Services',
  openGraph: {
    description: 'Tailor-made solutions for your geoscience needs.',
    images: [
      {
        url: siteConfig.ogImage,
        width: '1200',
        height: '630',
        // alt: ''
      },
    ],
  },
};

const Services = () => {
  return (
    <>
      <section className='py-10 min-h-[calc(100vh-60px)] grid place-content-center'>
        <MaxWidthWrapper>
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
        </MaxWidthWrapper>
      </section>

      <ServiceList />

      <section className='py-14'>
        <MaxWidthWrapper>
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
        </MaxWidthWrapper>
      </section>

      <section className='py-14'>
        <MaxWidthWrapper>
          <h3 className='text-2xl lg:text-4xl font-bold mb-10'>Powered by</h3>
          <div className='grid grid-cols-2 gap-20'>
            <div>
              <Image src={geohub} alt='partners log' className='w-[150px]' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Services;
