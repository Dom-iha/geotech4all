import { auth, currentUser } from '@clerk/nextjs';

export const getUser = async () => {
  const { userId } = auth();
  const user = await currentUser();
  return { userId, user };
};
