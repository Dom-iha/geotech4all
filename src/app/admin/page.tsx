import { auth, currentUser } from '@clerk/nextjs';
import  Link  from 'next/link';

async function Dashboard() {
  // const { userId } = auth();
  // const user = await currentUser();

  return (
    <div className='h-full grid bg-alt w-full'>
      <section className='px-6 md:px-8 lg:px-24 py-14 gap-10'>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(15rem,_25rem))] gap-8 justify-center w-full max-w-screen-d h-full m-auto'>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href={''} className='p-4'>
              new article
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href={''} className='p-4'>
              new event
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href={''} className='p-4'>
              new opportunity
            </Link>
          </li>
          <li className=' shadow-md rounded-lg bg-main min-h-20 grid place-content-center hover:border-accent hover:border transition duration-300'>
            <Link href={''} className='p-4'>
              new headline
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
