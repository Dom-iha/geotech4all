'use client';
import { useRouter } from 'next/navigation';

const authenticated = false;

function Dashboard() {
  const router = useRouter();
  if (!authenticated) {
    return router.push('/auth/login');
  } else {
    return (
      <div className='min-h-[92vh] grid place-items-center'>
        <h1 className='text-4xl'>Admin page</h1>
      </div>
    );
  }
}

export default Dashboard;
