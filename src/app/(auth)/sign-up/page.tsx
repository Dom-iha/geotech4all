import { SignUp } from '@clerk/nextjs';

function Page() {
  return (
    <div className='grid place-content-center min-h-screen'>
      <SignUp path='/sign-up' />
    </div>
  );
}

export default Page;
