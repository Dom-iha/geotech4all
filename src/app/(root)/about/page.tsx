import Member from '@/components/cards/member';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import ScrollLink from '@/components/ui/scroll-link';
import data from '@/data/data.json';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    description: 'Everything Geoscience',
  },
};

function About() {
  return (
    <>
      <section className='py-28 md:py-32 lg:py-40'>
        <MaxWidthWrapper>
          <div className='flex flex-col gap-4 md:gap-6 lg:gap-10 justify-center items-center h-full'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl text-center font-bold'>
              Everything Geoscience
            </h1>
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
        <MaxWidthWrapper className='pb-14'>
          <h2 className='font-bold text-2xl lg:text-4xl mb-5 lg:mb-8'>
            Meet the team
          </h2>
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
