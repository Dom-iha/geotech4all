import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return Response.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('Something went wrong'), {
      status: 500,
    });
  }
};

