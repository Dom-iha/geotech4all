import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  // const searchParams = req.nextUrl.searchParams;
  // const query = searchParams.get('category');

  try {
    const articles = await prisma.article.findMany({
      // where: { categoryName: query || 'news' },
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
