import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '../../public/assets/icons/logo-white.png';
import { Facebook, Linkedin, Twitter } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className='max-w-[90rem] mx-auto bg-accent px-8 lg:px-24 py-14 text-main'>
      <div className='footer grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4'>
        <div className='flex flex-col justify-between max-sm:items-center'>
          <Link href='#'>
            <Image src={footer_logo} alt='logo' className='max-w-[150px]'/>
          </Link>
          <p className='text-sm max-lg:hidden'>&#169; Geotech4all 2024</p>
        </div>
        <div>
          <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Quick links</p>
          <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
            <li>
              <Link href='#' className='hover:underline'>
                Services
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Geohub
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Terms & Privacy </p>
          <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
            <li>
              <Link href='#' className='hover:underline'>
                Terms
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Contact Us</p>
          <ul className='flex flex-col gap-2.5 max-lg:text-sm'>
            <li>
              <Link href='mailto:geotech4all@gmail.com'>
                Email
              </Link>
            </li>
            <li>
              <Link href='mailto:geotech4all@gmail.com'>
                Call
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-semibold lg:text-xl mb-2 lg:mb-4'>Follow Us</p>
          <ul className='flex gap-5 max-lg:text-sm'>
            <li>
              <Link href='https://facebook.com/Geotech4all' target='blank'>
                <Facebook aria-hidden='true' />
                <span className='sr-only'>link to our facebook page</span>
              </Link>
            </li>
            <li>
              <Link href='https://x.com/Geotech4All' target='blank'>
                <Twitter aria-hidden='true' />
                <span className='sr-only'>link to our twitter page</span>
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/company/geotech4all'>
                <Linkedin aria-hidden='true' />
                <span className='sr-only'>link to our linkedin page</span>
              </Link>
            </li>
          </ul>
        </div>
        <p className='text-[10px] mt-3 lg:hidden'>&#169; Geotech4all 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
