'use client';
import Image from 'next/image';
import dark_logo from '../../../public/assets/icons/logo-black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Hamburger from '../ui/hamburger';
import { navbarLinks } from '@/constants';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Link
        href='#content'
        className='fixed top-2 z-10  p-4 bg-accent text-main outline-accent outline-2 focus-visible:outline-dashed -translate-x-full focus-visible:translate-x-0 transition duration-300'
      >
        Skip to Main Content
      </Link>
      <header className='grid grid-cols-[auto,_auto] md:flex justify-between items-center bg-white shadow-sm py-4 px-6 md:px-8 lg:px-24 max-w-[90rem] mx-auto'>
        <div>
          <Link href='/'>
            <Image
              src={dark_logo}
              alt='geotech4all logo'
              className='w-[150px] max-h-[27px]'
            />
          </Link>
        </div>
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        <nav>
          <ul
            id='navbar-menu'
            className={`max-md:min-h-screen flex flex-col gap-6 min-w-full py-20 px-8 max-md:absolute top-0 z-20 text-main bg-accent/90 backdrop-blur-md ${
              isOpen ? 'left-0' : '-left-full'
            } md:flex-row md:justify-evenly md:gap-10 md:bg-transparent md:text-accent md:p-0 text-lg font-medium transition duration-300`}
          >
            {navbarLinks.map((link) => (
              <li
                key={link.route}
                className={`link ${
                  isOpen && 'max-md:animate-in'
                } relative after:absolute after:bg-main after:w-1 after:h-full after:-left-2 after:top-0 after:scale-y-0 after:origin-bottom md:after:bg-accent md:after:h-0.5 md:after:w-1/2 md:after:top-auto md:after:bottom-0 md:after:left-0 md:after:scale-y-100 md:after:scale-x-0 md:after:origin-right md:hover:after:scale-x-100 md:hover:after:origin-left ${
                  pathname === link.route &&
                  'after:scale-y-100 md:after:scale-x-100'
                } transition  after:transition after:duration-300`}
              >
                <Link
                  href={link.route}
                  className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
