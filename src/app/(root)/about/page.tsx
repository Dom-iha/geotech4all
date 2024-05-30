import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import data from '@/data/data.json';
import Member from '@/components/cards/member';
import { siteConfig } from '@/config/site';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import ScrollLink from '@/components/ui/scroll-link';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    description: 'Everything Geoscience',
    images: [
      {
        url: siteConfig.ogImage,
        width: '1200',
        height: '630',
        // alt: ''
      },
    ],
  },
};

function About() {
  return (
    <>
      <section className='min-h-[calc(100vh-60px)] grid place-content-center'>
        <MaxWidthWrapper>
          <div className='flex flex-col gap-4 md:gap-6 lg:gap-10 justify-center items-center h-full'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold'>
              Everything Geoscience
            </h1>
            {/* <p className='text-center lg:mt-4 text-xl lg:text-2xl max-w-[900px]'>
              Your go-to resource center for everything geoscience. We are a
              team of geoscientists committed to making geoscience knowledge and
              tools accessible to everyone.
            </p> */}
            <p className='text-center lg:mt-4 md:text-lg lg:text-2xl max-w-prose'>
              Geotech4All is a budding geoscience conglomerate that offers
              tailor-made services and intuitive solutions to both industry and
              academia. With the mantra, &quot;Everything Geoscience&quot;.
            </p>
            <ScrollLink target='info' />
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Info section */}
      <section id='info'>
        <MaxWidthWrapper className=''>
          <div className='flex py-16 flex-col max-w-prose'>
            <h2 className='text-lg lg:text-2xl font-bold mt-4'>
              Geotech4all is Your go-to resource center for everything
              geoscience.
            </h2>
            <p className='lg:mt-4 text-lg lg:text-2xl max-w-prose font-bold'>
              We are a team of geoscientists and tech enthusiasts committed to
              making geoscience knowledge and tools accessible to everyone
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-6 justify-between py-14'>
            <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
              <h2 className='text-lg lg:text-2xl font-bold mt-4'>
                The Problem
              </h2>
              <p className='mt-4 text-lg md:text-xl max-w-prose'>
                The geoscience community in nigeria is plagued by a lack of
                access to knowledge & tools, and a shortage of skilled
                professionals. This has led to a gap in the industry, and a lack
                of innovation in the field.
              </p>
            </div>
            <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
              <h2 className='text-lg lg:text-2xl font-bold mt-4'>
                Our Approach
              </h2>
              <p className='mt-4 text-lg md:text-xl max-w-prose '>
                We plan to bridge this gap by providing access to tools and
                resources to empower individuals and organizations with the
                skills and tools they need to succeed in the geoscience
                industry.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className='py-10'>
        <MaxWidthWrapper className='flex flex-col gap-8 md:gap-12 lg:gap-16 py-14'>
          {/* mission */}
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8'>
            <div className='relative w-fit mx-auto'>
              <Image
                src={'/images/mission.jpg'}
                width={500}
                height={300}
                alt='image by rawpixel.ccom on freepik'
                className='rounded-lg w-full relative z-10'
              />
              <div
                aria-hidden='true'
                className='absolute top-2 -left-2 rounded-lg border-dashed border border-focus w-full h-full'
              ></div>
            </div>
            <div className='flex flex-col justify-center text-center lg:text-left'>
              <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Mission</p>
              <p className='max-w-screen-md mx-auto lg:text-xl'>
                We are driven by the belief that geoscience holds the key to
                understanding our planet, and addressing global challenges.
              </p>
            </div>
          </div>
          {/* vision */}
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 lg:mt-8'>
            <div className='flex flex-col justify-center text-center lg:text-left'>
              <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Vision</p>
              <p className='max-w-screen-md mx-auto lg:text-xl'>
                To be the leading resource center for everything geoscience from
                knowledge, to practical application and solutions.
              </p>
            </div>
            <div className='relative w-fit mx-auto max-lg:row-[1]'>
              <Image
                src={'/images/vision.jpg'}
                width={500}
                height={300}
                alt='image by freepik'
                className='rounded-lg w-full relative z-10'
              />
              <div
                aria-hidden='true'
                className='absolute top-2 -left-2 rounded-lg border-dashed border border-focus w-full h-full'
              ></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* People section */}
      <section className='py-14'>
        <MaxWidthWrapper>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5'>Meet the team</h2>
          <article className='flex flex-col gap-8'>
            {data.team.map((member) => (
              <Member
                key={member.name}
                name={member.name}
                image={member.image}
                bio={member.bio}
                role={member.role}
              />
            ))}
          </article>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

export default About;
