import { auth, currentUser } from '@clerk/nextjs';
import  Link  from 'next/link';

async function Dashboard() {
  // const { userId } = auth();
  // const user = await currentUser();
  // const placeholderUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <section className={`h-full`}>
      <div className='sticky top-[60px] min-h-[40vh] flex items-center justify-center p-5 bg-[100%_50%] bg-[url(https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
        <h1 className='text-main text-2xl lg:text-4xl font-bold text-center'>
          Welcome
        </h1>
      </div>
      <div className='bg-alt relative p-6 grid place-content-center bg-mainBg min-h-[calc(70vh-60px)]'>
        some stuff
      </div>
    </section>
  );
}

export default Dashboard;
