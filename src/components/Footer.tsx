import Image from 'next/image';
import React from 'react';
import footer_logo from '../../public/assets/icons/Geotech4All-white.png';
import facebook from '../../public/assets/icons/facebook.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import linkedin from '../../public/assets/icons/linkedin.svg';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='max-w-[90rem] mx-auto bg-accent px-24 py-14 text-main'>
      <div className='footer grid grid-cols-4 gap-x-2'>
        <div className='flex flex-col justify-between'>
          <Link href='#'>
            <Image src={footer_logo} alt='logo' />
          </Link>
          <p className='text-sm '>&#169; Geotech4all 2024</p>
        </div>
        <div>
          <p className='font-semibold text-xl mb-4'>Quick links</p>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href='#' className='hover:underline'>Services</Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>Geohub</Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>Blog</Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-semibold text-xl mb-4'>Terms & Privacy </p>
          <ul className='flex flex-col gap-2.5'>
            <li>
              <Link href='#' className='hover:underline'>Terms</Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-semibold text-xl mb-4'>Follow Us</p>
          <ul className='flex gap-5'>
            <li>
              <Link href='https://facebook.com/Geotech4all/' target='blank'>
                <Image src={facebook} alt='link to our facebook page' />
              </Link>
            </li>
            <li>
              <Link href='#' target='blank'>
                <Image src={instagram} alt='link to our instagram page' />
              </Link>
            </li>
            <li>
              <Link href='https://x.com/Geotech4All' target='blank'>
                <Image src={twitter} alt='link to our twitter page' />
              </Link>
            </li>
            <li>
              <Link href='https://www.linkedin.com/company/geotech4all'>
                <Image src={linkedin} alt='link to our linkedin page' />
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
