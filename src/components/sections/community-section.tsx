import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from '../shared/max-width-wrapper';
import { ExternalLink } from 'lucide-react';

function CommunitySection() {
  return (
    <section className='py-14'>
      <MaxWidthWrapper>
        <div className='p-6 lg:pr-0 lg:py-12 lg:pl-12 flex flex-col xl:flex-row gap-10 items-center justify-between border border-focus border-dashed rounded-xl'>
          <div className='flex flex-col gap-6 lg:gap-8 text-center xl:text-left'>
            <h3 className=' text-2xl lg:text-4xl font-bold'>Community</h3>
            <p className=' max-w-prose md:text-lg lg:text-xl'>
              Join our community of like-minded individuals and professionals to
              share ideas, collaborate on projects, and learn from each other.
            </p>
            <Link
              href='https://chat.whatsapp.com/J7SblOAgAan7IrAsWAL3MC'
              target='_blank'
              className='w-fit flex gap-2 items-center rounded-md px-8 py-2.5 text-main bg-accent text-acceent transition duration-300 self-center xl:self-start'
            >
              Join us
              <ExternalLink size={16} />
            </Link>
          </div>
          <Image
            src='/images/community.jpg'
            alt='community image'
            width={500}
            height={300}
            className='rounded-l-lg hidden xl:block'
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default CommunitySection;
