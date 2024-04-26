import Image from 'next/image';
import dark_logo from '../../../public/assets/icons/logo-black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Hamburger from '../ui/hamburger';

const AdminNav: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <>
      <header className='sticky top-0 flex justify-center items-center border-b bg-main py-4 px-6 md:px-8 lg:px-24 max-w-[90rem] mx-auto'>
        <div>
          <Link href='/'>
            <Image
              src={dark_logo}
              alt='geotech4all logo'
              className='w-[150px] max-h-[27px]'
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default AdminNav;
