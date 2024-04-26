import { auth, currentUser } from '@clerk/nextjs';
import { Edit } from 'lucide-react';
import Image from 'next/image';
import data from '@/data/data.json';
import Post from '@/components/cards/post';
import Link from 'next/link';

async function Profile() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return (
      <div className='min-h-screen grid place-content-center'>
        <h1>Can&apos;t access this page without logging in</h1>
      </div>
    );
  }
  // console.log(user);

  return (
    <section className='min-h-[calc(100vh-60px)] py-20'>
      <div className='max-w-screen-md mx-auto'>
        <div className='flex flex-col md:flex-row-reverse justify-between pb-4 border-b'>
          <Link
            href={'./profile/edit'}
            className='flex gap-2 h-fit px-8 py-3 rounded-md  text-main bg-accent/80 border-2 border-transparent hover:text-accent hover:bg-accent/10 hover:border-accent transition duration-300'
          >
            <Edit />
            <span>Edit Profile</span>
          </Link>
          <div className='flex gap-6'>
            <Image
              src={user.imageUrl}
              alt={`${user.username}'s profile picture`}
              width={100}
              height={100}
              className='h-100 w-100 rounded-md'
            />
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-xl'>{user.firstName}</p>
              <p className='font-medium text-lg'>
                {user.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* posts section */}
        <div className='mt-10'>
          <div className='shadow-md rounded-md bg-accent/80 w-fit text-main'>
            <button type='button' className='px-4 py-2 rounded-md'>Posts</button>
            <button type='button' className='px-4 py-2 rounded-md'>Popular</button>
          </div>

          <div className='flex flex-col gap-6 mt-10'>
            {data.articles.slice(-3).map((article) => (
              <Post
                key={article.id}
                title={article.excerpt}
                image={user.imageUrl}
                username={user.firstName}
                tag={article.category}
                date={article.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
