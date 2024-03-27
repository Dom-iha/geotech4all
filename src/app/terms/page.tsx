import { Contract } from '@/components/Icons';

function Terms() {
  return (
    <>
      <div className='min-h-screen max-w-[90rem] mx-auto grid content-center gap-6 lg:gap-8 px-6 md:px-8 lg:px-24'>
        <Contract />
        <h1 className='text-3xl lg:text-6xl font-bold text-accent'>
          Terms & Conditions
        </h1>
        <p className='font-medium text-lg lg:text-3xl lg:max-w-screen-lg text-accent'>
          The Geotech4All platform requires your personal information through
          Verification which is necessary for the performance of our obligations
          towards you and providing you with our services. When you use our
          services, you consent to the collection, storage, use, disclosure and
          other uses of your Personal Information as described in this Privacy
          Policy.
        </p>
      </div>
    </>
  );
}

export default Terms;
