import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from 'sonner';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Geotech4All',
    template: '%s - Geotech4All',
  },
  description:
    'A community that specializes in everything geoscience. News, articles, webinars, conferences, podcasts etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <Analytics />
        <body className={montserrat.className}>
          <Toaster />
          <Navbar />
          <main id='content' className='max-w-[90rem] mx-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
