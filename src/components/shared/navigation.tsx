'use client';
import Image from 'next/image';
import dark_logo from '../../../public/icons/logo-black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Hamburger from '../ui/hamburger';
import { navbarLinks } from '@/constants';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  // console.log(pathname.split('/'))

  return (
    <>
      <Link
        href='#content'
        className='fixed top-2 z-10  p-4 bg-accent text-main outline-accent outline-2 focus-visible:outline-dashed -translate-x-full focus-visible:translate-x-0 transition duration-300'
      >
        Skip to Main Content
      </Link>
      <header className='grid grid-cols-[auto,_auto] lg:flex justify-between items-center bg-main border-b-hover border-b py-4 px-6 md:px-8 lg:px-20 max-w-[90rem] mx-auto'>
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
          <motion.ul
            id='navbar-menu'
            className={`max-lg:min-h-screen flex flex-col gap-6 min-w-full py-20 px-8 max-lg:absolute top-0 z-50 text-main bg-accent/90 backdrop-blur-md ${
              isOpen ? 'left-0' : '-left-full'
            } lg:flex-row md:justify-evenly lg:gap-10 lg:bg-transparent lg:text-accent lg:p-0 text-lg font-medium transition duration-300`}
          >
            {navbarLinks.map((link, index) => (
              <motion.li
                key={link.route}
                className={`relative after:absolute after:bg-main after:w-1 after:h-full after:-left-2 after:top-0 after:scale-y-0 after:origin-bottom md:after:bg-accent lg:after:h-0.5 lg:after:w-1/2 lg:after:top-auto lg:after:bottom-0 lg:after:left-0 lg:after:scale-y-100 md:after:scale-x-0 lg:after:origin-right lg:hover:after:scale-x-100 lg:hover:after:origin-left ${
                  pathname === link.route &&
                  'after:scale-y-100 lg:after:scale-x-100'
                } transition  after:transition after:duration-300`}
              >
                <Link
                  href={link.route}
                  className='outline-2 focus-visible:outline-dashed uppercase text-sm font-medium'
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
