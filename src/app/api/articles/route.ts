import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const articles = await prisma.article.findMany();
    return new NextResponse(
      JSON.stringify({ message: 'Here you go', status: 200, data: articles })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'An error occured', status: 500 })
    );
  }
};
