import { SignIn } from '@clerk/nextjs';

function Page() {
  return (
    <div className='grid place-content-center min-h-screen'>
      <SignIn path='/sign-in'/>
    </div>
  );
}

export default Page;