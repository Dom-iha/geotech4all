'use client';
import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '../../../public/assets/icons/footer-logo.png';
import { Facebook, Linkedin, Twitter } from '../Icons';
import { usePathname } from 'next/navigation';
import Newsletter from './newsletter-form';
import { Instagram, Mail, PhoneCall, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const authPages =
    pathname.includes('/sign-up') || pathname.includes('/sign-in');

  const adminPages = pathname.includes('/admin');

  return (
    <>
      {!authPages && !adminPages && (
        <footer className='max-w-[90rem] mx-auto bg-accent px-8 lg:px-24 py-16 text-main'>
          <Newsletter />
          <div className='footer grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-8'>
            <div className='flex flex-col justify-between max-sm:items-center'>
              <Link href='#'>
                <Image src={footer_logo} alt='logo' className='max-w-[150px]' />
              </Link>
              <p className='text-sm max-lg:hidden'>&#169; Geotech4all 2024</p>
            </div>
            <div>
              <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Resources</p>
              <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
                <li>
                  <Link href='/geohub/blog' className='hover:underline'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://youtube.com/geotech4all'
                    className='hover:underline'
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href='/geohub#events' className='hover:underline'>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href='/gallery' className='hover:underline'>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href='/admin' className='hover:underline'>
                    Staff
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Legal </p>
              <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
                <li>
                  <Link href='/terms' className='hover:underline'>
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href='/privacy' className='hover:underline'>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Contact</p>
              <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
                <li>
                  <Link
                    href='mailto:geotech4all@gmail.com'
                    className='hover:underline'
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link href='tel:+2348165789103' className='hover:underline'>
                    Call
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Social</p>
              <ul className='grid grid-cols-[repeat(3,_25px)] gap-5'>
                <li>
                  <Link
                    aria-label='Visit our Facebook page'
                    href='https://facebook.com/Geotech4all'
                    target='blank'
                  >
                    <Facebook aria-hidden='true' />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Visit our Twitter page'
                    href='https://x.com/Geotech4All'
                    target='blank'
                  >
                    <Twitter aria-hidden='true' />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Visit our LinkedIn page'
                    href='https://www.linkedin.com/company/geotech4all'
                  >
                    <Linkedin aria-hidden='true' />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Visit our LinkedIn page'
                    href='mailto:geotech4all@gmail.com'
                  >
                    <Instagram aria-hidden='true' />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Visit our LinkedIn page'
                    href='mailto:geotech4all@gmail.com'
                  >
                    <Mail aria-hidden='true' />
                  </Link>
                </li>
              </ul>
            </div>
            <p className='text-[10px] mt-3 lg:hidden'>
              &#169; {new Date().getFullYear()} Geotech4all
            </p>
          </div>
          <div className=' w-full p-2 mt-20 '>
            <ul className='ml-auto flex gap-4 justify-center lg:justify-end text-sm'>
              <li>
                <Link
                  className='hover:underline'
                  href='mailto:taqib.ibrahim@gmail.com'
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  className='hover:underline'
                  href='mailto:taqib.ibrahim@gmail.com'
                >
                  Report Issue
                </Link>
              </li>
            </ul>
            {/* <small className='flex gap-2 text-[10px]'>Built with <HeartIcon/> by <Link href={'https://www.linkedin.com/taqib-ibrahim'}> Taqib</Link></small> */}
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
