import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Opportunities',
};

function page() {
  return (
    <section className='px-6 md:px-8 lg:px-24 min-h-[85vh] grid place-items-center'>
      <div className='flex flex-col gap-6 lg:gap-10 justify-center items-center h-full'>
        <h1 className='text-3xl lg:text-8xl text-center font-bold mt-3 capitalize'>
          hi there friend
        </h1>
        <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
          Thanks for visiting but this page is currently under development. we
          hope to complete this soon so and can follow our socials to know when
          we do. for now you can check out our blog using the link below.
        </p>
        <Link
          href={`/geohub/blog`}
          className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
        >
          Blog
          <ArrowRightIcon aria-hidden='true' />
        </Link>
      </div>
    </section>
  );
}

export default page;
