import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Notfound(): any {
  return (
    <section className='min-h-[calc(100vh-60px)] grid place-items-center'>
      <div className='flex flex-col gap-6 lg:gap-8 justify-center items-center h-full'>
        <h1 className='text-2xl lg:text-4xl text-center font-bold uppercase'>
          Oops!! Page not found
        </h1>
        <p className='text-center text-lg lg:text-xl max-w-[900px]'>
          The page you&apos;re looking for has either been removed or
          doesn&apos;t exist.
        </p>
        <Link
          href='/'
          className='mx-auto w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 border-2 border-accent hover:bg-hover outline-none min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:bg-hover transition-all duration-300'
        >
          <ArrowLeft aria-hidden='true' />
          Home
        </Link>
      </div>
    </section>
  );
}
