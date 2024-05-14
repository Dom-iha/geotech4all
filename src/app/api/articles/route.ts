import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  try {
    const articles = await prisma.article.findMany({
      include: { author: true },
    });
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('Something went wrong'), {
      status: 500,
    });
  }
};
