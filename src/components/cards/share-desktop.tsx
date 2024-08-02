'use client';
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Facebook, LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

function ShareDesktop({ title }: { title: string }) {
  const baseUrl = 'https://www.geotech4all.com';
  const pathname = usePathname();

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Copied to clipboard', { position: 'top-right' });
  }

  const tweetText = encodeURIComponent(`${title} via @geotech4all`);
  const pageUrl = encodeURIComponent(`${baseUrl}${pathname}`);

  return (
    <div className='w-fit lg:sticky top-0 hidden lg:flex flex-col gap-4 rounded-lg py-4'>
      {/* <p className='font-semibold lg:textlg'>Share</p> */}
      <ul className='flex gap-6 flex-col'>
        <li>
          <Link
            href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${pageUrl}`}
            target='_blank'
            className='w-fit border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <TwitterLogoIcon className='w-6 h-6' />
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target='_blank'
            className='w-fit border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <Facebook className='w-6 h-6' />
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
            target='_blank'
            className='w-fit border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <LinkedInLogoIcon className='w-6 h-6' />
          </Link>
        </li>
        <li>
          <button
            type='button'
            title='share'
            onClick={copyLink}
            className='border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <LinkIcon className='w-6 h-6' />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ShareDesktop;
