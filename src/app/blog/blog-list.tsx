'use client';
import Article from '@/components/cards/article';
import { ArticleResponseType } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

function BlogList({ articles }: { articles: ArticleResponseType[] }) {
  return (
    <motion.ul
      layout
      className='grid grid-cols-[repeat(auto-fill,_minmax(19rem,_1fr))] gap-8 lg:gap-10 justify-center'
    >
      <AnimatePresence>
        {articles.map((article) => (
          <Article
            id={article.id}
            key={article.id}
            slug={article.slug}
            title={article.title}
            image={article.image}
            author={article.author}
            createdAt={article.createdAt}
            category={article.categoryName}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

export default BlogList;
