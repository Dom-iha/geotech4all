'use client';
import Article from '@/components/cards/article';
import { ArticleResponseType } from '@/types';
import { User } from '@prisma/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
interface ArticleProps {
  id: string;
  title: string;
  image: string;
  categoryName: string;
  createdAt: Date;
  author: User;
  slug: string;
}

function BlogList({ articles }: { articles: ArticleProps[] }) {
  const [articlesPerPage, setArticlesPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  const showMoreArticles = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000))
      .then(() => setArticlesPerPage((prev) => prev + 9))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <motion.ul
        layout
        className='grid grid-cols-[repeat(auto-fill,_minmax(19rem,_1fr))] gap-8 md:gap-12 lg:gap-16 justify-center'
      >
        <AnimatePresence>
          {articles.slice(0, articlesPerPage).map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </AnimatePresence>
      </motion.ul>
      {articles.length > articlesPerPage && (
        <button
          type='button'
          onClick={showMoreArticles}
          disabled={loading}
          className='text-main bg-accent w-fit mx-auto rounded-md py-2.5 px-4 my-8 disabled:opacity-70 flex items-center gap-3'
        >
          {loading && <Loader2 className='w-4 h-4 animate-spin transition' />}
          {loading ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}

export default BlogList;
