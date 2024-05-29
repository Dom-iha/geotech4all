import prisma from '@/lib/db';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import StatsSection from '@/components/sections/stats-section';
import FeaturedSection from '@/components/sections/featured-section';
import ShowcaseSection from '@/components/sections/showcase-section';
import CommunitySection from '@/components/sections/community-section';
import TestimonialSection from '@/components/sections/testimonial-section';

export default async function Home() {
  const articles = await prisma.article.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 2,
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <StatsSection />
      <TestimonialSection />
      <FeaturedSection articles={articles} />
      <CommunitySection/>
    </>
  );
}
