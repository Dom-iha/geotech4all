'use client';
import Image from 'next/image';
import dark_logo from '../../../public/assets/icons/logo-black.png';
// import white_logo from '../../public/assets/icons/logo-white.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileToggle from '../MobileToggle';
import AdminNav from './AdminNav';
import MainNav from './MainNav';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // let logo = isOpen ? white_logo : dark_logo;
  const adminPages = pathname.includes('/admin');

  return <>{adminPages ? <AdminNav /> : <MainNav />}</>;
};

export default Navbar;
