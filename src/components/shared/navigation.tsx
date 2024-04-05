'use client';
import { usePathname } from 'next/navigation';
import AdminNav from './admin-nav';
import MainNav from './main-nav';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const adminPages = pathname.includes('/admin');

  return <>{adminPages ? <AdminNav /> : <MainNav />}</>;
};

export default Navigation;
