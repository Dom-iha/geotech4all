import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geotech4All',
  description:
    'A community that specializes in everything geoscience. News, articles, webinars, conferences, podcasts etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Navbar />
        <main id='content' className='max-w-[90rem] mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
