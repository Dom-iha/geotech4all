'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';

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

  if(!featuredArticles.length) return null;

  return (
    <section className='px-6 md:px-8 lg:px-24 py-14'>
      <h2 className='font-bold text-2xl lg:text-4xl mb-6 md:mb-12'>
        Featured posts
      </h2>
      <div className='flex items-c flex-col gap-8 lg:flex-row lg:gap-24'>
         <Image
         src={featuredArticles[indexToShow].image}
         alt={featuredArticles[indexToShow].excerpt}
         width={500}
         height={420}
         className='rounded-md max-md:hidden lg:max-w-[420px] lg:max-h-[300px]'
         />
        <ul className='flex flex-col gap-8'>
          {featuredArticles.slice(0, 2).map((featuredArticle, index) => (
            <li key={featuredArticle.id}>
              <div className='pl-4 relative'>
                <Link
                  href={`/blog/${featuredArticles[index].slug}`}
                  className={`hover:underline text-lg lg:text-3xl font-semibold mb-2.5 before:absolute before:bg-accent/70 before:h-full before:w-1.5 before:top-0 before:left-0 before:transition before:duration-500 before:hover:origin-bottom before:hover:scale-y-0 ${indexToShow === index ? 'before:scale-y-100 before:origin-bottom' : 'before:scale-y-0 before:origin-top'}`}
                >
                  {featuredArticles[index].title}
                </Link>
              </div>
              <p className='lg:mt-2 pl-4 lg:text-xl'>
                {shorten(featuredArticles[index].excerpt)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedSection;
