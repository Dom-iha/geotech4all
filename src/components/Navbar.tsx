'use client';
import Image from 'next/image';
import logo from '../../public/assets/icons/logo-black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className='bg-white shadow-sm px-4 md:px-6 max-w-[90rem] mx-auto'>
      <nav className='relative flex justify-between items-center'>
        <div>
          <Link href='/' className='flex items-center justify-between h-16'>
            <Image src={logo} alt='geotech4all logo' />
          </Link>
        </div>
        <ul className='flex justify-evenly'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/geohub'>GeoscienceHub</Link>
          </li>
          <li className='p-4'>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
