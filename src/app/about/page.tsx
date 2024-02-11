import Image from 'next/image';
import jerry from '../../../public/assets/images/jerry.png';
import edna from '../../../public/assets/images/edna.png';
import gabriel from '../../../public/assets/images/gabriel.png';
import Link from 'next/link';

function About() {
  return (
    <>
      <section className='px-24 py-14'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-8xl text-center font-bold mt-3'>About Us</h1>
          <p className='text-center mt-4 text-2xl max-w-[900px] font-medium'>
            Redefining Geology with Technology.
          </p>
          <Link
            href='#mission'
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
      <section id='mission' className='px-24 py-14'>
        <div className='flex gap-8 justify-between'>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-5'>Our Mission</p>
            <p className='max-w-[500px] font-medium text-2xl'>
              We are driven by the belief that geoscience holds the key to
              understanding our planet, and addressing global challenges.
            </p>
          </div>
          <div className='w-[500px] h-[500px] bg-accent'></div>
        </div>
        <div className='flex gap-8 justify-between'>
          <div className='w-[500px] h-[500px] bg-accent'></div>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-4xl mb-5'>Our Vision</p>
            <p className='max-w-[500px] font-medium text-2xl'>
              To be the leading resource center for everything geoscience from
              knowledge, to practical application and solutions.
            </p>
          </div>
        </div>
      </section>
      {/* People section */}
      <section className='px-24 py-14'>
        <h2 className='font-bold text-4xl mb-5'>Meet the team</h2>
        <article className='flex flex-col gap-8'>
          <div className='flex'>
            <Image src={jerry} alt='jeremiah oladipupo' />
            <div className='bg-accent text-main p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-2xl font-bold'>Jeremiah Oladipupo</h3>
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
          <div className='flex gap-'>
            <div className='bg-accent text-main p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-2xl font-bold'>Edna Osaghele</h3>
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
            <Image src={edna} alt='edna osaghele' className='' />
          </div>
          <div className='flex gap-'>
            <Image src={gabriel} alt='gabriel bahago' />
            <div className='bg-accent text-main p-20 flex flex-col gap-4'>
              <div>
                <h3 className='text-2xl font-bold'>Gabriel Bahago</h3>
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
