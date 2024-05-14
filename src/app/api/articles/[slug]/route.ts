import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  const ipAddress = req.ip; // I need to handle multiple requsts from the same ip in a short timeframe and prevent incrementing the view count

  try {
    const article = await prisma.article.update({
      where: {
        slug: slug,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }
    return new NextResponse(JSON.stringify(article), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify('Something went wrong!'), {
      status: 500,
    });
  }
};

