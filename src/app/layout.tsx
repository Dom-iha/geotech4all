import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from 'sonner';
import Footer from '@/components/shared/main-footer';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from './config/site';
import Navigation from '@/components/shared/navigation';
import BackToTop from '@/components/shared/back-to-top';

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
    <ClerkProvider>
      <html lang='en'>
        <Analytics />
        <body className={montserrat.className}>
          <Toaster />
          <Navigation />
          <main id='content' className='max-w-[90rem] mx-auto'>
            {children}
          </main>
          <BackToTop />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
