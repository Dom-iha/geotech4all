import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import ImageSlider from '@/components/ui/image-slider';
import ScrollLink from '@/components/ui/scroll-link';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export const metadata: Metadata = {
  title: 'Gallery',
  openGraph: {
    description: 'Explore moments from our journey so far',
  },
};

const Gallery: React.FC = () => {
  const trainingImages = [
    '/images/training-1.jpg',
    '/images/training-2.jpg',
    '/images/training-3.jpg',
    '/images/training-4.jpg',
  ];
  const meetupImages = [
    '/images/meetup-1.jpg',
    '/images/meetup-2.jpg',
    '/images/meetup-3.jpg',
    '/images/meetup-4.jpg',
  ];

  return (
    <>
      <section className='min-h-[calc(100vh-60px)] grid place-content-center'>
        <MaxWidthWrapper>
          <div className='flex flex-col gap-4 lg:gap-10 justify-center items-center'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold max-w-prose mx-auto'>
              Explore moments from our journey so far
            </h1>
            <ScrollLink target='showcase' />
          </div>
        </MaxWidthWrapper>
      </section>

      <section id='showcase' className='py-14'>
        <MaxWidthWrapper>
          <div className='pb-5 lg:py-10'>
            <h2 className='font-bold text-2xl lg:text-3xl mb-5'>Trainings</h2>
            <div className='flex max-lg:flex-col gap-8 justify-between'>
              <div className='relative'>
                <ImageSlider images={trainingImages} />
                <div
                  aria-hidden='true'
                  className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-accent w-full h-full'
                ></div>
              </div>
              <div className='flex flex-col gap-5 justify-center'>
                <p className='font-bold text-xl lg:text-2xl'>Gis classes</p>
                <p className='max-w-[500px] font-medium lg:text-2xl'>
                  Our GIS classes are designed to help you learn the basics of
                  Geographic Information Systems and how to apply them to your
                  field of study.
                </p>
                <Link
                  href='https://x.com/geotech4all'
                  className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
                >
                  More
                  <ArrowRightIcon aria-hidden='true' />
                </Link>
              </div>
            </div>
          </div>
          <div className='pb-5 lg:py-10'>
            <h2 className='font-bold text-2xl lg:text-3xl mb-5'>Meetups</h2>
            <div className='flex max-lg:flex-col gap-8 justify-between'>
              <div className='relative'>
                <ImageSlider images={meetupImages} />
                <div
                  aria-hidden='true'
                  className='absolute top-2 -left-2.2 rounded-lg border-dashed border border-focus w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-5 justify-center'>
                <p className='font-bold text-xl lg:text-2xl'>Monthly meetups</p>
                <p className='max-w-[500px] font-medium lg:text-2xl'>
                  Our monthly meetups are a great way to connect with other
                  members of the community, share ideas and learn from each
                  other.
                </p>
                <Link
                  href='https://x.com/geotech4all'
                  className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
                >
                  More
                  <ArrowRightIcon aria-hidden='true' />
                </Link>
              </div>
            </div>
          </div>
          <div className='pb-5 lg:py-10'>
            <h2 className='font-bold text-2xl lg:text-3xl mb-5'>
              Community Service
            </h2>
            <div className='flex max-lg:flex-col gap-8 justify-between'>
              <div className='relative'>
                <ImageSlider images={meetupImages} />
                <div
                  aria-hidden='true'
                  className='absolute top-2 -left-2.2 rounded-lg border-dashed border border-focus w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-5 justify-center'>
                <p className='font-bold text-xl lg:text-2xl'>
                  Drainage cleanup
                </p>
                <p className='max-w-[500px] font-medium lg:text-2xl'>
                  We believe in giving back to the community and our drainage
                  cleanup events are a great way to do that.
                </p>
                <Link
                  href='https://x.com/geotech4all'
                  className='w-fit p-2 flex items-center justify-center font-semibold rounded-md gap-2 bg-accent text-main min-w-[8rem] hover:gap-4 focus-visible:gap-4 focus-visible:outline-accent outline-offset-1 outline-1 focus-visible:outline-dashed transition-all duration-300'
                >
                  More
                  <ArrowRightIcon aria-hidden='true' />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Gallery;
