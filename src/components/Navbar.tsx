'use client';
import Image from 'next/image';
import logo from '../../public/assets/icons/logo-black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className='flex bg-white shadow-sm py-4 px-4 md:px-24 max-w-[90rem] mx-auto'>
      <Link
        href='#main-content'
        className='fixed top-2 z-10  p-4 bg-accent text-main outline-main outline-2 focus-visible:outline-dashed -translate-y-20 focus-visible:translate-y-0 transition'
      >
        Skip to Main Content
      </Link>
      <div>
        <Link href='/'>
          <Image src={logo} alt='geotech4all logo' className='w-[150px]' />
        </Link>
      </div>
      <nav className='relative ml-auto flex items-center'>
        <ul className='flex justify-evenly md:gap-14 text-lg font-medium'>
          <li className={`relative after:absolute after:bg-accent after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left ${pathname === '/services' && 'after:scale-x-100'} transition  after:transition after:duration-300`}>
            <Link href='/services' className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'>
              services
            </Link>
          </li>
          <li className={`relative after:absolute after:bg-accent after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left ${pathname === '/geohub' && 'after:scale-x-100'} transition after:transition after:duration-300`}>
            <Link href='/geohub' className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'>
              geoscienceHub
            </Link>
          </li>
          <li className={`relative after:absolute after:bg-accent after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left ${pathname === '/gallery' && 'after:scale-x-100'} transition after:transition after:duration-300`}>
            <Link href='/gallery' className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'>
              gallery
            </Link>
          </li>
          <li className={`relative after:absolute after:bg-accent after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left ${pathname === '/about' && 'after:scale-x-100'} transition after:transition after:duration-300`}>
            <Link href='/about' className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'>
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
