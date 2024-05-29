import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import ImageSlider from '@/components/ui/image-slider';
import training_1 from '../../../../public/images/training-1.jpg';
import training_2 from '../../../../public/images/training-2.jpg';
import training_3 from '../../../../public/images/training-3.jpg';
import training_4 from '../../../../public/images/training-4.jpg';
import meetup_1 from '../../../../public/images/meetup-1.jpg';
import meetup_2 from '../../../../public/images/meetup-2.jpg';
import meetup_3 from '../../../../public/images/meetup-3.jpg';
import meetup_4 from '../../../../public/images/meetup-4.jpg';
import ScrollLink from '@/components/ui/scroll-link';

export const metadata: Metadata = {
  title: 'Gallery',
  openGraph: {
    description: 'Explore moments from our journey so far',
  },
};

const Gallery: React.FC = () => {
  const trainingImages = [training_1, training_2, training_3, training_4];
  const meetupImages = [meetup_1, meetup_2, meetup_3, meetup_4];

  return (
    <>
      <section className='px-6 md:px-8 lg:px-20 min-h-[calc(100vh-60px)] grid place-content-center '>
        <div className='flex flex-col gap-4 lg:gap-10 justify-center items-center'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold max-w-prose mx-auto'>
            Explore moments from our journey so far
          </h1>
          <ScrollLink target='showcase' />
        </div>
      </section>
      <section id='showcase' className='px-6 lg:px-20 py-14 '>
        <div className='pb-5 lg:py-10'>
          <h2 className='font-bold text-2xl lg:text-3xl mb-5'>Trainings</h2>
          <div className='flex max-lg:flex-col gap-8 justify-between'>
            <div className='relative'>
              <ImageSlider content={trainingImages} />
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
              <ImageSlider content={meetupImages} />
              <div
                aria-hidden='true'
                className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-accent w-full h-full'
              ></div>
            </div>
            <div className='flex flex-col gap-5 justify-center'>
              <p className='font-bold text-xl lg:text-2xl'>Monthly meetups</p>
              <p className='max-w-[500px] font-medium lg:text-2xl'>
                Our monthly meetups are a great way to connect with other
                members of the community, share ideas and learn from each other.
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
              <ImageSlider content={meetupImages} />
              <div
                aria-hidden='true'
                className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-accent w-full h-full'
              ></div>
            </div>
            <div className='flex flex-col gap-5 justify-center'>
              <p className='font-bold text-xl lg:text-2xl'>Drainage cleanup</p>
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
      </section>
    </>
  );
};

export default Gallery;
