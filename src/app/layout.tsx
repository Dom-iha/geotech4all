import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import Footer from '@/components/shared/footer';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from './config/site';
import BackToTop from '@/components/shared/back-to-top';
import Navbar from '@/components/shared/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'Geology', 'Geophysics', 'University'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Analytics />
      <body className={montserrat.className}>
        <Toaster />
        <Navbar />
        <main id='content' className='max-w-[90rem] mx-auto'>
          {children}
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
