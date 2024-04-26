import { PenBox, PlusCircle } from 'lucide-react';
import Link from 'next/link';

function page() {
  return (
    <div className='h-full grid bg-alt w-full'>
      <section className='px-6 md:px-8 lg:px-24 py-14 gap-10'>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(15rem,_25rem))] gap-8 justify-center w-full max-w-screen-d h-full m-auto'>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href='./create/article' className='p-4 flex gap-1'>
              <PenBox /> <span>Article</span>
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href='./create/event' className='p-4 flex gap-1'>
              <PlusCircle /> <span>Event</span>
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href='./create/opportunity' className='p-4 flex gap-1'>
              <PlusCircle /> <span>opportunity</span>
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href='./create/article' className='p-4 flex gap-1'>
              <PenBox /> <span>Headline</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default page;
