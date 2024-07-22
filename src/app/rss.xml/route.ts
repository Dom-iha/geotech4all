import { Feed } from 'feed';
import { siteConfig } from '@/config/site';
import prisma from '@/lib/db';

export async function GET() {
  const articles = await prisma.article.findMany({
    include: { author: true },
  });

  const feed = new Feed({
    title: 'Geotech4all Blog',
    description: siteConfig.description,
    id: siteConfig.url,
    link: `${siteConfig.url}/blog/`,
    language: 'en',
    image: `${siteConfig.url}/opengraph-image.png`,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      siteConfig.title
    }`,
    updated: new Date(),
    generator: 'https://github.com/jpmonette/feed',
    author: {
      name: 'Taqib',
      email: 'johndoe@example.com',
      link: 'https://github.com/taqh',
    },
  });

  articles.forEach((article) => {
    feed.addItem({
      title: article.title,
      id: `${siteConfig.url}/blog/${article.slug}`,
      link: `${siteConfig.url}/blog/${article.slug}`,
      description: article.excerpt,
      author: [
        {
          name: article.author.name ?? 'Geotech4All',
          link:
            article.author.linkedin ??
            'https://linkedin.com/company/geotech4all',
        },
      ],
      date: article.createdAt,
      image: article.image,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
