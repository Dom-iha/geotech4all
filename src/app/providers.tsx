'use client';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import AuthProvider from '@/context/AuthProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      <main id='content' className='max-w-[90rem] mx-auto'>
        {children}
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default Providers;
