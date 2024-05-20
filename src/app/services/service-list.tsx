'use client';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Services } from '@/constants';
import { motion } from 'framer-motion';

function ServiceList() {
  return (
    <section id='services' className='px-6 md:px-8 lg:px-24 py-14'>
      <h2 className='text-2xl lg:text-4xl font-bold mb-16'>Our Services</h2>
      <motion.ul
        layout
        className='grid gap-8 lg:gap-32 mt-5 grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]'
      >
        {Services.map((service) => (
          <motion.li
            layout
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={service.name}
            className='grid gap-4 lg:gap-8'
          >
            <h3 className='text-xl lg:text-2xl font-semibold'>
              {service.name}
            </h3>
            <p className='lg:text-xl'>{service.description}</p>
            <Link
              href={`/services/${service.route}`}
              className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
            >
              Details
              <ArrowRightIcon aria-hidden='true' />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default ServiceList;
