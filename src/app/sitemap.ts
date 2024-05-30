import prisma from '@/lib/db';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // fetch all blog posts to index their urls
  const articles = await prisma.article.findMany();

  //   return a sitemap object for each blog post
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: article.updatedAt
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/geohub`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...blogPages
  ];
}
