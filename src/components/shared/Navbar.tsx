'use client';
import { usePathname } from 'next/navigation';
import AdminNav from './AdminNav';
import MainNav from './MainNav';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const adminPages = pathname.includes('/admin');

  return <>{adminPages ? <AdminNav /> : <MainNav />}</>;
};

export default Navbar;
