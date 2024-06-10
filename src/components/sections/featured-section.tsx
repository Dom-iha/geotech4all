'use client';
import Link from 'next/link';
import Image from 'next/image';
import Fade from '../shared/fade';
import Reveal from '../shared/reveal';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../shared/max-width-wrapper';

interface FeaturedSectionProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  featured: Boolean;
  views: number;
  authorId: string;
  categoryName: string;
}

function FeaturedSection({ articles }: { articles: FeaturedSectionProps[] }) {
  const featuredArticles = articles.filter((article) => article.featured);
  const [indexToShow, setIndexToShow] = useState(0);

  useEffect(() => {
    if (featuredArticles.length <= 1) return;

    const interval = setInterval(() => {
      setIndexToShow((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, [indexToShow, featuredArticles]);

  const shorten = (sentence: string) => {
    if (sentence.length > 150) {
      return sentence.slice(0, 150) + '...';
    } else {
      return sentence;
    }
  };

  if (!featuredArticles.length) return null;

  return (
    <section className='py-14'>
      <MaxWidthWrapper>
        <h2 className='font-bold text-2xl lg:text-4xl xl:mb-12'>
          Featured posts
        </h2>
        <div className='flex flex-col gap-8 xl:flex-row lg:gap-20'>
          <Fade>
            <Image
              src={featuredArticles[indexToShow].image}
              alt={featuredArticles[indexToShow].excerpt}
              width={500}
              height={420}
              className='rounded-md hidden xl:block aspect-video'
            />
          </Fade>
          <ul className='flex flex-col gap-8'>
            {featuredArticles.map((featuredArticle, index) => (
              <li key={featuredArticle.id}>
                <Reveal>
                  <div className='pl-4 relative'>
                    <Link
                      href={`/blog/${featuredArticles[index].slug}`}
                      className={`hover:underline text-lg lg:text-3xl font-semibold mb-2.5 before:absolute before:bg-accent/70 before:h-full before:w-1.5 before:top-0 before:left-0 before:transition before:duration-500 before:hover:origin-bottom before:hover:scale-y-0 ${
                        indexToShow === index
                          ? 'before:scale-y-100 before:origin-bottom'
                          : 'before:scale-y-0 before:origin-top'
                      }`}
                    >
                      {featuredArticles[index].title}
                    </Link>
                  </div>
                </Reveal>
                <Reveal>
                  <p className='lg:mt-2 pl-4 lg:text-xl'>
                    {shorten(featuredArticles[index].excerpt)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default FeaturedSection;
