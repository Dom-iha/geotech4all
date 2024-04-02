import type { Metadata } from 'next';
import Image from 'next/image';
import jerry from '../../../public/assets/images/jerry.png';
import gabriel from '../../../public/assets/images/gabriel.png';
import edna from '../../../public/assets/images/edna.png';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About'
}

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
            of geoscientists and tech enthusiasts committed to making geoscience
            knowledge and tools accessible to everyone.
          </p>
          <Link
            href='#info'
            className='cursor-pointer relative group overflow-hidden border-2 px-10 py-3 border-accent w-fit rounded-md'
          >
            <span className='uppercase tracking-widest font-medium text-main text-lg relative z-10 group-hover:text-accent duration-500'>
              Tell me more
            </span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:-translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 group-hover:translate-x-full h-full'></span>
            <span className='absolute top-0 left-0 w-full bg-accent duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
            <span className='absolute delay-300 top-0 left-0 w-full bg-accent duration-500 group-hover:translate-y-full h-full'></span>
          </Link>
        </div>
      </section>
      <section
        id='info'
        className='p-6 md:px-8 lg:px-24 flex flex-col md:flex-row gap-6 justify-between'
      >
        <div className='flex flex-col gap-4 lg:gap-6 h-full'>
          <h2 className='text-2xl lg:text-4xl font-bold mt-4'>The Problem</h2>
          <p className='mt-4 text-xl lg:text-2xl max-w-[50ch]'>
            The geoscience industry is plagued by a lack of access to knowledge
            & tools, and a shortage of skilled professionals. This has led to a
            gap in the industry, and a lack of innovation in the field.
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:gap-6 h-full'>
          <h2 className='text-2xl lg:text-4xl font-bold mt-4'>Our Approach</h2>
          <p className='mt-4 text-xl lg:text-2xl max-w-[50ch] '>
            We are on a mission to bridge the gap in the geoscience industry by
            providing access to knowledge, tools and resources. Our goal is to
            empower individuals and organizations with the skills and tools they
            need to succeed in the geoscience industry.
          </p>
        </div>
      </section>
      <section className='max-lg:flex flex-col gap-8 px-6 md:px-8 lg:px-24 py-14'>
        <div className='flex max-lg:flex-col gap-4 lg:gap-8 justify-between'>
          <div className='w-full h-[250px] lg:w-[500px] lg:h-[400px] bg-accent lg:order-2'></div>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Mission</p>
            <p className='max-w-[500px] font-medium lg:text-2xl'>
              We are driven by the belief that geoscience holds the key to
              understanding our planet, and addressing global challenges.
            </p>
          </div>
        </div>
        <div className='flex max-lg:flex-col gap-4 lg:gap-8 justify-between'>
          <div className='w-full h-[250px] lg:w-[500px] lg:h-[400px] bg-accent'></div>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-2xl lg:text-4xl mb-5'>Our Vision</p>
            <p className='max-w-[500px] font-medium lg:text-2xl'>
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
          <div className='flex flex-col lg:flex-row'>
            <Image src={jerry} alt='jeremiah oladipupo' />
            <div className='p-6 md:p-8 lg:bg-accent lg:text-main lg:p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-lg lg:text-2xl font-bold'>
                  Jeremiah Oladipupo
                </h3>
                <p className='font-bold'>CEO & Founder</p>
              </div>
              <p>
                A visionary geologist and enterpreneur, Jeremiah’s passion for
                geoscience and community development led him found Geotech4All.
                With his extensive experience in research, exploration and
                project management, Jeremiah provides strategic direction and
                unwavering leadership to the company.
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <Image src={edna} alt='enda osaghele' />
            <div className='p-6 md:p-8 lg:bg-accent lg:text-main lg:p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-lg lg:text-2xl font-bold'>Edna Osagehle</h3>
                <p className='font-bold'>Co Founder</p>
              </div>
              <p>
                Co-founder of Geotech4All, is a skilled professional
                specializing in engineering geology. With expertise in data
                acquisition, processing and report writing, Edna brings valuable
                insight into the team.. Her commitment to advancing geospatial
                solutions is pivotal in Geotech4All’s mission of making
                geospatial technology available to everyone.
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <Image src={gabriel} alt='Gabriel Bahago' />
            <div className='p-6 md:p-8 lg:bg-accent lg:text-main lg:p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-lg lg:text-2xl font-bold'>
                  Gabriel Bahago
                </h3>
                <p className='font-bold'>Co Founder</p>
              </div>
              <p>
                Co-founder of Geotech4All, is a visionary leader with deep
                understanding of geospatial technologies. His expertise spans
                GIS, remote sensing and environmental modeling. Committed to
                making geospatial knowledge available, Gabriel plays a key role
                in empowering diverse communities through Geotech4All.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
