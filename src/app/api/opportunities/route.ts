import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const categories = await prisma.opportunity.findMany();
    return new NextResponse(JSON.stringify(categories), {status: 200});
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('Something went wrong'), {status: 500});
  }
};