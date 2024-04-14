import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import data from '@/data/data.json';
import Member from '@/components/cards/member';
import mission from '../../../public/assets/images/mission.jpg';

export const metadata: Metadata = {
  title: 'About',
};

function About() {
  return (
    <>
      <section className='px-6 md:px-8 lg:px-24 min-h-[85vh] grid place-items-center'>
        <div className='flex flex-col gap-6 lg:gap-10 justify-center items-center h-full'>
          <h1 className='text-3xl lg:text-8xl text-center font-bold mt-3'>
            Everything Geoscience
          </h1>
          <p className='text-center mt-4 text-xl lg:text-2xl max-w-[900px]'>
            Your go-to resource center for everything geoscience. We are a team
            of geoscientists committed to making geoscience knowledge and tools
            accessible to everyone.
          </p>
          <Link
            href='#info'
            className='w-[60px] h-[60px] lg:h-[100px] lg:w-[100px]  grid place-items-center border-accent border-dashed border rounded-full'
          >
            <DoubleArrowDownIcon className='down-arrow' />
          </Link>
        </div>
      </section>
      <section id='info' className='p-6 md:px-8 lg:px-24'>
        {/* <Image
          src={
            'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt='an image of the night sky'
          width={100}
          height={100}
          className='w-full h-[50vh] rounded-lg block object-cover'
        /> */}
        <article className='flex flex-col md:flex-row gap-6 justify-between'>
          <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
            <h2 className='text-lg lg:text-2xl font-bold mt-4'>The Problem</h2>
            <p className='mt-4 text-xl lg:text-2xl max-w-[50ch]'>
              The geoscience industry is plagued by a lack of access to
              knowledge & tools, and a shortage of skilled professionals. This
              has led to a gap in the industry, and a lack of innovation in the
              field.
            </p>
          </div>
          <div className='flex flex-col gap-4 lg:gap-6 h-full max-w-[500px]'>
            <h2 className='text-lg lg:text-2xl font-bold mt-4'>Our Approach</h2>
            <p className='mt-4 text-xl lg:text-2xl max-w-[50ch] '>
              We plan to bridge this gap by providing access to tools and
              resources to empower individuals and organizations with the skills
              and tools they need to succeed in the geoscience industry.
            </p>
          </div>
        </article>
      </section>
      <section className='flex flex-col gap-8 lg:gap-20 px-6 md:px-8 lg:px-24 py-14'>
        <div className='flex flex-col gap-4 lg:gap-10 justify-between'>
          <div className='relative w-fit mx-auto'>
            <Image
              src={mission}
              alt='hero image'
              width={300}
              height={300}
              className='object-cover rounded-lg relative z-10 shadow-xl bg-fuchsia-500'
            />
            <div
              aria-hidden='true'
              className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-red-400 w-full h-full'
            ></div>
          </div>
          <div className='flex flex-col justify-center text-center'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Mission</p>
            <p className='max-w-screen-md mx-auto font-medium lg:text-2xl'>
              We are driven by the belief that geoscience holds the key to
              understanding our planet, and addressing global challenges.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:gap-8 justify-between'>
          <div className='relative w-fit mx-auto'>
            <Image
              src={`https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt='hero image'
              width={400}
              height={500}
              className='object-cover rounded-lg relative z-10 shadow-xl bg-fuchsia-500'
            />
            <div
              aria-hidden='true'
              className='absolute top-3 -left-2.5 rounded-lg border-dashed border-2 border-red-400 w-full h-full'
            ></div>
          </div>
          <div className='flex flex-col justify-center text-center'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Vision</p>
            <p className='max-w-screen-md mx-auto font-medium lg:text-2xl'>
              To be the leading resource center for everything geoscience from
              knowledge, to practical application and solutions.
            </p>
          </div>
        </div>
      </section>
      {/* People section */}
      <section className='px-6 md:px-8 lg:px-24 py-14'>
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
      </section>
    </>
  );
}

export default About;
