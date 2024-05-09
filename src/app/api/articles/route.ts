import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
   try {
     const articles = await prisma.article.findMany({
       include: { author: true },
     });
     if (articles) {
       return Response.json(articles, { status: 200 });
     }
   } catch (error) {
     return new NextResponse(JSON.stringify('Something went wrong!'), {
       status: 500,
     });
   }
};
 