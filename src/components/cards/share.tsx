'use client';
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Facebook, Link2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

function Share({ title }: { title: string }) {
  const baseUrl = 'https://www.geotech4all.com';
  const pathname = usePathname();

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Copied to clipboard', { position: 'top-right' });
  }

  const tweetText = encodeURIComponent(`${title} via @geotech4all`);
  const pageUrl = encodeURIComponent(`${baseUrl}${pathname}`);

  return (
    <div className='flex lg:hidden flex-col gap-4 border-focus border-dashed rounded-lg py-4'>
      <p className='font-semibold lg:textlg'>Share this</p>
      <ul className='flex gap-6'>
        <li>
          <Link
            href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${pageUrl}`}
            target='_blank'
            className='border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <TwitterLogoIcon className='w-6 h-6' />
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target='_blank'
            className='border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
          >
            <Facebook className='w-6 h-6' />
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
            target='_blank'
            className='border border-input rounded-md p-2 grid place-content-center hover:text-red-400 hover:border-red-400 transition-all duration-300'
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
            <Link2 className='w-6 h-6' />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Share;
